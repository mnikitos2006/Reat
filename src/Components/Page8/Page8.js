import {useNavigate} from "react-router-dom";

export const Page8=()=>{
    const navigate=useNavigate()
    const backToPage=()=>{
        navigate(-1)
    }
    return <>
        "Page8"
        <button onClick={backToPage}>Назад</button>


    </>
}