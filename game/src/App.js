import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import uuid from 'react-uuid'
import Person from './Person.js'

function App() {
    const ws = new WebSocket('ws://localhost:9898/');
    const [listPersons, setListPersons] = useState([]);
    const clickHandler = ()=> {
        ws.send(JSON.stringify({
            action: 'walk',
            hello: "world"
        }))
    }
    const actions = {
        addPlayer: async function(payload){
            console.log("adding player", listPersons)
            const newList = [...listPersons]
            newList.push({
                uuid: payload.uuid,
                x: 50,
                y: 20,
                url: "./stand.gif"
            })
            setListPersons(newList)
        }
    }
    
    useEffect(() => {
        ws.onopen = function() {
            console.log('WebSocket Client Connected');
            const playerId = uuid()
            ws.send(JSON.stringify({
                action: 'addPlayer',
                uuid: playerId,
            }))
            // actions["addPlayer"]({
            //     uuid: playerId,
            // })
        };
        ws.onmessage = function(e) {
            const receivedPayload = JSON.parse(e.data)
            actions[receivedPayload.action](receivedPayload)
        };

    }, [])

    return (
        <div className="App">
            <div style={{
                backgroundColor: "red",
                backgroundImage: "url(http://www.santaremtur.com.br/user/pages/03.noticiaseeventos/caverna-do-paraiso-maior-caverna-de-exploracao-paraense/caverna-do-paraiso-em-itaituba-amazonia.jpg)",
                backgroundRepeat:"no-repeat",
                backgroundSize: "cover",
                position: "fixed",
                width: "100%",
                height: "100%"
            }}>
                {console.log(JSON.stringify(listPersons))}
                {listPersons.map((person)=>{
                    return <Person src={person.url} x={person.x} y={person.y} uuid={person.uuid} />
                })}
            </div>
        </div>
    );
    }

export default App;
