/**
 * Import class to use to collect data from the progress knight multiplayer API and set into the Player stats
 * @author Hoek
 */
const Import = {
    /**
     * Count all failed attempts to reach the API
     */
    failedAttempts = 0,

    /**
     * Set skills from the API into the Player object
     * @param {Object} skillData 
     */
    setSkills: (skillData) => {
        for (let [skill, values] of Object.entries(skillData)) {
            Player['playerData']['skills'][skill] = values;
        }
    },

    /**
     * Set shop items from the API into the Player object
     * @param {Object} shopData 
     */
    setShop: (shopData) => {
        for (let [shop, value] of Object.entries(shopData)) {
            Player['playerData']['shop'][shop] = value;
        }
    },

    /**
     * Set boost data from the API into the player object
     * @param {Object} boostData 
     */
    setBoosts: (boostData) => {
        for (let [boost, values] of Object.entries(boostData)) {
            Player['playerData']['boosts'][boost] = value;
        }
    },

    /**
     * Set stat data from the API into the Player object
     * @param {Object} statData 
     */
    setStats: (statData) => {
        for (let [stat, value] of Object.entries(statData)) {
            Player['playerData']['stats'][stat] = value;
        }
    },

    /**
     * Set misc data from the API into the Player object
     * @param {Object} miscData 
     */
    setMisc: (miscData) => {
        for (let [misc, value] of Object.entries(miscData)) {
            Player['playerData']['misc'][misc] = value;
        }
    },

    /**
     * Set talent data from the API into the Player object
     * @param {Object} talentsData 
     */
    setTalents: (talentsData) => {
        Player['playerData']['talents'] = talentsData
    },

    /**
     * Set feat of strength data from the API into the Player object
     * @param {Object} fosData 
     */
    setFos: (fosData) => {
        Player['playerData']['fos'] = fosData;
    },

    /**
     * Collect and set data from the API into Players data
     * @param {int} userID 
     */
    import: (userID) => {
        userID = userID || false;
        /**
         * If the user ID is not numeric, this will cause a fail - this should be caught before here, but lets be safe
         */
        if (isNaN(userID)) {
            Import.failedAttempts++;
            if (Import.failedAttempts > 3) {
                alert("Something seems to be going wrong, please email themad@hoek.uk with details of what you are trying to do");
            } else {
                alert("Please make sure you enter a valid User ID\r\nThis is found in the menu of the game")
            }
        }
        else {
            const importURL = `https://https://api.ezagdev.net/player-data/${userID}`;
            jQuery.ajax({
                url: importURL,
                async: false,

                success: (playerData) => {
                    /**
                     * If for some reason, the player data is null, that's an error!
                     */
                    if (null == playerData) {
                        Import.failedAttempts++;
                        if (Import.failedAttempts > 3) {
                            alert("Something seems to be going wrong, please email themad@hoek.uk with details of what you are trying to do");
                        } else {
                            alert("Something went wrong, please try again");
                        }
                    }
                    else {
                        Import.failedAttempts = 0;
                        Import.setBoosts(playerData['boosts']);
                        Import.setFos(playerData['fos']);
                        Import.setMisc(playerData['misc']);
                        Import.setShop(playerData['shop']);
                        Import.setSkills(playerData['skills']);
                        Import.setStats(playerData['stats']);
                        Import.setTalents(playerData['talents']);
                    }
                }
            })
        }
    }
}