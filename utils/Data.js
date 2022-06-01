const Data = {
    users:[
       { 
            name: 'Rohail',
            email: 'admin@foody.com',
            password: '123456'
        },

        { 
            name: 'Rocky',
            email: 'user@foody.com',
            password: '123456'
        },
    ],

    foods: [
        {
            name: 'Burger',
            img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1652366337/foods/burgers/menu-burger_-min_zq6vsw.jpg',
            
            menu: [
                {
                    _id: '01',
                    name: 'Monster Burger',
                    img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1652366337/foods/burgers/menu-burger_-min_zq6vsw.jpg',
                    price: 7.39,
                },
                {
                    _id: '02',
                    name: 'Ham Burger',
                    img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1652381669/foods/burgers/slide-burger2_s5lzpc.jpg',
                    price: 6.49,
                },
                {
                    _id: '03',
                    name: 'Extra Burger',
                    img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1654090201/foods/burgers/mae-mu-I7A_pHLcQK8-unsplash-min_vx6h3j.jpg',
                    price: 8.39,
                },
                {
                    _id: '04',
                    name: 'Cheesy Burger',
                    img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1654090205/foods/burgers/pexels-valeria-boltneva-1639557-min_ak46fm.jpg',
                    price: 9.49,
                }
            ]

            
        },
        {
            name: 'Pizza',
            img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1652382064/foods/pizzas/likemeat-CbNAuxSZTFo-unsplash_qzimmg.jpg',

            menu: [
                {
                    _id: '01',
                    name: 'Four Cheese Pizza',
                    img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1652366372/foods/pizzas/slide-pizza-min_ejhc1y.jpg',
                    price: 7.39,
                },
                {
                    _id: '02',
                    name: 'Sausage Pizza',
                    img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1652381473/foods/pizzas/slide-pizza_laoyxy.jpg',
                    price: 6.49,
                },
                {
                    _id: '03',
                    name: 'Our Special',
                    img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1654090364/foods/pizzas/pexels-pixabay-315755-min_alhigi.jpg',
                    price: 11.39,
                },
                {
                    _id: '04',
                    name: "Grandma's Fav",
                    img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1654090363/foods/pizzas/pexels-brett-jordan-825661-min_nkonuy.jpg',
                    price: 6.69,
                }
            ] 
        },

        {
            name: 'Noodles',
            img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1654090588/foods/noodles/pexels-jan-n-g-u-y-e-n-_-1001773-min_z2o2on.jpg',

            menu: [
                {
                    _id: '01',
                    name: 'Chinese Special',
                    img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1654090586/foods/noodles/pexels-cats-coming-1907229-min_nvw2bt.jpg',
                    price: 4.39,
                },
                {
                    _id: '02',
                    name: 'Simple Sharp Noodle',
                    img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1654090587/foods/noodles/pexels-zahid-akhtar-2764905-min_mcmyqx.jpg',
                    price: 2.89,
                },
                {
                    _id: '03',
                    name: 'Health Fav',
                    img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1654090588/foods/noodles/pexels-jan-n-g-u-y-e-n-_-1001773-min_z2o2on.jpg',
                    price: 8.39,
                },
            ] 
        },
        {
            name: 'Cake',
            img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1654090982/foods/cake/pexels-abhinav-goswami-291528-min_dsm5c2.jpg',

            menu: [
                {
                    _id: '01',
                    name: 'Velvet Cover',
                    img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1654090983/foods/cake/pexels-ronmar-lacamiento-806363-min_wzrsie.jpg',
                    price: 12.39,
                },
                {
                    _id: '02',
                    name: 'Choco Delight',
                    img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1654090982/foods/cake/pexels-abhinav-goswami-291528-min_dsm5c2.jpg',
                    price: 4.49,
                },
                {
                    _id: '03',
                    name: "Lover's Bite",
                    img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1654090984/foods/cake/pexels-suzy-hazelwood-1126359-min_dfvxs4.jpg',
                    price: 7.39,
                },
                {
                    _id: '04',
                    name: "Pan's Fav",
                    img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1654090985/foods/cake/pexels-vojtech-okenka-1055272-min_pd8n33.jpg',
                    price: 2.69,
                }
            ] 
        },

        {
            name: 'Ice Cream',
            img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1654091307/foods/ice-cream/pexels-anna-tukhfatullina-food-photographerstylist-2638026-min_wtcqyo.jpg',

            menu: [
                {
                    _id: '01',
                    name: 'Kiss of Chocolate',
                    img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1654091307/foods/ice-cream/pexels-avichal-lodhi-2819088-min_mkmrrt.jpg',
                    price: 2.39,
                },
                {
                    _id: '02',
                    name: 'Mug of Happiness',
                    img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1654091307/foods/ice-cream/pexels-anna-tukhfatullina-food-photographerstylist-2638026-min_wtcqyo.jpg',
                    price: 5.29,
                },
                {
                    _id: '03',
                    name: "Heartful",
                    img: 'https://res.cloudinary.com/dujaica3m/image/upload/v1654091308/foods/ice-cream/pexels-lukas-1352281-min_lb58a0.jpg',
                    price: 7.39,
                },
            ] 
        },

     

    ],

    menu:[
        {
            
        }
    ]
}

export default Data;




 