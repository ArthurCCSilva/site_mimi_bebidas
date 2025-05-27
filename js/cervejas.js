const listaProdutos = [
    {   
        id: 7,
        name: "Cerveja Petra Pack c/12 Latas 350ml", 
        description: "Contém 12 latas. Cada lata com 350ml. Cerveja Puro Malte.", 
        valor: "R$ 44,00", 
        price: 44.00, 
        category: "cervejas", 
        image: "img/cerveja_petra_fardo_latinha_350ml.jpg"    
    },
    {   
        id: 8,
        name: "Cerveja Skol Pilsen Pack c/12 Latas 350ml", 
        description: "Contém 12 latas. Cada lata com 350ml. Cerveja pilsen.", 
        valor: "R$ 43,00", 
        price: 43.00, 
        category: "cervejas", 
        image: "img/cerveja_skol_pilsen _fardo_350ml.jpg"    
    },
    { 
        id: 9,
        name: "Cerveja Heineken Long Neck Pack c/6 garrafas 330ml", 
        description: "Contém 6 garrafas. Cada garrafa contém 330ml.", 
        valor: "R$ 42,00", 
        price: 42.00, 
        category: "cervejas", 
        image: "img/cerveja_heineken_long_neck_fardo_330ml.jpg"    
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
        valor: "R$ 4,00", 
        price: 4.00, 
        category: "cervejas", 
        image: "img/cerveja_skol_pilsen_lata_350ml.jpg"    
    },
    { 
        id: 16,
        name: "Cerveja Heineken Long Neck Garrafa 330ml", 
        description: "Contém 1 garrafa contendo 330ml.", 
        valor: "R$ 7,00", 
        price: 7.00, 
        category: "cervejas", 
        image: "img/cerveja_heineken_long_neck_garrafa_330ml.jpg"    
    },
    { 
        id: 31,
        name: "Cerveja Devassa Pack c/12 Latas 350ml", 
        description: "Contém 12 latas. Cada lata com 350ml. Cerveja Puro Malte.", 
        valor: "R$ 40,00", 
        price: 40.00, 
        category: "cervejas", 
        image: "img/cerveja_devassa_fardo_350ml.jpg"    
    },
    { 
        id: 32,
        name: "Cerveja Devassa Lata 350ml", 
        description: "Contém 1 lata com 350ml. Cerveja Puro Malte.", 
        valor: "R$ 4,00", 
        price: 4.00, 
        category: "cervejas", 
        image: "img/cerveja_devassa_latinha_350ml.jpg"    
    },
    { 
        id: 33,
        name: "Cerveja Crystal Pack c/12 Latas 350ml", 
        description: "Contém 12 latas. cada lata com 350ml.", 
        valor: "R$ 34,00", 
        price: 34.00, 
        category: "cervejas", 
        image: "img/cerveja_crystal_fardo_350ml.jpg"    
    },
    { 
        id: 34,
        name: "Cerveja Crystal Lata 350ml", 
        description: "Contém 1 lata com 350ml.", 
        valor: "R$ 3,50", 
        price: 3.50, 
        category: "cervejas", 
        image: "img/cerveja_crystal_latinha_350ml.jpg"    
    },
    { 
        id: 35,
        name: "Cerveja Bohemia Pack c/12 Latas 350ml", 
        description: "Contém 12 latas. Cada lata com 350ml. Cerveja Puro Malte.", 
        valor: "R$ 44,00", 
        price: 44.00, 
        category: "cervejas", 
        image: "img/cerveja_bohemia_fardo_350ml.jpg"    
    },
    { 
        id: 36,
        name: "Cerveja Bohemia Lata 350ml", 
        description: "Contém 1 lata com 350ml. Cerveja Puro Malte.", 
        valor: "R$ 4,00", 
        price: 4.00, 
        category: "cervejas", 
        image: "img/cerveja_bohemia_latinha_350ml.jpg"    
    },
    { 
        id: 37,
        name: "Cerveja Itaipava Pack c/12 Latas 350ml", 
        description: "Contém 12 latas. Cada lata com 350ml.", 
        valor: "R$ 35,00", 
        price: 35.00, 
        category: "cervejas", 
        image: "img/cerveja_itaipava_fardo_350ml.jpg"    
    },
    { 
        id: 38,
        name: "Cerveja Itaipava Lata 350ml", 
        description: "Contém 1 lata com 350ml.", 
        valor: "R$ 4,00", 
        price: 4.00, 
        category: "cervejas", 
        image: "img/cerveja_itaipava_latinha_350ml.jpg"    
    },
    { 
        id: 48,
        name: "Cerveja Brahma Chopp Pack c/12 Latas 350ml", 
        description: "Contém 12 latas. Cada lata com 350ml.", 
        valor: "R$ 44,00", 
        price: 44.00, 
        category: "cervejas", 
        image: "img/cerveja_brahma_chopp_fardo_350ml.jpg"    
    },
    { 
        id: 49,
        name: "Cerveja Brahma Chopp Lata 350ml", 
        description: "Contém 1 lata com 350ml.", 
        valor: "R$ 4,00", 
        price: 4.00, 
        category: "cervejas", 
        image: "img/cerveja_brahma_chopp_latinha_350ml.jpg"    
    },
    { 
        id: 51,
        name: "Cerveja Itaipava Pack (Natural) c/24 300ml", 
        description: "Contém 24 long Neck com 300ml cada.", 
        valor: "R$ 55,00", 
        price: 55.00, 
        category: "cervejas", 
        image: "img/cerveja_itaipava_fardo_long_neck_natural_300ml.jpg"    
    },
    { 
        id: 55,
        name: "Cerveja Budweiser Lager Pack c/6 330ml", 
        description: "Contem 6 Long Neck com 330ml cada.", 
        valor: "R$ 40,00", 
        price: 40.00, 
        category: "cervejas", 
        image: "img/cerveja_budweiser_lager_pack6_330ml.jpg"    
    },
    { 
        id: 56,
        name: "Cerveja Budweiser Lager Long Neck 330ml", 
        description: "Contem 1 Long Neck com 330ml.", 
        valor: "R$ 7,00", 
        price: 7.00, 
        category: "cervejas", 
        image: "img/cerveja_budweiser_lager_long_neck_330ml.jpg"    
    },
    { 
        id: 57,
        name: "Cerveja Skol Pilsen Pack c/23 300ml (Natural)", 
        description: "Temperatura: Natural.<br>Long Neck.<br>Retornável.", 
        valor: "R$ 65,00", 
        price: 65.00, 
        category: "cervejas", 
        image: "img/cerveja_skol_pilsen_long_neck_300ml.jpg"    
    },
    { 
        id: 58,
        name: "Cerveja Skol Pilsen Pack c/23 300ml (Gelada)", 
        description: "Temperatura: Gelada.<br>Long Neck.<br>Retornável.", 
        valor: "R$ 75,00", 
        price: 75.00, 
        category: "cervejas", 
        image: "img/cerveja_skol_pilsen_long_neck_gelada_300ml.jpg"    
    },
    { 
        id: 59,
        name: "Cerveja Brahma Duplo Malte Pack c/12 350ml", 
        description: "Temperatura: Gelada. Long Neck. Retornável", 
        valor: "R$ 48,00", 
        price: 48.00, 
        category: "cervejas", 
        image: "img/cerveja_brahma_duplo_malte_fardo_350ml.jpg"    
    },
    { 
        id: 60,
        name: "Cerveja Brahma Duplo Malte Lata 350ml", 
        description: "Contém 1 lata com 350ml.", 
        valor: "R$ 4,50", 
        price: 4.50, 
        category: "cervejas", 
        image: "img/cerveja_brahma_duplo_malte_lata_350ml.jpg"    
    },
    { 
        id: 65,
        name: "Cerveja Corona Pack c/6 330ml", 
        description: "Contém 6 Lonk Neck, cada unidade com 330ml.", 
        valor: "R$ 48,00", 
        price: 48.00, 
        category: "cervejas", 
        image: "img/cerveja_corona_fardo6_330ml.jpg"    
    },
    { 
        id: 75,
        name: "Cerveja Stella Artois Pack c/6 330ml", 
        description: "Contém 6 Long Neck, cada unidade com 330ml.", 
        valor: "R$ 40,00", 
        price: 40.00, 
        category: "cervejas", 
        image: "img/cerveja_stella_artois_pack6_330ml.jpg"    
    },
    { 
        id: 96,
        name: "Cerveja Spaten Pack c/6 355ml", 
        description: "Contém 6 Long Neck. Cada unidade com 355ml.", 
        valor: "R$ 40,00", 
        price: 40.00, 
        category: "cervejas", 
        image: "img/cerveja_spaten_munich_fardo6_355ml.jpg"    
    },
    { 
        id: 97,
        name: "Cerveja Spaten Long Neck 355ml", 
        description: "Contém 1 Long Neck com 355ml.", 
        valor: "R$ 7,00", 
        price: 7.00, 
        category: "cervejas", 
        image: "img/cerveja_spaten_long_neck_355ml.jpg"    
    },
    { 
        id: 98,
        name: "Cerveja Brahma Chopp Pach c23/ 330ml (Natural)", 
        description: "Temperatura: Natural.<br>Long Neck.<br>Retornável.", 
        valor: "R$ 65,00", 
        price: 65.00, 
        category: "cervejas", 
        image: "img/cerveja_brahma_chopp_long_neck_fardo23_330ml.jpg"    
    },
    { 
        id: 99,
        name: "Cerveja Brahma Chopp Pach c23/ 330ml (Gelada)", 
        description: "Temperatura: Gelada.<br>Long Neck.<br>Retornável.",
        valor: "R$ 75,00", 
        price: 75.00, 
        category: "cervejas", 
        image: "img/cerveja_brahma_chopp_long_neck_fardo23_gelado_330ml.jpg"   
    },
    { 
        id: 100,
        name: "Cerveja Bohemia Pach c/23 300ml (Natural)", 
        description: "Temperatura: Gelada.<br>Long Neck Puro Malte.<br>Retornável.",
        valor: "R$ 65,00", 
        price: 65.00, 
        category: "cervejas", 
        image: "img/cerveja_bohemia_long_neck_fardo23_natural_300ml.jpg"   
    },
    { 
        id: 101,
        name: "Cerveja Bohemia Pach c/23 300ml (Gelada)", 
        description: "Temperatura: Gelada.<br>Long Neck Puro Malte.<br>Retornável.",
        valor: "R$ 75,00", 
        price: 75.00, 
        category: "cervejas", 
        image: "img/cerveja_bohemia_long_neck_fardo23_gelada_300ml.jpg"   
    },
    { 
        id: 102,
        name: "Cerveja Brahma Duplo Malte Pach c/23 300ml (Natural)", 
        description: "Temperatura: Gelada.<br>Long Neck Duplo Malte.<br>Retornável.",
        valor: "R$ 70,00", 
        price: 70.00, 
        category: "cervejas", 
        image: "img/cerveja_brahma_duplo_malte_long_neck_fardo23_natural_300ml.jpg"   
    },
    { 
        id: 103,
        name: "Cerveja Brahma Duplo Malte Pach c/23 300ml (Gelada)", 
        description: "Temperatura: Gelada.<br>Long Neck Duplo Malte.<br>Retornável.",
        valor: "R$ 80,00", 
        price: 80.00, 
        category: "cervejas", 
        image: "img/cerveja_brahma_duplo_malte_long_neck_fardo23_gelada_300ml.jpg"   
    },
    { 
        id: 112,
        name: "Skol Beats Senses Pack c/6 313ml", 
        description: "Contém 6 unidades com 313ml cada.", 
        valor: "R$ 45,00", 
        price: 45.00, 
        category: "cervejas", 
        image: "img/cerveja_skol_beats_senses_fardo6_313ml.jpg"    
    },
    { 
        id: 113,
        name: "Skol Beats Senses Long Neck 313ml", 
        description: "Contém 1 unidade com 313ml.", 
        valor: "R$ 7,50", 
        price: 7.50, 
        category: "cervejas", 
        image: "img/cerveja_skol_beats_senses_long_nesck_313ml.jpg"    
    },
    { 
        id: 114,
        name: "Skol Beats Red Mix Pack c/6 269ml", 
        description: "Contém 6 unidades com 269ml cada.", 
        valor: "R$ 45,00", 
        price: 45.00, 
        category: "cervejas", 
        image: "img/cerveja_skol_beats_red_mix_fardo6_269ml.jpg"    
    },
    { 
        id: 115,
        name: "Skol Beats Red Mix Long Neck 269ml", 
        description: "Contém 1 unidade com 269ml.", 
        valor: "R$ 7,50", 
        price: 7.50, 
        category: "cervejas", 
        image: "img/cerveja_skol_beats_red_mix_long_neck_269ml.jpg"    
    },
]