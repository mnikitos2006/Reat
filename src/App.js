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
import {
  MAIN,
  PAGE1,
  PAGE10,
  PAGE11, PAGE12,
  PAGE2,
  PAGE3,
  PAGE4,
  PAGE5,
  PAGE6,
  PAGE7,
  PAGE8,
  PAGE9
} from "./Helper/Routers/Routers";
import {Page2} from "./Components/Page2/Page2";
import {Page3} from "./Components/Page3/Page3";
import {Page4} from "./Components/Page4/Page4";
import {Page5} from "./Components/Page5/Page5";
import {Page6} from "./Components/Page6/Page6";
import {Page7} from "./Components/Page7/Page7";
import {Page8} from "./Components/Page8/Page8";
import {Page9} from "./Components/Page9/Page9";
import {Page10} from "./Components/Page10/Page10";
import {Page11} from "./Components/Page11/Page11";
import {Page12} from "./Components/Page12/Page12";
function App() {
  return (
<>
  <Routes>
  <Route path={MAIN} element={  <div className='gg1'>
    <Main/>
    <div>
      <Kategorii/>
      {/*<div className="chinazes">{MyImg}</div>*/}
      <Photo/>
      {/*<Button variant="primary">Button</Button>*/}
    </div>
    <Menuright/>

  </div>}/>

  {/*<div className='gg1'>*/}
  {/*  <Main/>*/}
  {/*  <div>*/}
  {/*    <Kategorii/>*/}
  {/*    /!*<div className="chinazes">{MyImg}</div>*!/*/}
  {/*  <Photo/>*/}
  {/*    /!*<Button variant="primary">Button</Button>*!/*/}
  {/*  </div>*/}
  {/*  <Menuright/>*/}

  {/*</div>*/}
  <Route path={PAGE1} element={<Page1/>}/>
  <Route path={PAGE2} element={<Page2/>}/>
  <Route path={PAGE3} element={<Page3/>}/>
  <Route path={PAGE4} element={<Page4/>}/>
  <Route path={PAGE5} element={<Page5/>}/>
  <Route path={PAGE6} element={<Page6/>}/>
  <Route path={PAGE7} element={<Page7/>}/>
  <Route path={PAGE8} element={<Page8/>}/>
  <Route path={PAGE9} element={<Page9/>}/>
  <Route path={PAGE10} element={<Page10/>}/>
  <Route path={PAGE11} element={<Page11/>}/>
  <Route path={PAGE12} element={<Page12/>}/>
  </Routes>
</>
  );
}

export default App;
