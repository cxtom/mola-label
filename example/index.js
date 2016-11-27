/**
 * @file Label example
 * @author cxtom <cxtom2008@gamil.com>
 */

import React from 'react';
import Label from '../src/Label.js';
import ReactDOM from 'react-dom';

import {getRootFontSize} from 'mola';

import './index.styl';

document.getElementsByTagName('html')[0].style['font-size'] = getRootFontSize(document.documentElement.clientWidth) + 'px';

ReactDOM.render(
    <div>
        <Label
            height={50}
            type="image"
            imageUrl="http://gss3.bdstatic.com/5foUcz3n1MgCo2Kml5_Y_D3/static/asset/activity/halloween/img/stop.bc6afd6e.png"/>
        <Label
            height={30}
            width={100}
            left={50}
            lineHeight={30}
            text="哈哈哈哈"
            color="#333" />
    </div>,
    document.getElementById('app')
);
