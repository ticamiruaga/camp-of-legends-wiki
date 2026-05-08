// Camp of Legends — Game Data
// Global variables (no ES modules) for GitHub Pages static hosting

var HEROES = {
  warrior: { hpBase: 120, hpPerLevel: 18, atkBase: 14, atkPerLevel: 3.5, defBase: 12, defPerLevel: 2.5, spd: 10 },
  mage:    { hpBase: 70,  hpPerLevel: 10, atkBase: 20, atkPerLevel: 5.0, defBase: 6,  defPerLevel: 0.5, spd: 12 },
  ranger:  { hpBase: 90,  hpPerLevel: 12, atkBase: 16, atkPerLevel: 4.0, defBase: 8,  defPerLevel: 1.5, spd: 18 },
};

var MISSIONS = [
  // ── Whispering Forest (beginner) ────────────────────────────────────────
  {
    id: "forest_patrol", name: "Forest Patrol", zone: "Whispering Forest",
    durationSec: 300, difficulty: 1, goldMin: 8, goldMax: 15, xpReward: 20,
    description: "A routine patrol through the forest outskirts. Low risk, good for new heroes.",
    loot: [
      { itemId: "wolf_pelt",    chance: 0.50, qty: 1 },
      { itemId: "goblin_ear",   chance: 0.35, qty: 1 },
      { itemId: "iron_ore",     chance: 0.15, qty: 1 },
      { itemId: "wooden_stick", chance: 0.20, qty: 1 },
      { itemId: "leather_vest", chance: 0.10, qty: 1 },
      { itemId: "silver_ring",  chance: 0.05, qty: 1 },
    ]
  },
  {
    id: "goblin_scouts", name: "Goblin Scouts", zone: "Whispering Forest",
    durationSec: 600, difficulty: 2, goldMin: 15, goldMax: 25, xpReward: 40,
    description: "A goblin scouting party has been spotted near the village. Drive them off.",
    loot: [
      { itemId: "goblin_ear",   chance: 0.60, qty: 2 },
      { itemId: "wolf_pelt",    chance: 0.30, qty: 1 },
      { itemId: "iron_ore",     chance: 0.25, qty: 1 },
      { itemId: "wooden_stick", chance: 0.15, qty: 1 },
      { itemId: "leather_vest", chance: 0.15, qty: 1 },
      { itemId: "iron_sword",   chance: 0.08, qty: 1 },
    ]
  },
  {
    id: "lost_merchant", name: "Lost Merchant", zone: "Whispering Forest",
    durationSec: 900, difficulty: 2, goldMin: 20, goldMax: 35, xpReward: 60,
    description: "A merchant went missing in the deep woods. Find and escort them to safety.",
    loot: [
      { itemId: "iron_ore",     chance: 0.30, qty: 2 },
      { itemId: "wolf_pelt",    chance: 0.25, qty: 1 },
      { itemId: "iron_sword",   chance: 0.12, qty: 1 },
      { itemId: "leather_vest", chance: 0.20, qty: 1 },
      { itemId: "lucky_charm",  chance: 0.08, qty: 1 },
      { itemId: "silver_ring",  chance: 0.10, qty: 1 },
    ]
  },
  {
    id: "ancient_ruins", name: "Ancient Ruins", zone: "Whispering Forest",
    durationSec: 1800, difficulty: 3, goldMin: 35, goldMax: 60, xpReward: 100,
    description: "Overgrown ruins hide forgotten treasures — and forgotten dangers.",
    loot: [
      { itemId: "iron_ore",    chance: 0.35, qty: 2 },
      { itemId: "iron_sword",  chance: 0.18, qty: 1 },
      { itemId: "chainmail",   chance: 0.12, qty: 1 },
      { itemId: "silver_ring", chance: 0.15, qty: 1 },
      { itemId: "lucky_charm", chance: 0.10, qty: 1 },
      { itemId: "steel_blade", chance: 0.06, qty: 1 },
    ]
  },
  // ── Ironstone Peaks (intermediate) ──────────────────────────────────────
  {
    id: "mountain_pass", name: "Mountain Pass", zone: "Ironstone Peaks",
    durationSec: 1200, difficulty: 3, goldMin: 40, goldMax: 70, xpReward: 90,
    description: "Secure the mountain pass against bandits threatening trade caravans.",
    loot: [
      { itemId: "iron_ore",     chance: 0.40, qty: 2 },
      { itemId: "steel_blade",  chance: 0.12, qty: 1 },
      { itemId: "chainmail",    chance: 0.18, qty: 1 },
      { itemId: "ranger_tunic", chance: 0.12, qty: 1 },
      { itemId: "power_amulet", chance: 0.07, qty: 1 },
      { itemId: "elven_dagger", chance: 0.10, qty: 1 },
    ]
  },
  {
    id: "bandit_camp", name: "Bandit Camp", zone: "Ironstone Peaks",
    durationSec: 2700, difficulty: 3, goldMin: 60, goldMax: 100, xpReward: 140,
    description: "A fortified bandit camp in the peaks. Dismantle it before they grow bolder.",
    loot: [
      { itemId: "iron_ore",     chance: 0.30, qty: 3 },
      { itemId: "steel_blade",  chance: 0.15, qty: 1 },
      { itemId: "battle_axe",   chance: 0.10, qty: 1 },
      { itemId: "iron_plate",   chance: 0.10, qty: 1 },
      { itemId: "power_amulet", chance: 0.08, qty: 1 },
      { itemId: "enchanted_bow",chance: 0.12, qty: 1 },
    ]
  },
  {
    id: "ore_vein", name: "Ore Vein", zone: "Ironstone Peaks",
    durationSec: 3600, difficulty: 4, goldMin: 80, goldMax: 130, xpReward: 180,
    description: "A rich vein of iron ore guarded by stone golems. Claim it for the camp.",
    loot: [
      { itemId: "iron_ore",         chance: 0.60, qty: 3 },
      { itemId: "battle_axe",       chance: 0.14, qty: 1 },
      { itemId: "steel_armor",      chance: 0.10, qty: 1 },
      { itemId: "iron_plate",       chance: 0.15, qty: 1 },
      { itemId: "apprentice_staff", chance: 0.10, qty: 1 },
      { itemId: "mage_robes",       chance: 0.08, qty: 1 },
    ]
  },
  // ── Shadowmere Depths (advanced) ────────────────────────────────────────
  {
    id: "crypt_entrance", name: "Crypt Entrance", zone: "Shadowmere Depths",
    durationSec: 3600, difficulty: 4, goldMin: 90, goldMax: 150, xpReward: 200,
    description: "The crypt entrance teems with undead sentinels. Clear the way deeper inside.",
    loot: [
      { itemId: "shadow_essence",    chance: 0.20, qty: 1 },
      { itemId: "steel_armor",       chance: 0.12, qty: 1 },
      { itemId: "arcane_wand",       chance: 0.10, qty: 1 },
      { itemId: "shadow_cloak",      chance: 0.12, qty: 1 },
      { itemId: "enchanted_shield",  chance: 0.08, qty: 1 },
      { itemId: "ancient_medallion", chance: 0.05, qty: 1 },
    ]
  },
  {
    id: "necromancer_lair", name: "Necromancer's Lair", zone: "Shadowmere Depths",
    durationSec: 7200, difficulty: 5, goldMin: 150, goldMax: 250, xpReward: 350,
    description: "A powerful necromancer raises the dead in the depths. Only elite heroes survive.",
    loot: [
      { itemId: "shadow_essence",    chance: 0.35, qty: 2 },
      { itemId: "arcane_wand",       chance: 0.14, qty: 1 },
      { itemId: "shadow_blade",      chance: 0.10, qty: 1 },
      { itemId: "enchanted_shield",  chance: 0.12, qty: 1 },
      { itemId: "arcane_aegis",      chance: 0.08, qty: 1 },
      { itemId: "ancient_medallion", chance: 0.07, qty: 1 },
    ]
  },
  {
    id: "shadow_throne", name: "Shadow Throne", zone: "Shadowmere Depths",
    durationSec: 10800, difficulty: 5, goldMin: 200, goldMax: 350, xpReward: 500,
    description: "The throne of shadows itself. Legends are made — or ended — here.",
    loot: [
      { itemId: "shadow_essence",    chance: 0.50, qty: 2 },
      { itemId: "dragon_scale",      chance: 0.15, qty: 1 },
      { itemId: "shadow_blade",      chance: 0.12, qty: 1 },
      { itemId: "dragonscale_vest",  chance: 0.08, qty: 1 },
      { itemId: "champions_sword",   chance: 0.06, qty: 1 },
      { itemId: "ancient_medallion", chance: 0.10, qty: 1 },
    ]
  },
];

