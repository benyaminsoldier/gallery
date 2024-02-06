let next =  document.getElementsByTagName('button')[1]
let prev = document.getElementsByTagName('button')[0]
let image = document.getElementsByTagName('img')[0]
next.id = 'next'
next.innerHTML = 'Next'
prev.id = 'prev'
prev.innerHTML = 'Prev'

let gallery = 
[
    './images/desert.avif',
    './images/winter.avif',
    './images/sea.avif'
]

let i = 0;
image.src = gallery[i]
next.addEventListener('click', ()=>{
    i++
    if(i > gallery.length -1 ) i = 0
    image.src = gallery[i]
})
prev.addEventListener('click', ()=>{
    i--
    if(i < 0 ) i = gallery.length-1
    image.src = gallery[i]
})


