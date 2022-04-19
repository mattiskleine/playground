window.onload = function() {
    var box = document.getElementById('box1');
    box.addEventListener('mouseenter', hoverBox);
    box.addEventListener('mouseleave', unhoverBox);
}

function hoverBox(e) {
    e.currentTarget.style.transform = 'scale(1.2)';
}

function unhoverBox(e) {
    e.currentTarget.style.transform = 'scale(1)';
}