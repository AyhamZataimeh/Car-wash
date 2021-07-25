var image=document.querySelector("#image")
var images=["url(car1.jpeg)","url(car2.jpeg)","url(car3.jpeg)","url(car4.jpeg)"]

var count=0
// image.addEventListener("click",function () {





function show() {

    image.style.backgroundImage=images[count];
    image.style.backgroundSize="380px";
    image.style.backgroundRepeat="no-repeat"
    image.innerHTML=""
    console.log("works");
    count+=1
    if(count==4){
      count=0
    }

  }
