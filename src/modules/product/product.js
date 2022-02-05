const model = require("./model")
const {
    signUser,
    verifyUser
} = require("../../lib/jwt")
console.log(signUser({
    "is_admin": "true"
}))
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: __dirname +  "../../../../images/",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000000
    },

    fileFilter: function (req, file, cb) {
        return cb(null, true);
    }
}).single('myImage');


module.exports = {
    products: async (req, res) => {
        try {
            const rows = await model.All_product()
            res.send(rows)
        } catch (e) {
            console.log(e)
        }
    },
    one_product: async (req, res) => {
        try {
            const product_id = req.query.product_id
            const rows = await model.One_product(product_id)
            if (rows) {
                res.send(rows)
            } else {
                res.send(JSON.stringify(["product not found"]))
            }
        } catch (e) {
            console.log(e)
        }
    },
    newProduct: async (req, res) => {
        try {
            const {
                token
            } = req.body
            const verify_user = verifyUser(token)
            if (verify_user.is_admin == "true") {
                const {
                    product_Title,
                    prodcut_text,
                    product_price,
                    product_img
                } = req.body

                const rows = await model.New_product(product_Title, prodcut_text, product_price, product_img)
                if (rows) {
                    res.send("ok")
                } else {
                    res.send("not ok")
                }
            }else {
                res.send(JSON.stringify(["not admin"]))
            }
        } catch (e) {
            console.log(e)
        }
    },
    update_product : async (req, res) => {
        try {
            const {
                token
            } = req.body
            const verify_user = verifyUser(token)
            if (verify_user.is_admin == "true") {
                const {
                    product_Title, prodcut_text, product_price, product_img, product_id
                } = req.body

                const rows = await model.Update_product(product_Title, prodcut_text, product_price, product_img, product_id)
                console.log(rows)
                
                res.send("ok")
            }else {
                res.send(JSON.stringify(["not admin"]))
            }
        }catch (e) {
            console.log(e)
        }
    },
    delete_product : async (req, res) => {
        try {
            const { product_id } = req.body
            const rows = await model.delete_product(product_id)
            
            res.send("ok")
        }catch (e) {
            console.log(e)
        }
    },
    upload_img: async(req, res) => {
        try {
            upload(req, res, async(err) => {
                if (err) {
                    console.log(err.message)
                } else {
                    if (req.file == undefined) {
                        console.log("bosh files")
                    } else {                       
                        let img = "http://localhost:8000/" + `images/${req.file.filename}`
                        res.send(img)
                    }
                }
            });
        }catch(e) {
            console.log(e.message)
        }
    }
}