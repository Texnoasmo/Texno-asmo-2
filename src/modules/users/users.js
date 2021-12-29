const model = require("./model")
const {signUser, verifyUser} = require("../../lib/jwt")

module.exports = {
    users : async (req, res) => {
        try {
            const token = req.query.token
            const verifyToken = verifyUser(token)
            if(verifyToken.is_admin == "true"){
                const rows = await model.ALL_USERS()
                res.send(rows)
            }else {
                res.send(JSON.stringify(["not admin"]))
            }
        }catch (e) {
            console.log(e)
        }
    },
    newUser : async (req, res) => {
        try {
            const {user_name, user_password, user_telfon, user_region, is_admin} = req.body


            const newuser = await model.CREATE_USER(user_name, user_password, user_telfon, user_region, is_admin)

            res.send(signUser(newuser))
        }catch (e) {
            console.log(e)
        }
    },
    Login :async (req, res) => {
        try {
            const {user_name, user_password} = req.body
            const rows = await model.Login(user_name, user_password)

            if(rows) {
                res.send(signUser(rows))
            }else {
                res.send(JSON.stringify(["user not found"]))
            }
        }catch (e) {
            console.log(e)
        }
    },
    one_user : async (req, res) => {
        try {
            const token = req.query.token
            const verifyToken = verifyUser(token)
            res.send(verifyToken)
        }catch (e) {
            console.log(e)
        }
    }
}