const keys = document.querySelectorAll('.key')
const button = document.getElementById('change_color_button')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
});

//add event listener for button

button.addEventListener('click',()=> changeColor(button))


function changeColor(button){
    if( button.classList.contains('first')) {
        button.classList.remove('first');
        button.classList.add('second'); 
    }
    else if( button.classList.contains('second')) {
        button.classList.remove('second');
        button.classList.add('third'); 
    }
    else if( button.classList.contains('third')) {
        button.classList.remove('third');
        button.classList.add('first'); 
    }
          
    keys.forEach(key => {
        if( key.classList.contains('first')) {
            key.classList.remove('first');
            key.classList.add('second'); 
        }
        else if( key.classList.contains('second')) {
            key.classList.remove('second');
            key.classList.add('third'); 
        }
        else if( key.classList.contains('third')) {
            key.classList.remove('third');
            key.classList.add('first'); 
        }
              
    });
}

function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    setTimeout(() => key.classList.remove("active"), 200);
}



