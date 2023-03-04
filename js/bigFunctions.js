//Навешиваем событие на confirm
function addComponent(event){//Функция-добавляем компонент=====================================================================
    const component = createElement('article',{classList:'component'})//-----------------------------Создает компонент с классом компонент
    todoMain.insertAdjacentElement('afterbegin',component)//-----------------------------------------Указываем место для создания компонента
    modalWindow.classList.remove('modal__visible')//-------------------------------------------------Делает компонент видимым
    //componentHeader===================================================================================
    const componentHeader = createElement('header',{classList:'component__header'})
    component.insertAdjacentElement('beforeend',componentHeader)
    //componentTitle
    const componentTitle = createElement('h2',{classList:'component__title',textContent:modalTitle.value.length>0?modalTitle.value:'Title'})
    componentHeader.insertAdjacentElement('beforeend',componentTitle) 
    //componentButtons
    const componentButtons = createElement('div',{classList:'component__buttons'})
    componentHeader.insertAdjacentElement('beforeend',componentButtons)
    //componentEdit
    const componentEdit = createElement('div',{classList:'component__edit',textContent:'EDIT'})
    componentButtons.insertAdjacentElement('beforeend',componentEdit)
    componentEdit.addEventListener('click',editHelpModalWindow)//===============================
    //componentDelete 
    const componentDelete = createElement('div',{classList:'component__delete',textContent:'DELETE'})
    componentButtons.insertAdjacentElement('beforeend',componentDelete)
    //Навешиваем событие на delete
    function deleteComponent(event){
        event.target.closest('.component').remove()
        checkCountComponents()
    }
    componentDelete.addEventListener('click',deleteComponent)
    //componentMain=====================================================================================
    const componentMain = createElement('main',{classList:'component__main'})
    component.insertAdjacentElement('beforeend',componentMain) 
    //description
    const componentDescr = createElement('p',{classList:'component__descr',textContent:textArea.value.length>0?textArea.value:'Description'})
    componentMain.insertAdjacentElement('beforeend',componentDescr)
    //Arrow
    const arrow = createElement('div',{classList:'component__arrow'})
    componentMain.insertAdjacentElement('beforeend',arrow)
    function moveToProgress(event){
            progressMain.append(component)
            component.classList.add('component__progress')
            arrow.style.display = 'none'
            //Преобразуем кнопу EDIT в BACK
            componentEdit.textContent = 'BACK'
            componentEdit.removeEventListener('click',editHelpModalWindow)
            // Создаем функцию для переноса обратно в колонку в TODO
            function moveToTodo(event){
                todoMain.append(event.target.closest('.component'))
                componentEdit.addEventListener('click',editHelpModalWindow)
                componentDelete.addEventListener('click',deleteComponent)
                componentEdit.textContent = 'EDIT'
                componentDelete.textContent = 'DELETE'
                arrow.style.display = 'flex'
                component.classList.remove('component__progress')
                checkCountComponents()
            }
            componentEdit.addEventListener('click',moveToTodo)
            //Преобразуем delete в complite
            componentDelete.textContent = 'COMPLITE'
            componentDelete.removeEventListener('click',deleteComponent)
            //Создаем функцию для переноса в колонку DONE
            function moveToDone(event){
                doneMain.append(event.target.closest('.component')) 
                component.classList.add('component__done')
                componentDelete.removeEventListener('click',moveToDone)
                componentDelete.textContent = 'DELETE'
                componentDelete.addEventListener('click',deleteComponent)
                componentEdit.style.display = 'none'
                checkCountComponents()
            }
            componentDelete.addEventListener('click',moveToDone)
            checkCountComponents()
    }
    arrow.addEventListener('click',(event)=>{progressMain.children.length<6?moveToProgress():windowWarning(moveToProgress)})
    //arrowImg
    const arrowImg = createElement('img')
    arrowImg.setAttribute('src','./img/arrow.png')
    arrow.insertAdjacentElement('beforeend',arrowImg)
    //componentFooter===================================================================================
    const componentFooter = createElement('footer',{classList:'component__footer'})
    component.insertAdjacentElement('beforeend',componentFooter)
    //user
    const componentUser = createElement('p',{classList:'component__user',textContent:select.value})
    componentFooter.insertAdjacentElement('beforeend',componentUser)
    //Создаем время deadline
    const timeDeadLine = new Date()
    timeDeadLine.setDate(timeDeadLine.getDate()+7)// Уставнавливаем время выполнения для deadline,то есть 7 дней(неделя)
    const dayDeadLine = timeDeadLine.getDate()<10?'0'+timeDeadLine.getDate():timeDeadLine.getDate()
    const monthDeadLine = timeDeadLine.getMonth()+1<10?'0'+(timeDeadLine.getMonth()+1):timeDeadLine.getMonth()+1
    const yearDeadLine = timeDeadLine.getFullYear()<10?'0'+timeDeadLine.getFullYear():timeDeadLine.getFullYear()
    const componentTime = createElement('p',{classList:'component__time',textContent:`${dayDeadLine}.${monthDeadLine}.${yearDeadLine}`})
    componentFooter.insertAdjacentElement('beforeend',componentTime)
    //Создаем настоящее время и будем её сравнивать с deadline времени каждую секунду через интервал
    setInterval(()=>{
        const time = new Date()
        time.setDate(time.getDate()+1)//Добавляем день, чтоб было 6 дней свободного времени до красной тудушки.И когда остается один день,тудушка красная.
        if(time>=timeDeadLine){component.classList.add('component__deadline')}},1000)
    //Закончили set интервал
    bodyElement.classList.remove('lock')
}
confirm.addEventListener('click',()=>{addComponent();modalTitle.value='';textArea.value='';select.value='User 01';checkCountComponents()})

