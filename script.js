

function cleanUpIndex() {
    let classMain = document.querySelector('.main')
    while (classMain.firstChild) {
        classMain.removeChild(classMain.firstChild)
    }
}

function createSingleIndex(contact) {
    return '<a href="page3.html"><div class="contact">${contact.name}</div></a>'
}

function renderIndex(contactList) {
    let classMain = document.querySelector('.main')
    for (let i = 0; i < contactList.length;i++) {
        classMain.insertAdjacentHTML('beforeend', createSingleIndex(contactList[i]))
    }
}

function cleanUpView(){
    let classMain = document.querySelector('.form')
    while (classMain.firstChild) {
        classMain.removeChild(classMain.firstChild)
    }
}

 function renderView(contactList){
    let contactType = ['name', 'email', 'phone', 'address']
    let pushedContent = []
    pushedContent.push(<div class="contact${contactType[0]}">${contact[contactType[0]]}</div>)

    for (let i = 1; i <= 3; i++) {
        pushedContent.push(<div class="contact${contactType[i]}">${contactType[i]}: ${contact[contactType[i]]}</div>);
    }    
}
 function cleanUpCreate(){
    let classMain = document.querySelector('.contactname')
    while (classMain.firstChild) {
        classMain.removeChild(classMain.firstChild)
    }

}
function renderCreate(){
    let classMain = document.querySelector('.contactname')
    for (let i = 0; i < contactList.length;i++) {
        classMain.insertAdjacentHTML('beforeend', createSingleIndex(contactList[i]))
    }

}