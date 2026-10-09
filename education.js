(function () {
  var P = (window.EDU_CONFIG || {}).products || [];
  var R = (window.EDU_CONFIG || {}).resources || {};
  var top = document.getElementById("featured"), grid = document.getElementById("grid");
  var GEM = '<svg viewBox="0 0 64 56" aria-hidden="true"><path d="M16 4h32l14 16-30 34L2 20z M2 20h60M22 20l10 34 10-34M16 4l6 16M48 4l-6 16M32 4l-10 16M32 4l10 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>';

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function cover(p) {
    if (p.cover) return '<img src="' + esc(p.cover) + '" alt="' + esc(p.name) + ' cover" loading="lazy">';
    return '<div class="cv"><span class="cv-g">' + GEM + '</span><small>Hidden Gem</small><b>' + esc(p.name) + '</b><i></i><small>' + esc(p.kind) + '</small></div>';
  }
  function btn(p) {
    return p.checkout
      ? '<a class="btn btn-mint" href="' + esc(p.checkout) + '" target="_blank" rel="noopener">' + esc(p.cta) + '</a>'
      : '<a class="btn btn-mint is-off" aria-disabled="true">' + esc(p.cta) + '<small>Checkout link coming soon</small></a>';
  }
  function card(p) {
    var big = p.tier !== "small", el = document.createElement("article");
    el.id = p.id; el.className = "card reveal" + (big ? " card-feat" : "") + (p.tier === "premium" ? " card-prem" : "");
    var res = (p.resources || []).filter(function (k) { return R[k]; });
    el.innerHTML =
      '<div class="book">' + cover(p) + '</div>' +
      '<div class="info"><span class="kind">' + esc(p.kind) + (p.badge ? ' <em class="badge">' + esc(p.badge) + '</em>' : '') + '</span>' +
      '<h3>' + esc(p.name) + '</h3><p class="tag-l">' + esc(p.tagline) + '</p><p class="bl">' + esc(p.blurb) + '</p>' +
      (p.includes ? '<p class="inc-t">Your mentorship includes</p><ul>' + p.includes.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join("") + '</ul>' : '') +
      (res.length ? '<details class="more"><summary>What each resource is</summary><dl>' + res.map(function (k) { return '<dt>' + esc(R[k].name) + '</dt><dd>' + esc(R[k].d) + '</dd>'; }).join("") + '</dl></details>' : '') +
      '<div class="buyrow"><div class="pr"><sup>$</sup>' + esc(p.price) + '</div>' + btn(p) + '</div></div>';
    return el;
  }
  var nav = document.getElementById("quick");
  P.forEach(function (p) {
    (p.tier === "small" ? grid : top).append(card(p));
    var a = document.createElement("a"); a.href = "#" + p.id; a.innerHTML = esc(p.name) + ' <b>$' + esc(p.price) + '</b>'; nav.append(a);
  });

  var io = "IntersectionObserver" in window && new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .1 });
  document.querySelectorAll(".reveal").forEach(function (e) { io ? io.observe(e) : e.classList.add("in"); });
  var RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* hero headline: word pop */
  var h1 = document.querySelector(".hero h1"), n = 0;
  (function wrap(node) {
    Array.prototype.slice.call(node.childNodes).forEach(function (c) {
      if (c.nodeType === 3) {
        var f = document.createDocumentFragment();
        c.textContent.split(/(\s+)/).forEach(function (t) {
          if (!t.trim()) { f.append(t); return; }
          var s = document.createElement("span"); s.className = "w"; s.textContent = t; s.style.animationDelay = (.15 + n++ * .12) + "s"; f.append(s);
        });
        node.replaceChild(f, c);
      } else if (c.nodeType === 1) wrap(c);
    });
  })(h1);

  /* hero: fanned floating covers */
  var fan = document.getElementById("fan"), rs = [-14, -5, 5, 14], ys = [24, 0, 0, 24];
  P.slice(0, 4).forEach(function (p, i) {
    var d = document.createElement("div"); d.className = "fc"; d.innerHTML = cover(p);
    d.style.cssText = "--r:" + rs[i] + "deg;--y:" + ys[i] + "px;--d:" + (.9 + i * .15) + "s";
    fan.append(d);
  });

  /* card tilt */
  if (!RM && matchMedia("(hover:hover)").matches) document.querySelectorAll(".card").forEach(function (c) {
    c.addEventListener("mousemove", function (e) {
      var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      c.style.transform = "perspective(900px) rotateY(" + x * 6 + "deg) rotateX(" + -y * 6 + "deg) translateY(-4px)";
    });
    c.addEventListener("mouseleave", function () { c.style.transform = ""; });
  });

  /* sparkle burst on buy buttons */
  document.addEventListener("pointerdown", function (e) {
    var b = e.target.closest(".btn-mint"); if (!b || RM) return;
    for (var i = 0; i < 14; i++) {
      var s = document.createElement("i"); s.className = "spark", a = Math.PI * 2 * i / 14, d = 50 + Math.random() * 50;
      s.style.left = e.clientX + "px"; s.style.top = e.clientY + "px";
      s.style.setProperty("--x", Math.cos(a) * d + "px"); s.style.setProperty("--y", Math.sin(a) * d + "px");
      document.body.append(s); setTimeout(function (el) { el.remove(); }.bind(null, s), 900);
    }
  });

  /* animated background: drifting gems + twinkles */
  var cv = document.getElementById("bg"), g = cv.getContext("2d"), W, H, items = [], mx = 0, sy = 0;
  function size() { var r = devicePixelRatio || 1; W = cv.width = innerWidth * r; H = cv.height = innerHeight * r; g.setTransform(r, 0, 0, r, 0, 0); W /= r; H /= r; }
  function mk(i) { return { x: Math.random() * innerWidth, y: Math.random() * innerHeight, s: 8 + Math.random() * 26, v: .15 + Math.random() * .5, rot: Math.random() * 6, rv: (Math.random() - .5) * .01, gem: i % 3 === 0, t: Math.random() * 6, z: .3 + Math.random() }; }
  function gemPath(s) { g.beginPath(); g.moveTo(-s, -s * .3); g.lineTo(-s * .55, -s * .8); g.lineTo(s * .55, -s * .8); g.lineTo(s, -s * .3); g.lineTo(0, s); g.closePath(); g.moveTo(-s, -s * .3); g.lineTo(s, -s * .3); g.moveTo(-s * .3, -s * .3); g.lineTo(0, s); g.lineTo(s * .3, -s * .3); }
  function frame(t) {
    g.clearRect(0, 0, W, H);
    items.forEach(function (o) {
      o.y -= o.v * o.z; o.rot += o.rv; if (o.y < -40) { o.y = H + 40; o.x = Math.random() * W; }
      var px = o.x + mx * 30 * o.z, py = o.y - sy * .08 * o.z, tw = .5 + .5 * Math.sin(t / 700 + o.t);
      g.save(); g.translate(px, py); g.globalAlpha = (o.gem ? .18 : .5) * (.4 + tw * .6) * o.z;
      g.strokeStyle = "#90E5D3"; g.fillStyle = "#90E5D3"; g.lineWidth = 1.2;
      if (o.gem) { g.rotate(o.rot); gemPath(o.s); g.stroke(); g.globalAlpha *= .25; g.fill(); }
      else { var s = o.s * .35 * (.6 + tw); g.beginPath(); g.moveTo(0, -s); g.quadraticCurveTo(0, 0, s, 0); g.quadraticCurveTo(0, 0, 0, s); g.quadraticCurveTo(0, 0, -s, 0); g.quadraticCurveTo(0, 0, 0, -s); g.fill(); }
      g.restore();
    });
    if (!RM) requestAnimationFrame(frame);
  }
  size(); for (var k = 0; k < (innerWidth < 700 ? 22 : 42); k++) items.push(mk(k));
  addEventListener("resize", size);
  addEventListener("scroll", function () { sy = scrollY; }, { passive: true });
  addEventListener("pointermove", function (e) { mx = e.clientX / innerWidth - .5; });
  requestAnimationFrame(frame);
})();
