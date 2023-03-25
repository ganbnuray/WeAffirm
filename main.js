import { data } from "./data.js";
const length_data = data.length;

const options = document.querySelectorAll(".select");
let chosen = [];
for (let i = 0; i < options.length; i++) {
  let count = 0;
  options[i].addEventListener("click", (e) => {
    count++;
    if (count % 2 === 1) {
      options[i].classList.add("clicked-pink");
      chosen.push(options[i].innerHTML.toLowerCase());
    } else {
      options[i].classList.remove("clicked-pink");
      removeItemOnce(chosen, options[i].innerHTML.toLowerCase());
    }
  });
}

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}
let affirmation_list = [];

function filter() {
  affirmation_list = [];
  for (let k = 0; k < length_data; k++) {
    if (chosen.includes(data[k].Tag)) {
      affirmation_list.push(data[k].Affirmation);
    }
  }
}

function random(list) {
  let length = list.length;
  return list[Math.floor(Math.random() * length)];
}

const nextButton = document.querySelector("#nextButton");
nextButton.addEventListener("click", (e) => {
  if (chosen.length > 0) {
    filter();
    const body = document.querySelector("body");
    body.innerHTML = "";
    let header = document.createElement("header");
    header.classList.add("main-header");
    header.innerHTML = `<div class="container">
            <a href="./index.html" class="gohome">
                <p>
                    <spam><img src="./leftarrow.svg" alt="Arrow pointing to the left" class="arrow"></spam>Home
                </p>
            </a>
        </div>`;
    document.querySelector("body").appendChild(header);

    let main = document.createElement("main");
    main.id = "affirmationbox";
    main.innerHTML = `<div class="container">
            <p id="affirmation" class="animation">My awareness of my wholeness attracts abundance into my life.</p>
        </div>
        <div class="container">
            <button class="next">Next</button>
        </div>`;
    document.querySelector("body").appendChild(main);

    var affirmation = document.querySelector("#affirmation");
    affirmation.innerHTML = random(affirmation_list);
    let newAffirmation = document.querySelector(".next");
    newAffirmation.addEventListener("click", (e) => {
      let affirmation = document.querySelector("#affirmation");
      affirmation.innerHTML = random(affirmation_list);
    });
  } else {
    alert("Please choose your affirmation preferences");
  }
});
