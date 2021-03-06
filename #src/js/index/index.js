//! Стартовый объект

let constructor = {
    1: {
        id: 1,
        leaf_1: 'Глухое',
        leaf_2: 'Глухое'
    },
}

//! Стили для активированного элемента списка 

// $('#indexConstructorListElement_1').css('background', 'gray')

//! Айди для элементов списка 

let ids = 1

//! Айди для типов окон

let typeWindows = 1

//! Позиция пользователя на активном элементе списка 

let positionClient = 1

//! Стартовые значения 

let leafs_1 = "Глухое"
let leafs_2 = "Глухое"


//! Функции передающие значения из выпадающего списка в функцию

function Leaf_1() {
    setTimeout(() => {
        leafs_1 = $('#indexConstructorSelectLeaf_1').html()
        leafs_2 = $('#indexConstructorSelectLeaf_2').html()
        checkDataInfoObject(positionClient, leafs_1, leafs_2)
    }, 0);
}
function Leaf_2() {
    setTimeout(() => {
        leafs_1 = $('#indexConstructorSelectLeaf_1').html()
        leafs_2 = $('#indexConstructorSelectLeaf_2').html()
        checkDataInfoObject(positionClient, leafs_1, leafs_2)
    }, 0);
}

//! Функция для переключение активного элемента в списке + передающая данные из элемента в конструктор 

