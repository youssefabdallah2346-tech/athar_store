// 1. إعدادات الفئات والأقسام الفرعية وصورها
// تقدر تغير رابط image لأي قسم بصورة من منتجاتك بتدل عليه
const storeCategories = {
    women: {
        title: "WOMEN | حريمي",
        subcategories: [
            { id: "w-bags", name: "شنط حريمي", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80" },
            { id: "w-necklaces", name: "سلاسل", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80" },
            { id: "w-bracelets", name: "حظاظات وأساور", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=500&q=80" },
            { id: "w-rings", name: "خواتم", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=80" },
            { id: "w-earrings", name: "حلقان", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80" },
            { id: "w-watches", name: "ساعات", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=500&q=80" }
        ]
    },
    men: {
        title: "MEN | رجالي",
        subcategories: [
            { id: "m-rings", name: "خواتم", image: "https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?auto=format&fit=crop&w=500&q=80" },
            { id: "m-necklaces", name: "سلاسل", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=500&q=80" },
            { id: "m-wallets", name: "محافظ", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=500&q=80" },
            { id: "m-bracelets", name: "حظاظات", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=500&q=80" },
            { id: "m-watches", name: "ساعات", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80" }
        ]
    },
    couples: {
        title: "COUPLES | كابلز",
        subcategories: [
            { id: "c-necklaces", name: "سلاسل كابلز", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=80" },
            { id: "c-bracelets", name: "حظاظات كابلز", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=500&q=80" }
        ]
    }
};

// 2. قائمة المنتجات (اربط كل منتج بالقسم بتاعه عن طريق subcatId)
// ولو عايزه يظهر في الصفحة الرئيسية تحت NEW ARRIVALS خلي isNew: true
const products = [
    {
        id: 1,
        name: "Marman Box Bag",
        price: 395,
        subcatId: "w-bags",
        isNew: true,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        name: "Class Cross Bag",
        price: 280,
        subcatId: "w-bags",
        isNew: true,
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        name: "Athar Gold Chain",
        price: 220,
        subcatId: "w-necklaces",
        isNew: true,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        name: "Classic Men Watch",
        price: 650,
        subcatId: "m-watches",
        isNew: true,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        name: "Black Onyx Men Ring",
        price: 190,
        subcatId: "m-rings",
        isNew: false,
        image: "https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        name: "Leather Men Wallet",
        price: 320,
        subcatId: "m-wallets",
        isNew: false,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        name: "Magnetic Couples Bracelets",
        price: 250,
        subcatId: "c-bracelets",
        isNew: false,
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=500&q=80"
    }
];

let cart = [];

// عناصر الصفحة
const heroSection = document.getElementById("hero-section");
const sectionHeading = document.getElementById("section-heading");
const subcatGrid = document.getElementById("subcategories-grid");
const productsGrid = document.getElementById("products-grid");
const breadcrumb = document.getElementById("breadcrumb");

// العودة للصفحة الرئيسية (NEW ARRIVALS)
function goHome() {
    setActiveTab("tab-home");
    heroSection.style.display = "block";
    breadcrumb.style.display = "none";
    subcatGrid.style.display = "none";
    productsGrid.style.display = "grid";
    sectionHeading.innerText = "NEW ARRIVALS";

    const newProducts = products.filter(p => p.isNew);
    renderProducts(newProducts);
}

// اختيار فئة رئيسية (حريمي / رجالي / كابلز)
function selectMainCategory(catKey) {
    setActiveTab(`tab-${catKey}`);
    const category = storeCategories[catKey];
    
    heroSection.style.display = "none";
    breadcrumb.style.display = "block";
    breadcrumb.innerHTML = `<span onclick="goHome()">Home</span> / ${category.title}`;
    
    sectionHeading.innerText = category.title;
    productsGrid.style.display = "none";
    subcatGrid.style.display = "grid";
    subcatGrid.innerHTML = "";

    category.subcategories.forEach(sub => {
        subcatGrid.innerHTML += `
            <div class="subcat-card" onclick="selectSubcategory('${catKey}', '${sub.id}', '${sub.name}')">
                <img src="${sub.image}" alt="${sub.name}">
                <div class="subcat-title">${sub.name}</div>
            </div>
        `;
    });
}

// اختيار قسم فرعي لعرض منتجاته
function selectSubcategory(catKey, subId, subName) {
    const category = storeCategories[catKey];
    
    breadcrumb.innerHTML = `<span onclick="goHome()">Home</span> / <span onclick="selectMainCategory('${catKey}')">${category.title}</span> / ${subName}`;
    sectionHeading.innerText = subName;
    
    subcatGrid.style.display = "none";
    productsGrid.style.display = "grid";

    const filteredProducts = products.filter(p => p.subcatId === subId);
    renderProducts(filteredProducts);
}

// رسم كروت المنتجات
function renderProducts(list) {
    productsGrid.innerHTML = "";
    if (list.length === 0) {
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#888; padding: 40px 0;">قريباً سيتم إضافة قطع جديدة في هذا القسم...</p>`;
        return;
    }

    list.forEach(product => {
        productsGrid.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div>
                    <h4 class="product-name">${product.name}</h4>
                    <div class="product-price">${product.price} EGP</div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">ADD TO CART</button>
                </div>
            </div>
        `;
    });
}

function setActiveTab(tabId) {
    document.querySelectorAll(".cat-tab").forEach(btn => btn.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");
}

// دوال سلة المشتريات
function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById("cart-count").innerText = cart.length;
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalEl = document.getElementById("cart-total");

    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span>${item.price} EGP</span>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    cartTotalEl.innerText = total;
}

function toggleCart() {
    document.getElementById("cart-sidebar").classList.toggle("active");
    document.getElementById("cart-overlay").classList.toggle("active");
}

// إرسال الطلب على واتساب
function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // اكتب رقم الواتساب بتاعك هنا بالكود الدولي (مثال: 2010xxxxxxxx)
    const phoneNumber = "201500870934";
    let message = "Hello ATHAR, I would like to order:\n\n";
    let total = 0;

    cart.forEach(item => {
        message += `• ${item.name} - ${item.price} EGP\n`;
        total += item.price;
    });

    message += `\nTotal: ${total} EGP`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
}

// تشغيل الصفحة الرئيسية عند الفتح
goHome();