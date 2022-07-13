/* Cocktails List */
const MojitoCocktail = {
  id: 0,
  name: "Mojito",
  ingredients: ["Havana 3", "Lime juice", "White sugar", "Mint", "Club Soda"],
  price: "7.00",
  imgSrc:
    "https://lh3.googleusercontent.com/pw/ACtC-3drjUz6NbctL9EL6MzNQm34yy9hnWLpIxvJYLSHoeDKfPS7YouDcnR_ajgtRwuyUGg_XPxXr_YIpYQqOmRsdiZkMRWPAQ4fOzsSa-WR8fcV6OVBFWI6RN3si_FsMT8f6PfIduQnCVLuUVz10pC4Xm02=s515-no?authuser=0",
};

const BerryMojitoCocktail = {
  id: 1,
  name: "Berry Mojito",
  ingredients: ["Bacardi", "Creme De Cassis", "Lime Juice", "Mint"],
  price: "7.00",
  imgSrc:
    "https://lh3.googleusercontent.com/pw/ACtC-3eWMSw0SIyLQsBTN3gfUk0TUfF5V9PAGGQWgNAZ_Gsd21LkEwM18MCJcmS7Raul2h14fdp6lLLuy_ylT1bh-Dtf5RVFhv2SfQPBX5q95EIYBfoCD1evhwUC9hpAPDEE9Wq34aYE4Uao0as_apHhnoyR=s515-no?authuser=0",
};

const FrozenMangoDaiquiri = {
  id: 2,
  name: "Frozen Mango Daiquiri",
  ingredients: ["White Rum", "Mango Puree", "Slushed Ice"],
  price: "7.00",
  imgSrc:
    "https://lh3.googleusercontent.com/pw/ACtC-3dgSjiy3LCWJmMeO_ecAQi1YPzjvq8RYeIUYuZ9Sgy50WhtK55DKmZ_24AoLtH9v2Kgq4FDeilIQjuHCyb8rcCQVClz4wMz_RW9KwVeRcgdbdoy1EPK2hrLHld8oqXi4LBUyZFcQ6mQX12EVNWT0Saq=s515-no?authuser=0",
};

const EspressoMartiniCocktail = {
  id: 3,
  name: "Espresso Martini",
  ingredients: ["Absolut Vanilla", "Kahlua", "Espresso", "Coffe Bitters"],
  price: "7.00",
  imgSrc:
    "https://lh3.googleusercontent.com/pw/ACtC-3chLHGbujU8nP-gN6WrOoWi42FF6KZowZW7Ykg5alxR4VXcPTBPizfbXu7mEDcRUKkapt2_7sUBrD7c5Al2YnUQi35uBFAQCK0MsIqRl-OIuelr4f4gX5PovKD2ECJximREr3bGJdQs9yXf4VxmR4xs=s515-no?authuser=0",
};

const PornstarSpritzCocktail = {
  id: 4,
  name: "Pornstar Spritz",
  ingredients: [
    "Absolut Vanilla",
    "Passoa",
    "Passionfruit Puree",
    "Pineapple Juice",
    "Lime Juice",
  ],
  price: "7.00",
  imgSrc:
    "https://lh3.googleusercontent.com/pw/ACtC-3fG6GiMsRr5R7Y4w1YuYnLRhEpgzt1sCEaKHriyeE4JQIrW4tU7KiYQ_CzJRK32mDQ4ulnjq5NeHf3NWY_h8xDX-f3FcPeOtRYA_MJj853zB9-rueMmMiiBa6NVemVb4fM2vt-fBpAo1lgUSabmemqm=s515-no?authuser=0",
};

const FrozenBrambleCocktail = {
  id: 5,
  name: "Frozen Bramble",
  ingredients: ["Gin", "Creme de Cassis", "Lemon", "Raspberry Puree"],
  price: "7.00",
  imgSrc:
    "https://lh3.googleusercontent.com/pw/ACtC-3couj51d0k8lunQ5DxlGaIacy9Z4fZ6ePo4GCydoce4vPkGvvFqwhjcI4xxFAo4mOdNxQW5bDViMao5mSMVV9rqegFgCMFfLw8AjxujE2xcj6G8ojE0sE5Dsd8Y95gOLCvGwwckbextNjnLMc_vEW8h=s515-no?authuser=0",
};

