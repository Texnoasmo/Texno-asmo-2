const { fetch , fetchAll} = require("../../lib/postgres")

const all_users = `
    SELECT * FROM users
`

const one_user =`
    SELECT * FROM users WHERE user_id = $1
`
const create_user =  ` 
    INSERT INTO users (user_name, user_password, user_telfon, user_region, is_admin) VALUES($1, $2, $3,$4,$5) RETURNING *
`

const login = `
    SELECT * FROM users WHERE user_name = $1 AND user_password = $2
`

const ALL_USERS = () => fetchAll(all_users)
const ONE_USER = (user_id) => fetch(one_user, user_id)

const CREATE_USER = (user_name, user_password, user_telfon, user_region, is_admin) => fetch(create_user, user_name, user_password, user_telfon, user_region, is_admin)

const Login = (user_name, user_password) => fetch(login, user_name, user_password)

module.exports = {
    ALL_USERS,
    ONE_USER,
    CREATE_USER,
    Login
}