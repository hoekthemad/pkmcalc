let storedData = undefined !== localStorage['PlayerData'] ? JSON.parse(localStorage.PlayerData) : false;
if (false !== storedData) {
    Player = storedData;
}



jQuery(document).ready(() => {
    jQuery("a.nav-link").attr("onclick", "changeActiveLink(this)");

    SkillPage.init();

    jQuery(".spinner").addClass("collapse");
    jQuery("#content").removeClass("collapse");
})