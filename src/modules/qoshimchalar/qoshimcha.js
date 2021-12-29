const model = require("./model")
const {
    signUser,
    verifyUser
} = require("../../lib/jwt")

module.exports = {
    Create_korzina: async (req, res) => {
        try {
            const {korzina_user, korzina_product} = req.body
            const rows = await model.Create_table(korzina_user, korzina_product)
            if(rows) {
                res.send("ok")
            }else {
                res.send("not ok")
            }
        } catch (e) {
            console.log(e)
        }
    },
    delete_korzina: async (req, res) => {
        try {
            const { korzina_id } = req.body

            const rows = await model.Delete_korzina(korzina_id)

            res.send("ok")
        }catch(e) {
            console.log(e)
        }
    },
    user_korzina :async (req, res) => {
        try {
            const token = req.query.token
            const verifyToken = verifyUser(token)
            const rows = await model.Get_product(verifyToken.user_id)

            if(rows) {
                res.send(rows)
            }else {
                res.send(["korzina bosh"])
            }
        }catch(e){
            console.log(e)
        }
    }
}