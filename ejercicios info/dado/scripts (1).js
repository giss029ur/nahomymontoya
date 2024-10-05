function dado(){
    let numero = document.getElementById('num').value;
    let salida = document. getElementById('out');
    let min = 1;
    let random = Math.floor(Math.random() * (numero - min + 1)) + min;
    salida.textContent = random; 
    Math.floor(Math.random() * (max - min + 1)) + min;
}
