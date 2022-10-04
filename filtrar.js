function filtrar() {
    //valor que o usuario digitou
    let expressao = input_busca.value.toLowerCase();

    //pegando todas as linhas (<tr>) da tabela
    let linhas = tabela_compras.getElementsByTagName('tr');

    for (let posicao in linhas) {
        if (isNaN(posicao) ) {
            continue;
        }

        //se dentro da linha atual (<tr>) existir a expressao
        //digitada pelo usuario, mostrar a linha
        //se nao, esconde a linha  


        let coluna1 = linhas[posicao].children[1].innerText.toLowerCase();
        let coluna2 = linhas[posicao].children[2].innerText.toLowerCase();

        let colunas = coluna1 + coluna2; 

        // let linha = linhas[posicao].innerText.toLowerCase();

        if ( colunas.includes(expressao) ) {
            linhas[posicao].style.display = '';
        } else {
            linhas[posicao].style.display = 'none';
        }
    }
}   