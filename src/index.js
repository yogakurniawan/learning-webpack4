import "./styles.css";
import printMe from './print';

function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(lodash => {
    return lodash.default;
  })
  .then(_ => {
    var element = document.createElement("div");
    var btn = document.createElement("button");
    // Lodash, now imported by this script
    element.innerHTML = _.join(["Hello", "webpack"], " ");
    console.log('called')
    element.classList.add("hello");

    btn.innerHTML = "Click me and check the console!";
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
  })
  .catch(error => 'An error occurred while loading the component');;
}

const a = {
  foo: 'bar'
}
const b = {
  eln: 'see'
}
console.log({...a, ...b})

getComponent().then(function(element){
  document.body.appendChild(element);
})