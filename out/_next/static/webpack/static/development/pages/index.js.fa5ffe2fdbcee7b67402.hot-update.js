webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/home/grant/s/cs/spiral/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



var sp = 16; // let cols = 40
// let rows = 30
// let cells = cols * rows

function spx(array) {
  return array.map(function (v) {
    return v * sp;
  });
}

var Line = function Line() {
  return __jsx("div", {
    style: {
      height: sp,
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  });
};

var Space = function Space() {
  return __jsx("div", {
    style: {
      width: sp / 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  });
};

var Button = function Button(_ref) {
  var label = _ref.label,
      clearer = _ref.clearer,
      trigger = _ref.trigger,
      text_label = _ref.text_label,
      press_gates = _ref.press_gates,
      custom_style = _ref.custom_style;
  var button_style = {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: 'none',
    padding: 0,
    margin: 0,
    width: sp,
    background: 'black',
    color: 'white',
    display: 'block'
  };

  if (custom_style !== undefined) {
    button_style = Object.assign(button_style, custom_style);
  }

  return __jsx("div", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("button", {
    style: button_style,
    onMouseDown: function onMouseDown(e) {
      trigger();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, label), text_label !== undefined ? __jsx("div", {
    style: {
      display: 'flex',
      cursor: 'default'
    },
    onMouseDown: function onMouseDown(e) {
      trigger();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, text_label)) : null);
};

var RepeatButton = function RepeatButton(_ref2) {
  var label = _ref2.label,
      clearer = _ref2.clearer,
      trigger = _ref2.trigger,
      text_label = _ref2.text_label,
      press_gates = _ref2.press_gates,
      custom_style = _ref2.custom_style;
  var repeat_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var start_gate = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(false);
  var touch_mode = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(false);
  var button_style = {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: 'none',
    padding: 0,
    margin: 0,
    width: sp,
    background: 'black',
    color: 'white',
    display: 'block'
  };

  if (custom_style !== undefined) {
    button_style = Object.assign(button_style, custom_style);
  }

  return __jsx("div", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("button", {
    style: button_style,
    onTouchStart: function onTouchStart(e) {
      touch_mode.current = true;
      press_gates.current = true;
      trigger();
      setTimeout(function () {
        if (press_gates.current) {
          repeat_ref.current = setInterval(function () {
            trigger();
          }, 100);
          clearer(repeat_ref.current);
        }
      }, 400);
    },
    onTouchEnd: function onTouchEnd(e) {
      setTimeout(function () {
        touch_mode.current = false;
      }, 400);
      e.preventDefault();
    },
    onMouseDown: function onMouseDown(e) {
      if (!touch_mode.current) {
        press_gates.current = true;
        trigger();
        setTimeout(function () {
          if (press_gates.current) {
            repeat_ref.current = setInterval(function () {
              trigger();
            }, 100);
            clearer(repeat_ref.current);
          }
        }, 400);
      }
    },
    onMouseUp: function onMouseUp(e) {
      if (!touch_mode.current) {
        clearInterval(repeat_ref.current);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, label), text_label !== undefined ? __jsx("div", {
    style: {
      display: 'flex',
      cursor: 'default'
    },
    onMouseDown: function onMouseDown(e) {
      repeat_ref.current = setInterval(function () {
        trigger();
      }, 200);
      clearer(repeat_ref.current);
      trigger();
    },
    onMouseUp: function onMouseUp(e) {
      clearInterval(repeat_ref.current);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, text_label)) : null);
};

var Home = function Home() {
  var cref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var clear_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(false);
  var state = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])({});
  var km_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])({});
  var slider_click_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var slider_touch_mode = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(false);
  var press_gates = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(false);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      width = _useState[0],
      setWidth = _useState[1];

  var file_input = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var ti_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  function loadImage(src) {
    var c = cref.current;
    var cx = c.getContext('2d');
    var img = document.createElement('img');

    img.onload = function () {
      var adj_width = Math.min(img.width, Math.floor(window.innerWidth - sp * 2) - sp / 2);
      var dsp = sp;
      var snapw = Math.round(adj_width / dsp) * dsp;
      var snapr = snapw / img.width;
      var snaph = Math.round(img.height * snapr / dsp) * dsp;
      img.width = snapw;
      img.height = snaph;
      setWidth(img.width);
      c.width = img.width;
      c.height = img.height;
      var cols = img.width / sp;
      var rows = img.height / sp;
      var cells = cols * rows; // preserve dimensions

      var t_img = document.createElement('canvas');
      t_img.width = c.width;
      t_img.height = c.height;
      var t_imgx = t_img.getContext('2d');
      t_imgx.drawImage(img, 0, 0, c.width, c.height);
      img = t_img; // draw original image
      // cx.drawImage(img, 0, 0, c.width, c.height)
      // store original image

      var imc = document.createElement('canvas');
      imc.width = c.width;
      imc.height = c.height;
      var imx = imc.getContext('2d');
      imx.drawImage(img, 0, 0, c.width, c.height); // cut up original image

      var tiles = [];

      for (var i = 0; i < cells; i++) {
        var t = document.createElement('canvas');
        t.width = sp;
        t.height = sp;
        var tx = t.getContext('2d');
        var x = i % cols;
        var y = Math.floor(i / cols);
        tx.drawImage(imc, x * sp, y * sp, sp, sp, 0, 0, sp, sp);
        var complexity = t.toDataURL().length / (sp * sp);
        tiles.push({
          t: t,
          c: complexity,
          x: x,
          y: y,
          i: i
        });
      }

      tiles = lodash__WEBPACK_IMPORTED_MODULE_5__["sortBy"](tiles, 'c'); // grid with coordinates

      var grid = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(rows)).map(function (n, y) {
        return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(cols)).map(function (n, x) {
          var d = Math.sqrt(Math.pow(x - cols / 2, 2) + Math.pow(y - rows / 2, 2)).toFixed(8);
          return [x, y, d];
        });
      }); // spiral order for iteration


      var ordered = lodash__WEBPACK_IMPORTED_MODULE_5__["flatten"](grid);

      ordered.sort(function (a, b) {
        return a[2] - b[2];
      }); // spiral test
      // for (let i = 0; i < 800; i++) {
      //   let [x, y] = ordered[i]
      //   cx.fillRect(...spx([x, y, 1, 1]))
      // }

      var threshold = cells - 300;
      state.current.threshold = threshold;
      state.current.cells = cells;
      state.current.ordered = ordered;
      state.current.grid = grid;
      state.current.cols = cols;
      state.current.rows = rows;
      state.current.imc = imc;
      state.current.tiles = tiles;
      render(); // cx.fillStyle = 'red'
      // cx.fillRect((cols / 2) * sp - 1, 0, 2, c.height)
      // cx.fillRect(0, (rows / 2) * sp - 1, c.width, 2)
      // cx.fillStyle = 'black'
    };

    img.src = src;
  }

  function render() {
    clear_ref.current = false;
    var c = cref.current;
    var cx = c.getContext('2d');
    var _state$current = state.current,
        cells = _state$current.cells,
        threshold = _state$current.threshold,
        ordered = _state$current.ordered,
        grid = _state$current.grid,
        cols = _state$current.cols,
        rows = _state$current.rows,
        imc = _state$current.imc,
        tiles = _state$current.tiles; // active

    var active = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(rows)).map(function (n, y) {
      return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(cols)).map(function (n, x) {
        return [x, y, false];
      });
    });

    for (var i = threshold; i < cells; i++) {
      var tile = tiles[i];
      var x = tile.x;
      var y = tile.y;
      active[y][x][2] = true;
    }

    console.log(active);

    function getFree(x, y) {
      // it it off map it is undefined
      if (active[y] === undefined) return null;
      if (active[y][x] === undefined) return null;
      var check = active[y][x]; // false means empty

      if (check[2] === false) {
        return grid[y][x];
      } else {
        return null;
      } // return if false
      // if (coords) {
      //   let [gx, gy] = coords
      // }

    }

    function getMove(x, y) {
      var raw = [[0, -1], [1, -1], [1, 1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1]].map(function (v) {
        return getFree(x + v[0], y + v[1]);
      });
      var self = grid[y][x];
      var filtered = raw.filter(function (v) {
        return v !== null;
      });
      var distances = filtered.map(function (v) {
        return parseFloat(v[2]);
      });

      var min_distance = lodash__WEBPACK_IMPORTED_MODULE_5__["min"](distances);

      if (min_distance < self[2]) {
        var min_i = distances.indexOf(min_distance);
        return filtered[min_i];
      } else {
        return null;
      }
    }

    function _render() {
      var least_active = true;
      var moved = false;

      for (var _i = 0; _i < cells; _i++) {
        var _ordered$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(ordered[_i], 2),
            _x = _ordered$_i[0],
            _y = _ordered$_i[1];

        var check = active[_y][_x];

        if (check[2] === true) {
          least_active = false;
          var move_to = getMove(_x, _y);

          if (move_to !== null) {
            moved = true;

            var _move_to = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(move_to, 2),
                mx = _move_to[0],
                my = _move_to[1]; // let old = active[my][mx].slice()


            var old = [null, null, false];
            active[my][mx] = check;
            active[_y][_x] = old;
          }
        }
      }

      if (least_active) {
        cx.clearRect(0, 0, c.width, c.height);
      }

      if (!moved) {
        // only draw when done
        for (var _i2 = 0; _i2 < cells; _i2++) {
          var _x2 = _i2 % cols;

          var _y2 = Math.floor(_i2 / cols);

          var _check = active[_y2][_x2];

          if (_check[2]) {
            cx.drawImage.apply(cx, [imc].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(spx([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_check.slice(0, 2)), [1, 1]))), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(spx([_x2, _y2, 1, 1]))));
          }
        }
      } else if (moved && !clear_ref.current) {
        cx.clearRect(0, 0, c.width, c.height); // for (let i = 0; i < cells; i++) {
        //   let x = i % cols
        //   let y = Math.floor(i / cols)
        //   let check = active[y][x]
        //   // if (check) {
        //   cx.drawImage(
        //     imc,
        //     ...spx([...check.slice(0, 2), 1, 1]),
        //     ...spx([x, y, 1, 1])
        //   )
        //   // }
        // }

        _render();
      }
    }

    _render();
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    loadImage('mrrobot2.jpg');
  });

  function _trigger(key) {
    keyAction(key, null);
  }

  function keyAction(key, event) {
    var km = km_ref.current;

    if (event === null) {
      event = {
        shiftKey: false
      };
    }

    var shift = event.shiftKey;
    key = key.toLowerCase();

    if (key === 'o') {
      var handleChange = function handleChange(e) {
        var files = '';
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;
            console.log(item);
            files += item.name + '.' + item.type;

            if (item.type.indexOf('image') < 0) {
              continue;
            }

            var src = URL.createObjectURL(item);
            loadImage(src);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.removeEventListener('change', handleChange);
      };

      var input = file_input.current;
      input.addEventListener('change', handleChange);
      input.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));
    } else if (key === 'p') {
      var link = document.createElement('a');
      cref.current.toBlob(function (blob) {
        link.setAttribute('download', 'res-' + new Date().toISOString().slice(0, -4).replace(/-/g, '').replace(/:/g, '').replace(/_/g, '').replace(/\./g, '') + 'Z' + '.png');
        link.setAttribute('href', URL.createObjectURL(blob));
        link.dispatchEvent(new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window
        }));
      });
    }

    if (key === 'l' || key === 'arrowright') {
      var move = 10;
      if (shift) move = 1;
      state.current.threshold = Math.max(0, state.current.threshold - move);
      clear_ref.current = true;
      render();
    } else if (key === 'h' || key === 'arrowleft') {
      var _move = 10;
      if (shift) _move = 1;
      state.current.threshold = Math.min(state.current.cells, state.current.threshold + _move);
      clear_ref.current = true;
      render();
    }
  }

  function downHandler(e) {
    km_ref.current[e.key] = true;
    keyAction(e.key, e);
  }

  function upHandler(e) {
    km_ref.current[e.key] = false;
  }

  function handleMouseMove(e) {
    if (!slider_touch_mode.current) {
      if (slider_click_ref.current) {
        clickSetThreshold(e.clientX);
      }
    }
  }

  function clearer(id) {
    clear_ref.current.push(id);
  }

  function clearRepeatIntervals() {
    for (var i = 0; i < clear_ref.current.length; i++) {
      var item = clear_ref.current[i];
      clearInterval(item);
    }

    clear_ref.current = [];
  }

  function clearPressGates() {
    press_gates.current = false;
  }

  function handleMouseUp(e) {
    if (!slider_touch_mode.current) {
      if (slider_click_ref.current) {
        slider_click_ref.current = false;
        clickSetThreshold(e.clientX);
      }
    }

    clearPressGates();
    clearRepeatIntervals();
  }

  function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    var file = e.dataTransfer.files[0];
    var filename = file.path ? file.path : file.name ? file.name : '';
    var src = URL.createObjectURL(file);
    loadImage(src);
  }

  function onDrag(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  function onPaste(e) {
    e.preventDefault();
    e.stopPropagation();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = e.clipboardData.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;

        if (item.type.indexOf('image') < 0) {
          continue;
        }

        var file = item.getAsFile();
        var src = URL.createObjectURL(file);
        loadImage(src);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  function handleTouchMove(e) {
    if (slider_touch_mode.current) {
      if (slider_click_ref.current) {
        clickSetThreshold(e.changedTouches[0].clientX);
        e.preventDefault();
      }
    }
  }

  function handleTouchEnd(e) {
    // touch end doesn't seem to have client x
    clearPressGates();
    clearRepeatIntervals();
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('paste', onPaste);
    window.addEventListener('dragover', onDrag);
    window.addEventListener('drop', onDrop);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchmove', handleTouchMove, {
      passive: false
    });
    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('paste', onPaste);
      window.removeEventListener('dragover', onDrag);
      window.removeEventListener('drop', onDrop);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
  var title = 'Collapse'; // TODO

  var description = 'Selectively de-res image pixels ranked using a compression algorithm.';
  var share_img_url = 'https://res.constraint.systems/res.png';
  var og_url = 'https://res.constraint.systems';
  return __jsx("div", {
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615
    },
    __self: this
  }, title), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616
    },
    __self: this
  })), __jsx("div", {
    style: {
      display: width !== null ? 'block' : 'none',
      width: width !== null ? width + sp : 'auto',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619
    },
    __self: this
  }, __jsx("input", {
    type: "file",
    ref: file_input,
    style: {
      display: 'none'
    },
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627
    },
    __self: this
  }), __jsx("div", {
    style: {
      paddingLeft: sp / 2,
      paddingRight: sp / 2
    },
    className: "jsx-247518924" + " " + "no-select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633
    },
    __self: this
  }, __jsx(Button, {
    label: "o",
    press_gates: press_gates,
    text_label: "Load image (or paste or drop)",
    clearer: clearer,
    trigger: function trigger() {
      _trigger('o');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643
    },
    __self: this
  }), __jsx(Button, {
    label: "p",
    press_gates: press_gates,
    text_label: "Save result as png",
    clearer: clearer,
    trigger: function trigger() {
      _trigger('p');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655
    },
    __self: this
  }), __jsx("canvas", {
    ref: cref,
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex',
      textAlign: 'center',
      width: '100%',
      position: 'relative'
    },
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659
    },
    __self: this
  }, __jsx("canvas", {
    height: sp * 23,
    ref: ti_ref,
    style: {
      position: 'absolute',
      height: sp * 2,
      left: sp * 2,
      top: 0,
      cursor: 'crosshair'
    },
    onTouchStart: function onTouchStart(e) {
      slider_click_ref.current = true;
      slider_touch_mode.current = true;
      clickSetThreshold(e.changedTouches[0].clientX);
    },
    onTouchEnd: function onTouchEnd(e) {
      setTimeout(function () {
        slider_click_ref.current = false;
        slider_touch_mode.current = false;
      }, 400);
    },
    onMouseDown: function onMouseDown(e) {
      if (!slider_touch_mode.current) {
        slider_click_ref.current = true;
        clickSetThreshold(e.clientX);
      }
    },
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667
    },
    __self: this
  }), __jsx(RepeatButton, {
    label: "h",
    press_gates: press_gates,
    custom_style: {
      height: sp * 2,
      width: sp * 2
    },
    clearer: clearer,
    trigger: function trigger() {
      _trigger('h');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695
    },
    __self: this
  }), __jsx("div", {
    ref: thresh_ref,
    style: {
      flexGrow: 1,
      position: 'relative',
      pointerEvents: 'none',
      lineHeight: sp * 2 + 'px'
    },
    className: "jsx-247518924",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704
    },
    __self: this
  }), __jsx(RepeatButton, {
    label: "l",
    press_gates: press_gates,
    custom_style: {
      height: sp * 2,
      width: sp * 2
    },
    clearer: clearer,
    trigger: function trigger() {
      _trigger('l');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "247518924",
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}html{background:#efefef;}canvas{background:#fff;}html,body{padding:0;margin:0;font-family:'custom',monospace;font-size:12px;line-height:16px;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3Mvc3BpcmFsL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXF0QnlCLEFBR2dDLEFBS0EsQUFNRixBQUdILEFBSU4sQUFPWSxVQU5iLE1BSlgsR0FIQSxBQVFrQyxFQWxCdUIsQUFLRCxDQW1CeEQsNEJBTGlCLGVBQ0UsaUJBQ25CLG9EQWZvQixFQUxwQixnQkFNQSIsImZpbGUiOiIvaG9tZS9ncmFudC9zL2NzL3NwaXJhbC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5sZXQgc3AgPSAxNlxuLy8gbGV0IGNvbHMgPSA0MFxuLy8gbGV0IHJvd3MgPSAzMFxuLy8gbGV0IGNlbGxzID0gY29scyAqIHJvd3NcblxuZnVuY3Rpb24gc3B4KGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5tYXAodiA9PiB2ICogc3ApXG59XG5cbmxldCBMaW5lID0gKCkgPT4gPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHNwLCB3aWR0aDogJzEwMCUnIH19IC8+XG5cbmxldCBTcGFjZSA9ICgpID0+IDxkaXYgc3R5bGU9e3sgd2lkdGg6IHNwIC8gMiB9fSAvPlxuXG5sZXQgQnV0dG9uID0gKHtcbiAgbGFiZWwsXG4gIGNsZWFyZXIsXG4gIHRyaWdnZXIsXG4gIHRleHRfbGFiZWwsXG4gIHByZXNzX2dhdGVzLFxuICBjdXN0b21fc3R5bGUsXG59KSA9PiB7XG4gIGxldCBidXR0b25fc3R5bGUgPSB7XG4gICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIHdpZHRoOiBzcCxcbiAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gIH1cbiAgaWYgKGN1c3RvbV9zdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgYnV0dG9uX3N0eWxlID0gT2JqZWN0LmFzc2lnbihidXR0b25fc3R5bGUsIGN1c3RvbV9zdHlsZSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBzdHlsZT17YnV0dG9uX3N0eWxlfVxuICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAge3RleHRfbGFiZWwgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgY3Vyc29yOiAnZGVmYXVsdCcgfX1cbiAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgPGRpdj57dGV4dF9sYWJlbH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5sZXQgUmVwZWF0QnV0dG9uID0gKHtcbiAgbGFiZWwsXG4gIGNsZWFyZXIsXG4gIHRyaWdnZXIsXG4gIHRleHRfbGFiZWwsXG4gIHByZXNzX2dhdGVzLFxuICBjdXN0b21fc3R5bGUsXG59KSA9PiB7XG4gIGxldCByZXBlYXRfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBzdGFydF9nYXRlID0gdXNlUmVmKGZhbHNlKVxuXG4gIGxldCB0b3VjaF9tb2RlID0gdXNlUmVmKGZhbHNlKVxuXG4gIGxldCBidXR0b25fc3R5bGUgPSB7XG4gICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIHdpZHRoOiBzcCxcbiAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gIH1cbiAgaWYgKGN1c3RvbV9zdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgYnV0dG9uX3N0eWxlID0gT2JqZWN0LmFzc2lnbihidXR0b25fc3R5bGUsIGN1c3RvbV9zdHlsZSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBzdHlsZT17YnV0dG9uX3N0eWxlfVxuICAgICAgICBvblRvdWNoU3RhcnQ9e2UgPT4ge1xuICAgICAgICAgIHRvdWNoX21vZGUuY3VycmVudCA9IHRydWVcbiAgICAgICAgICBwcmVzc19nYXRlcy5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByZXNzX2dhdGVzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgcmVwZWF0X3JlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgICAgIGNsZWFyZXIocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDQwMClcbiAgICAgICAgfX1cbiAgICAgICAgb25Ub3VjaEVuZD17ZSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0b3VjaF9tb2RlLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICAgIH0sIDQwMClcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfX1cbiAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgIGlmICghdG91Y2hfbW9kZS5jdXJyZW50KSB7XG4gICAgICAgICAgICBwcmVzc19nYXRlcy5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHByZXNzX2dhdGVzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICByZXBlYXRfcmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgICAgICAgY2xlYXJlcihyZXBlYXRfcmVmLmN1cnJlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDQwMClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VVcD17ZSA9PiB7XG4gICAgICAgICAgaWYgKCF0b3VjaF9tb2RlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9idXR0b24+XG4gICAgICB7dGV4dF9sYWJlbCAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBjdXJzb3I6ICdkZWZhdWx0JyB9fVxuICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICAgIHJlcGVhdF9yZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICBjbGVhcmVyKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgIH19XG4gICAgICAgICAgb25Nb3VzZVVwPXtlID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICA8ZGl2Pnt0ZXh0X2xhYmVsfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGxldCBjcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBjbGVhcl9yZWYgPSB1c2VSZWYoZmFsc2UpXG4gIGxldCBzdGF0ZSA9IHVzZVJlZih7fSlcbiAgbGV0IGttX3JlZiA9IHVzZVJlZih7fSlcbiAgbGV0IHNsaWRlcl9jbGlja19yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHNsaWRlcl90b3VjaF9tb2RlID0gdXNlUmVmKGZhbHNlKVxuICBsZXQgcHJlc3NfZ2F0ZXMgPSB1c2VSZWYoZmFsc2UpXG4gIGxldCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBmaWxlX2lucHV0ID0gdXNlUmVmKG51bGwpXG4gIGxldCB0aV9yZWYgPSB1c2VSZWYobnVsbClcblxuICBmdW5jdGlvbiBsb2FkSW1hZ2Uoc3JjKSB7XG4gICAgbGV0IGMgPSBjcmVmLmN1cnJlbnRcbiAgICBsZXQgY3ggPSBjLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgbGV0IGFkal93aWR0aCA9IE1hdGgubWluKFxuICAgICAgICBpbWcud2lkdGgsXG4gICAgICAgIE1hdGguZmxvb3Iod2luZG93LmlubmVyV2lkdGggLSBzcCAqIDIpIC0gc3AgLyAyXG4gICAgICApXG4gICAgICBsZXQgZHNwID0gc3BcbiAgICAgIGxldCBzbmFwdyA9IE1hdGgucm91bmQoYWRqX3dpZHRoIC8gZHNwKSAqIGRzcFxuICAgICAgbGV0IHNuYXByID0gc25hcHcgLyBpbWcud2lkdGhcbiAgICAgIGxldCBzbmFwaCA9IE1hdGgucm91bmQoKGltZy5oZWlnaHQgKiBzbmFwcikgLyBkc3ApICogZHNwXG5cbiAgICAgIGltZy53aWR0aCA9IHNuYXB3XG4gICAgICBpbWcuaGVpZ2h0ID0gc25hcGhcblxuICAgICAgc2V0V2lkdGgoaW1nLndpZHRoKVxuXG4gICAgICBjLndpZHRoID0gaW1nLndpZHRoXG4gICAgICBjLmhlaWdodCA9IGltZy5oZWlnaHRcblxuICAgICAgbGV0IGNvbHMgPSBpbWcud2lkdGggLyBzcFxuICAgICAgbGV0IHJvd3MgPSBpbWcuaGVpZ2h0IC8gc3BcbiAgICAgIGxldCBjZWxscyA9IGNvbHMgKiByb3dzXG5cbiAgICAgIC8vIHByZXNlcnZlIGRpbWVuc2lvbnNcbiAgICAgIGxldCB0X2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICB0X2ltZy53aWR0aCA9IGMud2lkdGhcbiAgICAgIHRfaW1nLmhlaWdodCA9IGMuaGVpZ2h0XG4gICAgICBsZXQgdF9pbWd4ID0gdF9pbWcuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgdF9pbWd4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuICAgICAgaW1nID0gdF9pbWdcblxuICAgICAgLy8gZHJhdyBvcmlnaW5hbCBpbWFnZVxuICAgICAgLy8gY3guZHJhd0ltYWdlKGltZywgMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpXG5cbiAgICAgIC8vIHN0b3JlIG9yaWdpbmFsIGltYWdlXG4gICAgICBsZXQgaW1jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgIGltYy53aWR0aCA9IGMud2lkdGhcbiAgICAgIGltYy5oZWlnaHQgPSBjLmhlaWdodFxuICAgICAgbGV0IGlteCA9IGltYy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBpbXguZHJhd0ltYWdlKGltZywgMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpXG5cbiAgICAgIC8vIGN1dCB1cCBvcmlnaW5hbCBpbWFnZVxuICAgICAgbGV0IHRpbGVzID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHM7IGkrKykge1xuICAgICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAgIHQud2lkdGggPSBzcFxuICAgICAgICB0LmhlaWdodCA9IHNwXG4gICAgICAgIGxldCB0eCA9IHQuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgICAgIGxldCB4ID0gaSAlIGNvbHNcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKGkgLyBjb2xzKVxuXG4gICAgICAgIHR4LmRyYXdJbWFnZShpbWMsIHggKiBzcCwgeSAqIHNwLCBzcCwgc3AsIDAsIDAsIHNwLCBzcClcblxuICAgICAgICBsZXQgY29tcGxleGl0eSA9IHQudG9EYXRhVVJMKCkubGVuZ3RoIC8gKHNwICogc3ApXG5cbiAgICAgICAgdGlsZXMucHVzaCh7IHQsIGM6IGNvbXBsZXhpdHksIHgsIHksIGkgfSlcbiAgICAgIH1cbiAgICAgIHRpbGVzID0gXy5zb3J0QnkodGlsZXMsICdjJylcblxuICAgICAgLy8gZ3JpZCB3aXRoIGNvb3JkaW5hdGVzXG4gICAgICBsZXQgZ3JpZCA9IFsuLi5BcnJheShyb3dzKV0ubWFwKChuLCB5KSA9PlxuICAgICAgICBbLi4uQXJyYXkoY29scyldLm1hcCgobiwgeCkgPT4ge1xuICAgICAgICAgIGxldCBkID0gTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5wb3coeCAtIGNvbHMgLyAyLCAyKSArIE1hdGgucG93KHkgLSByb3dzIC8gMiwgMilcbiAgICAgICAgICApLnRvRml4ZWQoOClcbiAgICAgICAgICByZXR1cm4gW3gsIHksIGRdXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIC8vIHNwaXJhbCBvcmRlciBmb3IgaXRlcmF0aW9uXG4gICAgICBsZXQgb3JkZXJlZCA9IF8uZmxhdHRlbihncmlkKVxuICAgICAgb3JkZXJlZC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGFbMl0gLSBiWzJdXG4gICAgICB9KVxuXG4gICAgICAvLyBzcGlyYWwgdGVzdFxuICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCA4MDA7IGkrKykge1xuICAgICAgLy8gICBsZXQgW3gsIHldID0gb3JkZXJlZFtpXVxuICAgICAgLy8gICBjeC5maWxsUmVjdCguLi5zcHgoW3gsIHksIDEsIDFdKSlcbiAgICAgIC8vIH1cblxuICAgICAgbGV0IHRocmVzaG9sZCA9IGNlbGxzIC0gMzAwXG4gICAgICBzdGF0ZS5jdXJyZW50LnRocmVzaG9sZCA9IHRocmVzaG9sZFxuICAgICAgc3RhdGUuY3VycmVudC5jZWxscyA9IGNlbGxzXG4gICAgICBzdGF0ZS5jdXJyZW50Lm9yZGVyZWQgPSBvcmRlcmVkXG4gICAgICBzdGF0ZS5jdXJyZW50LmdyaWQgPSBncmlkXG4gICAgICBzdGF0ZS5jdXJyZW50LmNvbHMgPSBjb2xzXG4gICAgICBzdGF0ZS5jdXJyZW50LnJvd3MgPSByb3dzXG4gICAgICBzdGF0ZS5jdXJyZW50LmltYyA9IGltY1xuICAgICAgc3RhdGUuY3VycmVudC50aWxlcyA9IHRpbGVzXG5cbiAgICAgIHJlbmRlcigpXG5cbiAgICAgIC8vIGN4LmZpbGxTdHlsZSA9ICdyZWQnXG4gICAgICAvLyBjeC5maWxsUmVjdCgoY29scyAvIDIpICogc3AgLSAxLCAwLCAyLCBjLmhlaWdodClcbiAgICAgIC8vIGN4LmZpbGxSZWN0KDAsIChyb3dzIC8gMikgKiBzcCAtIDEsIGMud2lkdGgsIDIpXG4gICAgICAvLyBjeC5maWxsU3R5bGUgPSAnYmxhY2snXG4gICAgfVxuICAgIGltZy5zcmMgPSBzcmNcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBjbGVhcl9yZWYuY3VycmVudCA9IGZhbHNlXG4gICAgbGV0IGMgPSBjcmVmLmN1cnJlbnRcbiAgICBsZXQgY3ggPSBjLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQge1xuICAgICAgY2VsbHMsXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBvcmRlcmVkLFxuICAgICAgZ3JpZCxcbiAgICAgIGNvbHMsXG4gICAgICByb3dzLFxuICAgICAgaW1jLFxuICAgICAgdGlsZXMsXG4gICAgfSA9IHN0YXRlLmN1cnJlbnRcblxuICAgIC8vIGFjdGl2ZVxuICAgIGxldCBhY3RpdmUgPSBbLi4uQXJyYXkocm93cyldLm1hcCgobiwgeSkgPT5cbiAgICAgIFsuLi5BcnJheShjb2xzKV0ubWFwKChuLCB4KSA9PiBbeCwgeSwgZmFsc2VdKVxuICAgIClcbiAgICBmb3IgKGxldCBpID0gdGhyZXNob2xkOyBpIDwgY2VsbHM7IGkrKykge1xuICAgICAgbGV0IHRpbGUgPSB0aWxlc1tpXVxuICAgICAgbGV0IHggPSB0aWxlLnhcbiAgICAgIGxldCB5ID0gdGlsZS55XG4gICAgICBhY3RpdmVbeV1beF1bMl0gPSB0cnVlXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGFjdGl2ZSlcblxuICAgIGZ1bmN0aW9uIGdldEZyZWUoeCwgeSkge1xuICAgICAgLy8gaXQgaXQgb2ZmIG1hcCBpdCBpcyB1bmRlZmluZWRcbiAgICAgIGlmIChhY3RpdmVbeV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGxcbiAgICAgIGlmIChhY3RpdmVbeV1beF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGxcbiAgICAgIGxldCBjaGVjayA9IGFjdGl2ZVt5XVt4XVxuICAgICAgLy8gZmFsc2UgbWVhbnMgZW1wdHlcbiAgICAgIGlmIChjaGVja1syXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGdyaWRbeV1beF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gaWYgZmFsc2VcbiAgICAgIC8vIGlmIChjb29yZHMpIHtcbiAgICAgIC8vICAgbGV0IFtneCwgZ3ldID0gY29vcmRzXG4gICAgICAvLyB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TW92ZSh4LCB5KSB7XG4gICAgICBsZXQgcmF3ID0gW1xuICAgICAgICBbMCwgLTFdLFxuICAgICAgICBbMSwgLTFdLFxuICAgICAgICBbMSwgMV0sXG4gICAgICAgIFsxLCAwXSxcbiAgICAgICAgWzEsIDFdLFxuICAgICAgICBbMCwgMV0sXG4gICAgICAgIFstMSwgMV0sXG4gICAgICAgIFstMSwgMF0sXG4gICAgICAgIFstMSwgLTFdLFxuICAgICAgXS5tYXAodiA9PiBnZXRGcmVlKHggKyB2WzBdLCB5ICsgdlsxXSkpXG4gICAgICBsZXQgc2VsZiA9IGdyaWRbeV1beF1cbiAgICAgIGxldCBmaWx0ZXJlZCA9IHJhdy5maWx0ZXIodiA9PiB2ICE9PSBudWxsKVxuICAgICAgbGV0IGRpc3RhbmNlcyA9IGZpbHRlcmVkLm1hcCh2ID0+IHBhcnNlRmxvYXQodlsyXSkpXG4gICAgICBsZXQgbWluX2Rpc3RhbmNlID0gXy5taW4oZGlzdGFuY2VzKVxuICAgICAgaWYgKG1pbl9kaXN0YW5jZSA8IHNlbGZbMl0pIHtcbiAgICAgICAgbGV0IG1pbl9pID0gZGlzdGFuY2VzLmluZGV4T2YobWluX2Rpc3RhbmNlKVxuICAgICAgICByZXR1cm4gZmlsdGVyZWRbbWluX2ldXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9yZW5kZXIoKSB7XG4gICAgICBsZXQgbGVhc3RfYWN0aXZlID0gdHJ1ZVxuICAgICAgbGV0IG1vdmVkID0gZmFsc2VcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsczsgaSsrKSB7XG4gICAgICAgIGxldCBbeCwgeV0gPSBvcmRlcmVkW2ldXG4gICAgICAgIGxldCBjaGVjayA9IGFjdGl2ZVt5XVt4XVxuICAgICAgICBpZiAoY2hlY2tbMl0gPT09IHRydWUpIHtcbiAgICAgICAgICBsZWFzdF9hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgIGxldCBtb3ZlX3RvID0gZ2V0TW92ZSh4LCB5KVxuICAgICAgICAgIGlmIChtb3ZlX3RvICE9PSBudWxsKSB7XG4gICAgICAgICAgICBtb3ZlZCA9IHRydWVcbiAgICAgICAgICAgIGxldCBbbXgsIG15XSA9IG1vdmVfdG9cbiAgICAgICAgICAgIC8vIGxldCBvbGQgPSBhY3RpdmVbbXldW214XS5zbGljZSgpXG4gICAgICAgICAgICBsZXQgb2xkID0gW251bGwsIG51bGwsIGZhbHNlXVxuICAgICAgICAgICAgYWN0aXZlW215XVtteF0gPSBjaGVja1xuICAgICAgICAgICAgYWN0aXZlW3ldW3hdID0gb2xkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsZWFzdF9hY3RpdmUpIHtcbiAgICAgICAgY3guY2xlYXJSZWN0KDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuICAgICAgfVxuICAgICAgaWYgKCFtb3ZlZCkge1xuICAgICAgICAvLyBvbmx5IGRyYXcgd2hlbiBkb25lXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHM7IGkrKykge1xuICAgICAgICAgIGxldCB4ID0gaSAlIGNvbHNcbiAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoaSAvIGNvbHMpXG4gICAgICAgICAgbGV0IGNoZWNrID0gYWN0aXZlW3ldW3hdXG4gICAgICAgICAgaWYgKGNoZWNrWzJdKSB7XG4gICAgICAgICAgICBjeC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgIGltYyxcbiAgICAgICAgICAgICAgLi4uc3B4KFsuLi5jaGVjay5zbGljZSgwLCAyKSwgMSwgMV0pLFxuICAgICAgICAgICAgICAuLi5zcHgoW3gsIHksIDEsIDFdKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtb3ZlZCAmJiAhY2xlYXJfcmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY3guY2xlYXJSZWN0KDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHM7IGkrKykge1xuICAgICAgICAvLyAgIGxldCB4ID0gaSAlIGNvbHNcbiAgICAgICAgLy8gICBsZXQgeSA9IE1hdGguZmxvb3IoaSAvIGNvbHMpXG4gICAgICAgIC8vICAgbGV0IGNoZWNrID0gYWN0aXZlW3ldW3hdXG4gICAgICAgIC8vICAgLy8gaWYgKGNoZWNrKSB7XG4gICAgICAgIC8vICAgY3guZHJhd0ltYWdlKFxuICAgICAgICAvLyAgICAgaW1jLFxuICAgICAgICAvLyAgICAgLi4uc3B4KFsuLi5jaGVjay5zbGljZSgwLCAyKSwgMSwgMV0pLFxuICAgICAgICAvLyAgICAgLi4uc3B4KFt4LCB5LCAxLCAxXSlcbiAgICAgICAgLy8gICApXG4gICAgICAgIC8vICAgLy8gfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgX3JlbmRlcigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX3JlbmRlcigpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRJbWFnZSgnbXJyb2JvdDIuanBnJylcbiAgfSlcblxuICBmdW5jdGlvbiB0cmlnZ2VyKGtleSkge1xuICAgIGtleUFjdGlvbihrZXksIG51bGwpXG4gIH1cblxuICBmdW5jdGlvbiBrZXlBY3Rpb24oa2V5LCBldmVudCkge1xuICAgIGxldCBrbSA9IGttX3JlZi5jdXJyZW50XG4gICAgaWYgKGV2ZW50ID09PSBudWxsKSB7XG4gICAgICBldmVudCA9IHsgc2hpZnRLZXk6IGZhbHNlIH1cbiAgICB9XG5cbiAgICBsZXQgc2hpZnQgPSBldmVudC5zaGlmdEtleVxuICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAoa2V5ID09PSAnbycpIHtcbiAgICAgIGxldCBpbnB1dCA9IGZpbGVfaW5wdXQuY3VycmVudFxuICAgICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgbGV0IGZpbGVzID0gJydcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmZpbGVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coaXRlbSlcbiAgICAgICAgICBmaWxlcyArPSBpdGVtLm5hbWUgKyAnLicgKyBpdGVtLnR5cGVcbiAgICAgICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpdGVtKVxuICAgICAgICAgIGxvYWRJbWFnZShzcmMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpXG4gICAgICB9XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpXG5cbiAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBNb3VzZUV2ZW50KCdjbGljaycsIHtcbiAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICB9KVxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncCcpIHtcbiAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG5cbiAgICAgIGNyZWYuY3VycmVudC50b0Jsb2IoZnVuY3Rpb24oYmxvYikge1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnZG93bmxvYWQnLFxuICAgICAgICAgICdyZXMtJyArXG4gICAgICAgICAgICBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgIC50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAgIC5zbGljZSgwLCAtNClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoLy0vZywgJycpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC86L2csICcnKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvXy9nLCAnJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCAnJykgK1xuICAgICAgICAgICAgJ1onICtcbiAgICAgICAgICAgICcucG5nJ1xuICAgICAgICApXG5cbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKVxuICAgICAgICBsaW5rLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAnbCcgfHwga2V5ID09PSAnYXJyb3dyaWdodCcpIHtcbiAgICAgIGxldCBtb3ZlID0gMTBcbiAgICAgIGlmIChzaGlmdCkgbW92ZSA9IDFcbiAgICAgIHN0YXRlLmN1cnJlbnQudGhyZXNob2xkID0gTWF0aC5tYXgoMCwgc3RhdGUuY3VycmVudC50aHJlc2hvbGQgLSBtb3ZlKVxuICAgICAgY2xlYXJfcmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICByZW5kZXIoKVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnaCcgfHwga2V5ID09PSAnYXJyb3dsZWZ0Jykge1xuICAgICAgbGV0IG1vdmUgPSAxMFxuICAgICAgaWYgKHNoaWZ0KSBtb3ZlID0gMVxuICAgICAgc3RhdGUuY3VycmVudC50aHJlc2hvbGQgPSBNYXRoLm1pbihcbiAgICAgICAgc3RhdGUuY3VycmVudC5jZWxscyxcbiAgICAgICAgc3RhdGUuY3VycmVudC50aHJlc2hvbGQgKyBtb3ZlXG4gICAgICApXG4gICAgICBjbGVhcl9yZWYuY3VycmVudCA9IHRydWVcbiAgICAgIHJlbmRlcigpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgIGttX3JlZi5jdXJyZW50W2Uua2V5XSA9IHRydWVcbiAgICBrZXlBY3Rpb24oZS5rZXksIGUpXG4gIH1cblxuICBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgIGttX3JlZi5jdXJyZW50W2Uua2V5XSA9IGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZSkge1xuICAgIGlmICghc2xpZGVyX3RvdWNoX21vZGUuY3VycmVudCkge1xuICAgICAgaWYgKHNsaWRlcl9jbGlja19yZWYuY3VycmVudCkge1xuICAgICAgICBjbGlja1NldFRocmVzaG9sZChlLmNsaWVudFgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJlcihpZCkge1xuICAgIGNsZWFyX3JlZi5jdXJyZW50LnB1c2goaWQpXG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclJlcGVhdEludGVydmFscygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsZWFyX3JlZi5jdXJyZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IGNsZWFyX3JlZi5jdXJyZW50W2ldXG4gICAgICBjbGVhckludGVydmFsKGl0ZW0pXG4gICAgfVxuICAgIGNsZWFyX3JlZi5jdXJyZW50ID0gW11cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyUHJlc3NHYXRlcygpIHtcbiAgICBwcmVzc19nYXRlcy5jdXJyZW50ID0gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZSkge1xuICAgIGlmICghc2xpZGVyX3RvdWNoX21vZGUuY3VycmVudCkge1xuICAgICAgaWYgKHNsaWRlcl9jbGlja19yZWYuY3VycmVudCkge1xuICAgICAgICBzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICBjbGlja1NldFRocmVzaG9sZChlLmNsaWVudFgpXG4gICAgICB9XG4gICAgfVxuICAgIGNsZWFyUHJlc3NHYXRlcygpXG4gICAgY2xlYXJSZXBlYXRJbnRlcnZhbHMoKVxuICB9XG5cbiAgZnVuY3Rpb24gb25Ecm9wKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgbGV0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXVxuICAgIGxldCBmaWxlbmFtZSA9IGZpbGUucGF0aCA/IGZpbGUucGF0aCA6IGZpbGUubmFtZSA/IGZpbGUubmFtZSA6ICcnXG4gICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgICBsb2FkSW1hZ2Uoc3JjKVxuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5J1xuICB9XG5cbiAgZnVuY3Rpb24gb25QYXN0ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBlLmNsaXBib2FyZERhdGEuaXRlbXMpIHtcbiAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGxldCBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKVxuICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgICAgIGxvYWRJbWFnZShzcmMpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKGUpIHtcbiAgICBpZiAoc2xpZGVyX3RvdWNoX21vZGUuY3VycmVudCkge1xuICAgICAgaWYgKHNsaWRlcl9jbGlja19yZWYuY3VycmVudCkge1xuICAgICAgICBjbGlja1NldFRocmVzaG9sZChlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKGUpIHtcbiAgICAvLyB0b3VjaCBlbmQgZG9lc24ndCBzZWVtIHRvIGhhdmUgY2xpZW50IHhcbiAgICBjbGVhclByZXNzR2F0ZXMoKVxuICAgIGNsZWFyUmVwZWF0SW50ZXJ2YWxzKClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgb25QYXN0ZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWcpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3ApXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlVG91Y2hFbmQpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoTW92ZSwgeyBwYXNzaXZlOiBmYWxzZSB9KVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSlcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlTW91c2VVcClcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwYXN0ZScsIG9uUGFzdGUpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWcpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIG9uRHJvcClcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZVRvdWNoRW5kKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoTW92ZSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGxldCB0aXRsZSA9ICdDb2xsYXBzZSdcbiAgLy8gVE9ET1xuICBsZXQgZGVzY3JpcHRpb24gPVxuICAgICdTZWxlY3RpdmVseSBkZS1yZXMgaW1hZ2UgcGl4ZWxzIHJhbmtlZCB1c2luZyBhIGNvbXByZXNzaW9uIGFsZ29yaXRobS4nXG4gIGxldCBzaGFyZV9pbWdfdXJsID0gJ2h0dHBzOi8vcmVzLmNvbnN0cmFpbnQuc3lzdGVtcy9yZXMucG5nJ1xuICBsZXQgb2dfdXJsID0gJ2h0dHBzOi8vcmVzLmNvbnN0cmFpbnQuc3lzdGVtcydcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiB3aWR0aCAhPT0gbnVsbCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgd2lkdGg6IHdpZHRoICE9PSBudWxsID8gd2lkdGggKyBzcCA6ICdhdXRvJyxcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgcmVmPXtmaWxlX2lucHV0fSBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLXNlbGVjdFwiXG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IHNwIC8gMiwgcGFkZGluZ1JpZ2h0OiBzcCAvIDIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGxhYmVsPVwib1wiXG4gICAgICAgICAgICAgIHByZXNzX2dhdGVzPXtwcmVzc19nYXRlc31cbiAgICAgICAgICAgICAgdGV4dF9sYWJlbD1cIkxvYWQgaW1hZ2UgKG9yIHBhc3RlIG9yIGRyb3ApXCJcbiAgICAgICAgICAgICAgY2xlYXJlcj17Y2xlYXJlcn1cbiAgICAgICAgICAgICAgdHJpZ2dlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyaWdnZXIoJ28nKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTcGFjZSAvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBsYWJlbD1cInBcIlxuICAgICAgICAgICAgICBwcmVzc19nYXRlcz17cHJlc3NfZ2F0ZXN9XG4gICAgICAgICAgICAgIHRleHRfbGFiZWw9XCJTYXZlIHJlc3VsdCBhcyBwbmdcIlxuICAgICAgICAgICAgICBjbGVhcmVyPXtjbGVhcmVyfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcigncCcpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPExpbmUgLz5cblxuICAgICAgICAgIDxjYW52YXMgcmVmPXtjcmVmfSAvPlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICBoZWlnaHQ9e3NwICogMjN9XG4gICAgICAgICAgICAgIHJlZj17dGlfcmVmfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogc3AgKiAyLFxuICAgICAgICAgICAgICAgIGxlZnQ6IHNwICogMixcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAnY3Jvc3NoYWlyJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHtcbiAgICAgICAgICAgICAgICBzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgc2xpZGVyX3RvdWNoX21vZGUuY3VycmVudCA9IHRydWVcbiAgICAgICAgICAgICAgICBjbGlja1NldFRocmVzaG9sZChlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uVG91Y2hFbmQ9e2UgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgIHNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH0sIDQwMClcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghc2xpZGVyX3RvdWNoX21vZGUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZS5jbGllbnRYKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UmVwZWF0QnV0dG9uXG4gICAgICAgICAgICAgIGxhYmVsPVwiaFwiXG4gICAgICAgICAgICAgIHByZXNzX2dhdGVzPXtwcmVzc19nYXRlc31cbiAgICAgICAgICAgICAgY3VzdG9tX3N0eWxlPXt7IGhlaWdodDogc3AgKiAyLCB3aWR0aDogc3AgKiAyIH19XG4gICAgICAgICAgICAgIGNsZWFyZXI9e2NsZWFyZXJ9XG4gICAgICAgICAgICAgIHRyaWdnZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKCdoJylcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHJlZj17dGhyZXNoX3JlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogc3AgKiAyICsgJ3B4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDxSZXBlYXRCdXR0b25cbiAgICAgICAgICAgICAgbGFiZWw9XCJsXCJcbiAgICAgICAgICAgICAgcHJlc3NfZ2F0ZXM9e3ByZXNzX2dhdGVzfVxuICAgICAgICAgICAgICBjdXN0b21fc3R5bGU9e3sgaGVpZ2h0OiBzcCAqIDIsIHdpZHRoOiBzcCAqIDIgfX1cbiAgICAgICAgICAgICAgY2xlYXJlcj17Y2xlYXJlcn1cbiAgICAgICAgICAgICAgdHJpZ2dlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyaWdnZXIoJ2wnKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLUl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLUl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICB9XG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJywgbW9ub3NwYWNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/home/grant/s/cs/spiral/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.fa5ffe2fdbcee7b67402.hot-update.js.map