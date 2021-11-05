const index = {
    elem: {
        header: document.querySelector('#header'),
        navItems: document.querySelector('#nav-items'),
        slides: document.querySelector('#img-slider'),
        nextSlide: document.querySelector('#next-slide'),
        prevSlide: document.querySelector('#prev-slide')
    },

    headerScroll() {
        window.onscroll = () => {
            let top = window.scrollY;
            const header = index.elem['header']
            const navLinks = index.elem['navItems'].querySelectorAll('li');
            const arr = [...navLinks];
            const headerMenuSec = header.querySelector('#menu');
            const headerUserSec = header.querySelector('#user-icon');

            if (top >= 100) {
                header.classList.add('bg-shark');

                if (headerMenuSec.querySelector('svg')) {
                    headerMenuSec.querySelector('svg').classList.add('text-gray-100');
                    headerMenuSec.querySelector('svg').classList.remove('text-shark');
                }
                
                if (headerUserSec.querySelector('svg')) {
                    headerUserSec.querySelector('svg').classList.add('text-gray-100');
                    headerUserSec.querySelector('svg').classList.remove('text-shark');
                }

                for (let i of arr) {

                    if (i.querySelector('a')) {
                        i.querySelector('a').classList.add('text-gray-100');
                        i.querySelector('a').classList.remove('text-shark');
                    }

                    if (i.querySelector('div')) {
                        i.querySelector('div').children[1].classList.add('text-gray-100');
                        i.querySelector('div').children[1].classList.remove('text-shark');
                    }

                    if (i.querySelector('div')) {
                        i.querySelector('div').children[0].classList.add('text-gray-100');
                        i.querySelector('div').children[0].classList.remove('text-shark');
                    }

                    if (i.querySelector('button')) {
                        i.querySelector('button').children[0].classList.add('text-gray-100');
                        i.querySelector('button').children[0].classList.remove('text-shark');
                    }

                    if (i.querySelector('button')) {
                        i.querySelector('button').children[1].classList.add('text-gray-100');
                        i.querySelector('button').children[1].classList.remove('text-shark');
                    }
                } 
            } else {
                header.classList.remove('bg-shark');

                if (headerMenuSec.querySelector('svg')) {
                    headerMenuSec.querySelector('svg').classList.remove('text-gray-100');
                    headerMenuSec.querySelector('svg').classList.add('text-shark');
                }

                if (headerUserSec.querySelector('svg')) {
                    headerUserSec.querySelector('svg').classList.remove('text-gray-100');
                    headerUserSec.querySelector('svg').classList.add('text-shark');
                }

                
                for (let i of arr) {
                    
                    if (i.querySelector('a')) {
                        i.querySelector('a').classList.remove('text-gray-100');
                        i.querySelector('a').classList.add('text-shark');
                    }

                    if (i.querySelector('div')) {
                        i.querySelector('div').children[1].classList.remove('text-gray-100');
                        i.querySelector('div').children[1].classList.add('text-shark');
                    }

                    if (i.querySelector('div')) {
                        i.querySelector('div').children[0].classList.remove('text-gray-100');
                        i.querySelector('div').children[0].classList.add('text-shark');
                    }

                    if (i.querySelector('button')) {
                        i.querySelector('button').children[0].classList.remove('text-gray-100');
                        i.querySelector('button').children[0].classList.add('text-shark');
                    }

                    if (i.querySelector('button')) {
                        i.querySelector('button').children[1].classList.remove('text-gray-100');
                        i.querySelector('button').children[1].classList.add('text-shark');
                    }
                } 
            }
        }
    },

    imgSlider() {
        const nextSlide = index.elem['nextSlide'];
        const prevSlide = index.elem['prevSlide'];
        const images = index.elem['slides'].children;
        const totalSlides = images.length;
        let counter = 0;

        const next = (direction) => {
            if (direction === 'next') {
                counter++;
                if (counter === totalSlides) {
                    counter = 0;
                }
            } else {
                if (counter === 0) {
                    counter = totalSlides - 1;
                } else {
                    counter--;
                }
            }

            for (let i = 0; i < images.length; i++) {
                images[i].classList.remove('block');
                images[i].classList.add('hidden');
            }
            images[counter].classList.remove('hidden');
        }

        nextSlide.addEventListener('click', () =>  {
            next('next');
        });

        prevSlide.addEventListener('click', () => {
            next('prev');
        });
    }
}

const { headerScroll, imgSlider } = index;

const main = () => {
    headerScroll();
    imgSlider();
}

main();