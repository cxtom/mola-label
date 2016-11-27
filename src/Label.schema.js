/**
 * @file 音频组件
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
            'enumNames': [
                '视频网站分享',
                'mp4文件'
            ],
            'default': 'text'
        }
    },
    required: ['top', 'left', 'width', 'height', 'type']
};

export default function (props) {

    switch (props.videoType) {
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
}