document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blog-form');
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');
    const imageInput = document.getElementById('image');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

        // Create new blog object
        const newBlog = {
            title: titleInput.value,
            content: contentInput.value,
            image: imageInput.value
        };

        // Add to blogs array
        blogs.push(newBlog);

        // Save to local storage
        localStorage.setItem('blogs', JSON.stringify(blogs));

        // Redirect to index
        window.location.href = 'index.html';
    });
});
