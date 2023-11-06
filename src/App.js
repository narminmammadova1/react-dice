import './App.css';
import { Coincards } from './Coincards';
import { Dicecards } from './Dicecards';
import{Colors} from './Colors';
import { Formdiv } from './Formdiv';
function App() {

  
  return (
    <div className="App">
   <Dicecards/>
    <hr/>
   <Coincards/>
   <hr/>
<Colors/>
<hr/>
<Formdiv/>
    </div>
  );
}

export default App;
