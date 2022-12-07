import {CourseType} from "./04";

test ("should take old men older then 90", () => {
    const ages = [19, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter(age => age > 90) ;

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);


})


test ("should take courses chipper 160", () => {
    const  courses = [
        {title : "CSS", price: 110},
        {title : "JS", price: 200},
        {title : "REACT", price: 150},
    ]

    const cipCourses = courses.filter((price:CourseType ) => price.price < 160 );


    expect(cipCourses.length).toBe(2);
    expect(cipCourses[0].title).toBe("CSS");
    expect(cipCourses[1].title).toBe("REACT");
})


test('Get only completed task', () => {
    const tasks  = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Bear', isDone: false},
        {id: 4, title: 'Book', isDone: true},
    ]

    const copletedTask = tasks.filter(el => el.isDone)


    expect(copletedTask.length).toBe(2)
    expect(copletedTask[0].title).toBe('Milk')
    expect(copletedTask[1].title).toBe('Book')

})

test('Get only uncompleted task', () => {
    const tasks  = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Bear', isDone: false},
        {id: 4, title: 'Book', isDone: true},
    ]

    const copletedTask = tasks.filter(el => !el.isDone)


    expect(copletedTask.length).toBe(2)
    expect(copletedTask[0].id).toBe(1)
    expect(copletedTask[1].id).toBe(3)

})