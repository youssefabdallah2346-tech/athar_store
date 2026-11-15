// ربط الأقسام الفرعية بصورة أول منتج في كل قسم تلقائياً
const storeCategories = {
    women: {
        title: "WOMEN COLLECTION",
        subcategories: [
            { id: "w-bags", name: "Handbags", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80" }, // صورة أول شنطة
            { id: "w-necklaces", name: "Necklaces", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=500&q=80" }, // صورة أول سلسلة
            { id: "w-bracelets", name: "Bracelets", image: "https://images.unsplash.com/photo-1611591475871-2ee8ab974591?auto=format&fit=crop&w=500&q=80" }, // صورة أول أنسيال
            { id: "w-rings", name: "Rings", image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=500&q=80" }, // صورة أول خاتم
            { id: "w-earrings", name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80" },
            { id: "w-watches", name: "Watches", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=80" } // صورة أول ساعة
        ]
    },
    men: {
        title: "MEN COLLECTION",
        subcategories: [
            { id: "m-rings", name: "Rings", image: "" },
            { id: "m-necklaces", name: "Necklaces", image: "" },
            { id: "m-wallets", name: "Wallets", image: "" },
            { id: "m-bracelets", name: "Bracelets", image: "" },
            { id: "m-watches", name: "Watches", image: "" }
        ]
    },
    couples: {
        title: "COUPLES COLLECTION",
        subcategories: [
            { id: "c-necklaces", name: "Couples Necklaces", image: "" },
            { id: "c-bracelets", name: "Couples Bracelets", image: "" }
        ]
    }
};

// قائمة المنتجات بالأسماء والأسعار الدقيقة باللغة الإنجليزية
const products = [
    // --- Watches (الساعات) ---
    { id: 1, name: "Edmaz Women Watch", price: 470, subcatId: "w-watches", isNew: true, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Titan Stone Bracelet Watch", price: 315, subcatId: "w-watches", isNew: true, image: "