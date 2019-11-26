//this solution utilizes jquery instead of vanilla javascript. this method is more or less the same, excpet it uses a shorter syntax to achieve the same result. Utilizing concatination to add the flavors to the list

$(document).ready(function() {
  let array = window.iceCreamFlavors;
  let flavors = "";
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    flavors += "<li>" + array[i] + "</li>";
  }
  $(".ice-cream-list-3").append(flavors);
});
