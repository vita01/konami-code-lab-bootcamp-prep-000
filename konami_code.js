const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let arr=[];
let  num=0;
  // Write your JavaScript code inside the init() function
addEventListener("keydown",function(e){
//  arr.push(event.keyCode);
  if(event.keyCode==code[num]){

num++;
}else{num=0;}


  if(num==code.length){
    alert("Hurray!");
  }

});
}
