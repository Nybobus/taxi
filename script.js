const catalog = [
    {
        name: `Start`,
        img: `https://chevrolet.uz/assets/images/cobalt/colours/1.png`,
        price: 20,
        oldPrice: 22,
        currency: `$`,
        description: `Ишак Такси`,
        button: `Заказать`,
    },
    {
        name: `VIP`,
        img: `https://www.bmw.uz/content/dam/bmw/common/all-models/m-series/m8-coupe/2022/navigation/bmw-8series-coupe-modellfinder.png`,
        price: 99,
        oldPrice: 132,
        currency: `$`,
        description: `Ишак Такси`,
        button: `Заказать`,
    },
    {
        name: `Businnes Turbo`,
        img: `https://olmaks.ua/wp-content/uploads/2020/12/prev.png`,
        price: 200,
        oldPrice: 288,
        currency: `$`,
        description: `Ишак Такси`,
        button: `Заказать`,
    },
    {
        name: `Extra`,
        img: `https://pngimg.com/uploads/rolls_royce/rolls_royce_PNG2.png`,
        price: 300,
        oldPrice: 388,
        currency: `$`,
        description: `Ишак Такси`,
        button: `Заказать`,
    },
    {
        name: `Ишак Tesla`,
        img: `https://www.tesla.com/ownersmanual/images/GUID-B5641257-9E85-404B-9667-4DA5FDF6D2E7-online-en-US.png`,
        price: 410,
        oldPrice: 445,
        currency: `$`,
        description: `Ишак Такси`,
        button: `Заказать`,
    },
    {
        name: `Food`,
        img: `https://bodo.uz/uploads/products/1696872553940.png`,
        price: 464,
        oldPrice: 488,
        currency: `$`,
        description: `Ишак Еда`,
        button: `Заказать`,
    },
]

const cards = document.querySelector(`.cards`)

catalog.forEach(card => {
    cards.innerHTML += `
     <div class="card">
     <img src="${card.img}" alt="">
     <h3>${card.name}</h3>
     <p>${card.description}</p>
     <s>${card.oldPrice}</s>
     <h4>${card.price}</h4>
     <button>${card.button}</button>
    </div>
    `
})
