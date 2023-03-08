import logo from './logo.svg';
import Photo from "./Components/Photo";
// import MyImg from "./chinazes.jpg"
// import {Button} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Kategorii from './Components/Kategorii';
import Menuright from './Components/Menuright';
import Main from './Components/Main';
function App() {
  return (
<>

  <div className='gg1'>
    <Main/>
    <div>
      <Kategorii/>
      {/*<div className="chinazes">{MyImg}</div>*/}
    <Photo/>
      {/*<Button variant="primary">Button</Button>*/}
    </div>
    <Menuright/>

  </div>
</>
  );
}

export default App;
