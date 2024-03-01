// const user = {name: 'Sohag Mridha', Job: 'Web Developer'};
// console.log(user);
// const stringified = JSON.stringify(user);
// console.log(stringified);

const shop = {
    owner: 'Sohag Mridha',
    Address: {
        street: 'Komisonar mor',
        City: 'Dhamrai',
        Country: 'Bangladesh'
    },
    product: ['laptop', 'mic', 'monitor']
}
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);
