let StatPage = {
    groupDisplayNames: [
        'The Order', 'Fundamentals', 'Combat', 'Magic', 'Dark Magic'
    ],

    groupHTMLNames: [
        'theorder', 'fundamentals', 'combat', 'magic', 'darkmagic'
    ],

    baseHTML: `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#skills_GROUPNAME" aria-expanded="true" aria-controls="skills_GROUPNAME">
                    SKILLHEADER
                </button>
            </h2>
            <div id="skills_GROUPNAME" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <div class="row g-3 align-items-center">
                        <div class="col">
                            &nbsp;
                        </div>
                        <div class="col">
                            <label for="GROUPNAME_skill_level" class="col-form-label">Target skill level</label>
                        </div>
                        <div class="col">
                            <label for="GROUPNAME_relic_level" class="col-form-label">Target relic level</label>
                        </div>
                        <div class="col">
                            &nbsp;
                        </div>
                        <div class="col">&nbsp;</div>
                    </div>
                    <div class="row g-3 align-items-center">
                        <div class="col">
                            &nbsp;
                        </div>
                        <div class="col">
                            <input type="number" id="GROUPNAME_skill_level" class="form-control" value="1" onchange="StatPage.updateCategoryLevel('GROUPNAME', jQuery(this).val())" onkeyup="StatPage.updateCategoryLevel('GROUPNAME', jQuery(this).val())">
                        </div>
                        <div class="col">
                            <input type="number" id="GROUPNAME_relic_level" class="form-control" value="1" onchange="StatPage.updateCategoryRelic('GROUPNAME', jQuery(this).val())" onkeyup="StatPage.updateCategoryRelic('GROUPNAME', jQuery(this).val())">
                        </div>
                        <div class="col">
                            &nbsp;
                        </div>
                        <div class="col">&nbsp;</div>
                    </div>
                    <br/>
                    <div class="row g-3 align-items-center">
                        <div class="col">
                            Skill Name
                        </div>
                        <div class="col">
                            Skill Level
                        </div>
                        <div class="col">
                            Relic Level
                        </div>
                        <div class="col">
                            Skill Effect
                        </div>
                        <div class="col">Skill Cost</div>
                    </div>
                    THESKILLS
                </div>
            </div>
        </div>
    `,

    skillHTML: `
        <div class="row g-3 align-items-center">
            <div class="col">
                <label for="SKILLNAME_skill_level" class="col-form-label">HTMLSKILLNAME</label>
            </div>
            <div class="col">
                <input type="number" id="SKILLNAME_skill_level" class="form-control" value="1" onkeyup="StatPage.updateAll()">
            </div>
            <div class="col">
                <input type="number" id="SKILLNAME_relic_level" class="form-control" value="1" onkeyup="StatPage.updateAll()">
            </div>

            <div class="col">
                <span class="col-form-label"><span id="SKILLNAME_skill_effect">SKILL_EFFECT</span></span>
            </div>

            <div class="col">
                <span class="col-form-label"><span id="SKILLNAME_skill_cost">1c</span></span>
            </div>
        </div>
    `,

    skills: {
        theorder: ['faith', 'zeal', 'devotion', 'fervour'],
        fundamentals: ['productivity', 'concentration', 'bargaining', 'meditation'],
        combat: ['strength', 'musclememory', 'battletactics'],
        magic: ['manacontrol', 'lifeessence', 'resilience', 'materialism'],
        darkmagic: ['fanaticaldevotion', 'ardentbelief', 'zealousconviction', 'extremepiety', 'absolutefaith', 'devoutmastery', 'doggedperseverance', 'blazingfervour']
    },

    baseShopHTML: `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#shop_GROUPNAME" aria-expanded="true" aria-controls="shop_GROUPNAME">
                    SHOPHEADER
                </button>
            </h2>
            <div id="shop_GROUPNAME" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <div class="row g-3 align-items-center">
                        <div class="col">
                            Item Name
                        </div>
                        <div class="col">
                            Cost
                        </div>
                        <div class="col">
                            Enabled
                        </div>
                    </div>
                    THESHOP
                </div>
            </div>
        </div>
    `,

    shopHTML: `
        <div class="row g-3 align-items-center">
            <div class="col">
                <label for="" class="col-form-label">HTMLSHOPNAME:</label>
            </div>
            <div class="col">
                <span id="SHOPNAME_price">THEPRICE</span>
            </div>
            <div class="col">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="SHOPNAME_toggle" onchange="StatPage.updateAll()">
                </div>
            </div>
        </div>
    `,

    translateSkillName: (name) => {
        switch (name) {
            case "faith": return "Faith";
            case "zeal": return "Zeal";
            case "devotion": return "Devotion";
            case "fervour": return "Fervor";

            case "productivity": return "Productivity";
            case "concentration": return "Concentration";
            case "bargaining": return "Bargaining";
            case "meditation": return "Meditation";
            
            case "strength": return "Strength";
            case "battletactics": return "Battle Tactics";
            case "musclememory": return "Muscle Memory";

            case "manacontrol": return "Mana Control";
            case "lifeessence": return "Life Essence";
            case "resilience": return "Resilience";
            case "materialism": return "Materialism";

            case "fanaticaldevotion": return "Fanatical Devotion";
            case "ardentbelief": return "Ardent Belief";
            case "zealousconviction": return "Zealous Conviction";
            case "extremepiety": return "Extreme Piety";
            case "absolutefaith": return "Absolute Faith";
            case "devoutmastery": return "Devout Mastery";
            case "doggedperseverance": return "Dogged Perseverance";
            case "blazingfervour": return "Blazing Fervor";
        }
    },

    translateShopName: (name) => {
        switch (name) {
            case "tent" : return "Tent";
            case "wooden_hut" : return "Wooden Hut";
            case "cottage" : return "Cottage";
            case "house" : return "House";
            case "large_house" : return "Large House";
            case "small_palace" : return "Small Palace";
            case "grand_palace" : return "Grand Palace";
            case "town_ruler" : return "Town Ruler";
            case "city_ruler" : return "City Ruler";
            case "kingdom_minister" : return "Kingdom Minister";
                
            case "coin_pouch" : return "Coin Pouch";
            case "wooden_crown" : return "Wooden Crown";
            case "dumbells" : return "Dumbells";
            case "lucky_charm" : return "Lucky Charm";
            case "soulbound_locket" : return "Soulbound Locket";
            case "pendulum" : return "Pendulum";
            case "silver_ring" : return "Silver Ring";
            case "ceremony_knife" : return "Ceremony Knife";
            case "magic_pebbles" : return "Magic Pebbles";
            case "shiny_lamp" : return "Shiny lamp";
            case "golden_hourglass" : return "Golden Hourglass";
            case "mystic_satchel" : return "Mystic Satchel";
                
            case "small_shield" : return "Small Shield";
            case "war_paint" : return "War Paint";
            case "short_bow" : return "Short Bow";
            case "steel_longsword" : return "Steel Longsowrd";
            case "knight_armor" : return "Knight Armor";
            case "war_horse" : return "War Horse";
            case "magic_sword" : return "Magic Sword";
                
            case "squire" : return "Squire";
            case "bookeeper" : return "Bookkeeper";
            case "butler" : return "Butler";
            case "banker" : return "Banker";
            case "bodyguard" : return "Bodyguard";
            case "holyman" : return "Holy Man";
            case "smuggler" : return "Smuggler";
        }
    },

    getCategory: (skillname) => {
        switch (skillname) {
            case "faith":
            case "zeal":
            case "devotion":
            case "fervour": return "theorder";

            case "productivity":
            case "concentration":
            case "bargaining":
            case "meditation": return "fundamentals";
            
            case "strength": 
            case "battletactics": 
            case "musclememory": return "combat";

            case "manacontrol": 
            case "lifeessence": 
            case "resilience": 
            case "materialism": return "magic";

            case "fanaticaldevotion":
            case "ardentbelief": 
            case "zealousconviction":
            case "extremepiety": 
            case "absolutefaith":
            case "devoutmastery":
            case "doggedperseverance": 
            case "blazingfervour": return "darkmagic";
        }
    },

    init: () => {
        let groupDisplayNames = [
            'The Order', 'Fundamentals', 'Combat', 'Magic', 'Dark Magic'
        ];
        let groupHTMLNames = [
            'theorder', 'fundamentals', 'combat', 'magic', 'darkmagic'
        ];
        let totalSkillHtml = '';

        for (let gCount = 0; gCount < groupDisplayNames.length; gCount++) {
            let outerHTML = StatPage.baseHTML;
            outerHTML = outerHTML.replaceAll("SKILLHEADER", groupDisplayNames[gCount]);
            outerHTML = outerHTML.replaceAll("GROUPNAME", groupHTMLNames[gCount]);

            let groupSkillHTML = '';
            for (let skillCount = 0; skillCount < StatPage.skills[groupHTMLNames[gCount]].length; skillCount++) {
                let thisSkillHtml = StatPage.skillHTML;
                thisSkillHtml = thisSkillHtml.replaceAll('HTMLSKILLNAME', StatPage.translateSkillName(StatPage.skills[groupHTMLNames[gCount]][skillCount]));
                thisSkillHtml = thisSkillHtml.replaceAll('SKILL_EFFECT', data.skillEffects[groupHTMLNames[gCount]][StatPage.skills[groupHTMLNames[gCount]][skillCount]]);
                thisSkillHtml = thisSkillHtml.replaceAll('SKILLNAME', StatPage.skills[groupHTMLNames[gCount]][skillCount]);

                groupSkillHTML += thisSkillHtml;
            }
            outerHTML = outerHTML.replaceAll("THESKILLS", groupSkillHTML);
            totalSkillHtml += outerHTML;
            outerHTML = '';
        }
        jQuery("#skillsAccordian").append(totalSkillHtml);

        let shopDisplayNames = [
            'Properties', 'Trinkets', 'Weapons', 'Servants'
        ];
        let shopHTMLNames = [
            'properties', 'trinkets', 'weapons', 'servants'
        ];

        let totalShopHTML = '';
        for (let sCount = 0; sCount < shopDisplayNames.length; sCount++) {
            let shopOuterHTML = StatPage.baseShopHTML;
            shopOuterHTML = shopOuterHTML.replaceAll("SHOPHEADER", shopDisplayNames[sCount]);
            shopOuterHTML = shopOuterHTML.replaceAll("GROUPNAME", shopHTMLNames[sCount]);
            let shopHTML = '';

            for (let shopitem in data[shopHTMLNames[sCount]]) {
                let thisShopHTML = StatPage.shopHTML;

                thisShopHTML = thisShopHTML.replaceAll("HTMLSHOPNAME", data[shopHTMLNames[sCount]][shopitem].display);
                thisShopHTML = thisShopHTML.replaceAll("SHOPNAME", shopitem);
                thisShopHTML = thisShopHTML.replaceAll("THEPRICE", convertIntToCurrency(data[shopHTMLNames[sCount]][shopitem].base_price));
                thisShopHTML = thisShopHTML.replaceAll("SHOPEFFECT", data[shopHTMLNames[sCount]][shopitem].effect);

                shopHTML += thisShopHTML;
            }

            shopOuterHTML = shopOuterHTML.replaceAll("THESHOP", shopHTML);
            totalShopHTML += shopOuterHTML;
            shopOuterHTML = '';
        }
        jQuery("#shopAccordian").append(totalShopHTML);

        StatPage.updateAll();
    },

    updateCategoryLevel: (category, level) => {
        let skills = StatPage.skills[category];
        for (let i = 0; i < skills.length; i++) {
            jQuery(`#${skills[i]}_skill_level`).val(level);
        }
        StatPage.updateAll();
    },

    updateCategoryRelic: (category, level) => {
        let skills = StatPage.skills[category];
        for (let i = 0; i < skills.length; i++) {
            jQuery(`#${skills[i]}_relic_level`).val(level);
        }
        StatPage.updateAll();
    },

    updateAll: () => {
        for (let key in StatPage.skills) {
            for (let skillC = 0; skillC < StatPage.skills[key].length; skillC++) {
                StatPage.updateSkill(StatPage.skills[key][skillC]);
            }
        }

        for (let i =0; i < 4; i++) {
            for (let [group, items] of Object.entries(data)) {
                for (let [item, values] of Object.entries(items)) {
                    if (group == "skillEffects") continue;
                    calculateSP(data[group][item], values.display.toLowerCase().replace(" ", "_"));
                }
            }
        }

        let fdiscount = (1+Math.sqrt((1*jQuery('#current_fana').text().replaceAll(",",""))/10));
        jQuery("#current_fana").attr("title", `Current fanaticism discount: `+fdiscount.toFixed(1));
        
        calcIncome();
        calcFana();
    },

    calcShopPrice: () => {
        return calcShopPrice();
    },

    calcAllPrice: () => {
        return calcAllPrice();
    },

    updateSkill: (skillname) => {
        let skillcategory = StatPage.getCategory(skillname)

        let playerstats = _import.stats.playerStats;
        
        jQuery('#'+skillname+'_skill_effect').text(
            getEffect(
                data.skillEffects[skillcategory][skillname], 
                jQuery('#'+skillname+'_skill_level').val(), 
                getSkillEffects(), 
                skillname == "concentration" ? true : false
            )
        );
        jQuery('#'+skillname+'_skill_cost').html(
            convertIntToCurrency(
                Math.floor(getSkillPrice(
                    jQuery('#'+skillname+'_skill_level').val(), 
                    (skillcategory == "theorder"), 
                    calcAllPrice(), 
                    calcHappiness(),
                    jQuery('#'+skillname+'_relic_level').val(),
                    (skillcategory == "darkmagic"),
                    1*jQuery("#current_fana").text().replaceAll(",", ""),
                    true
                ))
            )
        )
    },

    import: (playerid) => {
        _import.go(playerid)

        let stats =_import.stats;

        jQuery("#current_fana").text(parseFloat(stats.fanaticism).toLocaleString());
        jQuery("#total_brands").text(parseFloat(stats.brands).toLocaleString());
        jQuery("#relic_touches").text(parseFloat(stats.relictouches).toLocaleString());

        let skillNameList = [];

        for (group = 0; group < StatPage.groupHTMLNames.length; group++) {
            for (skill = 0; skill < StatPage.skills[StatPage.groupHTMLNames[group]].length; skill++) {
                let groupName = StatPage.groupHTMLNames[group];
                let skillName = StatPage.skills[groupName][skill];

                skillNameList.push(skillName)
                
                jQuery(`#${skillName}_skill_level`).val(stats.skills[groupName][skillName].level);
                jQuery(`#${skillName}_relic_level`).val(stats.skills[groupName][skillName].reliclevel);
                jQuery(`#${skillName}_skill_effect`).text(getEffect(1*data.skillEffects[groupName][skillName], 1*stats.skills[groupName][skillName].level, 1*stats.playerStats.skilleffects, false));
            }
        }

        for (let [group, items] of Object.entries(data)) {
            if (group == "skillEffects") continue;
            let dataGroup = data[group];
            let groupName = group.toLowerCase().replace("_", "")
            for (let [item, values] of Object.entries(items)) {
                let itemName = item.replace("_", "");
                if (itemName == "dumbells") itemName = "dumbbells";
                if (itemName == "bookkeeper") itemName = "bookeeper";

                if (item.match(/king/))  {
                    item = "kingdom_minister";
                    itemName = "kingdomminister";
                }
                if (item.match(/book/)) {
                    item = "bookeeper";
                    itemName = "bookkeeper";
                }
                if (item.match(/holy/)) {
                    item = "holyman";
                    itemName = "holyman";
                }
                
                jQuery(`#${item}_toggle`).prop("checked", _import.stats.shop[groupName][itemName] ? "checked" : "")
            }
        }

        for (let runC = 0; runC < 4; runC++) {
            StatPage.updateAll();
        }
        calcIncome();
    }
}
