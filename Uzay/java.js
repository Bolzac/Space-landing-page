let a = document.createElement('a');
a.setAttribute('class','list-inline-item text-uppercase font-weight-bold text-white p-3 font-size');
a.setAttribute('href','#');
const text = document.createTextNode('Eklendi');
a.appendChild(text);
let nav = document.querySelector('#nav');
nav.appendChild(a);