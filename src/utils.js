let convertIntToCurrency = (number) => {
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

        return theprice;
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

    //let relicTouches = 1 + (2*(stats.relictouches > 5 ? 5 : stats.relictouches));
    let fana_discount = Math.sqrt(stats.fanaticism/10)+1;
    let allPriceDiscount = stats.playerStats.allprices;
    let shopPriceDiscount = stats.playerStats.shopprices;

    return Math.floor(Number(base_price) / stats.relictouches / (fana_discount < 1 ? 1 : (1*fana_discount)) / (1*allPriceDiscount) / (1*shopPriceDiscount));
}

let calcSP = () => {
    let chosenItem = jQuery("#shop_item option:selected").val();
    let shopPrice = convertIntToCurrency(getShopPrice(eval(chosenItem), _import.stats));
    jQuery("#shop_price").html(shopPrice);
}
