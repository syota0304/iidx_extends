Array.from(document.querySelectorAll('#ticket-list > .inner:not(.head) > li:first-child'))
    .forEach(e => e.innerHTML = e.innerHTML.replace(/([246]+)/g,'<span>$1</span>'));