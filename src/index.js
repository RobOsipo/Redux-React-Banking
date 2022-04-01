import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './state/store.js'

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//         <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render( 
<React.StrictMode>
  <Provider store={store}>
      <App />
  </Provider>
</React.StrictMode>);


reportWebVitals();
