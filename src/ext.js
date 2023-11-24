/**
 * External code provided by Gawaak - developer of Progress Knight Multiplayer
 * @author Gawaak
 */
let getSkillPrice = (level, isTheOrder, priceModifier, happinessModifier, relicLevel, isDarkMagic, fanaticism, isBoostActive) => {
    const a = (0.001 * Math.pow(level,
            Math.log((level * Math.sqrt(level)) / (isTheOrder ? 1 : 3.27)))
    )
    const b = (
        priceModifier *
        happinessModifier *
        0.1 *
        (1 + relicLevel) *
        (isDarkMagic ? fanaticism : 1) *
        (isBoostActive ? 2 : 1)
    )

    console.log(a, b)

    return 1 + a / b
}

const getEffect = (baseValue, level, skillEffects, isSkillEffects) => {
    return 0.01 * Math.round(100 * Math.pow(
        (1 + baseValue *
            (isSkillEffects ? 1 : skillEffects) *
            (level - 1)),
        0.6)).toFixed(2)
}
