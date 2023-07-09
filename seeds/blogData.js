const { Blog } = require("../models");

const blogdata = [
  {
    id: 1,
    title: "The best video games of the 90s",
    content:
      "The best video games of the 90s; three iconic game characters from the 90s \n Coming up with a list of the best video games of the 90s is quite the challenge. For me the 90s was easily the most exciting decade in gaming. The industry was more mature and more mainstream, driven by business and the need to grow through technology but also design choices. \n \n I realise I haven’t painted the rosiest picture there, and I did miss the innovative, hobbyist era of the 80s, but it was an amazing decade to experience as a gamer. Every month I’d grab the latest video game magazines to read about the new titles that would push the hardware to the limits. \n \nThat hardware was inevitably consoles. Computers were still popular, with the decade witnessing the rise of the PC as a leading platform, and the arcades were clinging on, but consoles became the system of choice for many. That brought about those famous heavyweight rivalries – Nintendo versus Sega versus Sony – and in that battleground some incredible victories were made. \n\nIf you're a fan of old games and console design, a great way to rekindle that love of old tech is with one of the best retro game consoles. Or you can play most of the games below on new consoles, including PlayStation 5. Check out our Nintendo Switch Prime Day deals for the latest discounts on this great handheld too, it's a great console for classic games. \n The best video games of the 90s for art and design \n Selecting the best video games of the 80s was tricky, and doing the same for the 90s has been almost impossible. If I had another ten to choose then the likes of Sonic The Hedgehog, Myst, Metal Gear Solid and Half-Life would surely have made the list. But here, in chronological order, are my ten most important, influential and downright bloody great games of the 90s.",
    user_id: 1,
  },
  {
    id: 2,
    title: "blogtastic 2",
    content: "something amazing is happening woop woop",
    user_id: 1,
  },

  {
    id: 3,
    title: "blogtastic 3",
    content: "something amazing is happening woop woop",
    user_id: 1,
  },

  {
    id: 4,
    title: "blogtastic 4",
    content: "something amazing is happening woop woop",
    user_id: 4,
  },
  {
    id: 5,
    title: "blogtastic 5",
    content: "something amazing is happening woop woop",
    user_id: 5,
  },
  {
    id: 6,
    title: "new BLOG",
    content: "something amazing is happening woop woop",
    user_id: 2,
  },
];
console.log(blogdata);
const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;
