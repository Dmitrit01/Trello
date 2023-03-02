//124Создаем модальное окно========================================================================================================
//modalWindow
const modalWindow = createElement('div',{classList:'modal'})//-----------------------------------------------создаем элемент modalWindow
root.insertAdjacentElement('afterend',modalWindow)//---------------------------------------------------------указываем позицию для modalWindow
//modalBody
const modalBody = createElement('div',{classList:'modal__body'})//-------------------------------------------создаем элемент modalBody
modalWindow.insertAdjacentElement('afterbegin',modalBody)//--------------------------------------------------указываем позицию для modalBody
//modalForm
const modalForm = createElement('div',{classList:'modal__form'})//-------------------------------------------создаем элемент modalForm
modalBody.insertAdjacentElement('afterbegin',modalForm)//----------------------------------------------------указываем позицию для modalForm
//modalTitle
const modalTitle = createElement('input',{classList:'modal__title',placeholder:'Title'})//-------------------создаем элемент modalTitle
modalForm.insertAdjacentElement('beforeend',modalTitle)//----------------------------------------------------указываем позицию для modalTitle
//textarea
const textArea = createElement('textarea',{classList:'modal__textarea',placeholder:'Descripion'})//----------создаем элемент textarea
modalForm.insertAdjacentElement('beforeend',textArea)//------------------------------------------------------указываем позицию для textarea
//footer
const footer = createElement('footer',{classList:'modal__footer'})//---------------------------------------создаем элемент footer
modalForm.insertAdjacentElement('beforeend',footer)//------------------------------------------------------указываем позицию для footer
//select
const select = createElement('select',{classList:'modal__select'})//---------------------------------------создаем элемент select
footer.insertAdjacentElement('beforeend',select)//------------------------------------------------------указываем позицию для select
//Cоздаем список пользователей
select.innerHTML=`<option>User 01</option>
                  <option>User 02</option>
                  <option>User 03</option>
                  <option>User 04</option>
                  <option>User 05</option>`
//modalButtons                  
const modalButtons = createElement('footer',{classList:'modal__buttons'})//--------------------------создаем элемент footer
footer.insertAdjacentElement('beforeend',modalButtons)//---------------------------------------------указываем позицию для footer
//cancel
const cancel = createElement('button',{classList:'modal__cancel',textContent:'cancel'})//------------создаем элемент cancel
modalButtons.insertAdjacentElement('beforeend',cancel)//---------------------------------------------указываем позицию для cancel
//Навешиваем событие на cancel
function cancelModal(){
    modalWindow.classList.remove('modal__visible')
    bodyElement.classList.remove('lock')
}
cancel.addEventListener('click',cancelModal)
//confirm
const confirm = createElement('button',{classList:'modal__confirm',textContent:'confirm'})//---------создаем элемент confirm
modalButtons.insertAdjacentElement('beforeend',confirm)//--------------------------------------------указываем позицию для confirm




//Создаем окно-warning===================================================================================================
const warning = createElement('div',{classList:'warning'})
root.insertAdjacentElement('afterend',warning)
//warningBody
const warningBody = createElement('div',{classList:'warning__body'})
warning.insertAdjacentElement('beforeend',warningBody)
//warningTitle
const warningTitle = createElement('h2',{classList:'warning__title',textContent:'Warning! Нужно выполнить текущие дела, прежде чем добавлять новые.'})
warningBody.insertAdjacentElement('beforeend',warningTitle)
//warningButtons
const warningButtons=createElement('div',{classList:'warning__buttons'})
warningBody.insertAdjacentElement('beforeend',warningButtons)
//warningCancel
const warningCancel = createElement('button',{classList:'warning__cancel',textContent:'cancel'})
warningButtons.insertAdjacentElement('beforeend',warningCancel)
warningCancel.addEventListener('click', function(){warning.classList.remove('warning__visible')})
//warningConfirm
const warningConfirm = createElement('button',{classList:'warning__confirm',textContent:'confirm'})
warningButtons.insertAdjacentElement('beforeend',warningConfirm)
warningConfirm.addEventListener('click',()=>{addComponent(); warning.classList.remove('warning__visible')})