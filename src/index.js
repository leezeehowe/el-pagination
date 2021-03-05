class PaginationItem {

  constructor(text) {
    const ele = document.createElement('button');
    ele.innerText = text;
    this.el = ele;
    this.el.onmouseover = () => {
      this.el.style.backgroundColor = '#ddd';
    }
    this.onMouseHover()();
    this.onInActive()
  }

  _defaultStyle() {
    return {
      margin: '0 3px',
      padding: '3px 10px',
      border: '1px solid #ddd',
      cursor: 'pointer'
    }
  }

  onInActive() {
    const style = {
      backgroundColor: 'white',
      color: '#009a61'
    }
    const s = Object.assign(this._defaultStyle(), style);
    Object.keys(s).forEach(k => {
      this.el.style[k] = s[k];
    })
    this.active = false;
  }

  onActive() {
    const style = {
      backgroundColor: '#009a61',
      color: 'white'
    }
    const s = Object.assign(this._defaultStyle(), style);
    Object.keys(s).forEach(k => {
      this.el.style[k] = s[k];
    })
    this.active = true;
  }

  onMouseHover() {
    let previousColor;
    return () => {
      this.el.onmouseover = () => {
        if (!this.active) {
          previousColor = this.el.style.backgroundColor
          this.el.style.backgroundColor = '#ddd';
        }
      }
      this.el.onmouseout = () => {
        if (!this.active) {
          this.el.style.backgroundColor = previousColor;
        }
      }
    }
  }

  setVisible(val) {
    const bool = Boolean(val);
    this.el.style.display = bool ? 'inline-block' : 'none';
    return this.el;
  }

  setDisable(val) {
    if (Boolean(val)) {
      this.el.setAttribute('disabled', true)
      this.el.style.color = 'grey';
    }
    else {
      this.el.removeAttribute('disabled');
    }
    return this.el;
  }
}

class PageChangeEvent extends Event {

  constructor(currentPage) {
    super('pagechange')
    this.currentPage = currentPage;
  }
}

class ElPagination extends HTMLDivElement {

  constructor() {
    super();
    this.MODE = {
      spa: (newCurrentPage) => {
        this.reactiveSetCurrent(newCurrentPage)
      },
      mpa: (newCurrentPage) => {
        let searchUrl = replaceParamValue('page', newCurrentPage, window.location.search);
        console.log('replaceParamValue', searchUrl);
        searchUrl = searchUrl.startsWith('?') ? searchUrl.substr(1) : searchUrl;
        window.location.href = window.location.pathname + '?' + replaceParamValue('page', newCurrentPage, window.location.search);
      }
    }
    this._injectItemEl();
    this.reactiveAdjustPosition(
      this.hasAttribute('position') ? this.getAttribute('position') : 'center'
    );
    // 有bug，这里不加onload事件监听的话，初始化时的pagechange事件无法抛出
    window.onload = () => {
      const page = Number(getParamFromUrl('page'));
      this.reactiveSetCurrent(Number.isNaN(page) || page < 1 ? 1 : page);
    }
  }

  getMode() {
    const mode = this.hasAttribute('mode') ? this.getAttribute('mode') : 'spa';
    const optionalVal = Object.keys(this.MODE);
    return optionalVal.includes(mode) ? mode : optionalVal[0];
  }

  getTotal() {
    const total = this.hasAttribute('total') ? this.getAttribute('total') : 5;
    return Number(total);
  }

  getCurrent() {
    return Number(this.current);
  }

  getMaxShow() {
    return this.hasAttribute('max-show') ? this.getAttribute('max-show') : 5;
  }

  reactiveSetCurrent(currentPage) {
    currentPage = Number(currentPage)
    this.current = currentPage;
    this._toggleItemStyle(currentPage);
    this._toggleFunctionalItem(currentPage);
    this._slideItemFrame(currentPage);
    this.dispatchEvent(new PageChangeEvent(currentPage));
  }

  reactiveAdjustPosition(str) {
    this.style.display = 'inline-block';
    this.parentNode.style.textAlign = str;
  }

  _toggleItemStyle(currentPage) {
    this.paginatinEleList.forEach(i => {
      i.onInActive();
    })
    console.log('currentPage', currentPage)
    this.paginatinEleList.find(i => i.el.innerText == currentPage).onActive()
  }

