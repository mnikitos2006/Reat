import {useNavigate} from "react-router-dom";

export const Page2=()=>{
    const navigate = useNavigate();
    const backToPreviosPage=()=>{
        navigate(-1)
    }
    return <>"Page2"
        <button onClick={backToPreviosPage}>Назад</button></>
}