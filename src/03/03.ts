import {student, StudentType} from "../02/02";
import {CityType, governmentBuildingsType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}

export const  addSkill = (student: StudentType,skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}


export const addMoneyToBudget = (bulding: governmentBuildingsType, budget: number) => {
bulding.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
houseType.repaired = true;
}

export  const  toFireStaff = (governmentBuildingsType: governmentBuildingsType, number: number) => {
     governmentBuildingsType.staffCount -= number;
}

export const toHireStaff = (buildings:governmentBuildingsType, number: number) => {
    buildings.staffCount += number;
}

export const createMessage = (city: CityType) => {
return "Hello " + city.title + " citizens. I want be happy. All " +  city.citizensNumber  + " men"
}