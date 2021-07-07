import React from 'react';
import OsxTabs from 'react-osx-tabs';

import CSS from 'csstype';
import './App.css';

const lStyle: CSS.Properties<string, string> = {
  width: 'calc(100% - 350px)',
  height: '100%',
  border: '1px solid gray',
  display: 'inline-block',
  float: 'left',
};

const rStyle: CSS.Properties<string, string> = {
  display: 'inline-block',
  float: 'left',
  height: '90%',
  width: '300px',
  marginTop: '20px',
  padding: '10px',
  paddingBottom: '20px',
};

function App() {
  const body1 = <div>Hello from Tab Body 1!</div>;
  const body2 = <div>Hello from Tab Body 2!</div>;
  const body3 = <div>Hello from Tab Body 3!</div>;
  const bodies = [body1, body2, body3];

  return (
    <div className="App">
      <div style={lStyle} />
      <div style={rStyle}>
        <OsxTabs tabLabels={['One', 'Two', 'Tab Three']} tabBodies={bodies} />
      </div>
    </div>
  );
}

export default App;
