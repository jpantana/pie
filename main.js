const pies = [
  {
    name: 'Dutch Apple Pie',
    ingredients: 'apples,sugar,butter,nutmeg,dutch people',
    bakeTemp: 5000,
    drinkPairing: 'Earl Grey Tea',
    imageUrl: 'https://search.chow.com/thumbnail/800/0/www.chowstatic.com/assets/2013/09/30859_Recipeimage_620x413_dutch_apple_pie.jpg',
    instructor: 'Zoe',
    iceCream: 'Vanilla',
  },
  {
    name: 'Berry Pie',
    ingredients: 'berries',
    bakeTemp: 400,
    drinkPairing: 'wine',
    imageUrl: 'https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Triple_Berry_Pie8.jpg',
    instructor: 'Zoe',
    iceCream: 'banana',
  },
  {
    name: 'Pumpkin Pie',
    ingredients: 'pumpkins, nutmeg, cinnamon, graham crackers, pilgrims',
    bakeTemp: 42,
    drinkPairing: 'egg nog',
    imageUrl: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/22a0c25d-2fee-415c-a4e7-91d008e276bb/a904f3e2-3cd9-40d6-ace9-f8dbd2d616cd/1280x720/match/image.jpg',
    instructor: 'Michael',
    iceCream: 'Vanilla',
  },
  {
    name: 'Shoo Fly Pie',
    ingredients: 'Molasses, nutmeg, cinnamon, butter, graham cracker ',
    bakeTemp: 1234,
    drinkPairing: 'Apple Cider',
    imageUrl: 'https://static01.nyt.com/images/2016/09/27/dining/27COOKING-SHOOFLY-PIE2/27COOKING-SHOOFLY-PIE2-articleLarge.jpg',
    instructor: 'Michael',
    iceCream: 'Coffee',
  },
  {
    name: 'Pecan Pie',
    ingredients: 'Pecans, sugar, butter, flour',
    bakeTemp: 5000,
    drinkPairing: 'Milk',
    imageUrl: 'https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg',
    instructor: 'Saul',
    iceCream: 'Vanilla',
  },
  {
    name:'Keylime Pie',
    ingredients: 'lemons, sugar, butter, flour',
    bakeTemp: 5000,
    drinkPairing: 'Water',
    imageUrl: 'https://www.williams-sonoma.com/wsimgs/rk/images/dp/recipe/201851/0020/img38l.jpg',
    instructor: 'Saul',
    iceCream: 'none',
  },
];



const printToDom = (divId, textToPrint) => {
    const selectedId = document.getElementById(divId);
    selectedId.innerHTML = textToPrint;
};


const pieBuilder = () => {
    let domString = '';

    pies.forEach((pie) => {
        domString += `<div class="pieCard">`;
        domString +=   `<h1>${pie.name}</h1>`;
        domString +=   `<img src="${pie.imageUrl}" alt='Image of ${pie.imageUrl}'>`;
        domString +=   `<p>${pie.ingredients}</p>`;
        domString +=   `<p><strong>Baking Temperature:</strong><br>${pie.bakeTemp}°</p>`;
        domString +=   `<p><strong>Drink Pairing:</strong><br>${pie.drinkPairing}</p>`;
        domString +=   `<p><strong>IceCream Pairing:</strong><br> ${pie.iceCream}</p>`;
        domString += `</div>`;
    })

    // for (let i = 0; i < pies.length; i++) {
    //     domString += `<div>`;
    //     domString +=   `<h1>1. ${pies[i].name}</h1>`;
    //     domString +=   `<h1>2. ${pies[i].ingredients}</h1>`;
    //     domString +=   `<h1>3. ${pies[i].bakeTemp}</h1>`;
    //     domString +=   `<h1>4. ${pies[i].drinkPairing}</h1>`;
    //     domString +=   `<img src="${pies[i].imageUrl}=>`;
    //     domString +=   `<h1>6. ${pies[i].iceCream}</h1>`;
    //     domString += `</div>`;

    // };
    printToDom('pies', domString);
};


const addPie = (name, ingredients, bakeTemp, drinkPairing, imageUrl, iceCream) => {
    const newPie = {
        name: name,
        ingredients: ingredients,
        bakeTemp: bakeTemp,
        drinkPairing: drinkPairing,
        imageUrl: imageUrl,
        iceCream: iceCream,
    }
    if(name === 'Michael' || 'michael') {
        pies.push(newPie);
    } else {
        console.log('you suck');
    }
};


// const promptPie = [];
// const questionPie = () => {
//     let pieName = prompt("what is your favorite kind of pie?");
//     let pieIngred = prompt("what is the main ingredient?");
//     let bakeTemp = prompt("what is the baking temp?");
//     let drinkPairing = prompt("what drink pairs best?");
//     let iceCream = prompt('what icecream goes best with this pie?');
//     const newArray = [pieName, pieIngred, bakeTemp, drinkPairing, iceCream];
//     return newArray;
// };

const init = () => {
   
    // addPie('Michael', 'cheese', 400, 'beer', 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/PA-Dutch-Apple-Pie_by_Keller_Keller-LEDE.jpg?itok=vWBLQ2mL', 'blueberry');
    pieBuilder();
    // questionPie();
    // addPie(newArray[0],newArray[1], newArray[2], newArray[3], newArray[4]);
 
};

init();

console.log(addPie);

