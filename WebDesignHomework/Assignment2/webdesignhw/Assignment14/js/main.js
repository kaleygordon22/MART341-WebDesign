var c = document.getElementByld("myCanvas");
var ctx = c.getContext("2d");

// first line
ctx.moveTo(0,0);
ctx.lineTo(200, 100);
ctx.stroke();

// Highlight the active navigation link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.nav-links a').forEach(nav => nav.style.color = 'rgb(47, 97, 107)');
        this.style.color = 'rgb(196, 231, 239)'; // Highlight the active link
    });
});

// Lightbox for image gallery
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function () {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        lightbox.style.display = 'flex';
        lightbox.style.justifyContent = 'center';
        lightbox.style.alignItems = 'center';
        lightbox.style.cursor = 'pointer';
        lightbox.addEventListener('click', () => lightbox.remove());

        const imgClone = this.cloneNode();
        imgClone.style.maxWidth = '90%';
        imgClone.style.maxHeight = '90%';
        lightbox.appendChild(imgClone);
        document.body.appendChild(lightbox);
    });
});