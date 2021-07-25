var price=8.0
var p=document.getElementById("p")
console.log(p)
var o1=document.getElementById("o1")
var o2=document.getElementById("o2")
var o3=document.getElementById("o3")
var dryclean=document.getElementById("dryclean")
var engine=document.getElementById("engine")
function change () {
  if(o1.selected==true){

    price=8.0
  }

  if(o2.selected==true){

    price+=4.0
  }
  if(o3.selected==true){

    price+=6.0
  }

}

function total() {
  p.innerHTML="Total price: "+price+"JD"


}
function out() {
  p.innerHTML=""

}
function dry() {

  if(dryclean.checked==true)
  {
    price+=8.0
  }else {
    price-=8.0
  }


}
function eng() {
  if(engine.checked==true)
  {
    price+=6.0
  }else {
    price-=6.0

  }

}
