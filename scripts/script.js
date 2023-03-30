//1. get all elements need to be change color ->querySelector
button_dark = document.querySelector('.dark_theme.general_button')
mainBGcolor = document.querySelector('main')
asideBGcolor = document.querySelector('aside')
bodyTextcolor = document.querySelector('body')
textPlaceholderColor = document.querySelector('textarea')
linkColor = document.querySelectorAll('nav a')
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
    textPlaceholderColor.classList.toggle('text_placeholder_background_color')
    linkColor.forEach(link => {
        link.classList.toggle('nav_link');
    })
}

button_dark.addEventListener('click',toggle_color)