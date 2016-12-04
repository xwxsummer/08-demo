import React from 'react';
import {render} from 'react-dom';

import Routers from './routers';
import './main.css';
import 'highlight.js/styles/arta.css';
import './post.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();//material-ui需要的引入

render(<Routers />,document.getElementById('root'));
