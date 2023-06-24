import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Main2 from './components/Main2';
import Main3 from './components/Main3';

export default function App() {
  return (
    <div>
<Router>
      <Routes>
      <Route path="/" element={[<div><Main /> <Main2 /> <Main3 /></div>]} />
      </Routes>
</Router>
    </div>
  );
}
