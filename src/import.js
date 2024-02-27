#let _import = {
    stats: {
        balance: 0,
        fanaticism: 0,
        brands: 0,
        relictouches: 1,
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
            fosbonus: 0,
            brandbonus: 0,
            tablebonus: 0,
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
                resilience:     {   level: 1, reliclevel: 1, effect: 0.005    },
                materialism:     {   level: 1, reliclevel: 1, effect: 0.004    }
            },
            darkmagic: {
                fanaticaldevotion:  {   level: 1, reliclevel: 1, effect: 0.01     },
                ardentbelief:       {   level: 1, reliclevel: 1, effect: 0.03     },
                zealousconviction:  {   level: 1, reliclevel: 1, effect: 0.01     },
                extremepiety:       {   level: 1, reliclevel: 1, effect: 0.01     },
                absolutefaith:      {   level: 1, reliclevel: 1, effect: 0.01     },
                devoutmastery:      {   level: 1, reliclevel: 1, effect: 0.002    },
                doggedperseverance: {   level: 1, reliclevel: 1, effect: 0.003    },
                blazingfervour:     {   level: 1, reliclevel: 1, effect: 0.0027    }
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
                kingdomminister:    false,
                heaven:             false,
            },
            trinkets: {
                coinpouch:          false,
                woodencrown:        false,
                dumbbells:          false,
                luckycharm:         false,
                soulboundlocket:    false,
                pendulum:           false,
                silverring:         false,
                ceremonyknife:      false,
                magicpebbles:       false,
                shinylamp:          false,
                goldenhourglass:    false,
                mysticsatchel:      false
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
                holyman:    false,
                smuggler:   false
            }
        },
        talents: {
            twoxfana: false,
            extra400fana: false,
            thresh1: false,
            goldperday: false,
            bonusrelic: false,
            greed: false,
            extraattack1: false,
            sneak: false,
            taxredux1: false,
            spikes1: false,
            relictouch1: false,
            extra5fana: false,
            thresh2: false,
            halfshop: false,
            allprice: false,
            happiness: false,
            extraattack2: false,
            stealth: false,
            taxredux2: false,
            spikes2: false,
            relictouch2: false,
            repeatrelic: 0,
            repeatsilver: 0,
            repeathappiness: 0
        }
    },
    
    go: (data) => {
        var stats;
        jQuery.ajax({
            url: "https://api.ezagdev.net/player-data/"+data,
            type: "GET",
            async: false,
            success: function (xhr) {
                stats = xhr;
                localStorage.setItem("playerdata", JSON.stringify(stats));
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
                        _import.stats.shop.properties.kingdomminister = shop['kingdom minister'] ?? false;
                        _import.stats.shop.properties.heaven = shop['heaven'] ?? false;
                    }
                    //#endregion
                    
                    //#region Trinkets
                    {
                        _import.stats.shop.trinkets.coinpouch = shop['coin pouch'] ?? false;
                        _import.stats.shop.trinkets.woodencrown = shop['wooden crown'] ?? false;
                        _import.stats.shop.trinkets.dumbbells = shop['dumbbells'] ?? false;
                        _import.stats.shop.trinkets.luckycharm = shop['lucky charm'] ?? false;
                        _import.stats.shop.trinkets.soulboundlocket = shop['soulbound locket'] ?? false;
                        _import.stats.shop.trinkets.pendulum = shop['pendulum'] ?? false;
                        _import.stats.shop.trinkets.silverring = shop['silver ring'] ?? false;
                        _import.stats.shop.trinkets.ceremonyknife = shop['ceremony knife'] ?? false;
                        _import.stats.shop.trinkets.magicpebbles = shop['magic pebbles'] ?? false;
                        _import.stats.shop.trinkets.shinylamp = shop['shiny lamp'] ?? false;
                        _import.stats.shop.trinkets.goldenhourglass = shop['golden hourglass'] ?? false;
                        _import.stats.shop.trinkets.mysticsatchel = shop['mystic satchel'] ?? false;
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
                        _import.stats.shop.servants.holyman = shop['holy man'] ?? false;
                        _import.stats.shop.servants.smuggler = shop['smuggler'] ?? false;
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
                        
                        _import.stats.skills.magic.materialism.level = skills['materialism']['level'];
                        _import.stats.skills.magic.materialism.reliclevel = skills['materialism']['relicLevel'];
                        _import.stats.skills.magic.materialism.effect = skills['materialism']['value'];
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
        
                        _import.stats.skills.darkmagic.blazingfervour.level = skills['blazing fervor']['level'];
                        _import.stats.skills.darkmagic.blazingfervour.reliclevel = skills['blazing fervor']['relicLevel'];
                        _import.stats.skills.darkmagic.blazingfervour.effect = skills['blazing fervor']['value'];
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
                        _import.stats.playerStats.fosbonus = _playerStats['fosBonus'] ?? 1;
                        _import.stats.playerStats.brandbonus = _playerStats['brandsBonus'] ?? 1;
                        _import.stats.playerStats.tablebonus = _playerStats['tableBonus'] ?? 1;
                        _import.stats.playerStats.bonusrelic = _playerStats['bonusRelic'] ?? 0;
                        _import.stats.playerStats.flatincome = _playerStats['flatIncome'] ?? 0;
                        _import.stats.playerStats.atkduration = _playerStats['atkDuration'] ?? 1;
                        _import.stats.playerStats.atkpower = _playerStats['atkPower'] ?? 1;
                        _import.stats.playerStats.atkresistance = _playerStats['atkResistance'] ?? 1;
                        _import.stats.playerStats.insanitythreshold = _playerStats['insanityThreshold'] ?? 1;
                    }
                    //#endregion

                    let _talents = stats.playerData.talents;
                    // #region talents
                    {
                        _import.stats.talents.twoxfana = _talents[0][0] == 1;

                        _import.stats.talents.extra400fana = _talents[1][0] == 1;
                        _import.stats.talents.thresh1 = _talents[1][1] == 1;

                        _import.stats.talents.goldperday = _talents[2][0] == 1;
                        _import.stats.talents.bonusrelic = _talents[2][1] == 1;
                        _import.stats.talents.greed = _talents[2][2] == 1;

                        _import.stats.talents.extraattack1 = _talents[3][0] == 1;
                        _import.stats.talents.sneak = _talents[3][1] == 1;
                        _import.stats.talents.taxredux1 = _talents[3][2] == 1;
                        _import.stats.talents.spikes1 = _talents[3][3] == 1;
                        _import.stats.talents.relictouch1 = _talents[3][4] == 1;
                        
                        _import.stats.talents.extra5fana = _talents[4][0] == 1;
                        _import.stats.talents.thresh2 = _talents[4][1] == 1;

                        _import.stats.talents.halfshop = _talents[5][0] == 1;
                        _import.stats.talents.allprice = _talents[5][1] == 1;
                        _import.stats.talents.happiness = _talents[5][2] == 1;

                        _import.stats.talents.extraattack2 = _talents[6][0] == 1;
                        _import.stats.talents.stealth = _talents[6][1] == 1;
                        _import.stats.talents.taxredux2 = _talents[6][2] == 1;
                        _import.stats.talents.spikes2 = _talents[6][3] == 1;
                        _import.stats.talents.relictouch2 = _talents[6][4] == 1;

                        _import.stats.talents.repeatrelic = _talents[7][0];
                        _import.stats.talents.repeatsilver = _talents[7][1];
                        _import.stats.talents.repeathappiness = _talents[7][2];
                    }
                    //#endregion
        
                    console.log(_import.stats);
                }
                catch (e) {
                    alert("An error occured, this could be because of rate limiting on the API, or, you might not be logged into the game!")
                }
            }
            
        }).always(function (dataOrjqXHR) { 
            //alert(dataOrjqXHR.status)
        });
    }
}
