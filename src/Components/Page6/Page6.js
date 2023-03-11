import {useNavigate} from "react-router-dom";

export const Page6=()=>{
    const navigate=useNavigate()
    const backToPage=()=>{
        navigate(-1)
    }
    return <>
        "Page6 "
        <button onClick={backToPage}>Назад</button>


    </>
}