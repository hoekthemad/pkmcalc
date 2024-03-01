let ShopPage = {
    getGroupName: {
        'properties': 'Properties',
        'trinkets': 'Trinkets',
        'weapons': 'Weapons',
        'servants': 'Servants',
    },

    shopHTML: (group, groupname) => {
        let shopHTML = ``;
        for (let [name, values] of Object.entries(group)) {
            let htmlShopName = values.io.html;
            let displayShopName = values.io.display
            let importShopName = values.io.import;
            let baseShopEffect = values.effectvalue;

            //let effectType = values.effect.display;

            

            shopHTML = shopHTML + `
                <div class="row border border-1 rounded-2 border border-1-light border border-1-primary">
                    <div class="col-auto col-xs col-3 col-sm col-md col-lg col-xl col-xxl align-self-center">
                        ${displayShopName}
                    </div>
                    <div class="col-auto col-xs col-3 col-sm col-md col-lg col-xl col-xxl">
                        <div class="form-check form-switch">
                            <input type="checkbox" class="form-check-input" id="${htmlShopName}-enabled">
                        </div>
                    </div>
                    <div class="col-auto col-xs col-3 col-sm col-md col-lg col-xl col-xxl align-self-center">
                        ${values.effect.display} ${values.effect.symbol}<span id="${htmlShopName}-shop-effect">${values.effectvalue}</span>
                    </div>
                    <div class="col-auto col-xs col-3 col-sm col-md col-lg col-xl col-xxl align-self-center">
                        <span id="${htmlShopName}-shop-price">${convertIntToCurrency(values.baseprice)}</span>
                    </div>
                </div><br/>
            `;
        }

        let groupHTML = `
            <div class="row" onclick="toggleGroup('${groupname}')" style="cursor: pointer">
                <div class="col-auto" id="header-${groupname}">
                    <h5 class="amethyst">${ShopPage.getGroupName[groupname]}</h5 class="amethyst">
                </div>
            </div>
            <div id="${groupname}">
                <hr class="bg-primary border border-1-light border border-1-top border border-1-primary" />
                ${shopHTML}
            </div>
            <hr class="bg-danger border border-1-light border border-1-top border border-1-danger" />
        `;
        return groupHTML;
    },

    init: () => {
        let shopHTML = ``;

        shopHTML = `
            ${ShopPage.shopHTML(_properties, 'properties')}
            ${ShopPage.shopHTML(_trinkets, 'trinkets')}
            ${ShopPage.shopHTML(_weapons, 'weapons')}
            ${ShopPage.shopHTML(_servants, 'servants')}
        `;
        
        jQuery("#page-shop").html(`<br/>${shopHTML}`);
    }
}
