const txtArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

function encriptarTexto() {
    const textoEncriptado = encriptar(txtArea.value);
    mensaje.value = textoEncriptado;
    txtArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(texto) {
    return matrizCodigo.reduce((acc, [letra, reemplazo]) => {
    return acc.replaceAll(letra, reemplazo);
  }, texto.toLowerCase());
}

function desencriptarTexto() {
    const textoDesencriptado = desencriptar(txtArea.value);
    mensaje.value = textoDesencriptado;
    txtArea.value = "";
}

function desencriptar(texto) {
    return matrizCodigo.reduce((acc, [letra, reemplazo]) => {
    return acc.replaceAll(reemplazo, letra);
  }, texto.toLowerCase());
}

function copiarTexto() {
    const textoCopiado = mensaje.value;
    txtArea.value = textoCopiado;
    mensaje.value = "";
}

// Event listeners para los botones
document.querySelector(".btn-encriptar").addEventListener("click", encriptarTexto);
document.querySelector(".btn-desencriptar").addEventListener("click", desencriptarTexto);
document.querySelector(".copiar").addEventListener("click", copiarTexto);