const TokyoIceTeaCocktail = {
  id: 6,
  name: "Tokyo Ice Tea",
  ingredients: [
    "Vodka",
    "White Rum",
    "Gin",
    "Triple Sec",
    "Midori",
    "Lemon Juice",
  ],
  price: "7.00",
  imgSrc:
    "https://lh3.googleusercontent.com/pw/ACtC-3fiPFreUuUsrKRBG-alFchc9pRKRvjDcvNUYEtNM338g7gZGB_6eTb-h1YnNmL82TbF9gMNjWVxd5YRIhM8Mlj5S2xPu-yGZALTEL2PZzW9D4iBVXiFdsnCqI5biGz0rMo3aKRnPG2NK5mhQhc5R0rI=s515-no?authuser=0",
};

const MelonadeCocktain = {
  id: 7,
  name: "Melonade",
  ingredients: ["Beefeater Gin", "Triple Sec", "Lemon Juice", "Soda"],
  price: "7.00",
  imgSrc:
    "https://lh3.googleusercontent.com/pw/ACtC-3d_EjOgu2_EjuGGN8BpJPrxlIdV4Rpu1Pz-junJaF5pOdZwU3JT-qnbFixq9P36HRsiYoIYrCQDGhFXAI16tZqOom0KvTmL3jCCf9oJsXgZUUbBHlfyAR07G0CjkECm83SpnIRHfo6kJN1FdXYAoneg=s515-no?authuser=0",
};

const ZombieCocktail = {
  id: 8,
  name: "Zombie",
  ingredients: [
    "White Rum",
    "Dark Rum",
    "Passionfruit Liqueur",
    "Almond Syrup",
    "Lime Juice",
    "Orange & Pineapple Juice",
    "Dash of Grenadine",
  ],
  price: "7.00",
  imgSrc:
    "https://lh3.googleusercontent.com/pw/ACtC-3eP9ELm_JE5JURv0Dq4dYxfGNGc2z_-reJA8KJG5zUejmCmDHEOomd2JRH13O8vmTSkfsllBhRGiltSSwKMUtoS4-lIXmocI0ADuGf2Zly4Qp_vDGhM12Dsw-Yb5WLF0vJB8MRtMTpYnkI-np1LVckX=s515-no?authuser=0",
};

const MargaritaCocktail = {
  id: 9,
  name: "Margarita",
  ingredients: ["Olmeca Tequila", "Triple Sec", "Lime Juice", "Agave Syrup"],
  price: "7.00",
  imgSrc:
    "https://lh3.googleusercontent.com/pw/ACtC-3ceDrGgWEUmgUkF2nXCDaGaV6uG4xQDhs6T0i1ELMlsJHsFb7DfWy-sNApV604u9iJIvNiN9OvNmmymYtDpL6dAf-sSMlp1yrJEyKnWSgHlj0hLrr9P95j0vt1GeV08RRX21pyaMMN5DYj-By5CD36H=s515-no?authuser=0",
};

const TheSocialiteCocktail = {
  id: 10,
  name: "The Socialite",
  ingredients: [
    "Absolut Rhubarb",
    "Elderflower Liqueur",
    "Lemon Juice",
    "Sugar Syrup",
    "Prosecco",
  ],
  price: "7.00",
  imgSrc:
    "https://lh3.googleusercontent.com/pw/ACtC-3fHpHmKQ9Ni3B9C2e7aT6-h5D8QLVkGasSfQ2rZRy0-Cyj4ni99_3qiao9sUO60BZH6Au9EDBI6nVPVBdWH8bASpKwAhDDPQuh2c7SH5M6TGxaBS96tBDu9xO7BnKVuLqBWmyDGU-ZR715sdAxrcZ0C=s515-no?authuser=0",
};

const BourbonSourCocktail = {
  id: 11,
  name: "Bourbon Sour",
  ingredients: ["Bulleit Bourbon", "Aquafaba", "Lemon Juice", "Sugar Syrup"],
  price: "7.00",
  imgSrc:
    "https://lh3.googleusercontent.com/pw/ACtC-3eVzudX-znOpieV_Ddkye_XYWRUsmdKty5LmRj9xxIvjkGC-GEVWf5IxGoNXJuVo-ufwFdTsLPxbtMg8FZB0mWnKsfKbOHybzVTzum1BnJtNvYs8ptGsk-LT5g9IVgSrO3pE7mjL734HILJs7hjbamf=s515-no?authuser=0",
};

/* Cocktails List END*/

/* Cocktails Special List */

