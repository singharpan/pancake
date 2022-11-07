//Mechanism by which a object inherits property of another one

let users={
    getName:function(){
        return `${this.first} ${this.lastName}`
    },
    getAge:function (){
        console.log(new Date().getFullYear,'l')
        return new Date().getFullYear() - this.birth
    }
}
let student={
    first:'ram',
    lastName:'laxman',
    birth:2000,
   
}
let teacher={
    first:'hari',
    lastName:'vansh',
    birth:1980,
}
student.__proto__=users;
teacher.__proto__=users

let stu_name=student.getName()
let stu_age=student.getAge();
let tea_name=teacher.getName();
let tea_age=teacher.getAge();
console.log(stu_name,stu_age,'result',tea_name,tea_age)

