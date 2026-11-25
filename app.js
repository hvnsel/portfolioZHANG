/* Tabs, project picker, and automatic <img> → <video> upgrade. */

(function () {
  'use strict';

  var VIDEO = /\.(mp4|webm|ogv|m4v|mov)(\?.*)?$/i;

  /* Any media written as <img src="clip.mp4"> becomes a looping video,
     so the same tag works for a png, a gif, or a video file. */
  function upgradeVideos() {
    var imgs = document.querySelectorAll('.media img');
    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      if (!VIDEO.test(img.getAttribute('src') || '')) continue;

      var v = document.createElement('video');
      v.src = img.getAttribute('src');
      v.autoplay = true;
      v.loop = true;
      v.muted = true;
      v.playsInline = true;
      v.controls = true;
      v.setAttribute('muted', '');
      v.setAttribute('playsinline', '');
      if (img.getAttribute('alt')) v.setAttribute('aria-label', img.getAttribute('alt'));
      img.parentNode.replaceChild(v, img);
    }
  }

  /* --- tabs --- */

  var TABS = ['about', 'research', 'cv'];
  var links = document.querySelectorAll('.tabs a');

  function showTab(name) {
    if (TABS.indexOf(name) === -1) name = 'about';
    for (var i = 0; i < TABS.length; i++) {
      var panel = document.getElementById('panel-' + TABS[i]);
      if (panel) panel.hidden = TABS[i] !== name;
    }
    for (var j = 0; j < links.length; j++) {
      var on = links[j].getAttribute('data-tab') === name;
      links[j].classList.toggle('active', on);
      if (on) { links[j].setAttribute('aria-current', 'page'); }
      else { links[j].removeAttribute('aria-current'); }
    }
  }

  function fromHash() {
    showTab((location.hash || '#about').slice(1));
  }

  window.addEventListener('hashchange', function () {
    fromHash();
    window.scrollTo(0, 0);
  });

  /* --- project picker --- */

  var select = document.getElementById('project-select');

  function showProject(id) {
    var projects = document.querySelectorAll('.project');
    for (var i = 0; i < projects.length; i++) {
      projects[i].hidden = projects[i].id !== id;
    }
  }

  if (select) {
    select.addEventListener('change', function () {
      showProject(select.value);
      var picker = select.closest ? select.closest('.picker') : null;
      if (picker && picker.getBoundingClientRect().top < 0) picker.scrollIntoView(true);
    });
    showProject(select.value);
  }

  /* --- video pairs: start together, and replay on demand --- */

  function restartPair(pairEl) {
    var vids = pairEl.querySelectorAll('video');
    for (var i = 0; i < vids.length; i++) {
      try { vids[i].currentTime = 0; } catch (e) {}
    }
    for (var j = 0; j < vids.length; j++) {
      var p = vids[j].play();
      if (p && p.catch) p.catch(function () {});
    }
  }

  var replays = document.querySelectorAll('.replay');
  for (var r = 0; r < replays.length; r++) {
    replays[r].addEventListener('click', function (ev) {
      var pairEl = ev.target.closest('.pair');
      if (pairEl) restartPair(pairEl);
    });
  }

  /* once both clips of a pair can play, line them up on the same frame */
  var pairs = document.querySelectorAll('.pair');
  for (var q = 0; q < pairs.length; q++) {
    (function (pairEl) {
      var vids = pairEl.querySelectorAll('video');
      var ready = 0;
      for (var k = 0; k < vids.length; k++) {
        vids[k].addEventListener('loadeddata', function () {
          if (++ready === vids.length) restartPair(pairEl);
        });
      }
    })(pairs[q]);
  }

  upgradeVideos();
  fromHash();
})();
