let imagesProj = [{
    url: "images/slider/image-2.jpg",
    cityFirst: "Rostov-on-Don",
    citySecond: "LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request"
}, {
    url: "images/slider/image-22.jpg",
    cityFirst: "Sochi",
    citySecond: "Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request"
}, {
    url: "images/slider/image-33.jpg",
    cityFirst: "Rostov-on-Don",
    citySecond: "Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request"
}];

function initSlider() {
    if (!imagesProj || !imagesProj.length) return;

    let sliderImages = document.querySelector('.projects-images');
    let sliderArrows = document.querySelector('.content-projects'); //ищу этот класс т.к. в классе arrows-project только стрелки для большого экрана, стрелки для мобильной версии находятся в другом диве
    let sliderDots = document.querySelector('.box-dot');
    let sliderTitle = document.querySelector('.projects-info');
    let sliderUl = document.querySelector('.projects_ul');

    initImages();
    initArrows();
    initDots();
    changeTitle(0);
    initUl();


    function initImages() {
        imagesProj.forEach((image, index) => {
            let imageDiv = `<div class="projects-image n${index} ${index === 0? "projects-image-active" : ""}" style="background-image:url(${imagesProj[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        })
    }

    function initArrows() {
        sliderArrows.querySelectorAll(".arrow").forEach(arrow => {
            arrow.addEventListener("click", function() {
                let curNumber = +sliderImages.querySelector(".projects-image-active"). dataset.index;
                let nextNumber;
                if (arrow.classList.contains("arrows-left")) {
                    nextNumber = curNumber === 0? imagesProj.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === imagesProj.length -1? 0 : curNumber + 1;
                }
                moveSleder(nextNumber);
            });
        });
    }

    function initDots() {
        imagesProj.forEach((image, index) => {
            let dot = `<div class="dot n${index} ${index === 0? "dot-active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".dot").forEach(dot => {
            dot.addEventListener("click", function() {
                 moveSleder(this.dataset.index);
                 
            })
        })
    }

    function moveSleder(num) {
        sliderImages.querySelector(".projects-image-active").classList.remove("projects-image-active");
        sliderImages.querySelector(".n" + num).classList.add("projects-image-active");
        changeTitle(num);
        sliderDots.querySelector(".dot-active").classList.remove("dot-active");
        sliderDots.querySelector(".n" + num).classList.add("dot-active");
        sliderUl.querySelector(".li-active").classList.remove("li-active");
        sliderUl.querySelector(".n" + num).classList.add("li-active");
    }

    function changeTitle(num) {
        let sliderCityFirst = sliderTitle.querySelector(".cityFirst");
        sliderCityFirst.innerText = cropTitle(imagesProj[num].cityFirst);
        let sliderCitySecond = sliderTitle.querySelector(".citySecond");
        sliderCitySecond.innerText = cropTitle(imagesProj[num].citySecond);
        let sliderArea = sliderTitle.querySelector(".area");
        sliderArea.innerText = cropTitle(imagesProj[num].area);
        let sliderTime = sliderTitle.querySelector(".project-time");
        sliderTime.innerText = cropTitle(imagesProj[num].time);
        let sliderCost = sliderTitle.querySelector(".cost");
        sliderCost.innerText = cropTitle(imagesProj[num].cost);
    }

    function cropTitle(title) {
        return title;
    }

    function initUl() {
        imagesProj.forEach((image, index) => {
            let li = `<li class="projects_li n${index} ${index === 0? "li-active" : ""}" data-index="${index}">${imagesProj[index].cityFirst}, ${imagesProj[index].citySecond}</li>`;
            sliderUl.innerHTML += li;
        });
        sliderUl.querySelectorAll(".projects_li").forEach(li => {
            li.addEventListener("click", function() {
                moveSleder(this.dataset.index);
            })
        })
    }
    
}

document.addEventListener('DOMContentLoaded', initSlider);