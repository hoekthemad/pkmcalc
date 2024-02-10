let skills = {
    order: ['faith', 'zeal', 'devotion', 'fervour'],
    funda: ['productivity', 'concentration', 'bargaining', 'meditiation'],
    combat: ['strength', 'battletactics', 'musclememory'],
    magic: ['manacontrol', 'lifeessence', 'resiliance', 'materialism'],
    dm: ['fanaticaldevotion', 'ardentbelief', 'zealousconviction', 'extremepiety', 'absolutefaith', 'devoutmastery', 'doggedperseverance', 'blazingfervour']
};

let setup = () => {
    for (let orderI = 0; orderI < skills.order.length; orderI++) {
        let baseValue = skillEffects.theorder[skills.order[orderI]];
        let baseCost = convertIntToCurrency(1);
        let baseRelic = 1;
        let baseLevel = 1;

        
    }
};

setup();

let stats = (userid) => {
    _import.go(userid);

    let theStats = _import.stats;

    for (let _i=0; _i < skills.order.length; _i++) {
        console.log(skills.order[_i]);
    }

    jQuery("#current_fana").text(parseFloat(theStats.fanaticism).toLocaleString());
    jQuery("#total_brands").text(parseFloat(theStats.brands).toLocaleString());
    jQuery("#relic_touches").text(parseFloat(theStats.relictouches).toLocaleString());

    //#region Set skills
    jQuery("#faith_skill_level").val(theStats.skills.theorder.faith.level);
    jQuery("#faith_relic_level").val(theStats.skills.theorder.faith.reliclevel);
    jQuery("#faith_skill_effect").text(getEffect(1*skillEffects.theorder.faith, 1*theStats.skills.theorder.faith.level, 1*theStats.playerStats.skilleffects, false));
    updateSkill("faith");
    
    jQuery("#zeal_skill_level").val(theStats.skills.theorder.zeal.level);
    jQuery("#zeal_relic_level").val(theStats.skills.theorder.zeal.reliclevel);
    jQuery("#zeal_skill_effect").text(getEffect(1*skillEffects.theorder.zeal, 1*theStats.skills.theorder.zeal.level, 1*theStats.playerStats.skilleffects, false));
    updateSkill("zeal");
    
    jQuery("#devotion_skill_level").val(theStats.skills.theorder.devotion.level);
    jQuery("#devotion_relic_level").val(theStats.skills.theorder.devotion.reliclevel);
    jQuery("#devotion_skill_effect").text(getEffect(1*skillEffects.theorder.devotion, 1*theStats.skills.theorder.devotion.level, 1*theStats.playerStats.skilleffects, false));
    updateSkill("devotion");
    
    jQuery("#fervour_skill_level").val(theStats.skills.theorder.fervour.level);
    jQuery("#fervour_relic_level").val(theStats.skills.theorder.fervour.reliclevel);
    jQuery("#fervour_skill_effect").text(getEffect(1*skillEffects.theorder.fervour, 1*theStats.skills.theorder.fervour.level, 1*theStats.playerStats.skilleffects, false));
    updateSkill("fervour");

    jQuery("#productivity_skill_level").val(theStats.skills.fundamentals.productivity.level);
    jQuery("#productivity_relic_level").val(theStats.skills.fundamentals.productivity.reliclevel);
    jQuery("#productivity_skill_effect").text(getEffect(1*skillEffects.fundamentals.productivity, 1*theStats.skills.fundamentals.productivity.level, 1*theStats.playerStats.skilleffects, false));
    updateSkill("productivity");
    
    jQuery("#concentration_skill_level").val(theStats.skills.fundamentals.concentration.level);
    jQuery("#concentration_relic_level").val(theStats.skills.fundamentals.concentration.reliclevel);
    jQuery("#concentration_skill_effect").text(getEffect(1*skillEffects.fundamentals.concentration, 1*theStats.skills.fundamentals.concentration.level, 1*theStats.playerStats.skilleffects, true));
    updateSkill("concentration");
    
    jQuery("#bargaining_skill_level").val(theStats.skills.fundamentals.bargaining.level);
    jQuery("#bargaining_relic_level").val(theStats.skills.fundamentals.bargaining.reliclevel);
    jQuery("#bargaining_skill_effect").text(getEffect(1*skillEffects.fundamentals.bargaining, 1*theStats.skills.fundamentals.bargaining.level, 1*theStats.playerStats.skilleffects, false));
    updateSkill("bargaining");
    
    jQuery("#meditation_skill_level").val(theStats.skills.fundamentals.meditation.level);
    jQuery("#meditation_relic_level").val(theStats.skills.fundamentals.meditation.reliclevel);
    jQuery("#meditation_skill_effect").text(getEffect(1*skillEffects.fundamentals.meditation, 1*theStats.skills.fundamentals.meditation.level, 1*theStats.playerStats.skilleffects, false));
    updateSkill("meditation");
    //#endregion
}
let updateSkill = (skillname) => {
    if (skillname == "faith" || skillname == "zeal" || skillname == "devotion" || skillname == "fervour") skillcategory = "theorder";
    if (skillname == "productivity" || skillname == "concentration" || skillname == "bargaining" || skillname == "meditation") skillcategory = "fundamentals";
    jQuery('#'+skillname+'_skill_effect').text(
        getEffect(skillEffects[skillcategory][skillname], jQuery('#'+skillname+'_skill_level').val(), 1*$('#concentration_skill_effect').text(), skillname == "concentration" ? true : false)
    );
    jQuery('#'+skillname+'_skill_cost').text(
        convertIntToCurrency(
            Math.floor(getSkillPrice(
                jQuery('#'+skillname+'_skill_level').val(), 
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
