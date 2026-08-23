/**
 * #HandaSharmaGaya — render + interaction layer.
 * Reads WEDDING from data.js. No content strings live in this file.
 */
(function(){
  "use strict";

  /* ---------------- crest (SVG monogram, reused as component) ---------------- */

  function crestFull(){
    return `
    <svg viewBox="0 0 100 100" class="crest-hero" aria-hidden="true">
      <path id="crestArc" d="M18,46 A32,32 0 0 1 82,46" fill="none" stroke="none"/>
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="0.6" opacity="0.85"/>
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.55"/>
      <text font-family="'Cormorant Garamond',serif" font-size="6.4" letter-spacing="3" fill="currentColor" opacity="0.85">
        <textPath href="#crestArc" startOffset="50%" text-anchor="middle">HANDA &#183; SHARMA</textPath>
      </text>
      <g opacity="0.8" stroke="currentColor" stroke-width="0.7" fill="none" stroke-linecap="round">
        <path d="M14,50 C14,44 18,40 22,39 C21,44 18,48 14,50 Z"/>
        <path d="M86,50 C86,44 82,40 78,39 C79,44 82,48 86,50 Z"/>
        <path d="M14,50 C14,56 18,60 22,61 C21,56 18,52 14,50 Z"/>
        <path d="M86,50 C86,56 82,60 78,61 C79,56 82,52 86,50 Z"/>
      </g>
      <text x="50" y="61" font-family="'Cormorant Garamond',serif" font-style="italic" font-weight="500"
        font-size="40" fill="currentColor" text-anchor="middle">PT</text>
      <g stroke="currentColor" stroke-width="0.7" fill="none" opacity="0.75" stroke-linecap="round" stroke-linejoin="round">
        <path d="M30,74 L40,64 L47,71 L58,58 L70,74"/>
      </g>
    </svg>`;
  }

  function crestMark(){
    return `
    <svg viewBox="0 0 100 100" class="crest-mark" aria-hidden="true">
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="1" opacity="0.9"/>
      <circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.5"/>
      <text x="50" y="61" font-family="'Cormorant Garamond',serif" font-style="italic" font-weight="500"
        font-size="40" fill="currentColor" text-anchor="middle">PT</text>
    </svg>`;
  }

  function chevron(){
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;
  }

  function diamond(){
    return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L18 12 L12 22 L6 12 Z"/></svg>`;
  }

  /* ---------------- panel builders ---------------- */

  function panelTop(label){
    return `<div class="panel-top">
      <div class="crest">${crestMark()}</div>
      <span class="eyebrow">${label}</span>
    </div>`;
  }

  function nextCue(text){
    return `<div class="next-cue">${chevron()}<span>${text}</span></div>`;
  }

  function buildHero(){
    const el = document.getElementById('panel-hero');
    const w = WEDDING.couple, v = WEDDING.venue, d = WEDDING.dates, h = WEDDING.hero;
    el.querySelector('.panel-media img').src = h.image;
    el.querySelector('.hero-body').innerHTML = `
      <div class="crest hero-crest-wrap reveal">${crestFull()}</div>
      <div class="hero-hashtag script reveal">${w.hashtag}</div>
      <div class="hero-names reveal">
        <span class="display display-md">${w.partner1}</span>
        <span class="amp">&amp;</span>
        <span class="display display-md">${w.partner2}</span>
      </div>
      <div class="rule tight reveal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L18 12 L12 22 L6 12 Z"/></svg></div>
      <div class="hero-place reveal">
        <span class="name script">${v.name}</span>
        <span class="loc">${v.place}</span>
        <span class="loc" style="margin-top:6px;opacity:.8">${d.display}</span>
      </div>
      <p class="hero-tagline reveal">${h.tagline}</p>
    `;
    el.insertAdjacentHTML('beforeend', nextCue('Our weekend'));
  }

  function buildHome(){
    const el = document.getElementById('panel-home');
    const home = WEDDING.home, v = WEDDING.venue;
    el.querySelector('.frame-a img').setAttribute('data-src', home.images.primary);
    el.querySelector('.frame-b img').setAttribute('data-src', home.images.secondary);
    el.insertAdjacentHTML('afterbegin', panelTop('Weekend guide'));
    el.querySelector('.panel-content').innerHTML = `
      <span class="eyebrow reveal">${home.eyebrow}</span>
      <h2 class="display display-lg reveal">${v.name}</h2>
      <span class="meta reveal">${v.place}</span>
      <div class="rule tight reveal">${diamond()}</div>
      <p class="copy reveal">${home.line}</p>
    `;
    el.insertAdjacentHTML('beforeend', nextCue('The events'));
  }

  function eventPanel(ev, idx, total){
    const imgPrimary = ev.images.primary;
    const mood = ev.dressMood
      ? `<div class="event-mood-label reveal">Dress mood</div><div class="event-mood-value reveal">${ev.dressMood}</div>`
      : '';
    const petals = (ev.theme === 'mehndi' || ev.theme === 'haldi')
      ? `<div class="petals" aria-hidden="true">${petalMarkup(ev.theme)}</div>` : '';
    const shimmer = ev.theme === 'engagement' ? `<div class="shimmer" aria-hidden="true"></div>` : '';

    return `
    <section class="panel panel-${ev.theme}" id="panel-${ev.id}" data-index="${idx}">
      <div class="panel-media"><img data-src="${imgPrimary}" alt="" loading="lazy"/></div>
      <div class="panel-grade"></div>
      ${shimmer}
      ${petals}
      ${panelTop(`${ev.day} &middot; ${ev.date}`)}
      <div class="event-frame reveal">
        <img data-src="${ev.images.secondary}" alt="" loading="lazy"/>
      </div>
      <div class="panel-content">
        <div class="event-day reveal">${ev.day}</div>
        <div class="event-date reveal">${ev.date}</div>
        <h2 class="event-name reveal">${ev.name}</h2>
        <div class="event-time reveal">${ev.time}</div>
        ${mood}
      </div>
      ${idx < total - 1 ? nextCue('Next') : ''}
    </section>`;
  }

  function petalMarkup(theme){
    const n = 5;
    let out = '';
    for(let i=0;i<n;i++){
      const left = (8 + i*19 + (i%2?4:0));
      const delay = (i*1.7).toFixed(1);
      const dur = (9 + i*1.6).toFixed(1);
      out += `<span class="petal" style="left:${left}%;animation-duration:${dur}s;animation-delay:-${delay}s"></span>`;
    }
    return out;
  }

  function buildEvents(){
    const wrap = document.getElementById('events-wrap');
    const html = WEDDING.events.map((ev,i)=>eventPanel(ev,i,WEDDING.events.length)).join('');
    wrap.innerHTML = html;
  }

  function buildTravel(){
    const el = document.getElementById('panel-travel');
    const t = WEDDING.travel;
    el.querySelector('.panel-media img').setAttribute('data-src', t.image);
    el.insertAdjacentHTML('afterbegin', panelTop('Getting there'));

    const rows = t.byRoad.map(r => `
      <div class="travel-row"><span class="from">${r.from}</span><span class="time">${r.time}</span></div>
    `).join('');

    el.querySelector('.travel-body').innerHTML = `
      <h2 class="display display-lg reveal">On the road</h2>
      <div class="travel-rows reveal" style="margin-top:14px">${rows}</div>

      <div class="travel-block reveal">
        <h3>By air</h3>
        <p>${t.byAir.airport}<br>${t.byAir.distance} &middot; ${t.byAir.duration}</p>
      </div>
      <div class="travel-block reveal">
        <h3>By train</h3>
        <p>${t.byTrain.station}<br>${t.byTrain.duration}</p>
      </div>

      <div class="travel-note reveal"><p>${t.note}</p></div>
    `;
    el.insertAdjacentHTML('beforeend', nextCue('RSVP'));
  }

  function buildRsvp(){
    const el = document.getElementById('panel-rsvp');
    const r = WEDDING.rsvp;
    el.insertAdjacentHTML('afterbegin', panelTop('RSVP'));
    el.querySelector('.rsvp-body').innerHTML = `
      <h2 class="display display-lg reveal">Kindly respond</h2>
      <div class="rsvp-deadline reveal">
        <span class="meta">By</span>
        <span class="script" style="font-size:1.6rem">${r.deadlineDisplay}</span>
      </div>

      <div class="rsvp-block reveal">
        <span class="label">RSVP</span>
        <span class="rsvp-cta">${r.linkLabel}</span>
      </div>
      <div class="rsvp-block reveal">
        <span class="label">Wedding concierge</span>
        <span class="rsvp-placeholder">${r.conciergeLabel}</span>
      </div>

      <div class="rule tight reveal" style="margin-top:6px">${diamond()}</div>
      <p class="copy reveal" style="max-width:none">${WEDDING.couple.hashtag}</p>
    `;
  }

  /* ---------------- scroll intelligence ---------------- */

  function initObservers(){
    const panels = Array.from(document.querySelectorAll('.panel'));
    const segments = Array.from(document.querySelectorAll('.progress i'));

    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        const idx = panels.indexOf(entry.target);
        if(entry.isIntersecting && entry.intersectionRatio > 0.55){
          entry.target.classList.add('is-active');
          segments.forEach((s,i)=>{
            s.classList.toggle('now', i===idx);
            s.classList.toggle('done', i<idx);
          });
        } else {
          entry.target.classList.remove('is-active');
        }
      });
    }, { threshold:[0,0.55,1] });

    panels.forEach(p=>io.observe(p));

    // lazy-load: hydrate data-src as each panel approaches viewport
    const lazyIo = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.querySelectorAll('img[data-src]').forEach(img=>{
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
          });
        }
      });
    }, { rootMargin:'100% 0px 100% 0px' });
    panels.forEach(p=>lazyIo.observe(p));

    // click-to-jump on progress segments
    segments.forEach((s,i)=>{
      s.style.pointerEvents = 'auto';
      s.style.cursor = 'pointer';
      s.addEventListener('click', ()=> panels[i].scrollIntoView({behavior:'smooth'}));
    });

    if(panels[0]) panels[0].classList.add('is-active');
  }

  /* ---------------- boot ---------------- */

  function buildProgress(){
    const total = 2 + WEDDING.events.length + 2; // hero, home, events..., travel, rsvp
    const bar = document.getElementById('progress-bar');
    bar.innerHTML = Array.from({length: total}).map(()=>'<i></i>').join('');
  }

  document.addEventListener('DOMContentLoaded', function(){
    buildProgress();
    buildHero();
    buildHome();
    buildEvents();
    buildTravel();
    buildRsvp();
    initObservers();
  });
})();
