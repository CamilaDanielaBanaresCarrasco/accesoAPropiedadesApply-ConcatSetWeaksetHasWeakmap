
let caracteres = new Set(["x","y","z","z"]); //Set solo almacena 3  
let computador = {tipo: "laptop"};
let servidor ={laptop: "servidor"};
let juan = {nombre: "Camila Banares"}, lily =  {nombre:"Lily Banares"}, pedro =  {nombre: "Pedro Banares"};
let rolesUsuario = new Map();
rolesUsuario.set(juan, "administrador").set(lily, "jefa de Area").set(pedro, "Tecnico");
let noExiste = {nombre: "abc"};




let equipment = new WeakSet([computador,servidor]);

if(equipment.has(servidor)){
    console.log("tenemos servidor")
}else{
    console.log("No tenemos servidor")
}


console.log(caracteres); // Este mostrara "x","y","z"
caracteres.delete("y")
console.log(caracteres)// Este mostrara "x","y"
caracteres.add(1).add(2)
console.log(caracteres)// Este mostrara "x","y",1,2

console.log(caracteres.entries())// Este mostrara "x","y",1,2


console.log(caracteres.has("z"));
console.log(caracteres.has("w"));
console.log(rolesUsuario.get(juan));
console.log(rolesUsuario.get(noExiste)); // undefined
console.log(rolesUsuario.has(lily));
console.log(rolesUsuario.size); 


for(let usuario of rolesUsuario.keys()){
    console.log(usuario.nombre); 
}

for(let rol of rolesUsuario.values()){
    console.log(rol); 
}

for(let elementos of rolesUsuario.entries()){
    console.log(`${elementos[0].nombre}: ${elementos[1].nombre}:`); 
}



let juanDos = {nombre: "juan diaz"}, lilyDos = {nombre: "lily silva"}, pedroDos = {nombre: "pedro salamanca"};
const mapaDebil = new WeakMap();
mapaDebil.set(juan, "primero").set(lily,"segunda").set(pedro, "tersero");
console.log(mapaDebil);
