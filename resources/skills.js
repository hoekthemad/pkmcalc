// Function to calculate the price of a skill
function calculateSkillPrice(level, isTheOrder, priceModifier, happinessModifier, relicLevel, isDarkMagic, fanaticism, isBoostActive) {
    priceModifier = priceModifier || 1.0; // Default value if not provided
    happinessModifier = happinessModifier || 1.0;
    relicLevel = relicLevel || 0;
    fanaticism = fanaticism || 1.0;
    isBoostActive = isBoostActive || false;

    const a = 0.001 * Math.pow(level, Math.log((level * Math.sqrt(level)) / (isTheOrder ? 1 : 3.27)));
    const b = priceModifier * happinessModifier * 0.1 * (1 + relicLevel) * (isDarkMagic ? fanaticism : 1) * (isBoostActive ? 2 : 1);

    return 1 + a / b;
}

// Define the skills object with categories and individual skills
let skills = {
    theOrder: {
        faith: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.205 * level,
            price: (level) => calculateSkillPrice(level, true, 1, 1, 1, false, 1, false)
        },
        zeal: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.12 * level,
            price: (level) => calculateSkillPrice(level, true, 1, 1, 1, false, 1, false)
        },
        devotion: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.135 * level,
            price: (level) => calculateSkillPrice(level, true, 1, 1, 1, false, 1, false)
        },
        fervour: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.0135 * level,
            price: (level) => calculateSkillPrice(level, true, 1, 1, 1, false, 1, false)
        }
    },
    fundamentals: {
        productivity: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.03 * level,
            price: (level) => calculateSkillPrice(level, false, 1, 1, 1, false, 1, false)
        },
        concentration: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.01 * level,
            price: (level) => calculateSkillPrice(level, false, 1, 1, 1, false, 1, false)
        },
        bargaining: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.01 * level,
            price: (level) => calculateSkillPrice(level, false, 1, 1, 1, false, 1, false)
        },
        meditation: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.01 * level,
            price: (level) => calculateSkillPrice(level, false, 1, 1, 1, false, 1, false)
        }
    },
    combat: {
        strength: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.015 * level,
            price: (level) => calculateSkillPrice(level, false, 1, 1, 1, false, 1, false)
        },
        muscleMemory: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.01 * level,
            price: (level) => calculateSkillPrice(level, false, 1, 1, 1, false, 1, false)
        },
        battleTactics: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.01 * level,
            price: (level) => calculateSkillPrice(level, false, 1, 1, 1, false, 1, false)
        }
    },
    magic: {
        manaControl: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.01 * level,
            price: (level) => calculateSkillPrice(level, false, 1, 1, 1, false, 1, false)
        },
        lifeEssence: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.02 * level,
            price: (level) => calculateSkillPrice(level, false, 1, 1, 1, false, 1, false)
        },
        resilience: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.005 * level,
            price: (level) => calculateSkillPrice(level, false, 1, 1, 1, false, 1, false)
        },
        materialism: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.004 * level,
            price: (level) => calculateSkillPrice(level, false, 1, 1, 1, false, 1, false)
        }
    },
    darkMagic: {
        fanaticalDevotion: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.01 * level,
            price: (level) => calculateSkillPrice(level, false, 1, 1, 1, true, 1, false)
        },
        ardentBelief: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.03 * level,
            price: (level) => calculateSkillPrice(level, false, 1, 1, 1, true, 1, false)
        },
        zealousConviction: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.01 * level,
            price: (level) => calculateSkillPrice(level, false, 1, 1, 1, true, 1, false)
        },
        extremePiety: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.01 * level,
            price: (level) => calculateSkillPrice(level, false, 1, 1, 1, true, 1, false)
        },
        absoluteFaith: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.01 * level,
            price: (level) => calculateSkillPrice(level, false, 1, 1, 1, true, 1, false)
        },
        devoutMastery: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.002 * level,
            price: (level) => calculateSkillPrice(level, false, 1, 1, 1, true, 1, false)
        },
        doggedPerseverance: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.003 * level,
            price: (level) => calculateSkillPrice(level, false, 1, 1, 1, true, 1, false)
        },
        blazingFervour: {
            currentLevel: 1,
            maxLevel: 100,
            effect: (level) => 0.0027 * level,
            price: (level) => calculateSkillPrice(level, false, 1, 1, 1, true, 1, false)
        }
    }
};

// Example usage
console.log('Price to upgrade faith to next level:', skills.theOrder.faith.price(skills.theOrder.faith.currentLevel + 1));
