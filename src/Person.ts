interface IPerson {
     id : number,
     gender : string,
     salary : number,
     last_name : string,
     first_name : string,
     is_manager : boolean,
}

export default class Person{
    private _id : number;
    private _gender : string;
    private _salary : number;
    private _last_name : string;
    private _first_name : string;
    private _is_manager : boolean;

    // constructor({id,gender,salary,last_name,first_name, is_manager}:IPerson){
    //     this.id = id
    //     this.gender = gender
    //     this.salary = salary
    //     this.first_name = first_name
    //     this.last_name = last_name
    //     this.is_manager = is_manager  
    // }

    constructor(id:number,gender:string,salary:number,last_name:string,first_name:string, is_manager:boolean){
        this._id = id
        this._gender = gender
        this._salary = salary
        this._first_name = first_name
        this._last_name = last_name
        this._is_manager = is_manager
    }

    get id() : number{
        return this._id;
    }
    get gender() : string {
        return this._gender;
    }
    get salary() : number {
        return this._salary;
    }
    get last_name() : string {
        return this._last_name;
    }
    get first_name() : string {
        return this._first_name;
    }
    get is_manager() : boolean {
        return this._is_manager;
    }

    drive(){
        console.log("driving");
    }


}