/**
 * @file 静态标签组件
 * @author cxtom <cxtom2008@gmail.com>
 */

import React, {Component, PropTypes} from 'react';

import {
    registerComponent,
    px2rem
} from 'mola';

import cx from 'classnames';
import {type, level} from './constants';

export class Label extends Component {

    render() {

        let {
            className = null,
            style = null,
            top,
            left,
            width,
            height,
            labelType,
            imageUrl,
            text,
            fontSize,
            color,
            lineHeight
        } = this.props;

        return (
            <div
                className={cx('mola-label', className)}
                style={{
                    ...style,
                    top: px2rem(top),
                    left: px2rem(left),
                    width: px2rem(width),
                    height: px2rem(height)
                }}>
                {labelType === 'image'
                    ? <img src={imageUrl} />
                    : <p style={{
                        fontSize: px2rem(fontSize),
                        color,
                        lineHeight: `${lineHeight / fontSize}em`
                    }}>{text}</p>}
            </div>
        );
    }

}

Label.displayName = type;

Label.propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    labelType: PropTypes.oneOf(['text', 'image']).isRequired,
    imageUrl: PropTypes.string,
    text: PropTypes.string,
    fontSize: PropTypes.number,
    color: PropTypes.string,
    lineHeight: PropTypes.number
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

export default registerComponent(type, level)(Label);
