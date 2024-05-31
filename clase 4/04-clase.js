type ="text/javascript"

function saludar(nombre, edad) {
    document.write("bienvenido " + 
        nombre + " " + apellido  + " de " + edad +  " años!")
        document.write("hasta la vista ")
}


let ingreso = window.prompt("ingrese su nombre")
let apellido = window.prompt("ingrese su apellido")
let edad = window.prompt("ingrese su edad")
saludar(ingreso , edad , apellido)
window.alert("termine")



    