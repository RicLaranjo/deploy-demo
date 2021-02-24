//Creates a wilder object with the following properties:
//name and city, with String type values
//age with a Number type value
//isLearningJs with a Boolean value//

const ricardo = {
    firstName:'Ricardo',
    lastName:'Silva',
    city:'Lisboa',
    age:31,
    "isLearningJs":true
    };
    
//Add code to browse the object, and indicate if the following properties exist: name, isLearningJs, isLearningPhp//
  
    for(let key in Ricardo){
        console.log(key,Ricardo[key]);
    };

//Add the following properties after the fact: knowsHTML and knowsCSS, as well as a hobbies property (string array)//
ricardo.middleName='Laranjo';
ricardo.knowsHTML=true;
ricardo.knowsCSS=true;
ricardo.hobbies='Board Games';

//Delete the name property, and add two separate properties firstName and lastName//