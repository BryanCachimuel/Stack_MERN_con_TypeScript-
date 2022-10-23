/* como se esta utilizando typescript es necesario definir una interfaz para mandar a llamar a los atributos del documento
   y así poder tipear cada atributo 
*/

export interface Video{
    createdAt: string,
    descripcion: string,
    titulo: string
    updatedAt: string
    url: string
    _id: string
}