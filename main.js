var prestamos = [];
const menuAdmin = () => {
  const AdminLogin = {
    //declaro las credenciales de logeo de administradores
    user: "Admin",
    password: "Admin",
  };
  let logeado
do {
  let user = prompt("Ingrese su Usuario");
  let password = prompt("Ingrese su Contraseña");
  if (user == AdminLogin.user && password == AdminLogin.password) { //si las credenciales de logeo ingresadas coinciden con las puestas en el objeto llama a la funcion del menu
    logeado = true
    mostrarMenu();
  }
  alert("Los datos ingresados no fueron correctos")
}while(!logeado)
};
const mostrarMenu = () => {
  let menuOption = prompt(
    "1)Crear prestamo 2)Historial de prestamos 3)Cerrar sesion"
  );
  let option = parseInt(menuOption);
  switch (option) {
    case 1: //en caso de ser 1 llama a la funcion crearPrestamo
      crearPrestamo();
      break;
    case 2: //en caso de ser 2 llama a la funcion historialPrestamos
      historialPrestamos();
      break;
    case 3: //en caso de ser 3 vuelve al menu de inicio de sesion
      alert ("Usted cerro sesion.")
      menuAdmin()
      break;
    default: //en caso de que no se ingrese ni 1, 2 o 3 se ejecuta la alerta
      alert("Debes ingresar una opcion correcta.");
  }
};
const crearPrestamo = () => {
  function Prestamo(nombre, cantidad, cuotas, mensual) { //creo la funcion constructora del objeto para el prestamo
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.mensual = mensual;
    this.cuotas = cuotas;
  }
  let opcionsalir; //debido al scope de la variable adentro del do la declaro afuera del mismo
  do {
    let nombre = prompt("Ingrese el nombre del cliente.");
    do {
      let cantidad = prompt("Ingrese la cantidad del prestamo solicitado.");
      Cantidad = parseInt(cantidad);
      if (isNaN(Cantidad)) { //si no es un numero 
        alert("Debe ingresar un numero");
      }
    } while (isNaN(Cantidad)); //se ejecutara mientras no sea un numero
    do {
      let cuotas = prompt("Ingrese la cantidad de cuotas solicitadas.");
      Cuotas = parseInt(cuotas);
      if (isNaN(Cuotas)) { //si no es un numero 
        alert("Debe ingresar un numero");
      }
    } while (isNaN(Cuotas)); //se ejecutara mientras no sea un numero
    let mensual = Cantidad / Cuotas;
    let prestamo1 = new Prestamo(nombre, Cantidad, Cuotas, mensual); //usando la funcion agrego un objeto con los valores en los parametros
    prestamos.push(prestamo1); //añado el objeto al array usando el metodo push
    alert(
      `El prestamo se cargo correctamente a nombre de ${prestamo1.nombre} con una cantidad total de $${prestamo1.cantidad} y un debito mensual de $${prestamo1.mensual} durante ${prestamo1.cuotas} meses`
    );
    opcionsalir = prompt(
      "Si desea salir volver al menu ingrese 1 en caso de querer crear otro prestamo ingrese cualquier otra tecla."
    );
  } while (opcionsalir != "1");
  mostrarMenu();
};

const historialPrestamos = () => {
  let opcion;
  do {
    opcion = prompt(
      `Actualmente hay una cantidad de ${prestamos.length} prestamos cargados, ingrese el nombre del cliente para acceder a su prestamo, en caso de querer volver atras ingrese "Salir"`
    );
    for (i = 0; i < prestamos.length; i++) { //recorro el arreglo
      if (prestamos[i].nombre == opcion) { //si coincide el nombre ingresado con la propiedad nombre del indice actual se ejecuta el codigo
        alert(
          `${prestamos[i].nombre} tiene un prestamo con un valor total de $${prestamos[i].cantidad} con un debito mensual de $${prestamos[i].mensual} durante ${prestamos[i].cuotas}`
        );
      } else if (opcion != "Salir") { //en caso de que no coincida el nombre y no se ingrese Salir se informa que no hay ningun prestamo con ese nombre
        alert("El nombre ingresado no tiene ningun prestamo cargado.");
      }
    }
  } while (opcion != "Salir"); //mientras no se ingrese Salir se ejecutara el codigo
  mostrarMenu();
};

menuAdmin();
