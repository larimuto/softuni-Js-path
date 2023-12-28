// Write a function that keeps track of guests that are going to a house party.
// You will be given an array of strings. Each string will be one of the following:
// "{name} is going!"
// "{name} is not going!"
// If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").
// If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!"). 
// At the end print all the guests each on a separate line.


function haouseParty(set) {
    let guestList = [];
    
    
 for (const command of set ) {
    
     let line = command.split(' ')
     let name = line[0]


        if( command.includes('not')) {

            if (guestList.includes(name)){  
                let toRemove = guestList.indexOf(name)
                guestList.splice(toRemove,1)
                
            }else{
                console.log(`${name} is not in the list!`);
             }


        }else{
                if (guestList.includes(name)) { console.log(`${name} is already in the list!`);
                }else{guestList.push(name)}

        }
                
 }
   console.log(guestList.join('\n'));   
     
    }

 haouseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])