const MyNameIsEarlCocktail = {
  name: "My Name is Earl",
  ingredients: ["Gin", "Crème de Mure", "Lime Juice", "Apple Juice"],
  price: "7.00",
  imgSrc:
    "https://lh3.googleusercontent.com/pw/ACtC-3eYyxPEA1ZpsvfDUCz3V2LbCcDsfPGkp4XIHkRhWT_d4rXmFgdC8-etT3iItreBR-HN2SWD8ybeOp5UylSf4T_4rTK-gujUqhmM6WLBsef9uRiYP1WdAAsdSXdUyCh9iTiEMWD2vVnjLDUA14Nl2r7N=s515-no?authuser=0",
};

/* Cocktails Special List END */

/* Premium Cocktails Special List */

const ThePinkSaintCocktail = {
  name: "The Pink Saint",
  ingredients: ["Pink Grapefruit Belvedere", "St Germain", "Tonic"],
  price: "10.00",
  imgSrc:
    "https://lh3.googleusercontent.com/pw/ACtC-3dInDa0-pPnTS_6JJUIiOn_Hxz1FwsZ5yk3Xp5UmISK-maLzYsvyKRpB7SE-sWUT4lUTlOE2dr_FNNvxEj612VfZAqAxuvg8pfwOkLfAXDW-QFG5KKaPVZxo3HBsmzIpunao6YXCZFjWivB3_lS00R_=s515-no?authuser=0",
};

/* Premium Cocktails Special List END*/

/* Not in use cocktails */

// const GinFizzCocktail = {
//   name: "Gin Fizz",
//   ingredients: [
//     "Beefeater Gin",
//     "Lemon Juice",
//     "Aquafaba",
//     "Sugar Syrup",
//     "Soda",
//   ],
//   price: "7.00",
//   imgSrc: "",
// };

// const MaiTypeCocktail = {
//   name: "Mai Type",
//   ingredients: [
//     "Malibu",
//     "Triple Sec",
//     "Captain Morgans",
//     "Lime juice",
//     "Almond syrup",
//     "Orange",
//     "Pineapple juice",
//   ],
//   price: 7,
// };

// const TequilaRoseCocktail = {
//   name: "Tequila Rose",
//   ingredients: ["Tequila Rose", "Vanilla Vodka", "Milk", "Whipped Cream"],
//   price: 7,
// };

// const FrozenRaspberryDaiquiriCocktail = {
//   name: "Frozen Raspberry Daiquiri",
//   ingredients: ["White rum", "Raspberry puree", "Ice", "Sweet & Sour mix"],
//   price: 7,
// };

// const FrozenPornstarCocktail = {
//   name: "Frozen Pornstar",
//   ingredients: ["Vodka", "Passionfruit puree", "Ice", "Sweet & Sour mix"],
//   price: 7,
//   imgSrc: "",
// };

// const TheCornaritaCocktail = {
//   name: "Coronarita",
//   ingredients: [
//     "Olmeca Tequila",
//     "Triple Sec",
//     "Lime juice",
//     "Sugar syrup",
//     "Corona",
//   ],
//   price: 7,
// };

/* Not in use cocktails List END */

/* Shooters List */

const SambucaShot = {
  name: "Sambuca",
  ingredients: ["Sambuca"],
  price: "3.00",
  imgSrc:
    "https://lh3.googleusercontent.com/pw/ACtC-3d4PUvAs0WSoVjY9SeieY36Uoy23hOW_XDIyH0MjPwM5b59dA-a-Ap6riZKkwRWThgklZrkuOGChnVKorTkpJ73dvBfgmBlDCoPPVrdx6H_A4W_kFSmOyf-oEp5Xl9ZlEOWv4uxx5qpbe-MaVKZ7-fs=s515-no?authuser=0",
};
const TequilaShot = {
  name: "Tequila",
  ingredients: ["Tequila"],
  price: "3.00",
  imgSrc:
    "https://lh3.googleusercontent.com/pw/ACtC-3d4PUvAs0WSoVjY9SeieY36Uoy23hOW_XDIyH0MjPwM5b59dA-a-Ap6riZKkwRWThgklZrkuOGChnVKorTkpJ73dvBfgmBlDCoPPVrdx6H_A4W_kFSmOyf-oEp5Xl9ZlEOWv4uxx5qpbe-MaVKZ7-fs=s515-no?authuser=0",
};
const SkittleBombsShot = {
  name: "Skittle Bombs",
  ingredients: [],
  price: "3.00",
  imgSrc:
    "https://lh3.googleusercontent.com/pw/ACtC-3d4PUvAs0WSoVjY9SeieY36Uoy23hOW_XDIyH0MjPwM5b59dA-a-Ap6riZKkwRWThgklZrkuOGChnVKorTkpJ73dvBfgmBlDCoPPVrdx6H_A4W_kFSmOyf-oEp5Xl9ZlEOWv4uxx5qpbe-MaVKZ7-fs=s515-no?authuser=0",
};

