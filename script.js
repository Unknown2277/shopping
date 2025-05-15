const products = [
    { name: "Cozy Hoodie", mood: "relaxed", description: "Soft and perfect for lounging.", price: "$39.99", image: "download (1).jfif" },
    { name: "Hiking Backpack", mood: "adventurous", description: "Durable and stylish for travel.", price: "$89.99", image: "download (2).jfif" },
    { name: "Desk Organizer", mood: "focused", description: "Keeps your workspace clean and sharp.", price: "$19.99", image: "download (3).jfif" },
    { name: "Scented Candles", mood: "relaxed", description: "Aromatherapy for stress relief.", price: "$14.99", image: "download (4).jfif" },
    { name: "Wireless Earbuds", mood: "focused", description: "Noise-canceling and sleek.", price: "$59.99", image: "download (5).jfif" },
    { name: "DSLR Camera", mood: "adventurous", description: "Save natural memories with DSLR.", price: "$104.99", image: "download (6).jfif" },
    { name: "NIKE Shoes", mood: "adventurous", description: "Start journey with NIKE.", price: "$99.99", image: "download (10).jfif" },
    { name: "PS5", mood: "focused", description: " PS5 Spiderman 2 Limited Edition - Sky Games .", price: "$349.99", image: "download (11).png" },
    { name: "Soft Pilows", mood: "relaxed", description: "Sleepsia Microfiber Large Fluffy Ultra Soft Hotel Pillows for Sleeping — Sleepbee.", price: "$24.99", image: "download (9).jfif" },
    { name: "Fishing Rod", mood: "adventurous", description: "Now catch fishes easily.", price: "$99.99", image: "download (7).jfif" },
    { name: "Gaming Chair", mood: "relaxed", description: "Gaming Chair (RB) GC003.", price: "$89.99", image: "download (12).jfif" },
    { name: " Cute Pens", mood: "focused", description: "Cute Happy Pens - Cute Kawaii Cat Pens.", price: "$19.99", image: "download (13).jfif" },
  ];
  
  let cartCount = 0;
  
  function renderProducts(filter = "", searchQuery = "") {
    const container = document.getElementById('product-container');
    container.innerHTML = "";
    products
      .filter(p => (!filter || p.mood === filter) && p.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .forEach(product => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="price">${product.price}</div>
          <button onclick="addToCart()">Add to Cart</button>
        `;
        container.appendChild(div);
      });
  }
  
  function filterMood(mood) {
    renderProducts(mood);
  }
  
  function searchProducts() {
    const query = document.getElementById('search').value;
    renderProducts("", query);
  }
  
  function addToCart() {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
  }
  
  document.getElementById('themeToggle').onclick = () => {
    document.body.classList.toggle('dark');
  };
  
  window.onload = () => renderProducts();
  
  