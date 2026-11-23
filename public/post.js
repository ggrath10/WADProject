
let postForm = document.getElementById("postForm");

postForm.addEventListener("submit", createPost);

function createPost(e) {
    e.preventDefault();

    let postText = document.getElementById("post").value;

    let post = {
        content: postText
    };

    console.log(post);
}