  _toggleFunctionalItem(currentPage) {
    const { paginatinEleList } = this;
    if (currentPage === 1) {
      paginatinEleList[0].setDisable(true);
    }
    else {
      paginatinEleList[0].setDisable(false);
    }
    if (currentPage === this.getTotal()) {
      paginatinEleList[this.paginatinEleList.length - 1].setDisable(true)
    }
    else {
      paginatinEleList[this.paginatinEleList.length - 1].setDisable(false)
    }
  }

  _slideItemFrame(currentPage) {
    const maxShow = this.getMaxShow();
    currentPage = Number(currentPage);
    /**
     * 获取当指定cur的闭区间
     * @param {*} cur 
     * @param {*} total 闭区间元素总数 
     * @param {*} max 右区间最大值，左区间最小值默认为1
     */
    function range(cur, total, max) {
      let left, right, nextLeft, count;
      left = right = cur;
      count = total - 1;
      nextLeft = true;
      while (count > 0) {
        if (nextLeft && left - 1 > 0) {
          left--;
          count--;
        }
        else if (!nextLeft && right + 1 <= max) {
          right++;
          count--;
        }
        nextLeft = !nextLeft;
      }
      return {
        left,
        right
      }
    }

    const rangeResult = range(currentPage, maxShow, this.getTotal());

    this.paginatinEleList.filter(i => {
      return !Number.isNaN(Number(i.el.innerText))
    }).forEach(i => {
      const num = Number(i.el.innerText);
      i.setVisible(num >= rangeResult.left && num <= rangeResult.right);
    })

    this._toggleIndent(rangeResult)
  }

  _toggleIndent(rangeResult) {
    if (rangeResult.left > 1) {
      this.insertBefore(this.leftIndentEle.el, this.childNodes[1])
    }
    else {
      removeChildIfExist(this, this.leftIndentEle.el)
    }

    if (rangeResult.right < this.getTotal()) {
      const childNodes = this.childNodes;
      this.insertBefore(this.rightIndentEle.el, childNodes[childNodes.length - 1])
    }
    else {
      removeChildIfExist(this, this.rightIndentEle.el)
    }
  }

  _injectItemEl() {
    const itemEleArr = [];
    for (let index = 1; index <= this.getTotal(); index++) {
      const element = new PaginationItem(index);
      itemEleArr.push(element);
    }
    itemEleArr.unshift(new PaginationItem('上一页'));
    itemEleArr.push(new PaginationItem('下一页'));
    itemEleArr.forEach(element => {
      element.el.addEventListener('click', (ev) => {
        const currentPage = this.getCurrent();
        let newCurrentPage = ev.target.innerText;
        if (newCurrentPage == '上一页') {
          newCurrentPage = currentPage - 1;
        }
        if (newCurrentPage == '下一页') {
          newCurrentPage = currentPage + 1;
        }
        this.MODE[this.getMode()](newCurrentPage);
      })
    })
    this.append(...itemEleArr.map(i => i.el))
    this.paginatinEleList = itemEleArr;
    this._injectIndenet()
  }

  _injectIndenet() {
    const rightIndentEle = new PaginationItem('...');
    const leftIndentEle = new PaginationItem('...');

    rightIndentEle.setDisable(true);
    rightIndentEle.setVisible(true);
    leftIndentEle.setDisable(true);
    leftIndentEle.setVisible(true);

    this.rightIndentEle = rightIndentEle;
    this.leftIndentEle = leftIndentEle;

  }

}

function removeChildIfExist(node, childNode) {
  if (!node || !childNode || !node.hasChildNodes()) {
    return;
  }
  for (let i of node.childNodes) {
    if (i === childNode) {
      node.removeChild(i);
    }
  }
}

function getParamFromUrl(key) {
  const searchUrl = window.location.search;
  if(!searchUrl) {
    return '';
  }
  const reg = new RegExp(`${key}=[^&]*&{0,1}`);
  let res = searchUrl.match(reg);
  if(!res || res.length === 0) {
    return '';
  }
  res = res[0];
  // 正则可能会匹配出来 k=v& 或者 k=v
  res = res.endsWith('&', res.length) ? res.substr(0, res.length - 1) : res;
  return res.substring(res.indexOf('=') + 1);
}

function replaceParamValue(key, value, targetStr) {
  targetStr = targetStr
  .replace(new RegExp(/^\??/), '')
  .replace(new RegExp(`${key}=[^&]&?`), '')
  .replace(new RegExp(/&$/), '');
  if(targetStr) {
    return [targetStr, `${key}=${value}`].join('&');
  }
  else {
    return `${key}=${value}`;
  }
}

customElements.define('el-pagination', ElPagination, {
  extends: 'div'
})


