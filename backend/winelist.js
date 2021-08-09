import bcrypt from 'bcryptjs';


export const wineslist = {
    users: [
        {
            name: 'Brandon',
            email: 'wiserobotizo@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: 'James',
            email: 'example@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],
    wines: [
        {
            name: "Blue Rose 2017",
            image: "https://d1q3ne4l9f3g5t.cloudfront.net/blue-sky-winery/wines/2017 BLUE ROSE FRONT.jpg", 
            price: 18.99,
            description: "100% Syrah made rosé with a fruity yet tarte raspberry taste with a dry finish. Pairs well with salads, curry and biriyani dishes.",
            stockCount: 10
        },
        {
            name: "Blue Lightning 2014",
            image: "https://d1q3ne4l9f3g5t.cloudfront.net/blue-sky-winery/wines/2014 BLUE LIGHTNING FRONT.jpg", 
            price: 27.99,
            description: "A red blend of Cabernet Franc and Merlot which offers up flavours of plum, and berries. A fruity balance by herbal aromas of tobacco-leaf and bell pepper. Is a great wine to serve with roast dishes, as well as lamb masala.",
            stockCount: 20
        },
        {
            name: "Vivid 2014",
            image: "https://d1q3ne4l9f3g5t.cloudfront.net/blue-sky-winery/wines/2014 VIVD FRONT.jpg", 
            price: 28.99,
            description: "Powerful green pepper, black currant and plum flavours with a spicy black pepper finish. Pairs well with red meats, butter chicken, chicken tikka as well as soft cheeses. Blend of Cabernet Sauvignon, Cabernet Franc, Syrah and Merlot.",
            stockCount: 5
        },
        {
            name: "Syrah 2014",
            image: "https://d1q3ne4l9f3g5t.cloudfront.net/blue-sky-winery/wines/2014 SYRAH FRONT.jpg", 
            price: 28.99,
            description: "Deep purple colour, fruity aromas and flavours of blackberry, blueberry and dark cherry with a spicy black pepper, cinnamon taste to finish. Pairs well with steak, grilled meats as well as spicy butter chicken or lamb masala.",
            stockCount: 12
        },
        {
            name: "Cabernet Franc 2015",
            image: "https://d1q3ne4l9f3g5t.cloudfront.net/blue-sky-winery/wines/2015 CABARNET FRANC FRONT.jpg", 
            price: 26.99,
            description: "Wild blackberry, black cherry and cracked pepper flavour with a touch of exotic spice. Pairs well with roast chicken, pork, and grilled beef or lamb.",
            stockCount: 18
        },
        {
            name: "Yami 2014",
            image: "https://d1q3ne4l9f3g5t.cloudfront.net/blue-sky-winery/wines/2014 YAMI FRONT.jpg", 
            price: 18.99,
            description: "A wine that has a delicate floral and fruity aromas with sweet front and dry finish. Can be enjoyed with fish, curry dishes or simply by the glass on the patio.",
            stockCount: 30
        },
        {
            name: "Viognier 2016",
            image: "https://d1q3ne4l9f3g5t.cloudfront.net/blue-sky-winery/wines/2016 VIONGIER FRONT.jpg", 
            price: 19.99,
            description: "Our Viognier has delicate fruitful green apple taste with a hint of acidity. Pairs well with fish, soft cheeses and grilled chicken.",
            stockCount: 5
        },
        {
            name: "Cabernet Sauvignon 2013",
            image: "https://d1q3ne4l9f3g5t.cloudfront.net/blue-sky-winery/wines/2013 CABARNET SAUVIGNON FRONT.jpg", 
            price: 23.99,
            description: "Aromas of ripe berries, plum, and dark cherry followed by light smoky flavours. Can be enjoyed with grilled or roasted beef, lamb, pork, as well as roasted vegetables and spicy soups. Also, a delightful match to chocolate desserts!",
            stockCount: 5
        },
        {
            name: "Suvarna",
            image: "https://d1q3ne4l9f3g5t.cloudfront.net/blue-sky-winery/wines/SUVARNA FRONT.jpg", 
            price: 22.99,
            description: "A blend of Cabernet Sauvignon and Syrah. An enticing nose with black cherry, ripe plum, soft vanilla and toffee taste. This wine with its soft tannins will artfully pair with grilled or roasted red meat dishes as well as butter chicken and lamb masala.",
            stockCount: 20
        },
        {
            name: "Syrah 2013",
            image: "https://d1q3ne4l9f3g5t.cloudfront.net/blue-sky-winery/wines/2013 SYRAH FRONT.jpg",  
            price: 24.99,
            description: "Has a deep purple color, fruity aromas and flavours of blackberry and cherry with a spicy peppery cinnamon taste surrounded by soft tannins with the hint of vanilla to the finish. Can be enjoyed with grilled meats as well as spicy butter chicken or lamb masala.",
            stockCount: 12
        },
        {
            name: "Ninish 2013",
            image: "https://d1q3ne4l9f3g5t.cloudfront.net/blue-sky-winery/wines/2013 NINSH FRONT.jpg", 
            price: 27.99,
            description: "A blend of Cabernet Sauvignon, Syrah, Cabernet Franc that’s been aged 18 months in French and American oak. This complex wine has a deep colour with a spicy black pepper, black cherry and vanilla aromas. Can be enjoyed with lamb, beef and strong cheeses.",
            stockCount: 2
        },
        {
            name: "Rosé",
            image: "https://d1q3ne4l9f3g5t.cloudfront.net/blue-sky-winery/wines/ROSE FRONT.jpg",  
            price: 18.99,
            description: "Rosé has a vibrant ruby colour, with a cranberry taste and a crispy acidity. Can be enjoyed with grilled chicken and pork as well as by the glass on the patio.",
            stockCount: 0
        },
        {
            name: "Ninish 2011",
            image: "https://d1q3ne4l9f3g5t.cloudfront.net/blue-sky-winery/wines/2011 NINSH FRONT.jpg", 
            price: 21.95,
            description: "A blend of Cabernet Sauvignon, Syrah, and Cabernet Franc aged in American and French oak. Has a deep colour with a spicy black pepper, black cherry, and vanilla aromas, Ninsh can be enjoyed with lamb, beef, and stronger cheeses.",
            stockCount: 9
        },
        {
            name: "Syrah 2011",
            image: "https://d1q3ne4l9f3g5t.cloudfront.net/blue-sky-winery/wines/2011 SYRAH FRONT.jpg", 
            price: 19.95,
            description: "Aged in American and French oak, with an intense colour and spicy cinnamon, berries aromas surrounded by soft tannins with a hint of vanilla on the finish. This wine can be paired wonderfully with grilled meats and a pasta dish.",
            stockCount: 34
        }
    ]
};