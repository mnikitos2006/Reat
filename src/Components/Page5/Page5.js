import {useNavigate} from "react-router-dom";
import AppMessage from "../../Message/AppMessage";
import styles from ".//Message.module.css"
import {InputData} from "../../InputData";
import {Post} from "../Page1/components/Post/Post";
export const Page5=(props)=>{

    const navigate=useNavigate()
    const backToPage=()=>{
        navigate(-1)
    }
    return <>
        <div>
            {props.boy.map(boy=>{

            })}
        </div>
        {/*"Page5 "*/}
        <div className={styles.message}>
        <AppMessage />
        </div>
        <div className={styles.buttonMes}>
        <button onClick={backToPage}>Назад</button>
        </div>





    </>
}
