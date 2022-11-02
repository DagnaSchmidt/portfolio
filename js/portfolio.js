const portfolioDescription = document.getElementsByClassName('portfolio__item');
const portfolioTitle = document.querySelectorAll('portfolio__title');

function togglePortfolio(){
    let itemClass = this.parentNode.className

    for(i = 0; i < portfolioDescription.length; i++){
        portfolioDescription[i].className = 'portfolio__item close'
    }
    if(itemClass === 'portfolio__item close'){
        this.parentNode.className = 'portfolio__item open'
    }
}

portfolioTitle.forEach((el) =>{
    el.addEventListener('click', togglePortfolio)
})