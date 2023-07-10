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
    title:
      "The Art of Creative Writing: Exploring the Boundless Realm of Imagination",
    content:
      "Creative writing is a captivating form of self-expression that allows individuals to delve into the boundless realm of imagination. Whether it's crafting compelling narratives, penning thought-provoking poetry, or inventing vivid worlds, creative writing offers an outlet for exploring emotions, ideas, and experiences. This article explores the art of creative writing, discussing various techniques such as character development, plot construction, and setting creation. It also highlights the importance of honing one's writing skills through practice and seeking inspiration from different sources. Ultimately, it celebrates the beauty of creative writing as a powerful means of communication and personal fulfillment.",
    user_id: 1,
  },

  {
    id: 3,
    title:
      "Unlocking the Secrets of Ancient Civilizations: Archaeological Discoveries that Rewrote History",
    content:
      "Archaeology is an awe-inspiring field that enables us to unlock the secrets of ancient civilizations and rewrite our understanding of history. This article showcases some remarkable archaeological discoveries that have shed light on the past. From unearthing lost cities and deciphering ancient scripts to unraveling cultural practices and technological advancements, these discoveries have expanded our knowledge of human civilization. The article delves into key findings such as the Rosetta Stone, the tomb of Tutankhamun, and the ruins of Machu Picchu, discussing their historical significance and the insights they offer into the lives of our ancestors.",
    user_id: 1,
  },

  {
    id: 4,
    title:
      "From Canvas to Digital: The Evolution of Visual Art in the Digital Age",
    content:
      "The digital age has brought about a remarkable evolution in the world of visual art, transforming traditional art practices and opening up new avenues for creativity. This article explores the impact of digital technology on visual art forms. It discusses how artists are embracing digital tools and techniques to create stunning digital paintings, 3D sculptures, and interactive installations. The article also delves into the rise of digital art communities and the opportunities offered by online platforms for sharing and promoting artwork. It celebrates the fusion of traditional and digital art, highlighting the vast possibilities that the digital age presents to artists.",
    user_id: 4,
  },
  {
    id: 5,
    title: "The Science of Happiness: Exploring the Psychology of Well-being",
    content:
      " Happiness is a fundamental human aspiration, and the science of happiness seeks to understand the factors that contribute to our overall well-being. This article delves into the psychology of happiness, exploring various theories and research findings. It discusses the role of positive emotions, resilience, social connections, and purpose in cultivating happiness. The article also examines evidence-based practices such as gratitude exercises, mindfulness, and acts of kindness that can enhance well-being. By understanding the science behind happiness, we can make informed choices and adopt strategies to lead more fulfilling lives.",
    user_id: 5,
  },
  {
    id: 6,
    title: "Beyond Earth: The Quest for Life in the Universe",
    content:
      "The search for life beyond Earth has fascinated scientists and sparked the imagination of humankind for centuries. This article delves into the ongoing quest to find extraterrestrial life and explores the scientific endeavors undertaken to unravel this profound mystery. It discusses the criteria for habitability in the universe, the exploration of Mars and other celestial bodies, and the discovery of potentially habitable exoplanets. The article also delves into the field of astrobiology, which examines the conditions necessary for life to exist elsewhere in the cosmos. While we have yet to find concrete evidence of extraterrestrial life, the search continues, driven by curiosity and the desire to understand our place in the universe.",
    user_id: 2,
  },
];
const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;