var ITEMS = [
  // ── Weapons ─────────────────────────────────────────────────────────────
  { id: "wooden_stick",    name: "Wooden Stick",     type: "weapon",    slot: "weapon",    atkBonus: 2,  defBonus: 0,  hpBonus: 0,  sellPrice: 5,   description: "A crude stick. Better than bare hands." },
  { id: "iron_sword",      name: "Iron Sword",        type: "weapon",    slot: "weapon",    atkBonus: 8,  defBonus: 0,  hpBonus: 0,  sellPrice: 30,  description: "A reliable iron blade, standard issue." },
  { id: "steel_blade",     name: "Steel Blade",       type: "weapon",    slot: "weapon",    atkBonus: 14, defBonus: 0,  hpBonus: 0,  sellPrice: 60,  description: "Forged from tempered steel. Holds a keen edge." },
  { id: "enchanted_bow",   name: "Enchanted Bow",     type: "weapon",    slot: "weapon",    atkBonus: 11, defBonus: 0,  hpBonus: 0,  sellPrice: 45,  description: "Its arrows never miss the mark." },
  { id: "apprentice_staff",name: "Apprentice Staff",  type: "weapon",    slot: "weapon",    atkBonus: 10, defBonus: 0,  hpBonus: 0,  sellPrice: 40,  description: "A staff for budding mages. Channels arcane energy." },
  { id: "battle_axe",      name: "Battle Axe",        type: "weapon",    slot: "weapon",    atkBonus: 16, defBonus: 0,  hpBonus: 0,  sellPrice: 70,  description: "Heavy and brutal. Leaves nothing standing." },
  { id: "elven_dagger",    name: "Elven Dagger",      type: "weapon",    slot: "weapon",    atkBonus: 9,  defBonus: 0,  hpBonus: 0,  sellPrice: 35,  description: "Lightweight elven craft. Fast strikes, lethal precision." },
  { id: "shadow_blade",    name: "Shadow Blade",      type: "weapon",    slot: "weapon",    atkBonus: 20, defBonus: 0,  hpBonus: 0,  sellPrice: 100, description: "Forged in the depths. Drinks the light." },
  { id: "arcane_wand",     name: "Arcane Wand",       type: "weapon",    slot: "weapon",    atkBonus: 18, defBonus: 0,  hpBonus: 0,  sellPrice: 90,  description: "Crackles with unstable arcane power." },
  { id: "champions_sword", name: "Champion's Sword",  type: "weapon",    slot: "weapon",    atkBonus: 25, defBonus: 0,  hpBonus: 0,  sellPrice: 200, description: "A legendary blade. Only true champions can wield it." },
  // ── Armor ────────────────────────────────────────────────────────────────
  { id: "leather_vest",    name: "Leather Vest",      type: "armor",     slot: "armor",     atkBonus: 0,  defBonus: 5,  hpBonus: 0,  sellPrice: 10,  description: "Tanned leather offering basic protection." },
  { id: "chainmail",       name: "Chainmail",         type: "armor",     slot: "armor",     atkBonus: 0,  defBonus: 10, hpBonus: 0,  sellPrice: 35,  description: "Interlocked iron rings. Solid mid-tier defense." },
  { id: "iron_plate",      name: "Iron Plate",        type: "armor",     slot: "armor",     atkBonus: 0,  defBonus: 15, hpBonus: 20, sellPrice: 65,  description: "Heavy iron plates. For those who endure." },
  { id: "mage_robes",      name: "Mage Robes",        type: "armor",     slot: "armor",     atkBonus: 0,  defBonus: 8,  hpBonus: 10, sellPrice: 40,  description: "Enchanted robes woven with protective sigils." },
  { id: "ranger_tunic",    name: "Ranger Tunic",      type: "armor",     slot: "armor",     atkBonus: 0,  defBonus: 7,  hpBonus: 0,  sellPrice: 30,  description: "Lightweight and flexible. Favored by scouts." },
  { id: "steel_armor",     name: "Steel Armor",       type: "armor",     slot: "armor",     atkBonus: 0,  defBonus: 18, hpBonus: 30, sellPrice: 90,  description: "Full steel plate. A wall of metal." },
  { id: "shadow_cloak",    name: "Shadow Cloak",      type: "armor",     slot: "armor",     atkBonus: 0,  defBonus: 12, hpBonus: 0,  sellPrice: 50,  description: "A cloak woven from shadows. Hard to see, harder to hit." },
  { id: "enchanted_shield",name: "Enchanted Shield",  type: "armor",     slot: "armor",     atkBonus: 0,  defBonus: 20, hpBonus: 0,  sellPrice: 80,  description: "Glows with protective runes." },
  { id: "dragonscale_vest",name: "Dragonscale Vest",  type: "armor",     slot: "armor",     atkBonus: 0,  defBonus: 25, hpBonus: 50, sellPrice: 180, description: "Crafted from a dragon's hide. Nearly impenetrable." },
  { id: "arcane_aegis",    name: "Arcane Aegis",      type: "armor",     slot: "armor",     atkBonus: 0,  defBonus: 22, hpBonus: 40, sellPrice: 150, description: "A magical barrier solidified into armor." },
  // ── Accessories ──────────────────────────────────────────────────────────
  { id: "silver_ring",     name: "Silver Ring",       type: "accessory", slot: "accessory", atkBonus: 3,  defBonus: 0,  hpBonus: 0,  sellPrice: 15,  description: "A simple silver band with a faint enchantment." },
  { id: "lucky_charm",     name: "Lucky Charm",       type: "accessory", slot: "accessory", atkBonus: 0,  defBonus: 0,  hpBonus: 15, sellPrice: 25,  description: "Fortune favors those who carry this charm." },
  { id: "speed_boots",     name: "Speed Boots",       type: "accessory", slot: "accessory", atkBonus: 0,  defBonus: 3,  hpBonus: 10, sellPrice: 30,  description: "Enchanted boots. Always one step ahead." },
  { id: "power_amulet",    name: "Power Amulet",      type: "accessory", slot: "accessory", atkBonus: 5,  defBonus: 3,  hpBonus: 0,  sellPrice: 40,  description: "A crackling amulet that amplifies fighting spirit." },
  { id: "ancient_medallion",name:"Ancient Medallion", type: "accessory", slot: "accessory", atkBonus: 8,  defBonus: 5,  hpBonus: 25, sellPrice: 120, description: "An ancient relic of immense power. Sought by all, found by few." },
  // ── Materials ────────────────────────────────────────────────────────────
  { id: "wolf_pelt",       name: "Wolf Pelt",         type: "material",  slot: null,        atkBonus: 0,  defBonus: 0,  hpBonus: 0,  sellPrice: 10,  description: "A thick pelt from a forest wolf. Useful for crafting." },
  { id: "goblin_ear",      name: "Goblin Ear",        type: "material",  slot: null,        atkBonus: 0,  defBonus: 0,  hpBonus: 0,  sellPrice: 8,   description: "Proof of a goblin slain. Some pay bounties for these." },
  { id: "iron_ore",        name: "Iron Ore",          type: "material",  slot: null,        atkBonus: 0,  defBonus: 0,  hpBonus: 0,  sellPrice: 15,  description: "Raw iron ore, ready for the forge." },
  { id: "shadow_essence",  name: "Shadow Essence",    type: "material",  slot: null,        atkBonus: 0,  defBonus: 0,  hpBonus: 0,  sellPrice: 40,  description: "A crystallized shard of pure darkness. Extremely rare." },
  { id: "dragon_scale",    name: "Dragon Scale",      type: "material",  slot: null,        atkBonus: 0,  defBonus: 0,  hpBonus: 0,  sellPrice: 80,  description: "A scale shed by a great dragon. Near indestructible." },
];

