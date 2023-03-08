import logo from './logo.svg';
import Photo from "./Components/Photo";
// import MyImg from "./chinazes.jpg"
// import {Button} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Kategorii from './Components/Kategorii';
import Menuright from './Components/Menuright';
import Main from './Components/Main';
import {Route, Routes} from "react-router-dom";
import {Page1} from "./Components/Page1/Page1";
import {MAIN, PAGE1, PAGE2} from "./helper/Routers/Routers";
import {Page2} from "./Components/Page2/Page2";
function App() {
  return (
<div className={"main"}>

    {/*<Route path={MAIN} element={ <div className='gg1'>*/}
      <Main/>
      <div>
        <Kategorii/>
        {/*<div className="chinazes">{MyImg}</div>*/}
          <Routes>
          <Route path={MAIN} element={ <Photo/>}/>
          <Route path={PAGE1} element={<Page1/>}/>
          <Route path={PAGE2} element={<Page2/>}/>
          </Routes>

        {/*<Button variant="primary">Button</Button>*/}
      </div>
      <Menuright/>
    {/*</div>}/>*/}




</div>
  );
}

export default App;
