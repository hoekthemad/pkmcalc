function nFormatter(num, digits) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "B" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "q" },
        { value: 1e18, symbol: "Q" }
    ];
    const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
    const item = lookup.findLast(item => num >= item.value);
    return item ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol) : "0";
}

/**
 * Check the status of a boost
 * @param {String} type This is either; "advert", "community" or "happiness"
 * @returns {Boolean} true if boost is active, false if not
 */
const getBoostStatus = (type) => {
    const now = Date.now();
    let returnValue = false;
    switch (type) {
        case "advert" : {
            let adBoostExpires = Player['boosts']['income'][0];
            returnValue = adBoostExpires > now;
            break
        }
        case "community" : {
            let tavernBoostExpires = Player['boosts']['income'][1];
            returnValue = tavernBoostExpires > now;
            break;
        }
        case "happiness" : {
            let happinessBoostExpires = Player['boosts']['happiness'][0];
            returnValue = happinessBoostExpires > now;
            break;
        }
    }
    return returnValue;
}

/**
 * Get the value of an input
 * @param {String} name The id of the input
 * @param {Boolean} numeric Wether this is to return a number or not
 * @returns {string|int}
 */
const getInputValue = (name, numeric) => {
    numeric = numeric || true;
    let value = jQuery(`#${name}`).val();
    if (numeric) return 1*value;
    return value;
}

/**
 * Get the value of a text element
 * @param {String} name The id of the element
 * @param {Boolean} numeric Wether this is to return a number or not
 * @returns {string|int}
 */
const getTextValue = (name, numeric) => {
    numeric = numeric || true;
    let text = jQuery(`#${name}`).text();
    if (numeric) return 1*text;
    return text;
}

let convertIntToCurrency = (number, displayCount) => {
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

    for (let c = 0; c < displayCount; c++) {
        if (c == fullSplit.length) break;
        thereturn = `${fullSplit[c]}</span>`;
    }

    // if (fullSplit.length >= 3) thereturn = `${fullSplit[0]}</span>${fullSplit[1]}</span>${fullSplit[2]}</span>`;
    // else if (fullSplit.length >= 2) thereturn = `${fullSplit[0]}</span>${fullSplit[1]}</span>`;
    // else if (fullSplit.length >= 1) thereturn = `${fullSplit[0]}</span>`;

    return thereturn;
}
