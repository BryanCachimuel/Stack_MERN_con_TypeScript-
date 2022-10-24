/* como se esta utilizando typescript es necesario definir una interfaz para mandar a llamar a los atributos del documento
   y así poder tipear cada atributo 
*/

export interface Video{
    _id?: string
    url: string
    descripcion: string,
    titulo: string
    createdAt?: string,
    updatedAt?: string   
}