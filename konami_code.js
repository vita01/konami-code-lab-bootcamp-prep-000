const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let arr=[];
  // Write your JavaScript code inside the init() function
addEventListener("keydown",function(e){
  arr.push(event.keyCode);
   if(code.length===arr.length){
    //alert("Hurray!");
   //console.log('yes');
for(var i=0;i<arr.length;i++){
if(arr[i]==code[i]){
f*=true;
}else{f*=0;}


}
if(f==true){
arr=[];
alert("Hurray!");
	}
}

});
}
