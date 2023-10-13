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
        calc.targetSkillLevel = $("#target_skill_level").val()
        calc.allPriceModifier = $("#price_modifier").val();
        calc.happiness = $("#happiness_modifier").val();
        calc.isBoostEnabled = $("#is_boost_active").is(":checked") ? true : false;
        calc.relicLevel = $("#curr_relic_level").val();
        calc.fana = $("#fanaticism").val();
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

        // Because of the way that the calculation is done, we need to half this to be certain
        if (calc.isBoostEnabled) calc.happiness = calc.happiness / 2;

        jQuery("#calculated_skill_price").html(getSkillPrice(
            calc.targetSkillLevel,
            isTheOrder,
            calc.allPriceModifier,
            calc.happiness,
            calc.relicLevel,
            isDarkMagic,
            calc.fana,
            calc.isBoostEnabled
        ));
    }
}