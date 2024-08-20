import React from 'react';                // main library
import ReactDOM from 'react-dom/client';  // its implementation on web
                                          // jaise native uski implementation hai mobile pe

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));    // index.html me ek hi to div hai
                                                                      // jiski id root hai
                                                                      // bas usko hi to get karre hai
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
