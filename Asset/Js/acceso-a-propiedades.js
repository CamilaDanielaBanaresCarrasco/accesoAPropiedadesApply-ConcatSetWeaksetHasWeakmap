const empleado ={
    "nombre": "Fernanda",
    "direccion": "Avenida Central",
    "edad":43,
    "hobby": "pintar",
    "oficio": "desarrolladora Front End",
    "departamento":{
        "nombre": "Ventas",
        "turno": "Mañana",
        "ciudad": {
            "ciudad": "punta Arenas",
            "calle": "calle industrial 1020",
        }
    }
}

const {nombreCompleto = `${empleado.nombre} Lagos`} = empleado
const {nombre , edad} = empleado;
const{direccion: domicilioLaboral} = empleado;
const {departamento, departamento :{direccion}} = empleado;
({ciudad} = empleado)

const infoSobrePersona = ({nombre, edad ,hobby}) => {
    console.log(`${nombre} tiene ${edad} años y su hobby faborito es ${hobby}`)
}

const obtenerUsuario =() => {
return{
    "usuario": "Alex1",
    "correo": "a23@correo.uk",
    "edad": 22

}

}





console.log(nombre , edad)
console.log(direccion)
console.log(nombreCompleto)
console.log(domicilioLaboral)
infoSobrePersona(empleado)

const{usuario, correo} = obtenerUsuario ();
console.log(usuario, correo)
