(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'mola', 'classnames', './constants', './babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('mola'), require('classnames'), require('./constants'), require('./babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.mola, global.classnames, global.constants, global.babelHelpers);
        global.Label = mod.exports;
    }
})(this, function (exports, _react, _mola, _classnames, _constants, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.Label = undefined;

    var _react2 = babelHelpers.interopRequireDefault(_react);

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

    var Label = exports.Label = function (_Component) {
        babelHelpers.inherits(Label, _Component);

        function Label() {
            babelHelpers.classCallCheck(this, Label);
            return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        Label.prototype.render = function render() {
            var _props = this.props,
                _props$className = _props.className,
                className = _props$className === undefined ? null : _props$className,
                _props$style = _props.style,
                style = _props$style === undefined ? null : _props$style,
                top = _props.top,
                left = _props.left,
                width = _props.width,
                height = _props.height,
                labelType = _props.labelType,
                imageUrl = _props.imageUrl,
                text = _props.text,
                fontSize = _props.fontSize,
                color = _props.color,
                lineHeight = _props.lineHeight;


            return _react2['default'].createElement(
                'div',
                {
                    className: (0, _classnames2['default'])('mola-label', className),
                    style: babelHelpers['extends']({}, style, {
                        top: (0, _mola.px2rem)(top),
                        left: (0, _mola.px2rem)(left),
                        width: (0, _mola.px2rem)(width),
                        height: (0, _mola.px2rem)(height)
                    }) },
                labelType === 'image' ? _react2['default'].createElement('img', { src: imageUrl }) : _react2['default'].createElement(
                    'p',
                    { style: {
                            fontSize: (0, _mola.px2rem)(fontSize),
                            color: color,
                            lineHeight: lineHeight / fontSize + 'em'
                        } },
                    text
                )
            );
        };

        return Label;
    }(_react.Component);

    Label.displayName = _constants.type;

    Label.propTypes = {
        top: _react.PropTypes.number.isRequired,
        left: _react.PropTypes.number.isRequired,
        width: _react.PropTypes.number.isRequired,
        height: _react.PropTypes.number.isRequired,
        labelType: _react.PropTypes.oneOf(['text', 'image']).isRequired,
        imageUrl: _react.PropTypes.string,
        text: _react.PropTypes.string,
        fontSize: _react.PropTypes.number,
        color: _react.PropTypes.string,
        lineHeight: _react.PropTypes.number
    };

    Label.defaultProps = {
        top: 0,
        left: 0,
        width: 50,
        height: 14,
        labelType: 'text',
        fontSize: 14,
        color: '#000',
        lineHeight: 14
    };

    exports['default'] = (0, _mola.registerComponent)(_constants.type, _constants.level)(Label);
});
//# sourceMappingURL=Label.js.map
