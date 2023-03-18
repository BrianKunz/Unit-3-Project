require("dotenv").config();
require("./backend/config/db");

const Category = require("./backend/models/category");
const Idea = require("./backend/models/idea");

(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    { name: "Birthday", sortOrder: 10 },
    { name: "Aniversary", sortOrder: 20 },
    { name: "Christmas", sortOrder: 30 },
    { name: "Valentines", sortOrder: 40 },
    { name: "Wedding", sortOrder: 50 },
    { name: "Easter", sortOrder: 60 },
    { name: "Bridal Shower", sortOrder: 70 },
    { name: "Baby Shower", sortOrder: 80 },
    { name: "Graduation", sortOrder: 90 },
    { name: "Father's Day", sortOrder: 100 },
    { name: "Mother's Day", sortOrder: 110 },
    { name: "House Warming", sortOrder: 120 },
    { name: "Retirement", sortOrder: 130 },
    { name: "Other", sortOrder: 140 },
  ]);

  await Idea.deleteMany({});
  const ideas = await Idea.create([
    {
      title: "Happy Birthday Victor",
      img: "https://www.aquariumnexus.com/wp-content/uploads/2019/06/betta-fish-died.jpg",
      description: "Hey, you killed that fish",
      category: categories[0],
      link: "",
    },
    {
      title: "Happy Birthday",
      img: "https://m.media-amazon.com/images/I/812v4i0vRdL._SX522_.jpg",
      description: "Amazon.com Gift Card in a Birthday Gift Box",
      category: categories[0],
      link: "https://www.amazon.com/Amazon-com-Gift-Card-Birthday-Cupcake/dp/B01C9MW8Z6/ref=sr_1_6?crid=2NQE5MD4TH10I&keywords=birthday+gift&qid=1679027337&s=gift-cards&sprefix=birthday+gift%2Cgift-cards%2C144&sr=1-6",
    },
    {
      title: "Happy Aniversary",
      img: "https://m.media-amazon.com/images/I/71k61KBLufL._AC_SL1500_.jpg",
      description:
        "Gskyer Telescope, 70mm Aperture 400mm AZ Mount Astronomical Refracting Telescope for Kids Beginners - Travel Telescope with Carry Bag, Phone Adapter and Wireless Remote",
      category: categories[1],
      link: "https://www.amazon.com/Gskyer-Telescope-AZ-Astronomical-Refracting/dp/B081RJ8DW1/ref=sr_1_30_sspa?crid=59DFROM1FRKN&keywords=anniversary+gift&qid=1679028075&s=gift-cards&sprefix=anniversary+gift+%2Cgift-cards%2C151&sr=1-30-spons&psc=1&smid=A2WFLXQCROVSR7&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExM1ZSUEoxQkNON0s0JmVuY3J5cHRlZElkPUEwNTM3MzYxUjkzRENRTUVTOFE1JmVuY3J5cHRlZEFkSWQ9QTA3MDEzNDkxNlRURkVQSjU0R0dSJndpZGdldE5hbWU9c3BfYnRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
    },
    {
      title: "Happy Aniversary",
      img: "https://m.media-amazon.com/images/I/816RD5nOpGL._AC_SL1500_.jpg",
      description:
        "Can't Help Falling in Love Wood Music Box, Antique Engraved Musical Boxes Case for Love One Wooden Music Box",
      category: categories[1],
      link: "https://www.amazon.com/VACTER-Falling-Antique-Engraved-Musical/dp/B08RNGR7NM/ref=sr_1_2?crid=35IGRWI8DWWK7&keywords=for+her&qid=1679028459&sprefix=for+h%2Caps%2C147&sr=8-2",
    },
    {
      title: "Merry Christmas",
      img: "https://m.media-amazon.com/images/I/71JOxGoIx7L._AC_SL1058_.jpg",
      description:
        "24PCS Grill Tools Set BBQ Accessories for Outdoor Grill Utensils Stainless Steel Grilling Tools Set",
      category: categories[2],
      link: "https://www.amazon.com/POLIGO-24PCS-Grill-Utensils-Set-BBQ-Accessories-for-Outdoor-Grill-Tools-Stainless-Steel-Grilling-Tools-Set-for-Christmas-Birthday-Presents-Barbecue-Accessories-Ideal-Grilling-Gifts-for-Men-Dad-Women/dp/B08FX1YRB3/ref=sr_1_8?crid=ID8ESFVJJ9FK&keywords=christmas+gifts+for+men&qid=1679028550&sprefix=christmas+gifts+for+men%2Caps%2C182&sr=8-8",
    },
    {
      title: "Happy Christmas",
      img: "https://m.media-amazon.com/images/I/611DCpUuhfL._AC_SL1500_.jpg",
      description:
        "Wearable Blanket Sweatshirt Gifts for Women and Men, Super Warm and Cozy Giant Blanket Hoodie, Thick Flannel Blanket with Sleeves and Giant Pocket - Dark Gray",
      category: categories[2],
      link: "https://www.amazon.com/Waitu-Wearable-Blanket-Snuggle-Sleeves/dp/B07Z5LGZJM/ref=sr_1_3?crid=551BQU0X3QYZ&keywords=christmas+gifts+for+women&qid=1679028686&sprefix=christmas+gifts+for+women%2Caps%2C177&sr=8-3",
    },
    {
      title: "Happy Valentines",
      img: "https://m.media-amazon.com/images/I/81NjBlviHSL._SL1500_.jpg",
      description:
        "Beard Kit for men - Beard Care Kit for Mens Gifts with Beard Oil, Beard Balm, Beard Brush, Comb, Scissors, Ebook",
      category: categories[3],
      link: "https://www.amazon.com/Gifts-Men-Mustache-Valentines-Boyfriend/dp/B07P17XB12/ref=sr_1_4?crid=Q7VV2BHOZSL9&keywords=valentines+gift+for+him&qid=1679028808&sprefix=valentines+gift+for+him%2Caps%2C179&sr=8-4",
    },
    {
      title: "Happy Valentines",
      img: "https://m.media-amazon.com/images/I/81RtUDpyWIL._AC_SL1500_.jpg",
      description: "Stainless Steel Tumbler 20oz I Love You",
      category: categories[3],
      link: "https://www.amazon.com/Macorner-Tumbler-Women-Insulated-Anniversary/dp/B09C7MNGM7/ref=sr_1_50?crid=3FIH63IN6UW0E&keywords=valentines+gift+for+her&qid=1679028954&sprefix=valentines+gift+for+h%2Caps%2C144&sr=8-50",
    },
    {
      title: "Congrats on the Wedding",
      img: "https://m.media-amazon.com/images/I/71lLyKhF+bL._AC_SL1500_.jpg",
      description: "Stainless Steel Insulated Tumbler Set",
      category: categories[4],
      link: "https://www.amazon.com/Gtmileo-Stainless-Insulated-Newlyweds-Anniversary/dp/B0BHY7TS9B/ref=sr_1_5?crid=RR4JUZ69SSE5&keywords=wedding+gift&qid=1679029105&sprefix=wedding+gift+%2Caps%2C148&sr=8-5",
    },
    {
      title: "Congrats on the Wedding",
      img: "https://m.media-amazon.com/images/I/71OvrL1zq6L._AC_SL1500_.jpg",
      description: "Plaster Hand Mold Casting Kit, DIY Kits",
      category: categories[4],
      link: "https://www.amazon.com/Hand-Casting-Kit-Couples-Birthday/dp/B092RFHRVW/ref=sr_1_8?crid=RR4JUZ69SSE5&keywords=wedding+gift&qid=1679029174&sprefix=wedding+gift+%2Caps%2C148&sr=8-8",
    },
    {
      title: "Happy Easter",
      img: "https://m.media-amazon.com/images/I/71ha8T1ulPL._AC_SL1500_.jpg",
      description: 'My 1st Easter Basket Plush Playset, 5 Pieces, 6"',
      category: categories[5],
      link: "https://www.amazon.com/GUND-Easter-Basket-Playset-Stuffed/dp/B010VLU6J2/ref=sr_1_15?crid=3SWJ44AYADG4X&keywords=easter+gift&qid=1679029265&sprefix=easter+gif%2Caps%2C186&sr=8-15",
    },
    {
      title: "Happy Easter",
      img: "https://m.media-amazon.com/images/P/B0BVSTWTLP.01._SCLZZZZZZZ_SX500_.jpg",
      description:
        "200 Funny Jokes : Perfect Easter Basket Stuffer for Kids and for Teens & Adults ",
      category: categories[5],
      link: "https://www.amazon.com/Easter-Basket-Stuffers-Perfect-Activities/dp/B0BVSTWTLP/ref=sr_1_44?crid=3SWJ44AYADG4X&keywords=easter+gift&qid=1679029354&sprefix=easter+gif%2Caps%2C186&sr=8-44&asin=B0BVSTWTLP&revisionId=&format=4&depth=1",
    },
    {
      title: "Happy Bridal Shower",
      img: "https://m.media-amazon.com/images/I/A1qcK-XxevL._SL1500_.jpg",
      description: "Personalized Wood Sign ",
      category: categories[6],
      link: "https://www.amazon.com/stores/page/EDA14E4A-7867-416E-A596-E995832AFF30/?_encoding=UTF8&store_ref=SB_A08959573EHZDMUSC28C5&pd_rd_plhdr=t&aaxitk=c20faf9eebe5f9e7a052a547d5778411&hsa_cr_id=0&lp_asins=B017WY86Y8%2CB09MPN5L9L%2CB0B2QH2Z5R&lp_query=bridal%20shower%20gift&lp_slot=auto-sparkle-hsa-tetris&ref_=sbx_be_s_sparkle_lsi4d_hl&pd_rd_w=2EW5q&content-id=amzn1.sym.7dd77237-72be-4809-b5b5-d553eab7ad9d%3Aamzn1.sym.7dd77237-72be-4809-b5b5-d553eab7ad9d&pf_rd_p=7dd77237-72be-4809-b5b5-d553eab7ad9d&pf_rd_r=Y5PJ6P8YS7JRWRJVEG6B&pd_rd_wg=85xs0&pd_rd_r=b6e6ec5d-ccbd-467f-be68-597d8fb6c30e",
    },
    {
      title: "Happy Bridal Shower",
      img: "https://m.media-amazon.com/images/I/81h+-wELmkL._AC_SL1500_.jpg",
      description:
        "BRIDAL Wedding Guest Book Registry Items Memory Scrapbook Album",
      category: categories[6],
      link: "https://www.amazon.com/AW-BRIDAL-Personalized-Anniversary-Engagement/dp/B0BCZ2TJDW/ref=sr_1_12_sspa?keywords=bridal+shower+gift&qid=1679029477&sprefix=brid%2Caps%2C184&sr=8-12-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyT0pGOTlIWU1UQlVLJmVuY3J5cHRlZElkPUEwMzA5NjQxMU9ZWVQwMERQOUtTRiZlbmNyeXB0ZWRBZElkPUEwMTI2MTM3MUo5SzlMU1dTMks1QiZ3aWRnZXROYW1lPXNwX210ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    },
    {
      title: "Congrats on the new Baby",
      img: "https://m.media-amazon.com/images/I/61YD7Ni2baL._AC_SL1000_.jpg",
      description:
        "Baby Prediction Cards For Baby Shower/Advice Cards/Baby Shower Decorations, (Set of 50) Baby Shower Game, One Size, kraft, white, 28440NA",
      category: categories[7],
      link: "https://www.amazon.com/Kate-Aspen-28440NA-Prediction-Advice/dp/B07MTSXQTR/ref=sr_1_3?crid=24KJOSZ36MO7F&keywords=baby+shower&qid=1679029689&sprefix=baby+showe%2Caps%2C165&sr=8-3",
    },
    {
      title: "Congrats on the new Baby",
      img: "https://m.media-amazon.com/images/I/81yfy0xyfKL._AC_SL1500_.jpg",
      description:
        "MiniPod Baby Dome for On the Go | Travel Baby Tent for Beach Protects from Sun, Wind, Bugs | Lightweight Portable Baby Bed",
      category: categories[7],
      link: "https://www.amazon.com/hiccapop-Miniature-PlayPod-with-Dome/dp/B08NFPTHY1/ref=sr_1_25_sspa?crid=24KJOSZ36MO7F&keywords=baby+shower&qid=1679029737&sprefix=baby+showe%2Caps%2C165&sr=8-25-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFZTUZTSUgwRVM4VkQmZW5jcnlwdGVkSWQ9QTA2MTU2OTQzMVJZT0hSSVRBUDlBJmVuY3J5cHRlZEFkSWQ9QTA3NzcxNjMxWEpaMkUxUk9aSFNVJndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
    },
    {
      title: "Congrats on the Graduation",
      img: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C71ry6iv7T1L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png",
      description:
        "I Graduated Can I Go Back To Bed Now T-Shirt Graduation T-Shirt",
      category: categories[8],
      link: "https://www.amazon.com/Graduated-Back-T-Shirt-Graduation-Gift/dp/B07CRGG1M2/ref=sr_1_3?crid=182IO5RLHQ28T&keywords=graduation+gift&qid=1679029821&sprefix=graduation+gif%2Caps%2C196&sr=8-3",
    },
    {
      title: "Congrats on the Graduation",
      img: "https://m.media-amazon.com/images/I/71VjsbbJPRL._SL1500_.jpg",
      description: "Go Confidently graduation Compass with Wooden box",
      category: categories[8],
      link: "https://www.amazon.com/Confidently-presentation-inspirational-Confirmation-communication/dp/B094S9NW9V/ref=sr_1_15?crid=182IO5RLHQ28T&keywords=graduation+gift&qid=1679029821&sprefix=graduation+gif%2Caps%2C196&sr=8-15",
    },
    {
      title: "Wood Phone Docking Station",
      img: "https://m.media-amazon.com/images/I/81Z+K3ry4fS._AC_SX466_.jpg",
      description:
        'Charge your cell phone and keep your daily-used things at hand. Size assembled 5.9x10.4x7.4". Please note! Accessories shown in the pictures are not included!',
      category: categories[9],
      link: "https://www.amazon.com/TESLYAR-Organizer-Anniversary-Nightstand-Graduation/dp/B08YJR9HDL/ref=sr_1_2?keywords=father%27s+day+gifts&sr=8-2",
    },
    {
      title: "Power Tool Organizer",
      img: "https://www.amazon.com/Kayfia-Organizer-Organization-Organizers-Screwdriver/dp/B0BJZ8YFNC/ref=sr_1_3?keywords=father%27s+day+gifts&sr=8-3",
      description:
        " Three-layer power tool organizer wall mount, the top mesh shelf can store small tools without dropping, the middle shelf can store the toolbox and battery, four-slot electric drill holder with upturned anti-skid design, with four small tool storage accessories on both sides, for storing pliers, screwdriver, electric drill bit or hammer. You can easily store most of your tools with only one power tool storage rack, resulting in a neat workbench.",
      category: categories[9],
      link: "https://www.amazon.com/Kayfia-Organizer-Organization-Organizers-Screwdriver/dp/B0BJZ8YFNC/ref=sr_1_3?keywords=father%27s+day+gifts&sr=8-3",
    },
    {
      title: "Hand Lotion",
      img: "https://m.media-amazon.com/images/I/81EQsxwL-TL._SX466_.jpg",
      description:
        "10 Natural Scents-honey,coconut,rose,avocado,cherry blossoms,grapefruit,chamomile,shea butter,lavender,aloe vera. Pick and choose your favorite scent based on your mood at the moment from our 10 natural fragrances.",
      category: categories[10],
      link: "https://www.amazon.com/Scented-Cracked-Moisturizing-Moisturizer-Hydration/dp/B094JJNY19/ref=sr_1_3?keywords=mother%27s+day+gifts&sr=8-3",
    },
    {
      title: "Butterfly Solar Wind Chimes",
      img: "https://m.media-amazon.com/images/I/81XkwTuacHL._AC_SX679_.jpg",
      description:
        "These are interesting and magical Butterfly wind chimes that keep you in a good mood. At night, they will shine in wonderful colors, yellow green orange purple red and blue. They will change various kinds of brilliant colors to light up your heart, making you and family happy. You'll love them.(GIFTS FOR MOM ,MOM GIFTS,BIRTHDAY GIFTS FOR MOM,GRANDMA GIFTS, GARDEN GIFTS FOR MOM)",
      category: categories[10],
      link: "https://www.amazon.com/WENANA-Butterfly-Wind-Chimes-Changing/dp/B0B56ZB37D/ref=sxin_26_ac_d_hl?ac_md=9-2-Q2hpbWVz-ac_d_hl_hl_rf&content-id=amzn1.sym.ea5a3043-3172-4e81-bcc4-eb7524db4f7c%3Aamzn1.sym.ea5a3043-3172-4e81-bcc4-eb7524db4f7c&cv_ct_cx=mother%27s+day+gifts&keywords=mother%27s+day+gifts&pd_rd_i=B0B56ZB37D&pd_rd_r=50412353-34f1-4da3-854e-a390be881833&pd_rd_w=6GDbh&pd_rd_wg=2FFtX&pf_rd_p=ea5a3043-3172-4e81-bcc4-eb7524db4f7c&pf_rd_r=2ZX2MR6PPJX15G124GVW&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-3-25fd44b4-555a-4528-b40c-891e95133f20",
    },
    {
      title: "Seasonal Welcome Sign",
      img: "https://m.media-amazon.com/images/I/91idsC4AzfL._AC_SL1500_.jpg",
      description:
        "Our front door welcome sign can be a patriotic decorations or ornament to complement other decorations. our wooden wreaths can also be used for Valentines Day, St Patricks Day, Easter, 4 of july decor, fall decor for home,harvest day, Halloween, Christmas and other festivals. We can switch scenes according to different Holiday and use one thing for many purposes.",
      category: categories[11],
      link: "https://www.amazon.com/Interchangeable-Decoration-Farmhouse-Halloween-Christmas/dp/B08YQRPYPS/ref=sr_1_3?keywords=house+warming+gifts+new+home&sr=8-3",
    },
    {
      title: "Cheese Board and Knife Set",
      img: "https://m.media-amazon.com/images/I/91Tt4xxKhwL._AC_SX679_.jpg",
      description:
        "Dazzle your guests with SMIRLY's wood cheese board & charcuterie tray. We specialize in serving dishes for entertaining with a ton of beneficial features to make hosting fun & easy. Our charcuterie tray is the perfect size for displaying a variety of delicious delectables including meats, cheeses of various textures, crackers, veggies, fruit, and more. Welcome guests with our beautiful meat and cheese tray filled with a colorful and tasty array of appetizing offerings.",
      category: categories[11],
      link: "https://www.amazon.com/Charcuterie-Cheese-Board-Knives-Set/dp/B07DL7ZV31/ref=sr_1_25?keywords=house+warming+gifts+new+home&sr=8-25",
    },
    {
      title: " Funny Retirement Gift",
      img: "https://m.media-amazon.com/images/I/717Ihwjh8fL._AC_SL1500_.jpg",
      description:
        '【2023 FUNNY RETIREMENT GIFTS MUG】: Superior quality retirement gifts for men and women, "Fucking Quitter I Mean Happy Retirement" sign coffee mug, Humorous retirement gifts are sure to be the talk of the retirement party.',
      category: categories[12],
      link: " https://www.amazon.com/Retirement-Women-Quitter-Coffee-Retired-Coworkers/dp/B08JZC6HNF/ref=sr_1_4?keywords=retirement+gifts&sr=8-4",
    },
    {
      title: "Whiskey Glass Set",
      img: "https://m.media-amazon.com/images/I/81IOSx9hvkL._AC_SL1500_.jpg",
      description:
        "Full Package Gift Set - The gift set includes 1 handmade wooden box, 1 thick base 11oz whisky glass, 1 slate coaster, 4 natural granite stones, and 1 small gift card. All part of the gift set will be delivered in a delicate designed gift package.",
      category: categories[12],
      link: "https://www.amazon.com/Retirement-Gifts-Men-Whiskey-Glass/dp/B0BJD1GHXT/ref=sr_1_17?keywords=retirement+gifts&sr=8-17",
    },
    {
      title: "Unmovable Caddy",
      img: "https://m.media-amazon.com/images/I/81Ur4EYm57L._AC_SL1500_.jpg",
      description:
        "Fit 2 Golf Bags and Other Golfing Equipment and Accessories in This Handy Storage Rack",
      category: categories[14],
      link: "https://www.amazon.com/Milliard-Golf-Organizer-Equipment-Accessories/dp/B073RN7LMJ/ref=sr_1_6?crid=9NXUKGXM7JWD&keywords=great+gift&qid=1679029973&sprefix=great+gift%2Caps%2C175&sr=8-6",
    },
    {
      title: "Quick Help Flashlight",
      img: "https://m.media-amazon.com/images/I/814Brc242GL._AC_SL1500_.jpg",
      description:
        "RAK Telescoping Magnetic Pickup Tool - Extendable Magnetic Flashlight ",
      category: categories[14],
      link: "https://www.amazon.com/Magnetic-Pickup-Tool-Telescoping-Stick/dp/B01MR53G6C/ref=sr_1_27_sspa?crid=9NXUKGXM7JWD&keywords=great+gift&qid=1679030224&sprefix=great+gift%2Caps%2C175&sr=8-27-spons&psc=1&smid=A2Q7QEON7FSI1I&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVVNWVEZKSE1IR0hRJmVuY3J5cHRlZElkPUEwNzI4MDc1MURCU1BFNUg2Wk4zNSZlbmNyeXB0ZWRBZElkPUEwNzk4NDU0MVYyUFdGVDM4RERPRiZ3aWRnZXROYW1lPXNwX210ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    },
  ]);

  console.log(ideas);

  process.exit();
})();