var RECIPES = [
  {
    id: "wolf_armor", name: "Hunter's Vest",
    description: "Two wolf pelts stitched into light armor.",
    resultItemId: "ranger_tunic", resultQty: 1,
    ingredients: [{ itemId: "wolf_pelt", qty: 2 }],
  },
  {
    id: "iron_blade", name: "Forged Iron Blade",
    description: "Ore smelted and hammered into a reliable sword.",
    resultItemId: "iron_sword", resultQty: 1,
    ingredients: [{ itemId: "iron_ore", qty: 3 }],
  },
  {
    id: "goblin_trophy", name: "Goblin Trophy Charm",
    description: "Three goblin ears enchanted into a lucky charm.",
    resultItemId: "lucky_charm", resultQty: 1,
    ingredients: [{ itemId: "goblin_ear", qty: 3 }],
  },
  {
    id: "steel_forging", name: "Tempered Steel Blade",
    description: "Ore forged with wolf-hide binding straps.",
    resultItemId: "steel_blade", resultQty: 1,
    ingredients: [
      { itemId: "iron_ore",  qty: 2 },
      { itemId: "wolf_pelt", qty: 1 },
    ],
  },
  {
    id: "shadow_robe", name: "Shadow Robe",
    description: "Woven from crystallized darkness.",
    resultItemId: "shadow_cloak", resultQty: 1,
    ingredients: [{ itemId: "shadow_essence", qty: 2 }],
  },
  {
    id: "arcane_focus", name: "Arcane Focus Staff",
    description: "An ore-tipped staff infused with shadow energy.",
    resultItemId: "arcane_wand", resultQty: 1,
    ingredients: [
      { itemId: "shadow_essence", qty: 1 },
      { itemId: "iron_ore",       qty: 2 },
    ],
  },
  {
    id: "dragonscale_armor", name: "Dragonscale Armor",
    description: "Dragon scales fused into near-impenetrable armor.",
    resultItemId: "dragonscale_vest", resultQty: 1,
    ingredients: [{ itemId: "dragon_scale", qty: 3 }],
  },
  {
    id: "shadow_champion", name: "Champion's Shadow Blade",
    description: "The ultimate craft — requires the rarest endgame materials.",
    resultItemId: "champions_sword", resultQty: 1,
    ingredients: [
      { itemId: "dragon_scale",   qty: 2 },
      { itemId: "shadow_essence", qty: 2 },
    ],
  },
];

var SHOP = [
  { itemId: "wooden_stick",     buyPrice: 20  },
  { itemId: "leather_vest",     buyPrice: 30  },
  { itemId: "silver_ring",      buyPrice: 40  },
  { itemId: "iron_sword",       buyPrice: 80  },
  { itemId: "chainmail",        buyPrice: 90  },
  { itemId: "lucky_charm",      buyPrice: 70  },
  { itemId: "ranger_tunic",     buyPrice: 85  },
  { itemId: "apprentice_staff", buyPrice: 95  },
  { itemId: "elven_dagger",     buyPrice: 100 },
  { itemId: "power_amulet",     buyPrice: 110 },
];
