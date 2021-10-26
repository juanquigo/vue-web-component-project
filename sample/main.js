(async () => {
    await import('https://unpkg.com/vue');
    await import('https://cdn.jsdelivr.net/gh/juanquigo/vue-web-component-project/sample/welcome-component.js');

    const script = document.getElementById('cotizador');
    const msg = script.getAttribute('data-msg');

    const component = document.createElement('welcome-component');
    component.setAttribute('msg', msg);
    document.body.appendChild(component);
})();