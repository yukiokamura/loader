import { config } from "../Common/config.es6";
import { loadFonts, loadScript, loadImg } from "./Util/Loader.es6";
import { EasingFunctions } from "./Util/easing.es6";
const head = document.getElementsByTagName("head")[0];
const body = document.body;
const number = document.querySelector(".number");
const bar = document.querySelector(".bar");

let c = 0;
let time = 0;
let now = 0;
const MAX = config.libs.length + config.imgs.length + config.app.length + 1;
console.log(MAX);
const SPEED = 0.01;

function timeline() {
  render();
  const _flame = requestAnimationFrame(timeline);
  if (now > 0.999) {
    cancelAnimationFrame(_flame);
    gsap.timeline().add(e => {
      end();
    }, 1);
  }
}

function render() {
  const per = c / MAX;
  time += 1 / 60;
  const p = time;
  if (p <= 1) {
    now = EasingFunctions.easeOutQuad(p) * per;
  } else {
    if (per < 1) {
      time = 1;
    } else {
      time = now;
    }
  }

  number.innerHTML = zeroPadding(now);
  bar.style = `transform: scaleX(${now});`;

  // now = per
}

function counter() {
  ++c;
}

function zeroPadding(n) {
  const _n = new Number(n * 100).toFixed(0);

  return _n >= 10 ? _n : "0" + _n;
}

async function init() {
  await loadFonts(head, config.fonts);
  timeline();
  counter();
  body.classList.add("font-loaded");
  for (const script of config.libs) {
    await loadScript(head, script.src);
    counter();
  }
  for (const img of config.imgs) {
    await loadImg(img.src);
    counter();
  }
  await loadScript(head, config.app[0].src);
  counter();
}

function end() {
  gsap.to(".bar", 0.5, {
    scaleX: 0,
    transformOrigin: "100% 0",
    ease: "expo.in"
  });
  for (var i = 0; i < 10; i++) {
    gsap.set(".number", {
      opacity: i % 2,
      delay: i * 0.05
    });
  }
  gsap.set(".number", {
    opacity: 0,
    delay: 10 * 0.05,
    onComplete: e => {
      $(".loader").remove();
      loadedName();
      body.classList.add("loaded");
      $(window).trigger("customloaded");
    }
  });
}

function loadedName() {
  let p = `<p>${config.fonts}</p>`;
  config.imgs.map(e => {
    p += `<p>${e.src}</p>`;
  });
  config.libs.map(e => {
    p += `<p>${e.src}</p>`;
  });
  config.app.map(e => {
    p += `<p>${e.src}</p>`;
  });
  $(".loaded-resouses .inner").append(p);
}

init();

console.log(EasingFunctions);
