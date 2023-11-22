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

let getShopPrice = (item, stats) => {
    let base_price = item.base_price;

    let fana_discount = Math.sqrt(stats.fanaticism/10)+1;
    let allPriceDiscount = stats.playerStats.allprices;
    let shopPriceDiscount = stats.playerStats.shopprices;

    return Number(base_price) / (fana_discount < 1 ? 1 : (1*fana_discount)) / (1*allPriceDiscount) / (1*shopPriceDiscount);
}