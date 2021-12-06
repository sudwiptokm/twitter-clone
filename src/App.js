import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import './App.css';
function App() {
  return (
    <div className="app">
      {/* Sidebar on left */}
      <Sidebar />

      {/* Feed on middle */}
      <Feed />


      {/* Widgets on right */}
      <Widgets />

    </div>
  );
}

export default App;
