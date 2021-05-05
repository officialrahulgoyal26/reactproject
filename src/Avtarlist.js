import React from 'react';
const Avtarlist = (props)=>{
    return(
        <div className = "AvtarStyle ma4 bg-light-purple dib pa4 tc ">
<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avtar"/>
     <h1 className="">{props.name}</h1>
     <p> {props.work}</p>

</div>
    )
}
export default Avtarlist;