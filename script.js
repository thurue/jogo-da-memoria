const cards = document.querySelectorAll("#cell")
const cells = document.querySelectorAll(".card")
let similar = []
card = []
ver = 0

start()


for (i = 0; i < cards.length; i++) {
    card.push(cards[i])
}

console.log(card)

card.forEach((element) => {
    element.addEventListener("click", () => {
        
        if (similar.length < '2') {
            element.classList.toggle("flip")
        }
        similar.push(element)
        
        console.log(similar)
        
        if (similar.length == 2) {
            console.log(similar)
            if (similar[0].classList[0] == similar[1].classList[0]) {
                similar = []
                ver++
                
                // verificador
                if (ver == 6) {
                    setTimeout(() => {
                        let iswinn = document.querySelector(".win")
                        iswinn.classList.add('winview')
                        
                    }, 100);
                }
                console.log("são iguais")
            } else {
                console.log("são diferentes")
                setTimeout(() => {
                    // for(forEach)
                    similar[0].classList.remove("flip")
                    similar[1].classList.remove("flip")
                    similar = []
                }, 600);
            }
        }
    })
    
})


function PosiçãoAleatoria() {
    return Math.floor(Math.random() * 11)
}
function start() {
    numeros = []
    numeros = Array.from({ length: 12 }, () => PosiçãoAleatoria())
    for (i = 0; i < cards.length; i++) {
        cells[i].style.order = numeros[i]
    }
}


// function verificador() {
    //     for (i = 0; i < cards.length; i++) {
        //         if (card[i].classList.includes('flip'))
//             restart()
//     }
// }

// verificador()

function restart() {
    start()
    card.forEach((element) => {
        element.classList.remove('flip')
    })
    ver = 0
    let iswinn = document.querySelector(".win")
    iswinn.classList.remove('winview')
}