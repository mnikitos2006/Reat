import {Page5} from "./Components/Page5/Page5";
import styles from "./Components/Page5/Message.module.css";

export const InputData=(props)=>{
    const data=[
        {id:1,messageBoy:"Привет,девочка",messageGirl:"Привет,мальчик"},
        {id:2,messageBoy:"Как твои дела?",messageGirl:"Мои отлично, твои как?"},
        {id:3,messageBoy:"Мои тоже хорошо",messageGirl:"Отлично!"},
        {id:4,messageBoy:"Чем ты сейчас занимаешься?",messageGirl:"Чиллю"}
    ]
return  <Page5 data={data} id={props.id} boy={props.messageBoy} girl={props.messageGirl}/>
}
export default InputData