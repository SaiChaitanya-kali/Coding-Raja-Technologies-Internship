$(document).ready(function(){
    $('.menu-toggle').on('click', function(){
        $('.nav').toggleClass('showing');
        $('.nav ul').toggleClass('showing');

    });

    $('.post-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
              
});
document.addEventListener('DOMContentLoaded', () => {
    const blogList = document.getElementById('blog-list');
    const readMoreSection = document.getElementById('read-more');

    // Load blogs from local storage
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    
    // Display blog list
    blogs.forEach((blog, index) => {
        const blogItem = document.createElement('div');
        blogItem.className = 'blog-item';
        blogItem.innerHTML = `
            <h2>${blog.title}</h2>
            ${blog.image ? `<img src="${blog.image}" alt="Blog Image">` : ''}
            <p>${blog.content.slice(0, 100)}...</p>
            <a href="blog.html?id=${index}">Read More</a>
        `;
        blogList.appendChild(blogItem);
    });

    // Display "Read More" section
    blogs.forEach((blog, index) => {
        const blogLink = document.createElement('a');
        blogLink.href = `blog.html?id=${index}`;
        blogLink.textContent = blog.title;
        readMoreSection.appendChild(blogLink);
    });
});
