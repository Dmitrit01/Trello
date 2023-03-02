const bodyElement = document.body // добавляем bodyElement
//Создаем функцию для создания элемента и присваивания атрибутов
function createElement(tagName,options){
    const element = Object.assign(document.createElement(tagName),options)
    return element
}

//root
const root = document.getElementById('root') //------------------------------------------------находим div c id='root'
//application
const application = createElement('div',{classList:'application'})//---------------------------создаем element application
root.insertAdjacentElement('afterbegin',application)//-----------------------------------------указываем позицию для application

//header
const header = createElement('header',{classList:'header'})//----------------------------------создаем элемент header
application.insertAdjacentElement('afterbegin',header)//---------------------------------------указываем позицию для header

const headerTitle = createElement('h1',{classList:'header__title',textContent:'Trello'})//-----создаем элемент headerTitle
const headerTime = createElement('div',{classList:'header__time'})//---------------------------создаем элемент headerTime

setInterval(()=>{//----------------------------------------------------------------------------создаем время
    const time = new Date()
    const hours = time.getHours()
    const minuts = time.getMinutes()<10?'0'+time.getMinutes():time.getMinutes()
    const seconds = time.getSeconds()<10?'0'+time.getSeconds():time.getSeconds()
    headerTime.innerHTML = `${hours}.${minuts}.${seconds}`
},1000)

header.insertAdjacentElement('afterbegin',headerTime)//----------------------------------------указываем позицию для headerTime
header.insertAdjacentElement('afterbegin',headerTitle)//---------------------------------------указываем позицию для headerTitle