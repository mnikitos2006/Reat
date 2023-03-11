import {useNavigate} from "react-router-dom";

export const Page9=()=>{
    const navigate=useNavigate()
    const backToPage=()=>{
        navigate(-1)
    }
    return <>
        "Page9"
        <button onClick={backToPage}>Назад</button>


    </>
}