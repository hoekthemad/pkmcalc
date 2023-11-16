let _import = {
    allstats: {
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
    stats: {
        income: 1,
        happiness: 1,
        allprices: 1,
        shopprices: 1,
        skilleffects: 1,
        bonusrelic: 1,
        flatincome: 1,
        atkduration: 1,
        enatcduration: 1,
        atkpower: 1,
        atkresistance: 1,
        insanitythreshold: 1,
        
        misc: {
            biggestfishever: 0,
            smallestfishever: 0,
            fish: 0,
            smallfish: 0,
            weeklyfishcaught: 0,
            weeklyfishattempt: 0,
            totalfishcaught: 0,
            shifumiwon: 0,
            shifumilost: 0,
            shifumiplayed: 0,
            totalspent: 0,
            totalstolen: 0,
            weeklyspent: 0,
            weeklystolen: 0,
            weeklygotstolen: 0,
            totalattacks: 0,
            weeklyattacks: 0,
            weeklygotattacked: 0,
            weeklysacrifice: 0,
            lastsacrifice: Date.now(),
            lastsurrender: Date.now(),
            lasttouchrelic: Date.now(),
            maxfanaticism: 0,
            totalfanaticism: 0,
            totalsacrifice: 0,
            totalsurrender: 0,
            lastweeklyspent: 0,
            lastweeklysacrifice: 0,
            accountcreatedat: Date.now()
        }
    },

    go: (data) => {
        if (10 > data.toString().length) {
            jQuery.ajax({
                url: "http://api.ezagdev.net/player-data/"+data,
                type: "GET",
                async: false,
                success: function (res) {
                    _import.stats = res;
                    console.log(_import.stats);
                }
            });
        }
        else {
            const binString = atob(data.replace(/[^\x00-\x7F]/g, ""));
            _import.stats = JSON.parse(binString);
            console.log(_import.stats);
        }
    }
}