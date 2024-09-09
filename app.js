function pesquisar(){
    let section = document.getElementById("resultado-pesquisa")

    /* barra de pesquisa*/
    let compoPesquisa = document.getElementById("compo-pesquisa").value
    if (compoPesquisa == ""){
        section.innerHTML = " <p>Nada Encontrado</p>"
        return
    }

    compoPesquisa = compoPesquisa.toLowerCase(),

    console.log(section);

    let resultado = "";
    let titulo = "";
    let  discricao = "";
    let  tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        discricao = dado.discricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (dado.titulo.includes(compoPesquisa) || discricao.includes(compoPesquisa) || tags.includes(compoPesquisa)){
            resultado += `
            <div class="item-pesquisa">
                 <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="discricao-meta">${dado.discricao}</p>
                <a href="${dado.link}" target="_blank">Mais informação</a>
            </div>
        `;
        }
        }

        if (!resultado == ""){
            resultado = " <p>Nada Encontrado</p>"
        }
        section.innerHTML = resultado
     }
    
     


/* explicação do codigo  acima
 // Função para gerar e exibir o conteúdo de pesquisa
 function pesquisar() {
    // Seleciona o elemento section onde o conteúdo será inserido
    let section = document.getElementById("resultado-pesquisa");

    // Log do elemento para garantir que está correto
    console.log(section);

    // Variável para armazenar o HTML gerado
    let resultado = "";

    // Itera sobre cada item nos dados
    for (let dado of dados) {
        // Adiciona um bloco de HTML para cada item
        resultado += `
        <div class="item-pesquisa">
             <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informação</a>
        </div>
        `;
    }

    // Atualiza o conteúdo da section com o HTML gerado
    section.innerHTML = resultado;
}
*/


