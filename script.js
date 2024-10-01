document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Este comando evita o envio do formulario inicial
 
    const numero = parseInt(document.getElementById('numero').value);
    // numero inicial a ser digitado.
 
    const indice = parseInt(document.getElementById('indice').value);
    // incremento, que sera somado x vezes.
    const outputElement = document.getElementById('output');
 
outptElement.innerHTML = '';
    // Limpa o conteudo anterior ... um pouco de organização é bom! rss
 
    let soma = numero; // Incializa a soma com o numero inicial que vc inseriu.
 
    for (let i = 1; i <= indice ;i++) {//Esta é a estrutura de For,
        const para = document.createElement('p');
    para.textContent = 'Iteração ${i}: ${soma}';
outptElement.appendChild(para);
 
soma += numero; // Soma o numero inicial a cada iteração, curtiram?
}
});