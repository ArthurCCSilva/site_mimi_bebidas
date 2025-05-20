// Array com todos os produtos
const listaProdutos = [
    { 
        id: 1,
        name: "Gordon'S London Dry Gin 750ml", 
        description: "Gin com teor alcoólico de 43% vol.", 
        valor: "R$ 79,99", 
        price: 79.99, 
        category: "destilados", 
        image: "img/gordon's_london_dry_gin_750ml.jpg" 
    },
    { 
        id: 2,
        name: "Vodka Orloff 1L", 
        description: "Vodka com teor alcoólico de 37,5% vol.", 
        valor: "R$ 56,99", 
        price: 56.99, 
        category: "destilados", 
        image: "img/vodka_orloff_1l.jpg"    
    },
    {   id: 3,
        name: "Dreher 900ml", 
        description: "Dreher com teor alcoólico de 33% vol.", 
        valor: "R$ 52,24", 
        price: 52.24, 
        category: "destilados", 
        image: "img/dreher_900ml.jpg"    
    },
    { 
        id: 4,
        name: "Rum Montilla Carta Branca 1L", 
        description: "Montilla Carta Branca com teor alcoólico de 36% vol.", 
        valor: "R$ 45,25", 
        price: 45.25, 
        category: "destilados", 
        image: "img/rum_montilla_carta_branca_1l.jpg"    
    },
    {   id: 5,
        name: "Campari 748ml", 
        description: "Cmapari com teor alcoólico de 28,5% vol.", 
        valor: "R$ 52,60", 
        price: 52.60, 
        category: "destilados", 
        image: "img/campari_748ml.jpg"    
    },
    {   id: 6,
        name: "Vinho Quinta do Morgado 750ml", 
        description: "Vinho: Suave. Teor alcoólico de 10% vol.", 
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
        name: "Cerveja Heineken Long Neck Pack c/6 garrafas 330ml", 
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
        valor: "R$ 20,00", 
        price: 20.00, 
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
        name: "Cerveja Heineken Long Neck Garrafa 330ml", 
        description: "Contém 1 garrafa contendo 330ml.", 
        valor: "R$ 8,90", 
        price: 8.90, 
        category: "cervejas", 
        image: "img/cerveja_heineken_long_neck_garrafa_330ml.jpg"    
    },
    { 
        id: 17,
        name: "Vodka Nordka 900ml", 
        description: "Vodka 5x destilada. Teor alcoólico de 37,5% vol.", 
        valor: "R$ 4,00", 
        price: 4.00, 
        category: "destilados", 
        image: "img/vodka_nordka_900ml.jpg"    
    },
    { 
        id: 18,
        name: "Vodka Intencion 900ml", 
        description: "Vodka 5x destilada. Teor alcoólico de 38% vol.", 
        valor: "R$ 6,50", 
        price: 6.50, 
        category: "destilados", 
        image: "img/vodka_intencion_900ml.jpg"    
    },
    { 
        id: 19,
        name: "Vodka Slova Fruits Blueberry 965ml", 
        description: "Vodka Premium. Teor alcoólico de 13,5% vol.", 
        valor: "R$ 12,00", 
        price: 12.00, 
        category: "destilados", 
        image: "img/vodka_slova_fruits_blueberry_965ml.jpg"    
    },
    { 
        id: 20,
        name: "Vodka Absolut 1L", 
        description: "Vodka com teor alcoólico de 13,5% vol.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "destilados", 
        image: "img/vodka_absolut_1l.jpg"    
    },
    { 
        id: 21,
        name: "Vodka Smirnoff 998ml", 
        description: "Vodka 10x filtrada. Teor alcoólico 37,5%.", 
        valor: "R$ 5,00", 
        price: 5.00, 
        category: "destilados", 
        image: "img/vodka_smirnoff_998ml.jpg"    
    },
    { 
        id: 22,
        name: "Cachaça Ypioca Reserva 965ml", 
        description: "Cachaça envelhecida em barris de carvalho. Teor alcoólico de 38% vol.", 
        valor: "R$ 43,00", 
        price: 43.00, 
        category: "destilados", 
        image: "img/cachaca_ypioca_reserva_965ml.jpg"    
    },
    { 
        id: 23,
        name: "Cachaça Ypioca Prata 965ml", 
        description: "Marca: Ypioca.<br>Tipo: Prata.<br>Contém: 965ml.", 
        valor: "R$ 17,00", 
        price: 17.00, 
        category: "destilados",
        image: "img/cachaca_ypioca_prata_965ml.jpg"    
    },
    { 
        id: 24,
        name: "Cachaça Ypioca Guaraná 1L", 
        description: "Marca: Ypioca.<br>Tipo: Quaraná.<br>Contém: 1L.", 
        valor: "R$ 23,00", 
        price: 23.00, 
        category: "destilados", 
        image: "img/cachaca_ypioca_guarana_1l.jpg" 
    },
    { 
        id: 25,
        name: "Cachaça 51 Ouro 965ml", 
        description: "Marca: 51.<br>Tipo: Ouro.<br>Contém: 965ml.", 
        valor: "R$ 18,00", 
        price: 18.00, 
        category: "destilados", 
        image: "img/cachaca_51_ouro_965ml.jpg"    
    },
    { 
        id: 26,
        name: "Cachaça 51 965ml", 
        description: "Marca: 51.<br>Tipo: Original.<br>Contém: 965ml.", 
        valor: "R$ 16,00", 
        price: 16.00, 
        category: "destilados", 
        image: "img/cachaca_51_965ml.jpg"    
    },
    { 
        id: 27,
        name: "Whisky Black e White 1L", 
        description: "O Whisky Black & White tem mais de um século. Criado por James Buchanan.", 
        valor: "R$ 70,00", 
        price: 70.00, 
        category: "destilados", 
        image: "img/whisky_black_e_white_1l.jpg"    
    },
    { 
        id: 28,
        name: "Gin Tanqueray 750ml", 
        description: "Gin Tanqueray 750ml. Teor alcoólico de 47,3% vol.", 
        valor: "R$ 130,00", 
        price: 130.00, 
        category: "destilados", 
        image: "img/gin_tanqueray_750ml.jpg"    
    },
    { 
        id: 29,
        name: "Grand Old Parr 1L", 
        description: "Marca: Old Parr.<br>Tipo de álcool: Blended whiskey.<br>Sabor: Baunilha.",
        valor: "R$ 160,00", 
        price: 160.00, 
        category: "destilados", 
        image: "img/grand_old_parr_1l.jpg"    
    },
    { 
        id: 30,
        name: "Cachaca Ypioca 150 anos 700ml", 
        description: "Especial comemorativa aos 150 anos.", 
        valor: "R$ 60,00", 
        price: 60.00, 
        category: "destilados", 
        image: "img/cachaca_ypioca_150_anos_700ml.jpg"    
    },
    { 
        id: 31,
        name: "Cerveja Devassa Pack c/12 Latas 350ml", 
        description: "Contém 12 latas. Cada lata com 350ml. Cerveja Puro Malte.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "cervejas", 
        image: "img/cerveja_devassa_fardo_350ml.jpg"    
    },
    { 
        id: 32,
        name: "Cerveja Devassa Lata 350ml", 
        description: "Contém 1 lata com 350ml. Cerveja Puro Malte.", 
        valor: "R$ 5,00", 
        price: 5.00, 
        category: "cervejas", 
        image: "img/cerveja_devassa_latinha_350ml.jpg"    
    },
    { 
        id: 33,
        name: "Cerveja Crystal Pack c/12 Latas 350ml", 
        description: "Contém 12 latas. cada lata com 350ml.", 
        valor: "R$ 7,00", 
        price: 7.00, 
        category: "cervejas", 
        image: "img/cerveja_crystal_fardo_350ml.jpg"    
    },
    { 
        id: 34,
        name: "Cerveja Crystal Lata 350ml", 
        description: "Contém 1 lata com 350ml.", 
        valor: "R$ 12,00", 
        price: 12.00, 
        category: "cervejas", 
        image: "img/cerveja_crystal_latinha_350ml.jpg"    
    },
    { 
        id: 35,
        name: "Cerveja Bohemia Pack c/12 Latas 350ml", 
        description: "Contém 12 latas. Cada lata com 350ml. Cerveja Puro Malte.", 
        valor: "R$ 30,00", 
        price: 30.00, 
        category: "cervejas", 
        image: "img/cerveja_bohemia_fardo_350ml.jpg"    
    },
    { 
        id: 36,
        name: "Cerveja Bohemia Lata 350ml", 
        description: "Contém 1 lata com 350ml. Cerveja Puro Malte.", 
        valor: "R$ 14,00", 
        price: 14.00, 
        category: "cervejas", 
        image: "img/cerveja_bohemia_latinha_350ml.jpg"    
    },
    { 
        id: 37,
        name: "Cerveja Itaipava Pack c/12 Latas 350ml", 
        description: "Contém 12 latas. Cada lata com 350ml.", 
        valor: "R$ 14,00", 
        price: 14.00, 
        category: "cervejas", 
        image: "img/cerveja_itaipava_fardo_350ml.jpg"    
    },
    { 
        id: 38,
        name: "Cerveja Itaipava Lata 350ml", 
        description: "Contém 1 lata com 350ml.", 
        valor: "R$ 5,00", 
        price: 5.00, 
        category: "cervejas", 
        image: "img/cerveja_itaipava_latinha_350ml.jpg"    
    },
    { 
        id: 39,
        name: "Vinho Vale real 900ml", 
        description: "Vinho: Tinto. Teor alcoólico de 7,9% vol", 
        valor: "R$ 6,00", 
        price: 6.00, 
        category: "variedades", 
        image: "img/vinho_vale_real_900ml.jpg"
    },
    { 
        id: 40,
        name: "Energético Red Bull Pack c/6 Latas 250ml", 
        description: "Contém 6 latas. Cada lata com 250ml.", 
        valor: "R$ 3,00", 
        price: 3.00, 
        category: "variedades", 
        image: "img/energetico_red_bull_fardo_6_250ml.jpg"    
    },
    { 
        id: 41,
        name: "Energético Red Bull Lata 250ml", 
        description: "Contém 1 lata com 250ml.", 
        valor: "R$ 3,99", 
        price: 3.99, 
        category: "variedades", 
        image: "img/energetico_red_bull_lata_250ml.jpg"    
    },
    { 
        id: 42,
        name: "Energético Baly tradicional Pack c/6 Latas 473ml", 
        description: "Contém 6 latas. Cada lata com 473ml.", 
        valor: "R$ 4,00", 
        price: 4.00, 
        category: "variedades", 
        image: "img/energetico_baly_fardo_6_473ml.jpg"    
    },
    { 
        id: 43,
        name: "Energético Baly Tradicional Lata 473ml", 
        description: "Contém 1 lata com 473ml.", 
        valor: "R$ 5,00", 
        price: 5.00, 
        category: "variedades", 
        image: "img/energetico_baly_tradicional_lata_473ml.jpg"    
    },
    { 
        id: 44,
        name: "Refrigerante Delrio Cola 2L", 
        description: "Refrigerante de sabor cola.", 
        valor: "R$ 8,00", 
        price: 8.00, 
        category: "refrigerantes", 
        image: "img/refrigerante_delrio_cola_2l.jpg"    
    },
    { 
        id: 45,
        name: "Refrigerante Delrio Guaraná 2L", 
        description: "Refrigerante de sabor guaraná.", 
        valor: "R$ 8,00", 
        price: 8.00, 
        category: "refrigerantes", 
        image: "img/refrigerante_delrio_guarana_2l.jpg"    
    },
    { 
        id: 46,
        name: "Refrigerante Delrio Uva 2L", 
        description: "Refrigerante de sabor uva.", 
        valor: "R$ 8,00", 
        price: 8.00, 
        category: "refrigerantes", 
        image: "img/refrigerante_delrio_uva_2l.jpg"    
    },
    { 
        id: 47,
        name: "Refrigerante Delrio Laranja 2L", 
        description: "Refrigerante de sabor laranja.", 
        valor: "R$ 8,00", 
        price: 8.00, 
        category: "refrigerantes", 
        image: "img/refrigerante_delrio_laranja_2l.jpg"   
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
