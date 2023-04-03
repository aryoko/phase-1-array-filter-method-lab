function findMatching(drivers, name) {
  let filteredNames = drivers.filter(function(driver) {
   return (driver == name || driver == name.toLowerCase())
  })
  return filteredNames
}

function fuzzyMatch(drivers, firstTwoChar) {
  let filteredNames = drivers.filter(function(driver) {
    return (driver.slice(1, 2) === firstTwoChar.slice(1, 2))
  })
  return filteredNames
}

function matchName(drivers, name) {
  let filteredNames = drivers.filter(function (driver) {
    return driver.name === name
  })
  return filteredNames
}