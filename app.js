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
let count = 3;
let btnAgain = document.getElementById("btnTry");
btnAgain.hidden = "true";

document.getElementById("btnGuess").addEventListener("click", function(){
    count--;
    let inputNumber = document.getElementById("inputNumber").value;
    //inputNumber = parseInt(inputNumber);

    let result = document.getElementById("lblResult");

    if(count != 0){
        if(inputNumber > randomNumber){
            result.innerHTML = "Your number greater than the number"
        }else if(inputNumber < randomNumber){
            result.innerHTML = "Your number less than the number"
        }else{
            btnAgain.value = "Play Again";
            btnAgain.hidden = "";
            result.innerHTML = "Your number is correct; You Win!"
            return;
        }
    }else{
        result.innerHTML = "You have no more chances";
        btnAgain.value = "Try Again";
        btnAgain.hidden = "";
    }
    document.getElementById("count").innerHTML = "Rounds: " + count;
});

btnAgain.addEventListener("click", function(){
    location.reload();
});

