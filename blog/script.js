// Array for popular hairstyles with prices
const popularHairstyles = [
    {
        image: "https://rafaelsbarbershop.com/storage/photos/1/posts/compressed/textured-crop-haircut.jpg",
        title: "Textured Crop",
        description: "The textured crop offers a modern and edgy look, perfect for a low-maintenance style.",
        price: "$30"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJa8tn48k3yBQB5tcpQob2B4iNPJIQjBYhg&s",
        title: "Modern Bob Cut",
        description: "Chic and timeless, the modern bob is perfect for anyone looking to make a bold statement.",
        price: "$50"
    },
    {
        image: "https://images.squarespace-cdn.com/content/v1/62cd5c01f9646a5e9526e20f/1657975596424-R1YPPIR1ZAAM9K1ZR956/cq5dam.web.410.545.large-3.jpg",
        title: "Layered Waves",
        description: "Effortless and elegant, layered waves give volume and movement to your hair.",
        price: "$40"
    },
    {
        image: "https://i.ytimg.com/vi/kL9lvLxvNa8/maxresdefault.jpg",
        title: "Curly Updo",
        description: "For a special occasion or just a night out, the curly updo is a showstopper.",
        price: "$60"
    }
];

// Array for men's hairstyles with prices
const mensHairstyles = [
    {
        image: "https://rafaelsbarbershop.com/storage/photos/1/posts/compressed/textured-crop-haircut.jpg",
        title: "Textured Crop",
        description: "The textured crop offers a modern and edgy look, perfect for a low-maintenance style.",
        price: "$30"
    },
    {
        image: "https://amr.com.au/cdn/shop/articles/taper-fade-how-to-tell-your-barber-what-you-want-454458.jpg?v=1701395203",
        title: "Undercut Fade",
        description: "The undercut fade provides a sharp contrast between the short sides and longer top, offering a striking appearance.",
        price: "$35"
    },
    {
        image: "https://www.hair.com/on/demandware.static/-/Sites-hair-us-Library/default/dw9612e5b6/blog/pompadour-hairstyles-for-men-header.jpg",
        title: "Pompadour",
        description: "The classic pompadour features voluminous hair swept back, offering a timeless and sophisticated look.",
        price: "$40"
    }
];

// Array for women's hairstyles with prices
const womensHairstyles = [
    {
        image: "https://media.glamour.com/photos/65fdd51ade2c875933a247b9/16:9/w_2580,c_limit/Copy%20of%20Untitled%20Design.png",
        title: "Modern Bob Cut",
        description: "Chic and timeless, the modern bob is perfect for anyone looking to make a bold statement.",
        price: "$50"
    },
    {
        image: "https://images.squarespace-cdn.com/content/v1/62cd5c01f9646a5e9526e20f/1657975596424-R1YPPIR1ZAAM9K1ZR956/cq5dam.web.410.545.large-3.jpg",
        title: "Layered Waves",
        description: "Effortless and elegant, layered waves give volume and movement to your hair.",
        price: "$40"
    },
    {
        image: "https://www.byrdie.com/thmb/L6sVkZbkAikEWRBJ6yO0jMPvg6E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/slickponytail-743232e9ee6c49778cd6b0b407530b4d.png",
        title: "Sleek Ponytail",
        description: "The sleek ponytail never goes out of style—it's simple yet glamorous.",
        price: "$45"
    },
    {
        image: "https://i.ytimg.com/vi/kL9lvLxvNa8/maxresdefault.jpg",
        title: "Curly Updo",
        description: "For a special occasion or just a night out, the curly updo is a showstopper.",
        price: "$60"
    }
];
const kidsHairstyles = [
    {
        name: "Ponytail",
        category: "Everyday Styles",
        description: "A classic and easy hairstyle perfect for school or playdates.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNWAbFGQzTWm0cCCJ0ptgaw8L8mdHdK578g&s"
    },
    {
        name: "French Braid",
        category: "Special Occasions",
        description: "A stylish braid that’s perfect for birthdays or family gatherings.",
        imageUrl: "https://pigtailsandcrewcuts.com/wp-content/uploads/20210811_PC_BraidFeature-scaled.jpg"
    },
    {
        name: "Top Knot",
        category: "Summer Fun",
        description: "A cool and practical style for hot summer days.",
        imageUrl: "https://i.pinimg.com/736x/35/00/09/350009d2ea2048f9bf9ac8260bcbd536.jpg"
    },
    {
        name: "Rainbow Braids",
        category: "Playful and Creative",
        description: "Fun and colorful braids that kids will love.",
        imageUrl: "https://avatars.mds.yandex.net/get-shedevrum/12733905/0312c3b5bb6411ee88a77a83974e0feb/orig"
    }
];

