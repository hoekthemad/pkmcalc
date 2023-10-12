const properties = {
    effect_type: 'happiness',
    list: {
        tent: {
            base_price: 0,
            effect: 1
        },
        wooden_hut: {
            base_price: 7.50e+01,
            effect: 2
        },
        cottage: {
            base_price: 4.69e+04,
            effect: 3
        },
        house: {
            base_price: 2.93e+06,
            effect: 4
        },
        large_house: {
            base_price: 1.83e+10,
            effect: 5
        },
        small_palace: {
            base_price: 1.14e+13,
            effect: 6
        },
        grand_palace: {
            base_price: 7.15e+15,
            effect: 7
        },
        town_ruler: {
            base_price: 4.47e+18,
            effect: 8
        },
        city_ruler: {
            base_price: 2.79e+21,
            effect: 9
        },
        kingdom_minister: {
            base_price: 6.99e+22,
            effect: 10
        }
    }
}

const trinkets = {
    coin_pouch: {
        effect_type: "income",
        effect_value: 2.5,
        base_price: 5.90e+01,
    },
    wooden_crown: {
        effect_type: "shopprices",
        effect_value: 2,
        base_price: 1.67e+05,
    },
    dumbells: {
        effect_type: "atkduration",
        effect_value: 1.5,
        base_price: 8.86e+06,
    },
    lucky_charm: {
        effect_type: "income",
        effect_value: 3,
        base_price: 0,
    },
    pendulum: {
        effect_type: "bonusrelic",
        effect_value: 0.2,
        base_price: 0,
    },
    silver_ring: {
        effect_type: "allprices",
        effect_value: 2,
        base_price: 0,
    },
    ceremony_knife: {
        effect_type: "happiness",
        effect_value: 1.5,
        base_price: 0,
    },
    magic_pebbles: {
        effect_type: "shopprices",
        effect_value: 1.5,
        base_price: 0,
    },
    shiny_lamp: {
        effect_type: "allprices",
        effect_value: 2,
        base_price: 0,
    },
    golden_hourglass: {
        effect_type: "bonusrelic",
        effect_value: 1.5,
        base_price: 0,
    }
}

const weapons = {
    small_shield: {
        effect_type: "enatkduration",
        effect_value: 2,
        base_price : 6.26e+02
    },
    war_paint: {
        effect_type: "atkresistance",
        effect_value: 1.5,
        base_price : 1.30e+05
    },
    short_bow: {
        effect_type: "enatkduration",
        effect_value: 2,
        base_price : 0
    },
    steel_longsword: {
        effect_type: "atkduration",
        effect_value: 2,
        base_price : 0
    },
    knight_armor: {
        effect_type: "atkresistance",
        effect_value: 1.5,
        base_price : 0
    },
    war_horse: {
        effect_type: "atkpower",
        effect_value: 2,
        base_price : 0
    },
    magic_sword: {
        effect_type: "shopprices",
        effect_value: 1.5,
        base_price : 0
    },
}

const servants = {
    squire: {
        effect_type: "shopprices",
        effect_value: 1.5,
        base_price: 3.48e+03
    }
}