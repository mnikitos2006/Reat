import styles from "../PostContainer/Post.module.css";
import MyPhoto from "../../../chinazes1.jpg";
import {useState} from "react";

export const Post=(props)=>{
    console.log(props)
const {title,src,text,likeCount,dislikeCount,liker,disliker,id}=props
    const [like, setLike] = useState("white")
    const [dislike, setDislike] = useState("white")

    // function liker() {
    //     if (like === "white") {
    //         setLike("green")
    //     } else if (like === "green") {
    //         setLike("white")
    //     }
    //
    //
    // }
    //
    // function taby() {
    //     if (like === "green" && dislike === "green") {
    //         return dislike === "white"
    //     }
    // }
    //
    // taby()
    //
    // function disliker() {
    //     if (dislike === "white") {
    //         setDislike("green")
    //     } else if (dislike === "green") {
    //         setDislike("white")
    //     }
    //
    // }
    return <div className={styles.post}>
        <div className={styles.zagolovok}>{title}</div>

        <div className={styles.photo}><img src={src}></img></div>

        <div className={styles.text}>{text}
        </div>

        <div className={styles.knopki}>
            <button onClick={()=>liker(id)} style={{background:likeCount===1?"green":"white"}} className={styles.like}>👍</button>
            <button onClick={()=>disliker(id)} style={{background: dislikeCount===1?"red":"white"}} className={styles.dislike}>👎</button>
        </div>
    </div>
}
