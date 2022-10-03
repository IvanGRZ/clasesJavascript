export class User {

    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }

    addBook(nombre,autor){

        const libro = {
            'nombre': nombre,
            'autor': autor
        }

        this.libros.push(libro)
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    getBookNames(){
        return this.libros.map(book => {
            return book.nombre
        })
    }

    countMascotas(){
        return this.mascotas.length
    }
}
