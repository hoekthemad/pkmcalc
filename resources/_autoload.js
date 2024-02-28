const load = () => {
    const scripts = [
        "data/effects.js", "data/properties.js", "data/servants.js", "data/skills.js",
        "data/trinkets.js", "data/weapons.js", "import/stats.js", "import/import.js",
        "external.js", "helperFunctions.js", "statCalculations.js", "shop.js",
        "skills.js", "init.js", "pagefunctions.js"
    ];
    
    scripts.forEach(function (item) {
        let scriptLocation = `resources/${item}`;
        let script = document.createElement("script");
        script.src = scriptLocation;
        document.head.appendChild(script);
    });
}

document.addEventListener("DOMContentLoaded", load);