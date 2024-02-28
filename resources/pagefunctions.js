const getSetPage = (page) => {
    jQuery.ajax({
        url: `resources/html/${page}.html`,
        success: (res) => {
            jQuery(`#page-${page}`).html(res);
        }
    })
}

const changeActiveLink = (element) => {
    jQuery(".nav-link.active").removeClass("active");
    jQuery(element).addClass("active");

    jQuery(".container-fluid[id^=page-]").not(".collapse").addClass("collapse");
    
    jQuery(`.container-fluid#page-${jQuery(element).attr("data-toggle")}`).removeClass("collapse");
}

jQuery(document).ready(() => {
    jQuery("a.nav-link").attr("onclick", "changeActiveLink(this)");

    getSetPage("skills");

    jQuery(".spinner").addClass("collapse");
    jQuery("#content").removeClass("collapse");
})