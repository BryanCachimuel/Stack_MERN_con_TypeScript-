import app from './app'
import { PORT } from './config'

async function main(){
    app.listen(PORT)
    console.log('Servidor en el puerto http://localhost:3002');
}

main()