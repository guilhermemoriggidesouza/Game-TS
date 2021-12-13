import fs from 'fs'
import { join } from 'path'
import Emitter from '../infra/Event-emitter'

const files: string[] | Buffer[] = fs.readdirSync(join(__dirname)).filter((f)=> f.indexOf("_") == -1)
files.forEach(async f => {
    import(`./${f}`).then((inst =>{
        Emitter.sub(f.split(".")[0], (payload)=>{
            inst.default.handler(payload)
        })
    }))
})

export default files