let skills = {
    init: () => {
        let theorder = _skills.theorder;
        let fundamentals = _skills.fundamentals;
        let combat = _skills.combat;
        let magic = _skills.magic;
        let darkmagic = _skills.darkmagic;

        let orderGroupHTML = ``;
        for (let [name, values] of Object.entries(theorder)) {
            let htmlSkillName = values.io.html;
            let displaySkillName = values.io.display
            let importSkillName = values.io.import;
            let baseSkillEffect = values.effectvalue;

            let skillLevel = Player.skills[importSkillName].level;
            let relicLevel = Player.skills[importSkillName].relicLevel;

            let skillCost = getSkillPrice(
                skillLevel, 
                true, 
                getAllPrice(), 
                getHappiness(),
                relicLevel,
                false,
                Player.fanatacism,
                getBoostStatus('happiness')
            );
            let skillEffect = getEffect(
                baseSkillEffect,
                skillLevel,
                getSkillEffect(),
                false
            );

            orderGroupHTML = orderGroupHTML + `
                <div class="row border border-1 rounded-2 border border-1-light border border-1-primary">
                    <div class="col-auto col-xs col-3 col-sm col-md col-lg col-xl col-xxl align-self-center">
                        ${displaySkillName}:
                    </div>
                    <div class="col-auto col-xs col-3 col-sm col-md col-lg col-xl col-xxl">
                        <div class="form-floating">
                            <input type="number" class="form-control" id="${htmlSkillName}-skill-level" placeholder="1" value="${skillLevel}">
                            <label for="${htmlSkillName}-skill-level">Skill Level</label>
                        </div>
                    </div>
                    <div class="col-auto col-xs col-3 col-sm col-md col-lg col-xl col-xxl">
                        <div class="form-floating">
                            <input type="number" class="form-control" id="${htmlSkillName}-relic-level" placeholder="1" value="${relicLevel}">
                            <label for="${htmlSkillName}-relic-level">Relic Level</label>
                        </div>
                    </div>
                    <div class="col-auto col-xs col-3 col-sm col-md col-lg col-xl col-xxl align-self-center">
                        ×<span id="${htmlSkillName}-skill-effect">${skillEffect}</span>
                    </div>
                    <div class="col-auto col-xs col-3 col-sm col-md col-lg col-xl col-xxl align-self-center">
                        <span id="${htmlSkillName}-skill-price">${skillCost}</span>
                    </div>
                </div><br/>
            `;
        }

        let theOrderHTML = `
            <div class="row">
                <div class="col-auto" id="header-theorder" onclick="toggleGroup('theorder')">
                    <h2>The Order</h2>
                </div>
            </div>
            <div id="theorder">
                <hr class="bg-primary   border border-1-light border border-1-top border border-1-primary" />
                ${orderGroupHTML}
            </div>
            <hr class="bg-danger   border border-1-light border border-1-top border border-1-danger" />
        `;
        jQuery("#page-skills").html(theOrderHTML);
    }
}
