const { fetchAll } = require('../../library/postgres')

const GET_SQL = `
	select
		state_id as id,
		name
	from states
`

const get = async () => await fetchAll(GET_SQL)

module.exports = {
	get
}
