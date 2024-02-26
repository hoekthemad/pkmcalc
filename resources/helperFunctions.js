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