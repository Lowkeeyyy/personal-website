document.addEventListener("DOMContentLoaded", () => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const feed = document.querySelector(".feed-section");

    posts.forEach(post => {
        const article = document.createElement("article");
        article.className = "post-card";

        article.innerHTML = `
            <div class="post-header">
                <div class="author-info">
                    <div class="author-avatar">👤</div>
                    <div>
                        <h3 class="author-name">${post.author}</h3>
                        <time>${post.date}</time>
                    </div>
                </div>
                <button class="subscribe-btn-post">Subscribe</button>
            </div>

            <h2 class="post-title">${post.title}</h2>
            <p class="post-excerpt">${post.excerpt}</p>

            <div class="post-footer">
                <span class="engagement">💬 0</span>
                <span class="engagement">❤️ 0</span>
                <span class="engagement">🔗 Share</span>
            </div>
        `;

        feed.prepend(article); // NEW POSTS ON TOP
    });
});
