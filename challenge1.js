//import _ from "lodash";
import _ from "https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.js";

console.log("hello2222");

console.log(_.add(15, 4));
console.log(_.subtract(5, 4));
console.log(_.multiply(5, 4));
console.log(_.divide(10, 2));
console.log(_.random(1, 10));
//////
console.log("hello1");

const redexold = document.querySelector("[data-name=redex] .skills__title");
const reactTest = document.querySelector("[data-name=react-test] ");

redexold.textContent = "Notejs";
reactTest.textContent = "MongoDB";
//---2
const java = document.querySelector("[data-name=JavaScript]");
const jsaddtext = `<li data-name="Typescript" class="skills__item">
    <h2 class="skills__title">Typescript</h2>
    <span class="skills__years">2 years</span>
  </li>`;

java.insertAdjacentHTML("afterend", jsaddtext);
//---3
//find_out_link
const finecvDownlode = document.querySelector(".find_out_link");
//console.log(finecvDownlode);
finecvDownlode.remove();
//--4
const EditImage = document.querySelector(".bio__pic");
//console.log(EditImage);
EditImage.style.width = "36rem";
//---5
const skills_row = document.querySelectorAll(".skills__item");
//console.log(skills_row);
[...skills_row].map((item) => {
  //console.log(item);
  item.addEventListener("click", () => {
    const activeElement = document.querySelector(".underline");
    console.log(activeElement);
    if (activeElement) {
      activeElement.classList.remove("underline");
    }
    item.classList.add("underline");
  });
});
