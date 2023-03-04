//box
const box = createElement('div',{classList:'box'})//-------------------------------------------создаем элемент box
application.insertAdjacentElement('beforeend',box)//-------------------------------------------указываем позицию для box
//Cоздаем колонки в box

//todo колонка=========================================================================================================================================
const todo = createElement('div',{classList:'box__item todo'})//-------------------------------cоздаем элемент todo
box.insertAdjacentElement('beforeend',todo)//--------------------------------------------------указываем позицию для todo
const todoTop = createElement('header',{classList:'todo__top'})//------------------------------создаем элемент todoTop
todo.insertAdjacentElement('afterbegin',todoTop)//---------------------------------------------указываем позицию для todoTop

//Вставляем элементы в todoTop
const todoTopTitle = createElement('h2',{classList:'todo__top-title',textContent:'TODO'})//----создаем элемент todoTopTitle
const todoTopNumber = createElement('div',{classList:'todo__top-number',textContent:0})//------создаем элемент todoTopNumber

const todoAccordion = createElement('div',{classList:'todo__accordion'})//---------------------создаем todoAccordion
//Функция для гормошки todo
function moveTodoAccordion(){
    todoMain.classList.toggle('todo__main_close')
    todoAccordionImg.classList.toggle('todo__accordion_return')
}
todoAccordion.addEventListener('click',moveTodoAccordion)
//img в todoAccordion
const todoAccordionImg = createElement('img',{classList:'todo__accordion__img'})
todoAccordionImg.setAttribute('src','img/arrow.png')
todoAccordion.insertAdjacentElement('beforeend',todoAccordionImg)


todoTop.insertAdjacentElement('beforeend',todoTopTitle)//--------------------------------------указываем позицию для todoTopTitle
todoTop.insertAdjacentElement('beforeend',todoTopNumber)//-------------------------------------указываем позицию для todoTopNumber
todoTop.insertAdjacentElement('beforeend',todoAccordion)//-------------------------------------указываем позицию для todoAccordion

//todoMain
const todoMain = createElement('main',{classList:'todo__main'})//------------------------------cоздаем элемент todoMain
todo.insertAdjacentElement('beforeend',todoMain)//---------------------------------------------указываем позицию для todoMain

//todoFooter
const todoFooter= createElement('footer',{classList:'todo__footer',textContent:'Add'})//-------cоздаем элемент todoFooter
todo.insertAdjacentElement('beforeend',todoFooter)//-------------------------------------------указываем позицию для todoFooter

//Событие на todoFooter
function showModal(){
    modalWindow.classList.add('modal__visible')//-------------------------------------------Модальное окно ниже создано
    bodyElement.classList.add('lock')//----------------------------------------------------Добавляем lock на body
}

todoFooter.addEventListener('click',showModal)

//progress колонка======================================================================================================================================
const progress = createElement('div',{classList:'box__item progress'})//-----------------------cоздаем элемент progress
box.insertAdjacentElement('beforeend',progress)//----------------------------------------------указываем позицию для progress

const progressTop = createElement('header',{classList:'progress__top'})//------------------------------создаем элемент progressTop
progress.insertAdjacentElement('afterbegin',progressTop)//---------------------------------------------указываем позицию для progressTop

//Вставляем элементы в progressTop
const progressTopTitle = createElement('h2',{classList:'progress__top-title',textContent:'progress'})//----создаем элемент progressTopTitle
const progressTopNumber = createElement('div',{classList:'progress__top-number',textContent:0})//------создаем элемент progressTopNumber
const progressAccordion = createElement('div',{classList:'progress__accordion'})
//Функция для гормошки progress
function moveProgressAccordion(){
    progressMain.classList.toggle('progress__main_close')
    progressAccordionImg.classList.toggle('progress__accordion_return')
}
progressAccordion.addEventListener('click',moveProgressAccordion)
//img в progressAccordion
const progressAccordionImg = createElement('img',{classList:'progress__accordion__img'})
progressAccordionImg.setAttribute('src','img/arrow.png')
progressAccordion.insertAdjacentElement('beforeend',progressAccordionImg)

progressTop.insertAdjacentElement('beforeend',progressTopTitle)//--------------------------------------указываем позицию для progressTopTitle
progressTop.insertAdjacentElement('beforeend',progressTopNumber)//-------------------------------------указываем позицию для progressTopNumber
progressTop.insertAdjacentElement('beforeend',progressAccordion)//-------------------------------------указываем позицию для progressAccordion
//progressMain
const progressMain = createElement('main',{classList:'progress__main'})//------------------------------cоздаем элемент progressMain
progress.insertAdjacentElement('beforeend',progressMain)//-------------------------------------------указываем позицию для progressMain
//progressFooter
const progressFooter= createElement('footer',{classList:'progress__footer'})//------------------------------cоздаем элемент progressFooter
progress.insertAdjacentElement('beforeend',progressFooter)//-------------------------------------------указываем позицию для progressFooter

