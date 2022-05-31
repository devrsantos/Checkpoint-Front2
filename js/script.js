let btn = document.querySelector(".btn");

let divCards = document.querySelector(".cards");

btn.addEventListener("click", e => {
    e.preventDefault();

    let modelo = document.querySelector("#modelo").value;
    let descricao = document.querySelector("#descricao").value;
    let foto = document.querySelector("#foto").value;

    let divProduto = document.createElement("div");
    divProduto.classList.add("produto");
    divCards.appendChild(divProduto);

    let divInfoProduto = document.createElement("div");
    divInfoProduto.classList.add("infoProduto");
    
    h3TituloProduto = document.createElement("h3");
    h3TituloProduto.textContent = "Modelo da Magrela: ";
    divInfoProduto.appendChild(h3TituloProduto);

    let pTituloProduto = document.createElement("p");
    pTituloProduto.textContent = `${modelo}`;

    let pDescricaoProduto = document.createElement("p");
    pDescricaoProduto.textContent = `${descricao}`;

    pTituloProduto.classList.add("tituloProduto");
    pDescricaoProduto.classList.add("descricaoProduto");

    divInfoProduto.appendChild(pTituloProduto);
    
    h3DescricaoProduto = document.createElement("h3");
    h3DescricaoProduto.textContent = "Descrição da Magrela: ";
    divInfoProduto.appendChild(h3DescricaoProduto);

    divInfoProduto.appendChild(pDescricaoProduto);
    
    divProduto.appendChild(divInfoProduto);
    
    let divImgProduto = document.createElement("div");
    let imgProduto = document.createElement("img");
    imgProduto.classList.add("imgProduto");
    
    imgProduto.setAttribute("src", foto);

    divImgProduto.appendChild(imgProduto);

    divImgProduto.classList.add("imgProduto");
    divProduto.appendChild(divImgProduto);

});