import React, { useEffect, useState, useRef } from 'react';
import attack from './attack.gif'
import walk from './walk.gif'
import stand from './stand.gif'
import dead from './dead.gif'
import damage from './damage.gif'

const  Person = (action, x, y, uuid)=>{
    const actions = {
        attack,
        walk,
        stand,
        dead,
        damage
    }
    const [urlType, setUrlType] = useState(actions[action])
    useEffect(() => {   
        setInterval(()=>{
            setUrlType(actions["stand"])
        }, 200)
    })

    return <img src={urlType} style={{
        left: `${x}px`,
        top: `${y}px`
    }}/>
}

export default Person;