let hr = document.querySelector('#hr');
let min= document.querySelector('#min');
let sec = document.querySelector('#sec');

setInterval(() => {
    let time = new Date();
    let h = time.getHours(),
        m = time.getMinutes(),
        s = time.getSeconds(),
        AMPM = (h < 12)? "AM" : "PM";

    sec.style.transform = `rotateZ(${s*6}deg)`;
    // sec.style.transition = "transform 1s";
    // sec.style.transitionTimingFunction = "linear";
    min.style.transform = `rotateZ(${m*6}deg)`;
    hr.style.transform = `rotateZ(${h*30 + m/12}deg)`;

    h = (h > 12)? h-12 : h;
    h = (h < 10)? "0" + h : h;
    m = (m < 10)? "0" + m : m;
    s = (s < 10)? "0" + s : s;

    document.querySelector('.ampm').innerText = AMPM;
    document.querySelector('.hr').innerHTML = h;
    document.querySelector('.min').innerHTML = m;
    document.querySelector('.sec').innerHTML = s;
}, 1000);