import styles from "./Post.module.css"
import MyPhoto from "../../../chinazes1.jpg"
import {useState} from "react";
import {Page1Post2} from "../../../../Helper/Routers/Routers";
import {Post} from "../Post/Post";
import {v4 as uuidv4} from 'uuid';

function PostContainer() {

    const initialPosts = [{
        id: uuidv4(), title: "zagolovok1", src: MyPhoto, text: "lorem", likeCount: 0, dislikeCount: 0,
    },
        {id: uuidv4(), title: "zagolovok2", src: MyPhoto, text: "lorem", likeCount: 0, dislikeCount: 0,},
        {id: uuidv4(), title: "zagolovok3", src: MyPhoto, text: "lorem", likeCount: 0, dislikeCount: 0,},
        {id: uuidv4(), title: "zagolovok4", src: MyPhoto, text: "lorem", likeCount: 0, dislikeCount: 0,},
        {id: uuidv4(), title: "zagolovok5", src: MyPhoto, text: "lorem", likeCount: 0, dislikeCount: 0,}]
    const [state, setState] = useState(0)
    const [posts, setPosts] = useState(initialPosts)
    const nextPage = () => {
        if (state === posts.length - 1) {

        } else {
            setState(prevState => prevState + 1)
        }

    }
    const prevPage = () => {
        if (state === 0) {

        } else {
            setState(prevState => prevState - 1)
        }


    }
    console.log(state)
    const liker = (id) => {
if (posts.find(el=>el.id===id).likeCount!==0){
    setPosts(prevState => prevState.map((el) => el.id === id ? {...el, likeCount: 0} : el))
}else{
    setPosts(prevState => prevState.map((el) => el.id === id ? {...el, likeCount: 1,dislikeCount: 0} : el))
}


    }
    const disliker=(id)=>{
        if (posts.find(el=>el.id===id).dislikeCount!==0){
            setPosts(prevState => prevState.map((el) => el.id === id ? {...el,dislikeCount: 0} : el))
        }else{
            setPosts(prevState => prevState.map((el)=>el.id===id?{...el,likeCount: 0,dislikeCount: 1}:el))
        }

    }
    console.log(posts)
    return <div className={styles.postContainer}>
        <div>
            <button disabled={state === 0} onClick={prevPage} className={styles.knopkaSledPost}>Предыдущий пост</button>
        </div>
        {/*{posts.map((post) => <Post key={post.id} {...post}/>)}*/}
        <Post {...posts[state]} liker={liker} disliker={disliker}/>

        <div>
            <button disabled={state === posts.length - 1} onClick={nextPage} className={styles.knopkaSledPost}>Следующий
                пост
            </button>
        </div>

    </div>
}

export default PostContainer