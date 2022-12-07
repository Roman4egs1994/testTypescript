import {CityType, governmentBuildingsType} from "../02/02_02";

export  function demolishHousesOnTheStreet(city: CityType, street: string) {
 city.houses = city.houses.filter(h => h.address.street.title !== street)
}


export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<governmentBuildingsType>, number: number) =>  {
  return buildings.filter(h => h.staffCount > number)
}