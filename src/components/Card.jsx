import { useState } from 'react';


function Card({item, id, handleClick}){

    const itemClass = item.stat ? " active " + item.stat :"";

    return (
        <div className={"card"+itemClass} onClick={()=>handleClick(id)}>
        {/* <div className="card" onClick={()=>handleClick(id)}></div> */}
            <span role="img" aria-label={item.text}>{item.text}{item.icon}</span>{/* {item.id} */}
        </div>
    )
}


export default Card;