function checkedPositionClient(element) {
    let pos = element.id
    if (pos.length == 29) {
        positionClient = pos.toString().slice(-1);
    } else if (pos.length == 30) {
        positionClient = pos.toString().slice(-2);
    } else if (pos.length == 31) {
        positionClient = pos.toString().slice(-3);
    } else if (pos.length == 32) {
        positionClient = pos.toString().slice(-4);
    }
    console.log(positionClient)

    $('.ind-constructor__block-list-items').css('background', '#fff')
    $(`#indexConstructorListElement_${positionClient}`).css('background', 'gray')

    let checkedTypeWindows = $(`#indexConstructorListText_${positionClient}`).html().split(' ')[0]
    if ( checkedTypeWindows == 'Одностворчатое' ) {
        $('#indexConstructorWindowTabsElement-1').addClass('ind-constructor__block-window-tabs-items-active')
        $('#indexConstructorWindowTabsElement-2').removeClass('ind-constructor__block-window-tabs-items-active')
        $('#indexConstructorWindowTabsElement-3').removeClass('ind-constructor__block-window-tabs-items-active')
        $('#indexConstructorWindowTabsElement-4').removeClass('ind-constructor__block-window-tabs-items-active')
        $('#leaf-2').addClass('display-n')
        $('.leaf-2-select-item').addClass('display-n')
        let checkedTypeWindowsCount_1 = $(`#indexConstructorListText_${positionClient}`).html().split(' ')[2]
        if ( checkedTypeWindowsCount_1 == '(Глухое),') {
            $('#indexConstructorSelectLeaf_1').html('Глухое')
        } else if ( checkedTypeWindowsCount_1 == '(Поворотное),') {
            $('#indexConstructorSelectLeaf_1').html('Поворотное')
        } else if ( checkedTypeWindowsCount_1 == '(Откидное),') {
            $('#indexConstructorSelectLeaf_1').html('Откидное')
        } else if ( checkedTypeWindowsCount_1 == '(Поворотно-откидное),') {
            $('#indexConstructorSelectLeaf_1').html('Поворотно-откидное')
        }

    } else if ( checkedTypeWindows == 'Двухстворчатое' ) {
        $('#indexConstructorWindowTabsElement-2').addClass('ind-constructor__block-window-tabs-items-active')
        $('#indexConstructorWindowTabsElement-1').removeClass('ind-constructor__block-window-tabs-items-active')
        $('#indexConstructorWindowTabsElement-3').removeClass('ind-constructor__block-window-tabs-items-active')
        $('#indexConstructorWindowTabsElement-4').removeClass('ind-constructor__block-window-tabs-items-active')
        $('#leaf-2').removeClass('display-n')
        $('.leaf-2-select-item').removeClass('display-n')
        let checkedTypeWindowsCount_2_1 = $(`#indexConstructorListText_${positionClient}`).html().split(' ')[2]
        let checkedTypeWindowsCount_2_2 = $(`#indexConstructorListText_${positionClient}`).html().split(' ')[3]
        if ( checkedTypeWindowsCount_2_1 == '(Глухое,' && checkedTypeWindowsCount_2_2 == 'Глухое),' ) {
            $('#indexConstructorSelectLeaf_1').html('Глухое')
            $('#indexConstructorSelectLeaf_2').html('Глухое')
        } else if ( checkedTypeWindowsCount_2_1 == '(Глухое,' && checkedTypeWindowsCount_2_2 == 'Поворотное),' ) {
            $('#indexConstructorSelectLeaf_1').html('Глухое')
            $('#indexConstructorSelectLeaf_2').html('Поворотное')
        } else if ( checkedTypeWindowsCount_2_1 == '(Глухое,' && checkedTypeWindowsCount_2_2 == 'Откидное),' ) {
            $('#indexConstructorSelectLeaf_1').html('Глухое')
            $('#indexConstructorSelectLeaf_2').html('Откидное')
        } else if ( checkedTypeWindowsCount_2_1 == '(Глухое,' && checkedTypeWindowsCount_2_2 == 'Поворотно-откидное),' ) {
            $('#indexConstructorSelectLeaf_1').html('Глухое')
            $('#indexConstructorSelectLeaf_2').html('Поворотно-откидное')
        }

        if ( checkedTypeWindowsCount_2_1 == '(Поворотное,' && checkedTypeWindowsCount_2_2 == 'Глухое),' ) {
            $('#indexConstructorSelectLeaf_1').html('Поворотное')
            $('#indexConstructorSelectLeaf_2').html('Глухое')
        } else if ( checkedTypeWindowsCount_2_1 == '(Поворотное,' && checkedTypeWindowsCount_2_2 == 'Поворотное),' ) {
            $('#indexConstructorSelectLeaf_1').html('Поворотное')
            $('#indexConstructorSelectLeaf_2').html('Поворотное')
        } else if ( checkedTypeWindowsCount_2_1 == '(Поворотное,' && checkedTypeWindowsCount_2_2 == 'Откидное),' ) {
            $('#indexConstructorSelectLeaf_1').html('Поворотное')
            $('#indexConstructorSelectLeaf_2').html('Откидное')
        } else if ( checkedTypeWindowsCount_2_1 == '(Поворотное,' && checkedTypeWindowsCount_2_2 == 'Поворотно-откидное),' ) {
            $('#indexConstructorSelectLeaf_1').html('Поворотное')
            $('#indexConstructorSelectLeaf_2').html('Поворотно-откидное')
        }

        if ( checkedTypeWindowsCount_2_1 == '(Откидное,' && checkedTypeWindowsCount_2_2 == 'Глухое),' ) {
            $('#indexConstructorSelectLeaf_1').html('Откидное')
            $('#indexConstructorSelectLeaf_2').html('Глухое')
        } else if ( checkedTypeWindowsCount_2_1 == '(Откидное,' && checkedTypeWindowsCount_2_2 == 'Поворотное),' ) {
            $('#indexConstructorSelectLeaf_1').html('Откидное')
            $('#indexConstructorSelectLeaf_2').html('Поворотное')
        } else if ( checkedTypeWindowsCount_2_1 == '(Откидное,' && checkedTypeWindowsCount_2_2 == 'Откидное),' ) {
            $('#indexConstructorSelectLeaf_1').html('Откидное')
            $('#indexConstructorSelectLeaf_2').html('Откидное')
        } else if ( checkedTypeWindowsCount_2_1 == '(Откидное,' && checkedTypeWindowsCount_2_2 == 'Поворотно-откидное),' ) {
            $('#indexConstructorSelectLeaf_1').html('Откидное')
            $('#indexConstructorSelectLeaf_2').html('Поворотно-откидное')
        }

        if ( checkedTypeWindowsCount_2_1 == '(Поворотно-откидное,' && checkedTypeWindowsCount_2_2 == 'Глухое),' ) {
            $('#indexConstructorSelectLeaf_1').html('Поворотно-откидное')
            $('#indexConstructorSelectLeaf_2').html('Глухое')
        } else if ( checkedTypeWindowsCount_2_1 == '(Поворотно-откидное,' && checkedTypeWindowsCount_2_2 == 'Поворотное),' ) {
            $('#indexConstructorSelectLeaf_1').html('Поворотно-откидное')
            $('#indexConstructorSelectLeaf_2').html('Поворотное')
        } else if ( checkedTypeWindowsCount_2_1 == '(Поворотно-откидное,' && checkedTypeWindowsCount_2_2 == 'Откидное),' ) {
            $('#indexConstructorSelectLeaf_1').html('Поворотно-откидное')
            $('#indexConstructorSelectLeaf_2').html('Откидное')
        } else if ( checkedTypeWindowsCount_2_1 == '(Поворотно-откидное,' && checkedTypeWindowsCount_2_2 == 'Поворотно-откидное),' ) {
            $('#indexConstructorSelectLeaf_1').html('Поворотно-откидное')
            $('#indexConstructorSelectLeaf_2').html('Поворотно-откидное')
        }
    }
}

