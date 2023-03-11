import {useNavigate} from "react-router-dom";

export const Page11=()=>{
    const navigate=useNavigate()
    const backToPage=()=>{
        navigate(-1)
    }
    return <>
        "Page11"
        <button onClick={backToPage}>Назад</button>


    </>
}