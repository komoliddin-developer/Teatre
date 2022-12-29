const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

let aboutCards = document.querySelectorAll(".about")

function some(entries) {
  // console.log(entries);
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("active")
    window.scrollY = '1000'
  } else {
    entries[0].target.classList.remove("active")


  }
}
console.log(window.scrollY);

aboutCards.forEach(cards => {
  let elem = new IntersectionObserver(some, {
    threshold: 0.5
  })
  elem.observe(cards)
});


// let main = document.querySelector('#about')
// console.log(aboutCards);
// // console.log(main);
// window.addEventListener("scroll", () => {
//     let Cards = aboutCards.getAttribute("data-speed")
//     console.log(Cards);
//     aboutCards.style.transform = `translateY(${this.scrollY * Cards}px)`
//     // btn.style.transform = `translateY(${this.scrollY * speed1}px)`
//     // main.style.transform = `translateY(${this.scrollY * speed1}px)`


// })



let h1 = document.querySelectorAll(".fa-star")

function str() {
  for (let i = 0; i < h1.length; i++) {
    const delay = h1[i].getAttribute("data-delay")
    h1[i].style.transitionDelay = delay + 's'
    h1[i].classList.add("active")
  }
}

// function str(x = 0) {
//   for (let i = 0; i < h1.length; i++) {
//     console.log(h1.length);
//     if (x < h1.length) {
//       setTimeout(() => {
//         console.log(i);
//         h1[x].style.color = 'gold'
//         h1[x].style.transform = 'scale(1.5)'
//         str(x)
//       }, 300);
//     }
//   }
//   x++
// }

let star = document.querySelector('.star__rating')

star.addEventListener('mouseover', str)



// scene = new THREE.Scene();
// camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1,1000);
// camera.position.z = 10
// renderer = new THREE.WebGLRenderer({alpha: true, antialias: true})
// renderer.setClearColor(0x000000,0)
// renderer.getSize(1280, 720)
// renderer.domElement.setAttribute("id", "cinema")
// document.body.insertBefore(renderer.domElement, document.body.firstChild)
// const alight = new THREE.AmbientLight(0x404040, 1.2)
// scene.add(aLight)
// const pLight = new THREE.PointLight(0xFFFFFF, 1.2)
// pLight.position.set(0, -3, 7)
// scene.add(pLight)
// let loader = new THREE.GLTFLoader()
// let obj = null
// loader.load()

let down__link = document.querySelector(".down__link")
let header = document.querySelector(".header")

down__link.addEventListener("mouseover", () => {
  header.style.filter = "blur(10px)"
})

down__link.addEventListener("mouseout", () => {
  header.style.filter = "blur(0)"
})