//! Айди для копированых элементов 

let countCopy = -1

//! Дополнительное число для айди копированных элементов 

let countCopyElement = 1000

//! Функция копирующая элемент с его параметрами 

function copyElementList(element) {
    let idElement = element.id
    let valueElement = document.getElementById(`${idElement}`).value
    let numberElement
    if (valueElement.length == 29) {
        numberElement = Number(valueElement.toString().slice(-1));
    } else if (valueElement.length == 30) {
        numberElement = Number(valueElement.toString().slice(-2));
    } else if (valueElement.length == 31) {
        numberElement = Number(valueElement.toString().slice(-3));
    } else if (valueElement.length == 32) {
        numberElement = Number(valueElement.toString().slice(-4));
    }
    let newObj = {}
    newObj = constructor[numberElement]
    constructor[numberElement + 1000 + countCopy] = {
        id: numberElement + 1000 + countCopy,
        leaf_1: newObj['leaf_1'],
        leaf_2: newObj['leaf_2']
    } 

    let typeWindowCopy = $(`#indexConstructorListText_${numberElement}`).text();
    if ( typeWindowCopy.split(' ')[0] == 'Одностворчатое' ) {
        typeWindows = 1
    } else if ( typeWindowCopy.split(' ')[0] == 'Двухстворчатое' ) {
        typeWindows = 2
    }



    console.log(constructor)

    newObj = {}

    positionClient++

    $('#indexConstructorWindowTabsElement-1').addClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-2').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-3').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-4').removeClass('ind-constructor__block-window-tabs-items-active')

    let newElement = document.createElement("li");
        newElement.classList.add("ind-constructor__block-list-items")
        newElement.id = `indexConstructorListElement_${numberElement + 1000 + countCopy}`;
        newElement.innerHTML = `
        <div class="ind-constructor__block-list-items-count"></div>
            <div class="ind-constructor__block-list-items-type"> 
                <div class="ind-constructor__block-list-items-type-icons">
                    <svg width="24" height="33" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="22" height="31" stroke="#286CF0" stroke-width="2"/>
                    </svg>
                </div>
                <div class="ind-constructor__block-list-items-type-text"> 
                    <div class="ind-constructor__block-list-items-type-text-title">Створка</div>
                    <div class="ind-constructor__block-list-items-type-text-size">1600*1469 мм</div>
                </div>
            </div>
            <div class="ind-constructor__block-list-items-text" id="indexConstructorListText_${numberElement + 1000 + countCopy}">Одностворчатое окно (Глухое), Даухкамерный стеклопакет, Алюминий, Кирпичный  </div>
            <button class="ind-constructor__block-list-items-basket" id="indexConstructorBasketListButton_${numberElement + 1000 + countCopy}" value="indexConstructorListElement_${numberElement + 1000 + countCopy}" onclick="indexConstructorRemoveElement(this)">
                <svg xmlns="http://www.w3.org/2000/svg" width="18.952" height="23.204" viewBox="0 0 18.952 23.204">
                    <g id="trash" transform="translate(0 0)">
                        <path id="Path_613" data-name="Path 613" d="M18.893,5.186,18.38,3.65a1.429,1.429,0,0,0-1.357-.978H12.717v-1.4A1.272,1.272,0,0,0,11.447,0H7.5a1.272,1.272,0,0,0-1.27,1.271v1.4H1.928A1.429,1.429,0,0,0,.571,3.65L.058,5.186A1.15,1.15,0,0,0,1.149,6.7h.536L2.863,21.275A2.109,2.109,0,0,0,4.953,23.2h9.285a2.109,2.109,0,0,0,2.09-1.929L17.506,6.7h.3a1.15,1.15,0,0,0,1.091-1.513ZM7.593,1.359h3.764V2.672H7.593Zm7.378,19.806a.741.741,0,0,1-.734.679H4.953a.741.741,0,0,1-.734-.679L3.049,6.7H16.142ZM1.441,5.34l.42-1.259a.071.071,0,0,1,.067-.049h15.1a.071.071,0,0,1,.067.049l.42,1.259Zm0,0" transform="translate(0)" fill="#286CF0"/>
                        <path id="Path_614" data-name="Path 614" d="M268.941,179.19h.036a.68.68,0,0,0,.678-.644l.638-12.255a.68.68,0,1,0-1.358-.071l-.638,12.255A.68.68,0,0,0,268.941,179.19Zm0,0" transform="translate(-256.137 -158.073)" fill="#286CF0"/>
                        <path id="Path_615" data-name="Path 615" d="M106.463,178.551a.68.68,0,0,0,.678.643h.038a.68.68,0,0,0,.642-.716l-.669-12.255a.68.68,0,0,0-1.358.074Zm0,0" transform="translate(-100.999 -158.075)" fill="#286CF0"/>
                        <path id="Path_616" data-name="Path 616" d="M194.934,179.193a.68.68,0,0,0,.68-.68V166.259a.68.68,0,0,0-1.36,0v12.255A.68.68,0,0,0,194.934,179.193Zm0,0" transform="translate(-185.451 -158.075)" fill="#286CF0"/>
                    </g>
                </svg>
            </button>
            <button class="ind-constructor__block-list-items-copy" id="indexConstructorCopyItems_${numberElement + 1000 + countCopy}" value="indexConstructorListElement_${numberElement + 1000 + countCopy}" onclick="copyElementList(this)">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="3.5" width="14" height="16" rx="2.5" stroke="#286CF0"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 14V3C18 1.34315 16.6569 0 15 0H6V1H15C16.1046 1 17 1.89543 17 3V14H18Z" fill="#286CF0"/>
                </svg>
            </button>
        `
        document.getElementById("indexConstructorList").appendChild(newElement);
        $(`#indexConstructorListElement_${numberElement + 1000 + countCopy}`).attr('onclick', 'checkedPositionClient(this)')


        setTimeout(function() {
            $(`#indexConstructorListElement_${numberElement + countCopyElement + countCopy}`).click()
        }, 1)

        countCopyElement = countCopyElement + countCopyElement

        checkDataInfoObject(numberElement + 1000 + countCopy, constructor[numberElement + 1000 + countCopy]['leaf_1'], constructor[numberElement + 1000 + countCopy]['leaf_2'])
        countCopy++
        checkedCountItems()
}

