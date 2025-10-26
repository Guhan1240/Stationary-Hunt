

const dailyCollections = [
  {
    id: 1,
    shop: "History Books",
    // logo: "/logo1.png",
    contact: 9972656789,
    product: [
      { category: "tnpsc", name: "TNPSC Book", sub: true, level: 100, rate: 200, img: "/tnpsc1.png" },
      { category: "neet", name: "NEET Book", sub: true, level: 600, rate: null, img: "/neet1.png" },
    ],
  },
  {
    id: 2,
    shop: "Way to Success",
    // logo: "/logo2.png",
    contact: 9876543201,
    product: [
      { category: "police", name: "Police book", sub: true, level: 100, rate: 200, img: "/tnpsc1.png" }, // same as shop 1
      { category: "biology", name: "Bio Guid", sub: true, level: 800, rate: 200, img: "/neet2.png" },
    ],
  },
  {
    id: 3,
    shop: "Loyal Books",
    // logo: "/logo3.png",
    contact: 9972656789,
    product: [
      { category: "tnpsc", name: "TNPSC Beginner", sub: false, level: 300, rate: 200, img: "/tnpsc3.png" },
      { category: "neet", name: "NEET Book", sub: true, level: 600, rate: null, img: "/neet1.png" }, // same as shop 1
    ],
  },
  {
    id: 4,
    shop: "Joy Stationery",
    // logo: "/logo4.png",
    contact: 9988776655,
    product: [
      { category: "stationery", name: "Ball Pen Pack", sub: false, level: null, rate: 50, img: "/pen.png" },
      { category: "stationery", name: "Pencil Set", sub: false, level: null, rate: 30, img: "/pencil.png" },
      { category: "stationery", name: "Notebook", sub: false, level: null, rate: 100, img: "/notebook.png" },
    ],
  },
  {
    id: 5,
    shop: "Smart Learning",
    // logo: "/logo5.png",
    contact: 9876543210,
    product: [
      { category: "science", name: "Physics Basics", sub: true, level: 350, rate: 250, img: "/physics1.png" },
      { category: "stationery", name: "Notebook", sub: false, level: null, rate: 100, img: "/notebook.png" }, // same as shop 4
      { category: "stationery", name: "Geometry Box", sub: false, level: null, rate: 150, img: "/geometry.png" },
    ],
  },
  {
    id: 6,
    shop: "Next Gen Supplies",
    // logo: "/logo6.png",
    contact: 9123456789,
    product: [
      { category: "engineering", name: "JavaScript Guide", sub: true, level: 500, rate: 350, img: "/js1.png" },
      { category: "stationery", name: "Ball Pen Pack", sub: false, level: null, rate: 50, img: "/pen.png" }, // same as shop 4
      { category: "stationery", name: "Markers Set", sub: false, level: null, rate: 120, img: "/markers.png" },
    ],
  },
  {
    id: 7,
    shop: "EduCorner",
    // logo: "/logo7.png",
    contact: 9234567890,
    product: [
      { category: "kids", name: "Alphabet Learning", sub: false, level: 50, rate: 100, img: "/alphabet.png" },
      { category: "stationery", name: "Notebook", sub: false, level: null, rate: 100, img: "/notebook.png" }, // same as shop 4 & 5
      { category: "stationery", name: "Eraser Pack", sub: false, level: null, rate: 20, img: "/eraser.png" },
    ],
  },
  {
    id: 8,
    shop: "Global Academy",
    // logo: "/logo8.png",
    contact: 9345678901,
    product: [
      { category: "competition", name: "SSC Guide", sub: true, level: 700, rate: 350, img: "/ssc.png" },
      { category: "stationery", name: "Highlighter Set", sub: false, level: null, rate: 90, img: "/highlighter.png" },
      { category: "neet", name: "NEET Guide", sub: true, level: 800, rate: 200, img: "/neet2.png" }, // same as shop 2
    ],
  },
  {
    id: 9,
    shop: "Creative Minds",
    // logo: "/logo9.png",
    contact: 9456789012,
    product: [
      { category: "stationery", name: "Sketch Book", sub: false, level: null, rate: 120, img: "/sketch.png" },
      { category: "stationery", name: "Color Pencils", sub: false, level: null, rate: 80, img: "/colorpencil.png" },
      { category: "stationery", name: "Notebook", sub: false, level: null, rate: 100, img: "/notebook.png" }, // repeated
    ],
  },
  {
    id: 10,
    shop: "Toy World",
    // logo: "/logo10.png",
    contact: 9567890123,
    product: [
      { category: "toy", name: "Building Blocks", sub: false, level: null, rate: 350, img: "/blocks.png" },
      { category: "toy", name: "Remote Car", sub: false, level: null, rate: 1200, img: "/car.png" },
    ],
  },
  {
    id: 11,
    shop: "Stationery Hub",
    // logo: "/logo11.png",
    contact: 9678901234,
    product: [
      { category: "stationery", name: "Stapler", sub: false, level: null, rate: 150, img: "/stapler.png" },
      { category: "stationery", name: "Glue Stick", sub: false, level: null, rate: 40, img: "/glue.png" },
      { category: "Ball Pen Pack", name: "Ball Pen Pack", sub: false, level: null, rate: 50, img: "/pen.png" }, // repeated
    ],
  },
  {
    id: 12,
    shop: "Book Planet",
    // logo: "/logo12.png",
    contact: 9789012345,
    product: [
      { category: "Police", name: "Police book", sub: true, level: 900, rate: 450, img: "/neet3.png" },
      { category: "Biology", name: "TNPSC Bio guid", sub: true, level: 700, rate: 350, img: "/tnpsc2.png" },
    ],
  },
  {
    id: 13,
    shop: "Techie Store",
    // logo: "/logo13.png",
    contact: 9890123456,
    product: [
      { category: "gadgets", name: "USB Drive 32GB", sub: false, level: null, rate: 500, img: "/usb.png" },
      { category: "gadgets", name: "Wireless Mouse", sub: false, level: null, rate: 800, img: "/mouse.png" },
    ],
  },
  {
    id: 14,
    shop: "Fun & Learn",
    // logo: "/logo14.png",
    contact: 9901234567,
    product: [
      { category: "kids", name: "Puzzle Game", sub: false, level: null, rate: 250, img: "/puzzle.png" },
      { category: "toy", name: "Soft Toy", sub: false, level: 500, rate: 400, img: "/softtoy.png" },
    ],
  },
  {
    id: 15,
    shop: "WriteRight",
    // logo: "/logo15.png",
    contact: 9012345678,
    product: [
      { category: "stationery", name: "Fountain Pen", sub: false, level: null, rate: 300, img: "/fountainpen.png" },
      { category: "stationery", name: "Notebook Large", sub: false, level: null, rate: 150, img: "/notebook.png" }, // repeated
    ],
  },
  {
    id: 16,
    shop: "Gadget Hub",
    // logo: "/logo16.png",
    contact: 9123456780,
    product: [
      { category: "gadgets", name: "Bluetooth Speaker", sub: false, level: null, rate: 1500, img: "/speaker.png" },
      { category: "gadgets", name: "Power Bank", sub: false, level: null, rate: 1200, img: "/powerbank.png" },
    ],
  },
  {
    id: 17,
    shop: "Stationery Palace",
    // logo: "/logo17.png",
    contact: 9234567891,
    product: [
      { category: "stationery", name: "Sketch Pens", sub: false, level: null, rate: 100, img: "/sketchpens.png" },
      { category: "stationery", name: "Erasable Pens", sub: false, level: null, rate: 60, img: "/erasablepens.png" },
    ],
  },
  {
    id: 18,
    shop: "Little Learners",
    // logo: "/logo18.png",
    contact: 9345678902,
    product: [
      { category: "kids", name: "Flash Cards", sub: false, level: null, rate: 90, img: "/flashcards.png" },
      { category: "kids", name: "Learning Board", sub: false, level: null, rate: 200, img: "/learningboard.png" },
    ],
  },
  {
    id: 19,
    shop: "Mega Books",
    // logo: "/logo19.png",
    contact: 9456789013,
    product: [
      { category: "neet", name: "NEET Practice Set", sub: true, level: 700, rate: 400, img: "/neet2.png" },
      { category: "tnpsc", name: "TNPSC Notes", sub: true, level: 300, rate: 150, img: "/tnpsc1.png" }, // repeated
    ],
  },
  {
    id: 20,
    shop: "Toy & Fun",
    // logo: "/logo20.png",
    contact: 9567890124,
    product: [
      { category: "toy", name: "RC Helicopter", sub: false, level: null, rate: 2000, img: "/helicopter.png" },
      { category: "toy", name: "Action Figure", sub: false, level: null, rate: 500, img: "/actionfigure.png" },
    ],
  },
];



export default dailyCollections;
