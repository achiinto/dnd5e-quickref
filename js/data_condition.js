data_condition = [
    {
        title: "失明 Blinded",
        icon: "one-eyed",
        subtitle: "你眼前一遍黑暗",
        description: "你眼前一遍黑暗",
        reference: "PHB, pg. 290.",
        bullets: [
            "You automatically fail any ability check which requires sight.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage."
        ]
    },
    {
        title: "被迷惑 Charmed",
        icon: "smitten",
        subtitle: "你被迷惑了",
        description: "你被另一個生物迷惑了",
        reference: "PHB, pg. 290.",
        bullets: [
            "You can't attack your charmer or target them with harmful abilities or magical effects.",
            "Your charmer has advantage on ability checks to interact socially with you."
        ]
    },
    {
        title: "失聰 Deafened",
        icon: "elf-ear",
        subtitle: "你聽不到聲音",
        description: "你聽不到聲音",
        reference: "PHB, pg. 290.",
        bullets: [
            "You automatically fail any ability check which requires hearing."
        ]
    },
    {
        title: "虛脫 Exhaustion",
        icon: "crawl",
        subtitle: "你已經筋疲力盡",
        description: "虛脫度是有六個不同水平",
        reference: "PHB, pg. 291.",
        bullets: [
            "<table><tr><th>Level</th><th></th><th></th><th style='text-align:left'>Effect</th></tr><tr><td>1</td><td></td><td></td><td>Disadvantage on ability checks</td></tr><tr><td>2</td><td></td><td></td><td>Speed halved</td></tr><tr><td>3</td><td></td><td></td><td>Disadvantage on attack rolls and saving throws</td></tr><tr><td>4</td><td></td><td></td><td>Hit point maximum halved</td></tr><tr><td>5</td><td></td><td></td><td>Speed reduced to 0</td></tr><tr><td>6</td><td></td><td></td><td>Death</td></tr></table>",
            "You suffer the effect of your current level of exhaustion as well as all lower levels.",
            "Finishing a long rest reduces your exhaustion level by 1, provided that you have also had some food and drink."
        ]
    },
    {
        title: "驚嚇 Frightened",
        icon: "sharp-smile",
        subtitle: "你被嚇着了",
        description: "你被嚇着了",
        reference: "PHB, pg. 290.",
        bullets: [
            "You have disadvantage on ability checks and attack rolls while the source of your fear is within line of sight.",
            "You can't willingly move closer to the source of your fear."
        ]
    },
    {
        title: "被抓捕 Grappled",
        icon: "grab",
        subtitle: "你被抓獲了",
        description: "你被抓獲了",
        reference: "PHB, pg. 290.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "The condition ends if your grappler is incapacitated.",
            "The condition also ends if you are removed from the reach of your grappler."
        ]
    },
    {
        title: "喪失能力 Incapacitated",
        icon: "internal-injury",
        subtitle: "你不能行動或作出反射動作",
        description: "你不能行動或作出反射動作",
        reference: "PHB, pg. 290.",
        bullets: [
        ]
    },
    {
        title: "隱形 Invisible",
        icon: "invisible",
        subtitle: "別人看不見你",
        description: "別人在沒有魔法幫助或特別感官下看不見你",
        reference: "PHB, pg. 291.",
        bullets: [
            "For the purpose of hiding, you are heavily obscured.",
            "You can still be detected by any noise you make or tracks you leave.",
            "You have advantage on attack rolls.",
            "Attack rolls against you have disadvantage."
        ]
    },
    {
        title: "癱瘓 Paralyzed",
        icon: "internal-injury",
        subtitle: "你的身體癱瘓了",
        description: "你什麼也作不了",
        bullets: [
            "You are incapacitated and can't move or speak.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "石化 Petrified",
        icon: "stone-pile",
        subtitle: "你被變成石像了",
        description: "你和你身上那些不是魔法的用品一同地被變化成一個固體殭硬的物質（通常是石頭）",
        reference: "PHB, pg. 291.",
        bullets: [
            "Your weight increases by a factor of ten, and you cease aging.",
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws.",
            "You have resistance to all damage.",
            "You are immune to poison and disease, though a poison or disease already in your system is only suspended, not neutralized."
        ]
    },
    {
        title: "被毒害 Poisoned",
        icon: "deathcab",
        subtitle: "你中毒了",
        description: "你中毒了",
        reference: "PHB, pg. 292.",
        bullets: [
            "You have disadvantage on attack rolls and ability checks."
        ]
    },
    {
        title: "伏地 Prone",
        icon: "crawl",
        subtitle: "你倒伏在地",
        description: "你倒伏在地",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your only movement option is to crawl, unless you stand up.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage if the attacker is within 5 feet of you, otherwise the attack roll has disadvantage."
        ]
    },
    {
        title: "拘束 Restrained",
        icon: "imprisoned",
        subtitle: "你被拘束着",
        description: "你被拘束着",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage.",
            "You have disadvantage on Dexterity saving throws."
        ]
    },
    {
        title: "錯愕 Stunned",
        icon: "internal-injury",
        subtitle: "你感覺錯愕",
        description: "你感覺錯愕",
        reference: "PHB, pg. 292.",
        bullets: [
            "You are incapacitated, can't move, and can speak only falteringly.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "失去意識 Unconscious",
        icon: "coma",
        subtitle: "你已失去意識",
        description: "你已失去意識",
        reference: "PHB, pg. 292.",
        bullets: [
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "You drop whatever you're holding and fall prone.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws.",
        ]
    }
]
