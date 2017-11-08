const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let arr=[];
  // Write your JavaScript code inside the init() function
addEventListener("keydown",function(e){
arr.push(event.keyCode);
if(code==arr){
    alert("Hurray!");
}
  
});
}
addEventListener("keydown", function(event) {
   if (event.keyCode == 86)
     document.body.style.background = "violet";
 });
 addEventListener("keyup", function(event) {
   if (event.keyCode == 86)
     document.body.style.background = "";
 });