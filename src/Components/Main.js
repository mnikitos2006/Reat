import {Link} from "react-router-dom";
import {PAGE1, PAGE2, PAGE3, PAGE4, PAGE5, PAGE6, PAGE7} from "../Helper/Routers/Routers";

function Main(){
    return  <>
        <div className="menu">

            <div className="menu1"><Link to={PAGE1}>Новости</Link></div>



            <div className="menu1"><Link to={PAGE2}>Фотографии</Link></div>



                <div className="menu1">  <Link to={PAGE3}>Видео</Link></div>



                <div className="menu1"> <Link to={PAGE4}>Друзья </Link></div>



                <div className="menu1"><Link to={PAGE5}>Сообщения </Link></div>



                <div className="menu1"> <Link to={PAGE6}>Рекомендации</Link></div>



                <div className="menu1"><Link to={PAGE7}>Поиск</Link></div>


        </div>
    </>
}
export default Main;