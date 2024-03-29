let calcFana = () => {
    let le = 1 * jQuery("#lifeessence_skill_effect").text()
    let ab = 1 * jQuery("#ardentbelief_skill_effect").text()
    let af = 1 * jQuery("#absolutefaith_skill_effect").text();

    let fgain = 1 * le * ab * af;
    if (jQuery("#talent_2xfana").prop("checked"))
        fgain = fgain * 2;
    jQuery("#fan_gain_single").text(nFormatter(fgain, 1)).attr("title", numberWithCommas(fgain.toFixed(2)));
}

let calcHappiness = () => {
    let devotionEffect = 1*jQuery("#devotion_skill_effect").text();
    let meditationEffect = 1*jQuery("#meditation_skill_effect").text();
    let fdEffect = 1*jQuery("#fanaticaldevotion_skill_effect").text();
    let epEffect = 1*jQuery("#extremepiety_skill_effect").text();

    let tent = jQuery("#tent_toggle").prop('checked') ? 1 : 1;
    let woodenhut = jQuery("#wooden_hut_toggle").prop('checked') ? 2 : 1;
    let cottage = jQuery("#cottage_toggle").prop('checked') ? 3 : 1;
    let house = jQuery("#house_toggle").prop('checked') ? 4 : 1;
    let largehouse = jQuery("#large_house_toggle").prop('checked') ? 5 : 1;
    let smallpalace = jQuery("#small_palace_toggle").prop('checked') ? 6 : 1;
    let grandpalace = jQuery("#grand_palace_toggle").prop('checked') ? 7 : 1;
    let townruler = jQuery("#town_ruler_toggle").prop('checked') ? 8 : 1;
    let cityruler = jQuery("#city_ruler_toggle").prop('checked') ? 9 : 1;
    let kingdomminister = jQuery("#kingdom_minister_toggle").prop('checked') ? 10 : 1;
    let heaven = jQuery("#heaven_toggle").prop('checked') ? 11 : 1;

    let ceremonyknife = jQuery("#ceremony_knife_toggle").prop('checked') ? 1.5 : 1;
    let butler = jQuery("#butler_toggle").prop('checked') ? 1.5 : 1;

    let threexhappi = jQuery("#talent_3xhappi").prop("checked") ? 3 : 1;
    
    let hpBoost = isBoostActive(_import.stats.boosts.happiness);

    let ret = (1*getRepeatHappiness()) * // tried this diff ways
        devotionEffect * meditationEffect * fdEffect * epEffect * 
        //(hpBoost ? 2 : 1) * 
        tent * woodenhut * cottage * house * largehouse * smallpalace * 
        grandpalace * townruler * cityruler * kingdomminister * 
        heaven * ceremonyknife * butler * 
        threexhappi;
    return 1*ret;
}

let calcShopPrice = () => {
    let fervor = 1 * jQuery("#fervour_skill_effect").text();
    let dp = 1 * jQuery("#doggedperseverance_skill_effect").text();

    let allprice = 1;//jQuery("#allprice").prop('checked') ? 1.5 : 1;
    let shopprice = jQuery("#talent_halfshop").prop('checked') ? 2 : 1;

    let woodencrown = jQuery("#wooden_crown_toggle").prop('checked') ? 2 : 1;
    let magicpebbles = jQuery("#magic_pebbles_toggle").prop('checked') ? 1.5 : 1;
    let magicsword = jQuery("#magic_sword_toggle").prop('checked') ? 1.5 : 1;
    let squire = jQuery("#squire_toggle").prop('checked') ? 1.5 : 1;
    let holyman = jQuery("#holyman_toggle").prop('checked') ? 1.5 : 1;

    let ret = 1 * fervor * dp * woodencrown * magicpebbles * magicsword * squire * holyman * allprice * shopprice;
    return 1 * ret.toFixed(2);
}

let calcAllPrice = () => {
    let zeal = 1 * jQuery("#zeal_skill_effect").text();
    let bargaining = 1 * jQuery("#bargaining_skill_effect").text();
    let manacontrol = 1 * jQuery("#manacontrol_skill_effect").text();
    let zealousconviction = 1 * jQuery("#zealousconviction_skill_effect").text();

    let allprice = jQuery("#talent_allprice").prop('checked') ? 1.5 : 1;

    let silverring = jQuery("#silver_ring_toggle").prop('checked') ? 2 : 1;
    let shinylamp = jQuery("#shiny_lamp_toggle").prop('checked') ? 2 : 1;
    let banker = jQuery("#banker_toggle").prop('checked') ? 2 : 1;

    let ret = 1 * zeal * bargaining * manacontrol * zealousconviction * allprice * silverring * shinylamp * banker;
    return 1 * ret.toFixed(2);
}

let calcSP = () => {
    let chosenItem = jQuery("#shop_item option:selected").val();
    let shopPrice = convertIntToCurrency(getShopPrice(eval(chosenItem), _import.stats));
    jQuery("#shop_price").html(shopPrice);
}

let calculateSP = (item, itemname) => {
    if (itemname.match(/holy/)) itemname = "holyman";
    if (itemname.match(/dumb/)) itemname = "dumbells";
    if (itemname.match(/book/)) itemname = "bookeeper";
    let shopPrice = convertIntToCurrency(getShopPrice(item, _import.stats));
    jQuery(`#${itemname}_price`).html(shopPrice);
}

let getBonusIncome = () => {
    let silverCount = 1*jQuery("#talent_repeatsilver").val();
    if (isNaN(silverCount)) silverCount = 0;

    let bonusGold = jQuery("#talent_bonusgold").prop("checked") ? 10000 : 0;

    let bonusSilver = silverCount * 2500;

    return bonusGold+bonusSilver;
}

let getSkillEffects = () => {
    let se = 1*getEffect(data.skillEffects.fundamentals.concentration, (1*jQuery("#concentration_skill_level").val()), 1, true);
    let f = 1*_import.stats.playerStats.fosbonus.toFixed(2);
    let b = 1*_import.stats.playerStats.brandbonus.toFixed(2);
    let t = 1*_import.stats.playerStats.tablebonus.toFixed(2);

    return (se + f + b + t);
}

let calcIncome = () => {
    let faithEffect = getEffect(data.skillEffects.theorder.faith, (1*jQuery("#faith_skill_level").val()), getSkillEffects(), false);
    let prodEffect = getEffect(data.skillEffects.fundamentals.productivity, (1*jQuery("#productivity_skill_level").val()), getSkillEffects(), false);
    let dmEffect = getEffect(data.skillEffects.darkmagic.devoutmastery, (1*jQuery("#devoutmastery_skill_level").val()), getSkillEffects(), false);
    

    let cp = _import.stats.shop.trinkets.coinpouch == true ? 2.5 : 1;
    let lc = _import.stats.shop.trinkets.luckycharm == true ? 3 : 1;
    let bk = _import.stats.shop.servants.bookkeeper == true ? 2 : 1;

    let adBoost = isBoostActive(_import.stats.boosts.income.ad);
    let cmBoost = isBoostActive(_import.stats.boosts.income.tavern);

    if (adBoost && cmBoost) incBoost = 3;
    else if ((!adBoost && cmBoost) || (adBoost && !cmBoost)) incBoost = 2;
    else incBoost = 1;
    // incboost=1;

    let income = 1 * faithEffect * prodEffect * dmEffect * cp * lc * bk * incBoost;

    let bi = getBonusIncome();

    if (bi > 0) income = convertIntToCurrency(Math.floor(income) + bi);
    else income = convertIntToCurrency(Math.floor(income));
    jQuery("#income").html(income);
}