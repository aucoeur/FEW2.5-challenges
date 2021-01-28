// ================================================================

// Titanic Dataset challenges!

// Your goal is to write some functions that will extract
// relevant data from the dataset.

// Write your code here in this file.

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant
// piece of information from the data and return it.

// =================================================================
const data = require('./titanic-passengers')


// 1 ---------------------------------------------------------------
// Return the total number of passengers.
// Return a number.

function getTotalPassengers(data) {
	return data.reduce((count) => {
		return count + 1;
	}, 0)
}

// 2 ---------------------------------------------------------------
// Return the number of surviving passengers. A passenger survived
// if their survived property is "Yes".
// Return a number.

function getSurvivorCount(data) {
	const survivors = data.filter((passenger) => {
		return passenger.fields.survived === 'Yes'
	});

	return survivors.length
}

// 3 ---------------------------------------------------------------
// Return the number of passengers who did not survive. A passenger
// Return a number.

function getCasualityCount(data) {
	const deaths = data.filter((passenger) => {
		return passenger.fields.survived === "No"
	});

	return deaths.length
}

// 4 ---------------------------------------------------------------
// Return the number of passengers in any class. This function
// takes the data and the passenger class a string. Fins all of the
// passengers whose pclass matches and return the count.
// Return a number

function countPassengersInClass(data, pclass) {
	const p = data.filter( passenger => {
		return passenger.fields.pclass === pclass;
	});
	return p.length
}

// 5 ---------------------------------------------------------------
// Return the number of survivors in a class. This function takes
// the data and passenger class. Return only passengers

function getSurvivorCountForClass(data, pclass) {
	return data
    	.filter(p => p.fields.pclass === pclass && p.fields.survived == "Yes")
    	.length
}

// 6 ---------------------------------------------------------------
// Return the number of passengers who did not survive in a class.
// This function takes the data and the passenger class and returns
// the number of passengers who did not survive for that class.

function getCasualityCountForClass(data, pclass) {
	return data
    	.filter(p => p.fields.pclass === pclass && p.fields.survived == 'No')
    	.length
}

// 7 ---------------------------------------------------------------
// Return the age of the youngest passenger. You'll need to filter
// passenger data where the age is missing.

function getMinAge(data) {
	const ages = data.map(passenger => {
		return passenger.fields.age;
	}).filter( p => p !== undefined)
	return Math.min(...ages)
}

// 8 ---------------------------------------------------------------
// Return the age of the oldest passenger.

function getMaxAge(data) {
	const ages = data.map(passenger => {
		return passenger.fields.age;
	}).filter( p => p !== undefined)
	return Math.max(...ages)
}

// 9 ---------------------------------------------------------------
// Return the number of passengers that embarked at a given stop.
// Each passenger has a embarked property with a value of: S, C,
// or Q.

function getEmbarkedCount(data, embarked) {
	const location = data
		.map(p => p.fields.embarked)
		.filter(p => p !== undefined)
  return location.filter(emb => emb === embarked).length
}

// 10 ---------------------------------------------------------------
// Return the lowest fair paid by any passenger. The fare is missing
// for some passengers you'll need to filter this out!

function getMinFare(data) {
	const fares = data
    .map(p => p.fields.fare)
    .filter(f => f !== undefined )
  return Math.min(...fares)
}

// 11 ---------------------------------------------------------------
// Return the highest fare paid by any passenger. Some of the
// passengers are missing data for fare.

function getMaxFare(data) {
	const fares = data
    .map(p => p.fields.fare)
    .filter(f => f !== undefined )
  return Math.max(...fares)
}

// 12 ---------------------------------------------------------------
// Return the count of passengers by gender.

function getPassengersByGender(data, gender) {
	return data
    .filter(p => p.fields.sex === gender)
    .length
}

// 13 ---------------------------------------------------------------
// Return the number of passengers who survived by gender.

function getSurvivorsByGender(data, gender) {
	return data
    .filter(p => p.fields.sex === gender && p.fields.survived === 'Yes').length
}

// 14 ---------------------------------------------------------------
// Return the number of passengers who did not survived by gender.

function getCasualitiesByGender(data, gender) {
	return data
    .filter(p => p.fields.sex === gender && p.fields.survived === 'No').length
}

// 15 --------------------------------------------------------------
// Return the total of all fares paid.

function getTotalFare(data) {
	const fields = data.map(p => p.fields )
	const fares = fields.filter(p => p.fare !== undefined )
	return fares.reduce((acc, p) => acc + p.fare, 0)
}

// 16 --------------------------------------------------------------
// Return the average fare paid.

function getAverageFare(data) {
	const fields = data.map(p => p.fields.fare )
	const fares = fields.filter(f => f !== undefined )

	return getTotalFare(data) / fares.length
}

// 17 --------------------------------------------------------------
// Return the median fare. The median is the value equal distance
// from the minimum and maximum values.

function getMedianFare(data) {
	const fields = data.map(p => p.fields.fare)
	const fares = fields
		.filter(fare => fare !== undefined)
		.sort((a,b) => a - b)
	return fares[Math.ceil(fares.length / 2)]
}

// 18 --------------------------------------------------------------
// Return the average age of all passengers.

function getAverageAge(data) {
	const validAges = data
		.map(p => p.fields.age)
		.filter(age => age !== undefined)
	const allAges = validAges.reduce((acc, age) => acc + age, 0)
	return allAges / validAges.length
}

// 19 --------------------------------------------------------------
// Return the median age from passengers.

function getMedianAge(data) {
	const ages = data
		.map(p => p.fields.age)
		.filter(age => age !== undefined)
		.sort((a,b) => a - b)
	return ages[Math.ceil(ages.length / 2)]
}

// 20 --------------------------------------------------------------
//

function getAverageAgeByGender(data, gender) {
	const agesByGender = data
		.filter(p => p.fields.age !== undefined && p.fields.sex === gender)
  const averageAgeByGen = agesByGender.reduce((acc, p) => acc + p.fields.age, 0)
  return averageAgeByGen / agesByGender.length
}

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports.getTotalPassengers = getTotalPassengers
module.exports.getSurvivorCount = getSurvivorCount
module.exports.getCasualityCount = getCasualityCount
// module.exports.getUniqueValues = getUniqueValues
module.exports.countPassengersInClass = countPassengersInClass
module.exports.getSurvivorCountForClass = getSurvivorCountForClass
module.exports.getCasualityCountForClass = getCasualityCountForClass
module.exports.getMinAge = getMinAge
module.exports.getMaxAge = getMaxAge
module.exports.getEmbarkedCount = getEmbarkedCount
module.exports.getMaxFare = getMaxFare
module.exports.getMinFare = getMinFare
module.exports.getPassengersByGender = getPassengersByGender
module.exports.getSurvivorsByGender = getSurvivorsByGender
module.exports.getCasualitiesByGender = getCasualitiesByGender
module.exports.getTotalFare = getTotalFare
module.exports.getAverageFare = getAverageFare
module.exports.getMedianFare = getMedianFare
module.exports.getAverageAge = getAverageAge
module.exports.getMedianAge = getMedianAge
module.exports.getAverageAgeByGender = getAverageAgeByGender
