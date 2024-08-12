// Este script e para a barra de navegação lateral abrir e fechar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Este script e para a criação dos Cards do cardapio

/* definicação dos  itens do cardapio */

const cardapio = {
    carnes: [
        { name: 'Picanha', price: 'R$45,00', image: './src/Menu/Cad-img/images.jpeg', description: 'Deliciosa picanha suculenta.' },
        { name: 'Costela', price: 'R$40,00', image: './src/Menu/Cad-img/costela.jpg  ', description: 'Costela assada lentamente.' },
        { name: 'Maminha', price: 'R$42,00', image: './src/Menu/Cad-img/maminha.jpg', description: 'Maminha macia e saborosa.' },
        { name: 'Alcatra', price: 'R$38,00', image: './src/Menu/Cad-img/alcatra.jpg', description: 'Alcatra no ponto certo.' },
        { name: 'Fraldinha', price: 'R$39,00', image: './src/Menu/Cad-img/fraldinha.jpg', description: 'Fraldinha suculenta.' },
        { name: 'Cupim', price: 'R$42,00', image: './src/Menu/Cad-img/Cupim.jpg', description: 'Cupim assado lentamente.' },
        { name: 'Filé Mignon', price: 'R$50,00', image: './src/Menu/Cad-img/filemion.jpg', description: 'Filé mignon ao ponto.' },
        { name: 'Contra-filé', price: 'R$37,00', image: './src/Menu/Cad-img/contrafile.jpg', description: 'Contra-filé suculento.' },
        { name: 'Lombo de Porco', price: 'R$33,00', image: './src/Menu/Cad-img/lomboporc.jpg', description: 'Lombo de porco assado.' },
        { name: 'Cordeiro', price: 'R$55,00', image: './src/Menu/Cad-img/cordeiro.jpg', description: 'Cordeiro grelhado.' },
        { name: 'Linguiça', price: 'R$28,00', image: './src/Menu/Cad-img/linguiça.jpg', description: 'Linguiça artesanal grelhada.' },
        { name: 'Coxa de Frango', price: 'R$25,00', image: './src/Menu/Cad-img/coxa.webp', description: 'Coxa de frango suculenta.' }
    ],
    aperitivos: [
        { name: 'Linguiça', price: 'R$15,00', image: 'link_da_imagem', description: 'Linguiça artesanal.' },
        { name: 'Queijo Coalho', price: 'R$12,00', image: 'link_da_imagem', description: 'Queijo coalho assado.' },
        { name: 'Pão de Alho', price: 'R$10,00', image: 'link_da_imagem', description: 'Pão de alho crocante.' },
        { name: 'Frango à Passarinho', price: 'R$18,00', image: 'link_da_imagem', description: 'Frango à passarinho crocante.' },
        { name: 'Batata Frita', price: 'R$10,00', image: 'link_da_imagem', description: 'Batata frita sequinha.' }
    ],
    acompanhamentos: [
        { name: 'Arroz Branco', price: 'R$8,00', image: 'link_da_imagem', description: 'Arroz branco soltinho.' },
        { name: 'Farofa', price: 'R$7,00', image: 'link_da_imagem', description: 'Farofa crocante.' },
        { name: 'Vinagrete', price: 'R$6,00', image: 'link_da_imagem', description: 'Vinagrete fresco.' },
        { name: 'Feijão Tropeiro', price: 'R$12,00', image: 'link_da_imagem', description: 'Feijão tropeiro tradicional.' },
        { name: 'Polenta Frita', price: 'R$10,00', image: 'link_da_imagem', description: 'Polenta frita crocante.' }
    ],
    saladas: [
        { name: 'Salada de Alface', price: 'R$15,00', image: 'link_da_imagem', description: 'Fresca e crocante.' },
        { name: 'Salada de Tomate', price: 'R$12,00', image: 'link_da_imagem', description: 'Tomates frescos com azeite.' },
        { name: 'Salada de Cenoura', price: 'R$10,00', image: 'link_da_imagem', description: 'Cenoura ralada fresca.' },
        { name: 'Salada de Rúcula', price: 'R$13,00', image: 'link_da_imagem', description: 'Rúcula com molho especial.' },
        { name: 'Salada Mista', price: 'R$18,00', image: 'link_da_imagem', description: 'Mix de folhas e vegetais.' }
    ],
    sobremesas: [
        { name: 'Pudim', price: 'R$10,00', image: 'link_da_imagem', description: 'Pudim de leite condensado.' },
        { name: 'Brigadeiro', price: 'R$5,00', image: 'link_da_imagem', description: 'Doce de chocolate com granulado.' },
        { name: 'Mousse de Maracujá', price: 'R$8,00', image: 'link_da_imagem', description: 'Mousse de maracujá refrescante.' },
        { name: 'Torta de Limão', price: 'R$12,00', image: 'link_da_imagem', description: 'Torta de limão com merengue.' },
        { name: 'Sorvete', price: 'R$7,00', image: 'link_da_imagem', description: 'Sorvete de vários sabores.' }
    ],
    bebidas: [
        { name: 'Coca-Cola', price: 'R$5,00', image: 'link_da_imagem', description: 'Refrigerante Coca-Cola 350ml.' },
        { name: 'Guaraná', price: 'R$5,00', image: 'link_da_imagem', description: 'Refrigerante Guaraná 350ml.' },
        { name: 'Suco de Laranja', price: 'R$7,00', image: 'link_da_imagem', description: 'Suco de laranja natural.' },
        { name: 'Água Mineral', price: 'R$3,00', image: 'link_da_imagem', description: 'Água mineral 500ml.' },
        { name: 'Cerveja', price: 'R$8,00', image: 'link_da_imagem', description: 'Cerveja gelada 350ml.' }
    ]
};
function showSection(sectionId) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ''; // Limpa os cards existentes

    const items = cardapio[sectionId]; // Pega os itens da seção selecionada

    // Gera os cards para os itens da seção
    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p style="color:#660505;" ><strong>Preço: ${item.price}</strong></p>
      `;

        cardContainer.appendChild(card);
    });
}

// Mostra a primeira seção por padrão
showSection('carnes');