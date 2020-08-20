data_action = [
    {
        title: "攻擊 Attack",
        icon: "crossed-swords",
        subtitle: "近身或遠呀距離攻擊",
        description: "用你的武器實行近身或遠呀距離攻擊",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "某些功能，如 「額外攻擊」的戰士功能，可以讓你在一次行動中進行多過一次攻擊。每一次這樣的攻擊都有自己獨立的投骰並可以有其不同的攻擊目標。你亦可以在多次攻擊之間作出移動。",
"當你用輕便近身武器進行攻擊時，你可以使用一次「額外行動」來以你的第二隻手作出攻擊 (請看 額外行動「次手攻擊」）",
"你可以以 「抓捕」又或者「推開」來取代你的其中一次攻擊。",
"某些情況是會對攻擊加上「優勢」（advantage)，如在當對失明的（blinded)、癱瘓的（paralyzed)、石化的（petrified)、拘束的（restrained)、錯愕的（stunned)、又或是失去意識的（unconscious)目標作出攻擊、又或是對倒地的（prone)目標作出近身攻擊、又或是被隱影的（invisible)或隱藏的（hidden)攻擊者攻擊的時候。",
"某些情況是會對攻擊加上「劣勢」（disadvantage)，如在當對隱影的（invisible)或隱藏的（hidden)目標作出攻擊、又或對倒地的（prone)目標以遠距離攻擊、又或是在失明的（blinded)、驚嚇的（frightened)、被毒害的（poisoned)、拘束的（restrained)的狀況下作出攻擊的時候。"
        ]
    },
    {
        title: "抓捕 Grapple",
        icon: "grab",
        subtitle: "特別近身攻擊",
        description: "嘗試去捉拿一個生物或與之鬥力",
        reference: "PHB, pg. 195.",
        bullets: [
            "You can use the <i>Attack</i> action to make a special melee attack, a grapple. If you’re able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your grapple must be no more than one size larger than you, and it must be within your reach.",
            "Using at least one free hand, you try to seize the target by making a grapple check, a Strength (Athletics) check contested by the target‘s Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
            "如果你成功，你令到你的對手進入到被找捕的情況 (他的移動力降低至零）。"
        ]
    },
    {
        title: "推開 Shove",
        icon: "hand",
        subtitle: "特別近身攻擊",
        description: "把一個生物推倒或從你身邊推離",
        reference: "PHB, pg. 195.",
        bullets: [
            "Using the <i>Attack</i> action, you can make a special melee attack to shove a creature. If you’re able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your shove must be no more than one size larger than you, and it must be within your reach.",
            "You make a Strength (Athletics) check contested by the target‘s Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
            "If you win the contest, you either knock the target prone or push it 5 feet away from you."
        ]
    },
    {
        title: "使用魔法 Cast a spell",
        icon: "magic-swirl",
        subtitle: "一個行動內可詠唱的魔法",
        description: "使用一個可在一個行動內詠唱而成的魔法",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can’t cast a spell with you action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
            "The target of a spell must be within the spell‘s range. To target something, you must have a clear path to it, so it can’t be behind total cover.",
            "Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.",
            "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. You lose concentration on a spell if you cast another spell that requires concentration or when you are incapacitated. Each time you take damage, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher."
        ]
    },
    {
        title: "衝跑 Dash",
        icon: "sprint",
        subtitle: "雙倍移動速度",
        description: "在現時的角色回合中得到額外的移動距離",
        reference: "PHB, pg. 192.",
        bullets: [
            "The increase equals your speed, after applying any modifiers."
        ]
    },
    {
        title: "脫離 Disengage",
        icon: "journey",
        subtitle: "Prevent opportunity attacks",
        description: "Your movement doesn‘t provoke opportunity attacks for the rest of the turn",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "閃避 Dodge",
        icon: "aura",
        subtitle: "提升防禦能力",
        description: "完全集中在避開對自身的所有攻擊",
        reference: "PHB, pg. 192.",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
            "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
        ]
    },
    {
        title: "逃脫 Escape",
        icon: "manacles",
        subtitle: "Escape a grapple",
        description: "Escape a grapple",
        reference: "PHB, pg. 195.",
        bullets: [
            "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler’s Strength (Athletics) check.",
            "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition."
        ]
    },
    {
        title: "幫忙 Help",
        icon: "telepathy",
        subtitle: "Grant an ally advantage",
        description: "Grant an ally advantage on an ability check or attack",
        reference: "PHB, pg. 192.",
        bullets: [
            "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
            "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.",
            "The advantage lasts until the start of your next turn."
        ]
    },
    {
        title: "使用物品 Use Object",
        icon: "snatch",
        subtitle: "Interact, use special abilities",
        description: "Interact with a second object or use special object abilities",
        reference: "PHB, pg. 193.",
        bullets: [
            "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
            "When an object requires your action for its use, you also take this action."
        ]
    },
    {
        title: "使用盾牌 Use shield",
        icon: "round-shield",
        subtitle: "Equip or unequip a shield",
        description: "Equip or unequip a shield",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "A shield always takes an action to equip or unequip.",
            "Armor takes several minutes to equip or unequip."
        ]
    },
    {
        title: "躲藏 Hide",
        icon: "hood",
        subtitle: "",
        description: "Attempt to hide",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can‘t hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy’s vision.",
            "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
            "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check‘s total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
            "A creature notices you even if it isn’t searching unless your Stealth check is higher than its Passive Perception.",
            "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard."
        ]
    },
    {
        title: "搜尋 Search",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Devote your attention to finding something",
        reference: "PHB, pg. 193.",
        bullets: [
            "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check."
        ]
    },
    {
        title: "準備 Ready",
        icon: "stopwatch",
        subtitle: "Choose trigger and action",
        description: "Choose a trigger and a response reaction",
        reference: "PHB, pg. 193.",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell‘s magic requires concentration"
        ]
    },
    {
        title: "使用職業類別功能 Use a class feature",
        icon: "embrassed-energy",
        subtitle: "Some features use actions",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [

        ]
    },
    {
        title: "除意創意 Improvise",
        icon: "juggler",
        subtitle: "Any action not on this list",
        description: "Perform any action you can imagine",
        reference: "PHB, pg. 193.",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    }
]
