const ages = [19, 20, 22, 1, 100, 90, 14];

const predicat = (age: number) => {
    return age > 90;
}

const oldAges = [100]



export type CourseType = {
    title: string
    price: number
}


const  courses = [
    {title : "css", price: 110},
    {title : "JS", price: 200},
    {title : "REACT", price: 150},
]

// < 160
const cheapPredicat = (course: CourseType) => {
    return course.price < 160;
}

const chipCourses = [
    {title : "css", price: 110},
    {title : "REACT", price: 150}
]