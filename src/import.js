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
                resilience:     {   level: 1, reliclevel: 1, effect: 0.005    }
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
                success: function (resilience) {
                    stats = resilience;
                }
            });
        }
        else {
            const binString = atob(data.replace(/[^\x00-\x7F]/g, ""));
            stats = JSON.parse(binString);
        }

        _import.allstats.boosts.happiness = Date,parse(stats.playerData['boosts']['happiness'][0]) ?? Date.now();
        _import.allstats.boosts.income.ad = Date.parse(stats.playerData['boosts']['income'][0]) ?? Date.now();
        _import.allstats.boosts.income.tavern = Date.parse(stats.playerData['boosts']['income'][1]) ?? Date.now();

        _import.allstats.fanaticism = 1*stats.playerData['fanaticism'];

        let shop = stats.playerData.shop;
        //#region Properties
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
        //#endregion
        
        //#region Trinkets
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
        //#endregion
        
        //#region Weapons
        {
            _import.allstats.shop.weapons.smallshield = shop['small shield'] ?? false;
            _import.allstats.shop.weapons.warpaint = shop['war paint'] ?? false;
            _import.allstats.shop.weapons.shortbow = shop['short bow'] ?? false;
            _import.allstats.shop.weapons.steellongsword = shop['steel longsword'] ?? false;
            _import.allstats.shop.weapons.knightarmor = shop['knight armor'] ?? false;
            _import.allstats.shop.weapons.warhorse = shop['war horse'] ?? false;
            _import.allstats.shop.weapons.magicsword = shop['magic sword'] ?? false;
        }
        //#endregion
        
        //#region Servants
        {
            _import.allstats.shop.servants.squire = shop['squire'] ?? false;
            _import.allstats.shop.servants.bookkeeper = shop['bookkeeper'] ?? false;
            _import.allstats.shop.servants.butler = shop['butler'] ?? false;
            _import.allstats.shop.servants.banker = shop['banker'] ?? false;
            _import.allstats.shop.servants.seer = shop['seer'] ?? false;
            _import.allstats.shop.servants.bodyguard = shop['bodyguard'] ?? false;
            _import.allstats.shop.servants.holyman = shop['holyman'] ?? false;
        }
        //#endregion

        let skills = stats.playerData.skills;
        //#region The Order
        {
            _import.allstats.skills.theorder.faith.level = skills['faith']['level'];
            _import.allstats.skills.theorder.faith.reliclevel = skills['faith']['relicLevel'];
            _import.allstats.skills.theorder.faith.effect = skills['faith']['value'];

            _import.allstats.skills.theorder.zeal.level = skills['zeal']['level'];
            _import.allstats.skills.theorder.zeal.reliclevel = skills['zeal']['relicLevel'];
            _import.allstats.skills.theorder.zeal.effect = skills['zeal']['value'];

            _import.allstats.skills.theorder.devotion.level = skills['devotion']['level'];
            _import.allstats.skills.theorder.devotion.reliclevel = skills['devotion']['relicLevel'];
            _import.allstats.skills.theorder.devotion.effect = skills['devotion']['value'];

            _import.allstats.skills.theorder.fervour.level = skills['fervour']['level'];
            _import.allstats.skills.theorder.fervour.reliclevel = skills['fervour']['relicLevel'];
            _import.allstats.skills.theorder.fervour.effect = skills['fervour']['value'];
        }
        //#endregion
        
        //#region Fundamentals
        {
            _import.allstats.skills.fundamentals.productivity.level = skills['productivity']['level'];
            _import.allstats.skills.fundamentals.productivity.reliclevel = skills['productivity']['relicLevel'];
            _import.allstats.skills.fundamentals.productivity.effect = skills['productivity']['value'];

            _import.allstats.skills.fundamentals.concentration.level = skills['concentration']['level'];
            _import.allstats.skills.fundamentals.concentration.reliclevel = skills['concentration']['relicLevel'];
            _import.allstats.skills.fundamentals.concentration.effect = skills['concentration']['value'];

            _import.allstats.skills.fundamentals.bargaining.level = skills['bargaining']['level'];
            _import.allstats.skills.fundamentals.bargaining.reliclevel = skills['bargaining']['relicLevel'];
            _import.allstats.skills.fundamentals.bargaining.effect = skills['bargaining']['value'];

            _import.allstats.skills.fundamentals.meditation.level = skills['meditation']['level'];
            _import.allstats.skills.fundamentals.meditation.reliclevel = skills['meditation']['relicLevel'];
            _import.allstats.skills.fundamentals.meditation.effect = skills['meditation']['value'];
        }
        //#endregion
        
        //#region Combat
        {
            _import.allstats.skills.combat.strength.level = skills['strength']['level'];
            _import.allstats.skills.combat.strength.reliclevel = skills['strength']['relicLevel'];
            _import.allstats.skills.combat.strength.effect = skills['strength']['value'];

            _import.allstats.skills.combat.battletactics.level = skills['battle tactics']['level'];
            _import.allstats.skills.combat.battletactics.reliclevel = skills['battle tactics']['relicLevel'];
            _import.allstats.skills.combat.battletactics.effect = skills['battle tactics']['value'];

            _import.allstats.skills.combat.musclememory.level = skills['muscle memory']['level'];
            _import.allstats.skills.combat.musclememory.reliclevel = skills['muscle memory']['relicLevel'];
            _import.allstats.skills.combat.musclememory.effect = skills['muscle memory']['value'];
        }
        //#endregion
        
        //#region Magic
        {
            _import.allstats.skills.magic.manacontrol.level = skills['mana control']['level'];
            _import.allstats.skills.magic.manacontrol.reliclevel = skills['mana control']['relicLevel'];
            _import.allstats.skills.magic.manacontrol.effect = skills['mana control']['value'];

            _import.allstats.skills.magic.lifeessence.level = skills['life essence']['level'];
            _import.allstats.skills.magic.lifeessence.reliclevel = skills['life essence']['relicLevel'];
            _import.allstats.skills.magic.lifeessence.effect = skills['life essence']['value'];

            _import.allstats.skills.magic.resilience.level = skills['resilience']['level'];
            _import.allstats.skills.magic.resilience.reliclevel = skills['resilience']['relicLevel'];
            _import.allstats.skills.magic.resilience.effect = skills['resilience']['value'];
        }
        //#endregion
        
        //#region Dark Magic
        {
            _import.allstats.skills.darkmagic.fanaticaldevotion.level = skills['fanatical devotion']['level'];
            _import.allstats.skills.darkmagic.fanaticaldevotion.reliclevel = skills['fanatical devotion']['relicLevel'];
            _import.allstats.skills.darkmagic.fanaticaldevotion.effect = skills['fanatical devotion']['value'];

            _import.allstats.skills.darkmagic.ardentbelief.level = skills['ardent belief']['level'];
            _import.allstats.skills.darkmagic.ardentbelief.reliclevel = skills['ardent belief']['relicLevel'];
            _import.allstats.skills.darkmagic.ardentbelief.effect = skills['ardent belief']['value'];

            _import.allstats.skills.darkmagic.zealousconviction.level = skills['zealous conviction']['level'];
            _import.allstats.skills.darkmagic.zealousconviction.reliclevel = skills['zealous conviction']['relicLevel'];
            _import.allstats.skills.darkmagic.zealousconviction.effect = skills['zealous conviction']['value'];

            _import.allstats.skills.darkmagic.extremepiety.level = skills['extreme piety']['level'];
            _import.allstats.skills.darkmagic.extremepiety.reliclevel = skills['extreme piety']['relicLevel'];
            _import.allstats.skills.darkmagic.extremepiety.effect = skills['extreme piety']['value'];

            _import.allstats.skills.darkmagic.absolutefaith.level = skills['absolute faith']['level'];
            _import.allstats.skills.darkmagic.absolutefaith.reliclevel = skills['absolute faith']['relicLevel'];
            _import.allstats.skills.darkmagic.absolutefaith.effect = skills['absolute faith']['value'];

            _import.allstats.skills.darkmagic.devoutmastery.level = skills['devout mastery']['level'];
            _import.allstats.skills.darkmagic.devoutmastery.reliclevel = skills['devout mastery']['relicLevel'];
            _import.allstats.skills.darkmagic.devoutmastery.effect = skills['devout mastery']['value'];

            _import.allstats.skills.darkmagic.doggedperseverance.level = skills['dogged perseverance']['level'];
            _import.allstats.skills.darkmagic.doggedperseverance.reliclevel = skills['dogged perseverance']['relicLevel'];
            _import.allstats.skills.darkmagic.doggedperseverance.effect = skills['dogged perseverance']['value'];
        }
        //#endregion

        console.log(_import.allstats);
    }
}