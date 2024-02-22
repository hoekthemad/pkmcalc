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
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#skills_GROUPNAME" aria-expanded="true" aria-controls="skills_GROUPNAME">
                    SKILLHEADER
                </button>
            </h2>
            <div id="skills_GROUPNAME" class="accordion-collapse collapse show">
                <div class="accordion-body">
                    Target skill level <input type="number" onchange="StatPage.updateCategory('GROUPNAME', jQuery(this).val())" /><br />
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
        StatPage.updateAll();
    },

    updateCategory: (category, level) => {
        let skills = StatPage.skills[category];
        for (let i = 0; i < skills.length; i++) {
            jQuery(`#${skills[i]}_skill_level`).val(level);
        }
        StatPage.updateAll();
    },

    updateAll: () => {
        for (let key in StatPage.skills) {
            for (let skillC = 0; skillC < StatPage.skills[key].length; skillC++) {
                StatPage.updateSkill(StatPage.skills[key][skillC]);
            }
        }
    },

    updateSkill: (skillname) => {
        // if (skillname == "faith" || skillname == "zeal" || skillname == "devotion" || skillname == "fervour") skillcategory = "theorder";
        // if (skillname == "productivity" || skillname == "concentration" || skillname == "bargaining" || skillname == "meditation") skillcategory = "fundamentals";
        // if (skillname == "strength" || skillname == "battletactics" || skillname == "musclememory") skillcategory = "combat";
        // if (skillname == "manacontrol" || skillname == "lifeessence" || skillname == "resilience" || skillname == "materialism") skillcategory = "magic";
        // if (
        //     skillname == "fanaticaldevotion" || skillname == "ardentbelief" || skillname == "zealousconviction" || skillname == "extremepiety" ||
        //     skillname == "absolutefaith" || skillname == "devoutmastery" || skillname == "doggedperseverance" || skillname == "blazingfervour"
        // ) skillcategory = "darkmagic";

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
                    _import.stats.playerStats.allprices, 
                    _import.stats.playerStats.happiness,
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

        for (let runC = 0; runC < 2; runC++) {
            for (i = 0; i < skillNameList.length; i++) {
                StatPage.updateSkill(skillNameList[i]);
            }
        }
    }
}