function renderKidsHairstyles() {
    const container = document.getElementById('kids-hairstyle-grid');
    
    // Clear any existing content in the grid
    container.innerHTML = "";

    // Loop through the kids' hairstyles array and create HTML for each item
    kidsHairstyles.forEach(style => {
        const item = document.createElement('div');
        item.classList.add('hairstyle-item');
        
        // Add HTML content to the item
        item.innerHTML = `
            <img src="${style.imageUrl}" alt="${style.name}">
            <h3>${style.name}</h3>
            <p><strong>Category:</strong> ${style.category}</p>
            <p>${style.description}</p>
        `;
        
        // Append the item to the grid
        container.appendChild(item);
    });
}

// Call the function to render kids' hairstyles when the page loads
document.addEventListener("DOMContentLoaded", () => {
    renderKidsHairstyles();
    // Call other render functions if needed
});
// Function to render popular hairstyles
function renderPopularHairstyles() {
    const grid = document.getElementById("hairstyle-grid");
    
    // Clear any existing content in the grid
    grid.innerHTML = "";

    // Loop through the popular hairstyles array and create HTML for each item
    popularHairstyles.forEach(hairstyle => {
        const item = document.createElement("div");
        item.classList.add("hairstyle-item");
        
        // Add HTML content to the item
        item.innerHTML = `
            <img src="${hairstyle.image}" alt="${hairstyle.title}">
            <h3>${hairstyle.title}</h3>
            <p>${hairstyle.description}</p>
            <p class="price">${hairstyle.price}</p>
        `;
        
        // Append the item to the grid
        grid.appendChild(item);
    });
}

// Function to render men's hairstyles
function renderMensHairstyles() {
    const grid = document.getElementById("mens-hairstyle-grid");
    
    // Clear any existing content in the grid
    grid.innerHTML = "";

    // Loop through the men's hairstyles array and create HTML for each item
    mensHairstyles.forEach(hairstyle => {
        const item = document.createElement("div");
        item.classList.add("hairstyle-item");
        
        // Add HTML content to the item
        item.innerHTML = `
            <img src="${hairstyle.image}" alt="${hairstyle.title}">
            <h3>${hairstyle.title}</h3>
            <p>${hairstyle.description}</p>
            <p class="price">${hairstyle.price}</p>
        `;
        
        // Append the item to the grid
        grid.appendChild(item);
    });
}

// Function to render women's hairstyles
function renderWomensHairstyles() {
    const grid = document.getElementById("womens-hairstyle-grid");
    
    // Clear any existing content in the grid
    grid.innerHTML = "";

    // Loop through the women's hairstyles array and create HTML for each item
    womensHairstyles.forEach(hairstyle => {
        const item = document.createElement("div");
        item.classList.add("hairstyle-item");
        
        // Add HTML content to the item
        item.innerHTML = `
            <img src="${hairstyle.image}" alt="${hairstyle.title}">
            <h3>${hairstyle.title}</h3>
            <p>${hairstyle.description}</p>
            <p class="price">${hairstyle.price}</p>
        `;
        
        // Append the item to the grid
        grid.appendChild(item);
    });
}

// Call the functions to render hairstyles when the page loads
document.addEventListener("DOMContentLoaded", () => {
    renderPopularHairstyles();
    renderMensHairstyles();
    renderWomensHairstyles();
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = new URLSearchParams(formData);

        try {
            const response = await fetch('/submit', {
                method: 'POST',
                body: data
            });

            if (response.ok) {
                responseMessage.textContent = 'Message received. Thank you!';
                responseMessage.style.color = 'green';
                form.reset();
            } else {
                responseMessage.textContent = 'Failed to send message. Please try again.';
                responseMessage.style.color = 'red';
            }
        } catch (error) {
            responseMessage.textContent = 'An error occurred. Please try again later.';
            responseMessage.style.color = 'red';
        }
    });
});


