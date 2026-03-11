btn = document.querySelector('.btn')

colors = ['purple', 'brown', 'black', 'red']
index = 0

btn.addEventListener('click', () => {
    document.body.style.background = colors[index]

    index = index + 1

    if (index == colors.length){
        index = 0
    }
        btn.textContent = "Click ME!!"
})

