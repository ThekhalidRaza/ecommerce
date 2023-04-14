const mainImg = document.querySelector('#bigImg')
console.log(mainImg);
const smImg = document.querySelectorAll(".sm-img")


smImg[0].onclick = function(){
    mainImg.src = smImg[0].src;

}
smImg[1].onclick = function(){
    mainImg.src = smImg[1].src;

}
smImg[2].onclick = function(){
    mainImg.src = smImg[2].src;

}
smImg[3].onclick = function(){
    mainImg.src = smImg[3].src;

}