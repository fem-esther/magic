// document.querySelector(".click").addEventListener("click",
// function (e) {
//     e.target.parentNode.children[0].innerHTML= "BOOM!!!";
//     e.target.parentNode.style.backgroundColor="green"; 
//     if(e.target.parentNode.children[0].innerHTML=== "MAGIC!!!"){
//         document.querySelector(".click").addEventListener("click", function(){
//             e.target.parentNode.children[0].innerHTML= "BOOM!!!";
//             e.target.parentNode.style.backgroundColor="purple"; 
//         })
//     }
//     else if( e.target.parentNode.children[0].innerHTML=== "BOOM!!!"){
//         document.querySelector(".click").addEventListener("click", function(){
//             e.target.parentNode.children[0].innerHTML= "MAGIC!!!";
//             e.target.parentNode.style.backgroundColor="pink"; 
//         })
//     }
// })
const data = [
    {
        text: "MAGIC!!!"
    },
    {
        text: "DO"
    },
    {
        text: "YOU"
    },
    {
        text: "WANT"
    },
    {
        text: "TO"
    },
    {
        text: "KNOW"
    },
    {
        text: "THE"
    },
    {
        text: "SECRET"
    },
    {
        text: "BEHIND THIS TRICK"
    },
    {
        text: "HERE IT IS"
    },
    {
        text: "A MAGICIAN NEVER TELLS HIS SECRET."
    },
]
let num=0;
document.querySelector(".click").addEventListener("click", function (e) {
    if(num<data.length){
    e.target.parentNode.children[0].innerHTML = data[num].text;
    num++;
}
})
