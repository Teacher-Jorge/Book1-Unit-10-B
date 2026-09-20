const input1= document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')

const btnAnimation = document.getElementById('btnAnimation')

const img1 = document.getElementById('img1')

const rigth1 = document.getElementById('right1')
const rigth2 = document.getElementById('right2')
const rigth3 = document.getElementById('right3')

//PAGE 1

btnAnimation.addEventListener('click', function() {
    audio = document.getElementById('tap1')
    audio.play();

    img1.animate(
        [
            {
                transform: "translateX(0)",
                opacity: 1
            },
            {
                transform: "translateX(-2000px) rotate(500deg) scale(0%) translateY(-1000px)",
                opacity: 1,
            }
        ],
        {
            duration: 1500,
            fill: "forwards",
            delay: 100,
            easing: "ease-in-out",
        }
    )

    setTimeout(() => {
         window.location.href = "page3.html";
    }, 1000);

   
})

//PAGE 1

input1.addEventListener('keyup', (e) => {
    if (input1.value === "did") {
        audio = document.getElementById('swoosh1')
        audio.play()
        input1.style.color = 'green'
        rigth1.style.visibility = 'visible'
        document.getElementById('input2').focus()
    } else {
        input1.style.color = 'red'
    }
     
})

input2.addEventListener('keyup', (e) => {
    if (input2.value === "buy") {
        audio = document.getElementById('swoosh1')
        audio.play()
        input2.style.color = 'green'
        right2.style.visibility = 'visible'
        document.getElementById('input3').focus()
    } else {
        input2.style.color = 'red'
    }
        
})

input3.addEventListener('keyup', (e) => {
    if (input3.value === "bought") {
        audio = document.getElementById('swoosh1')
        audio.play()
        input3.style.color = 'green'
        right3.style.visibility = 'visible'
        document.activeElement.blur();
    } else {
        input3.style.color = 'red'
    }
        
})











