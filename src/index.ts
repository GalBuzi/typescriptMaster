import log from "@ajar/marker";
import fetch from "node-fetch"
import Person from './Person.js'

(async function testing() {
    const data = await fetch('https://api.npoint.io/eb4adcb5677e08f7f628')
    const json = await data.json() as Person[]
    const personArr = json.map(x=> new Person(x.id,x.gender,x.salary,x.last_name,x.first_name,x.is_manager))
    const salaries = await getSalaries(personArr)
    console.log(salaries);
    

})()

function getSalaries(arr : Person[]):Promise<number>{
    return new Promise((resolve,reject)=>{
        const salaries = arr.reduce((acc : number,curr:Person):number=>{
            return acc + curr.salary
        },0)
        resolve(salaries)
    })
}