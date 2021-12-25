const mapMoviment = (entities, payload)=> ({
    onmousemove() {
        entities["player"].pos.x = payload.pageX;
        entities["player"].pos.y = payload.pageY;
        return entities["player"]
    },
    onkeydown(){
        console.log(entities["player"])
        entities["player"].pw = true
        return entities["player"]
    },
    onkeyup() {
        entities["player"].pw = false
        return entities["player"]
    }     
})          

const Move = (entities, { input }) => {
    let newEntities = input.map(x => x).map((event, i) => {
        if (mapMoviment(entities, event.payload)[event.name.toLowerCase()])
            entities["player"] = mapMoviment(entities, event.payload)[event.name.toLowerCase()]()
    }).filter(x => x)

    return newEntities.length == 0 ? entities : newEntities;
};

export default Move;