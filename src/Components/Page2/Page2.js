import {useNavigate} from "react-router-dom";

export const Page2=()=>{
    const navigate=useNavigate()
    const backToPage=()=>{
        navigate(-1)
    }
    return <>
"Page2"
        <button onClick={backToPage}>Назад</button>


    </>
}