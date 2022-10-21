import mongoose from 'mongoose'
import { MONGODB_URI } from '../config'

export async function conexionDB(){
    try {
        const db = await mongoose.connect(MONGODB_URI)
        console.log("Conexión a la base de datos: ", db.connection.name)
    } catch (error) {
        console.log(error)
    }
}

