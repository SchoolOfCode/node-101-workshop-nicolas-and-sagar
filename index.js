import myCollection from "./collection.js";
import chalk from "chalk";

function describeItem(item){
      if(item.count == 1){
        console.log(chalk.bgYellow(chalk.cyan(`I have a ${item.name}. Here's what I like about it: ${item.whatILike}.`)))
      }else if(item.count > 1){
          console.log(chalk.bgBlue(chalk.red(`I have ${item.count} ${item.name}s. Here's what I like about them: ${item.whatILike}`)))
      }
  }


  function describeCollection(){
          for(let x of myCollection){
              describeItem(x)
          }
      }
describeCollection(myCollection);