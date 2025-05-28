const listaProdutos = [
    { 
        id: 12,
        name: "Coca Cola Original 1,5L", 
        description: "Sabor original. O recipiente de plástico contém 1,5L.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "refrigerantes", 
        image: "img/coca_cola_original_garrafa_1.5l.jpg"    
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
        id: 61,
        name: "Coca Cola Original 2L", 
        description: "Sabor original. O recipiente de plástico contém 2L.", 
        valor: "R$ 12,00", 
        price: 12.00, 
        category: "refrigerantes", 
        image: "img/coca_cola_original_2l.jpg"    
    },
    { 
        id: 62,
        name: "Coca Cola Original Pack c/6 2L", 
        description: "2L. Sabor original. Recipiente com 6 unidades.", 
        valor: "R$ 60,00", 
        price: 60.00, 
        category: "refrigerantes", 
        image: "img/coca_cola_original_fardo6_2l.jpg"    
    },
    { 
        id: 63,
        name: "Coca Cola Original Pack c/6 1,5L", 
        description: "1,5L. Sabor original. Recipiente com 6 unidades", 
        valor: "R$ 45,00", 
        price: 45.00, 
        category: "refrigerantes", 
        image: "img/coca_cola_original_fardo6_1.5l.jpg"   
    },
    { 
        id: 64,
        name: "Coca Cola Original Pack c/12 250ml", 
        description: "250ml. Sabor original. Recipiente com 12 unidades.", 
        valor: "R$ 30,00", 
        price: 30.00, 
        category: "refrigerantes", 
        image: "img/coca_cola_original_fardo12_250ml.jpg"    
    },
    { 
        id: 66,
        name: "Dell Valle Frut Fruta Cítricas 1,5L", 
        description: "Dell Ricco sabor frutas ctíricas 1,5L.", 
        valor: "R$ 8,00", 
        price: 8.00, 
        category: "refrigerantes", 
        image: "img/dell_valle_frut_frutas_citricas_1.5l.jpg"    
    },
    { 
        id: 69,
        name: "Refrigerante Delrio Cola pack c/6 2L", 
        description: "Temperatura: Natural. 6 Unidades com 2L cada.",
        valor: "R$ 40,00", 
        price: 40.00, 
        category: "refrigerantes", 
        image: "img/refrigerante_delrio_cola_fardo6_2l.jpg"    
    },
    { 
        id: 70,
        name: "Refrigerante Delrio Guaraná pack c/6 1L", 
        description: "Temperatura: Natural. 6 Unidades com 1L cada.", 
        valor: "R$ 26,00", 
        price: 26.00, 
        category: "refrigerantes", 
        image: "img/refrigerante_delrio_guarana_fardo6_1l.jpg"    
    },
    { 
        id: 71,
        name: "Pepsi Original 2L", 
        description: "Contém 1 unidade de 2L.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "refrigerantes", 
        image: "img/pepsi_original_2l.jpg"    
    },
    { 
        id: 72,
        name: "Coca Cola Zero Açucar pack c/12 350ml", 
        description: "Contém 12 latas com 350ml cada.", 
        valor: "R$ 40,00", 
        price: 40.00, 
        category: "refrigerantes", 
        image: "img/coca_cola_sem_acucar_fardo12_350ml.jpg"   
    },
    { 
        id: 73,
        name: "Refrigerante Delrio Laranja pack c/6 2L", 
        description: "Temperatura: Natural. 6 Unidades com 2L cada.", 
        valor: "R$ 40,00", 
        price: 40.00, 
        category: "refrigerantes", 
        image: "img/refrigerante_delrio_laranja_fardo6_2l.jpg"    
    },
    { 
        id: 74,
        name: "Coca Cola Original Pack (Natural) c/12 350ml", 
        description: "Contém 12 unidades com 350ml cada.", 
        valor: "R$ 40,00", 
        price: 40.00, 
        category: "refrigerantes", 
        image: "img/coca_cola_original_fardo12_350ml.jpg"    
    },
    { 
        id: 76,
        name: "Sprite Limão Pack (Natural) c/6 350ml", 
        description: "Contém 6 unidades com 350ml cada.", 
        valor: "R$ 19,00", 
        price: 19.00, 
        category: "refrigerantes", 
        image: "img/sprite_limao_fardo6_350ml.jpg"    
    },
    { 
        id: 77,
        name: "Refrigerante Delrio Uva pack c/6 2L", 
        description: "Temperatura: Natural. 6 Unidades com 2L cada.", 
        valor: "R$ 40,00", 
        price: 40.00,
        category: "refrigerantes", 
        image: "img/refrigerante_delrio_uva_fardo6_2l.jpg"   
    },
    { 
        id: 79,
        name: "Refrigerante Delrio Guaraná Pack (Natural) c/12 250ml", 
        description: "Contém 12 unidades com 350ml cada.", 
        valor: "R$ 20,00",
        price: 20.00, 
        category: "refrigerantes", 
        image: "img/refrigerante_delrio_guarana_fardo_250ml.jpg"    
    },
    { 
        id: 80,
        name: "Refrigerante Delrio Guaraná pack c/6 2L", 
        description: "Temperatura: Natural. 6 Unidades com 2L cada.",
        valor: "R$ 40,00", 
        price: 40.00, 
        category: "refrigerantes", 
        image: "img/refrigerante_delrio_guarana_fardo6_2l.jpg"    
    },
    { 
        id: 104,
        name: "Refrigerante Delrio Guaraná 1L", 
        description: "Refrigerante de sabor guaraná.", 
        valor: "R$ 5,00", 
        price: 5.00, 
        category: "refrigerantes", 
        image: "img/refrigerante_delrio_guarana_1l.jpg"    
    },
    { 
        id: 105,
        name: "Refrigerante Guaraná Antarctica 2L", 
        description: "Refrigerante de sabor Garaná.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "refrigerantes", 
        image: "img/refrigerante_guarana_antarctica_2L.jpg"    
    },
    { 
        id: 117,
        name: "Coca Cola Zero Açucar 1,5L", 
        description: "Contém 1 unidade com 1,5L.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "refrigerantes", 
        image: "img/coca_cola_sem_acucar_garrafa_1.5l.jpg"
    },
    { 
        id: 121,
        name: "Sukita Laranja 2l", 
        description: "Contém 1 unidade com 2L.", 
        valor: "R$ 8,00", 
        price: 8.00, 
        category: "refrigerantes", 
        image: "img/refrigerante_sukita_2l.jpg"    
    },
    
];