let dataImporter = {
    decode: (base64) => {
        const binString = atob(base64.replace(/[^\x00-\x7F]/g, ""));
        let ret = JSON.parse(binString);
        return ret;
    },

    forSkills: () => {
        let b64string = $("#base64stats").val();
        if (b64string.length == 0) {
            alert("Please enter your stats");
            return;
        }
        let stats = dataImporter.decode(b64string);
        calc.setSkils(stats['skills']);

        let dateNow = Date.now();
        let happinessBoostEnd = Date.parse(stats['boosts']['happiness']);

        let happyBoostActive = false;
        if (happinessBoostEnd > dateNow)
            happyBoostActive = true;

        let happiness = 1*stats['stats']['happiness'];
        if (true == happyBoostActive) {
            happiness = happiness*2;
            $("#is_boost_active").prop("checked", "checked");
        }

        // why
        $("#price_modifier").val(stats['stats']['allPrices']);
        $("#happiness_modifier").val(happiness);
        $("#fanaticism").val(stats['fanaticism']);
        
        let skillName = $("#skill_name option:selected").val();
        $("#target_skill_level").val(1*calc.skills[skillName].level+1);
        $("#curr_relic_level").val(calc.skills[skillName].rlevel);
        $("#skill_name").trigger("change")
    }
}