//! Функция передающие параметры из конструктора в элемент списка 

function checkDataInfoObject(ps, f_1, f_2) {
    console.log(ps, f_1, f_2)
    constructor[ps]['leaf_1'] = f_1
    constructor[ps]['leaf_2'] = f_2
    if (typeWindows == 1) {
        $(`#indexConstructorListText_${ps}`).html(`Одностворчатое окно (${f_1}), Даухкамерный стеклопакет, Алюминий, Кирпичный`)
    }
    if (typeWindows == 2) {
        $(`#indexConstructorListText_${ps}`).html(`Двухстворчатое окно (${f_1}, ${f_2}), Даухкамерный стеклопакет, Алюминий, Кирпичный`)
    }
}

console.log(constructor)

//! Функция для очистки конструктора при переключение типов окон

function clearInfoList() {
    if ( typeWindows == 1) {
        $(`#indexConstructorListText_${positionClient}`).html(`Одностворчатое окно (Глухое), Даухкамерный стеклопакет, Алюминий, Кирпичный`)
    }
    if ( typeWindows == 2) {
        $(`#indexConstructorListText_${positionClient}`).html(`Двухстворчатое окно (Глухое, Глухое), Даухкамерный стеклопакет, Алюминий, Кирпичный`)
    }
}

//! Добавление нового элемента 

