import first1 from './images/first1.avif';
import first2 from './images/first2.png';
import first3 from './images/first3.avif';
import second1 from './images/second1.avif';
import second2 from './images/second2.avif';    
import second3 from './images/second3.avif';
import third1 from './images/third1.avif';
import third2 from './images/third2.avif';  
import third3 from './images/third3.avif';
import fourth1 from './images/fourth1.avif';
import fourth2 from './images/fourth2.avif';    
import fourth3 from './images/fourth3.avif';
import fifth1 from './images/fifth1.avif';
import fifth2 from './images/fifth2.avif';
import fifth3 from './images/fifth3.avif';
import sixth1 from './images/sixth1.avif';
import sixth2 from './images/sixth2.avif';
import seventh1 from './images/seventh1.avif';
import seventh2 from './images/seventh2.avif';
import seventh3 from './images/seventh3.avif';

const products =[
    {
        id: 1,
        name: 'black sweater',
        description: 'Sleek, simple, and seriously refined — the Black Frame Midi Dress is a masterclass in minimalist design. Cut to fall just below the knee with clean lines and a smooth silhouette, this dress is as versatile as it is timeless.',
        price: 29.99,
        category: 'womens',
        color: 'black',
        imageUrl: [first1,first2, first3]
    },
    {
        id: 2,
        name: 'blue jacket',
        description: 'The Modern Muse denim dress defines casual with a nod to classic workwear and a distinctly feminine edge. Designed with a button-down front, structured collar, and relaxed shape, it’s perfect for styling up or down — boots, sneakers, or bare feet included.',
        price: 39.99,
        category: 'womens',
        color: 'blue',
        imageUrl:  [
           sixth1, sixth2, sixth2
                  ]
    },
    {
        id: 3,
        name: 'black jacket',
        description: 'Effortlessly cool with a minimalist edge — the Urban Shadow Oversized Jacket is built for those who move through the city with quiet confidence. Crafted in a deep charcoal black with subtle texture, this piece blends contemporary tailoring with street-ready functionality.',
        price: 39.99,
        category: 'womens',
        color: 'black',
        imageUrl:  [
           third1, third2, third3
                  ]
    },
    {
        id: 4,
        name: 'red knit sweater',
        description: 'Wrap yourself in effortless warmth with the Crimson Comfort Knit Sweater. With its bold red hue and relaxed fit, this cozy essential makes a statement without saying a word. Ribbed at the hem and cuffs for a structured finish, it pairs seamlessly with anything from classic denim to elevated basics.',
        price: 29.99,
        category: 'womens',
        color: 'red',
        imageUrl:  [
           fourth1, fourth2, fourth3]
    },
    {
        id: 5,
        name: 'black overall',
        description: 'Minimalist meets modern in the Stone Street Zip-Up Jacket. With clean lines, a neutral palette, and subtle detailing, this piece is the ultimate go-to for everyday wear. The lightweight fabric offers a sleek silhouette while keeping you comfortable on the go.',
        price: 49.99,
        category: 'mens',
        color: 'black',
        imageUrl:  [
            fifth1, fifth2, fifth3
                  ]
    },
    {
        id: 6,
        name: 'lather jacket',
        description: 'A timeless staple reimagined — the Rebel Noir Leather Jacket blends edgy attitude with everyday wearability. Featuring a clean cut, classic lapels, and subtle metallic hardware, this jacket brings an effortless cool to any look.',
        price: 79.99,
        category: 'womens',
        color: 'leather',
        imageUrl:  [
          seventh1, seventh2, seventh3
                  ]
    }
];

export default products;