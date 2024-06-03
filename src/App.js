import './App.css';
import LanguageContext from './compontents/my-context';
import CenterUI from './compontents/center-ui';
import { useState } from 'react';

const lang = ["javascript", "python"]

function App() {
  const [state, setState] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
       <h1>hello, World</h1>
      </header>
      <body>
        <LanguageContext.Provider value={ state ? lang[0] : lang[1]}>
        <CenterUI click={ () => setState((prevState) => !prevState) } />
        </LanguageContext.Provider>
      </body>
    </div>
  );
}

export default App;
