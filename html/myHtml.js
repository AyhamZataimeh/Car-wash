var h1=document.querySelector("h1")
var p=document.querySelector("p")
console.log(h1);
console.log(button);
var color=[]
var inputColor=null
var count=0
// h1.addEventListener("mouseover",function () {
//   h1.textContent="suzan dabbas"
//   mouseover()
//
// })
for (var i = 0; i < 3; i++) {
  inputColor=prompt("Enter color:")
  color.push(inputColor)

}

function mouseover() {

      h1.style.color=color[count]
      count+=1
      if (count==3){
        count=0
      }
  }










function button() {

    p.style.color="red"

  }
