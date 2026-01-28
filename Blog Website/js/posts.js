function savePost(title, excerpt, content) {
    const post = {
        id: Date.now(),
        title,
        excerpt,
        content,
        author: "Ashfaq Shahriar",
        date: new Date().toDateString()
    };

    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.unshift(post);

    localStorage.setItem("posts", JSON.stringify(posts));
}
