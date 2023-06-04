import {useNavigate} from "react-router-dom";

export const Page4=()=>{
    const navigate=useNavigate()
    const backToPage=()=>{
        navigate(-1)
    }
    return <>
        "Page4 "
        <button onClick={backToPage}>Назад</button>


    </>
}