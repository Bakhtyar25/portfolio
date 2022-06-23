let btnff= document.getElementById('btn-resize');

btnff.addEventListener('click', resize);

function resize() {

    const url = document.getElementById('url').value;
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const paragraph = document.getElementById('new-url');
    const resizepath = document.getElementById('resize-image');


    const path = url.lastIndexOf('/');
    const lastPart = url.substring(path);

    const newUrl = `https://source.unsplash.com${lastPart}/${width}x${height}`;

    paragraph.textContent = newUrl;

    paragraph.style.setProperty('display', 'block', 'important');

    resizepath.setAttribute('src', newUrl);

    resizepath.style.setProperty('display', 'block', 'important');

    url.textContent=''
    height.textContent=''
    width.textContent=''


}



