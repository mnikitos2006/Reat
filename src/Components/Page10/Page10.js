import {useNavigate} from "react-router-dom";

export const Page10=()=>{
    const navigate=useNavigate()
    const backToPage=()=>{
        navigate(-1)
    }
    return <>
        "Page10"
        <button onClick={backToPage}>Назад</button>


    </>
}