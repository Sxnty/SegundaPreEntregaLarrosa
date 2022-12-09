mostrarMenu()

function mostrarMenu() {
  let opcion; /* declaro las variables afuera del do debido al scope del mismo */
  let menu;
  do {
    menu = prompt(
      "¿Que desea realizar? 1) Ingresar como Administrador 2)Ingresar como cliente 3)Finalizar Programa"
    );
    opcion = parseInt(menu);

    switch (opcion) {
      case 1:
        calcularCuotas();
        break;
      case 2:
        
        break;
      case 3:
        alert("Usted finalizo el programa.");
        break;
      default:
        alert("Debe ingresar una opcion correcta.");
        break;
    }
  } while (menu != "3");
}
