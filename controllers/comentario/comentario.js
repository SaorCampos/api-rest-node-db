const fs = require('fs');
const { executarNoBanco } = require('../../connection');


async function listar(produtoIdParam) {
    return await executarNoBanco(`SELECT * FROM dc.comentarios WHERE id_produto = ${produtoIdParam};`)
}

async function listarAutor(produtoIdParam, autorParam = '') {
    return await executarNoBanco(`SELECT * FROM dc.comentarios WHERE autor LIKE '%${autorParam}%' AND id_produto = ${produtoIdParam};`)
}

async function listarAutorProduto(autorParam = '') {
    return await executarNoBanco(`
    SELECT 
        com.comentario, com.autor, com.data, pro.categoria, pro.nome 
    FROM 
        dc.comentarios com, dc.produtos pro 
    WHERE 
        com.autor LIKE '%${autorParam}%' AND
        com.id_produto = pro.id;
    `)
}

module.exports = {
    listar,
    listarAutor,
    listarAutorProduto
}