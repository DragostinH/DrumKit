const audioItems = document.querySelectorAll('audio');

const arrAudioElements = Array.from(audioItems);
// console.log(arrAudioElements[0].dataset.key);


window.addEventListener('keydown', (e) => {
    let keyCode = e.key.toUpperCase().charCodeAt();
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const element = document.querySelector(`div [data-key="${keyCode}"]`);
    element.classList.add("playing");
    // console.log(element);
    // console.log(audio);
    audio.currentTime = 0;
    audio.play();

});


const keys = document.querySelectorAll(".key");
Array.from(keys);


function removeTransition(e) {
    console.log(e);
    if (e.propertyName !== 'transform') return;

    this.classList.remove("playing");
        console.log(e.propertyName);
}
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

// arrAudioElements[0].play();
