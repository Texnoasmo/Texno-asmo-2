const express = require('express')

const users = require("./users/users")
const product = require("./product/product")
const zakzalar = require("./zakazlar/zakazlar")
const qoshimcha = require("./qoshimchalar/qoshimcha")
const router = express.Router()

router
    .get("/users", users.users)
    .post("/newuser", users.newUser)
    .post("/login", users.Login)
    .get("/oneuser", users.one_user)

    .get("/product", product.products)
    .get("/oneproduct", product.one_product)
    .post("/newProduct", product.newProduct)
    .post("/updateProduct", product.update_product)
    .post("/delete_product", product.delete_product)
    .post("/upload-image", product.upload_img )

    .get("/zakazlar", zakzalar.zakazs)
    .get("/NEW_zakazlar", zakzalar.New_zakazs)
    .get("/Complect_zakazlar", zakzalar.complect_zakaz)
    .post("/new_zakaz", zakzalar.new_zakaz)
    .post("/one_zakaz", zakzalar.one_zakaz)
    .post("/update_zakaz", zakzalar.update_zakaz)

    .post("/new_korzina", qoshimcha.Create_korzina)
    .post("/delete_korzina", qoshimcha.delete_korzina)
    .get("/user_korzina", qoshimcha.user_korzina)
module.exports = router