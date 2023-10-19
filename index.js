//formulario de ingreso
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    domicilio: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    provincia: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    usuario: false,
    nombre: false,
    apellido: false,
    domicilio: false,
    provincia: false,
    password: false,
    correo: false,
    telefono: false
}

const validarCampo = (expresion, input, campo) => {
    const grupo = input.parentElement;
    const icono = grupo.querySelector('i');

    if (expresion.test(input.value)) {
        grupo.classList.remove('formulario__grupo-incorrecto');
        grupo.classList.add('formulario__grupo-correcto');
        icono.classList.remove('fa-times-circle');
        icono.classList.add('fa-check-circle');
        campos[campo] = true;
    } else {
        grupo.classList.add('formulario__grupo-incorrecto');
        grupo.classList.remove('formulario__grupo-correcto');
        icono.classList.remove('fa-check-circle');
        icono.classList.add('fa-times-circle');
        campos[campo] = false;
    }
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
            break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
            break;
        case "domicilio":
            validarCampo(expresiones.domicilio, e.target, 'domicilio');
            break;
        case "provincia":
            validarCampo(expresiones.provincia, e.target, 'provincia');
            break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const mensajeError = document.getElementById('formulario__mensaje');
    const datosContainer = document.getElementById('datos-container');

    if (campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked) {
        mensajeError.classList.remove('formulario__mensaje-activo');
        
        // Crea elementos HTML para mostrar los datos
        const usuarioElement = document.createElement('p');
        usuarioElement.textContent = `Usuario: ${document.getElementById('usuario').value}`;
        
        const nombreElement = document.createElement('p');
        nombreElement.textContent = `Nombre: ${document.getElementById('nombre').value}`;
        
        const apellidoElement = document.createElement('p');
        apellidoElement.textContent = `Apellido: ${document.getElementById('apellido').value}`;
        
        const domicilioElement = document.createElement('p');
        domicilioElement.textContent = `Domicilio: ${document.getElementById('domicilio').value}`;
        
        const provinciaElement = document.createElement('p');
        provinciaElement.textContent = `Provincia: ${document.getElementById('provincia').value}`;
        
        const correoElement = document.createElement('p');
        correoElement.textContent = `Correo: ${document.getElementById('correo').value}`;
        
        const telefonoElement = document.createElement('p');
        telefonoElement.textContent = `Telefono: ${document.getElementById('telefono').value}`;
        
        datosContainer.innerHTML = ''; // Limpia el contenedor antes de agregar nuevos datos
        datosContainer.appendChild(usuarioElement);
        datosContainer.appendChild(nombreElement);
        datosContainer.appendChild(apellidoElement);
        datosContainer.appendChild(domicilioElement);
        datosContainer.appendChild(provinciaElement);
        datosContainer.appendChild(correoElement);
        datosContainer.appendChild(telefonoElement);
        
        // Restablece el formulario después de mostrar los datos
        formulario.reset();
    } else {
        mensajeError.classList.add('formulario__mensaje-activo');
    }
});


//validacion de formulario - trabajar empresa

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const resultado = document.getElementById('resultado');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const correo = document.getElementById('correo').value;
        const telefono = document.getElementById('telefono').value;
        const archivo = document.getElementById('archivo').value;

        // Crea mensaje de resultado
        const mensajeResultado = `
            Nombre: ${nombre}<br>
            Apellido: ${apellido}<br>
            Correo Electrónico: ${correo}<br>
            Teléfono: ${telefono}<br>
            Archivo: ${archivo}
        `;

        // Crea un div para mostrar el resultado
        const resultadoDiv = document.createElement('div');
        resultadoDiv.innerHTML = mensajeResultado;

        // Agregar el div al resultado
        resultado.appendChild(resultadoDiv);
		formulario.reset();
    });
});
