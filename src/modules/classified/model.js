const { decode } = require('../../library/mufunc')
const { rows, fetch, fetchAll } = require('../../library/postgres')
const {
	GET_SQL_ALL,
	GET_SQL,
	GET_SQL_CAR,
	GET_SQL_TRUE,
	WORK,
	DRIVER,
	CONFIG,
	CLASSIFIEDS
} = require('./query')



const get = async ({fromId, toId, carId}) => {
	if(fromId == 0 && toId == 0 && carId > 0) {
		return await fetchAll(GET_SQL_CAR, carId)
	} else if (fromId > 0 && toId > 0 && carId > 0) {
		return await fetchAll(GET_SQL_TRUE, fromId, toId, carId)
	}else if (fromId == 0 && toId == 0 && carId == 0) {
		return await fetchAll(GET_SQL_ALL)
	}else {
		return await fetchAll(GET_SQL, fromId, toId)
	}
}


const work = async ({token, work}) => {
	let working = await fetch(WORK, work, +decode(`${token}`))
	return 'ok'
	
}



const driver = async ({token}) => {
	let driver = await fetch(DRIVER, +decode(`${token}`))
	let classifieds = await fetchAll(CLASSIFIEDS, driver.from_id, driver.to_id, driver.car_id)

	return {
		driver: driver,
		classifieds: classifieds
	}
}



const config = async ({token,from, to, car, price, date}) => {
	date = date ? date : '1'
	let config = await fetch(CONFIG, +from, +to, +car, price, date, +decode(`${token}`))

	return config
}

module.exports = {
	get,
	config,
	work,
	driver

}


