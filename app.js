/*class Customer{
    name;
    age;
    address;

    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    setAge(age){
        this.age = age;
    }
    setAddress(address){
        this.address = address;
    }
}

let customer_1 = new Customer("Amal", 18, "Colombo");

console.log(customer_1.getName());

customer_1.setName("Kasun");
console.log(customer_1.getName());


customer_1.setAge(20);
console.log(customer_1.age);*/

let randomNumber = Math.floor((Math.random()*10)*1);

document.getElementById("btnGuess").addEventListener("click", function(){
    let inputNumber = document.getElementById("inputNumber").value;
    inputNumber = parseInt(inputNumber);

    let result = document.getElementById("lblResult");

    if(inputNumber > randomNumber){
        result.innerHTML = "Your number greater than the number"
    }else if(inputNumber < randomNumber){
        result.innerHTML = "Your number less than the number"
    }else{
        result.innerHTML = "Your number is correct; You Win!"
    }
})