//done колонка===============================================================================================================
const done =  createElement('div',{classList:'box__item done'})//------------------------------создаем элемент done
box.insertAdjacentElement('beforeend',done)//--------------------------------------------------указываем позицию для done

const doneTop = createElement('header',{classList:'done__top'})//------------------------------создаем элемент doneTop
done.insertAdjacentElement('afterbegin',doneTop)//---------------------------------------------указываем позицию для doneTop

//Вставляем элементы в doneTop
const doneTopTitle = createElement('h2',{classList:'done__top-title',textContent:'done'})//----создаем элемент doneTopTitle
const doneTopNumber = createElement('div',{classList:'done__top-number',textContent:0})//------создаем элемент doneTopNumber
const doneAccordion = createElement('div',{classList:'done__accordion'})//---------------------создаем todoAccordion
//Функция для гормошки done
function moveDoneAccordion(){
    doneMain.classList.toggle('done__main_close')
    doneAccordionImg.classList.toggle('done__accordion_return')
}
doneAccordion.addEventListener('click',moveDoneAccordion)
//img в doneAccordion
const doneAccordionImg = createElement('img',{classList:'done__accordion__img'})
doneAccordionImg.setAttribute('src','img/arrow.png')
doneAccordion.insertAdjacentElement('beforeend',doneAccordionImg)
doneTop.insertAdjacentElement('beforeend',doneTopTitle)//--------------------------------------указываем позицию для doneTopTitle
doneTop.insertAdjacentElement('beforeend',doneTopNumber)//-------------------------------------указываем позицию для doneTopNumber
doneTop.insertAdjacentElement('beforeend',doneAccordion)//-------------------------------------указываем позицию для todoAccordion
//doneMain
const doneMain = createElement('main',{classList:'done__main'})//------------------------------cоздаем элемент doneMain
done.insertAdjacentElement('beforeend',doneMain)//---------------------------------------------указываем позицию для doneMain
//doneFooter
const doneFooter= createElement('footer',{classList:'done__footer',textContent:'deleteAll'})//--cоздаем элемент doneFooter
done.insertAdjacentElement('beforeend',doneFooter)//-------------------------------------------указываем позицию для doneFooter



//Каркас модального окна==============================================================================================================
/*
    <div class="modal">
        <div class="modal__body">
            <form action="#" class="modal__form">
                <input type="text" placeholder="Title" class="modal__title">
                <textarea class="modal__textarea" placeholder="Description"></textarea>
                <footer class="modal__footer">
                    <select class="modal__select">
                        <option>User 01</option>
                        <option>User 02</option>
                        <option>User 03</option>
                        <option>User 04</option>
                        <option>User 05</option>
                    </select>
                    <div class="modal__buttons">
                        <button class="modal__cancel">Cancel</button>
                        <button class="modal__confirm">Confirm</button>
                    </div>
                </footer>
            </form>
        </div>
    </div>
*/
//Каркас приложения ====================================================================================================================
/* <div id="root">
        <div class="application">
            <header class="header">
                <h1 class="header__title">Trello</h1>
                <div class="header__time">Date</div>
            </header>
            <div class="box">
                <div class="box__item todo">
                    <header class="todo__top">
                        <h2 class="todo__top-title">TODO:</h2>
                        <div class="todo__top-number">0</div>
                    </header>
                    <main class="todo__main">
                        
                    </main>
                    <footer class="todo__footer">
                        Add todo
                    </footer>
                </div>
                <div class="box__item progress">
                    <header class="progress__top">
                        <h2 class="progress__top-title">IN PROGRESS</h2>
                        <div class="progress__top-number">0</div>
                    </header>
                    <main class="progress__main"></main>
                    <footer class="progress__footer"></footer>
                </div>
                <div class="box__item done">
                    <header class="done__top">
                        <h2 class="done__top-title">DONE</h2>
                        <div class="done__top-number">0</div>
                    </header>
                    <main class="done__main"></main>
                    <footer class="done__footer">Delete all</footer>
                </div>
            </div>
        </div>
    </div> */

    // function counter(){
    //     time = 86400 // это кол-во секунд в одном дне
    //     return function updateCountDown(){
    //         let seconds = time%60<10?'0'+time%60:time%60
    //         let minuts = Math.floor(time/60%60)<10?'0'+Math.floor(time/60%60):Math.floor(time/60%60)
    //         let hours = Math.floor(time/3600%60)<10?'0'+Math.floor(time/3600%60):Math.floor(time/3600%60) 
    //         componentTime.textContent = `${hours}:${minuts}:${seconds}`
    //         time>0?time--:clearInterval(clear)
    //     }
    // }
    // let componentTimer = counter()
    // let clear = setInterval(componentTimer,1000)
