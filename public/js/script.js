let constructor = {
    1: {
        id: 1,
        leaf_1: 'Глухое'
    },
    2: {
        id: 2,
        leaf_1: 'Глухое'
    }
}

let ids = 1

let positionClient = 1
let leafs_1 = "Глухое"

// $('.ind-constructor').on('click', function() {
//     id = id + 1
//     let apple = {
//         id: id,
//         name: 'Apple'
//     }
//     constructor[id] = apple 
//     console.log(constructor)
// });

function Leaf_1() {
    setTimeout(() => {
        let leafs = $('.leaf-select-placeholder').html()
        checkDataInfoObject(positionClient, leafs)
    }, 0);
}

function checkDataInfoObject(ps, f_1) {
    console.log(ps, f_1)
    constructor[ps]['leaf_1'] = f_1
    console.log(constructor[ps])
    $(`#indexConstructorListText_${ps}`).html(`${f_1}`)
}

console.log(constructor)


$('#indexConstructorButtonAdd').on('click', function() {
    idElementListConstructor()
    let apple = {
        id: ids,
        name: 'Apple'
    }
    constructor[ids] = apple 
    console.log(constructor)




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
            <div class="ind-constructor__block-list-items-text">Одностворчатое окно (Глухое), Даухкамерный стеклопакет, Алюминий, Кирпичный  </div>
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
            <div class="ind-constructor__block-list-items-copy">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="3.5" width="14" height="16" rx="2.5" stroke="#286CF0"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 14V3C18 1.34315 16.6569 0 15 0H6V1H15C16.1046 1 17 1.89543 17 3V14H18Z" fill="#286CF0"/>
                </svg>
            </div>
        `
        document.getElementById("indexConstructorList").appendChild(newElement);
});


function indexConstructorRemoveElement(element) {
    let idElement = element.id
    console.log(idElement)
    let valueElement = $(`#${idElement}`).val()
    $(`#${valueElement}`).remove()
}


function idElementListConstructor() {
    ids = ids + 1
    if (ids == 1) {
        $('#indexConstructorBasketListButton').addClass('display-n')
    } else if (ids == 2) {
        $('#indexConstructorBasketListButton').removeClass('display-n')
    }
}











$('#indexConstructorTabsElement-1').on('click', function() {
    $(this).addClass('ind-constructor__block-tabs-items-active')
    $('#indexConstructorTabsElement-2').removeClass('ind-constructor__block-tabs-items-active')
});
$('#indexConstructorTabsElement-2').on('click', function() {
    $(this).addClass('ind-constructor__block-tabs-items-active')
    $('#indexConstructorTabsElement-1').removeClass('ind-constructor__block-tabs-items-active')
});


$('#indexConstructorWindowTabsElement-1').on('click', function() {
    $(this).addClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-2').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-3').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-4').removeClass('ind-constructor__block-window-tabs-items-active')
});
$('#indexConstructorWindowTabsElement-2').on('click', function() {
    $(this).addClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-1').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-3').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-4').removeClass('ind-constructor__block-window-tabs-items-active')
});
$('#indexConstructorWindowTabsElement-3').on('click', function() {
    $(this).addClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-2').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-1').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-4').removeClass('ind-constructor__block-window-tabs-items-active')
});
$('#indexConstructorWindowTabsElement-4').on('click', function() {
    $(this).addClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-2').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-3').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-1').removeClass('ind-constructor__block-window-tabs-items-active')
});



$(function() {
    $('#leaf-1').css('display', 'none')
    $('#leaf-1').after('<div class="leaf-select-item"><div class="leaf-select-placeholder">Глухое</div><div id="leafSelectElement" class="leaf-select-wrapper display-n"></div></div>')
    let count = $('#leaf-1').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#leaf-1').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("leaf-select-element")
        newElementBlock.id = `leaf-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("leafSelectElement").appendChild(newElementBlock);
        $(`#leaf-select-element-${i}`).attr('value', `${arrows}`)
        $(`#leaf-select-element-${i}`).attr('onclick', 'Leaf_1()')
    }
    $('#leaf-select-element-0').css('display', 'none')
    $('.leaf-select-item').on('click', function() {
        $('.leaf-select-wrapper').toggleClass('display-n')
        $(this).toggleClass('leaf-select-item-active')
        
    })
    $(".leaf-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.leaf-select-placeholder').html(valueElement)
        $('#leaf-1 option:nth-child(1)').val(valueElement)
        $('#leaf-1 option:nth-child(1)').html(valueElement)
    })
})



$(function() {
    $('#city').css('display', 'none')
    $('#city').after('<div class="select-item"><div class="select-placeholder">Москва</div><div id="listConstructorElementPay" class="select-wrapper display-n"></div></div>')
    let count = $('#city').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#city').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("select-element")
        newElementBlock.id = `select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
        $(`#select-element-${i}`).attr('value', `${arrows}`)
    }
    $('#select-element-0').css('display', 'none')
    $('.select-item').on('click', function() {
        $('.select-wrapper').toggleClass('display-n')
        $(this).toggleClass('select-item-active')
    })
    $(".select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.select-placeholder').html(valueElement)
        $('#city option:nth-child(1)').val(valueElement)
        $('#city option:nth-child(1)').html(valueElement)
    })
})
