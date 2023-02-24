let hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

setInterval(() => {
  let time = new Date();
  let h = time.getHours(),
    m = time.getMinutes(),
    s = time.getSeconds();

  sec.style.transform = `rotateZ(${s * 6}deg)`;
  //   sec.style.transition = "transform 1s";
  //   sec.style.transitionTimingFunction = "linear";
  min.style.transform = `rotateZ(${m * 6}deg)`;
  hr.style.transform = `rotateZ(${h * 30 + m / 12}deg)`;
}, 1000);
