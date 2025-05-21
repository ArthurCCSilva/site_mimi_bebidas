const listaProdutos = [
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
        id: 48,
        name: "Cerveja Brahma Chopp Pack c/12 Latas 350ml", 
        description: "Contém 12 latas. Cada lata com 350ml.", 
        valor: "R$ 3,50", 
        price: 3.50, 
        category: "cervejas", 
        image: "img/cerveja_brahma_shopp_fardo_350ml.jpg"    
    },
    { 
        id: 49,
        name: "Cerveja Brahma Chopp Lata 350ml", 
        description: "Contém 1 lata com 350ml.", 
        valor: "R$ 60,00", 
        price: 60.00, 
        category: "cervejas", 
        image: "img/cerveja_brahma_shopp_latinha_350ml.jpg"    
    },
    { 
        id: 55,
        name: "Cerveja Budweiser Lager Pack c/6 330ml", 
        description: "Contem 6 Long Neck com 330ml cada.", 
        valor: "R$ 25,99", 
        price: 25.99, 
        category: "cervejas", 
        image: "img/cerveja_budweiser_lager_pack6_330ml.jpg"    
    },
    { 
        id: 56,
        name: "Cerveja Budweiser Lager Long Neck 330ml", 
        description: "Contem 1 Long Neck com 330ml.", 
        valor: "R$ 12,99", 
        price: 12.99, 
        category: "cervejas", 
        image: "img/cerveja_budweiser_lager_long_neck_330ml.jpg"    
    },
    { 
        id: 57,
        name: "Cerveja Skol Pilsen Pack c/24 300ml ", 
        description: "Retornável. Cerveja Long Neck de 330ml cada.", 
        valor: "R$ 15,99", 
        price: 15.99, 
        category: "cervejas", 
        image: "img/cerveja_skol_pilsen_caixa_24_300ml.jpg"    
    },
    { 
        id: 58,
        name: "Cerveja Skol 300ml", 
        description: "Retornável. 1 cerveja Long Neck de 330ml.", 
        valor: "R$ 15,00", 
        price: 15.00, 
        category: "cervejas", 
        image: "img/cerveja_skol_long_neck_300ml.jpg"    
    },
    { 
        id: 59,
        name: "Cerveja Brahma Duplo Malte Pack c/12 350ml", 
        description: "Contém 12 latas com 350ml cada.", 
        valor: "R$ 30,00", 
        price: 30.00, 
        category: "cervejas", 
        image: "img/cerveja_brahma_duplo_malte_fardo_350ml.jpg"    
    },
    { 
        id: 60,
        name: "Cerveja Brahma Duplo Malte Lata 350ml", 
        description: "Contém 1 lata com 350ml.", 
        valor: "R$ 50,00", 
        price: 50.00, 
        category: "cervejas", 
        image: "img/cerveja_brahma_duplo_malte_lata_350ml.jpg"    
    },
]