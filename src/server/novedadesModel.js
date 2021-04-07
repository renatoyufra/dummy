var pool = require('./bd');

// para listar novedades
async function getNovedades() {
    
    var query =  "select * from novedades";
    var rows = await pool.query(query);
    return rows;
}

module.exports = { getNovedades }