const btnCopiar = document.querySelector(".copiar-btn");
let textoEncriptadoCopiado = "";

// Encriptar texto
function encriptar() {
    let texto = document.getElementById("texto").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    if (!texto) {
        mostrarAlerta();
        return;
    }
    document.getElementById("mensaje-encriptado").style.display = "block";
    document.getElementById("mensaje").value = textoEncriptado;
    document.getElementById("titulo-mensaje").textContent = "";
    document.getElementById("parrafo").textContent = "";

    document.getElementById("imagen-output").style.display = "none";
    document.getElementById("mensaje-encriptado").style.display = "flex";
    btnCopiar.style.visibility = "inherit";
}

// Desencriptar texto
function desencriptar() {
    let texto = document.getElementById("texto").value;
    if (texto !== textoEncriptadoCopiado) {
        mostrarAlerta("Por favor, pegue el texto copiado para desencriptar.");
        return;
    }
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    if (!texto) {
        mostrarAlerta("Por favor, ingrese un texto.");
        return;
    }

    document.getElementById("mensaje-encriptado").style.display = "block";
    document.getElementById("mensaje").value = textoDesencriptado;
    document.getElementById("titulo-mensaje").textContent = "";
    document.getElementById("parrafo").textContent = "";
}

// Copiar texto encriptado
function copiar() {
    document.getElementById("texto").placeholder = "";
    let textCopi = document.getElementById("mensaje");
    textCopi.select();
    document.execCommand("copy");
    textoEncriptadoCopiado = textCopi.value; // Guardar el texto copiado
    limpiar();

    foco();
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Texto copiado",
        showConfirmButton: false,
        timer: 1500,
    });
}

// Mostrar alerta personalizada
function mostrarAlerta(mensaje = "Por favor, ingrese un texto.") {
    let alerta = document.getElementById("alerta");
    alerta.textContent = mensaje;
    alerta.style.display = "block";
    setTimeout(() => {
        alerta.style.display = "none";
    }, 3000);
}

// Funciones auxiliares
function limpiar() {
    document.getElementById("texto").value = "";
}

function foco() {
    document.getElementById("texto").focus();
}
