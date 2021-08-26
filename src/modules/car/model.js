const { rows, fetchAll } = require('../../library/postgres')

const GET_SQL = `
	select
		car_id as id,
		name
	from cars
`

const get = async () => await fetchAll(GET_SQL)

module.exports = {
	get
}
