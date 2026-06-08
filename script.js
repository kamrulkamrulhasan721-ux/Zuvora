window.onload = function () {
    let savedName = localStorage.getItem("name");
    let savedUsername = localStorage.getItem("username");
    let savedBio = localStorage.getItem("bio");
    let savedLocation = localStorage.getItem("location");
    let savedFollowers = localStorage.getItem("followers");
    let savedPhoto = localStorage.getItem("profilePhoto");

    if (savedPhoto) {
        document.getElementById("profilePic").src = savedPhoto;
    }

    if (savedName) {
        document.getElementById("username").innerText = savedName;
    }
    if (savedUsername) {
        document.getElementById("userHandle").innerText = savedUsername;
    }

    if (savedBio) {
        document.getElementById("userBio").innerText = savedBio;
    }

    if (savedLocation) {
        document.getElementById("userLocation").innerText = savedLocation;
    }

    if (savedFollowers) {
        document.getElementById("followersCount").innerText = savedFollowers;
    }

    const followBtn = document.getElementById("followBtn");

    followBtn.onclick = function () {

        let followers = parseInt(
            document.getElementById("followersCount").innerText
        );

        if (this.innerText === "Follow") {
            this.innerText = "Following";
            followers++;
        } else {
            this.innerText = "Follow";
            followers--;
        }

        document.getElementById("followersCount").innerText = followers;
        localStorage.setItem("followers", followers);
    };

    document.getElementById("shareProfileBtn").onclick = function () {
        navigator.clipboard.writeText(window.location.href);
        
    };
document.getElementById("saveProfileBtn").onclick = function(){

    let newName = document.getElementById("editName").value;
    let newUsername = document.getElementById("editUsername").value;
    let newBio = document.getElementById("editBio").value;
    let newLocation = document.getElementById("editLocation").value;

    if(newName){
        document.getElementById("username").innerText = newName;
        localStorage.setItem("name", newName);
    }

    if(newUsername){
        document.getElementById("userHandle").innerText = "@" + newUsername;
        localStorage.setItem("username", "@" + newUsername);
    }

    if(newBio){
        document.getElementById("userBio").innerText = newBio;
        localStorage.setItem("bio", newBio);
    }

    if(newLocation){
        document.getElementById("userLocation").innerText = newLocation;
        localStorage.setItem("location", newLocation);
    }

    document.getElementById("editProfileBox").style.display = "none";

};
 document.getElementById("editProfileBtn").onclick = function(){

    document.getElementById("editProfileBox").style.display = "block";

};

 const profileInput =
document.getElementById("profileImageInput");
console.log("profileInput found:", profileInput);
profileInput.addEventListener("change", function(){

  

    const file = this.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){

            document.getElementById("profilePic").src =
            e.target.result;

            localStorage.setItem(
                "profilePhoto",
                e.target.result
            );

        };

        reader.readAsDataURL(file);
    }

});

    document.getElementById("postBtn").onclick = function () {

        let text = document.getElementById("postInput").value;
        let mood = document.getElementById("mood").value;

        let imageFile =
            document.getElementById("imageInput").files[0];

        let imageUrl =
            imageFile ? URL.createObjectURL(imageFile) : "";

        if (text === "" && !imageFile) return;

        if (typeof savePostToFirebase === "function") {

            savePostToFirebase({
                user: "kamrul",
                mood: mood,
                text: text,
                image: imageUrl,
                time: Date.now()
            });
        }

        document.getElementById("postInput").value = "";
        document.getElementById("imageInput").value = "";
    };

    setTimeout(() => {

        if (window.onloadFirebase) {
            window.onloadFirebase();
        }

    }, 1000);

};

function likePost(btn) {

    let text = btn.innerText;

    let count = parseInt(
        text.match(/\d+/)?.[0] || 0
    );

    count++;

    btn.innerText = "❤️ Like (" + count + ")";
}

function addComment(btn) {

    let comment = prompt("Write a comment:");

    if (comment) {

        let commentsDiv =
            btn.parentElement.querySelector(".comments");

        if (!commentsDiv) {

            commentsDiv = document.createElement("div");
            commentsDiv.className = "comments";

            btn.parentElement.appendChild(commentsDiv);
        }

        commentsDiv.innerHTML +=
            "<p>💬 " + comment + "</p>";
    }
}