(function () {
  'use strict';

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var PaginationItem = /*#__PURE__*/function () {
    function PaginationItem(text) {
      var _this = this;

      _classCallCheck(this, PaginationItem);

      var ele = document.createElement('button');
      ele.innerText = text;
      this.el = ele;

      this.el.onmouseover = function () {
        _this.el.style.backgroundColor = '#ddd';
      };

      this.onMouseHover()();
      this.onInActive();
    }

    _createClass(PaginationItem, [{
      key: "_defaultStyle",
      value: function _defaultStyle() {
        return {
          margin: '0 3px',
          padding: '3px 10px',
          border: '1px solid #ddd',
          cursor: 'pointer'
        };
      }
    }, {
      key: "onInActive",
      value: function onInActive() {
        var _this2 = this;

        var style = {
          backgroundColor: 'white',
          color: '#009a61'
        };
        var s = Object.assign(this._defaultStyle(), style);
        Object.keys(s).forEach(function (k) {
          _this2.el.style[k] = s[k];
        });
        this.active = false;
      }
    }, {
      key: "onActive",
      value: function onActive() {
        var _this3 = this;

        var style = {
          backgroundColor: '#009a61',
          color: 'white'
        };
        var s = Object.assign(this._defaultStyle(), style);
        Object.keys(s).forEach(function (k) {
          _this3.el.style[k] = s[k];
        });
        this.active = true;
      }
    }, {
      key: "onMouseHover",
      value: function onMouseHover() {
        var _this4 = this;

        var previousColor;
        return function () {
          _this4.el.onmouseover = function () {
            if (!_this4.active) {
              previousColor = _this4.el.style.backgroundColor;
              _this4.el.style.backgroundColor = '#ddd';
            }
          };

          _this4.el.onmouseout = function () {
            if (!_this4.active) {
              _this4.el.style.backgroundColor = previousColor;
            }
          };
        };
      }
    }, {
      key: "setVisible",
      value: function setVisible(val) {
        var bool = Boolean(val);
        this.el.style.display = bool ? 'inline-block' : 'none';
        return this.el;
      }
    }, {
      key: "setDisable",
      value: function setDisable(val) {
        if (Boolean(val)) {
          this.el.setAttribute('disabled', true);
          this.el.style.color = 'grey';
        } else {
          this.el.removeAttribute('disabled');
        }

        return this.el;
      }
    }]);

    return PaginationItem;
  }();

  var PageChangeEvent = /*#__PURE__*/function (_Event) {
    _inherits(PageChangeEvent, _Event);

    var _super = _createSuper(PageChangeEvent);

    function PageChangeEvent(currentPage) {
      var _this5;

      _classCallCheck(this, PageChangeEvent);

      _this5 = _super.call(this, 'pagechange');
      _this5.currentPage = currentPage;
      return _this5;
    }

    return PageChangeEvent;
  }( /*#__PURE__*/_wrapNativeSuper(Event));

  var ElPagination = /*#__PURE__*/function (_HTMLDivElement) {
    _inherits(ElPagination, _HTMLDivElement);

    var _super2 = _createSuper(ElPagination);

    function ElPagination() {
      var _this6;

      _classCallCheck(this, ElPagination);

      _this6 = _super2.call(this);
      _this6.MODE = {
        spa: function spa(newCurrentPage) {
          _this6.reactiveSetCurrent(newCurrentPage);
        },
        mpa: function mpa(newCurrentPage) {
          var searchUrl = replaceParamValue('page', newCurrentPage, window.location.search);
          console.log('replaceParamValue', searchUrl);
          searchUrl = searchUrl.startsWith('?') ? searchUrl.substr(1) : searchUrl;
          window.location.href = window.location.pathname + '?' + replaceParamValue('page', newCurrentPage, window.location.search);
        }
      };

      _this6._injectItemEl();

      _this6.reactiveAdjustPosition(_this6.hasAttribute('position') ? _this6.getAttribute('position') : 'center'); // 有bug，这里不加onload事件监听的话，初始化时的pagechange事件无法抛出


      window.onload = function () {
        var page = Number(getParamFromUrl('page'));

        _this6.reactiveSetCurrent(Number.isNaN(page) || page < 1 ? 1 : page);
      };

      return _this6;
    }

    _createClass(ElPagination, [{
      key: "getMode",
      value: function getMode() {
        var mode = this.hasAttribute('mode') ? this.getAttribute('mode') : 'spa';
        var optionalVal = Object.keys(this.MODE);
        return optionalVal.includes(mode) ? mode : optionalVal[0];
      }
    }, {
      key: "getTotal",
      value: function getTotal() {
        var total = this.hasAttribute('total') ? this.getAttribute('total') : 5;
        return Number(total);
      }
    }, {
      key: "getCurrent",
      value: function getCurrent() {
        return Number(this.current);
      }
    }, {
      key: "getMaxShow",
      value: function getMaxShow() {
        return this.hasAttribute('max-show') ? this.getAttribute('max-show') : 5;
      }
    }, {
      key: "reactiveSetCurrent",
      value: function reactiveSetCurrent(currentPage) {
        currentPage = Number(currentPage);
        this.current = currentPage;

        this._toggleItemStyle(currentPage);

        this._toggleFunctionalItem(currentPage);

        this._slideItemFrame(currentPage);

        this.dispatchEvent(new PageChangeEvent(currentPage));
      }
    }, {
      key: "reactiveAdjustPosition",
      value: function reactiveAdjustPosition(str) {
        this.style.display = 'inline-block';
        this.parentNode.style.textAlign = str;
      }
    }, {
      key: "_toggleItemStyle",
      value: function _toggleItemStyle(currentPage) {
        this.paginatinEleList.forEach(function (i) {
          i.onInActive();
        });
        console.log('currentPage', currentPage);
        this.paginatinEleList.find(function (i) {
          return i.el.innerText == currentPage;
        }).onActive();
      }
    }, {
      key: "_toggleFunctionalItem",
      value: function _toggleFunctionalItem(currentPage) {
        var paginatinEleList = this.paginatinEleList;

        if (currentPage === 1) {
          paginatinEleList[0].setDisable(true);
        } else {
          paginatinEleList[0].setDisable(false);
        }

        if (currentPage === this.getTotal()) {
          paginatinEleList[this.paginatinEleList.length - 1].setDisable(true);
        } else {
          paginatinEleList[this.paginatinEleList.length - 1].setDisable(false);
        }
      }
    }, {
      key: "_slideItemFrame",
      value: function _slideItemFrame(currentPage) {
        var maxShow = this.getMaxShow();
        currentPage = Number(currentPage);
        /**
         * 获取当指定cur的闭区间
         * @param {*} cur 
         * @param {*} total 闭区间元素总数 
         * @param {*} max 右区间最大值，左区间最小值默认为1
         */

        function range(cur, total, max) {
          var left, right, nextLeft, count;
          left = right = cur;
          count = total - 1;
          nextLeft = true;

          while (count > 0) {
            if (nextLeft && left - 1 > 0) {
              left--;
              count--;
            } else if (!nextLeft && right + 1 <= max) {
              right++;
              count--;
            }

            nextLeft = !nextLeft;
          }

          return {
            left: left,
            right: right
          };
        }

        var rangeResult = range(currentPage, maxShow, this.getTotal());
        this.paginatinEleList.filter(function (i) {
          return !Number.isNaN(Number(i.el.innerText));
        }).forEach(function (i) {
          var num = Number(i.el.innerText);
          i.setVisible(num >= rangeResult.left && num <= rangeResult.right);
        });

        this._toggleIndent(rangeResult);
      }
    }, {
      key: "_toggleIndent",
      value: function _toggleIndent(rangeResult) {
        if (rangeResult.left > 1) {
          this.insertBefore(this.leftIndentEle.el, this.childNodes[1]);
        } else {
          removeChildIfExist(this, this.leftIndentEle.el);
        }

        if (rangeResult.right < this.getTotal()) {
          var childNodes = this.childNodes;
          this.insertBefore(this.rightIndentEle.el, childNodes[childNodes.length - 1]);
        } else {
          removeChildIfExist(this, this.rightIndentEle.el);
        }
      }
    }, {
      key: "_injectItemEl",
      value: function _injectItemEl() {
        var _this7 = this;

        var itemEleArr = [];

        for (var index = 1; index <= this.getTotal(); index++) {
          var element = new PaginationItem(index);
          itemEleArr.push(element);
        }

        itemEleArr.unshift(new PaginationItem('上一页'));
        itemEleArr.push(new PaginationItem('下一页'));
        itemEleArr.forEach(function (element) {
          element.el.addEventListener('click', function (ev) {
            var currentPage = _this7.getCurrent();

            var newCurrentPage = ev.target.innerText;

            if (newCurrentPage == '上一页') {
              newCurrentPage = currentPage - 1;
            }

            if (newCurrentPage == '下一页') {
              newCurrentPage = currentPage + 1;
            }

            _this7.MODE[_this7.getMode()](newCurrentPage);
          });
        });
        this.append.apply(this, _toConsumableArray(itemEleArr.map(function (i) {
          return i.el;
        })));
        this.paginatinEleList = itemEleArr;

        this._injectIndenet();
      }
    }, {
      key: "_injectIndenet",
      value: function _injectIndenet() {
        var rightIndentEle = new PaginationItem('...');
        var leftIndentEle = new PaginationItem('...');
        rightIndentEle.setDisable(true);
        rightIndentEle.setVisible(true);
        leftIndentEle.setDisable(true);
        leftIndentEle.setVisible(true);
        this.rightIndentEle = rightIndentEle;
        this.leftIndentEle = leftIndentEle;
      }
    }]);

    return ElPagination;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLDivElement));

  function removeChildIfExist(node, childNode) {
    if (!node || !childNode || !node.hasChildNodes()) {
      return;
    }

    var _iterator = _createForOfIteratorHelper(node.childNodes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var i = _step.value;

        if (i === childNode) {
          node.removeChild(i);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  function getParamFromUrl(key) {
    var searchUrl = window.location.search;

    if (!searchUrl) {
      return '';
    }

    var reg = new RegExp("".concat(key, "=[^&]*&{0,1}"));
    var res = searchUrl.match(reg);

    if (!res || res.length === 0) {
      return '';
    }

    res = res[0]; // 正则可能会匹配出来 k=v& 或者 k=v

    res = res.endsWith('&', res.length) ? res.substr(0, res.length - 1) : res;
    return res.substring(res.indexOf('=') + 1);
  }

  function replaceParamValue(key, value, targetStr) {
    targetStr = targetStr.replace(new RegExp(/^\??/), '').replace(new RegExp("".concat(key, "=[^&]&?")), '').replace(new RegExp(/&$/), '');

    if (targetStr) {
      return [targetStr, "".concat(key, "=").concat(value)].join('&');
    } else {
      return "".concat(key, "=").concat(value);
    }
  }

  customElements.define('el-pagination', ElPagination, {
    "extends": 'div'
  });

}());
