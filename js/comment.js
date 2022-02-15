function addPara() {
    const commentBox = document.getElementById('comment-box');
    const p = document.createElement('p');
    p.innerText = commentBox.value;
    const commentContainer = document.getElementById('comment-container')
    commentContainer.appendChild(p);
    commentBox.value = ''
}