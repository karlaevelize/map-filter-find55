const data = [
  {
    name: "Luna Lovegood",
    blood: "Pure-blood",
    species: "Human",
    patronus: "Hare",
    born: "13 February, 1981",
    quote: "Things we lose have a way of coming back to us in the end, if not always in the way we expect",
    imgUrl: "https://static.wikia.nocookie.net/harry-potter-pedia/images/8/87/Luna_profile.png/revision/latest?cb=20140511105302",
    houseId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Hermione Granger",
    blood: "Muggle-born",
    species: "Human",
    patronus: "Otter",
    born: "19 September, 1979",
    quote: "Now, if you two don't mind, I'm going to bed before either of you come up with another clever idea to get us killed or worse… Expelled!",
    imgUrl: "https://static.wikia.nocookie.net/magicverse/images/3/34/Hermione_Granger.jpg/revision/latest?cb=20210304201426&path-prefix=tr",
    houseId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Bellatrix Lestrange (née Black)",
    blood: "Pure-blood",
    species: "Human",
    patronus: "None",
    born: "1951",
    quote: "I killed Sirius Black... I killed Sirius Black... 🎶",
    imgUrl: "https://static.wikia.nocookie.net/dieseldorky16/images/5/5c/6A089BD5-07DA-470E-B3B8-34C2190ABC5C.jpeg/revision/latest?cb=20181230032318",
    houseId: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Tom Riddle (Lord Voldemort)",
    blood: "Half-blood",
    species: "Human",
    patronus: "None",
    born: "31 December, 1926",
    quote: "You think I was going to use my filthy Muggle father’s name forever? I, in whose veins runs the blood of Salazar Slytherin himself, through my mother’s side?",
    imgUrl: "https://img.static-rmg.be/a/view/q100/w900/h600/3182793/film-voldemort-jpg.jpg",
    houseId: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Harry Potter",
    blood: "Half-blood",
    species: "Human",
    patronus: "Stag",
    born: "31 July, 1980",
    quote: "I don't go looking for trouble. Trouble usually finds me.",
    imgUrl: "https://i.pinimg.com/originals/58/39/61/5839613bc887946211e72778d01da05f.jpg",
    houseId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Severus Snape",
    blood: "Half-blood",
    species: "Human",
    patronus: "Doe",
    born: "9 January, 1960",
    quote: "Always",
    imgUrl: "https://static.wikia.nocookie.net/harrypotterfanon/images/9/99/SevSnape.jpg/revision/latest?cb=20160129230835",
    houseId: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Albus Dumbledore",
    blood: "Half-blood",
    species: "Human",
    patronus: "Phoenix",
    born: "Late Agust, 1881",
    quote: "It does not do to dwell on dreams and forget to live",
    imgUrl: "https://i.pinimg.com/474x/da/b3/d1/dab3d1f464ee0488f6b765af61d3c65f--albus-perkamentus-harry-potter-albus-dumbledore.jpg",
    houseId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Newton (Newt) Scamander",
    blood: "Pure-blood",
    species: "Human",
    patronus: "Non-corporeal",
    born: "24 February, 1897",
    quote: "Imperfect understanding is often more dangerous than ignorance.",
    imgUrl: "https://static.wikia.nocookie.net/harry-potter-and-fantastic-beasts-films/images/e/ee/COGW_Newt_Scamander.png/revision/latest/top-crop/width/360/height/450?cb=20181013182509",
    houseId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Ginevra (Ginny) Weasley",
    blood: "Pure-blood",
    species: "Human",
    patronus: "Horse",
    born: "11 August, 1981",
    quote: "Anything is possible if you've got enough nerve.",
    imgUrl: "https://lh3.googleusercontent.com/proxy/1TYOnFOx8EE35udTXybjL2mQrOHpPzw3qNAHtRPGx0PHP_jXLAQVM2soEURknpD_1Jaot5hgKz74JM3VjZGRxuhoobOmN34Z6BgA2kNlkzEa5_T6nd9K0fGZJw8wPx_57PH_siERA0Im6Wgl3hXRD5oH",
    houseId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Ronald (Ron) Weasley",
    blood: "Pure-blood",
    species: "Human",
    patronus: "Jack Russell terrier",
    born: "1 March, 1980",
    quote: "Hearing voices no one else can hear isn't a good sign, even in the wizarding world.",
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg",
    houseId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Cho Chang",
    blood: "Pure-blood or Half-blood",
    species: "Human",
    patronus: "Swan",
    born: "Between 1 September 1978 and 31 August 1979",
    quote: "Sorry, I didn't catch that.",
    imgUrl: "https://static.wikia.nocookie.net/harrypotter/images/e/e1/Cho.jpg/revision/latest/scale-to-width-down/223?cb=20090725204212",
    houseId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Cedric Diggoory",
    blood: "Pure-blood",
    species: "Human",
    patronus: "None",
    born: "Between 1 September and 30 October 1977",
    quote: "Take a bath, and — er — take the egg with you, and — er — just mull things over in the hot water. It'll help you think.... Trust me.",
    imgUrl: "https://i.pinimg.com/originals/a2/34/a5/a234a5128d7c4d9a39baa16e9987f816.jpg",
    houseId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Filius Flitwick",
    blood: "Part-Goblin",
    species: "Human",
    patronus: "Non-corporeal",
    born: "17 October, 1958",
    quote: "Now, don't forget that nice wrist movement we've been practising! Swish and flick, remember, swish and flick.",
    imgUrl: "https://static.wikia.nocookie.net/fe59cd10-9c49-4c09-9bf7-243dd1883a2f",
    houseId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Gilderoy Lockhart",
    blood: "Half-blood",
    species: "Human",
    patronus: "Non-corporeal",
    born: "26 January, 1964",
    quote: "Fame’s a fickle friend, Harry... Celebrity is as celebrity does, remember that.",
    imgUrl: "https://static.wikia.nocookie.net/harrypotter/images/7/7b/Gilderoy_Lockhart_promotional_image_COSF.jpg/revision/latest?cb=20181009213748",
    houseId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Neville Longbottom",
    blood: "Pure-blood",
    species: "Human",
    patronus: "Non-corporeal",
    born: "30 July, 1980",
    quote: "I'll join you when hell freezes over! Dumbledore's Army!",
    imgUrl: "https://pbs.twimg.com/media/CkXV0s3UoAALMbB.jpg",
    houseId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Hannah Abbot",
    blood: "Half-blood",
    species: "Human",
    patronus: "Non-corporeal",
    born: "Between 1 September and 31 August, 1980",
    quote: "I — I need to think. To remember! Oh, I'm never going to finish my revision!",
    imgUrl: "https://static.wikia.nocookie.net/hpmor/images/9/91/Hannah_Abbot_%281%29.jpg/revision/latest/top-crop/width/360/height/450?cb=20210629141947",
    houseId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Quirinus Quirrel",
    blood: "Half-blood",
    species: "Human",
    patronus: "Non-corporeal",
    born: "26 September, 1967",
    quote: "A foolish young man I was then, full of ridiculous ideas about good and evil. My master showed me how wrong I was. There is no good and evil... there is only power, and those too weak to understand it... ",
    imgUrl: "https://static.wikia.nocookie.net/harrypotter/images/d/d2/Quirinus_Quirrell_PS_promo.jpg/revision/latest?cb=20110806132643",
    houseId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Rubeus Hagrid",
    blood: "Part-human",
    species: "Half-Giant",
    patronus: "None",
    born: "6 December, 1928",
    quote: "I am what I am an’ I’m not ashamed",
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/10/RubeusHagrid.jpg",
    houseId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Kingsley Shacklebolt",
    blood: "Pure-blood",
    species: "Human",
    patronus: "Lynx",
    born: "In or before 1960",
    quote: "The Ministry has fallen. Scrimgeour is dead. They are coming.",
    imgUrl: "https://i.pinimg.com/originals/c7/c4/48/c7c4482cd9005a116c66ca85a0ed3d94.jpg",
    houseId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Nymphadora Tonks",
    blood: "Half-blood",
    species: "Human (Metamorphmagus)",
    patronus: "Jack Rabit, then Wolf",
    born: "Between 1 September 1972 and 31 August 1973",
    quote: "Don't call me Nymphadora, Remus. It's Tonks.",
    imgUrl: "https://pbs.twimg.com/profile_images/2690708404/9b19e1b333515dd7c32a439b65b2a76f_400x400.png",
    houseId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Remus Lupin",
    blood: "Half-blood",
    species: "Werewolf",
    patronus: "Wolf",
    born: "10 March, 1960",
    quote: "I was a very small boy when I received the bite. My parents tried everything, but in those days there was no cure.",
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/2/2f/Remus_Lupin.jpeg",
    houseId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Sirius Black",
    blood: "Pure-Blood",
    species: "Human (Animagus)",
    patronus: "Non-corporeal",
    born: "3 November, 1959",
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    imgUrl: "https://pbs.twimg.com/profile_images/1311785182370975747/RFoU0dHJ_400x400.jpg",
    houseId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Minerva McGonagall",
    blood: "Half-blood",
    species: "Human (Animagus)",
    patronus: "Cat",
    born: "4 October",
    quote: "Transfiguration is some of the most complex and dangerous magic you will learn at Hogwarts. Anyone messing around in my class will leave and not come back. You have been warned",
    imgUrl: "http://www.nallon.com/wp-content/uploads/2014/06/2005_harry_potter_and_the_goblet_of_fire_maggie_smith_wallpaper-t2.jpg",
    houseId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Draco Malfoy",
    blood: "Pure-Blood",
    species: "Human",
    patronus: "None",
    born: "5 June, 1980",
    quote: "Red hair, and a hand-me-down robe... You must be a Weasley!",
    imgUrl: "https://images0.persgroep.net/rcs/gZMKNCuXjrS33gF8i04c8Lo778Y/diocontent/130867633/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8",
    houseId: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Nascissa Malfoy (née Black)",
    blood: "Pure-Blood",
    species: "Human",
    patronus: "Non-corporeal",
    born: "1955",
    quote: "He is dead!",
    imgUrl: "https://static.wikia.nocookie.net/muggle-born/images/2/26/NarcissaMalfoy.jpg/revision/latest?cb=20131222105412",
    houseId: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

//MAP
//1. Returns an array
//2. The returned array has the same length as the original array
//3. But with updated information
//Ex: [o, o, o, o].map() -> [a, a, a, a]

//1. Get an array with only the names

const namesOnly = data.map(forEachObject => forEachObject.name)
// console.log(namesOnly)

//2. Get an array with name and birth
const namesAndBirth = data.map(forEachObject => `${forEachObject.name} born in ${forEachObject.born} `)
// console.log(namesAndBirth)

//FILTER
//1. Returns an array
//2. The returned arrays contains everything that matches the condition (it's true)
//3. It returns the whole object
//Ex: [a, a, o, o, a].filter(o) -> [o, o]

//1. Filter by house Id
const filterByHouseId = data.filter(forEachObject => forEachObject.houseId === parseInt("2")) //first filter
// console.log(filterByHouseId)

//map after filter example
const mapMyFilter = filterByHouseId.map(forEachObject => forEachObject.name) //then map
// console.log(mapMyFilter)

//2. Filter by blood
const filterByBlood = data.filter(forEachObject => forEachObject.blood === "Half-blood")
// console.log(filterByBlood)

//FIND
//1. Returns an object
//2. Returns the first object that matches the condition
//Ex: [a, b, c, d].find(b) -> b
//Ex: [a, a, b, b, c, c].find(b) -> b

//1. Find by name
const findByName = data.find(firstObject => firstObject.name === "Nymphadora Tonks" )
// console.log(findByName)

//2. Find by houseId (so we see it only returns the first)
const findById = data.find(firstObject => firstObject.houseId === 3)
// console.log(findById)

//arrow sum example
const sum = (x, y) => x + y
console.log(sum(1, 3))