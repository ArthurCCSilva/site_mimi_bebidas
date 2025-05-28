//Alimentos
const listaProdutos = [
    {   id: 6,
        name: "Vinho Quinta do Morgado 750ml", 
        description: "Vinho: Suave. Teor alcoólico de 10% vol.", 
        valor: "R$ 18,00", 
        price: 18.00, 
        category: "variedades", 
        image: "img/vinho_quinta_do_morgado_suave_750ml.jpg"    
    },
    { 
        id: 11,
        name: "Cigarro K-Lint Silver c/20 unidades", 
        description: "Marca: K-Lint.<br>Unidades:20.<br>Tipo: Silver.", 
        valor: "R$ 7,00", 
        price: 7.00, 
        category: "variedades", 
        image: "img/cigarro_klint_20unidades.jpg"    
    },
    { 
        id: 39,
        name: "Vinho Vale Real 900ml", 
        description: "Vinho: Tinto. Teor alcoólico de 7,9% vol", 
        valor: "R$ 5,00", 
        price: 5.00, 
        category: "variedades", 
        image: "img/vinho_vale_real_900ml.jpg"
    },
    { 
        id: 40,
        name: "Energético Red Bull Pack c/6 Latas 250ml", 
        description: "Contém 6 latas. Cada lata com 250ml.", 
        valor: "R$ 51,00", 
        price: 51.00, 
        category: "variedades", 
        image: "img/energetico_red_bull_fardo_6_250ml.jpg"    
    },
    { 
        id: 41,
        name: "Energético Red Bull Lata 250ml", 
        description: "Contém 1 lata com 250ml.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "variedades", 
        image: "img/energetico_red_bull_lata_250ml.jpg"    
    },
    { 
        id: 43,
        name: "Energético Baly Tradicional Lata 473ml", 
        description: "Contém 1 lata com 473ml.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "variedades", 
        image: "img/energetico_baly_tradicional_lata_473ml.jpg"    
    },
    { 
        id: 53,
        name: "Bombom Sortidos Garoto Caixa 250g", 
        description: "Os bombons mais saborosos estão aqui.", 
        valor: "R$ 15,00", 
        price: 15.00, 
        category: "variedades", 
        image: "img/bombom_sortidos_garoto_caixa_250g.jpg"    
    },
    { 
        id: 54,
        name: "Sextooo abacaxi 10ml", 
        description: "Conhecido popularmente como Engov.", 
        valor: "R$ 3,00", 
        price: 3.00, 
        category: "variedades", 
        image: "img/sextooo_10ml.jpg"    
    },
    { 
        id: 78,
        name: "Energético Magneto 2L", 
        description: "Contém 1 unidade com 2L.", 
        valor: "R$ 15,00", 
        price: 15.00, 
        category: "variedades", 
        image: "img/energetico_magneto_2l.jpg"    
    },
    { 
        id: 81,
        name: "Chiclete Trident Menta Unidade 8g", 
        description: "Contém 1 unidade com 8g.", 
        valor: "R$ 3,00", 
        price: 3.00, 
        category: "variedades", 
        image: "img/trident_menta_unidade_8g.jpg"    
    },
    { 
        id: 82,
        name: "Cherry Pop Cereja c/50 unidades", 
        description: "Contém 1 pacote com 50 unidades.", 
        valor: "R$ 16,00", 
        price: 16.00, 
        category: "variedades", 
        image: "img/cherry_pop_cereja_50unidades.jpg"    
    },
    { 
        id: 83,
        name: "Cherry Pop Cereja 1 unidade", 
        description: "Contém 1 unidade.", 
        valor: "R$ 0,50", 
        price: 0.50, 
        category: "variedades", 
        image: "img/cherry_pop_cereja_1_unidade.jpg"    
    },
    { 
        id: 86,
        name: "Cigarro Gift c/20 unidades", 
        description: "Marca: Gift.<br>Unidades: 20.", 
        valor: "R$ 4,00", 
        price: 4.00, 
        category: "variedades", 
        image: "img/cigarro_gift_20unidades.jpg"    
    },
    { 
        id: 87,
        name: "Cigarro Cretec Menthol c/20 unidades", 
        description: "Marca: Cretec.<br>Unidades: 20.<br>Tipo: Menthol", 
        valor: "R$ 20,00", 
        price: 20.00, 
        category: "variedades", 
        image: "img/cigarro_cretec_menthol_20unidades.jpg"    
    },
    { 
        id: 88,
        name: "Cigarro Gudang Garam c/20 unidades", 
        description: "Marca: Gudang Garam.<br>Unidades: 20.", 
        valor: "R$ 30,00", 
        price: 30.00, 
        category: "variedades", 
        image: "img/cigarro_gudang_garam_20unidades.jpg"    
    },
    { 
        id: 89,
        name: "Cigarro Clean c/20 unidades", 
        description: "Marca: Clean.<br>Unidades: 20.<br> Tipo: by Click", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "variedades", 
        image: "img/cigarro_clean_20unidades.jpg"    
    },
    { 
        id: 90,
        name: "Cigarro Dunhill (Calton) c/20 unidades", 
        description: "Marca: Dunhill.<br>Unidades: 20.<br> Tipo: Double Refresh", 
        valor: "R$ 16,00", 
        price: 16.00, 
        category: "variedades", 
        image: "img/cigarro_dunhill_20unidades.jpg"    
    },
    { 
        id: 91,
        name: "Cigarro Lucky Strike c/20 unidades", 
        description: "Marca: Lucky Strike.<br>Unidades: 20.<br> Tipo: Fresh Double Ice X", 
        valor: "R$ 14,00", 
        price: 14.00, 
        category: "variedades", 
        image: "img/cigarro_lucky_strike_20unidades.jpg"  
    },
    { 
        id: 92,
        name: "Cigarro Rothmans Blue Global c/20 unidades", 
        description: "Marca: Rothmans.<br>Unidades: 20.<br> Tipo: Blue Global",
        valor: "R$ 9,00", 
        price: 9.00, 
        category: "variedades", 
        image: "img/cigarro_rothmans_blue_global_20unidades.jpg"    
    },
    { 
        id: 93,
        name: "Cigarro Rothmans Classic Blue (Branco) c/20 unidades", 
        description: "Marca: Rothmans.<br>Unidades: 20.<br> Tipo: Classic Blue",
        valor: "R$ 9,00", 
        price: 9.00, 
        category: "variedades", 
        image: "img/cigarro_rothmans_classic_blue_20unidades.jpg"
    },
    { 
        id: 94,
        name: "Cigarro Rothmans Blue c/20 unidades", 
        description: "Marca: Rothmans.<br>Unidades: 20.<br> Tipo: Blue",
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "variedades", 
        image: "img/cigarro_rothmans_blue_20unidades.jpg"
    },
    { 
        id: 95,
        name: "Água Iluminágua Com Gás Pack c/12 500ml", 
        description: "Contém 12 garrafas com 500ml cada.", 
        valor: "R$ 20,00", 
        price: 20.00, 
        category: "variedades", 
        image: "img/agua_com_gas_iluminágua_pack12_500ml.jpg"    
    },
    { 
        id: 107,
        name: "Energético Moster Traticional Latão 473ml", 
        description: "Impulsiona a atingir o seu melhor desempenho.",
        valor: "R$ 12,00", 
        price: 12.00,
        category: "variedades", 
        image: "img/energetico_monster_latao_473ml.jpg"    
    },
    { 
        id: 108,
        name: "Cigarro Dunhill Prata (Calton) c/20 unidades", 
        description: "Marca: Dunhill.<br>Unidades: 20.<br> Tipo: Prata", 
        valor: "R$ 16,00", 
        price: 16.00, 
        category: "variedades", 
        image: "img/cigarro_dunhill_prata_20unidades.jpg"    
    },
    { 
        id: 109,
        name: "Isqueiro Bic Maxi", 
        description: "Marca: Bic.<br>Unidade: 1.<br> Cores: Variadas", 
        valor: "R$ 6,00", 
        price: 6.00, 
        category: "variedades", 
        image: "img/isqueiro_bic_maxi.jpg"    
    },
    { 
        id: 110,
        name: "Chiclete Trident Menta Caixa c/21", 
        description: "Contém 21 unidades com 8g cada.", 
        valor: "R$ 36,00", 
        price: 36.00, 
        category: "variedades", 
        image: "img/trident_menta_caixa21.jpg"    
    },
    { 
        id: 116,
        name: "Vinho O Gaucho 750ml", 
        description: "Vinho: Suave. Teor alcoólico de 10% vol.", 
        valor: "R$ 18,00", 
        price: 18.00, 
        category: "variedades", 
        image: "img/vinho_o_gaucho_suave_750ml.jpg"
    },
    { 
        id: 118,
        name: "Água Mineral Santa Sophia pach (Natural) c/12 500ml", 
        description: "Contém 12 unidades com 500ml cada.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "variedades", 
        image: "img/agua_mineral_santa_sophia_500ml.jpg"
    },
    { 
        id: 119,
        name: "Água com Gás Indaiá pach (natural)500ml", 
        description: "Contém 12 unidades com 500ml cada.", 
        valor: "R$ 18,00", 
        price: 18.00, 
        category: "variedades", 
        image: "img/agua_com_gas_indaia_500ml.jpg"
    },
]