import {images} from '../../utils/image';

export const FoodList = [
  {
    id: '0',
    image: images.Burger,
    title: 'Burger',
  },
  {
    id: '1',
    image: images.Donat,
    title: 'Donat',
  },
  {
    id: '2',
    image: images.Pizza,
    title: 'Pizza',
  },
  {
    id: '3',
    image: images.Mexican,
    title: 'Mexican',
  },
  {
    id: '4',
    image: images.Asian,
    title: 'Asian',
  },
  {
    id: '5',
    image: images.Swits,
    title: 'Asian',
  },
];

export const state = [
  {
    id: 1,
    name: 'Andaman and Nicobar Islands',
  },
  {
    id: 2,
    name: 'Andhra Pradesh',
  },
  {
    id: 3,
    name: 'Arunachal Pradesh',
  },
  {
    id: 4,
    name: 'Assam',
  },
  {
    id: 5,
    name: 'Bihar',
  },
  {
    id: 6,
    name: 'Chandigarh',
  },
  {
    id: 7,
    name: 'Chhattisgarh',
  },
  {
    id: 8,
    name: 'Dadra and Nagar Haveli',
  },
  {
    id: 9,
    name: 'Daman and Diu',
  },
  {
    id: 10,
    name: 'Delhi',
  },
  {
    id: 11,
    name: 'Goa',
  },
  {
    id: 12,
    name: 'Gujarat',
  },
  {
    id: 13,
    name: 'Haryana',
  },
  {
    id: 14,
    name: 'Himachal Pradesh',
  },
  {
    id: 15,
    name: 'Jammu and Kashmir',
  },
  {
    id: 16,
    name: 'Jharkhand',
  },
  {
    id: 17,
    name: 'Karnataka',
  },
  {
    id: 18,
    name: 'Kerala',
  },
  {
    id: 19,
    name: 'Lakshadweep',
  },
  {
    id: 20,
    name: 'Madhya Pradesh',
  },
  {
    id: 21,
    name: 'Maharashtra',
  },
  {
    id: 22,
    name: 'Manipur',
  },
  {
    id: 23,
    name: 'Meghalaya',
  },
  {
    id: 24,
    name: 'Mizoram',
  },
];

export const city = [
  {
    id: 1,
    name: 'Kheda',
  },
  {
    id: 2,
    name: 'Mahesana',
  },
  {
    id: 3,
    name: 'Morbi',
  },
  {
    id: 4,
    name: 'Nadiad',
  },
  {
    id: 5,
    name: 'Nadiad',
  },
  {
    id: 6,
    name: 'Okha',
  },
  {
    id: 7,
    name: 'Patan',
  },
  {
    id: 8,
    name: 'Porbandar',
  },
  {
    id: 9,
    name: 'Rajkot',
  },
  {
    id: 10,
    name: 'Surat',
  },
  {
    id: 11,
    name: 'Surendranagar',
  },
  {
    id: 12,
    name: 'Valsad',
  },
];

const getRatingText = rating => {
  if (rating === 5) {
    return 'Excellent';
  } else if (rating >= 4) {
    return 'Very Good';
  } else if (rating >= 3) {
    return 'Good';
  } else if (rating >= 2) {
    return 'Fair';
  } else if (rating >= 1) {
    return 'Bad';
  } else {
    return 'No Rating';
  }
};

export const Featured_Restaurants = [
  {
    id: 1,
    BackgroundImg: images.McDonaldBack,
    Rating: '4.5 ⭐ (25+)',
    Like: images.Like,
    RestaurantName: "McDonald's",
    Verified: images.Verified,
    DeliveryIcon: images.Delivery,
    DeliveryOption: ' Free delivery',
    TimeIcon: images.Time,
    DeliveryTime: ' 10-15 mins',
    Burger: 'BURGER',
    Chicken: 'CHICKEN',
    FastFood: 'FAST FOOD',
  },
  {
    id: 2,
    BackgroundImg: images.StarBuckPasta,
    Rating: '4.7 ⭐ (99+)',
    Like: images.Like,
    RestaurantName: 'Starbuck',
    Verified: images.Verified,
    DeliveryIcon: images.Delivery,
    DeliveryOption: ' Free delivery',
    TimeIcon: images.Time,
    DeliveryTime: ' 10-15 mins',
    Burger: 'Burger',
    Chicken: 'CHICKEN',
    FastFood: 'FAST FOOD',
  },
];

