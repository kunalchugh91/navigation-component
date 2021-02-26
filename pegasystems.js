
let textMap = new Map([
    ['home', 'Home'], ['dashboard', 'My Dashboards'], ['spaces', 'My Spaces'], ['documents', 'My Documents'], ['bugs', 'My Bugs'], ['epics', 'My Epics'], ['goals', 'My Goals']
]);

function handleClientSideRouting() {
    let paragraphElement = document.getElementById('content');
    let textContent;
    let url = window.location.href;
    let relativeURLPath = url.slice(url.lastIndexOf('/')+1);
    textContent = `This is ${textMap.get(relativeURLPath)} page`;
    paragraphElement.innerText = textContent;
}

window.addEventListener('load', handleClientSideRouting);
window.addEventListener('hashchange', handleClientSideRouting);