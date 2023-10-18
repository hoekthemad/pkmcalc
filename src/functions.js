let calc = {
    skillName: '',
    targetSkillLevel: '',
    allPriceModifier: 0,
    happiness: 0,
    isBoostEnabled: false,
    tripleHappinessTalent: false,
    relicLevel: 0,
    fana: 0,

    skills: {},

    getBaseInformation: () => {
        calc.skillName = $("#skill_name option:selected").val();
        calc.targetSkillLevel = 1*$("#target_skill_level").val();
        calc.allPriceModifier = 1*$("#price_modifier").val();
        calc.happiness = 1*$("#happiness_modifier").val();
        calc.isBoostEnabled = $("#is_boost_active").is(":checked") ? true : false;
        calc.relicLevel = 1*$("#curr_relic_level").val();
        calc.fana = 1*$("#fanaticism").val();
    },

    checkIsOrder: () => {
        /*let found = calc.skillName.match(/order_/);
        if (null == found) return false;
        else return found.length >= 1;*/
        // -------------------------------- \\
        if (
            "faith" == calc.skillName || 
            "zeal" == calc.skillName || 
            "devotion" == calc.skillName || 
            "fervour" == calc.skillName
        ) {
            return true;
        }
        return false;
    },

    checkIsDM: () => {
        /*let found = calc.skillName.match(/dm_/);
        if (null == found) return false;
        else return found.length >= 1;*/
        // -------------------------------- \\
        if (
            "faith" == calc.skillName || 
            "zeal" == calc.skillName || 
            "devotion" == calc.skillName || 
            "devotion" == calc.skillName || 
            "devotion" == calc.skillName || 
            "devotion" == calc.skillName || 
            "fervour" == calc.skillName
        ) {
            return true;
        }
    },

    setSkils: (skills) => {
        calc.skills['faith'] = { level: skills['faith'].level, rlevel: skills['faith'].relicLevel };
        calc.skills['zeal'] = { level: skills['zeal'].level, rlevel: skills['zeal'].relicLevel };
        calc.skills['devotion'] = { level: skills['devotion'].level, rlevel: skills['devotion'].relicLevel };
        calc.skills['fervour'] = { level: skills['fervour'].level, rlevel: skills['fervour'].relicLevel };
        
        calc.skills['productivity'] = { level: skills['productivity'].level, rlevel: skills['productivity'].relicLevel };
        calc.skills['concentration'] = { level: skills['concentration'].level, rlevel: skills['concentration'].relicLevel };
        calc.skills['bargaining'] = { level: skills['bargaining'].level, rlevel: skills['bargaining'].relicLevel };
        calc.skills['meditation'] = { level: skills['meditation'].level, rlevel: skills['meditation'].relicLevel };
        
        calc.skills['strength'] = { level: skills['strength'].level, rlevel: skills['strength'].relicLevel };
        calc.skills['battle tactics'] = { level: skills['battle tactics'].level, rlevel: skills['battle tactics'].relicLevel };
        calc.skills['muscle memory'] = { level: skills['muscle memory'].level, rlevel: skills['muscle memory'].relicLevel };
        
        calc.skills['mana control'] = { level: skills['mana control'].level, rlevel: skills['mana control'].relicLevel };
        calc.skills['life essence'] = { level: skills['life essence'].level, rlevel: skills['life essence'].relicLevel };
        calc.skills['resilience'] = { level: skills['resilience'].level, rlevel: skills['resilience'].relicLevel };
        
        calc.skills['fanatical devotion'] = { level: skills['fanatical devotion'].level, rlevel: skills['fanatical devotion'].relicLevel };
        calc.skills['ardent belief'] = { level: skills['ardent belief'].level, rlevel: skills['ardent belief'].relicLevel };
        calc.skills['zealous conviction'] = { level: skills['zealous conviction'].level, rlevel: skills['zealous conviction'].relicLevel };
        calc.skills['extreme piety'] = { level: skills['extreme piety'].level, rlevel: skills['extreme piety'].relicLevel };
        calc.skills['absolute faith'] = { level: skills['absolute faith'].level, rlevel: skills['absolute faith'].relicLevel };
        calc.skills['devout mastery'] = { level: skills['devout mastery'].level, rlevel: skills['devout mastery'].relicLevel };
        calc.skills['dogged perseverance'] = { level: skills['dogged perseverance'].level, rlevel: skills['dogged perseverance'].relicLevel };
    },

    changeSkill: () => {
        let skillName = $("#skill_name option:selected").val();
        $("#target_skill_level").val((1*calc.skills[skillName].level)+1);
        $("#curr_relic_level").val(calc.skills[skillName].rlevel);
    },

    doCalc: () => {
        calc.getBaseInformation();
        let isTheOrder = calc.checkIsOrder();
        let isDarkMagic = calc.checkIsDM();

        if (calc.isBoostEnabled) calc.happiness = calc.happiness / 2;

        let skillPrice = Math.floor(getSkillPrice(
            calc.targetSkillLevel-1,
            isTheOrder,
            calc.allPriceModifier,
            calc.happiness,
            calc.relicLevel,
            isDarkMagic,
            calc.fana,
            calc.isBoostEnabled
        ));

        if (isNaN(skillPrice)) {
            alert("Please enter valid values.");
            return;
        }

        let splitPrice = skillPrice.toString().split("");

        let count = 0;
        let theprice = "";
        for (let i = splitPrice.length; i > 0; i--) {
            if (0 == count) {
                theprice = theprice+"c";
            }
            else if (2 == count) {
                theprice = "s "+theprice;
            }
            else if (4 == count) {
                theprice = "g "+theprice;
            }
            else if (6 == count) {
                theprice = "p "+theprice;
            }
            else if (8 == count) {
                theprice = "e "+theprice;
            }
            else if (10 == count) {
                theprice = "a "+theprice;
            }
            else if (12 == count) {
                theprice = "r "+theprice;
            }
            else if (14 == count) {
                theprice = "t "+theprice;
            }
            else if (16 == count) {
                theprice = "d "+theprice;
            }
            theprice = splitPrice[i-1]+theprice;
            count++;
        }


        jQuery("#calculated_skill_price").html(theprice);
    }
}

let dataImporter = {
    decode: (base64) => {
        const binString = atob(base64.replace(/[^\x00-\x7F]/g, ""));
        let ret = JSON.parse(binString);
        return ret;
    },

    forSkills: () => {
        let b64string = $("#base64stats").val();
        if (b64string.length == 0) {
            alert("Please enter your stats");
            return;
        }
        let stats = dataImporter.decode(b64string);
        console.log(stats);
        calc.setSkils(stats['skills']);
        console.log(calc.skills);

        let dateNow = Date.now();
        let happinessBoostEnd = Date.parse(stats['boosts']['happiness']);

        let happyBoostActive = false;
        if (happinessBoostEnd > dateNow)
            happyBoostActive = true;

        let happiness = 1*stats['stats']['happiness'];
        if (true == happyBoostActive) {
            happiness = happiness*2;
            $("#is_boost_active").prop("checked", "checked");
        }

        $("#price_modifier").val(stats['stats']['allPrices']);
        $("#happiness_modifier").val(happiness);
        $("#fanaticism").val(stats['fanaticism']);
        
        let skillName = $("#skill_name option:selected").val();
        $("#target_skill_level").val(calc.skills[skillName].level);
        $("#curr_relic_level").val(calc.skills[skillName].rlevel);
    }
}
