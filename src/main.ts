interface Persona {
  nombre: string,
  edad: number
}

let contactos: Persona[] = []

function anadir() {
  //Obtenemos valor de los input del formulario
  let e: number = +(<HTMLInputElement>document.getElementById("edad")).value;
  let n: string = (<HTMLInputElement>document.getElementById("nombre")).value;
  //Creamos ventanas de alerta en caso de que este el campo vacio
  if (n === "") {
    window.alert("El campo nombre no puede estar vacio");
  }
  else if (e === 0) {
    window.alert("El campo edad no puede estar vacio");
  }else{
    //Creamos el objeto
    let personas: Persona = {
      nombre: n,
      edad: e
    };
    contactos.push(personas); //Lo añadimos al array
  }

}
function mostrar() {
  console.log(contactos); //mostramos por consola el array
}
