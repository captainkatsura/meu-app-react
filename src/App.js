import React from 'react';
import './App.css';
import SidebarComponent from './components/SideBar';
import ContentWrapperComponent from './components/ContentWrapper';

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SidebarComponent />
        <ContentWrapperComponent />
      </div>
    </React.Fragment>
  );
}

export default App;
