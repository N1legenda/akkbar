const acardion = document.getElementsByClassName
('acard');

for (let i = 0; i < acardion.length; i++) {
    acardion[i].addEventListener('click' , function() {
        this.classList.toggle('active')
    })
    
}