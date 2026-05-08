'use strict';

// ── Helpers ────────────────────────────────────────────────────────────────

function itemById(id) {
  return ITEMS.find(function(i) { return i.id === id; });
}

function formatDuration(sec) {
  if (sec < 3600) return (sec / 60) + ' min';
  var h = sec / 3600;
  return (Number.isInteger(h) ? h : h.toFixed(1)) + ' h';
}

function difficultyHTML(d) {
  var html = '<span class="diff-stars">';
  for (var i = 1; i <= 5; i++) {
    html += '<span class="' + (i <= d ? 'on' : 'off') + '">★</span>';
  }
  return html + '</span>';
}

function typeEmoji(type) {
  var map = { weapon: '⚔️', armor: '🛡️', accessory: '💍', material: '🪨' };
  return map[type] || '';
}

function statCell(val) {
  if (!val) return '<span class="stat-zero">—</span>';
  return '<span class="stat-plus">+' + val + '</span>';
}

function computeStats(heroClass, level) {
  var c = HEROES[heroClass];
  return {
    hp:  Math.floor(c.hpBase  + c.hpPerLevel  * (level - 1)),
    atk: Math.floor(c.atkBase + c.atkPerLevel * (level - 1)),
    def: Math.floor(c.defBase + c.defPerLevel * (level - 1)),
    spd: c.spd,
  };
}

function computePower(heroClass, level) {
  var s = computeStats(heroClass, level);
  return (s.atk * 2) + s.def + Math.floor(s.hp / 10);
}

function xpNeeded(level) {
  return Math.floor(100 * Math.pow(level, 1.5));
}

// ── Render: Missions ───────────────────────────────────────────────────────

function renderMissions() {
  var container = document.getElementById('missions-container');
  if (!container) return;

  var zones = {};
  var zoneOrder = [];
  MISSIONS.forEach(function(m) {
    if (!zones[m.zone]) { zones[m.zone] = []; zoneOrder.push(m.zone); }
    zones[m.zone].push(m);
  });

  var zoneEmoji = {
    'Whispering Forest': '🌲',
    'Ironstone Peaks':   '⛰️',
    'Shadowmere Depths': '💀',
  };
  var zoneTier = {
    'Whispering Forest': 'Beginner',
    'Ironstone Peaks':   'Intermediate',
    'Shadowmere Depths': 'Advanced',
  };

  var html = '<div class="table-wrap">';
  html += '<table class="wiki-table" style="border:none;">';
  html += '<thead><tr><th>Mission</th><th>Difficulty</th><th>Duration</th><th>Gold</th><th>XP</th></tr></thead>';
  html += '<tbody>';

  zoneOrder.forEach(function(zone) {
    var emoji = zoneEmoji[zone] || '🗺️';
    var tier = zoneTier[zone] || '';
    html += '<tr><td colspan="5" class="zone-header">' + emoji + ' ' + zone + ' <span style="color:var(--text-muted);font-size:0.7rem;font-weight:400;margin-left:6px;">— ' + tier + '</span></td></tr>';

    zones[zone].forEach(function(m) {
      html += '<tr class="mission-row" data-id="' + m.id + '">';
      html += '<td><div class="mission-name-main">' + m.name + '</div><div class="mission-desc-small">' + m.description + '</div></td>';
      html += '<td>' + difficultyHTML(m.difficulty) + '</td>';
      html += '<td style="white-space:nowrap">⏱ ' + formatDuration(m.durationSec) + '</td>';
      html += '<td style="white-space:nowrap">🪙 ' + m.goldMin + '–' + m.goldMax + '</td>';
      html += '<td style="white-space:nowrap">✨ ' + m.xpReward + '</td>';
      html += '</tr>';

      // Loot expansion row
      html += '<tr class="loot-row" id="loot-' + m.id + '">';
      html += '<td colspan="5"><div class="loot-inner">';
      html += '<h4>🎁 Loot Table — click row above to close</h4>';
      html += '<table class="loot-table"><thead><tr><th>Item</th><th>Type</th><th>Drop Chance</th><th>Qty</th></tr></thead><tbody>';

      var sortedLoot = m.loot.slice().sort(function(a, b) { return b.chance - a.chance; });
      sortedLoot.forEach(function(l) {
        var item = itemById(l.itemId);
        var name = item ? item.name : l.itemId;
        var type = item ? item.type : '';
        var pct = Math.round(l.chance * 100);
        html += '<tr>';
        html += '<td>' + typeEmoji(type) + ' ' + name + '</td>';
        html += '<td>' + (type ? '<span class="type-badge type-' + type + '">' + type + '</span>' : '') + '</td>';
        html += '<td><div class="chance-bar-wrap"><div class="chance-bar"><div class="chance-bar-fill" style="width:' + Math.min(pct, 100) + '%"></div></div><span class="chance-pct">' + pct + '%</span></div></td>';
        html += '<td>×' + l.qty + '</td>';
        html += '</tr>';
      });

      html += '</tbody></table></div></td></tr>';
    });
  });

  html += '</tbody></table></div>';
  container.innerHTML = html;

  // Click handlers
  container.querySelectorAll('.mission-row').forEach(function(row) {
    row.addEventListener('click', function() {
      var id = row.dataset.id;
      var lootRow = document.getElementById('loot-' + id);
      var isOpen = lootRow.classList.contains('open');

      // Close all
      container.querySelectorAll('.loot-row').forEach(function(r) { r.classList.remove('open'); });
      container.querySelectorAll('.mission-row').forEach(function(r) { r.classList.remove('expanded'); });

      if (!isOpen) {
        lootRow.classList.add('open');
        row.classList.add('expanded');
      }
    });
  });
}

