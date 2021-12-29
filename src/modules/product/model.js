const { fetch , fetchAll} = require("../../lib/postgres")

const Allproduct = `
    SELECT * FROM product
`
const one_product = `
    SELECT * FROM product WHERE product_id = $1
`
const newproduct = `
    INSERT INTO product(product_Title, prodcut_text, product_price, product_img) VALUES ($1, $2, $3, $4)  RETURNING *
`
const update_product = `
    UPDATE product SET product_Title = $1, prodcut_text = $2, product_price = $3, product_img = $4 WHERE product_id = $5
`
const deleteproduct = `
    DELETE FROM product
    WHERE product_id = $1
`

const All_product = () => fetchAll(Allproduct)

const One_product = (product_id) => fetch(one_product, product_id)

const New_product = (product_Title, prodcut_text, product_price, product_img) => fetch(newproduct, product_Title, prodcut_text, product_price, product_img)

const Update_product = (product_Title, prodcut_text, product_price, product_img, product_id) => fetch(update_product, product_Title, prodcut_text, product_price, product_img, product_id)

const delete_product = (product_id) => fetch(deleteproduct, product_id)
module.exports = {
    All_product,
    One_product,
    New_product,
    Update_product,
    delete_product
}