import {Link} from "react-router-dom";
import {PAGE8, PAGE9} from "../Helper/Routers/Routers";

function Kategorii() {
    return <>
        {/*<div className="kategorii">*/}
        <div className="chmo">

            <div className="kategorii1"><Link to={PAGE8}>ВОЙТИ</Link></div>



            <div className="kategorii2"><Link to={PAGE9}>ЗАРЕГИСТРИРОВАТЬСЯ</Link></div>

        </div>



            {/*</div>*/}


        </>
        }

export default Kategorii;