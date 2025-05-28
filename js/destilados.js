const listaProdutos = [
    { 
        id: 1,
        name: "Gordon'S London Dry Gin 750ml", 
        description: "Gin com teor alcoólico de 43% vol.", 
        valor: "R$ 77,00", 
        price: 77.00, 
        category: "destilados", 
        image: "img/gordon's_london_dry_gin_750ml.jpg" 
    },
    { 
        id: 2,
        name: "Vodka Orloff 1L", 
        description: "Vodka com teor alcoólico de 37,5% vol.", 
        valor: "R$ 40,00", 
        price: 40.00, 
        category: "destilados", 
        image: "img/vodka_orloff_1l.jpg"    
    },
    {   id: 3,
        name: "Dreher 900ml", 
        description: "Dreher com teor alcoólico de 33% vol.", 
        valor: "R$ 25,00", 
        price: 25.00, 
        category: "destilados", 
        image: "img/dreher_900ml.jpg"    
    },
    { 
        id: 4,
        name: "Rum Montilla Carta Branca 1L", 
        description: "Montilla Carta Branca com teor alcoólico de 36% vol.", 
        valor: "R$ 33,00", 
        price: 33.00, 
        category: "destilados", 
        image: "img/rum_montilla_carta_branca_1l.jpg"    
    },
    {   id: 5,
        name: "Campari 998ml", 
        description: "Cmapari com teor alcoólico de 28,5% vol.", 
        valor: "R$ 65,00", 
        price: 65.00, 
        category: "destilados", 
        image: "img/campari_748ml.jpg"    
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
        id: 13,
        name: "Vodka Slova - 970ml", 
        description: "Vodka Slova com teor alcoólico de 37,5% vol. Contém 970ml.", 
        valor: "R$ 15,00", 
        price: 15.00, 
        category: "destilados",
        image: "img/vodka_slova_970ml.jpg"    
    },
    { 
        id: 17,
        name: "Vodka Nordka 900ml", 
        description: "Vodka 5x destilada. Teor alcoólico de 37,5% vol.", 
        valor: "R$ 33,00", 
        price: 33.00, 
        category: "destilados", 
        image: "img/vodka_nordka_900ml.jpg"    
    },
    { 
        id: 18,
        name: "Vodka Intencion 900ml", 
        description: "Vodka 5x destilada. Teor alcoólico de 38% vol.", 
        valor: "R$ 35,00", 
        price: 35.00, 
        category: "destilados", 
        image: "img/vodka_intencion_900ml.jpg"    
    },
    { 
        id: 19,
        name: "Vodka Slova Fruits Blueberry (gelada) 965ml", 
        description: "Vodka Premium. Teor alcoólico de 13,5% vol.", 
        valor: "R$ 18,00", 
        price: 18.00, 
        category: "destilados", 
        image: "img/vodka_slova_fruits_blueberry_965ml.jpg"    
    },
    { 
        id: 20,
        name: "Vodka Absolut 1L", 
        description: "Vodka com teor alcoólico de 13,5% vol.", 
        valor: "R$ 120,00", 
        price: 120.00, 
        category: "destilados", 
        image: "img/vodka_absolut_1l.jpg"    
    },
    { 
        id: 21,
        name: "Vodka Smirnoff 998ml", 
        description: "Vodka 10x filtrada. Teor alcoólico 37,5%.", 
        valor: "R$ 45,00", 
        price: 45.00, 
        category: "destilados", 
        image: "img/vodka_smirnoff_998ml.jpg"    
    },
    { 
        id: 22,
        name: "Cachaça Ypioca Reserva 965ml", 
        description: "Cachaça envelhecida em barris de carvalho. Teor alcoólico de 38% vol.", 
        valor: "R$ 45,00", 
        price: 45.00, 
        category: "destilados", 
        image: "img/cachaca_ypioca_reserva_965ml.jpg"    
    },
    { 
        id: 23,
        name: "Cachaça Ypioca Prata 965ml", 
        description: "Marca: Ypioca.<br>Tipo: Prata.<br>Contém: 965ml.", 
        valor: "R$ 16,00", 
        price: 16.00, 
        category: "destilados",
        image: "img/cachaca_ypioca_prata_965ml.jpg"    
    },
    { 
        id: 24,
        name: "Cachaça Ypioca Guaraná (gelada) 1L", 
        description: "Marca: Ypioca.<br>Tipo: Quaraná.<br>Contém: 1L.", 
        valor: "R$ 25,00", 
        price: 25.00, 
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
        valor: "R$ 68,00", 
        price: 68.00, 
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
        name: "Whisky Red Label 1L", 
        description: "Whisky Red Label Johnnie Walker 1L",
        valor: "R$ 100,00", 
        price: 100.00, 
        category: "destilados", 
        image: "img/whisky_red_label_1l.jpg"    
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
        id: 42,
        name: "Vodka Slova Fruitas Vermelhas (gelada) 965ml", 
        description: "Vodka Premium. Teor alcoólico de 13,5% vol.", 
        valor: "R$ 18,00", 
        price: 18.00, 
        category: "destilados", 
        image: "img/vodka_slova_fruitas_vermelhas_965ml.jpg"    
    },
    { 
        id: 50,
        name: "Vodka Slova Limão (gelada) 965ml", 
        description: "Vodka Premium. Teor alcoólico de 13,5% vol.", 
        valor: "R$ 18,00", 
        price: 18.00, 
        category: "destilados", 
        image: "img/vodka_slova_limao_965ml.jpg"
    },
    { 
        id: 52,
        name: "Cachaça Ypioca Ouro 480ml", 
        description: "Marca: Ypioca.<br>Tipo: Ouro.<br>Contém: 480ml.",
        valor: "R$ 14,00", 
        price: 14.00, 
        category: "destilados", 
        image: "img/cachaca_ypioca_ouro_480ml.jpg"    
    },
    { 
        id: 67,
        name: "Cabaré ICE Limão Pack c/6 275ml", 
        description: "Contém 6 Long Neck de 275ml cada.", 
        valor: "R$ 45,00", 
        price: 45.00, 
        category: "destilados", 
        image: "img/cabare_ice_limao_fardo6_275ml.jpg"    
    },
    { 
        id: 68,
        name: "Cabaré ICE Limão 275ml", 
        description: "Contém 1 Long Neck de 275ml.", 
        valor: "R$ 7,50", 
        price: 7.50, 
        category: "destilados", 
        image: "img/cabare_ice_limao_long_neck_275ml.jpg"    
    },
    { 
        id: 84,
        name: "Cachaça Cabaré Prata 700ml", 
        description: "Contém 1 unidade com 700ml. Teor alcoólico 38% vol.", 
        valor: "R$ 35,00", 
        price: 35.00, 
        category: "destilados", 
        image: "img/cachaca_cabare_prata_700ml.jpg"    
    },
    { 
        id: 85,
        name: "Cachaça Cabaré Ouro 700ml", 
        description: "Contém 1 unidade com 700ml. Teor alcoólico 38% vol.", 
        valor: "R$ 42,00", 
        price: 42.00, 
        category: "destilados", 
        image: "img/cachaca_cabare_ouro_700ml.jpg"    
    },
    { 
        id: 106,
        name: "Whisky Old Parr 1L", 
        description: "Marca: Old Parr.<br>Tipo de álcool: Blended whiskey.<br>Sabor: Baunilha.",
        valor: "R$ 156,00", 
        price: 156.00,
        category: "destilados", 
        image: "img/whisky_old_parr_1l.jpg"    
    },
    { 
        id: 120,
        name: "Cabaré ICE Limão Pack c/12 (Natural) 275ml", 
        description: "Contém 12 Long Neck de 275ml cada.", 
        valor: "R$ 78,00", 
        price: 78.00, 
        category: "destilados", 
        image: "img/cabare_ice_limao_fardo12_275ml.jpg" 
    },
    { 
        id: 124,
        name: "Smirnoff Ice Pack c/6 275ml", 
        description: "Contém 6 unidades long Neck com 275ml.", 
        valor: "R$ 48,00", 
        price: 48.00, 
        category: "destilaos",
        image: "img/smirnoff_ice_pack6_275ml.jpg"    
    },
    { 
        id: 125,
        name: "Smirnoff Ice Long Neck 275ml", 
        description: "Contém 1 unidade long Neck com 275ml.", 
        valor: "R$ 8,00", 
        price: 8.00, 
        category: "destilaos",
        image: "img/smirnoff_ice_long_neck_275ml.jpg"    
    },
];