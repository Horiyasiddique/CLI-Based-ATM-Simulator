

import inquirer from "inquirer"
import chalk from "chalk";
let balance : number = (50000);
console.log(chalk.cyanBright.italic( "<".repeat(30) +"Your Current Balance is :  " + balance + ">".repeat(30)));

console.log("=".repeat(70));
console.log("=".repeat(70));

let MyPin : number = (1234)

 let pinAnswer = await inquirer.prompt(
    [
       {
        "name" : "pin" ,
     "message" : " Enter Your PIN" ,
      "type" : "number"
       }
    ]
);
console.log( chalk.bgBlueBright(pinAnswer.pin));

if(pinAnswer.pin == 1234){
    console.log(chalk.bgGreen("<".repeat(30) +"Correct PIN Code!!!" + ">".repeat(30)));
    
 let operationAns = await inquirer.prompt(
    [
        {
            "name" : "option" , 
            "message" : "Please Select any 1 option",
            "type" : "list" , 
            "choices" : ["with draw" , "check Balance"]
        }
    ]
)
if(operationAns.option === "with draw"){
    let amount = await inquirer.prompt(
        [
          { "name" : "amountAns",
        "message" : " Enter Your Amount",
        "type" : "number"
          }
        ] 
     );
     console.log(chalk.greenBright( `${amount.amountAns} withdraw successfully`));
     console.log(chalk.bgMagentaBright  (balance - amount.amountAns));
}else{
    console.log("now your current amount is :  " + balance);
}
}else{
    console.log(chalk.bgRed("<".repeat(30)+"Incorrect PIN Code"+">".repeat(30)));
};

console.log("=".repeat(70));
console.log("=".repeat(70));



