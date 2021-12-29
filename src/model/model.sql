CREATE TABLE users(
    user_id bigserial PRIMARY KEY ,
    user_name VARCHAR(250) NOT NULL,
    user_password VARCHAR(250) NOT NULL,
    user_telfon VARCHAR(250) NOT NULL,
    user_region VARCHAR(150) NOT NULL,
    is_admin VARCHAR(250) DEFAULT 'false'
);

CREATE TABLE product (
    product_id bigserial PRIMARY KEY ,
    product_Title VARCHAR(1000) NOT NULL,
    prodcut_text text NOT NULL,
    product_price BIGINT NOT NULL,
    product_img text NOT NULL
);

CREATE TABLE korzina (
    korzina_id bigserial,
    korzina_user bigint REFERENCES users(user_id),
    korzina_product bigint REFERENCES product(product_id)
);

CREATE TABLE zakazlar (
    zakaz_id bigserial,
    zakaz_user bigint REFERENCES users(user_id),
    zakaz_prodcut bigint REFERENCES product(product_id),
    zakaz_username VARCHAR(250) NOT NULL,
    zakaz_telefon VARCHAR(250) NOT NULL,
    zakaz_adres text NOT NULL,
    zakaz_holati text DEFAULT 'NEW'
);
