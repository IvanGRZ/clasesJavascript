import { User } from './user.js'

const usuario = new User("Ivan", "Guerrero", [{'nombre': "El señor de los anillos", 'autor': 'J. R. R. Tolkien'}], ["doggy"]);

usuario.addBook("Harry potter", "jk")
usuario.addMascota("firulais")

console.log(usuario.getFullName())
console.log(usuario.getBookNames())
console.log(usuario.countMascotas())