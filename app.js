const navigation = document.querySelector('.navigation-link')
const toggling = document.querySelector('.togglebar')

toggling.addEventListener('click', function() {
    if(navigation.style.display === 'block'){
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'block';
    }
})
