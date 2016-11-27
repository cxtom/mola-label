(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './constants', 'react-addons-update', './babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./constants'), require('react-addons-update'), require('./babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.constants, global.reactAddonsUpdate, global.babelHelpers);
        global.LabelSchema = mod.exports;
    }
})(this, function (exports, _constants, _reactAddonsUpdate, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.editorProps = exports.level = exports.type = undefined;
    Object.defineProperty(exports, 'type', {
        enumerable: true,
        get: function () {
            return _constants.type;
        }
    });
    Object.defineProperty(exports, 'level', {
        enumerable: true,
        get: function () {
            return _constants.level;
        }
    });

    exports.default = function (props) {

        switch (props.videoType) {
            case 'image':
                return (0, _reactAddonsUpdate2['default'])(DEFAULT_SCHEMA, {
                    properties: {
                        $merge: {
                            imageUrl: {
                                title: '图片地址',
                                type: 'string',
                                format: 'uri',
                                media: {
                                    type: 'image/*'
                                }
                            }
                        }
                    },
                    required: {
                        $push: ['imageUrl']
                    }
                });
            case 'text':
                return (0, _reactAddonsUpdate2['default'])(DEFAULT_SCHEMA, {
                    properties: {
                        $merge: {
                            text: {
                                title: '文字内容',
                                type: 'string'
                            },
                            fontSize: {
                                'title': '字体大小',
                                'type': 'number',
                                'default': 14
                            },
                            lineHeight: {
                                'title': '行高',
                                'type': 'number',
                                'default': 14
                            },
                            color: {
                                'title': '文字颜色',
                                'type': 'string',
                                'format': 'color',
                                'default': '#000'
                            }
                        }
                    },
                    required: {
                        $push: ['text', 'fontSize', 'color']
                    }
                });
            default:
                return DEFAULT_SCHEMA;
        }
    };

    var _reactAddonsUpdate2 = babelHelpers.interopRequireDefault(_reactAddonsUpdate);

    /**
     * @file 音频组件
     * @author cxtom <cxtom2008@gmail.com>
     */

    var editorProps = exports.editorProps = {
        movable: true,
        resizable: 'both',
        droppable: false,
        selectable: true
    };

    var DEFAULT_SCHEMA = {
        type: 'object',
        properties: {
            top: {
                'title': 'top',
                'type': 'number',
                'default': 0
            },
            left: {
                'title': 'left',
                'type': 'number',
                'default': 0
            },
            width: {
                'title': '宽度',
                'type': 'number',
                'default': 50
            },
            height: {
                'title': '高度',
                'type': 'number',
                'default': 14
            },
            type: {
                'title': '类型',
                'type': 'string',
                'enum': ['text', 'image'],
                'enumNames': ['视频网站分享', 'mp4文件'],
                'default': 'text'
            }
        },
        required: ['top', 'left', 'width', 'height', 'type']
    };
});
//# sourceMappingURL=Label.schema.js.map
