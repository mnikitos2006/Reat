import React, {useState} from "react";
import MyImg from "./chinazes.jpg";
import MyImg1 from "./chinazes1.jpg";
import MyImg2 from "./chinazes2.jpg";
import MyImg3 from "./chinazes3.jpg";
import MyImg4 from "./chinazes4.jpg";






function Photo(){
    let kart=[MyImg,MyImg1,MyImg2,MyImg3,MyImg4]
    console.log('renderPhoto')
        const [count,setCount]=useState(0);//count-состояние само, setCount-это функция, которая изменяет состояние
        const onClick=()=>{
            console.log(count);

            // setCount(prevState => prevState+1)
            if (count===kart.length-1){
                setCount(0)
            }else {
                setCount(prevState => prevState+1)
            }

        }


    const onClick1=()=>{
        console.log(count);

        // setCount(prevState => prevState+1)
        if (count===0){
            setCount(kart.length-1)
        }else {
            setCount(prevState => prevState-1)
        }

    }

return <>
    <div className="Photo1">
<img className="photo" src={kart[count]}/>
    </div>
    <div className="lox">
        <button onClick={onClick1} className="lox1">ЖмиLeft</button>
    <button onClick={onClick} className="lox1">ЖмиRight</button>

    </div>
    {/*<div className="kart">{kart}</div>*/}
</>
}

export default Photo;
