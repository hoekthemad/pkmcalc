let _import = {
    allstats: {
        balance: 0,
        fanaticism: 0,
        brands: 0,
        boosts: {
            income: {
                ad: Date.now(),
                tavern: Date.now()
            },
            happiness: Date.now()
        },
        skills: {
            theorder: {
                faith:      {   level: 1, reliclevel: 1, effect: 0.205    },
                zeal:       {   level: 1, reliclevel: 1, effect: 0.12     },
                devotion:   {   level: 1, reliclevel: 1, effect: 0.135    },
                fervour:    {   level: 1, reliclevel: 1, effect: 0.0135   }
            },
            fundamentals: {
                productivity:   {   level: 1, reliclevel: 1, effect: 0.03     },
                concentration:  {   level: 1, reliclevel: 1, effect: 0.01     },
                bargaining:     {   level: 1, reliclevel: 1, effect: 0.01     },
                meditation:     {   level: 1, reliclevel: 1, effect: 0.01     }
            },
            combat: {
                strength:       {   level: 1, reliclevel: 1, effect: 0.015    },
                battletactics:  {   level: 1, reliclevel: 1, effect: 0.01     },
                musclememory:   {   level: 1, reliclevel: 1, effect: 0.01     }
            },
            magic: {
                manacontrol:    {   level: 1, reliclevel: 1, effect: 0.01     },
                lifeessence:    {   level: 1, reliclevel: 1, effect: 0.02     },
                resiliance:     {   level: 1, reliclevel: 1, effect: 0.005    }
            },
            darkmagic: {
                fanaticaldevotion:  {   level: 1, reliclevel: 1, effect: 0.01     },
                ardentbelief:       {   level: 1, reliclevel: 1, effect: 0.03     },
                zealousconviction:  {   level: 1, reliclevel: 1, effect: 0.01     },
                extremepiety:       {   level: 1, reliclevel: 1, effect: 0.01     },
                absolutefaith:      {   level: 1, reliclevel: 1, effect: 0.01     },
                devoutmastery:      {   level: 1, reliclevel: 1, effect: 0.002    },
                doggedperseverance: {   level: 1, reliclevel: 1, effect: 0.003    }
            }
        },
        shop: {
            properties: {
                tent:               false, 
                woodenhut:          false,
                cottage:            false,
                house:              false,
                largehouse:         false,
                smallpalace:        false,
                grandpalace:        false,
                townruler:          false,
                cityruler:          false,
                kingdomminister:    false
            },
            trinkets: {
                coinpouch:          false,
                woodencrown:        false,
                dumbbells:          false,
                luckycharm:         false,
                pendulum:           false,
                silverring:         false,
                ceremonyknife:      false,
                magicpebbles:       false,
                shinylamp:          false,
                goldenhourglass:    false
            },
            weapons: {
                smallshield:    false,
                warpaint:       false,
                shortbow:       false,
                steellongsword: false,
                knightarmor:    false,
                warhorse:       false,
                magicsword:     false
            },
            servants: {
                squire:     false,
                bookkeeper: false,
                butler:     false,
                banker:     false,
                seer:       false,
                bodyguard:  false,
                holyman:    false
            }
        },

    },
    
    go: (data) => {
        var stats;
        if (10 > data.toString().length) {
            jQuery.ajax({
                url: "http://api.ezagdev.net/player-data/"+data,
                type: "GET",
                async: false,
                success: function (res) {
                    stats = res;
                }
            });
        }
        else {
            const binString = atob(data.replace(/[^\x00-\x7F]/g, ""));
            stats = JSON.parse(binString);
        }

        let shop = stats.playerData.shop;
        {
            _import.allstats.shop.properties.tent = shop['tent'] ?? false;
            _import.allstats.shop.properties.woodenhut = shop['wooden hut'] ?? false;
            _import.allstats.shop.properties.cottage = shop['cottage'] ?? false;
            _import.allstats.shop.properties.house = shop['house'] ?? false;
            _import.allstats.shop.properties.largehouse = shop['large house'] ?? false;
            _import.allstats.shop.properties.smallpalace = shop['small palace'] ?? false;
            _import.allstats.shop.properties.grandpalace = shop['grand palace'] ?? false;
            _import.allstats.shop.properties.townruler = shop['town ruler'] ?? false;
            _import.allstats.shop.properties.cityruler = shop['city ruler'] ?? false;
            _import.allstats.shop.properties.kingdomminister = shop['kindom minister'] ?? false;
        }
        {
            _import.allstats.shop.trinkets.coinpouch = shop['coin pouch'] ?? false;
            _import.allstats.shop.trinkets.woodencrown = shop['wooden crown'] ?? false;
            _import.allstats.shop.trinkets.dumbbells = shop['dumbbells'] ?? false;
            _import.allstats.shop.trinkets.luckycharm = shop['lucky charm'] ?? false;
            _import.allstats.shop.trinkets.pendulum = shop['pendulum'] ?? false;
            _import.allstats.shop.trinkets.silverring = shop['silver ring'] ?? false;
            _import.allstats.shop.trinkets.ceremonyknife = shop['ceremony knife'] ?? false;
            _import.allstats.shop.trinkets.magicpebbles = shop['magic pebbles'] ?? false;
            _import.allstats.shop.trinkets.shinylamp = shop['shiny lamp'] ?? false;
            _import.allstats.shop.trinkets.goldenhourglass = shop['golden hourglass'] ?? false;
        }
        {
            _import.allstats.shop.weapons.smallshield = shop['small shield'] ?? false;
            _import.allstats.shop.weapons.warpaint = shop['war paint'] ?? false;
            _import.allstats.shop.weapons.shortbow = shop['short bow'] ?? false;
            _import.allstats.shop.weapons.steellongsword = shop['steel longsword'] ?? false;
            _import.allstats.shop.weapons.knightarmor = shop['knight armor'] ?? false;
            _import.allstats.shop.weapons.warhorse = shop['war horse'] ?? false;
            _import.allstats.shop.weapons.magicsword = shop['magic sword'] ?? false;
        }
        {
            _import.allstats.shop.servants.squire = shop['squire'] ?? false;
            _import.allstats.shop.servants.bookkeeper = shop['bookkeeper'] ?? false;
            _import.allstats.shop.servants.butler = shop['butler'] ?? false;
            _import.allstats.shop.servants.banker = shop['banker'] ?? false;
            _import.allstats.shop.servants.seer = shop['seer'] ?? false;
            _import.allstats.shop.servants.bodyguard = shop['bodyguard'] ?? false;
            _import.allstats.shop.servants.holyman = shop['holyman'] ?? false;
        }
    }
}