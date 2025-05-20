// Array com todos os produtos
const listaProdutos = [
    { 
        id: 1,
        name: "Gordon'S London Dry Gin 750ml", 
        description: "Gin com teor alcoólico de 43% vol. Contém 750ml.", 
        valor: "R$ 79,99", 
        price: 79.99, 
        category: "destilados", 
        image: "img/gordon's_london_dry_gin_750ml.jpg" 
    },
    { 
        id: 2,
        name: "Vodka Orloff 1L", 
        description: "Vodka com teor alcoólico de 37,5% vol. Contém 1L.", 
        valor: "R$ 56,99", 
        price: 56.99, 
        category: "destilados", 
        image: "img/vodka_orloff_1l.jpg"    
    },
    {   id: 3,
        name: "Dreher 900ml", 
        description: "Dreher com teor alcoólico de 33% vol. Contém 900ml.", 
        valor: "R$ 52,24", 
        price: 52.24, 
        category: "destilados", 
        image: "img/dreher_900ml.jpg"    
    },
    { 
        id: 4,
        name: "Rum Montilla Carta Branca 1L", 
        description: "Montilla Carta Branca com teor alcoólico de 36% vol. Contém 900ml.", 
        valor: "R$ 45,25", 
        price: 45.25, 
        category: "destilados", 
        image: "img/rum_montilla_carta_branca_1l.jpg"    
    },
    {   id: 5,
        name: "Campari 748ml", 
        description: "Cmapari com teor alcoólico de 28,5% vol. Contém 748ml.", 
        valor: "R$ 52,60", 
        price: 52.60, 
        category: "destilados", 
        image: "img/campari_748ml.jpg"    
    },
    {   id: 6,
        name: "Vinho Quinta do Morgado 750ml", 
        description: "Vinho: Suave. Teor alcoólico de 10% vol.Contém 750ml.", 
        valor: "R$ 22,90", 
        price: 22.90, 
        category: "variedades", 
        image: "img/vinho_quinta_do_morgado_suave_750ml.jpg"    
    },
    {   id: 7,
        name: "Cerveja Petra Pack c/12 Latas 350ml", 
        description: "Contém 12 latas. Cada lata com 350ml. Cerveja Puro Malte.", 
        valor: "R$ 45,90", 
        price: 45.90, 
        category: "cervejas", 
        image: "img/cerveja_petra_fardo_latinha_350ml.jpg"    
    },
    {   
        id: 8,
        name: "Cerveja Skol Pilsen Pack c/12 Latas 350ml", 
        description: "Contém 12 latas. Cada lata com 350ml. Cerveja pilsen.", 
        valor: "R$ 49,90", 
        price: 49.90, 
        category: "cervejas", 
        image: "img/cerveja_skol_pilsen _fardo_350ml.jpg"    
    },
    { 
        id: 9,
        name: "Cerveja Heineken Long Neck Pack c/6 garrafa 330ml", 
        description: "Contém 6 garrafas. Cada garrafa contém 330ml.", 
        valor: "R$ 49,99", 
        price: 49.99, 
        category: "cervejas", 
        image: "img/cerveja_heineken_long_neck_fardo_330ml.jpg"    
    },
    { 
        id: 10,
        name: "Cachaça Ypioca Ouro 965ml", 
        description: "Marca: Ypioca.<br>Tipo: Ouro.<br>Contém: 965ml.", 
        valor: "R$ 4,99", 
        price: 4.99, 
        category: "destilados", 
        image: "img/cachaca_ypioca_ouro_965ml.jpg"    
    },
    { 
        id: 11,
        name: "Cigarro K-Lint Silver c/20 unidades", 
        description: "Marca: K-Lint.<br>Unidades:20.<br>Tipo: Silver.", 
        valor: "R$ 2,50", 
        price: 2.50, 
        category: "variedades", 
        image: "img/cigarro_klint_20unidades.jpg"    
    },
    { 
        id: 12,
        name: "Coca Cola Original 1,5L", 
        description: "Refrigerante com sabor original. O recipiente de plástico contém 1,5L.", 
        valor: "R$ 3,50", 
        price: 3.50, 
        category: "refrigerantes", 
        image: "img/coca_cola_original_garrafa_1.5l.jpg"    
    },
    { 
        id: 13,
        name: "Vodka Slova - 970ml", 
        description: "Vodka Slova com teor alcoólico de 37,5% vol. Contém 970ml.", 
        valor: "R$ 15,00", 
        price: 15.00, 
        category: "destilados",
        image: "img/vodka_slova_970ml.jpg"    
    },
    { 
        id: 14,
        name: "Cerveja Petra Lata 350ml", 
        description: "Cerveja Puro Malte. Contém 1 lata de 350ml", 
        valor: "R$ 4,50", 
        price: 4.50, 
        category: "cervejas", 
        image: "img/cerveja_petra_lata_350ml.jpg"    
    },
    { 
        id: 15,
        name: "Cerveja Skol Lata 350ml", 
        description: "Cerveja Pilsen. Contém 1 lata de 350ml.", 
        valor: "R$ 3,50", 
        price: 3.50, 
        category: "cervejas", 
        image: "img/cerveja_skol_pilsen_lata_350ml.jpg"    
    },
    { 
        id: 16,
        name: "Cerveja Heineken Long Neck Pack Garrafa 330ml", 
        description: "Contém 1 garrafa contendo 330ml.", 
        valor: "R$ 8,90", 
        price: 8.90, 
        category: "cervejas", 
        image: "img/cerveja_heineken_long_neck_garrafa_330ml.jpg"    
    },
    { 
        id: 17,
        name: "Molho - Tomate", 
        description: "Molho de tomate pronto para massas e pizzas.", 
        valor: "R$ 4,00", 
        price: 4.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 18,
        name: "Massa - Lasanha", 
        description: "Massa para lasanha fresca e deliciosa.", 
        valor: "R$ 6,50", 
        price: 6.50, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 19,
        name: "Queijo - Mussarela", 
        description: "Queijo mussarela fresco para pizzas e lanches.", 
        valor: "R$ 12,00", 
        price: 12.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 20,
        name: "Presunto - Cozido", 
        description: "Presunto cozido para sanduíches e pratos rápidos.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 21,
        name: "Iogurte - Natural", 
        description: "Iogurte natural rico em probióticos para uma dieta saudável.", 
        valor: "R$ 5,00", 
        price: 5.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 22,
        name: "Azeite - Oliva", 
        description: "Azeite de oliva extra virgem para saladas e cozimentos.", 
        valor: "R$ 20,00", 
        price: 20.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 23,
        name: "Polpa - Frutas", 
        description: "Polpa de frutas congelada para sucos naturais.", 
        valor: "R$ 8,00", 
        price: 8.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 24,
        name: "Sabonete - Flora", 
        description: "Sabonete hidratante para pele macia e limpa.", 
        valor: "R$ 5,69", 
        price: 5.69, 
        category: "higiene", 
        image: "img/imgproduto196.jpg" 
    },
    { 
        id: 25,
        name: "Detergente - Ypê", 
        description: "Detergente eficiente para limpeza de louças e utensílios.", 
        valor: "R$ 1,99", 
        price: 1.99, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 26,
        name: "Papel Higiênico - Fofinho", 
        description: "Papel higiênico macio e absorvente para uso diário.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 27,
        name: "Creme Dental - Colgate", 
        description: "Creme dental para higiene bucal completa.", 
        valor: "R$ 6,00", 
        price: 6.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 28,
        name: "Desodorante - Rexona", 
        description: "Desodorante antitranspirante para proteção duradoura.", 
        valor: "R$ 12,00", 
        price: 12.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 29,
        name: "Absorvente - Intimus", 
        description: "Absorvente feminino para maior conforto no dia a dia.", 
        valor: "R$ 8,00", 
        price: 8.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 30,
        name: "Sabonete Líquido - Dove", 
        description: "Sabonete líquido hidratante para pele macia e suave.", 
        valor: "R$ 15,00", 
        price: 15.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 31,
        name: "Escova de Dentes - Oral-B", 
        description: "Escova de dentes com cerdas macias para uma limpeza profunda.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 32,
        name: "Fio Dental - Johnson", 
        description: "Fio dental para limpeza interdental eficaz.", 
        valor: "R$ 5,00", 
        price: 5.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 33,
        name: "Algodão - Hidrófilo", 
        description: "Algodão hidrófilo para cuidados pessoais e limpeza.", 
        valor: "R$ 7,00", 
        price: 7.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 34,
        name: "Lenços Umedecidos - Baby", 
        description: "Lenços umedecidos para bebês, suaves e seguros.", 
        valor: "R$ 12,00", 
        price: 12.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 35,
        name: "Protetor Solar - Nivea", 
        description: "Protetor solar FPS 50 para proteção contra raios UV.", 
        valor: "R$ 30,00", 
        price: 30.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 36,
        name: "Lâmina de Barbear - Gillette", 
        description: "Lâmina de barbear para um barbear perfeito e confortável.", 
        valor: "R$ 18,00", 
        price: 18.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 37,
        name: "Condicionador - Pantene", 
        description: "Condicionador para cabelos sedosos e fáceis de pentear.", 
        valor: "R$ 14,00", 
        price: 14.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 38,
        name: "Esponja de Banho - Lux", 
        description: "Esponja de banho para uma limpeza eficaz e relaxante.", 
        valor: "R$ 5,00", 
        price: 5.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 39,
        name: "Cotonete - Johnson", 
        description: "Cotonetes para limpeza dos ouvidos e cuidados pessoais.", 
        valor: "R$ 6,00", 
        price: 6.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 40,
        name: "Coca-Cola - Zero", 
        description: "Refrigerante Coca-Cola Zero sem açúcar.", 
        valor: "R$ 3,00", 
        price: 3.00, 
        category: "bebidas", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 41,
        name: "Leite - Integral", 
        description: "Leite integral fresco e nutritivo para sua família.", 
        valor: "R$ 3,99", 
        price: 3.99, 
        category: "bebidas", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 42,
        name: "Refrigerante - Guaraná", 
        description: "Refrigerante sabor guaraná, refrescante e energizante.", 
        valor: "R$ 4,00", 
        price: 4.00, 
        category: "bebidas", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 43,
        name: "Chá - Verde", 
        description: "Chá verde para um estilo de vida saudável e revitalizante.", 
        valor: "R$ 5,00", 
        price: 5.00, 
        category: "bebidas", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 44,
        name: "Energético - Red Bull", 
        description: "Energético Red Bull para aumentar sua energia e foco.", 
        valor: "R$ 8,00", 
        price: 8.00, 
        category: "bebidas", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 45,
        name: "Vinho - Tinto", 
        description: "Vinho tinto encorpado para ocasiões especiais e harmonizações.", 
        valor: "R$ 40,00", 
        price: 40.00, 
        category: "bebidas", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 46,
        name: "Whisky - Chivas", 
        description: "Whisky premium Chivas Regal para apreciadores de destilados.", 
        valor: "R$ 150,00", 
        price: 150.00, 
        category: "bebidas", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 47,
        name: "Suco - Natural", 
        description: "Suco natural de frutas frescas para uma bebida saudável.", 
        valor: "R$ 6,00", 
        price: 6.00, 
        category: "bebidas", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 48,
        name: "Cerveja - Pilsen", 
        description: "Cerveja pilsen gelada para momentos de descontração.", 
        valor: "R$ 3,50", 
        price: 3.50, 
        category: "bebidas", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 49,
        name: "Licor - Amarula", 
        description: "Licor cremoso Amarula para sobremesas e drinks.", 
        valor: "R$ 60,00", 
        price: 60.00, 
        category: "bebidas", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 50,
        name: "Água com Gás - Perrier", 
        description: "Água com gás importada Perrier para momentos sofisticados.", 
        valor: "R$ 8,00", 
        price: 8.00, 
        category: "bebidas", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 51,
        name: "Refrigerante - Fanta", 
        description: "Refrigerante sabor laranja, doce e refrescante.", 
        valor: "R$ 4,00", 
        price: 4.00, 
        category: "bebidas", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 52,
        name: "Chá - Camomila", 
        description: "Chá de camomila relaxante para momentos de tranquilidade.", 
        valor: "R$ 5,00", 
        price: 5.00, 
        category: "bebidas", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 53,
        name: "Suco - Detox", 
        description: "Suco detox para desintoxicação e revitalização do corpo.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "bebidas", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 54,
        name: "Refrigerante - Sprite", 
        description: "Refrigerante sabor limão, leve e refrescante.", 
        valor: "R$ 4,00", 
        price: 4.00, 
        category: "bebidas", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 55,
        name: "Carne - Bovina", 
        description: "Carne bovina fresca para churrascos e grelhados.", 
        valor: "R$ 25,99", 
        price: 25.99, 
        category: "carne", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 56,
        name: "Frango - Resfriado", 
        description: "Frango resfriado fresco para assados e grelhados.", 
        valor: "R$ 12,99", 
        price: 12.99, 
        category: "carne", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 57,
        name: "Peixe - Tilápia", 
        description: "Peixe tilápia fresco para grelhados e assados.", 
        valor: "R$ 15,99", 
        price: 15.99, 
        category: "carne", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 58,
        name: "Linguiça - Calabresa", 
        description: "Linguiça calabresa defumada para churrascos e petiscos.", 
        valor: "R$ 15,00", 
        price: 15.00, 
        category: "carne", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 59,
        name: "Costela - Bovina", 
        description: "Costela bovina para assados lentos e saborosos.", 
        valor: "R$ 30,00", 
        price: 30.00, 
        category: "carne", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 60,
        name: "Peixe - Salmão", 
        description: "Peixe salmão fresco para grelhados e ceviches.", 
        valor: "R$ 50,00", 
        price: 50.00, 
        category: "carne", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 61,
        name: "Milho - Verde", 
        description: "Milho verde fresco para sucos ou acompanhamentos.", 
        valor: "R$ 3,50", 
        price: 3.50, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 61,
        name: "Trigo - Integral", 
        description: "Farinha de trigo integral para receitas saudáveis.", 
        valor: "R$ 6,00", 
        price: 6.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 63,
        name: "Quinoa - Branca", 
        description: "Quinoa branca rica em proteínas e nutrientes.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 64,
        name: "Cuscuz - Marroquino", 
        description: "Cuscuz marroquino para pratos exóticos e nutritivos.", 
        valor: "R$ 8,50", 
        price: 8.50, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 65,
        name: "Geleia - Morango", 
        description: "Geleia de morango artesanal para torradas e sobremesas.", 
        valor: "R$ 7,00", 
        price: 7.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 66,
        name: "Pipoca - Grãos", 
        description: "Grãos de pipoca para snacks caseiros.", 
        valor: "R$ 5,00", 
        price: 5.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 67,
        name: "Leite Condensado", 
        description: "Leite condensado para doces e sobremesas.", 
        valor: "R$ 9,00", 
        price: 9.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 68,
        name: "Chocolate - Meio Amargo", 
        description: "Chocolate meio amargo para receitas ou consumo direto.", 
        valor: "R$ 12,00", 
        price: 12.00, 
        category: "alimentos", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 69,
        name: "Álcool Gel - 70%", 
        description: "Álcool gel antisséptico para higienização das mãos.", 
        valor: "R$ 8,00", 
        price: 8.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 70,
        name: "Sabonete Íntimo - Femfresh", 
        description: "Sabonete íntimo para cuidados diários.", 
        valor: "R$ 15,00", 
        price: 15.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 71,
        name: "Desinfetante - Pinho", 
        description: "Desinfetante com aroma de pinho para limpeza geral.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 72,
        name: "Linguiça - Toscana", 
        description: "Linguiça toscana temperada para grelhados.", 
        valor: "R$ 18,00", 
        price: 18.00, 
        category: "carne", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 73,
        name: "Frango - Desossado", 
        description: "Peito de frango desossado para preparações rápidas.", 
        valor: "R$ 14,99", 
        price: 14.99, 
        category: "carne", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 74,
        name: "Paleta - Suína", 
        description: "Paleta suína ideal para assados lentos.", 
        valor: "R$ 22,00", 
        price: 22.00, 
        category: "carne", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 75,
        name: "Filé Mignon - Bovino", 
        description: "Filé mignon bovino para cortes refinados e churrascos.", 
        valor: "R$ 45,00", 
        price: 45.00, 
        category: "carne", 
        image: "img/imgproduto196.jpg"    
    }
];
