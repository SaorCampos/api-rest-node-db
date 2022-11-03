const {executarNoBanco} = require('../connection');
const {faker} = require('@faker-js/faker/locale/pt_BR');

let query = 'INSERT INTO produtos (nome, valor, categoria, tamanho) VALUES';

for (let i =1 ;i <= 100; i++){
    query += `('${faker.commerce.product()}', '${faker.commerce.price(50, 1000, )}', '${faker.commerce.department()}', '${faker.commerce.productAdjective()}'),`;
}
query = query.substring(0, query.length -1);
executarNoBanco(query);