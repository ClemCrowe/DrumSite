document.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    const img = document.querySelector(`img[data-key="${e.keyCode}"]`);
    img.style.opacity=1
            setTimeout(() => {
                img.style.opacity=0
            },200)
})

const allImg = document.querySelectorAll(".btnsClass")
allImg.forEach(element => {
        element.addEventListener('click', () => {
            element.style.opacity=1
            setTimeout(() => {
                element.style.opacity=0
            },200)
            
        })
        
    });


    
