const model = require("./model")
const {
    signUser,
    verifyUser
} = require("../../lib/jwt")

module.exports = {
    zakazs: async (req, res) => {
        try {
            const token = req.query.token
            const verifyToken = verifyUser(token)
            if (verifyToken.is_admin == "true") {
                const rows = await model.All_zakaz()
                res.send(rows)
            } else {
                res.send(JSON.stringify(["not admin"]))
            }
        } catch (e) {
            console.log(e)
        }
    },
    complect_zakaz: async (req, res) => {
        try {
            const token = req.query.token
            const verifyToken = verifyUser(token)
            if (verifyToken.is_admin == "true") {
                const rows = await model.Complect_zakaz()
                res.send(rows)
            } else {
                res.send(JSON.stringify(["not admin"]))
            }
        } catch (e) {
            console.log(e)
        }
    },
    New_zakazs: async (req, res) => {
        try {
            const token = req.query.token
            const verifyToken = verifyUser(token)

            if (verifyToken.is_admin == "true") {
                const rows = await model.New_zakaz()
                res.send(rows)
            } else {
                res.send(JSON.stringify(["not admin"]))
            }
        } catch (e) {
            console.log(e)
        }
    },
    new_zakaz: async (req, res) => {
        try {
            const {
                zakaz_user,
                zakaz_prodcut,
                zakaz_username,
                zakaz_telefon,
                zakaz_adres
            } = req.body

            const rows = await model.new_Zakaz(zakaz_user, zakaz_prodcut, zakaz_username, zakaz_telefon, zakaz_adres,
            "NEW")
            if(rows) {
                res.send("ok")
            }
            else {
                res.send("not ok")
            }
        } catch (e) {
            console.log(e)
        }
    },
    one_zakaz: async(req, res) => {
        try {
            const {zakaz_id} = req.body 
            const rows = await model.One_zakaz(zakaz_id)
            if(rows) {
                res.send(rows)
            }else {
                res.send(JSON.stringify(["not found"]))
            }
        }catch(e) {
            console.log(e)
        }
    },
    update_zakaz: async(req, res) => {
        try {
            const { zakaz_id } = req.body 
            const rows = await model.Update_zakaz(zakaz_id)
            res.send("ok")
        }catch(e) {
            console.log(e)
        }
    }
}