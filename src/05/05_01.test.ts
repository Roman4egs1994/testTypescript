import {createGreetingMessage, ManType} from "./05_01";



let people: Array<ManType> = []


beforeEach(()=> {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18}
    ]
})

test('shold get array of greeting mesages', ()=>{
    // const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcom to IT-incubator`)
    const messages = createGreetingMessage(people); //Инкапсулированная функция

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Andrew. Welcom to IT-incubator")
    expect(messages[1]).toBe("Hello Alexander. Welcom to IT-incubator")
    expect(messages[2]).toBe("Hello Dmitry. Welcom to IT-incubator")
} )