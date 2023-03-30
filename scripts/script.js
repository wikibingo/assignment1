//1. get all elements need to be change color ->querySelector
button_dark = document.querySelector('.dark_theme.general_button')
mainBGcolor = document.querySelector('main')
asideBGcolor = document.querySelector('aside')
bodyTextcolor = document.querySelector('body')
textPlaceholder = document.querySelector('textarea')
linkColor = document.querySelectorAll('nav a')
button_cancel = document.querySelector('.cancel.general_button')
console.log(button_cancel)
button_save = document.querySelector('.save.general_button')
button_new_note = document.querySelector('.new_note.general_button')

//2.toggle background and text color
function toggle_color(){
    mainBGcolor.classList.toggle('main_toggle_background_color')
    if (mainBGcolor.classList.contains('main_toggle_background_color')){
        button_dark.textContent = 'Light Theme';
    }else{
        button_dark.textContent = 'Dark Theme';
    }
    asideBGcolor.classList.toggle('aside_toggle_background_color')
    bodyTextcolor.classList.toggle('body_text_toggle_color')
    textPlaceholder.classList.toggle('text_placeholder_background_color')
    linkColor.forEach(link => {
        link.classList.toggle('nav_link');
    })
}
button_dark.addEventListener('click',toggle_color)

//3.hide element

function elementHide(){
    textPlaceholder.setAttribute('style','visibility:hidden')
    button_cancel.setAttribute('style','visibility:hidden')
    button_save.setAttribute('style','visibility:hidden')
}
button_cancel.addEventListener('click',elementHide)

//4.display element adnd clear textcontent
let counter = 1
function elementDisplay(){
    
    if (counter % 2 ===0)
        {
            textPlaceholder.value = ''
            textPlaceholder.setAttribute('style','visibility:visible')
            button_cancel.setAttribute('style','visibility:visible')
            button_save.setAttribute('style','visibility:visible')
        }
    else{
        textPlaceholder.setAttribute('style','visibility:visible')
        button_cancel.setAttribute('style','visibility:visible')
        button_save.setAttribute('style','visibility:visible')
    }
    counter++    
}
button_new_note.addEventListener('click',elementDisplay)
