
let textMap = new Map([
    ['home', 'Home'],
    ['dashboard', 'My Dashboards'],
    ['spaces', 'My Spaces'],
    ['documents', 'My Documents'],
    ['bugs', 'My Bugs'],
    ['epics', 'My Epics'],
    ['goals', 'My Goals'],
    ['option1', 'My Option1'],
    ['option2', 'My Option2'],
    ['option3', 'My Option3'],
]);

function handleClientSideRouting() {
    let paragraphElement = document.getElementById('content');
    let textContent;
    let url = window.location.href;
    let relativeURLPath = url.slice(url.lastIndexOf('/') + 1);
    textContent = `This is ${textMap.get(relativeURLPath)} page`;
    paragraphElement.innerText = textContent;
}

window.addEventListener('load', handleClientSideRouting);
window.addEventListener('hashchange', handleClientSideRouting);

function toggle() {
    let el = document.getElementById('createOptions');
    if (el.style.height === '120px') {
        el.style.height = '0px';
    } else {
        el.style.height = '120px';
    }
}