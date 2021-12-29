const { fetch , fetchAll} = require("../../lib/postgres")

const newZakaz = `
    INSERT INTO zakazlar (zakaz_user, zakaz_prodcut, zakaz_username, zakaz_telefon, zakaz_adres, zakaz_holati) VALUES ($1, $2, $3, $4, $5, $6) RETURNING * 
`
const comlacte_zakaz = `
    SELECT * FROM zakazlar WHERE zakaz_holati = 'complect'
`
const new_zakaz = `
    SELECT * FROM zakazlar WHERE zakaz_holati = 'NEW'
`
const all_zakaz = `
     SELECT * FROM zakazlar
`
const update_zakaz = `
    UPDATE zakazlar SET zakaz_holati = 'complect' WHERE zakaz_id = $1
`
const one_zakaz = `
    SELECT * from zakazlar WHERE zakaz_id = $1
`
const new_Zakaz = (zakaz_user, zakaz_prodcut, zakaz_username, zakaz_telefon, zakaz_adres, zakaz_holati) => fetch(newZakaz, zakaz_user, zakaz_prodcut, zakaz_username, zakaz_telefon, zakaz_adres, zakaz_holati)

const One_zakaz = (zakaz_id) => fetch(one_zakaz, zakaz_id)

const All_zakaz = () => fetchAll(all_zakaz)

const Complect_zakaz = () => fetch(comlacte_zakaz)

const New_zakaz = () => fetch(new_zakaz)

const Update_zakaz = (zakaz_id) => fetch(update_zakaz, zakaz_id)

module.exports = {
    new_Zakaz,
    One_zakaz,
    All_zakaz,
    Complect_zakaz,
    New_zakaz,
    Update_zakaz
}