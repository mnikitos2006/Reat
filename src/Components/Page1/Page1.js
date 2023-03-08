import {useNavigate} from "react-router-dom";

export const Page1=()=>{
    const navigate=useNavigate()
    const backToPage=()=>{
        navigate(-1)
    }
    return <>
"Page1"
        <button onClick={backToPage}>Назад</button>


    </>
}