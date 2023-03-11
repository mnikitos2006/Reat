import {Link} from "react-router-dom";
import {PAGE10, PAGE11, PAGE12} from "../Helper/Routers/Routers";

function Menuright(){
    const arr= [{id:1,name:<Link to={PAGE10}>Сообщества</Link>},
        {id:2,name:<Link to={PAGE11}>Музыка</Link>},
        {id:3,name:<Link to={PAGE12}>Игры</Link>}]
    const rows=arr.map(function(item1){
      return <div key={item1.id}>
        <td className="jj">{item1.name}</td>



      </div>
    })
    return <>

        <div className="Menuright">
            <div className="Menuright1">{rows}</div>
        </div>


    </>
}
export default Menuright;