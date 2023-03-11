import {useNavigate} from "react-router-dom";

export const Page3=()=>{
    const navigate=useNavigate()
    const backToPage=()=>{
        navigate(-1)
    }
    return <>
        "Page3 "
        <button onClick={backToPage}>Назад</button>


    </>
}