// ── Render: Items ──────────────────────────────────────────────────────────

function renderItems() {
  var tableContainer = document.getElementById('items-table-container');
  if (!tableContainer) return;

  function buildTable(filter) {
    var list = filter === 'all' ? ITEMS : ITEMS.filter(function(i) { return i.type === filter; });
    if (!list.length) return '<p style="color:var(--text-muted);padding:20px">No items found.</p>';

    var html = '<div class="table-wrap"><table class="wiki-table">';
    html += '<thead><tr><th>Item</th><th>Type</th><th>Slot</th><th>ATK+</th><th>DEF+</th><th>HP+</th><th>Sell 🪙</th><th>Description</th></tr></thead><tbody>';

    list.forEach(function(item) {
      html += '<tr>';
      html += '<td style="font-weight:600;color:#fff;white-space:nowrap">' + typeEmoji(item.type) + ' ' + item.name + '</td>';
      html += '<td><span class="type-badge type-' + item.type + '">' + item.type + '</span></td>';
      html += '<td style="color:var(--text-muted)">' + (item.slot || '—') + '</td>';
      html += '<td>' + statCell(item.atkBonus) + '</td>';
      html += '<td>' + statCell(item.defBonus) + '</td>';
      html += '<td>' + statCell(item.hpBonus) + '</td>';
      html += '<td style="color:var(--gold);font-weight:600">' + (item.sellPrice || '—') + '</td>';
      html += '<td class="item-desc">' + item.description + '</td>';
      html += '</tr>';
    });

    html += '</tbody></table></div>';
    return html;
  }

  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      tableContainer.innerHTML = buildTable(btn.dataset.filter);
    });
  });

  tableContainer.innerHTML = buildTable('all');
}

// ── Render: Crafting ───────────────────────────────────────────────────────

function renderCrafting() {
  var container = document.getElementById('crafting-container');
  if (!container) return;

  var html = '<div class="table-wrap"><table class="wiki-table">';
  html += '<thead><tr><th>Recipe</th><th>Ingredients</th><th></th><th>Result</th><th>Qty</th><th>Description</th></tr></thead><tbody>';

  RECIPES.forEach(function(r) {
    var result = itemById(r.resultItemId);
    var resultName = result ? result.name : r.resultItemId;
    var resultType = result ? result.type : '';

    var ingredients = r.ingredients.map(function(ing) {
      var it = itemById(ing.itemId);
      return '<span class="ingredient-chip"><strong>' + ing.qty + '×</strong> ' + (it ? it.name : ing.itemId) + '</span>';
    }).join('');

    html += '<tr>';
    html += '<td style="font-weight:600;color:#fff;white-space:nowrap">' + r.name + '</td>';
    html += '<td><div class="ingredients-list">' + ingredients + '</div></td>';
    html += '<td class="arrow-cell">→</td>';
    html += '<td class="result-item">' + typeEmoji(resultType) + ' ' + resultName + '</td>';
    html += '<td style="color:var(--text-muted)">×' + r.resultQty + '</td>';
    html += '<td class="item-desc">' + (r.description || '') + '</td>';
    html += '</tr>';
  });

  html += '</tbody></table></div>';
  container.innerHTML = html;
}

