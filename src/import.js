let _import = {
    stats: {
        balance: 0,
        fanaticism: 0,
        brands: 0,
        relictouches: 0,
        boosts: {
            income: {
                ad: Date.now(),
                tavern: Date.now()
            },
            happiness: Date.now()
        },
        playerStats: {
            income: 1,
            happiness: 1,
            allprices: 1,
            shopprices: 1,
            skilleffects: 1,
            bonusrelic: 0,
            flatincome: 0,
            atkduration: 1,
            atkpower: 1,
            atkresistance: 1,
            insanitythreshold: 1
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
                url: "https://api.ezagdev.net/player-data/"+data,
                type: "GET",
                async: true,
                success: function (xhr) {
                    stats = xhr;

                    try {
                        _import.stats.boosts.happiness = Date.parse(stats.playerData['boosts']['happiness'][0]) ?? Date.now();
                        _import.stats.boosts.income.ad = Date.parse(stats.playerData['boosts']['income'][0]) ?? Date.now();
                        _import.stats.boosts.income.tavern = Date.parse(stats.playerData['boosts']['income'][1]) ?? Date.now();
            
                        _import.stats.fanaticism = stats.playerData['fanaticism'].toFixed(2);
                        _import.stats.brands = stats.playerData['brands'];
                        _import.stats.relictouches = stats.playerData['relicTouches'];
            
                        let shop = stats.playerData.shop;
                        //#region Properties
                        {
                            _import.stats.shop.properties.tent = shop['tent'] ?? false;
                            _import.stats.shop.properties.woodenhut = shop['wooden hut'] ?? false;
                            _import.stats.shop.properties.cottage = shop['cottage'] ?? false;
                            _import.stats.shop.properties.house = shop['house'] ?? false;
                            _import.stats.shop.properties.largehouse = shop['large house'] ?? false;
                            _import.stats.shop.properties.smallpalace = shop['small palace'] ?? false;
                            _import.stats.shop.properties.grandpalace = shop['grand palace'] ?? false;
                            _import.stats.shop.properties.townruler = shop['town ruler'] ?? false;
                            _import.stats.shop.properties.cityruler = shop['city ruler'] ?? false;
                            _import.stats.shop.properties.kingdomminister = shop['kindom minister'] ?? false;
                        }
                        //#endregion
                        
                        //#region Trinkets
                        {
                            _import.stats.shop.trinkets.coinpouch = shop['coin pouch'] ?? false;
                            _import.stats.shop.trinkets.woodencrown = shop['wooden crown'] ?? false;
                            _import.stats.shop.trinkets.dumbbells = shop['dumbbells'] ?? false;
                            _import.stats.shop.trinkets.luckycharm = shop['lucky charm'] ?? false;
                            _import.stats.shop.trinkets.pendulum = shop['pendulum'] ?? false;
                            _import.stats.shop.trinkets.silverring = shop['silver ring'] ?? false;
                            _import.stats.shop.trinkets.ceremonyknife = shop['ceremony knife'] ?? false;
                            _import.stats.shop.trinkets.magicpebbles = shop['magic pebbles'] ?? false;
                            _import.stats.shop.trinkets.shinylamp = shop['shiny lamp'] ?? false;
                            _import.stats.shop.trinkets.goldenhourglass = shop['golden hourglass'] ?? false;
                        }
                        //#endregion
                        
                        //#region Weapons
                        {
                            _import.stats.shop.weapons.smallshield = shop['small shield'] ?? false;
                            _import.stats.shop.weapons.warpaint = shop['war paint'] ?? false;
                            _import.stats.shop.weapons.shortbow = shop['short bow'] ?? false;
                            _import.stats.shop.weapons.steellongsword = shop['steel longsword'] ?? false;
                            _import.stats.shop.weapons.knightarmor = shop['knight armor'] ?? false;
                            _import.stats.shop.weapons.warhorse = shop['war horse'] ?? false;
                            _import.stats.shop.weapons.magicsword = shop['magic sword'] ?? false;
                        }
                        //#endregion
                        
                        //#region Servants
                        {
                            _import.stats.shop.servants.squire = shop['squire'] ?? false;
                            _import.stats.shop.servants.bookkeeper = shop['bookkeeper'] ?? false;
                            _import.stats.shop.servants.butler = shop['butler'] ?? false;
                            _import.stats.shop.servants.banker = shop['banker'] ?? false;
                            _import.stats.shop.servants.seer = shop['seer'] ?? false;
                            _import.stats.shop.servants.bodyguard = shop['bodyguard'] ?? false;
                            _import.stats.shop.servants.holyman = shop['holyman'] ?? false;
                        }
                        //#endregion
            
                        let skills = stats.playerData.skills;
                        //#region The Order
                        {
                            _import.stats.skills.theorder.faith.level = skills['faith']['level'];
                            _import.stats.skills.theorder.faith.reliclevel = skills['faith']['relicLevel'];
                            _import.stats.skills.theorder.faith.effect = skills['faith']['value'];
            
                            _import.stats.skills.theorder.zeal.level = skills['zeal']['level'];
                            _import.stats.skills.theorder.zeal.reliclevel = skills['zeal']['relicLevel'];
                            _import.stats.skills.theorder.zeal.effect = skills['zeal']['value'];
            
                            _import.stats.skills.theorder.devotion.level = skills['devotion']['level'];
                            _import.stats.skills.theorder.devotion.reliclevel = skills['devotion']['relicLevel'];
                            _import.stats.skills.theorder.devotion.effect = skills['devotion']['value'];
            
                            _import.stats.skills.theorder.fervour.level = skills['fervour']['level'];
                            _import.stats.skills.theorder.fervour.reliclevel = skills['fervour']['relicLevel'];
                            _import.stats.skills.theorder.fervour.effect = skills['fervour']['value'];
                        }
                        //#endregion
                        
                        //#region Fundamentals
                        {
                            _import.stats.skills.fundamentals.productivity.level = skills['productivity']['level'];
                            _import.stats.skills.fundamentals.productivity.reliclevel = skills['productivity']['relicLevel'];
                            _import.stats.skills.fundamentals.productivity.effect = skills['productivity']['value'];
            
                            _import.stats.skills.fundamentals.concentration.level = skills['concentration']['level'];
                            _import.stats.skills.fundamentals.concentration.reliclevel = skills['concentration']['relicLevel'];
                            _import.stats.skills.fundamentals.concentration.effect = skills['concentration']['value'];
            
                            _import.stats.skills.fundamentals.bargaining.level = skills['bargaining']['level'];
                            _import.stats.skills.fundamentals.bargaining.reliclevel = skills['bargaining']['relicLevel'];
                            _import.stats.skills.fundamentals.bargaining.effect = skills['bargaining']['value'];
            
                            _import.stats.skills.fundamentals.meditation.level = skills['meditation']['level'];
                            _import.stats.skills.fundamentals.meditation.reliclevel = skills['meditation']['relicLevel'];
                            _import.stats.skills.fundamentals.meditation.effect = skills['meditation']['value'];
                        }
                        //#endregion
                        
                        //#region Combat
                        {
                            _import.stats.skills.combat.strength.level = skills['strength']['level'];
                            _import.stats.skills.combat.strength.reliclevel = skills['strength']['relicLevel'];
                            _import.stats.skills.combat.strength.effect = skills['strength']['value'];
            
                            _import.stats.skills.combat.battletactics.level = skills['battle tactics']['level'];
                            _import.stats.skills.combat.battletactics.reliclevel = skills['battle tactics']['relicLevel'];
                            _import.stats.skills.combat.battletactics.effect = skills['battle tactics']['value'];
            
                            _import.stats.skills.combat.musclememory.level = skills['muscle memory']['level'];
                            _import.stats.skills.combat.musclememory.reliclevel = skills['muscle memory']['relicLevel'];
                            _import.stats.skills.combat.musclememory.effect = skills['muscle memory']['value'];
                        }
                        //#endregion
                        
                        //#region Magic
                        {
                            _import.stats.skills.magic.manacontrol.level = skills['mana control']['level'];
                            _import.stats.skills.magic.manacontrol.reliclevel = skills['mana control']['relicLevel'];
                            _import.stats.skills.magic.manacontrol.effect = skills['mana control']['value'];
            
                            _import.stats.skills.magic.lifeessence.level = skills['life essence']['level'];
                            _import.stats.skills.magic.lifeessence.reliclevel = skills['life essence']['relicLevel'];
                            _import.stats.skills.magic.lifeessence.effect = skills['life essence']['value'];
            
                            _import.stats.skills.magic.resilience.level = skills['resilience']['level'];
                            _import.stats.skills.magic.resilience.reliclevel = skills['resilience']['relicLevel'];
                            _import.stats.skills.magic.resilience.effect = skills['resilience']['value'];
                        }
                        //#endregion
                        
                        //#region Dark Magic
                        {
                            _import.stats.skills.darkmagic.fanaticaldevotion.level = skills['fanatical devotion']['level'];
                            _import.stats.skills.darkmagic.fanaticaldevotion.reliclevel = skills['fanatical devotion']['relicLevel'];
                            _import.stats.skills.darkmagic.fanaticaldevotion.effect = skills['fanatical devotion']['value'];
            
                            _import.stats.skills.darkmagic.ardentbelief.level = skills['ardent belief']['level'];
                            _import.stats.skills.darkmagic.ardentbelief.reliclevel = skills['ardent belief']['relicLevel'];
                            _import.stats.skills.darkmagic.ardentbelief.effect = skills['ardent belief']['value'];
            
                            _import.stats.skills.darkmagic.zealousconviction.level = skills['zealous conviction']['level'];
                            _import.stats.skills.darkmagic.zealousconviction.reliclevel = skills['zealous conviction']['relicLevel'];
                            _import.stats.skills.darkmagic.zealousconviction.effect = skills['zealous conviction']['value'];
            
                            _import.stats.skills.darkmagic.extremepiety.level = skills['extreme piety']['level'];
                            _import.stats.skills.darkmagic.extremepiety.reliclevel = skills['extreme piety']['relicLevel'];
                            _import.stats.skills.darkmagic.extremepiety.effect = skills['extreme piety']['value'];
            
                            _import.stats.skills.darkmagic.absolutefaith.level = skills['absolute faith']['level'];
                            _import.stats.skills.darkmagic.absolutefaith.reliclevel = skills['absolute faith']['relicLevel'];
                            _import.stats.skills.darkmagic.absolutefaith.effect = skills['absolute faith']['value'];
            
                            _import.stats.skills.darkmagic.devoutmastery.level = skills['devout mastery']['level'];
                            _import.stats.skills.darkmagic.devoutmastery.reliclevel = skills['devout mastery']['relicLevel'];
                            _import.stats.skills.darkmagic.devoutmastery.effect = skills['devout mastery']['value'];
            
                            _import.stats.skills.darkmagic.doggedperseverance.level = skills['dogged perseverance']['level'];
                            _import.stats.skills.darkmagic.doggedperseverance.reliclevel = skills['dogged perseverance']['relicLevel'];
                            _import.stats.skills.darkmagic.doggedperseverance.effect = skills['dogged perseverance']['value'];
                        }
                        //#endregion
            
                        let _playerStats = stats.playerData.stats;
                        //#region playerStats
                        {
                            _import.stats.playerStats.income = _playerStats['income'] ?? 1;
                            _import.stats.playerStats.happiness = _playerStats['happiness'] ?? 1;
                            _import.stats.playerStats.allprices = _playerStats['allPrices'] ?? 1;
                            _import.stats.playerStats.shopprices = _playerStats['shopPrices'] ?? 1;
                            _import.stats.playerStats.skilleffects = _playerStats['skillEffects'] ?? 1;
                            _import.stats.playerStats.bonusrelic = _playerStats['bonusRelic'] ?? 0;
                            _import.stats.playerStats.flatincome = _playerStats['flatIncome'] ?? 0;
                            _import.stats.playerStats.atkduration = _playerStats['atkDuration'] ?? 1;
                            _import.stats.playerStats.atkpower = _playerStats['atkPower'] ?? 1;
                            _import.stats.playerStats.atkresistance = _playerStats['atkResistance'] ?? 1;
                            _import.stats.playerStats.insanitythreshold = _playerStats['insanityThreshold'] ?? 1;
                        }
                        //#endregion
            
                        console.log(_import.stats);
                    }
                    catch (e) {
                        alert("An error occured, this could be because of rate limiting on the API, or, you might not be logged into the game!")
                    }
                }
                
            }).always(function (dataOrjqXHR, textStatus, jqXHRorErrorThrown) { 
                console.table("1",dataOrjqXHR); console.table("2",textStatus); console.table("3",jqXHRorErrorThrown) 
                alert(dataOrjqXHR.status)
            });
        }
        else {
            const binString = atob(data.replace(/[^\x00-\x7F]/g, ""));
            stats = JSON.parse(binString);

            try {
                _import.stats.boosts.happiness = Date.parse(stats['boosts']['happiness'][0]) ?? Date.now();
                _import.stats.boosts.income.ad = Date.parse(stats['boosts']['income'][0]) ?? Date.now();
                _import.stats.boosts.income.tavern = Date.parse(stats['boosts']['income'][1]) ?? Date.now();
    
                _import.stats.fanaticism = stats['fanaticism'].toFixed(2);
                _import.stats.brands = stats['brands'];
                _import.stats.relictouches = stats['relicTouches'];
    
                let shop = stats.shop;
                //#region Properties
                {
                    _import.stats.shop.properties.tent = shop['tent'] ?? false;
                    _import.stats.shop.properties.woodenhut = shop['wooden hut'] ?? false;
                    _import.stats.shop.properties.cottage = shop['cottage'] ?? false;
                    _import.stats.shop.properties.house = shop['house'] ?? false;
                    _import.stats.shop.properties.largehouse = shop['large house'] ?? false;
                    _import.stats.shop.properties.smallpalace = shop['small palace'] ?? false;
                    _import.stats.shop.properties.grandpalace = shop['grand palace'] ?? false;
                    _import.stats.shop.properties.townruler = shop['town ruler'] ?? false;
                    _import.stats.shop.properties.cityruler = shop['city ruler'] ?? false;
                    _import.stats.shop.properties.kingdomminister = shop['kindom minister'] ?? false;
                }
                //#endregion
                
                //#region Trinkets
                {
                    _import.stats.shop.trinkets.coinpouch = shop['coin pouch'] ?? false;
                    _import.stats.shop.trinkets.woodencrown = shop['wooden crown'] ?? false;
                    _import.stats.shop.trinkets.dumbbells = shop['dumbbells'] ?? false;
                    _import.stats.shop.trinkets.luckycharm = shop['lucky charm'] ?? false;
                    _import.stats.shop.trinkets.pendulum = shop['pendulum'] ?? false;
                    _import.stats.shop.trinkets.silverring = shop['silver ring'] ?? false;
                    _import.stats.shop.trinkets.ceremonyknife = shop['ceremony knife'] ?? false;
                    _import.stats.shop.trinkets.magicpebbles = shop['magic pebbles'] ?? false;
                    _import.stats.shop.trinkets.shinylamp = shop['shiny lamp'] ?? false;
                    _import.stats.shop.trinkets.goldenhourglass = shop['golden hourglass'] ?? false;
                }
                //#endregion
                
                //#region Weapons
                {
                    _import.stats.shop.weapons.smallshield = shop['small shield'] ?? false;
                    _import.stats.shop.weapons.warpaint = shop['war paint'] ?? false;
                    _import.stats.shop.weapons.shortbow = shop['short bow'] ?? false;
                    _import.stats.shop.weapons.steellongsword = shop['steel longsword'] ?? false;
                    _import.stats.shop.weapons.knightarmor = shop['knight armor'] ?? false;
                    _import.stats.shop.weapons.warhorse = shop['war horse'] ?? false;
                    _import.stats.shop.weapons.magicsword = shop['magic sword'] ?? false;
                }
                //#endregion
                
                //#region Servants
                {
                    _import.stats.shop.servants.squire = shop['squire'] ?? false;
                    _import.stats.shop.servants.bookkeeper = shop['bookkeeper'] ?? false;
                    _import.stats.shop.servants.butler = shop['butler'] ?? false;
                    _import.stats.shop.servants.banker = shop['banker'] ?? false;
                    _import.stats.shop.servants.seer = shop['seer'] ?? false;
                    _import.stats.shop.servants.bodyguard = shop['bodyguard'] ?? false;
                    _import.stats.shop.servants.holyman = shop['holyman'] ?? false;
                }
                //#endregion
    
                let skills = stats.skills;
                //#region The Order
                {
                    _import.stats.skills.theorder.faith.level = skills['faith']['level'];
                    _import.stats.skills.theorder.faith.reliclevel = skills['faith']['relicLevel'];
                    _import.stats.skills.theorder.faith.effect = skills['faith']['value'];
    
                    _import.stats.skills.theorder.zeal.level = skills['zeal']['level'];
                    _import.stats.skills.theorder.zeal.reliclevel = skills['zeal']['relicLevel'];
                    _import.stats.skills.theorder.zeal.effect = skills['zeal']['value'];
    
                    _import.stats.skills.theorder.devotion.level = skills['devotion']['level'];
                    _import.stats.skills.theorder.devotion.reliclevel = skills['devotion']['relicLevel'];
                    _import.stats.skills.theorder.devotion.effect = skills['devotion']['value'];
    
                    _import.stats.skills.theorder.fervour.level = skills['fervour']['level'];
                    _import.stats.skills.theorder.fervour.reliclevel = skills['fervour']['relicLevel'];
                    _import.stats.skills.theorder.fervour.effect = skills['fervour']['value'];
                }
                //#endregion
                
                //#region Fundamentals
                {
                    _import.stats.skills.fundamentals.productivity.level = skills['productivity']['level'];
                    _import.stats.skills.fundamentals.productivity.reliclevel = skills['productivity']['relicLevel'];
                    _import.stats.skills.fundamentals.productivity.effect = skills['productivity']['value'];
    
                    _import.stats.skills.fundamentals.concentration.level = skills['concentration']['level'];
                    _import.stats.skills.fundamentals.concentration.reliclevel = skills['concentration']['relicLevel'];
                    _import.stats.skills.fundamentals.concentration.effect = skills['concentration']['value'];
    
                    _import.stats.skills.fundamentals.bargaining.level = skills['bargaining']['level'];
                    _import.stats.skills.fundamentals.bargaining.reliclevel = skills['bargaining']['relicLevel'];
                    _import.stats.skills.fundamentals.bargaining.effect = skills['bargaining']['value'];
    
                    _import.stats.skills.fundamentals.meditation.level = skills['meditation']['level'];
                    _import.stats.skills.fundamentals.meditation.reliclevel = skills['meditation']['relicLevel'];
                    _import.stats.skills.fundamentals.meditation.effect = skills['meditation']['value'];
                }
                //#endregion
                
                //#region Combat
                {
                    _import.stats.skills.combat.strength.level = skills['strength']['level'];
                    _import.stats.skills.combat.strength.reliclevel = skills['strength']['relicLevel'];
                    _import.stats.skills.combat.strength.effect = skills['strength']['value'];
    
                    _import.stats.skills.combat.battletactics.level = skills['battle tactics']['level'];
                    _import.stats.skills.combat.battletactics.reliclevel = skills['battle tactics']['relicLevel'];
                    _import.stats.skills.combat.battletactics.effect = skills['battle tactics']['value'];
    
                    _import.stats.skills.combat.musclememory.level = skills['muscle memory']['level'];
                    _import.stats.skills.combat.musclememory.reliclevel = skills['muscle memory']['relicLevel'];
                    _import.stats.skills.combat.musclememory.effect = skills['muscle memory']['value'];
                }
                //#endregion
                
                //#region Magic
                {
                    _import.stats.skills.magic.manacontrol.level = skills['mana control']['level'];
                    _import.stats.skills.magic.manacontrol.reliclevel = skills['mana control']['relicLevel'];
                    _import.stats.skills.magic.manacontrol.effect = skills['mana control']['value'];
    
                    _import.stats.skills.magic.lifeessence.level = skills['life essence']['level'];
                    _import.stats.skills.magic.lifeessence.reliclevel = skills['life essence']['relicLevel'];
                    _import.stats.skills.magic.lifeessence.effect = skills['life essence']['value'];
    
                    _import.stats.skills.magic.resilience.level = skills['resilience']['level'];
                    _import.stats.skills.magic.resilience.reliclevel = skills['resilience']['relicLevel'];
                    _import.stats.skills.magic.resilience.effect = skills['resilience']['value'];
                }
                //#endregion
                
                //#region Dark Magic
                {
                    _import.stats.skills.darkmagic.fanaticaldevotion.level = skills['fanatical devotion']['level'];
                    _import.stats.skills.darkmagic.fanaticaldevotion.reliclevel = skills['fanatical devotion']['relicLevel'];
                    _import.stats.skills.darkmagic.fanaticaldevotion.effect = skills['fanatical devotion']['value'];
    
                    _import.stats.skills.darkmagic.ardentbelief.level = skills['ardent belief']['level'];
                    _import.stats.skills.darkmagic.ardentbelief.reliclevel = skills['ardent belief']['relicLevel'];
                    _import.stats.skills.darkmagic.ardentbelief.effect = skills['ardent belief']['value'];
    
                    _import.stats.skills.darkmagic.zealousconviction.level = skills['zealous conviction']['level'];
                    _import.stats.skills.darkmagic.zealousconviction.reliclevel = skills['zealous conviction']['relicLevel'];
                    _import.stats.skills.darkmagic.zealousconviction.effect = skills['zealous conviction']['value'];
    
                    _import.stats.skills.darkmagic.extremepiety.level = skills['extreme piety']['level'];
                    _import.stats.skills.darkmagic.extremepiety.reliclevel = skills['extreme piety']['relicLevel'];
                    _import.stats.skills.darkmagic.extremepiety.effect = skills['extreme piety']['value'];
    
                    _import.stats.skills.darkmagic.absolutefaith.level = skills['absolute faith']['level'];
                    _import.stats.skills.darkmagic.absolutefaith.reliclevel = skills['absolute faith']['relicLevel'];
                    _import.stats.skills.darkmagic.absolutefaith.effect = skills['absolute faith']['value'];
    
                    _import.stats.skills.darkmagic.devoutmastery.level = skills['devout mastery']['level'];
                    _import.stats.skills.darkmagic.devoutmastery.reliclevel = skills['devout mastery']['relicLevel'];
                    _import.stats.skills.darkmagic.devoutmastery.effect = skills['devout mastery']['value'];
    
                    _import.stats.skills.darkmagic.doggedperseverance.level = skills['dogged perseverance']['level'];
                    _import.stats.skills.darkmagic.doggedperseverance.reliclevel = skills['dogged perseverance']['relicLevel'];
                    _import.stats.skills.darkmagic.doggedperseverance.effect = skills['dogged perseverance']['value'];
                }
                //#endregion
    
                let _playerStats = stats.stats;
                //#region playerStats
                {
                    _import.stats.playerStats.income = _playerStats['income'] ?? 1;
                    _import.stats.playerStats.happiness = _playerStats['happiness'] ?? 1;
                    _import.stats.playerStats.allprices = _playerStats['allPrices'] ?? 1;
                    _import.stats.playerStats.shopprices = _playerStats['shopPrices'] ?? 1;
                    _import.stats.playerStats.skilleffects = _playerStats['skillEffects'] ?? 1;
                    _import.stats.playerStats.bonusrelic = _playerStats['bonusRelic'] ?? 0;
                    _import.stats.playerStats.flatincome = _playerStats['flatIncome'] ?? 0;
                    _import.stats.playerStats.atkduration = _playerStats['atkDuration'] ?? 1;
                    _import.stats.playerStats.atkpower = _playerStats['atkPower'] ?? 1;
                    _import.stats.playerStats.atkresistance = _playerStats['atkResistance'] ?? 1;
                    _import.stats.playerStats.insanitythreshold = _playerStats['insanityThreshold'] ?? 1;
                }
                //#endregion
    
                console.log(_import.stats);
            }
            catch (e) {
                alert("An error occured, this could be because of rate limiting on the API, or, you might not be logged into the game!")
            }
        }
    }
}