const JagerShot = {
  name: "Jager",
  ingredients: ["Jager"],
  price: "3.00",
  imgSrc:
    "https://lh3.googleusercontent.com/pw/ACtC-3d4PUvAs0WSoVjY9SeieY36Uoy23hOW_XDIyH0MjPwM5b59dA-a-Ap6riZKkwRWThgklZrkuOGChnVKorTkpJ73dvBfgmBlDCoPPVrdx6H_A4W_kFSmOyf-oEp5Xl9ZlEOWv4uxx5qpbe-MaVKZ7-fs=s515-no?authuser=0",
};

/* Shooters List END */

/* G&T List */

const GT1 = {
  name: "GT1",
  ingredients: [
    "Bombay Sapphire",
    "Mango Puree",
    "Mint",
    "Lemon",
    "Orange Tonic",
  ],
  price: "7.00",
};

const GT2 = {
  name: "GT2",
  ingredients: [
    "Hendricks",
    "Cucumber",
    "Rosemary",
    "Watermelon",
    "Cucumber Tonic",
  ],
  price: "7.00",
};

const GT3 = {
  name: "GT3",
  ingredients: ["Beefeater Pink", "Strawberry", "Lime", "Tonic"],
  price: "7.00",
};

const GT4 = {
  name: "GT4",
  ingredients: [
    "Rhubarb",
    "Ginger Gin",
    "Blackberries",
    "Lemon",
    "Lemon Tonic",
  ],
  price: "7.00",
};

const GT5 = {
  name: "GT5",
  ingredients: [
    "Pink Grapefruit Gin",
    "Grapefruit",
    "Rosemary",
    "Pink Grapefruit Tonic",
  ],
  price: "7.00",
};

const GT6 = {
  name: "GT6",
  ingredients: ["Tanqueray 10", "Orange", "Pink Grapefruit", "Tonic"],
  price: "7.00",
};

/* G&T List END */

export const drinksMenu = [
  {
    type: "Cocktails",
    deal: "One for £7, Any Two for £13",
    submenu: [
      MojitoCocktail,
      BerryMojitoCocktail,
      FrozenMangoDaiquiri,
      EspressoMartiniCocktail,
      PornstarSpritzCocktail,
      FrozenBrambleCocktail,
      TokyoIceTeaCocktail,
      MelonadeCocktain,
      ZombieCocktail,
      MargaritaCocktail,
      TheSocialiteCocktail,
      BourbonSourCocktail,
    ],
  },
  {
    type: "Cocktail Special",
    deal: "One for £7, Any Two for £12",
    submenu: [MyNameIsEarlCocktail],
  },
  {
    type: "Premium Cocktail Special",
    deal: "Premium Cocktails  ",
    submenu: [ThePinkSaintCocktail],
  },
  {
    type: "Shots",
    deal: "One for £3, Any Five for £12",
    submenu: [SambucaShot, TequilaShot, SkittleBombsShot, JagerShot],
  },
  {
    type: "Tequila Sharer Board",
    deal: "Any Three Tequila Shots for £12",
    submenu: [
      {
        name: "Tequila Taster Board",
        ingredients: [
          "Don Juilo Blanco",
          "Don Julio Anejo",
          "Don Julio Reposado",
          "Ambhar",
          "Patron Resposado",
          "Agavero",
          "Espolon Resposado",
          "Vivir Anejo",
          "Cazcabel Coffee",
          "Cazcabel Honey",
          "Sauza Hornitos",
          "Altos Plata",
          "Altos Resposado",
        ],
        price: "12.00",
        imgSrc:
          "https://lh3.googleusercontent.com/pw/ACtC-3d4PUvAs0WSoVjY9SeieY36Uoy23hOW_XDIyH0MjPwM5b59dA-a-Ap6riZKkwRWThgklZrkuOGChnVKorTkpJ73dvBfgmBlDCoPPVrdx6H_A4W_kFSmOyf-oEp5Xl9ZlEOWv4uxx5qpbe-MaVKZ7-fs=s515-no?authuser=0",
      },
    ],
  },
  {
    type: "G&T Bar",
    deal: "One for £7, Any Two for £13",
    submenu: [GT1, GT2, GT3, GT4, GT5, GT6],
  },
];
