function infoDelete() {
    const info = document.getElementById('secret-info');
    info.style.display = 'none'
}

document.getElementById('delete-confirm').addEventListener(
    'focus',

    function () {
        document.body.style.backgroundColor = 'red'
    }

)

document.getElementById('delete-confirm').addEventListener(
    'blur',

    function () {
        document.body.style.backgroundColor = 'white'
    }
)

document.getElementById('delete-confirm').addEventListener(
    'keyup',

    function (e) {
        const deleteBtn = document.getElementById('delete-btn');

        if(e.target.value == 'delete', 'Delete', 'DELETE') {
            deleteBtn.removeAttribute('disabled')
        } else {
            deleteBtn.setAttribute('disabled', true)
        }
    }
)