//Ф-ция которая создает окно для редактирования==========================================================================================================
function editHelpModalWindow(event){
    // modalWindow
    const modalWindowEdit = createElement('div',{classList:'modal modal__visible'})//-----------------------------------------------создаем элемент modalWindow
    root.insertAdjacentElement('afterend',modalWindowEdit)//---------------------------------------------------------указываем позицию для modalWindow
    //modalBody
    const modalBodyEdit = createElement('div',{classList:'modal__body'})//-------------------------------------------создаем элемент modalBody
    modalWindowEdit.insertAdjacentElement('afterbegin',modalBodyEdit)//--------------------------------------------------указываем позицию для modalBody
    //modalForm
    const modalFormEdit = createElement('div',{classList:'modal__form'})//-------------------------------------------создаем элемент modalForm
    modalBodyEdit.insertAdjacentElement('afterbegin',modalFormEdit)//----------------------------------------------------указываем позицию для modalForm
    //modalTitle
    const modalTitleEdit = createElement('input',{classList:'modal__title',placeholder:'Title'})//-------------------создаем элемент modalTitle
    modalFormEdit.insertAdjacentElement('beforeend',modalTitleEdit)//----------------------------------------------------указываем позицию для modalTitle
    //textarea
    const textAreaEdit = createElement('textarea',{classList:'modal__textarea',placeholder:'Descripion'})//----------создаем элемент textarea
    modalFormEdit.insertAdjacentElement('beforeend',textAreaEdit)//------------------------------------------------------указываем позицию для textarea
    //footer
    const footerEdit = createElement('footer',{classList:'modal__footer'})//---------------------------------------создаем элемент footer
    modalFormEdit.insertAdjacentElement('beforeend',footerEdit)//------------------------------------------------------указываем позицию для footer
    //select
    const selectEdit = createElement('select',{classList:'modal__select'})//---------------------------------------создаем элемент select
    footerEdit.insertAdjacentElement('beforeend',selectEdit)//------------------------------------------------------указываем позицию для select
    //Cоздаем список пользователей
    selectEdit.innerHTML=`<option>User 01</option>
                    <option>User 02</option>
                    <option>User 03</option>
                    <option>User 04</option>
                    <option>User 05</option>`
    //modalButtons                  
    const modalButtonsEdit = createElement('div',{classList:'modal__buttons'})//--------------------------создаем элемент footer
    footerEdit.insertAdjacentElement('beforeend',modalButtonsEdit)//---------------------------------------------указываем позицию для footer
    
    //cancel
    const cancelEdit = createElement('button',{classList:'modal__cancel',textContent:'cancel'})//------------создаем элемент cancel
    modalButtonsEdit.insertAdjacentElement('beforeend',cancelEdit)//---------------------------------------------указываем позицию для cancel
    //confirm
    const confirmEdit = createElement('button',{classList:'modal__confirm',textContent:'confirm'})//---------создаем элемент confirm
    modalButtonsEdit.insertAdjacentElement('beforeend',confirmEdit)//------------указываем позицию для confirm
    //Навешиваем событие на confirm
  
    function editComponent(){
        event.target.closest('.component__buttons').previousElementSibling.textContent = `${modalTitleEdit.value === ''?'Title':modalTitleEdit.value}`
        event.target.closest('.component__header').nextElementSibling.firstChild.textContent = `${textAreaEdit.value === ''?'Description':textAreaEdit.value}`
        event.target.closest('.component').lastChild.firstChild.textContent = `${selectEdit.value}`
        modalWindowEdit.remove()
        bodyElement.classList.remove('lock')
    }
    confirmEdit.addEventListener('click',editComponent)
    //Навешиваем событие на cancel
    function cancelModalEdit(){
        modalWindowEdit.remove()
        bodyElement.classList.remove('lock')
    }
    cancelEdit.addEventListener('click',cancelModalEdit)
    
}

function checkCountComponents(){
    let  childrenTodo = todoMain.getElementsByClassName('component')
    todoTopNumber.textContent = childrenTodo.length
    let  childrenProgress = progressMain.getElementsByClassName('component')
    progressTopNumber.textContent = childrenProgress.length
    let  childrenDone = doneMain.getElementsByClassName('component')
    doneTopNumber.textContent = childrenDone.length
}