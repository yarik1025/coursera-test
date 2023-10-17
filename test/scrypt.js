function total() {
  debugger;
 let first = detection("cake_one")
 let second = detection("cake_two")
 let three = detection("cake_three")
  
}
function detection(id) {
    let cake = document.getElementById(id).innerHTML;
    var firstValue = cake.match(/\d+/);
    return parseInt(firstValue[0]);
}