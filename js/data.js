let productsDB = [
    {
        id:1,
        title:"I phone 16 Pro Max",
        color:"red",
        imageUrl : "Images/iphone.jpg",
        qty:1,
        desc : "I phone 16 Pro Max - 512 G.B ",
        size : "large",
        isMe: "N",
        price: 1550
    },
    {
        id:2,
        title:"Laptob",
        color:"gray",
        imageUrl : "Images/labtop.jpg",
        qty:1,
        desc : "Laptob - HP -3750 HS - 8GB ",
        size : "large",
        isMe: "N",
        price: 1450
        
    },
    {
        id:3,
        title:"Taplet",
        color:"red",
        imageUrl : "Images/tablet.jpg",
        qty:1,
        desc : "Taplet - screan 22 Inch - 256 BG ",
        size : "meduim",
        isMe: "N",
        price: 900
    },
    {
        id:4,
        title:"I Pad",
        color:"Gray",
        imageUrl : "Images/ipad.jpg",
        qty:1,
        desc : "I Pad - Apple 128 GB - 2 SIM ",
        size : "small",
        isMe: "N",
        price: 750
    }

];
// localStorage.setItem('products',JSON.stringify(productsDB)) 
//تم حفظ المنتجات في اللوكل الستورج ويتم بعدها تعريف هذه البروكت في صفحة الاسكربت كالاتي وبهذا لا يجب استدعاء هذا الملف في الصفحات كسكربت
// let Products = JSON.parse(localStorage.getItem('products'))