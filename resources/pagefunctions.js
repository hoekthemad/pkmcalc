const toggleGroup = (name) => {
    jQuery(`div#${name}`).toggleClass("collapse")
}

const changeActiveLink = (element) => {
    jQuery(".nav-link.active").removeClass("active");
    jQuery(element).addClass("active");

    jQuery(".container-fluid[id^=page-]").not(".collapse").addClass("collapse");
    
    jQuery(`.container-fluid#page-${jQuery(element).attr("data-toggle")}`).removeClass("collapse");
}