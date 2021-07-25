var price=8.0
var p=document.querySelector("p")
var yes=document.getElementById('y')
var no=document.getElementById('n')
var order=document.getElementById('submit')
var dryclean=document.getElementById("dryclean")
var engine=document.getElementById("engine")
console.log(n);

function total() {
  p.innerHTML="Total price: "+price+" JD"


}
function out() {
  p.innerHTML=""

}
function change() {
  if(yes.checked==true){
    price+=8.0
  }else if (no.checked==true) {
    price=8.0


  }



}
function dry() {
  if(dryclean.checked==true){
    price+=10.0
  }else {
    price-=10.0;
  }



}
function eng() {
  if (engine.checked==true) {
    price+=8.0
  }
    else {
      price-=8.0;
    }

  }
