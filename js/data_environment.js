data_environment_obscurance = [
    {
        title: "輕度朦朧 Lightly obscured",
        icon: "bleeding-eye",
        subtitle: "使用「感覺檢查」（Perception）時處「劣勢」",
        description: "微暗光線、 片段的霧霾、 中度密度的草叢",
        reference: "PHB, pg. 183.",
        bullets: [
            "Creatures have <b>disadvantage on Wisdom (Perception)</b> checks that rely on sight."
        ]
    },
    {
        title: "嚴重朦朧 Heavily obscured",
        icon: "lightning-tear",
        subtitle: "基本上失去視力",
        description: "完全黑暗、 濃厚的霧霾, 濃密的草叢",
        reference: "PHB, pg. 183.",
        bullets: [
            "A creature in a heavily obscured area effectively suffers from the <b>blinded condition</b>."
        ]
    }
]

data_environment_light = [
    {
        title: "明亮的光線",
        icon: "star-pupil",
        subtitle: "正常視力",
        description: "Bright light lets most creatures see normally",
        reference: "PHB, pg. 183.",
        bullets: [
            "Gloomy days still provide bright light, as do torches, lanterns, fires, and other sources of illumination within a specific radius."
        ]
    },
    {
        title: "暗淡的光線",
        icon: "semi-closed-eye",
        subtitle: "輕度朦朧",
        description: "Dim light, also called shadows",
        reference: "PHB, pg. 183.",
        bullets: [
            "Creates a <b>lightly obscured</b> area.",
            "An area of dim light is usually a boundary between a source of bright light, such as a torch, and surrounding darkness.",
            "The soft light of twilight and dawn also counts as dim light. A particularly brilliant full moon might bathe the land in dim light."
        ]
    },
    {
        title: "黑暗",
        icon: "worried-eyes",
        subtitle: "嚴重朦朧",
        description: "Darkness creates a heavily obscured area",
        reference: "PHB, pg. 183.",
        bullets: [
            "Creates a <b>heavily obscured</b> area.",
            "Characters face darkness outdoors at night (even most moonlit nights), within the confines of an unlit dungeon or a subterranean vault, or in an area of magical darkness."
        ]
    }
]

data_environment_vision = [
    {
        title: "盲視覺 Blindsight",
        icon: "one-eyed",
        subtitle: "無需視覺來感受周圍",
        description: "Perceive your surroundings without relying on sight, within a certain radius",
        reference: "PHB, pg. 183.",
        bullets: [
            "Creatures without eyes, such as oozes, and creatures with echolocation or heightened senses, such as bats and true dragons, have this sense."
        ]
    },
    {
        title: "黑暗視覺 Darkvision",
        icon: "semi-closed-eye",
        subtitle: "在黑暗中擁有有限度視力",
        description: "A creature with Darkvision can see better in the dark or low light conditions, within a certain radius",
        reference: "PHB, pgs. 183-184.",
        bullets: [
            "Within a specified range, a creature with darkvision can <b>see in darkness as if the darkness were dim light</b>, so areas of darkness are only lightly obscured as far as that creature is concerned.",
            "However, the creature can’t discern color in darkness, only shades of gray.",
            "Many creatures in the worlds of D&D, especially those that dwell underground, have darkvision."
        ]
    },
    {
        title: "真實視覺 Truesight",
        icon: "eye-shield",
        subtitle: "在黑暗中看得見",
        description: "A creature with truesight can see everything in its true form, independent of the environment",
        reference: "PHB, pg. 184.",
        bullets: [
            "A creature with truesight can, out to a specific range, see in normal and magical darkness, see invisible creatures and objects, automatically detect visual illusions and succeed on saving throws against them, and perceives the original form of a shapechanger or a creature that is transformed by magic.",
            "Furthermore, the creature can see into the Ethereal Plane."
        ]
    }
]

data_environment_cover = [
    {
        title: "半遮擋 Half cover",
        icon: "broken-shield",
        subtitle: "矮牆、 傢俬、 生物",
        description: "A target has half cover if an obstacle blocks at least half of its body",
        reference: "PHB, pg. 196.",
        bullets: [
            "The obstacle might be a low wall, a large piece of furniture, a narrow tree trunk, or a creature, whether that creature is an enemy or a friend.",
            "A target with half cover has a <b>+2 bonus to AC and Dexterity saving throws</b>.",
            " If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    },
    {
        title: "三分四遮擋 Three-quarters cover",
        icon: "cracked-shield",
        subtitle: "城門閘門、 射箭狹縫",
        description: "A target has three-quarters cover if about three-quarters of it is covered by an obstacle",
        reference: "PHB, pg. 196.",
        bullets: [
            "The obstacle might be a portcullis, an arrow slit, or a thick tree trunk.",
            "A target with three-quarters cover has a <b>+5 bonus to AC and Dexterity saving throws</b>.",
            " If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    },
    {
        title: "完全遮擋 Full cover",
        icon: "shield",
        subtitle: "完全地被遮蓋",
        description: "A target has total cover if it is completely concealed by an obstacle",
        reference: "PHB, pg. 196.",
        bullets: [
            "A target with total cover <b>can’t be targeted directly</b> by an attack or a spell, although some spells can reach such a target by including it in an area of effect.",
            "If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    }
]
