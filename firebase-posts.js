import {
ref,
push,
onValue,
remove
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

window.savePostToFirebase = function(postData){

const postsRef = ref(window.database, "posts");

push(postsRef, postData)
.then(() => {
    console.log("Post saved!");
})
.catch((error) => {
    console.error(error);
});

};

window.deletePost = function(postId){

if(!confirm("Delete this post?")) return;

remove(ref(window.database, "posts/" + postId))
.then(() => {
    console.log("Deleted!");
})
.catch((error) => {
    console.error(error);
});

};

window.onloadFirebase = function(){

const postsRef = ref(window.database, "posts");

onValue(postsRef, (snapshot) => {

    const data = snapshot.val();

    if(!data){
        document.getElementById("feed").innerHTML = "";
        return;
    }

    let html = "";

    Object.entries(data).reverse().forEach(([key, post]) => {

        html +=
        "<div class='post'>" +
        "<h3>@" + post.user + "</h3>" +
        "<p>" + post.mood + "</p>" +
        (post.image ? "<img src='" + post.image + "'>" : "") +
        "<p>" + post.text + "</p>" +
        "<button onclick='likePost(this)'>❤️ Like (0)</button> "+
        "<button onclick='addComment(this)'>💬 Comment</button> " +
        "<button onclick=\"deletePost('" + key + "')\">🗑 Delete</button>" +
        "</div>";

    });

    document.getElementById("feed").innerHTML = html;

    document.getElementById("postCount").innerText =
        Object.keys(data).length;

});

};

setTimeout(() => {
window.onloadFirebase();
}, 1000);