// ── Render: Shop ───────────────────────────────────────────────────────────

function renderShop() {
  var container = document.getElementById('shop-container');
  if (!container) return;

  var html = '<div class="table-wrap"><table class="wiki-table">';
  html += '<thead><tr><th>Item</th><th>Type</th><th>ATK+</th><th>DEF+</th><th>HP+</th><th>Buy 🪙</th><th>Sell 🪙</th></tr></thead><tbody>';

  SHOP.forEach(function(entry) {
    var item = itemById(entry.itemId);
    if (!item) return;
    html += '<tr>';
    html += '<td style="font-weight:600;color:#fff;white-space:nowrap">' + typeEmoji(item.type) + ' ' + item.name + '</td>';
    html += '<td><span class="type-badge type-' + item.type + '">' + item.type + '</span></td>';
    html += '<td>' + statCell(item.atkBonus) + '</td>';
    html += '<td>' + statCell(item.defBonus) + '</td>';
    html += '<td>' + statCell(item.hpBonus) + '</td>';
    html += '<td class="price-buy">' + entry.buyPrice + '</td>';
    html += '<td class="price-sell">' + (item.sellPrice || '—') + '</td>';
    html += '</tr>';
  });

  html += '</tbody></table></div>';
  container.innerHTML = html;
}

// ── Hero Calculator ────────────────────────────────────────────────────────

function setupCalculator() {
  var selectedClass = 'warrior';
  var selectedLevel = 1;

  var levelSlider = document.getElementById('calc-level-slider');
  var levelInput  = document.getElementById('calc-level-input');
  var classBtns   = document.querySelectorAll('.class-btn');

  function update() {
    var s = computeStats(selectedClass, selectedLevel);
    var power = computePower(selectedClass, selectedLevel);
    var xp = xpNeeded(selectedLevel);

    document.getElementById('stat-hp').textContent  = s.hp;
    document.getElementById('stat-atk').textContent = s.atk;
    document.getElementById('stat-def').textContent = s.def;
    document.getElementById('stat-spd').textContent = s.spd;
    document.getElementById('stat-pow').textContent = power;
    document.getElementById('stat-xp').textContent  = xp.toLocaleString() + ' XP';
  }

  classBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      classBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      selectedClass = btn.dataset.class;
      update();
    });
  });

  levelSlider.addEventListener('input', function() {
    selectedLevel = parseInt(this.value, 10);
    levelInput.value = selectedLevel;
    update();
  });

  levelInput.addEventListener('input', function() {
    var v = parseInt(this.value, 10);
    if (isNaN(v) || v < 1) v = 1;
    if (v > 50) v = 50;
    selectedLevel = v;
    levelSlider.value = v;
    update();
  });

  update();
}

// ── XP Table ───────────────────────────────────────────────────────────────

function renderXpTable() {
  var container = document.getElementById('xp-table-container');
  if (!container) return;

  var levels = [1, 2, 3, 5, 8, 10, 15, 20, 30, 50];
  var html = '<div class="table-wrap" style="max-width:420px"><table class="wiki-table">';
  html += '<thead><tr><th>Level</th><th>XP to next level</th></tr></thead><tbody>';

  levels.forEach(function(lvl) {
    var xp = xpNeeded(lvl);
    html += '<tr><td style="font-weight:600">Lv ' + lvl + '</td><td style="color:var(--gold)">' + xp.toLocaleString() + '</td></tr>';
  });

  html += '</tbody></table></div>';
  container.innerHTML = html;
}

// ── Sticky Nav Active State ────────────────────────────────────────────────

function setupNavHighlight() {
  var sections = document.querySelectorAll('section[id]');
  var navLinks  = document.querySelectorAll('.nav-tab');

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id;
        navLinks.forEach(function(link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(function(s) { observer.observe(s); });
}

// ── Init ──────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  renderMissions();
  renderItems();
  renderCrafting();
  renderShop();
  renderXpTable();
  setupCalculator();
  setupNavHighlight();
});
