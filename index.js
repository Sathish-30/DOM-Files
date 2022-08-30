var counter = document.querySelector("h1").innerHTML;
const count = document.querySelector("h1");
function increment() {
  counter++;
  count.innerHTML = counter;
  if (counter % 10 === 0) {
    alert(`The count is ${counter}`);
  }
}
function decrement() {
  counter--;
  count.innerHTML = counter;
}
