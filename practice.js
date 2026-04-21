const button = document.querySelector("button")
let resultdiv = document.createElement("div")
resultdiv.id = "result"
document.getElementById("wrapper").appendChild(resultdiv)

button.addEventListener('click', displayStatus)

function displayStatus(){
    

    const input = document.getElementById("input")
    const city = input.options[input.selectedIndex].value
    let population = 0, literacyRate = 0, language = ''

    switch(city){
        case 'Bangalore':
            population = 8551215
            literacyRate = 88.9
            language = 'Kannada'
            break
        case 'Chennai':
            population = 8511956
            literacyRate = 89.6
            language = "Tamil"
            break     
        case 'Mumbai':
            population = 12442373
            literacyRate = 86.6
            language = 'Marathi'
            break
        case 'Delhi':
            population = 11007835 
            literacyRate = 85.30
            language = 'Hindi'
            break   
        
    }
    let text = `The Indian City of ${city} has a population of ${population}. Lanuage spoken is ${language} and literacy rate is ${literacyRate}%. `
     
    console.log(text)

    document.getElementById('result').innerHTML = text

    

}