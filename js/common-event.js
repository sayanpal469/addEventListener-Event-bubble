// function method

function functionMethod () {
    const para = document.getElementById('change-para')
    para.innerText = 'function method'
}

// direct method

document.getElementById('direct-method').addEventListener(
    'click',
    function () {
        const p = document.getElementById('change-para')
        p.innerText = 'direct method'
    }
)

// direct input update 

document.getElementById('update-method').addEventListener(
    'click',

    function () {
        const input = document.getElementById('input')

        const p = document.getElementById('change-para')
        p.innerText = input.value
        input.value = ''
    }
)