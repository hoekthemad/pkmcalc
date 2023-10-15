let calc = {
    skillName: '',
    targetSkillLevel: '',
    allPriceModifier: 0,
    happiness: 0,
    isBoostEnabled: false,
    tripleHappinessTalent: false,
    relicLevel: 0,
    fana: 0,

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
        let found = calc.skillName.match(/order_/);
        if (null == found) return false;
        else return found.length >= 1;
    },

    checkIsDM: () => {
        let found = calc.skillName.match(/dm_/);
        if (null == found) return false;
        else return found.length >= 1;
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
        const binString = atob(base64);
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

        $("#price_modifier").val(happiness);
        $("#happiness_modifier").val(stats['stats']['allPrices']);
        $("#fanaticism").val(stats['fanaticism']);
    }
}
