import {useNavigate} from "react-router-dom";

export const Page12=()=>{
    const navigate=useNavigate()
    const backToPage=()=>{
        navigate(-1)
    }
    return <>
        "Page12"
        <button onClick={backToPage}>Назад</button>


    </>
}