let convertIntToCurrency = (number) => {
    if (Infinity == number) return "infinity";
    let splitPrice = number.toString().split("");

    let count = 0;
    let theprice = "";
    for (let i = splitPrice.length; i > 0; i--) {
        if (0 == count) {
            theprice = theprice+"c</span>";
        }
        else if (2 == count) {
            theprice = "s</span> <span class='copper'>"+theprice;
        }
        else if (4 == count) {
            theprice = "g</span> <span class='silver'>"+theprice;
        }
        else if (6 == count) {
            theprice = "p</span> <span class='gold'>"+theprice;
        }
        else if (8 == count) {
            theprice = "e</span> <span class='platinum'>"+theprice;
        }
        else if (10 == count) {
            theprice = "a</span> <span class='emerald'>"+theprice;
        }
        else if (12 == count) {
            theprice = "r</span> <span class='amethyst'>"+theprice;
        }
        else if (14 == count) {
            theprice = "t</span> <span class='ruby'>"+theprice;
        }
        else if (16 == count) {
            theprice = "d</span> <span class='topaz'>"+theprice;
        }
        theprice = splitPrice[i-1]+theprice;
        count++;
    }

    if (count == number.toString().length && count > 16) theprice = "<span class='diamond'>"+theprice;
    if (count == number.toString().length && count > 14 && count <= 16) theprice = "<span class='topaz'>"+theprice;
    if (count == number.toString().length && count > 12 && count <= 14) theprice = "<span class='ruby'>"+theprice;
    if (count == number.toString().length && count > 10 && count <= 12) theprice = "<span class='amethyst'>"+theprice;
    if (count == number.toString().length && count > 8 && count <= 10) theprice = "<span class='emerald'>"+theprice;
    if (count == number.toString().length && count > 6 && count <= 8) theprice = "<span class='platinum'>"+theprice;
    if (count == number.toString().length && count > 4 && count <= 6) theprice = "<span class='gold'>"+theprice;
    if (count == number.toString().length && count > 2 && count <= 4) theprice = "<span class='silver'>"+theprice;
    if (count == number.toString().length && count > 0 && count <= 2) theprice = "<span class='copper'>"+theprice;

    let fullSplit = theprice.split("</span>");

    if (fullSplit.length >= 3) thereturn = `${fullSplit[0]}</span>${fullSplit[1]}</span>${fullSplit[2]}</span>`;
    else if (fullSplit.length >= 2) thereturn = `${fullSplit[0]}</span>${fullSplit[1]}</span>`;
    else if (fullSplit.length >= 1) thereturn = `${fullSplit[0]}</span>`;
    
    return thereturn;
}

let checkIsOrder = (skillname) => {
    if (
        "faith" == skillname || 
        "zeal" == skillname || 
        "devotion" == skillname || 
        "fervour" == skillname
    ) {
        return true;
    }
    return false;
}

let checkIsDM = (skillname) => {
    if (
        "fanatical devotion" == skillname || 
        "ardent belief" == skillname || 
        "zealous conviction" == skillname || 
        "extreme piety" == skillname || 
        "absolute faith" == skillname || 
        "devout mastery" == skillname || 
        "dogged perseverance" == skillname
    ) {
        return true;
    }
    return false;
}

let getShopPrice = (item, stats) => {
    let base_price = item.base_price;
    if (0 == base_price) return 0;

    //let relicTouches = 1 + (2*(stats.relictouches > 5 ? 5 : stats.relictouches));
    let fana_discount = Math.sqrt(stats.fanaticism/10)+1;
    let allPriceDiscount = calcAllPrice();
    let shopPriceDiscount = calcShopPrice();
    if (1 == stats.relictouches && fana_discount <= 1 && (1*allPriceDiscount) == 1 && (1*shopPriceDiscount)) {
        return BigInt(base_price);
    }
    else {
        return Math.round(Number(base_price) / stats.relictouches / (fana_discount < 1 ? 1 : (1*fana_discount)) / (1*allPriceDiscount) / (1*shopPriceDiscount));
    }
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

let isBoostActive = (datetime) => {
    let now = Date.now();
    return now < datetime;
}

let getRepeatHappiness = () => {
    let count = 1*jQuery("#repeathappiness").val();
    if (count >= 1) {
        retval = Math.exp(1.01, count);
        // retval = (1.01^count)-1;
    }
    else {
        retval = 0;
    }
    return 1*retval.toFixed(2);
}

let calcHappiness = () => {
    let devotionEffect = 1*jQuery("#devotion_skill_effect").text();
    let meditationEffect = 1*jQuery("#meditation_skill_effect").text();
    let fdEffect = 1*jQuery("#fanaticaldevotion_skill_effect").text();
    let epEffect = 1*jQuery("#extremepiety_skill_effect").text();

    let tent = jQuery("#temt_toggle").prop('checked') ? 1 : 1;
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
    
    let hpBoost = isBoostActive(_import.stats.boosts.happiness);

    let ret = (1+getRepeatHappiness()) * 
        devotionEffect * meditationEffect * fdEffect * epEffect * 
        (hpBoost ? 2 : 1) * 
        tent * woodenhut * cottage * house * largehouse * smallpalace * 
        grandpalace * townruler * cityruler * kingdomminister * 
        heaven * ceremonyknife * butler;
    return 1*ret.toFixed(2);
}

let calcShopPrice = () => {
    let fervor = 1*jQuery("#fervour_skill_effect").text();
    let dp = 1*jQuery("#doggedperseverance_skill_effect").text();

    let allprice = 1;//jQuery("#allprice").prop('checked') ? 1.5 : 1;
    let shopprice = jQuery("#halfshop").prop('checked') ? 2 : 1;

    let woodencrown = jQuery("#wooden_crown_toggle").prop('checked') ? 2 : 1;
    let magicpebbles = jQuery("#magic_pebbles_toggle").prop('checked') ? 1.5 : 1;
    let magicsword = jQuery("#magic_sword_toggle").prop('checked') ? 1.5 : 1;
    let squire = jQuery("#squire_toggle").prop('checked') ? 1.5 : 1;
    let holyman = jQuery("#holyman_toggle").prop('checked') ? 1.5 : 1;

    let ret = 1 * fervor * dp * woodencrown * magicpebbles * magicsword * squire * holyman * allprice * shopprice;
    return 1*ret.toFixed(2);
}

let calcAllPrice = () => {
    let zeal = 1*jQuery("#zeal_skill_effect").text();
    let bargaining = 1*jQuery("#bargaining_skill_effect").text();
    let manacontrol = 1*jQuery("#manacontrol_skill_effect").text();
    let zealousconviction = 1*jQuery("#zealousconviction_skill_effect").text();

    let allprice = jQuery("#allprice").prop('checked') ? 1.5 : 1;

    let silverring = jQuery("#silver_ring_toggle").prop('checked') ? 2 : 1;
    let shinylamp = jQuery("#shiny_lamp_toggle").prop('checked') ? 2 : 1;
    let banker = jQuery("#banker_toggle").prop('checked') ? 2 : 1;

    let ret = 1 * zeal * bargaining * manacontrol * zealousconviction * allprice * silverring * shinylamp * banker;
    return 1*ret.toFixed(2);
}

let changeTalents = () => {
    StatPage.updateAll();
    calcSP();
}
