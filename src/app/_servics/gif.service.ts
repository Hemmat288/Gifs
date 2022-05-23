import { Injectable } from '@angular/core';
import { Gifs } from '../_models/gifs';
@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor() { }
  gifs:Gifs[]=  [
    {id:1,
      name:"How wonderful",
      image:"https://media.giphy.com/media/6doc3WcKb9o3OUwfzf/giphy.gif",
      category:{id:3,name:"Reaction",image:"https://source.unsplash.com/random/200x200?sig=6"},
      isFav:false,

    },
    {id:2,
    name:"forced laughing",
    image:"https://media.giphy.com/media/sN3UqEngmgo48/giphy.gif",
    category:{id:1,name:"Reaction",image:"https://source.unsplash.com/random/200x200?sig=2"},
    isFav:false,
  },
  {id:3,
    name:"boy",
    image:"https://media.giphy.com/media/gi8JtlDffQMexR3YcU/giphy.gif",
    category:{id:2,name:"Artists",image:"https://source.unsplash.com/random/200x200?sig=4"},
    isFav:false,

  },

  {id:4,
    name:"Go on Git",
    image:"https://media.giphy.com/media/j5Qgf8rf2VYnoWH3SY/giphy.gif",
    category:{id:1,name:"Artists",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id:5,
    name:"chicago fire football",
    image:"https://media.giphy.com/media/O3mB8PZ73bwlGgKwQ0/giphy.gif",
    category:{id:2,name:"sport",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id:6,
    name:"chicago fire football",
    image:"https://media.giphy.com/media/WndwHF9lEm892CieAd/giphy.gif",
    category:{id:2,name:"sport",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id:7,
    name:"NHL",
    image:"https://media.giphy.com/media/8tIR7a9qPAj3K4JXVa/giphy.gif",
    category:{id:2,name:"sport",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id:8,
    name:"ELLis D",
    image:"https://media.giphy.com/media/26uflGcXHKFR3xWCs/giphy.gif",
    category:{id:2,name:"Reaction",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id:9,
    name:"No work",
    image:"https://media.giphy.com/media/FxUoa5gjdfgi8rDcUM/giphy.gif",
    category:{id:2,name:"Artists",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id:10,
    name:"Bye",
    image:"https://media.giphy.com/media/OB4Sjggq8aMJnq4sLQ/giphy.gif",
    category:{id:2,name:"Reaction",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id:11,
    name:"Yoy are best",
    image:"https://media.giphy.com/media/a3l6E6j0B6GU8rHAMM/giphy.gif",
    category:{id:2,name:"Artists",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id:12,
    name:"girls",
    image:"https://media.giphy.com/media/pXOSkho1nhuI3EX3QY/giphy.gif",
    category:{id:2,name:"Entertainment",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id:13,
    name:"No",
    image:"https://media.giphy.com/media/GtmzA3P2Lq0m4Of5Zy/giphy.gif",
    category:{id:2,name:"Reaction",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id:14,
    name:"U.S Soccer federation",
    image:"https://media.giphy.com/media/l4JzhV0NsraSwJTX2/giphy.gif",
    category:{id:2,name:"sport",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id:15,
    name:"old man",
    image:"https://media.giphy.com/media/Lq5r6qXmb5RUIZGbT0/giphy.gif",
    category:{id:2,name:"Artists",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id:16,
    name:"WOW",
    image:"https://media.giphy.com/media/b8RfbQFaOs1rO10ren/giphy.gif",
    category:{id:2,name:"Reaction",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id: 17,
    name:"Golden Girls",
    image:"https://media.giphy.com/media/3oKIPkOgszO8fie0tG/giphy.gif",
    category:{id:2,name:"Artists",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id: 18,
    name:"love",
    image:"https://media.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy.gif",
    category:{id:2,name:"Artists",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id: 19,
    name:"sad",
    image:"https://media.giphy.com/media/pynZagVcYxVUk/giphy.gif",
    category:{id:2,name:"Reaction",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id: 20,
    name:"chicago fire football",
    image:"https://media.giphy.com/media/cK7ZDyZFJwKxqzJggJ/giphy.gif",
    category:{id:3,name:"sport",image:"https://source.unsplash.com/random/200x200?sig=6"},
    isFav:false,

  },
  {id: 21,
    name:"i am very exited",
    image:"https://media.giphy.com/media/fipN1GOuDK8txSqay3/giphy.gif",
    category:{id:2,name:"Sticker",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id: 22,
    name:"ELLis D",
    image:"https://media.giphy.com/media/4YCCY41GKzDuYeHnWW/giphy.gif",
    category:{id:2,name:"Sticker",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id: 23,
    name:"fuuny girl",
    image:"https://media.giphy.com/media/Bopg9fzIL4zLVUvVfT/giphy.gif",
    category:{id:2,name:"Entertainment",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id: 24,
    name:"Netflix",
    image:"https://media.giphy.com/media/xUA7aM09ByyR1w5YWc/giphy.gif",
    category:{id:2,name:"Entertainment",image:"https://source.unsplash.com/random/200x200?sig=4"},
    isFav:false,

  },
  {id: 25,
    name:"overthrow patriarchy",
    image:"https://media.giphy.com/media/3X7qCQJH09cEwYhKAZ/giphy.gif",
    category:{id:2,name:"sport",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id: 26,
    name:"NASA",
    image:"https://media.giphy.com/media/S99cgkURVO62qemEKM/giphy.gif",
    category:{id:2,name:"Entertainment",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id: 27,
    name:"dancing",
    image:"https://media.giphy.com/media/tXhuiyu6ZBtCev3rzs/giphy.gif",
    category:{id:2,name:"Entertainment",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },
  {id: 28,
    name:"Dancing",
    image:"https://media.giphy.com/media/UCTaYoiR7pD2okgFK1/giphy.gif",
    category:{id:2,name:"Entertainment",image:"https://source.unsplash.com/random/200x200?sig=8"},
    isFav:false,

  },

  ];
  GetAllgifs(){
    return this.gifs;
  }
}
