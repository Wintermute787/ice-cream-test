// method using vanilla javascript to loop through the window array and adding each element into text content and appending it to the ul.

let populateIceCream = () => {
  //saving window element to array
  let array = window.iceCreamFlavors;
  // grabbing the correct dom element for the ul
  let ul = document.querySelector("ul");
  //loop through array
  for (let i = 0; i < array.length; i++) {
    //saving flavor as each array item
    let flavor = array[i];
    //creating the item we are adding into the li
    let item = document.createElement("li");
    //giving the item a text value of the array elements
    item.textContent = flavor;
    //appending the item as li's to the list
    ul.appendChild(item);
  }
};

//console logging to make sure we are grabbing the correct element from the window
console.log(window.iceCreamFlavors);
