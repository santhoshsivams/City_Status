const button = document.querySelector("button")
let resultdiv = document.createElement("div")
resultdiv.id = "result"
document.getElementById("wrapper").appendChild(resultdiv)


// event listner
button.addEventListener('click', displayStats)
function displayStats(){
    const input = document.getElementById("input")
    const city = input.options[input.selectedIndex].value
    let population = 0, literacyRate = 0, language = ''
    switch(city){
        case 'Bengaluru':
            population = 8551215
            literacyRate = 88.9
            language = 'Kanadam'
            break
        case 'Chennai':
            population = 8511956
            literacyRate = 89.6
            language = "Tamil"
            break     
        case 'Mumbai':
            population = 128632233
            literacyRate = 86.6
            language = 'Marathi'
            break
        case 'Delhi':
            population = 127281236 
            literacyRate = 85.30
            language = 'Hindi'
            break   
        }
     let text =   `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}%.`
    console.log(text)

    document.getElementById('result').innerHTML = text
}
