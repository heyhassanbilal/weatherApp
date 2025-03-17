const userName = document.getElementById("search");
var names = document.querySelector(".username");
var description = document.querySelector(".description");
var follow = document.querySelector(".follower");
var following = document.querySelector(".following");
var repost = document.querySelector(".repost");
var image = document.querySelector(".img");

// console.log(userName)
userName.addEventListener("keydown",(e)=>{
    // console.log(userName)
    if(e.key == "Enter"){
        const url1 = "https://api.github.com/users";
        const url = `https://api.github.com/users/${userName.value}`
        e.preventDefault();
        fetch(url)
            .then(prom => prom.json())
            // .then(data=> {
            //     const data1 = JSON.parse(data)
            //     return data1;
            // })
            .then(data =>{
                names.textContent = data.name;
                if(data.bio != null){
                    description.textContent = data.bio;   
                }
                follow.textContent = `Followers ${data.followers}`;
                following.textContent = `Followers ${data.following}`;
                repost.textContent = `repost ${data.public_repos}`;
                image.innerHTML = `<img src="${data.avatar_url}">`
            })

    }
})