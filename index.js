const root = document.querySelector("#root");

const incButton = document.createElement("button");
const dcButton = document.createElement("button");
const h1 = document.createElement("h1");

let count = 0;

incButton.innerText = "Increment";
dcButton.textContent = "Decrement";
h1.textContent = count;

root.append(incButton);
root.append(dcButton);
root.append(h1);

incButton.addEventListener("click", incFun);
dcButton.addEventListener("click", dcFun);

function incFun() {
  count += 1;
  // count++;
  // count = count + 1;
  h1.textContent = count;
}

function dcFun() {
  if (count > 0) {
    count -= 1;
    // count--;
    // count = count - 1;
    h1.textContent = count;
  } else {
    h1.textContent = "Cannot decrement below 0";
  }
}
