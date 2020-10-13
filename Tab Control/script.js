document.addEventListener('click', tabClick);

function tabClick(event) {
    var elem = event.target,
        elemHREF = elem.getAttribute('href'),
        tabs = document.querySelectorAll('.tabs li a'),
        tabContents = document.querySelectorAll('.tab-contents li');

    if (elemHREF != null && elemHREF.indexOf('tab-') != -1) {
        event.preventDefault();

        if (elem.className.indexOf('active') == -1) {
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
                tabContents[i].classList.remove('visible');
            }

            elem.classList.add('active');
            document.getElementById(elemHREF).classList.add('visible');
        }
    }
}
