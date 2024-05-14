class Character{
    #name;
    #age;
    #gender;
    #limit_break;
    constuctor(){
        this.#name = "Default";
        this.#age = 0;
        this.#gender = 'M';
        this.#limit_break = "Breaker";
    }
    constructor(name, age, gender, limit_break){
      if(name != ""){
      this.#name = name;
      }
      else{
        this.#name = "Default";
      }
      if(age > 0 && age <= 100){
        this.#age = age;
      }
      else{
        this.#age = 20;
      }
      if(gender == 'M' || gender == 'F'){
        this.#gender = gender;
      }
      else{
        this.#gender = 'M';
      }
      if(typeof(limit_break) == 'string'){
        this.#limit_break = limit_break;
      }
      else{
        this.#limit_break = "Unknown";
      }
    }
    setName(name){
       if(name != ""){
            this.#name = name;
        }
        else{
          this.#name = "Default";
        }
    }
    setAge(age){
        if(age > 0 && age <= 100){
          this.#age = age;
        }
        else{
          this.#age = 20;
        }
    }
    setGender(gender){
        if(gender == 'M' || gender == 'F'){
            this.#gender = gender;
          }
          else{
            this.#gender = 'M';
          }
    }
    setGender(limit_break){
        if(typeof(limit_break) == 'string'){
            this.#limit_break = limit_break;
        }
        else{
            this.#limit_break = "Unknown";
        }
    }
    getName(){
        return this.#name;
    }
    getAge(){
        return this.#age;
    }
    getGender(){
        return this.#gender;
    }
    getLimitBreak(){
        return this.#limit_break;
    }
}

let cloud = new Character("Cloud", 21, 'M', 'Breaker');
console.log(`Name: ${cloud.getName()}`);
console.log(`Age: ${cloud.getAge()}`);
console.log(`Gender: ${cloud.getGender()}`);
console.log(`Limit Break: ${cloud.getLimitBreak()}`);

class Enemy extends Character{
    #type;
    #weakness;
    constructor(name, age, gender, limit_break, type){
        super(name, age, gender, limit_break);
        this.#type = "Monster";
        this.#weakness = "Ice";
    }
    setType(type){
        if(type == "Humans" ||
            type == "Robots" ||
            type == "Monsters" ||
            type == "Flying"
        ){
            this.#type = type;
        }
        else{
            this.#type = "None";
        }
    }
    setWeakness(weakness){
        if(weakness == "Fire" ||
           weakness == "Lightning" ||
           weakness == "Ice" ||
           weakness == "Flying"
        ){
            this.#weakness = weakness;
        }
        else{
            this.#weakness = "None";
        }
    }
    getType(){
        return this.#type;
    }
    getWeakness(){
        return this.#weakness;
    }
}

var gs_1 = new Enemy("Guardian Scorpion", 1, "M", "None", "Monster", "None");
console.log(`Name: ${gs_1.getName()}`);
console.log(`Type: ${gs_1.getType()}`);
console.log(`Weakness: ${gs_1.getWeakness()}`);
