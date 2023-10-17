gsap.from (".box__title", {opacity: 0, delay: 1, duration: 1});
gsap.from ("#changeTitle", {opacity: 0, delay: 1, duration: 1});
gsap.from ("#inputField", {opacity: 0, delay: 1.5, duration: 1});
gsap.from ("#btn", {opacity: 0, delay: 1.5, duration: 1});

const inputField = document.querySelector('#inputField');
const btn = document.querySelector("#btn");
const toDoContainer = document.querySelector('#toDoContainer');

btn.addEventListener('click', () => {
    createItems();;
})

inputField.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        createItems();
    }
})

function createItems() {
    const item = document.createElement('li');
    item.innerText = inputField.value;
    if (inputField.value.trim().length === 0) {
        return false;
    }
    item.classList.add('container');
    toDoContainer.appendChild(item);
    inputField.value = ' ';

    const div = document.createElement('div');
    div.classList.add('flex');

    const buttonCheck = document.createElement('span');
    buttonCheck.classList.add('flex__btn');
    buttonCheck.innerHTML = '<svg width="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.00011 13L12.2278 16.3821C12.6557 16.7245 13.2794 16.6586 13.6264 16.2345L22.0001 6" stroke="#ffb8a4" stroke-width="2" stroke-linecap="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1892 12.2368L15.774 6.63327C16.1237 6.20582 16.0607 5.5758 15.6332 5.22607C15.2058 4.87635 14.5758 4.93935 14.226 5.36679L9.65273 10.9564L11.1892 12.2368ZM8.02292 16.1068L6.48641 14.8263L5.83309 15.6248L2.6 13.2C2.15817 12.8687 1.53137 12.9582 1.2 13.4C0.868627 13.8419 0.95817 14.4687 1.4 14.8L4.63309 17.2248C5.49047 17.8679 6.70234 17.7208 7.381 16.8913L8.02292 16.1068Z" fill="rgba(255, 184, 164, 0.7)"></path> </g></svg>'
    
    const buttonRemove = document.createElement('span');
    buttonRemove.classList.add('flex__btn');
    buttonRemove.innerHTML = '<svg width="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 5L5 19M5.00001 5L19 19" stroke="#ffb8a4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'

    div.appendChild(buttonCheck);
    div.appendChild(buttonRemove);
    item.appendChild(div);

    buttonCheck.addEventListener ('click', () => {
        item.classList.add('container_done');
        buttonCheck.innerHTML = '<svg width="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.00011 13L12.2278 16.3821C12.6557 16.7245 13.2794 16.6586 13.6264 16.2345L22.0001 6" stroke="gray" stroke-width="2" stroke-linecap="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1892 12.2368L15.774 6.63327C16.1237 6.20582 16.0607 5.5758 15.6332 5.22607C15.2058 4.87635 14.5758 4.93935 14.226 5.36679L9.65273 10.9564L11.1892 12.2368ZM8.02292 16.1068L6.48641 14.8263L5.83309 15.6248L2.6 13.2C2.15817 12.8687 1.53137 12.9582 1.2 13.4C0.868627 13.8419 0.95817 14.4687 1.4 14.8L4.63309 17.2248C5.49047 17.8679 6.70234 17.7208 7.381 16.8913L8.02292 16.1068Z" fill="rgba(0, 0, 0, 0.3)"></path> </g></svg>'
    })

    buttonRemove.addEventListener('click', () => {
        toDoContainer.removeChild(item);
    })
}

const changeTitle = document.querySelector("#changeTitle");
changeTitle.addEventListener("click", ()=> {
    let title = prompt("Введите заголовок").trim();
    if(title) {
        document.querySelector(".box__title").textContent = title;
    }  
    else if(title == null) {
        return false;
    }
})