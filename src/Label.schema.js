/**
 * @file 标签组件
 * @author cxtom <cxtom2008@gmail.com>
 */

import update from 'react-addons-update';

export {type, level} from './constants';

export const editorProps = {
    movable: true,
    resizable: 'both',
    droppable: false,
    selectable: true
};

const DEFAULT_SCHEMA = {
    type: 'object',
    properties: {
        top: {
            'title': 'top',
            'type': 'string',
            'format': 'numeric',
            'formatMinimum': '0',
            'default': '0'
        },
        left: {
            'title': 'left',
            'type': 'string',
            'format': 'numeric',
            'formatMinimum': '0',
            'default': '0'
        },
        width: {
            'title': '宽度',
            'type': 'string',
            'format': 'numeric',
            'formatMinimum': '0',
            'default': '50'
        },
        height: {
            'title': '高度',
            'type': 'string',
            'format': 'numeric',
            'formatMinimum': '0',
            'default': '14'
        },
        labelType: {
            'title': '类型',
            'type': 'string',
            'enum': ['text', 'image'],
            'enumNames': [
                '文字',
                '图片'
            ],
            'default': 'text'
        }
    },
    required: ['top', 'left', 'width', 'height', 'type']
};

export default function (props) {

    switch (props.labelType) {
        case 'image':
            return update(DEFAULT_SCHEMA, {
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
            return update(DEFAULT_SCHEMA, {
                properties: {
                    $merge: {
                        text: {
                            title: '文字内容',
                            type: 'string'
                        },
                        fontSize: {
                            'title': '字体大小',
                            'type': 'string',
                            'format': 'numeric',
                            'formatMinimum': '12',
                            'default': '14'
                        },
                        lineHeight: {
                            'title': '行高',
                            'type': 'string',
                            'format': 'numeric',
                            'formatMinimum': '12',
                            'default': '14'
                        },
                        textAlign: {
                            'title': '类型',
                            'type': 'string',
                            'enum': ['left', 'right', 'center'],
                            'enumNames': [
                                '居左',
                                '居右',
                                '居中'
                            ],
                            'default': 'left'
                        },
                        color: {
                            'title': '文字颜色',
                            'type': 'string',
                            'format': 'color',
                            'default': '#000000'
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
}
