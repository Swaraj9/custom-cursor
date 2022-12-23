import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Cursor from './Components/Cursor';

function App() {

  const [cursorActive, setCursorActive] = useState(false);

  return (
    <div className="App">
      <Cursor cursorActive={cursorActive}/>
      <Button setCursorActive={setCursorActive}/>
    </div>
  );
}

export default App;
