require('dotenv').config();
require('./backend/config/db');

const Category = require("./backend/models/category");
// const Idea = require("./backend/models/idea");

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Birthday', sortOrder: 10},
    {name: 'Aniversary', sortOrder: 20},
    {name: 'Christmas', sortOrder: 30},
    {name: 'Valentines', sortOrder: 40},
    {name: 'Wedding', sortOrder: 50},
    {name: 'Easter', sortOrder: 60},
    {name: 'Bridal Shower', sortOrder: 70},
    {name: 'Baby Shower', sortOrder: 80},
    {name: 'Graduation', sortOrder: 90},
    {name: "Father's Day", sortOrder: 100},
    {name: "Mother's Day", sortOrder: 110},
    {name: "House Warming", sortOrder:120},
    {name: "Retirement", sortOrder: 130},
    {name: "Other", sortOrder: 140},
  ]);

//   await Idea.deleteMany({});
//   const ideas = await Idea.create([
//     {name: 'Hamburger', emoji: '🍔', category: categories[0], price: 5.95},
//     {name: 'Turkey Sandwich', emoji: '🥪', category: categories[0], price: 6.95},
//     {name: 'Hot Dog', emoji: '🌭', category: categories[0], price: 3.95},
//     {name: 'Crab Plate', emoji: '🦀', category: categories[1], price: 14.95},
//     {name: 'Fried Shrimp', emoji: '🍤', category: categories[1], price: 13.95},
//     {name: 'Whole Lobster', emoji: '🦞', category: categories[1], price: 25.95},
//     {name: 'Taco', emoji: '🌮', category: categories[2], price: 1.95},
//     {name: 'Burrito', emoji: '🌯', category: categories[2], price: 4.95},
//     {name: 'Pizza Slice', emoji: '🍕', category: categories[3], price: 3.95},
//     {name: 'Spaghetti', emoji: '🍝', category: categories[3], price: 7.95},
//     {name: 'Garlic Bread', emoji: '🍞', category: categories[3], price: 1.95},
//     {name: 'French Fries', emoji: '🍟', category: categories[4], price: 2.95},
//     {name: 'Green Salad', emoji: '🥗', category: categories[4], price: 3.95},
//     {name: 'Ice Cream', emoji: '🍨', category: categories[5], price: 1.95},
//     {name: 'Cup Cake', emoji: '🧁', category: categories[5], price: 0.95},
//     {name: 'Custard', emoji: '🍮', category: categories[5], price: 2.95},
//     {name: 'Strawberry Shortcake', emoji: '🍰', category: categories[5], price: 3.95},
//     {name: 'Milk', emoji: '🥛', category: categories[6], price: 0.95},
//     {name: 'Coffee', emoji: '☕', category: categories[6], price: 0.95},
//     {name: 'Mai Tai', emoji: '🍹', category: categories[6], price: 8.95},
//     {name: 'Beer', emoji: '🍺', category: categories[6], price: 3.95},
//     {name: 'Wine', emoji: '🍷', category: categories[6], price: 7.95},
//   ]);

//   console.log(ideas)

  process.exit();

})();