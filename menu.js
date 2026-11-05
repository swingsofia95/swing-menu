// SWING — bar menu data
// ------------------------------------------------------------
// This is the ONLY file you need to touch to change the menu.
//   • price: a number in EUR (use 3.5, not "3,50"). A text price like "25 – 35" is fine too.
//   • desc:  optional one-liner shown in italics under the item.
//   • pick:  true adds the orange "House pick" badge.
//   • Delete a line to remove an item; copy a line to add one.
// Keep the commas and quotes as they are — one missing comma and the page shows an error.
// ------------------------------------------------------------

window.SWING_MENU = {
  venue: "SWING",
  currency: "EUR",
  updated: "2026-11-05",
  tagline: "The oldest standing jazz & rock stage in town",
  taglineSub: "(still here, folks)",

  sections: [
    {
      id: "cocktails",
      title: "Cocktails",
      note: "50 ml",
      groups: [
        {
          title: "Spritz & Bitter",
          items: [
            { name: "Aperol Spritz", price: 8, desc: "Aperol, prosecco, soda. The sunset one." },
            { name: "Campari Spritz", price: 9, desc: "Campari, prosecco, soda. Bitter and proud of it." },
            { name: "Italicus Spritz", price: 10, desc: "Italicus bergamot, prosecco, soda. Fancy, fast." },
            { name: "Limoncello Spritz", price: 7, desc: "Ramazzotti limoncello, prosecco, soda." },
            { name: "Negroni", price: 9, desc: "Campari, gin, Carpano Antica. No apologies." }
          ]
        },
        {
          title: "Sours",
          items: [
            { name: "Whiskey Sour", price: 8, desc: "Jameson, fresh lemon, sugar. Shaken hard.", pick: true },
            { name: "Margarita", price: 10, desc: "Olmeca, Cointreau, fresh lime. Salt if you want it." }
          ]
        },
        {
          title: "Long & Loud",
          items: [
            { name: "Gin & Tonic", price: 7, desc: "House gin, Thomas Henry tonic. Other gins: +4." },
            { name: "Moscow Mule", price: 8, desc: "Finlandia, ginger beer, fresh lime, mint." },
            { name: "Caribbean Mule", price: 10, desc: "Bumbu rum, ginger beer, fresh lime, mint.", pick: true },
            { name: "Cuba Libre", price: 8, desc: "Bumbu rum, Coca-Cola, fresh lime." },
            { name: "Paloma", price: 9, desc: "Olmeca, Thomas Henry pink grapefruit, lime." },
            { name: "Dark 'n' Stormy", price: 9, desc: "Sailor Jerry, ginger beer, fresh lime." },
            { name: "Skinny Bitch", price: 6, desc: "Vodka, soda, fresh lemon. Nothing else." },
            { name: "Driver", price: 6, desc: "Vodka, orange juice. The screwdriver, in a hurry." }
          ]
        }
      ]
    },

    {
      id: "whiskey",
      title: "Whiskey",
      kicker: "The Back Bar",
      note: "40 ml · as a shot: half price",
      groups: [
        {
          title: "Irish",
          items: [
            { name: "Jameson", price: 3.5 },
            { name: "Jameson Black Barrel", price: 5 },
            { name: "Jameson Crested", price: 5 },
            { name: "Jameson Single Pot Still", price: 6.5 },
            { name: "Jameson 18 Year Old", price: 15 }
          ]
        },
        {
          title: "Scotch",
          items: [
            { name: "Cutty Sark", price: 3.5 },
            { name: "Ballantine's Finest", price: 3.5 },
            { name: "Chivas Regal 12", price: 5 },
            { name: "The Deacon", price: 6 },
            { name: "Glen Scotia", price: 6 },
            { name: "The Glenlivet 12", price: 7 },
            { name: "Dimple", price: 8 },
            { name: "Cardhu", price: 10 },
            { name: "The Glenlivet 15", price: 10 },
            { name: "Glenfiddich 15", price: 12 },
            { name: "The Dalmore", price: 14 },
            { name: "The Macallan 12", price: 15 },
            { name: "Lagavulin 16", price: 19 }
          ]
        },
        {
          title: "American",
          items: [
            { name: "Four Roses", price: 4 },
            { name: "Maker's Mark", price: 5 },
            { name: "Gentleman Jack", price: 8 },
            { name: "Jack Daniel's Single Barrel", price: 9 }
          ]
        },
        {
          title: "Japanese",
          items: [
            { name: "Fuji Single Blend", price: 12 },
            { name: "Hibiki Japanese Harmony", price: 16 }
          ]
        }
      ]
    },

    {
      id: "gin",
      title: "Gin",
      note: "40 ml",
      groups: [
        {
          items: [
            { name: "Beefeater", price: 3.5 },
            { name: "Larios", price: 3.5 },
            { name: "Larios Rosé", price: 3.5 },
            { name: "Roku", price: 5 },
            { name: "Malfy", price: 6 },
            { name: "Monkey 47", price: 8.5 }
          ]
        }
      ]
    },

    {
      id: "vodka",
      title: "Vodka",
      note: "40 ml",
      groups: [
        {
          items: [
            { name: "Absolut", price: 3.5 },
            { name: "Finlandia", price: 3.5 },
            { name: "Ostoya", price: 5 },
            { name: "Reyka", price: 5 },
            { name: "Grey Goose", price: 6 }
          ]
        }
      ]
    },

    {
      id: "rum",
      title: "Rum",
      note: "40 ml",
      groups: [
        {
          items: [
            { name: "Sailor Jerry", price: 5 },
            { name: "Bumbu Cream", price: 6 },
            { name: "Bumbu Original", price: 7 },
            { name: "Bumbu XO", price: 8 },
            { name: "Zacapa Centenario XO", price: 20 }
          ]
        }
      ]
    },

    {
      id: "rakia",
      title: "Rakia",
      note: "40 ml",
      groups: [
        {
          items: [
            { name: "Burgas 63 Barrel", price: 5, desc: "Grape. Barrel-aged. Ice if you insist." }
          ]
        }
      ]
    },

    {
      id: "tequila",
      title: "Tequila & Mezcal",
      note: "40 ml",
      groups: [
        {
          items: [
            { name: "Olmeca Blanco", price: 5 },
            { name: "Olmeca Gold", price: 5 },
            { name: "Altos Plata", price: 6 },
            { name: "Altos Reposado", price: 6 },
            { name: "San Cosme Mezcal", price: 9 }
          ]
        }
      ]
    },

    {
      id: "aperitivo",
      title: "Aperitivo",
      note: "40 ml",
      groups: [
        {
          items: [
            { name: "Aperol", price: 4 },
            { name: "Martini Dry · Bianco · Rosso", price: 4 },
            { name: "Campari", price: 6 },
            { name: "Italicus", price: 7 },
            { name: "Carpano Antica Formula", price: 8 }
          ]
        }
      ]
    },

    {
      id: "liqueurs",
      title: "Liqueurs",
      note: "40 ml",
      groups: [
        {
          items: [
            { name: "Limoncello Ramazzotti", price: 3 },
            { name: "Baileys", price: 3.5 },
            { name: "Jägermeister", price: 4 },
            { name: "Pernod", price: 4 },
            { name: "Fernet-Branca · Branca Menta", price: 4 },
            { name: "Skinos Mastiha", price: 5 },
            { name: "Cointreau", price: 6 },
            { name: "Absinthe", price: 8 }
          ]
        }
      ]
    },

    {
      id: "wine",
      title: "Wine",
      note: "Ask the bar what's open tonight",
      groups: [
        {
          items: [
            { name: "Glass · white, red or rosé", price: 4 },
            { name: "Bottle 0.375", price: 15 },
            { name: "Bottle 0.75", price: "25 – 35" },
            { name: "Prosecco 0.375", price: 15 },
            { name: "Prosecco 0.75", price: 28 }
          ]
        }
      ]
    },

    {
      id: "beer",
      title: "Beer",
      note: "Bottle 0.33 unless noted",
      groups: [
        {
          items: [
            { name: "Heineken", price: 4 },
            { name: "Corona", price: 4.5 },
            { name: "Birra Moretti 0.5", price: 4.5 },
            { name: "Heineken 0.0", price: 4 },
            { name: "Clausthaler 0.0", price: 4 }
          ]
        }
      ]
    },

    {
      id: "shots",
      title: "Shots",
      note: "20 ml · anything from the back bar as a shot: half its 40 ml price",
      groups: [
        {
          items: [
            { name: "Limoncello", price: 1.5 },
            { name: "Jägermeister", price: 2 },
            { name: "Fernet-Branca", price: 2 },
            { name: "Olmeca tequila", price: 2 },
            { name: "Skinos mastiha", price: 2.5 },
            { name: "Olmeca Altos tequila", price: 3 },
            { name: "San Cosme mezcal", price: 4.5 }
          ]
        }
      ]
    },

    {
      id: "nolow",
      title: "No & Low",
      note: "40 ml",
      groups: [
        {
          items: [
            { name: "Undone Not Whiskey", price: 5 },
            { name: "Undone Orange Aperitif", price: 5 },
            { name: "Beefeater 0.0", price: 4 }
          ]
        }
      ]
    },

    {
      id: "soft",
      title: "Soft & Mixers",
      groups: [
        {
          items: [
            { name: "Thomas Henry", price: 4, desc: "Tonic · Pink Grapefruit · Ginger Beer" },
            { name: "Coca-Cola", price: 3, desc: "Coke · Zero · Sprite · Schweppes Tonic" },
            { name: "Juice", price: 3 },
            { name: "Club-Mate", price: 4.5 },
            { name: "Red Bull", price: 4 },
            { name: "Still water", price: 2 },
            { name: "Soda", price: 2 }
          ]
        }
      ]
    },

    {
      id: "coffee",
      title: "Coffee & Tea",
      groups: [
        {
          items: [
            { name: "Coffee", price: 2.5 },
            { name: "Tea", price: 3 }
          ]
        }
      ]
    },

    {
      id: "snacks",
      title: "Snacks",
      groups: [
        {
          items: [
            { name: "Nuts", price: 5, desc: "Cashews · Almonds · Mix" },
            { name: "Peanuts", price: 3 }
          ]
        }
      ]
    }
  ]
};
