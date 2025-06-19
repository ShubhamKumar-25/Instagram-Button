let isStatus = document.querySelector("h5")

let btn = document.querySelector("#add")

// let removeFriend = document.querySelector("#remove")

let cheak = 0;


btn.addEventListener("click" , function(){
    if(cheak == 0){
        isStatus.innerHTML = "Friend";
        isStatus.style.color = "blue"
        btn.innerHTML = "Remove Friend"
        //console.log("payar huaa");
        cheak = 1;
     
    } else{
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        cheak = 0;
    }
    
})

// removeFriend.addEventListener("click" , function(){
//     isStatus.innerHTML = "Stranger";
//     isStatus.style.color = "red"
// })