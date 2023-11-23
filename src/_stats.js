let stats = () => {
    let importString = jQuery("#import").val();
    if (0 == importString.toString().length) {
        alert("Please enter a valid input");
        return;
    }

    _import.go(importString);

    let theStats = _import.stats;
    jQuery("#current_fana").text(parseFloat(theStats.fanaticism).toLocaleString());
    jQuery("#total_brands").text(parseFloat(theStats.brands).toLocaleString());
    jQuery("#relic_touches").text(parseFloat(theStats.relictouches).toLocaleString());
}