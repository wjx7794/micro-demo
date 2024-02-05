import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import './public-path';

let root = null;
function render(props) {
  const { container } = props;
  console.log(document, container);
  root =
    root ||
    ReactDOM.createRoot(
      container
        ? container.querySelector('#root')
        : document.getElementById('root')
    );
  root.render(
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react18] react app bootstraped');
}

export async function mount(props) {
  console.log('[react18] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  root.unmount();
  root = null;
}

reportWebVitals();
