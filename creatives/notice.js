/* "Portfolio Under Construction" notice for the Creatives pages — a copy of the main portfolio's
   notice (same look, same panel), pointing back to the previous portfolio.
   Include on any page under /creatives/ with: <script src="(relative path)/notice.js" defer></script> */
(function () {
  var me = document.currentScript || document.querySelector('script[src$="notice.js"]');
  var ROOT = new URL('../', me.src).href;   // the previous (main) portfolio
  var DECK = 'https://docs.google.com/presentation/d/1H1xydUEJzwq0EE1MfHpOYOw2Ds_JTVdIXon6wDATrdE/edit?slide=id.g2cf5203a1cb_0_84#slide=id.g2cf5203a1cb_0_84';

  /* same fonts as the main portfolio's notice */
  [['https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@400;500;600&display=swap'],
   ['https://fonts.cdnfonts.com/css/phonk']].forEach(function (f) {
    if (document.querySelector('link[href="' + f[0] + '"]')) return;
    var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = f[0]; document.head.appendChild(l);
  });

  var M = "'Azeret Mono',ui-monospace,monospace", D = "'Phonk','Impact',sans-serif";
  var css = [
    '#uc-notice{position:fixed;top:10px;left:50%;z-index:9000;font-family:' + M + ';line-height:1.3;',
    'display:flex;flex-direction:column;align-items:center;gap:8px;transform:translateX(-50%);animation:ucDrop .6s cubic-bezier(.2,.9,.25,1.05) .5s both}',
    '@keyframes ucDrop{from{transform:translateX(-50%) translateY(-140%);opacity:0}to{transform:translateX(-50%) translateY(0);opacity:1}}',
    '#uc-notice .uc-old-link{font-size:10.5px;letter-spacing:.04em;color:rgba(20,20,18,.5);white-space:nowrap;',
    'background:rgba(255,255,255,.93);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);padding:5px 12px;border-radius:100px;box-shadow:0 4px 14px rgba(0,0,0,.08)}',
    '#uc-notice .uc-old-link a{color:#141412;font-weight:600;text-decoration:underline;text-underline-offset:2px}',
    '#uc-notice .uc-old-link a:hover{color:#c8a020}',
    '#uc-notice .uc-pill{display:flex;align-items:center;gap:10px;background:rgba(28,28,30,.72);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:10px 18px;',
    'font-family:' + M + ';font-size:11px;letter-spacing:.06em;color:#f2f2f0;cursor:pointer;white-space:nowrap;',
    'box-shadow:0 10px 30px rgba(0,0,0,.35),0 1px 0 rgba(255,255,255,.06) inset;transition:background .2s;',
    'backdrop-filter:blur(24px) saturate(180%);-webkit-backdrop-filter:blur(24px) saturate(180%)}',
    '#uc-notice .uc-pill:hover{background:rgba(38,38,40,.78)}',
    '#uc-notice .uc-dot{width:7px;height:7px;border-radius:50%;background:#f5c518;flex:0 0 auto;box-shadow:0 0 0 0 rgba(245,197,24,.5);animation:ucPulse 2.2s infinite}',
    '@keyframes ucPulse{0%{box-shadow:0 0 0 0 rgba(245,197,24,.45)}70%{box-shadow:0 0 0 7px rgba(245,197,24,0)}100%{box-shadow:0 0 0 0 rgba(245,197,24,0)}}',
    '#uc-notice .uc-panel{position:absolute;top:calc(100% + 10px);left:50%;width:320px;max-width:calc(100vw - 48px);background:#141412;',
    'border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:26px 22px 22px;box-shadow:0 24px 60px rgba(0,0,0,.45);opacity:0;pointer-events:none;',
    'transform:translateX(-50%) translateY(-8px);transition:opacity .25s ease,transform .25s ease;text-align:left}',
    '#uc-notice .uc-panel.show{opacity:1;pointer-events:auto;transform:translateX(-50%) translateY(0)}',
    '#uc-notice .uc-close{position:absolute;top:12px;right:12px;width:26px;height:26px;border-radius:50%;border:none;background:rgba(255,255,255,.08);color:#d4d4cc;font-size:16px;line-height:1;cursor:pointer;transition:background .2s}',
    '#uc-notice .uc-close:hover{background:rgba(255,255,255,.16)}',
    '#uc-notice .uc-title{font-family:' + D + ';font-size:19px;font-weight:400;letter-spacing:.02em;color:#f0f0e8;text-transform:uppercase;margin:0 26px 12px 0;line-height:1.1}',
    '#uc-notice .uc-text{font-family:' + M + ';font-size:11.5px;line-height:1.65;color:#b4b4ac;margin:0 0 11px}',
    '#uc-notice .uc-text strong{color:#e8e8e0;font-weight:500}',
    '#uc-notice .uc-link{color:#c8c060;text-decoration:underline;text-underline-offset:3px;font-weight:500}',
    '#uc-notice .uc-link:hover{color:#e0d878}',
    '#uc-notice .uc-actions{display:flex;gap:8px;justify-content:flex-start;margin:16px 0 0;flex-wrap:wrap}',
    '#uc-notice .uc-btn{font-family:' + M + ';font-size:10px;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:#d4d4cc;',
    'border:1px solid rgba(255,255,255,.16);border-radius:7px;padding:9px 14px;transition:all .2s}',
    '#uc-notice .uc-btn:hover{border-color:#c8c060;color:#f0f0e8}',
    '#uc-notice .uc-wa{background:#25543f;border-color:#2e6b4f;color:#eaf5ef}',
    '#uc-notice .uc-wa:hover{background:#2e6b4f;border-color:#3a8563}',
    /* narrower screens: the Creatives nav spans the top, so the notice sits at the bottom instead */
    '@media (max-width:899px){#uc-notice{top:auto;bottom:12px;flex-direction:column-reverse;animation-name:ucRise}',
    '#uc-notice .uc-panel{top:auto;bottom:calc(100% + 10px);transform:translateX(-50%) translateY(8px)}',
    '@keyframes ucRise{from{transform:translateX(-50%) translateY(140%);opacity:0}to{transform:translateX(-50%) translateY(0);opacity:1}}}',
    '@media (max-width:520px){#uc-notice .uc-pill{font-size:9px;padding:9px 14px}#uc-notice .uc-old-link{font-size:9.5px;padding:5px 10px}',
    '#uc-notice .uc-panel{width:min(320px,calc(100vw - 28px))}}',
    '@media (prefers-reduced-motion:reduce){#uc-notice,#uc-notice .uc-dot{animation:none}}'
  ].join('');
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var box = document.createElement('div');
  box.id = 'uc-notice';
  box.innerHTML =
    '<button class="uc-pill" type="button" aria-expanded="false" aria-controls="uc-panel"><span class="uc-dot"></span>Portfolio Under Construction</button>' +
    '<div class="uc-old-link">Looking for the old one? <a href="' + ROOT + '">Link here &rarr;</a> &middot; <a href="' + DECK + '" target="_blank" rel="noopener">Portfolio 2024 &rarr;</a></div>' +
    '<div id="uc-panel" class="uc-panel" role="dialog" aria-label="Portfolio in progress">' +
      '<button class="uc-close" type="button" aria-label="Close">&times;</button>' +
      '<h2 class="uc-title">Portfolio in Progress</h2>' +
      '<p class="uc-text">Not all material has been uploaded yet — feel free to browse what’s available below.</p>' +
      '<p class="uc-text">Browse my <a class="uc-link" href="' + ROOT + '">previous portfolio</a> or the <a class="uc-link" href="' + DECK + '" target="_blank" rel="noopener">2024 deck</a>, or looking for a <strong>specific piece</strong>? Reach out and I’ll gladly share it with you directly.</p>' +
      '<div class="uc-actions">' +
        '<a class="uc-btn uc-wa" href="https://wa.me/639274185581" target="_blank" rel="noopener">WhatsApp</a>' +
        '<a class="uc-btn" href="mailto:dominicgarcia.creative@gmail.com">Email</a>' +
        '<a class="uc-btn" href="tel:+639274185581">Call</a>' +
      '</div>' +
    '</div>';

  function mount() {
    document.body.appendChild(box);
    var pill = box.querySelector('.uc-pill'), panel = box.querySelector('.uc-panel');
    function set(open) { panel.classList.toggle('show', open); pill.setAttribute('aria-expanded', open ? 'true' : 'false'); }
    pill.addEventListener('click', function () { set(!panel.classList.contains('show')); });
    box.querySelector('.uc-close').addEventListener('click', function () { set(false); });
    document.addEventListener('click', function (e) { if (panel.classList.contains('show') && !box.contains(e.target)) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && panel.classList.contains('show')) { set(false); e.stopPropagation(); } }, true);

    /* footer: add "Previous portfolio →" next to "More work? Portfolio 2024 →" */
    var row = document.querySelector('.footer-row');
    if (row && !row.querySelector('.uc-foot')) {
      var deck = row.querySelector('a[href*="docs.google.com"]');
      var span = document.createElement('span');
      span.className = 'uc-foot';
      span.style.cssText = 'display:inline-flex;gap:18px;flex-wrap:wrap';
      span.innerHTML = '<a href="' + ROOT + '">Previous portfolio &rarr;</a>';
      if (deck) { deck.parentNode.insertBefore(span, deck); span.appendChild(deck); } else row.appendChild(span);
    }
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
