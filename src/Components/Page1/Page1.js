import {Link, useNavigate} from "react-router-dom";
import PostContainer from "./components/PostContainer/PostContainer";
import styles from "./Page1.module.css"
import {Page1Post2, PAGE2} from "../../Helper/Routers/Routers";
export const Page1=()=>{


    const navigate=useNavigate()
    const backToPage=()=>{
        navigate(-1)
    }
    return<div className={styles.glavnoe}>
<PostContainer/>

        <button onClick={backToPage}>Назад</button>


    </div>
}