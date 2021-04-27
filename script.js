var likes= [0,0,0]
var likeElement =[document.querySelector("#like1"),document.querySelector("#like2"),document.querySelector("#like3")];

function addLike(){
    likes[0]++;
    likeElement[0].innerText= likes[0] + "like(s)";
}
function addLike2(){
    likes[1]++;
    likeElement[1].innerText= likes[1] + "like(s)";
}
function addLike3(){
    likes[2]++;
    likeElement[2].innerText= likes[2] + "like(s)";
}