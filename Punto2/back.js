function verificarEdad() {
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var hoy = new Date();
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();

    if (hoy.getMonth() < fechaNacimientoDate.getMonth() || (hoy.getMonth() === fechaNacimientoDate.getMonth() && hoy.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }

    if (edad >= 18) {
        document.getElementById('resultado').innerHTML = "Es mayor de edad.";
    } else {
        document.getElementById('resultado').innerHTML = "Es menor de edad.";
    }
}