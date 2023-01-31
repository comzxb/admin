import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';

import storageUtils from './utils/storageUtils';
import memoryUtils from './utils/memoryUtils'

//读取local中保存的user，保存到内存中
const user = storageUtils.getUser()
memoryUtils.user = user

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}
  >
    <App />
    </ConfigProvider>
  
);

reportWebVitals();
