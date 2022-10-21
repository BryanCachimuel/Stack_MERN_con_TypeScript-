import app from './app'
import { conexionDB } from './database/db'
import { PORT } from './config'

async function main(){
    await conexionDB()
    app.listen(PORT)
    console.log('Servidor en el puerto http://localhost:3002');
}

main()