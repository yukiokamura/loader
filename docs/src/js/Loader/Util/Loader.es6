export function loadFonts(head, path) {
  return new Promise((resolve, reject) => {
    const href = "https://fonts.googleapis.com/css" + path;
    const link = document.createElement("link");
    link.onload = e => {
      resolve();
    };
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", href);
    head.appendChild(link);
  });
}

export function loadScript(head, path) {
  return new Promise((resolve, reject) => {
    const src = path;
    const script = document.createElement("script");
    script.onload = e => {
      resolve();
    };
    script.setAttribute("src", src);
    head.appendChild(script);
  });
}

export function loadImg(path) {
  return new Promise((resolve, reject) => {
    const src = path;
    const img = new Image();
    img.onload = e => {
      resolve();
    };
    img.src = path;
  });
}
