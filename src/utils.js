const convertIntToCurrency = (number, displayCount) => {
    displayCount = displayCount || 3;
    if (Infinity == number) return "infinity";
    let splitPrice = number.toString().split("");

    let count = 0;
    let theprice = "";
    for (let i = splitPrice.length; i > 0; i--) {
        if (0 == count) {
            theprice = theprice + "c</span>";
        }
        else if (2 == count) {
            theprice = "s</span> <span class='copper'>" + theprice;
        }
        else if (4 == count) {
            theprice = "g</span> <span class='silver'>" + theprice;
        }
        else if (6 == count) {
            theprice = "p</span> <span class='gold'>" + theprice;
        }
        else if (8 == count) {
            theprice = "e</span> <span class='platinum'>" + theprice;
        }
        else if (10 == count) {
            theprice = "a</span> <span class='emerald'>" + theprice;
        }
        else if (12 == count) {
            theprice = "r</span> <span class='amethyst'>" + theprice;
        }
        else if (14 == count) {
            theprice = "t</span> <span class='ruby'>" + theprice;
        }
        else if (16 == count) {
            theprice = "d</span> <span class='topaz'>" + theprice;
        }
        theprice = splitPrice[i - 1] + theprice;
        count++;
    }

    if (count == number.toString().length && count > 16) theprice = "<span class='diamond'>" + theprice;
    if (count == number.toString().length && count > 14 && count <= 16) theprice = "<span class='topaz'>" + theprice;
    if (count == number.toString().length && count > 12 && count <= 14) theprice = "<span class='ruby'>" + theprice;
    if (count == number.toString().length && count > 10 && count <= 12) theprice = "<span class='amethyst'>" + theprice;
    if (count == number.toString().length && count > 8 && count <= 10) theprice = "<span class='emerald'>" + theprice;
    if (count == number.toString().length && count > 6 && count <= 8) theprice = "<span class='platinum'>" + theprice;
    if (count == number.toString().length && count > 4 && count <= 6) theprice = "<span class='gold'>" + theprice;
    if (count == number.toString().length && count > 2 && count <= 4) theprice = "<span class='silver'>" + theprice;
    if (count == number.toString().length && count > 0 && count <= 2) theprice = "<span class='copper'>" + theprice;

    let fullSplit = theprice.split("</span>");

    let thereturn = '';

    for (let c = 0; c < displayCount; c++) {
        if ((c+1) == fullSplit.length) break;
        thereturn = `${thereturn}${fullSplit[c]}</span>`;
    }

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
    let fana_discount = Math.sqrt((1 * jQuery("#current_fana").text().replaceAll(",", "")) / 10) + 1;
    let allPriceDiscount = calcAllPrice();
    let shopPriceDiscount = calcShopPrice();
    if (1 == stats.relictouches && fana_discount <= 1 && (1 * allPriceDiscount) == 1 && (1 * shopPriceDiscount)) {
        return BigInt(base_price);
    }
    else {
        return Math.round(Number(base_price) / stats.relictouches / (fana_discount < 1 ? 1 : (1 * fana_discount)) / (1 * allPriceDiscount) / (1 * shopPriceDiscount));
    }
}

let isBoostActive = (datetime) => {
    let now = Date.now();
    return now < datetime;
}

let getRepeatHappiness = () => {
    let count = 1*jQuery("#talent_repeathappiness").val();
    if (count >= 1) {
        retval = 1+(0.01*count)
    }
    else {
        retval = 1;
    }
    return 1*retval;
}

let changeTalents = () => {
    StatPage.updateAll();
}

let numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let updateFana = () => {
    let fans = jQuery("#updatefana").val();
    jQuery('#current_fana').text(numberWithCommas(fans));
    StatPage.updateAll();
}

let updateBrands = () => {
    let b = jQuery("#updateBrands").val();
    jQuery("#total_brands").text(b);
}

let getBrandBonus = () => {
    return Math.pow(1.005, 1*jQuery("#total_brands").text())-1;
}

function nFormatter(num, digits) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
    const item = lookup.findLast(item => num >= item.value);
    return item ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol) : "0";
}
