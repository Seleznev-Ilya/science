document.getElementById('left__b').onclick = leftClick;
document.getElementById('center__b').onclick = centerClick;
document.getElementById('right__b').onclick = rightClick;
var radio_l = document.getElementById('left__b');
var radio_c = document.getElementById('center__b');
var radio_r = document.getElementById('right__b');

function leftClick() {
    var slider = document.getElementById('slider__area');
    slider.style.left = 0 + 'px';
    radio_l.style.backgroundColor = 'orange';
    radio_c.style.backgroundColor = 'white';
    radio_r.style.backgroundColor = 'white';
}
function centerClick() {
    var slider = document.getElementById('slider__area');
    slider.style.left = -1445.5 + 'px';
    radio_l.style.backgroundColor = 'white';
    radio_c.style.backgroundColor = 'orange';
    radio_r.style.backgroundColor = 'white';
}
function rightClick() {
    var slider = document.getElementById('slider__area');
    slider.style.left = -2891 + 'px';
    radio_l.style.backgroundColor = 'white';
    radio_c.style.backgroundColor = 'white';
    radio_r.style.backgroundColor = 'orange';
}
leftClick();
setTimeout(centerClick, 2000);
