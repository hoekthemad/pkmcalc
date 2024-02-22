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
                            <label for="GROUPNAME_skill_level" class="col-form-label">Target skill level</label>
                        </div>
                        <div class="col">
                            <input type="number" id="GROUPNAME_skill_level" class="form-control" value="1" onchange="StatPage.updateCategoryLevel('GROUPNAME', jQuery(this).val())">
                        </div>
                        <div class="col">
                            <label for="GROUPNAME_relic_level" class="col-form-label">Target skill level</label>
                        </div>
                        <div class="col">
                            <input type="number" id="GROUPNAME_relic_level" class="form-control" value="1" onchange="StatPage.updateCategoryRelic('GROUPNAME', jQuery(this).val())">
                        </div>
                        <div class="col">&nbsp;</div>
                        <div class="col">&nbsp;</div>
                    </div>
                    THESKILLS
                </div>
            </div>
        </div>
    `,

    skillHTML: `
        <div class="row g-3 align-items-center">
            <div class="col">
                <label for="SKILLNAME_skill_level" class="col-form-label">HTMLSKILLNAME: Skill Level</label>
            </div>
            <div class="col">
                <input type="number" id="SKILLNAME_skill_level" class="form-control" value="1" onchange="StatPage.updateAll()">
            </div>

            <div class="col">
                <label for="SKILLNAME_relic_level" class="col-form-label">Relic Level</label>
            </div>
            <div class="col">
                <input type="number" id="SKILLNAME_relic_level" class="form-control" value="1" onchange="StatPage.updateAll()">
            </div>

            <div class="col">
                <span class="col-form-label">Skill effect <span id="SKILLNAME_skill_effect">SKILL_EFFECT</span></span>
            </div>

            <div class="col">
                <span class="col-form-label">Skill cost <span id="SKILLNAME_skill_cost">1c</span></span>
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
            console.log(shopOuterHTML)
            let shopHTML = '';

            for (let shopitem in data[shopHTMLNames[sCount]]) {
                let thisShopHTML = StatPage.shopHTML;

                thisShopHTML = thisShopHTML.replaceAll("HTMLSHOPNAME", shopitem);
                thisShopHTML = thisShopHTML.replaceAll("SHOPNAME", shopitem);
                thisShopHTML = thisShopHTML.replaceAll("THEPRICE", convertIntToCurrency(data[shopHTMLNames[sCount]][shopitem].base_price));

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
        StatPage.calcIncome();
        calcSP();
    },

    calcIncome: () => {
        let faithEffect = 1*jQuery("#faith_skill_effect").text();
        let prodEffect = 1*jQuery("#productivity_skill_effect").text();
        let dmEffect = 1*jQuery("#devoutmastery_skill_effect").text();

        let cp = _import.stats.shop.trinkets.coinpouch == true ? 2.5 : 1;
        let lc = _import.stats.shop.trinkets.luckycharm == true ? 3 : 1;
        let bk = _import.stats.shop.servants.bookkeeper == true ? 2 : 1;

        let adBoost = isBoostActive(_import.stats.boosts.income.ad);
        let cmBoost = isBoostActive(_import.stats.boosts.income.tavern);

        if (adBoost && cmBoost) incBoost = 3;
        else if ((!adBoost && cmBoost) || (adBoost && !cmBoost)) incBoost = 2;
        else incBoost = 1;

        let income = 1 * faithEffect * prodEffect * dmEffect * cp * lc * bk * incBoost;
        income = convertIntToCurrency(Math.round(income) + Math.round(_import.stats.playerStats.flatincome));
        jQuery("#income").html(income);
    },

    calcHappiness: () => {
        return calcHappiness
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
                (
                    1*$('#concentration_skill_effect').text() + 1*playerstats.fosbonus + 1*playerstats.brandbonus + 1*playerstats.tablebonus
                ), 
                skillname == "concentration" ? true : false
            )
        );
        jQuery('#'+skillname+'_skill_cost').html(
            convertIntToCurrency(
                Math.floor(getSkillPrice(
                    jQuery('#'+skillname+'_skill_level').val(), 
                    (skillcategory == "theorder"), 
                    calcAllPrice(), 
                    _import.stats.playerStats.happiness, // calcHappiness(),
                    jQuery('#'+skillname+'_relic_level').val(),
                    (skillcategory == "darkmagic"),
                    _import.stats.fanaticism,
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

        for (let runC = 0; runC < 4; runC++) {
            StatPage.updateAll();
        }
        StatPage.calcIncome();
    }
}
