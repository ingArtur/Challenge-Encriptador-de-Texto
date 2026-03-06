const btnCopiar = document.querySelector(".copiar-btn");

// Validar que solo contenga letras minúsculas sin acentos y espacios
function validarTexto(texto) {
    return /^[a-z\s]+$/.test(texto);
}

// Encriptar texto
function encriptar() {
    let texto = document.getElementById("texto").value;
    if (!texto) {
        mostrarAlerta("Por favor, ingrese un texto para encriptar.");
        return;
    }
    if (!validarTexto(texto)) {
        mostrarAlerta("Solo se permiten letras minúsculas y sin acentos.");
        return;
    }
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarResultado(textoEncriptado);
}

// Desencriptar texto
function desencriptar() {
    let texto = document.getElementById("texto").value;
    if (!texto) {
        mostrarAlerta("Por favor, ingrese un texto para desencriptar.");
        return;
    }
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(textoDesencriptado);
}

// Mostrar resultado en el panel de salida
function mostrarResultado(texto) {
    document.getElementById("mensaje").value = texto;
    document.getElementById("titulo-mensaje").textContent = "";
    document.getElementById("parrafo").textContent = "";
    document.getElementById("imagen-output").style.display = "none";
    document.getElementById("mensaje-encriptado").style.display = "flex";
    btnCopiar.style.visibility = "visible";
}

// Copiar texto al portapapeles
function copiar() {
    let textCopi = document.getElementById("mensaje");
    navigator.clipboard.writeText(textCopi.value).then(() => {
        document.getElementById("texto").value = "";
        document.getElementById("texto").focus();
        mostrarAlerta("Texto copiado al portapapeles.", "success");
    });
}

// Mostrar alerta personalizada
function mostrarAlerta(mensaje, tipo = "error") {
    let alerta = document.getElementById("alerta");
    alerta.textContent = mensaje;
    alerta.style.backgroundColor = tipo === "success" ? "#28a745" : "#dc3545";
    alerta.style.display = "block";
    setTimeout(() => {
        alerta.style.display = "none";
    }, 3000);
}