$('#indexConstructorButtonAdd').on('click', function() {
    idElementListConstructor()
    constructor[ids] = {
        id: ids,
        leaf_1: "Глухое"
    } 
    console.log(constructor)

    positionClient++

    $('#indexConstructorWindowTabsElement-1').addClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-2').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-3').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-4').removeClass('ind-constructor__block-window-tabs-items-active')

    typeWindows = 1
    clearInfoList()
    $('#leaf-2').addClass('display-n')
    $('.leaf-2-select-item').addClass('display-n')

    $('#indexConstructorSelectLeaf_1').html('Глухое')
    $('#indexConstructorSelectLeaf_2').html('Глухое')
    Leaf_1()
    Leaf_2()


    let newElement = document.createElement("li");
        newElement.classList.add("ind-constructor__block-list-items")
        newElement.id = `indexConstructorListElement_${ids}`;
        newElement.innerHTML = `
        <div class="ind-constructor__block-list-items-count"></div>
            <div class="ind-constructor__block-list-items-type"> 
                <div class="ind-constructor__block-list-items-type-icons">
                    <svg width="24" height="33" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="22" height="31" stroke="#286CF0" stroke-width="2"/>
                    </svg>
                </div>
                <div class="ind-constructor__block-list-items-type-text"> 
                    <div class="ind-constructor__block-list-items-type-text-title">Створка</div>
                    <div class="ind-constructor__block-list-items-type-text-size">1600*1469 мм</div>
                </div>
            </div>
            <div class="ind-constructor__block-list-items-text" id="indexConstructorListText_${ids}">Одностворчатое окно (Глухое), Даухкамерный стеклопакет, Алюминий, Кирпичный  </div>
            <button class="ind-constructor__block-list-items-basket" id="indexConstructorBasketListButton_${ids}" value="indexConstructorListElement_${ids}" onclick="indexConstructorRemoveElement(this)">
                <svg xmlns="http://www.w3.org/2000/svg" width="18.952" height="23.204" viewBox="0 0 18.952 23.204">
                    <g id="trash" transform="translate(0 0)">
                        <path id="Path_613" data-name="Path 613" d="M18.893,5.186,18.38,3.65a1.429,1.429,0,0,0-1.357-.978H12.717v-1.4A1.272,1.272,0,0,0,11.447,0H7.5a1.272,1.272,0,0,0-1.27,1.271v1.4H1.928A1.429,1.429,0,0,0,.571,3.65L.058,5.186A1.15,1.15,0,0,0,1.149,6.7h.536L2.863,21.275A2.109,2.109,0,0,0,4.953,23.2h9.285a2.109,2.109,0,0,0,2.09-1.929L17.506,6.7h.3a1.15,1.15,0,0,0,1.091-1.513ZM7.593,1.359h3.764V2.672H7.593Zm7.378,19.806a.741.741,0,0,1-.734.679H4.953a.741.741,0,0,1-.734-.679L3.049,6.7H16.142ZM1.441,5.34l.42-1.259a.071.071,0,0,1,.067-.049h15.1a.071.071,0,0,1,.067.049l.42,1.259Zm0,0" transform="translate(0)" fill="#286CF0"/>
                        <path id="Path_614" data-name="Path 614" d="M268.941,179.19h.036a.68.68,0,0,0,.678-.644l.638-12.255a.68.68,0,1,0-1.358-.071l-.638,12.255A.68.68,0,0,0,268.941,179.19Zm0,0" transform="translate(-256.137 -158.073)" fill="#286CF0"/>
                        <path id="Path_615" data-name="Path 615" d="M106.463,178.551a.68.68,0,0,0,.678.643h.038a.68.68,0,0,0,.642-.716l-.669-12.255a.68.68,0,0,0-1.358.074Zm0,0" transform="translate(-100.999 -158.075)" fill="#286CF0"/>
                        <path id="Path_616" data-name="Path 616" d="M194.934,179.193a.68.68,0,0,0,.68-.68V166.259a.68.68,0,0,0-1.36,0v12.255A.68.68,0,0,0,194.934,179.193Zm0,0" transform="translate(-185.451 -158.075)" fill="#286CF0"/>
                    </g>
                </svg>
            </button>
            <button class="ind-constructor__block-list-items-copy" id="indexConstructorCopyItems_${ids}" value="indexConstructorListElement_${ids}" onclick="copyElementList(this)">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="3.5" width="14" height="16" rx="2.5" stroke="#286CF0"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 14V3C18 1.34315 16.6569 0 15 0H6V1H15C16.1046 1 17 1.89543 17 3V14H18Z" fill="#286CF0"/>
                </svg>
            </button>
        `
        document.getElementById("indexConstructorList").appendChild(newElement);
        $(`#indexConstructorListElement_${ids}`).attr('onclick', 'checkedPositionClient(this)')
        // if(typeWindows == 1) {
        //     $(`#indexConstructorListText_${ids}`).html(`Одностворчатое окно (Глухое), Даухкамерный стеклопакет, Алюминий, Кирпичный`)
        // }

        $('.ind-constructor__block-list-items').css('background', '#fff')
        $(`#indexConstructorListElement_${ids}`).css('background', 'gray')

        setTimeout(function() {
            $(`#indexConstructorListElement_${ids}`).click()
        }, 0)
        checkedCountItems()
});

