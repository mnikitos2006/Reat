import {Link} from "react-router-dom";
import {MAIN, PAGE1, PAGE2} from "../helper/Routers/Routers";

function Main(){
    return  <>
        <div className="menu">
            <Link to={MAIN}>
                <div className="menu1">Главная</div>
            </Link>
            <Link to={PAGE1}>
                <div className="menu1">Новости</div>
            </Link>
            <Link to={PAGE2}>
                <div className="menu1">Фотографии</div>
            </Link>
            <div className="menu1">Видео</div>
            <div className="menu1">Друзья</div>
            <div className="menu1">Мои подписки</div>
            <div className="menu1">Рекомендации</div>
            <div className="menu1">Поиск</div>
        </div>
    </>
}
export default Main;