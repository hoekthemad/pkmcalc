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
    console.log(count, number, number.length);
    if (count == number.toString().length && count >= 16) theprice = "<span class='diamond'>"+theprice;
    if (count == number.toString().length && count >= 14 && count <= 16) theprice = "<span class='topaz'>"+theprice;
    if (count == number.toString().length && count >= 12 && count <= 14) theprice = "<span class='ruby'>"+theprice;
    if (count == number.toString().length && count >= 10 && count <= 12) theprice = "<span class='amethyst'>"+theprice;
    if (count == number.toString().length && count >= 8 && count <= 10) theprice = "<span class='emerald'>"+theprice;
    if (count == number.toString().length && count >= 6 && count <= 8) theprice = "<span class='platinum'>"+theprice;
    if (count == number.toString().length && count >= 4 && count <= 6) theprice = "<span class='gold'>"+theprice;
    if (count == number.toString().length && count >= 2 && count <= 4) theprice = "<span class='silver'>"+theprice;
    if (count == number.toString().length && count >= 0 && count <= 2) theprice = "<span class='copper'>"+theprice;

    return theprice;
    console.log(theprice)

    let fullSplit = theprice.split("</span>");

    if (fullSplit.length >= 3) thereturn = `${fullSplit[0]}</span> ${fullSplit[1]}</span> ${fullSplit[2]}</span>`;
    if (fullSplit.length >= 2) thereturn = `${fullSplit[0]}</span> ${fullSplit[1]}</span>`;
    if (fullSplit.length >= 1) thereturn = `${fullSplit[0]}</span>`;

    // thereturn = thereturn.replaceAll(/(.+?)([0-9]+?c)(.+?)/g, "$1<span class='copper'>$2</span>$3");
    // thereturn = thereturn.replaceAll(/(.+?)([0-9]+?s)(.+?)/g, "$1<span class='silver'>$2</span>$3");
    // thereturn = thereturn.replaceAll(/(.+?)([0-9]+?g)(.+?)/g, "$1<span class='gold'>$2</span>$3");
    // thereturn = thereturn.replaceAll(/(.+?)([0-9]+?p)(.+?)/g, "$1<span class='platinum'>$2</span>$3");
    // thereturn = thereturn.replaceAll(/(.+?)([0-9]+?e)(.+?)/g, "$1<span class='emerald'>$2</span>$3");
    // thereturn = thereturn.replaceAll(/(.+?)([0-9]+?a)(.+?)/g, "$1<span class='amethyst'>$2</span>$3");
    // thereturn = thereturn.replaceAll(/(.+?)([0-9]+?r)(.+?)/g, "$1<span class='ruby'>$2</span>$3");
    // thereturn = thereturn.replaceAll(/(.+?)([0-9]+?t)(.+?)/g, "$1<span class='topaz'>$2</span>$3");
    // thereturn = thereturn.replaceAll(/(.+?)([0-9]+?d)(.+?)/g, "$1<span class='diamond'>$2</span>$3");

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
    let allPriceDiscount = stats.playerStats.allprices;
    let shopPriceDiscount = stats.playerStats.shopprices;

    return Math.round(Number(base_price) / stats.relictouches / (fana_discount < 1 ? 1 : (1*fana_discount)) / (1*allPriceDiscount) / (1*shopPriceDiscount));
}

let calcSP = () => {
    let chosenItem = jQuery("#shop_item option:selected").val();
    let shopPrice = convertIntToCurrency(getShopPrice(eval(chosenItem), _import.stats));
    jQuery("#shop_price").html(shopPrice);
}