//! Удаление элемента 

function indexConstructorRemoveElement(element) {
    let idElement = element.id
    console.log(idElement)
    let valueElement = $(`#${idElement}`).val()
    $(`#${valueElement}`).remove()

    setTimeout(function() {
        $(`#${$("#indexConstructorList li")[0].id}`).click()
        console.log($("#indexConstructorList li")[0].id + 'fff')
    }, 100)
    checkedCountItems()
}

//! Функция для счетчика айди элементов 

function idElementListConstructor() {
    ids++
}

//! Функция для проверки количество элементов в списке -> блокировка кнопки удаления ( если элементов = 1 )

function checkedCountItems() {
    let countList = document.getElementById('indexConstructorList').getElementsByTagName('li').length
    if ( countList == 1) {
        $(".ind-constructor__block-list-items-basket").attr('disabled', 'disabled')
    } else {
        $(".ind-constructor__block-list-items-basket").removeAttr('disabled')
        $('#indexConstructorListElement_1').removeAttr('disabled')
    }
}

checkedCountItems()









//! Вкладки - окна и балконы 

$('#indexConstructorTabsElement-1').on('click', function() {
    $(this).addClass('ind-constructor__block-tabs-items-active')
    $('#indexConstructorTabsElement-2').removeClass('ind-constructor__block-tabs-items-active')
});
$('#indexConstructorTabsElement-2').on('click', function() {
    $(this).addClass('ind-constructor__block-tabs-items-active')
    $('#indexConstructorTabsElement-1').removeClass('ind-constructor__block-tabs-items-active')
});

//! Типы окон от 1 до 4 

$('#indexConstructorWindowTabsElement-1').on('click', function() {
    $(this).addClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-2').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-3').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-4').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-5').removeClass('ind-constructor__block-window-tabs-items-active')
    typeWindows = 1
    $('#leaf-2').addClass('display-n')
    $('.leaf-2-select-item').addClass('display-n')

    $('#indexConstructorSelectLeaf_1').html('Глухое')
    $('#indexConstructorSelectLeaf_2').html('Глухое')
    Leaf_1()
    Leaf_2()
    clearInfoList()
});
$('#indexConstructorWindowTabsElement-2').on('click', function() {
    $(this).addClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-1').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-3').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-4').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-5').removeClass('ind-constructor__block-window-tabs-items-active')
    typeWindows = 2
    $('#leaf-2').removeClass('display-n')
    $('.leaf-2-select-item').removeClass('display-n')
    
    $('#indexConstructorSelectLeaf_1').html('Глухое')
    $('#indexConstructorSelectLeaf_2').html('Глухое')
    Leaf_1()
    Leaf_2()
    clearInfoList()
});
$('#indexConstructorWindowTabsElement-3').on('click', function() {
    $(this).addClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-2').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-1').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-4').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-5').removeClass('ind-constructor__block-window-tabs-items-active')
    typeWindows = 3
});
$('#indexConstructorWindowTabsElement-4').on('click', function() {
    $(this).addClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-2').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-3').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-1').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-5').removeClass('ind-constructor__block-window-tabs-items-active')
    typeWindows = 4
});
$('#indexConstructorWindowTabsElement-5').on('click', function() {
    $(this).addClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-2').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-3').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-1').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-4').removeClass('ind-constructor__block-window-tabs-items-active')
    typeWindows = 4
});



