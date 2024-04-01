/* video 1.
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", () => {
  console.log("div was clicked");
});

ul.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("ul was clicked");
});

for (li of lis) {
  li.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("li was clicked");
  });
}
*/
/* video2,3. */

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerHTML = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");
  item.appendChild(delBtn);
  ul.appendChild(item);
  console.log(inp.value);
  inp.value = "";
});

// ul.addEventListener("click", function (event) {
//   //   console.log(event.target);
//   if (event.target.nodeName == "BUTTON") {
//     let listItem = event.target.parentElement;
//     listItem.remove();
//     console.log("delete");
//   }

//   console.log("button clicked");
// });


for (li of lis) {
  li.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("li was clicked");
  });
}


// let delBtns = document.querySelectorAll(".delete");

// for (btn of delBtns) {
//   btn.addEventListener("click", function () {
//     console.log("button clicked");
//     let parent = this.parentElement;
//     parent.remove();
//   });
// }
