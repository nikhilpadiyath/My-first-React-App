import React from 'react';
import { createRoot } from 'react-dom/client';
import MyApp from './MyApp.js';


const container= document.getElementById('root');
const root= createRoot(container);
root.render(
  <MyApp />
);

