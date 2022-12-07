type CitiType = {
    id: number
    title: string
}
type AddressType = {
    streetTitle: string
    city: CityType
}
type CityType = {
    title: string
    countryTitle: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<CitiType>
}


export const student: StudentType = {
    id: 1,
    name: 'Roman',
    age: 28,
    isActive: false,
    address: {
        streetTitle: "Sholmova",
        city: {
            title: "Ulsk",
            countryTitle: "Russia"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)//Достать второй элемент массива