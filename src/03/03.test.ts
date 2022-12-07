import {StudentType} from "../02/02";
import {addSkill} from "./03";
import {makeStudentActive} from "./03";
import  {doesStudentLiveIn} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: 'Roman',
        age: 28,
        isActive: true,
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
})


test("new tech should be added to student", () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, "JS");
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].id).toBeDefined();
})

test.skip("student active", () => {
    expect(student.isActive).toBe(false);
    makeStudentActive(student)
    expect(student.isActive).toBe(true);
})

test("student lives in city?", () => {


    let result1 = doesStudentLiveIn(student, "Moscow")
    let result2 = doesStudentLiveIn(student, "Ulsk")

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})