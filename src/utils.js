let convertIntToCurrency = (number) => {
    if (Infinity == number) return "infinity";
    let splitPrice = number.toString().split("");

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

    //return theprice;

    let fullSplit = theprice.split(" ");

    if (fullSplit.length >= 3) thereturn = `${fullSplit[0]} ${fullSplit[1]} ${fullSplit[2]}`;
    if (fullSplit.length >= 2) thereturn = `${fullSplit[0]} ${fullSplit[1]}`;
    if (fullSplit.length >= 1) thereturn = `${fullSplit[0]}`;
    thereturn = thereturn.replace(/([0-9]{1,2}c)/, "<span class='copper'>$1</span>");
    thereturn = thereturn.replace(/([0-9]{1,2}s)/, "<span class='silver'>$1</span>");
    thereturn = thereturn.replace(/([0-9]{1,2}g)/, "<span class='gold'>$1</span>");
    thereturn = thereturn.replace(/([0-9]{1,2}p)/, "<span class='platinum'>$1</span>");
    thereturn = thereturn.replace(/([0-9]{1,2}e)/, "<span class='emerald'>$1</span>");
    thereturn = thereturn.replace(/([0-9]{1,2}a)/, "<span class='amethyst'>$1</span>");
    thereturn = thereturn.replace(/([0-9]{1,2}r)/, "<span class='ruby'>$1</span>");
    thereturn = thereturn.replace(/([0-9]{1,2}t)/, "<span class='topaz'>$1</span>");
    thereturn = thereturn.replace(/([0-9]{1,2}d)/, "<span class='diamond'>$1</span>");

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
