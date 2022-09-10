
const mySlider=[
    'pictures/photo1.jpg',
    'pictures/photo2.jpg',
    'pictures/photo3.jpg',
]



const img=document.querySelector(".slider img")
img.src=mySlider[0]
const next=document.querySelector(".slider .next")
const prev=document.querySelector(".slider .prev")
let currentslide=0

next.addEventListener("click",function () {
    currentslide++;
    if(currentslide==mySlider.length){
        currentslide=0;
    }
    img.src=mySlider[currentslide];
})

prev.addEventListener("click",function() {
    currentslide--;
    if (currentslide==-1){
        currentslide=mySlider.length-1;
    }
    img.src=mySlider[currentslide]
})