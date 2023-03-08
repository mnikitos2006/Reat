function Menuright(){
    const arr= [{id:1,name:'Сообщества'},
      {id:2,name:'Музыка'},
     {id:3,name:'Игры'}]
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