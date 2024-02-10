let StatPage = {
    skills: {
        theorder: ['faith', 'zeal', 'devotion', 'fervour'],
        fundamentals: ['productivity', 'concentration', 'bargaining', 'meditiation'],
        combat: ['strength', 'battletactics', 'musclememory'],
        magic: ['manacontrol', 'lifeessence', 'resiliance', 'materialism'],
        darkmagic: ['fanaticaldevotion', 'ardentbelief', 'zealousconviction', 'extremepiety', 'absolutefaith', 'devoutmastery', 'doggedperseverance', 'blazingfervour']
    },

    translateSkillName: (name) => {
        switch (name) {
            case "faith": return "Faith";
            case "zeal": return "Zeal";
            case "devotion": return "Devotion";
            case "fervour": return "Fervour";

            case "productivity": return "Productivity";
            case "concentration": return "Concentration";
            case "bargaining": return "Bargaining";
            case "meditation": return "Meditation";

            case "manacontrol": return "Mana Control";
            case "lifeessence": return "Life Essence";
            case "resiliance": return "Resiliance";
            case "materialism": return "Materialism";

            case "fanaticaldevotion": return "Fanatical Devotion";
            case "ardentbelief": return "Ardent Belief";
            case "zealousconviction": return "Zealous Conviction";
            case "extremepiety": return "Extreme Piety";
            case "absolutefaith": return "Absolite Faith";
            case "devoutmastery": return "Devout Mastery";
            case "doggedperseverance": return "Dogged Perseverance";
            case "blazingfervour": return "Blazing Fervour";
        }
    },

    init: () => {
        let baseHTML = `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#skills_GROUPNAME" aria-expanded="true" aria-controls="skills_GROUPNAME">
                    SKILLHEADER
                </button>
            </h2>
            <div id="skills_GROUPNAME" class="accordion-collapse collapse show">
                <div class="accordion-body">
                    <div class="row g-3 align-items-center">
                        THESKILLS
                    </div>
                </div>
            </div>
        </div>
        `;
        let skillHTML = `
        <div class="col">
            <label for="SKILLNAME_skill_level" class="col-form-label">HTMLSKILLNAME: Skill Level</label>
        </div>
        <div class="col">
            <input type="number" id="SKILLNAME_skill_level" class="form-control" value="1" onchange="updateSkill('SKILLNAME')">
        </div>

        <div class="col">
            <label for="SKILLNAME_relic_level" class="col-form-label">Relic Level</label>
        </div>
        <div class="col">
            <input type="number" id="SKILLNAME_relic_level" class="form-control" value="1" onchange="updateSkill('SKILLNAME')">
        </div>

        <div class="col">
            <span class="col-form-label">Skill effect <span id="SKILLNAME_skill_effect">SKILL_EFFECT</span></span>
        </div>

        <div class="col">
            <span class="col-form-label">Skill cost <span id="SKILLNAME_skill_cost">1c</span></span>
        </div>
        `;

        let totalSkillHtml = '';

        let orderOuterHTML = baseHTML;
        orderOuterHTML.replace('SKILLHEADER', "The Order");
        orderOuterHTML.replace('GROUPNAME', "theorder");

        let orderSkillsHTML = ``;
        for (let orderI = 0; orderI < StatPage.skills.theorder.length; orderI++) {
            let thisSkillHtml = skillHTML;
            thisSkillHtml.replace('HTMLSKILLNAME', StatPage.translateSkillName(StatPage.skills.theorder[orderI]));

            orderSkillsHTML += thisSkillHtml;
        }
        totalSkillHtml = orderSkillsHTML;

        let fundaOuterHTML = baseHTML;
        fundaOuterHTML.replace('SKILLHEADER', "Fundamentals");
        fundaOuterHTML.replaceAll('GROUPNAME', "fundamentals");

        let fundaSkillHTML = ``;
        for (let orderI = 0; orderI < StatPage.skills.fundamentals.length; orderI++) {
            let thisSkillHtml = skillHTML;
            thisSkillHtml.replace('HTMLSKILLNAME', StatPage.translateSkillName(StatPage.skills.fundamentals[orderI]));

            fundaSkillHTML += thisSkillHtml;
        }
        totalSkillHtml = totalSkillHtml + fundaSkillHTML;

        let combatOuterHTML = baseHTML;
        combatOuterHTML.replace('SKILLHEADER', "Combat");
        combatOuterHTML.replace('GROUPNAME', "combat");

        let combatSkillHTML = ``;
        for (let orderI = 0; orderI < StatPage.skills.combat.length; orderI++) {
            let thisSkillHtml = skillHTML;
            thisSkillHtml.replace('HTMLSKILLNAME', StatPage.translateSkillName(StatPage.skills.combat[orderI]));

            combatSkillHTML += thisSkillHtml;
        }
        totalSkillHtml = totalSkillHtml + combatSkillHTML;



        combatOuterHTML.replace('THESKILLS', totalSkillHtml);
        jQuery("#skillsAccordian").append(combatOuterHTML);
    }
}