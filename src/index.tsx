import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import "./index.css"
import { Provider } from 'react-redux';
import store from './components/Store/Store'; // Make sure this is the correct store path
import { AtomicSearchInterface } from '@coveo/atomic-react';
import { atomicEngine } from './Engine/Engine';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    {/* Wrap the app with the Provider to give access to Redux state */}
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);