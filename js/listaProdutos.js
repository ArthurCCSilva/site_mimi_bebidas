// Array com todos os produtos
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
    {   id: 6,
        name: "Vinho Quinta do Morgado 750ml", 
        description: "Vinho: Suave. Teor alcoólico de 10% vol.", 
        valor: "R$ 18,00", 
        price: 18.00, 
        category: "variedades", 
        image: "img/vinho_quinta_do_morgado_suave_750ml.jpg"    
    },
    {   id: 7,
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
        valor: "R$ 7,00", 
        price: 7.00, 
        category: "variedades", 
        image: "img/cigarro_klint_20unidades.jpg"    
    },
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
        id: 42,
        name: "Vodka Slova Fruitas Vermelhas (gelada) 965ml", 
        description: "Vodka Premium. Teor alcoólico de 13,5% vol.", 
        valor: "R$ 18,00", 
        price: 18.00, 
        category: "destilados", 
        image: "img/vodka_slova_fruitas_vermelhas_965ml.jpg"    
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
        id: 50,
        name: "Vodka Slova Limão (gelada) 965ml", 
        description: "Vodka Premium. Teor alcoólico de 13,5% vol.", 
        valor: "R$ 18,00", 
        price: 18.00, 
        category: "destilados", 
        image: "img/vodka_slova_limao_965ml.jpg"
    },
    { 
        id: 51,
        name: "Cerveja Itaipava Retornável (Natural) c/24 300ml", 
        description: "Contém 24 long Neck com 300ml cada.", 
        valor: "R$ 55,00", 
        price: 55.00, 
        category: "cervejas", 
        image: "img/cerveja_itaipava_fardo_long_neck_natural_300ml.jpg"    
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
        name: "Cerveja Skol Pilsen Retornável c/23 300ml (Natural)", 
        description: "Temperatura: Natural.<br>Long Neck.<br>Retornável.", 
        valor: "R$ 65,00", 
        price: 65.00, 
        category: "cervejas", 
        image: "img/cerveja_skol_pilsen_long_neck_300ml.jpg"    
    },
    { 
        id: 58,
        name: "Cerveja Skol Pilsen Retornável c/23 300ml (Gelada)", 
        description: "Temperatura: Gelada.<br>Long Neck.<br>Retornável.", 
        valor: "R$ 75,00", 
        price: 75.00, 
        category: "cervejas", 
        image: "img/cerveja_skol_pilsen_long_neck_gelada_300ml.jpg"    
    },
    { 
        id: 59,
        name: "Cerveja Brahma Duplo Malte Pack c/12 350ml", 
        description: "Pack com 12 unidades. Lata com 350ml cada.", 
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
        id: 65,
        name: "Cerveja Corona Pack c/6 330ml", 
        description: "Contém 6 Lonk Neck, cada unidade com 330ml.", 
        valor: "R$ 48,00", 
        price: 48.00, 
        category: "cervejas", 
        image: "img/cerveja_corona_fardo6_330ml.jpg"    
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
        id: 75,
        name: "Cerveja Stella Artois Pack c/6 330ml", 
        description: "Contém 6 Long Neck, cada unidade com 330ml.", 
        valor: "R$ 40,00", 
        price: 40.00, 
        category: "cervejas", 
        image: "img/cerveja_stella_artois_pack6_330ml.jpg"    
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
        id: 78,
        name: "Energético Magneto 2L", 
        description: "Contém 1 unidade com 2L.", 
        valor: "R$ 15,00", 
        price: 15.00, 
        category: "variedades", 
        image: "img/energetico_magneto_2l.jpg"    
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
        name: "Cerveja Brahma Chopp Retornável c/23 330ml (Natural)", 
        description: "Temperatura: Natural.<br>Long Neck.<br>Retornável.", 
        valor: "R$ 65,00", 
        price: 65.00, 
        category: "cervejas", 
        image: "img/cerveja_brahma_chopp_long_neck_fardo23_330ml.jpg"    
    },
    { 
        id: 99,
        name: "Cerveja Brahma Chopp Retornável c/23 330ml (Gelada)", 
        description: "Temperatura: Gelada.<br>Long Neck.<br>Retornável.",
        valor: "R$ 75,00", 
        price: 75.00, 
        category: "cervejas", 
        image: "img/cerveja_brahma_chopp_long_neck_fardo23_gelado_330ml.jpg"   
    },
    { 
        id: 100,
        name: "Cerveja Bohemia Retornável c/23 300ml (Natural)", 
        description: "Temperatura: Gelada.<br>Long Neck Puro Malte.<br>Retornável.",
        valor: "R$ 65,00", 
        price: 65.00, 
        category: "cervejas", 
        image: "img/cerveja_bohemia_long_neck_fardo23_natural_300ml.jpg"   
    },
    { 
        id: 101,
        name: "Cerveja Bohemia Retornável c/23 300ml (Gelada)", 
        description: "Temperatura: Gelada.<br>Long Neck Puro Malte.<br>Retornável.",
        valor: "R$ 75,00", 
        price: 75.00, 
        category: "cervejas", 
        image: "img/cerveja_bohemia_long_neck_fardo23_gelada_300ml.jpg"   
    },
    { 
        id: 102,
        name: "Cerveja Brahma Duplo Retornável Pach c/23 300ml (Natural)", 
        description: "Temperatura: Gelada.<br>Long Neck Duplo Malte.<br>Retornável.",
        valor: "R$ 70,00", 
        price: 70.00, 
        category: "cervejas", 
        image: "img/cerveja_brahma_duplo_malte_long_neck_fardo23_natural_300ml.jpg"   
    },
    { 
        id: 103,
        name: "Cerveja Brahma Duplo Retornável Pach c/23 300ml (Gelada)", 
        description: "Temperatura: Gelada.<br>Long Neck Duplo Malte.<br>Retornável.",
        valor: "R$ 80,00", 
        price: 80.00, 
        category: "cervejas", 
        image: "img/cerveja_brahma_duplo_malte_long_neck_fardo23_gelada_300ml.jpg"   
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
        id: 106,
        name: "Whisky Old Parr 1L", 
        description: "Marca: Old Parr.<br>Tipo de álcool: Blended whiskey.<br>Sabor: Baunilha.",
        valor: "R$ 156,00", 
        price: 156.00,
        category: "destilados", 
        image: "img/whisky_old_parr_1l.jpg"    
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
        id: 112,
        name: "Skol Beats Senses Pack c/6 269ml", 
        description: "Contém 6 unidades com 269ml cada.", 
        valor: "R$ 45,00", 
        price: 45.00, 
        category: "cervejas", 
        image: "img/cerveja_skol_beats_senses_fardo6_313ml.jpg"    
    },
    { 
        id: 113,
        name: "Skol Beats Senses Long Neck 269ml", 
        description: "Contém 1 unidade com 269ml.", 
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
        id: 117,
        name: "Coca Cola Zero Açucar 1,5L", 
        description: "Contém 1 unidade com 1,5L.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "refrigerantes", 
        image: "img/coca_cola_sem_acucar_garrafa_1.5l.jpg"
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
        id: 121,
        name: "Sukita Laranja 2l", 
        description: "Contém 1 unidade com 2L.", 
        valor: "R$ 8,00", 
        price: 8.00, 
        category: "refrigerantes", 
        image: "img/refrigerante_sukita_2l.jpg"    
    },
    { 
        id: 122,
        name: "Spaten Pack c/12 350ml", 
        description: "Contém 12 unidades lata com 350ml.", 
        valor: "R$ 55,00", 
        price: 55.00, 
        category: "cervejas",
        image: "img/cerveja_spaten_pack12_350ml.jpg"    
    },

    { 
        id: 123,
        name: "Spaten Lata 350ml", 
        description: "Contém 1 unidade lata com 350ml.", 
        valor: "R$ 5,00", 
        price: 5.00, 
        category: "cervejas",
        image: "img/cerveja_spaten_lata_350ml.jpg"    
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
