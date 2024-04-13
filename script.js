let usrName = document.getElementById("userName");
let srcBtn=document.getElementById("srcBtn");

srcBtn.addEventListener('click',getProfile);

async function getProfile(){
    let userName=document.getElementById("userName");
    let response = await fetch(`https://api.github.com/users/${userName.value}`);
    let result = await response.json();
    
    viewProfile(result);
}

function viewProfile(res){
    console.log(res);
    let card=document.querySelector(".card-container");
    card.style.display="block"
    card.innerHTML=`
        <span id="type" class="pro">Id:${res.id}</span>
        <img id="userImg" class="round" height="120px" width="120px" src="${res.avatar_url
        || "#"}" alt="user" />
        <h3 id="name">${res.name}</h3>
        <h6 id="userId">${res.location || " "}</h6>
        <p id="bio">${res.bio || " "}</p>
        <div class="buttons">
            <button class="primary">
                Follower : <span id="Follower">${res.followers || "0"}</span>
            </button>
            <button class="primary">
                Following : <span id="Following">${res.following|| "0"}</span>
            </button>
        </div>
        <div class="skills">
            <h6>Repos</h6>
            <h6 id="repo">${res.public_repos || "0"}</h6>
        </div>
    `
    

}