//this method is more or less the same as solution 1. except this time we are using a for each loop to loop through the array

let populateIceCream2 = () => {
  let array = window.iceCreamFlavors;
  let ul = document.getElementById("ice-cream-list-2");
  console.log(ul);
  array.forEach(function(flavor) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(flavor));
    ul.appendChild(li);
  });
};
