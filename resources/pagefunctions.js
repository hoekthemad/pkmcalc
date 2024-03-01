const toggleGroup = (name) => {
    jQuery(`div#${name}`).toggleClass("collapse")
}

const changeActiveLink = (element) => {
    jQuery(".nav-link.active").removeClass("active");
    jQuery(element).addClass("active");

    jQuery(".container[id^=page-]").not(".collapse").addClass("collapse");
    
    jQuery(`.container#page-${jQuery(element).prop("data-toggle")}`).removeClass("collapse");
    page = `#page-${jQuery(element).attr("data-toggle")}`;
    jQuery(page).removeClass("collapse")
}