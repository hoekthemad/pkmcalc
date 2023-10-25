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
        if (
            "fanatical devotion" == calc.skillName || 
            "ardent belief" == calc.skillName || 
            "zealous conviction" == calc.skillName || 
            "extreme piety" == calc.skillName || 
            "absolute faith" == calc.skillName || 
            "devout mastery" == calc.skillName || 
            "dogged perseverance" == calc.skillName
        ) {
            return true;
        }
        return false;
    },

    setSkils: (skills) => {
        calc.skills['faith'] = { level: 1*skills['faith'].level, rlevel: 1*skills['faith'].relicLevel };
        calc.skills['zeal'] = { level: 1*skills['zeal'].level, rlevel: 1*skills['zeal'].relicLevel };
        calc.skills['devotion'] = { level: 1*skills['devotion'].level, rlevel: 1*skills['devotion'].relicLevel };
        calc.skills['fervour'] = { level: 1*skills['fervour'].level, rlevel: 1*skills['fervour'].relicLevel };
        
        calc.skills['productivity'] = { level: 1*skills['productivity'].level, rlevel: 1*skills['productivity'].relicLevel };
        calc.skills['concentration'] = { level: 1*skills['concentration'].level, rlevel: 1*skills['concentration'].relicLevel };
        calc.skills['bargaining'] = { level: 1*skills['bargaining'].level, rlevel: 1*skills['bargaining'].relicLevel };
        calc.skills['meditation'] = { level: 1*skills['meditation'].level, rlevel: 1*skills['meditation'].relicLevel };
        
        calc.skills['strength'] = { level: 1*skills['strength'].level, rlevel: 1*skills['strength'].relicLevel };
        calc.skills['battle tactics'] = { level: 1*skills['battle tactics'].level, rlevel: 1*skills['battle tactics'].relicLevel };
        calc.skills['muscle memory'] = { level: 1*skills['muscle memory'].level, rlevel: 1*skills['muscle memory'].relicLevel };
        
        calc.skills['mana control'] = { level: 1*skills['mana control'].level, rlevel: 1*skills['mana control'].relicLevel };
        calc.skills['life essence'] = { level: 1*skills['life essence'].level, rlevel: 1*skills['life essence'].relicLevel };
        calc.skills['resilience'] = { level: 1*skills['resilience'].level, rlevel: 1*skills['resilience'].relicLevel };
        
        calc.skills['fanatical devotion'] = { level: 1*skills['fanatical devotion'].level, rlevel: 1*skills['fanatical devotion'].relicLevel };
        calc.skills['ardent belief'] = { level: 1*skills['ardent belief'].level, rlevel: 1*skills['ardent belief'].relicLevel };
        calc.skills['zealous conviction'] = { level: 1*skills['zealous conviction'].level, rlevel: 1*skills['zealous conviction'].relicLevel };
        calc.skills['extreme piety'] = { level: 1*skills['extreme piety'].level, rlevel: 1*skills['extreme piety'].relicLevel };
        calc.skills['absolute faith'] = { level: 1*skills['absolute faith'].level, rlevel: 1*skills['absolute faith'].relicLevel };
        calc.skills['devout mastery'] = { level: 1*skills['devout mastery'].level, rlevel: 1*skills['devout mastery'].relicLevel };
        calc.skills['dogged perseverance'] = { level: 1*skills['dogged perseverance'].level, rlevel: 1*skills['dogged perseverance'].relicLevel };
    },

    changeSkill: () => {
        let skillName = $("#skill_name option:selected").val();
        $("#target_skill_level").val(1*calc.skills[skillName].level+1);
        $("#curr_relic_level").val(calc.skills[skillName].rlevel);
    },

    doPlusTFifty: () => {},

    doCalc: (amount) => {
        amount = amount || 1;
        calc.getBaseInformation();
        let isTheOrder = calc.checkIsOrder();
        let isDarkMagic = calc.checkIsDM();

        if (calc.isBoostEnabled) calc.happiness = calc.happiness / 2;

        let skillPrice = 0;
        let tsl = calc.targetSkillLevel-1;

        /*for (let i = 0; i < amount; i++) {
            skillPrice = Math.floor(getSkillPrice(
                tsl,
                isTheOrder,
                calc.allPriceModifier,
                calc.happiness,
                calc.relicLevel,
                isDarkMagic,
                calc.fana,
                calc.isBoostEnabled
            ));
            tsl++;
        }*/
        skillPrice = Math.floor(getSkillPrice(
            tsl + (1==amount?0:amount),
            isTheOrder,
            calc.allPriceModifier,
            calc.happiness,
            calc.relicLevel,
            isDarkMagic,
            calc.fana,
            calc.isBoostEnabled
        ));
        console.log(skillPrice);

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

        if (1==amount) calc.doDisplay(theprice);
        return theprice;
    },

    doDisplay: (theprice) => {
        jQuery("#calculated_skill_price").html(theprice);
    }
}