//! Выпадающий список 1 тип окна 

$(function() {
    $('#leaf-1').css('display', 'none')
    $('#leaf-1').after('<div class="leaf-1-select-item"><div class="leaf-1-select-placeholder" id="indexConstructorSelectLeaf_1">Глухое</div><div id="leafSelectElement_1" class="leaf-1-select-wrapper display-n"></div></div>')
    let count = $('#leaf-1').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#leaf-1').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("leaf-1-select-element")
        newElementBlock.id = `leaf-1-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("leafSelectElement_1").appendChild(newElementBlock);
        $(`#leaf-1-select-element-${i}`).attr('value', `${arrows}`)
        $(`#leaf-1-select-element-${i}`).attr('onclick', 'Leaf_1()')
    }
    $('#leaf-1-select-element-0').css('display', 'none')
    $('.leaf-1-select-item').on('click', function() {
        $('.leaf-1-select-wrapper').toggleClass('display-n')
        $(this).toggleClass('leaf-1-select-item-active')
        
    })
    $(".leaf-1-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.leaf-1-select-placeholder').html(valueElement)
        $('#leaf-1 option:nth-child(1)').val(valueElement)
        $('#leaf-1 option:nth-child(1)').html(valueElement)
    })
})

//! Выпадающий список 2 тип окна 

$(function() {
    $('#leaf-2').css('display', 'none')
    $('#leaf-2').after('<div class="leaf-2-select-item display-n"><div class="leaf-2-select-placeholder" id="indexConstructorSelectLeaf_2">Глухое</div><div id="leafSelectElement_2" class="leaf-2-select-wrapper display-n"></div></div>')
    let count = $('#leaf-2').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#leaf-2').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("leaf-2-select-element")
        newElementBlock.id = `leaf-2-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("leafSelectElement_2").appendChild(newElementBlock);
        $(`#leaf-2-select-element-${i}`).attr('value', `${arrows}`)
        $(`#leaf-2-select-element-${i}`).attr('onclick', 'Leaf_2()')
    }
    $('#leaf-2-select-element-0').css('display', 'none')
    $('.leaf-2-select-item').on('click', function() {
        $('.leaf-2-select-wrapper').toggleClass('display-n')
        $(this).toggleClass('leaf-2-select-item-active')
        
    })
    $(".leaf-2-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.leaf-2-select-placeholder').html(valueElement)
        $('#leaf-2 option:nth-child(1)').val(valueElement)
        $('#leaf-2 option:nth-child(1)').html(valueElement)
    })
})






sizeWidth.oninput = function() {
    if ( sizeWidth.value.replace(/[A-Za-zА-Яа-яЁё]/, '') == '' ) {
        widthConst.innerHTML == '1';
    } else {
        widthConst.innerHTML = sizeWidth.value.replace(/[A-Za-zА-Яа-яЁё]/, '');
    }
};
sizeHeight.oninput = function() {
    if ( sizeHeight.value.replace(/[A-Za-zА-Яа-яЁё]/, '') == '' ) {
        heightConst.innerHTML == '1';
    } else {
        heightConst.innerHTML = sizeHeight.value.replace(/[A-Za-zА-Яа-яЁё]/, '');
    }
};


$('#sizeWidth').on('input', function() {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});
$('#sizeHeight').on('input', function() {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});




var indexServicesSlider = new Swiper(".indexServicesSlider", {
    cssMode: true,
    navigation: {
        nextEl: ".ind-services__list .swiper-controls .swiper-button-next",
        prevEl: ".ind-services__list .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".ind-services__list .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        1370: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        950: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    }
});

var indexTimeSlider = new Swiper(".indexTimeSlider", {
    cssMode: true,
    navigation: {
        nextEl: ".ind-time__catalog-list .swiper-controls .swiper-button-next",
        prevEl: ".ind-time__catalog-list .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".ind-time__catalog-list .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        1250: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        1000: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        750: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    }
});