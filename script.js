const sidebar = document.getElementsByClassName('side-navigation')[0];
const content = document.getElementsByTagName('main')[0];

function openNav() {
    sidebar.style['width'] = '250px';
    sidebar.style['padding-right'] = '16px';
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    sidebar.style['width'] = '0';
    sidebar.style['padding-right'] = '0';
    document.body.style.backgroundColor = "white";
}