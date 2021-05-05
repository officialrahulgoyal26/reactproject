import React from "react";
import'./Avtar.css';
import 'tachyons';
import Avtarlist from './Avtarlist';
const Avtar =(props) => {
    const Avtarlistarray = [
        {
            id:1,
            name:"rahul goyal",
            work:"web developer"
        },
        {
            id:2,
            name:"shivam goyal",
            work:"app developer"
        },
        {
            id:3,
            name:"Alex",
            work:"mechanical engineer"
        },
        {
            id:4,
            name:"krishan",
            work:"electronic engineer"
        },
    ]
    
     
return (<div> <h1>WELCOME TO AVTAR WORLD</h1>
   <Avtarlist id= {Avtarlistarray[0].name} name={Avtarlistarray[0].name} work= {Avtarlistarray[0].work}/> 
   <Avtarlist id= {Avtarlistarray[1].name} name={Avtarlistarray[1].name} work= {Avtarlistarray[1].work}/>
   <Avtarlist id= {Avtarlistarray[2].name} name={Avtarlistarray[2].name}work= {Avtarlistarray[2].work}/>
   <Avtarlist id= {Avtarlistarray[3].name} name={Avtarlistarray[3].name} work= {Avtarlistarray[3].work}/>
<button> SUbscribe</button>
</div>
)
}
export default Avtar;