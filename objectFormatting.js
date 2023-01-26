function  objectFormatting(peoples){
    let female = {}
    let male = {}
    let maleArray =[]
    let femalesArray = []
    for( let i = 0; i< peoples.length; i++){
       let data =peoples[i].split(', ')
       let name = data[0].split(' ')
        let firstname = name[0].toLowerCase()
       let  second_name = name[1].toLowerCase()
       let age = parseInt(data[1])
       let gender = data[2]
    if (gender === 'female') {
      female = {}
               female[firstname]=JSON.stringify({ second_name:second_name, age: age });
               femalesArray.push(female)
            } else if (gender === 'male') {
             male = {}
            male[firstname]= JSON.stringify({ second_name:second_name, age: age } )
            maleArray.push(male)
            }
          
        }
        
        return {'females': femalesArray, 'males':maleArray}
      }
      peoples = ["Patrick wyne, 30, male", "lil wyne, 32, male", "Eric mimi, 21, female", "Dodos deck, 21,male", "Alian Dwine, 22, male","Patrick wyne, 33, male","Patrick wyne, 10,male","Patrick wyne, 40,male"]
      console.log((objectFormatting(peoples)))
