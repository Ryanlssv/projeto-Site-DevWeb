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
        { name: 'Picanha', price: 'R$45,00', image: './src/Menu/Cad-img-carnes/images.jpeg', description: 'Deliciosa picanha suculenta.' },
        { name: 'Costela', price: 'R$40,00', image: './src/Menu/Cad-img-carnes/costela.jpg  ', description: 'Costela assada lentamente.' },
        { name: 'Maminha', price: 'R$42,00', image: './src/Menu/Cad-img-carnes/maminha.jpg', description: 'Maminha macia e saborosa.' },
        { name: 'Alcatra', price: 'R$38,00', image: './src/Menu/Cad-img-carnes/alcatra.jpg', description: 'Alcatra no ponto certo.' },
        { name: 'Fraldinha', price: 'R$39,00', image: './src/Menu/Cad-img-carnes/fraldinha.jpg', description: 'Fraldinha suculenta.' },
        { name: 'Cupim', price: 'R$42,00', image: './src/Menu/Cad-img-carnes/Cupim.jpg', description: 'Cupim assado lentamente.' },
        { name: 'Filé Mignon', price: 'R$50,00', image: './src/Menu/Cad-img-carnes/filemion.jpg', description: 'Filé mignon ao ponto.' },
        { name: 'Contra-filé', price: 'R$37,00', image: './src/Menu/Cad-img-carnes/contrafile.jpg', description: 'Contra-filé suculento.' },
        { name: 'Lombo de Porco', price: 'R$33,00', image: './src/Menu/Cad-img-carnes/lomboporc.jpg', description: 'Lombo de porco assado.' },
        { name: 'Cordeiro', price: 'R$55,00', image: './src/Menu/Cad-img-carnes/cordeiro.jpg', description: 'Cordeiro grelhado.' },
        { name: 'Linguiça', price: 'R$28,00', image: './src/Menu/Cad-img-carnes/linguiça.jpg', description: 'Linguiça artesanal grelhada.' },
        { name: 'Coxa de Frango', price: 'R$25,00', image: './src/Menu/Cad-img-carnes/coxa.webp', description: 'Coxa de frango suculenta.' }
    ],
    aperitivos: [
        { name: 'Linguiça', price: 'R$15,00', image:'./src/Menu/Card-img-aperitivos/LinguiçaAperitivo.jpg', description: 'Linguiça artesanal.' },
        { name: 'Queijo Coalho', price: 'R$12,00', image:'./src/Menu/Card-img-aperitivos/queijo-coalho.jpg', description: 'Queijo coalho assado.' },
        { name: 'Pão de Alho', price: 'R$10,00', image:'./src/Menu/Card-img-aperitivos/paodealho.webp', description: 'Pão de alho crocante.' },
        { name: 'Frango à Passarinho', price: 'R$18,00', image:'./src/Menu/Card-img-aperitivos/frangoapassaro.jpg', description: 'Frango à passarinho crocante.' },
        { name: 'Batata Frita', price: 'R$10,00', image: './src/Menu/Card-img-aperitivos/batatafrita.jpg', description: 'Batata frita sequinha.' },
        { name: 'Mandioca Frita', price: 'R$12,00', image: './src/Menu/Card-img-aperitivos/mandiocafrita.jpg', description: 'Mandioca frita crocante.' },
        { name: 'Torresmo', price: 'R$15,00', image: './src/Menu/Card-img-aperitivos/toresmo.jpg', description: 'Torresmo pururuca.' },
        { name: 'Provolone à Milanesa', price: 'R$20,00', image: './src/Menu/Card-img-aperitivos/ProvoloneaMilanesa.webp', description: 'Provolone empanado e frito.' },
        { name: 'Polenta Frita', price: 'R$11,00', image: './src/Menu/Card-img-aperitivos/polentafrita.jpg', description: 'Polenta frita crocante.' },
        { name: 'Costelinha de Porco', price: 'R$25,00', image: './src/Menu/Card-img-aperitivos/costela2.jpg', description: 'Costelinha suína assada.' },
        { name: 'Coração de Galinha', price: 'R$14,00', image: './src/Menu/Card-img-aperitivos/coracaogalinha.jpeg', description: 'Coração de galinha grelhado.' },
        { name: 'Pão de Alho', price: 'R$10,00', image: './src/Menu/Card-img-aperitivos/paodealho.webp', description: 'Pão de alho crocante.' }
    ],
    acompanhamentos: [
        { name: 'Arroz Branco', price: 'R$10,00', image: './src/Menu/Card-img-Acompanhamento/arroz.png', description: 'Arroz branco soltinho.' },
        { name: 'Feijão Tropeiro', price: 'R$15,00', image: './src/Menu/Card-img-Acompanhamento/feijaotropeiro.jpeg', description: 'Feijão tropeiro com bacon.' },
        { name: 'Farofa', price: 'R$8,00', image: './src/Menu/Card-img-Acompanhamento/farofa.jpg', description: 'Farofa crocante.' },
        { name: 'Vinagrete', price: 'R$7,00', image: './src/Menu/Card-img-Acompanhamento/vinagrete.webp', description: 'Vinagrete fresco.' },
        { name: 'Batata Assada', price: 'R$12,00', image: './src/Menu/Card-img-Acompanhamento/bataasada.jpg', description: 'Batata assada com ervas.' },
        { name: 'Purê de Batata', price: 'R$10,00', image: './src/Menu/Card-img-Acompanhamento/puredebatata.jpeg', description: 'Purê de batata cremoso.' },
        { name: 'Legumes Salteados', price: 'R$14,00', image: './src/Menu/Card-img-Acompanhamento/vegumes.jpg', description: 'Legumes salteados na manteiga.' },
        { name: 'Arroz à Grega', price: 'R$12,00', image: './src/Menu/Card-img-Acompanhamento/arrozagrega.webp', description: 'Arroz à grega com passas.' },
        { name: 'Polenta Frita', price: 'R$11,00', image: './src/Menu/Card-img-Acompanhamento/polentafrita2.jpg', description: 'Polenta frita crocante.' },
        { name: 'Maionese de Batata', price: 'R$13,00', image: './src/Menu/Card-img-Acompanhamento/maionese.jpg', description: 'Salada de batata com maionese.' },
        { name: 'Cuscuz Paulista', price: 'R$16,00', image: './src/Menu/Card-img-Acompanhamento/arroz.png', description: 'Cuscuz paulista com frango.' },
        { name: 'Risoto de Queijo', price: 'R$18,00', image: './src/Menu/Card-img-Acompanhamento/risoto.jpeg', description: 'Risoto cremoso de queijo.' }
    ],
    saladas: [
        { name: 'Salada de Alface', price: 'R$15,00', image: './src/Menu/Card-img-salada/saladadealface.png', description: 'Fresca e crocante.' },
        { name: 'Salada de Tomate', price: 'R$12,00', image: './src/Menu/Card-img-salada/saladatomate.jpeg', description: 'Tomates frescos com azeite.' },
        { name: 'Salada de Cenoura', price: 'R$10,00', image: './src/Menu/Card-img-salada/saldadecenoura.jpeg', description: 'Cenoura ralada fresca.' },
        { name: 'Salada de Rúcula', price: 'R$13,00', image: './src/Menu/Card-img-salada/rucula.jpeg', description: 'Rúcula com molho especial.' },
        { name: 'Salada Mista', price: 'R$18,00', image: './src/Menu/Card-img-salada/saladamista.jpeg', description: 'Mix de folhas e vegetais.' },
        { name: 'Salada de Pepino', price: 'R$10,00', image: './src/Menu/Card-img-salada/pepino.jpg', description: 'Pepino fatiado com vinagre.' },
        { name: 'Salada de Grão de Bico', price: 'R$17,00', image: './src/Menu/Card-img-salada/graodebico.jpeg', description: 'Grão de bico com legumes.' },
        { name: 'Salada de Rúcula', price: 'R$13,00', image: './src/Menu/Card-img-salada/rucula.jpeg', description: 'Rúcula com molho especial.' },
        { name: 'Salada Mista', price: 'R$18,00', image: './src/Menu/Card-img-salada/saladamista.jpeg', description: 'Mix de folhas e vegetais.' },
        { name: 'Salada de Pepino', price: 'R$10,00', image: './src/Menu/Card-img-salada/pepino.jpg', description: 'Pepino fatiado com vinagre.' },
        { name: 'Salada de Grão de Bico', price: 'R$17,00', image: './src/Menu/Card-img-salada/graodebico.jpeg', description: 'Grão de bico com legumes.' },
        { name: 'Salada de Espinafre', price: 'R$15,00', image: './src/Menu/Card-img-salada/espinafre.jpg', description: 'Espinafre com molho de iogurte.' }
    ],
    sobremesas: [
        { name: 'Pudim', price: 'R$10,00', image: './src/Menu/Card-img-Sobremesa/pudim.jpg', description: 'Pudim de leite condensado.' },
        { name: 'Brigadeiro', price: 'R$5,00', image: './src/Menu/Card-img-Sobremesa/brigadeiro.jpg', description: 'Doce de chocolate com granulado.' },
        { name: 'Mousse de Maracujá', price: 'R$8,00', image: './src/Menu/Card-img-Sobremesa/muse.jpg', description: 'Mousse de maracujá refrescante.' },
        { name: 'Torta de Limão', price: 'R$12,00', image: './src/Menu/Card-img-Sobremesa/tortadelima.webp', description: 'Torta de limão com merengue.' },
        { name: 'Torta de Limão', price: 'R$12,00', image: './src/Menu/Card-img-Sobremesa/tortadelima.webp', description: 'Torta de limão com merengue.' },
        { name: 'Brownie', price: 'R$9,00', image: './src/Menu/Card-img-Sobremesa/Brownie.jpg', description: 'Brownie de chocolate.' },
        { name: 'Cheesecake', price: 'R$14,00', image: './src/Menu/Card-img-Sobremesa/Cheesecake.jpg', description: 'Cheesecake com calda de frutas.' },
        { name: 'Petit Gâteau', price: 'R$15,00', image: './src/Menu/Card-img-Sobremesa/petit-gateau.webp', description: 'Bolo de chocolate com sorvete.' },
        { name: 'Tiramisu', price: 'R$18,00', image: './src/Menu/Card-img-Sobremesa/Tiramisu.jpg', description: 'Sobremesa italiana de café e mascarpone.' },
        { name: 'Pavê', price: 'R$11,00', image: './src/Menu/Card-img-Sobremesa/Pave.jpg', description: 'Pavê de chocolate e biscoito.' },
        { name: 'Gelatina', price: 'R$6,00', image: './src/Menu/Card-img-Sobremesa/Gelatina.jpg', description: 'Gelatina de frutas variadas.' },
        { name: 'Rocambole', price: 'R$13,00', image: './src/Menu/Card-img-Sobremesa/Rocambole.jpg', description: 'Rocambole de doce de leite.' }
    ],
    bebidas: [
        { name: 'Refrigerante', price: 'R$6,00', image: './src/Menu/Card-img-Bebidas/refri.jpg', description: 'Refrigerante gelado.' },
        { name: 'Suco de Laranja', price: 'R$8,00', image: './src/Menu/Card-img-Bebidas/sucolara.jpg', description: 'Suco de laranja natural.' },
        { name: 'Água com gás', price: 'R$,00', image: './src/Menu/Card-img-Bebidas/agua.jpg', description: 'Água mineral com ou sem gás.' },
        { name: 'Milkshake', price: 'R$12,00', image: './src/Menu/Card-img-Bebidas/Milkshake.jpg', description: 'Milkshake de chocolate ou morango.' },
        { name: 'Água de Coco', price: 'R$6,00', image: './src/Menu/Card-img-Bebidas/AguadeCoco.jpg', description: 'Água de coco natural.' },
        { name: 'Suco de Abacaxi', price: 'R$8,00', image: './src/Menu/Card-img-Bebidas/SucodeAbacaxi.jpg', description: 'Suco de abacaxi com hortelã.' },
        { name: 'Milkshake', price: 'R$12,00', image: './src/Menu/Card-img-Bebidas/Milkshake.jpg', description: 'Milkshake de chocolate ou morango.' },
        { name: 'Refrigerante', price: 'R$6,00', image: './src/Menu/Card-img-Bebidas/refri.jpg', description: 'Refrigerante gelado.' },
        { name: 'Suco de Laranja', price: 'R$8,00', image: './src/Menu/Card-img-Bebidas/sucolara.jpg', description: 'Suco de laranja natural.' },
        { name: 'Milkshake', price: 'R$12,00', image: './src/Menu/Card-img-Bebidas/Milkshake.jpg', description: 'Milkshake de chocolate ou morango.' },
        { name: 'Água de Coco', price: 'R$6,00', image: './src/Menu/Card-img-Bebidas/AguadeCoco.jpg', description: 'Água de coco natural.' },
        { name: 'Suco de Abacaxi', price: 'R$8,00', image: './src/Menu/Card-img-Bebidas/SucodeAbacaxi.jpg', description: 'Suco de abacaxi com hortelã.' }
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
          <h2>${item.name}</h2>
          <h3>${item.description}</h3>
          <h2 style="color:#660505;" ><strong>Preço: ${item.price}</strong></h2>
      `;

        cardContainer.appendChild(card);
    });
}

// Mostra a primeira seção por padrão
showSection('carnes');