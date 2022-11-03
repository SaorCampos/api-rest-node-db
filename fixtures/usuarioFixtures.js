const {executarNoBanco} = require('../connection');
const {faker} = require('@faker-js/faker/locale/pt_BR');

for (let i =1 ;i <= 50; i++){
    let query = `INSERT INTO usuario (nome, cidade, idade) VALUES ('${faker.name.fullName()}', '${faker.address.cityName()}', '${faker.random.numeric(2)}')`;
    executarNoBanco(query);
}