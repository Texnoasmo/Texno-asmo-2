const { fetch , fetchAll} = require("../../lib/postgres")

const korzina = `
    SELECT * FROM korzina INNER JOIN  product ON product.product_id = korzina.korzina_product INNER JOIN users ON korzina.korzina_user = $1
`

const create_korzina = `
    INSERT INTO korzina (korzina_user, korzina_product) VALUES ($1, $2) RETURNING *
`
const delete_zakaz = `
    DELETE FROM korzina WHERE korzina_id = $1
`
const Get_product = (user_id) => fetch(korzina, user_id)
const Create_table = (korzina_user, korzina_product) => fetch(create_korzina, korzina_user, korzina_product)
const Delete_korzina = (korzina_id) => fetch(delete_zakaz, korzina_id)

module.exports = {
    Create_table,
    Delete_korzina,
    Get_product
}