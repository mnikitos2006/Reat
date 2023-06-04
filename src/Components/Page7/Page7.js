import {useNavigate} from "react-router-dom";

export const Page7=(props)=>{
    const navigate=useNavigate()
    const backToPage=()=>{
        navigate(-1)
    }
    return <>
        "Page7 "
        <button onClick={backToPage}>Назад</button>


    </>
}