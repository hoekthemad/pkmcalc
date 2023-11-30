let stats = () => {
    let importString = jQuery("#import").val();
    if (0 == importString.toString().length) {
        alert("Please enter a valid input");
        return;
    }

    _import.go(importString);

    let theStats = _import.stats;
    jQuery("#current_fana").text(parseFloat(theStats.fanaticism).toLocaleString());
    jQuery("#total_brands").text(parseFloat(theStats.brands).toLocaleString());
    jQuery("#relic_touches").text(parseFloat(theStats.relictouches).toLocaleString());

    //#region Set skills
    jQuery("#faith_level").val(theStats.skills.theorder.faith.level);
    jQuery("#faith_relic_level").val(theStats.skills.theorder.faith.reliclevel);
    jQuery("#faith_skill_effect").val(getEffect(1*skillEffects.theorder.faith, theStats.skills.theorder.faith.level, 1*theStats.playerStats.skilleffects, false));
    updateSkill("faith");
    
    jQuery("#zeal_level").val(theStats.skills.theorder.zeal.level);
    jQuery("#zeal_relic_level").val(theStats.skills.theorder.zeal.reliclevel);
    jQuery("#zeal_skill_effect").val(getEffect(1*skillEffects.theorder.zeal, theStats.skills.theorder.zeal.level, 1*theStats.playerStats.skilleffects, false));
    updateSkill("zeal");
    
    jQuery("#devotion_level").val(theStats.skills.theorder.devotion.level);
    jQuery("#devotion_relic_level").val(theStats.skills.theorder.devotion.reliclevel);
    jQuery("#devotion_skill_effect").val(getEffect(1*skillEffects.theorder.devotion, theStats.skills.theorder.devotion.level, 1*theStats.playerStats.skilleffects, false));
    updateSkill("devotion");
    
    jQuery("#fervour_level").val(theStats.skills.theorder.fervour.level);
    jQuery("#fervour_relic_level").val(theStats.skills.theorder.fervour.reliclevel);
    jQuery("#fervour_skill_effect").val(getEffect(1*skillEffects.theorder.fervour, theStats.skills.theorder.fervour.level, 1*theStats.playerStats.skilleffects, false));
    updateSkill("fervour");
    //#endregion
}

let updateSkill = (skillname) => {
    jQuery('#'+skillname+'_skill_effect').val(
        getEffect(skillEffects.theorder[skillname], jQuery('#'+skillname+'_level').val(), _import.stats.playerStats.skilleffects, false)
    );
    jQuery('#'+skillname+'_skill_price').val(
        convertIntToCurrency(
            Math.floor(getSkillPrice(
                jQuery('#'+skillname+'_level').val(), 
                checkIsOrder(skillname), 
                _import.stats.playerStats.allprices, 
                _import.stats.playerStats.happiness,
                jQuery('#'+skillname+'_relic_level').val(),
                checkIsDM(skillname),
                _import.stats.fanaticism,
                true
            ))
        )
    )
}