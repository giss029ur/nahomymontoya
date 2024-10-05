
function calcular(){
    let radio = +document.getElementById('radio').value;
    let area = Math.PI * (radio * radio);
    console.log(area);
    document.getElementById('resultado').textContent = area;
}
