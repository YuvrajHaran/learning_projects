// <<<<<<<< friend requenst send unsend >>>>>

// var isStetus =document.querySelector("h5")

// var btn = document.querySelector("#add")
// var cheak = 0

// btn.addEventListener("click",function(){
//     if(cheak == 0){
//         isStetus.innerHTML = "Friends"
//         isStetus.style.color = "green"
//         btn.innerHTML = "Remove friend"
//     cheak = 1
//     }
//     else{
//         isStetus.innerHTML = "Strenger"
//         isStetus.style.color = "red"
//         btn.innerHTML = "Add friend"

//         cheak =0
//     }
       
// })


/* <!-- <<<<<<<<<<< like on instagram big heart anim >>>>>>>>> --> */

// var con = document.querySelector("#container")
// var love = document.querySelector("i")

// con.addEventListener("dblclick",function(){
//     love.style.transform = "translate(-50%, -50%) scale(1)"
//     love.style.opacity = 0.8

//     setTimeout(function(){
//         love.style.opacity = 0;
//     },1000)  

//     setTimeout(function(){
//         love.style.transform = "translate(-50%, -50%) scale(0)"
//     },2000)   
// })

// <<<<<<<<<<< custom cursor >>>>>>>>>>> */</custom>

// var main = document.querySelector("#main")
// var crsr = document.querySelector(".cursor")

// main.addEventListener("mousemove", function(dets){
//     console.log(dets)
//     crsr.style.left = dets.x+"px"
//     crsr.style.top = dets.y+"px"
// })


//  <<<<<<<<<<<<multiple image hovering animation >>>>>>>>>>

var boxi = document.querySelectorAll(".set1 img")
var container = document.querySelector("#cont")
// var image = document.querySelectorAll(".immg")

boxi.addEventListener("click",function(dets){
    image.style.left = dets.x+"px"
    image.style.top = dets.y+"px"
})

