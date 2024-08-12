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
        { name: 'Linguiça', price: 'R$15,00', image: 'link_da_imagem37', description: 'Linguiça artesanal.' },
        { name: 'Queijo Coalho', price: 'R$12,00', image: 'link_da_imagem38', description: 'Queijo coalho assado.' },
        { name: 'Pão de Alho', price: 'R$10,00', image: 'link_da_imagem39', description: 'Pão de alho crocante.' },
        { name: 'Frango à Passarinho', price: 'R$18,00', image: 'link_da_imagem40', description: 'Frango à passarinho crocante.' },
        { name: 'Batata Frita', price: 'R$10,00', image: 'link_da_imagem41', description: 'Batata frita sequinha.' },
        { name: 'Mandioca Frita', price: 'R$12,00', image: 'link_da_imagem42', description: 'Mandioca frita crocante.' },
        { name: 'Torresmo', price: 'R$15,00', image: 'link_da_imagem43', description: 'Torresmo pururuca.' },
        { name: 'Costelinha de Porco', price: 'R$25,00', image: 'link_da_imagem44', description: 'Costelinha suína assada.' },
        { name: 'Coração de Galinha', price: 'R$14,00', image: 'link_da_imagem45', description: 'Coração de galinha grelhado.' },
        { name: 'Provolone à Milanesa', price: 'R$20,00', image: 'link_da_imagem46', description: 'Provolone empanado e frito.' },
        { name: 'Mini Churros', price: 'R$8,00', image: 'link_da_imagem47', description: 'Mini churros com doce de leite.' },
        { name: 'Polenta Frita', price: 'R$11,00', image: 'link_da_imagem48', description: 'Polenta frita crocante.' }
    ],
    acompanhamentos: [
        { name: 'Arroz Branco', price: 'R$10,00', image: 'link_da_imagem49', description: 'Arroz branco soltinho.' },
        { name: 'Feijão Tropeiro', price: 'R$15,00', image: 'link_da_imagem50', description: 'Feijão tropeiro com bacon.' },
        { name: 'Farofa', price: 'R$8,00', image: 'link_da_imagem51', description: 'Farofa crocante.' },
        { name: 'Vinagrete', price: 'R$7,00', image: 'link_da_imagem52', description: 'Vinagrete fresco.' },
        { name: 'Batata Assada', price: 'R$12,00', image: 'link_da_imagem53', description: 'Batata assada com ervas.' },
        { name: 'Purê de Batata', price: 'R$10,00', image: 'link_da_imagem54', description: 'Purê de batata cremoso.' },
        { name: 'Legumes Salteados', price: 'R$14,00', image: 'link_da_imagem55', description: 'Legumes salteados na manteiga.' },
        { name: 'Arroz à Grega', price: 'R$12,00', image: 'link_da_imagem56', description: 'Arroz à grega com passas.' },
        { name: 'Polenta Frita', price: 'R$11,00', image: 'link_da_imagem57', description: 'Polenta frita crocante.' },
        { name: 'Maionese de Batata', price: 'R$13,00', image: 'link_da_imagem58', description: 'Salada de batata com maionese.' },
        { name: 'Cuscuz Paulista', price: 'R$16,00', image: 'link_da_imagem59', description: 'Cuscuz paulista com frango.' },
        { name: 'Risoto de Queijo', price: 'R$18,00', image: 'link_da_imagem60', description: 'Risoto cremoso de queijo.' }
    ],
    saladas: [
        { name: 'Salada de Alface', price: 'R$15,00', image: 'link_da_imagem', description: 'Fresca e crocante.' },
        { name: 'Salada de Tomate', price: 'R$12,00', image: 'link_da_imagem', description: 'Tomates frescos com azeite.' },
        { name: 'Salada de Cenoura', price: 'R$10,00', image: 'link_da_imagem', description: 'Cenoura ralada fresca.' },
        { name: 'Salada de Rúcula', price: 'R$13,00', image: 'link_da_imagem', description: 'Rúcula com molho especial.' },
        { name: 'Salada Mista', price: 'R$18,00', image: 'link_da_imagem', description: 'Mix de folhas e vegetais.' },
        { name: 'Salada de Pepino', price: 'R$10,00', image: 'link_da_imagem22', description: 'Pepino fatiado com vinagre.' },
        { name: 'Salada de Grão de Bico', price: 'R$17,00', image: 'link_da_imagem23', description: 'Grão de bico com legumes.' },
        { name: 'Salada de Espinafre', price: 'R$15,00', image: 'link_da_imagem24', description: 'Espinafre com molho de iogurte.' }
    ],
    sobremesas: [
        { name: 'Pudim', price: 'R$10,00', image: 'link_da_imagem', description: 'Pudim de leite condensado.' },
        { name: 'Brigadeiro', price: 'R$5,00', image: 'link_da_imagem', description: 'Doce de chocolate com granulado.' },
        { name: 'Mousse de Maracujá', price: 'R$8,00', image: 'link_da_imagem', description: 'Mousse de maracujá refrescante.' },
        { name: 'Torta de Limão', price: 'R$12,00', image: 'link_da_imagem', description: 'Torta de limão com merengue.' },
        { name: 'Torta de Limão', price: 'R$12,00', image: 'link_da_imagem29', description: 'Torta de limão com merengue.' },
        { name: 'Brownie', price: 'R$9,00', image: 'link_da_imagem30', description: 'Brownie de chocolate.' },
        { name: 'Cheesecake', price: 'R$14,00', image: 'link_da_imagem31', description: 'Cheesecake com calda de frutas.' },
        { name: 'Petit Gâteau', price: 'R$15,00', image: 'link_da_imagem32', description: 'Bolo de chocolate com sorvete.' },
        { name: 'Tiramisu', price: 'R$18,00', image: 'link_da_imagem33', description: 'Sobremesa italiana de café e mascarpone.' },
        { name: 'Pavê', price: 'R$11,00', image: 'link_da_imagem34', description: 'Pavê de chocolate e biscoito.' },
        { name: 'Gelatina', price: 'R$6,00', image: 'link_da_imagem35', description: 'Gelatina de frutas variadas.' },
        { name: 'Rocambole', price: 'R$13,00', image: 'link_da_imagem36', description: 'Rocambole de doce de leite.' }
    ],
    bebidas: [
        { name: 'Refrigerante', price: 'R$6,00', image: 'link_da_imagem61', description: 'Refrigerante gelado.' },
        { name: 'Suco de Laranja', price: 'R$8,00', image: 'link_da_imagem62', description: 'Suco de laranja natural.' },
        { name: 'Água Mineral', price: 'R$4,00', image: 'link_da_imagem66', description: 'Água mineral com ou sem gás.' },
        { name: 'Café Expresso', price: 'R$5,00', image: 'link_da_imagem67', description: 'Café expresso.' },
        { name: 'Chá Gelado', price: 'R$7,00', image: 'link_da_imagem68', description: 'Chá gelado de limão.' },
        { name: 'Milkshake', price: 'R$12,00', image: 'link_da_imagem69', description: 'Milkshake de chocolate ou morango.' },
        { name: 'Água de Coco', price: 'R$6,00', image: 'link_da_imagem70', description: 'Água de coco natural.' },
        { name: 'Suco de Abacaxi', price: 'R$8,00', image: 'link_da_imagem71', description: 'Suco de abacaxi com hortelã.' },
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