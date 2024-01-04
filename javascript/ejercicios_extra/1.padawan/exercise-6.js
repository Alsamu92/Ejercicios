const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
]

products.map((product)=>{
product.sellCount>20?goodProducts.push(product):badProducts.push(product)
})
console.log(goodProducts,badProducts)