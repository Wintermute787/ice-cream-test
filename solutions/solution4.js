let populateIceCream4 = () => {
  //saving window element to array
  let array = window.iceCreamFlavors;
  // grabbing the correct dom element for the ul
  let ul = document.querySelector("#ice-cream-list-4");
  //using innerHTML this time to set the HTML markup
  ul.innerHTML =
    //using concatenation to add the ul to our loop
    "<ul>" +
    //using map as another way to loop through the array
    array
      .map(function(flavors) {
        //concatinating the li with the array index
        return "<li>" + flavors + "</li>";
      })
      //joining the items back together and returning them as a list
      .join("") +
    "</ul>";
};
