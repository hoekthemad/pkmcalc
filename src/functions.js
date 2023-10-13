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

$(document).ready(function () {
    $("#target_skill_level").val(1027);
    $("#price_modifier").val(1468843.95);
    $("#happiness_modifier").val(12386044369413.70);
    $("#is_boost_active").prop("checked", "checked");
    $("#curr_relic_level").val(2570);
    $("#fanaticism").val(6024.30);
})