import './App.css';
import { Coincards } from './Coincards';
import { Dicecards } from './Dicecards';
import{Colors} from './Colors';
function App() {

  
  return (
    <div className="App">
   <Dicecards/>
    <hr/>
   <Coincards/>
   <hr/>

<Colors/>
    </div>
  );
}

export default App;
