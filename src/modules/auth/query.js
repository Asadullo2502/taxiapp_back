const REGISTER = `
   INSERT INTO users(
      phone_number,
      password,
      firstname,
      lastname
   ) VALUES 
   ($1, $2, $3, $4) RETURNING user_id
`

const USERS = `
   SELECT 
      user_id
   FROM users 
   where phone_number = $1
`

const USERVERY = `
   SELECT
      password
   FROM users
   where user_id = $1
`

const RESERT = `
      UPDATE users
          set
            password = $1,
            firstname = 'a',
            lastname = 'b'
      where user_id = $2
      RETURNING password
`

const FORMUSER = `
      UPDATE users
          set
            password = crypt($1, password),
            firstname = $2,
            lastname = $3
      where user_id = $4
      RETURNING *
`

const CLASS_IS = `
   SELECT
      *
   FROM classifieds
   where user_id = $1
`

const CLASSI = `
   INSERT INTO classifieds(
      from_id,
      to_id,
      car_id,
      user_id,
      price,
      is_hiring
   ) VALUES 
   (1, 2, 1, $1, 0, 1)
`

const LOGIN = `
      SELECT
      u.user_id
      FROM users u
      WHERE u.phone_number = $1 AND
      u.password = crypt($2,password)
`


module.exports = {
   RESERT,
   USERS,
   REGISTER,
   USERVERY,
   CLASSI,
   FORMUSER,
   CLASS_IS,
   LOGIN
}