import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App/App';
import registerServiceWorker from './registerServiceWorker';

// import 'antd/dist/antd.less';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