export const PopularItems = [
  {
    Id: 1,
    ItemImg: images.ChineseFood,
    Star: images.star,
    Price: '5.50',
    Like: images.Like,
    Rating: ' 4.5 ⭐ (25+)',
    FoodName: 'Salmon Salad',
    FoodDescription: 'Baked salmon fish',
  },
  {
    Id: 2,
    ItemImg: images.ItalianPizza,
    Star: images.star,
    Price: '8.25',
    Like: images.Like,
    Rating: '4.5 ⭐ (25+)',
    FoodName: 'Salmon Salad',
    FoodDescription: 'Baked salmon fish',
  },
  {
    Id: 3,
    ItemImg: images.ChineseFood,
    Star: images.star,
    Price: '5.50',
    Like: images.Like,
    Rating: '4.5 ⭐ (25+)',
    FoodName: 'Salmon Salad',
    FoodDescription: 'Baked salmon fish',
  },
];

export const FoodData = [
  {
    Id: 1,
    ItemImg: images.ChickenHawaiian,
    Price: '12.20',
    Rating: '4.5 ⭐(25+)',
    FoodName: 'Chicken Hawaiian',
    FoodDescription: 'Chicken, Cheese and pineapple'
  },
  {
    Id: 2,
    ItemImg: images.RedPizza,
    Price: '12.20',
    Rating: '4.5 ⭐(25+)',
    FoodName: 'Red N Hot Pizza',
    FoodDescription: 'Chicken, Chili'
  },
  {
    Id: 3,
    ItemImg: images.FoodItem4,
    Price: '12.20',
    Rating: '4.5 ⭐(25+)',
    FoodName: 'Chicken Hawaiian',
    FoodDescription: 'Chicken, Cheese and pineapple'
  },
  {
    Id: 4,
    ItemImg: images.McDonaldBack,
    Price: '$9.50',
    Rating: '4.5 ⭐(30+)',
    FoodName: 'Ground Beef Tacos',
    FoodDescription: 'Spices – chili powder, cumin, onion powder.'
  }
]

export const Setting = [
  {
    Id: 1,
    title: 'Edit Profile',
    aero: images.OpenAero,
  },
  {
    Id: 2,
    title: 'Order Detail',
    aero: images.OpenAero,
  },
  {
    Id: 3,
    title: 'Change Password',
    aero: images.OpenAero,
  },
  {
    Id: 4,
    title: 'Contact Us',
    aero: images.OpenAero,
  },
];

export const CartData = [
  {
    Id: 1,
    ItemImg: images.ChickenHawaiian,
    ItemPrice: '$15.30',
    ItemName: 'Red n hot pizza',
    ItemDescription: 'Spicy chicken, beef',
  },
  {
    Id: 2,
    ItemImg: images.GreekSalad,
    ItemPrice: '$12.00',
    ItemName: 'Greek salad ',
    ItemDescription: 'with baked salmon',
  },
]

export const UpcomingOrder = [
  {
    Id: 1,
    RestaurantName: 'Starbuck',
    RestaurantImage: images.StarBucksLogo,
    EstimateTime: 25,
    Items: '3 Items',
    OrderNumber: '#264100'
  },
];

export const OrderHistoryData = [
  {
    Id: 1,
    RestaurantName: 'Jimmy John’s ',
    RestaurantImage: images.JimmyJohnLogo,
    OrderDate: '20 Jun, 10:30',
    OrderPrice: '$17.10',
    Items: '3 Items',
  },
  {
    Id: 2,
    RestaurantName: 'Subway ',
    RestaurantImage: images.SubwayLogo,
    OrderDate: '19 Jun, 11:50',
    OrderPrice: '$20.50',
    Items: '2 Items',
  },
]