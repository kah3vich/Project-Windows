let constructor = {
    1: {
        id: 1,
        leaf_1: 'Глухое',
        leaf_2: 'Глухое'
    },
    // 2: {
    //     id: 2,
    //     leaf_1: 'Глухое'
    // }
}

let ids = 1
let typeWindows = 1

let positionClient = 1
let leafs_1 = "Глухое"
let leafs_2 = "Глухое"

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


function checkedPositionClient(element) {
    let pos = element.id
    positionClient = pos.toString().slice(-1);
    console.log(positionClient)
}

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

function clearInfoList() {
    if ( typeWindows == 1) {
        $(`#indexConstructorListText_${positionClient}`).html(`Одностворчатое окно (Глухой), Даухкамерный стеклопакет, Алюминий, Кирпичный`)
    }
    if ( typeWindows == 2) {
        $(`#indexConstructorListText_${positionClient}`).html(`Двухстворчатое окно (Глухой, Глухой), Даухкамерный стеклопакет, Алюминий, Кирпичный`)
    }
}


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

    $('#indexConstructorSelectLeaf_1').html('Глухой')
    $('#indexConstructorSelectLeaf_2').html('Глухой')
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
            <div class="ind-constructor__block-list-items-copy">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="3.5" width="14" height="16" rx="2.5" stroke="#286CF0"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 14V3C18 1.34315 16.6569 0 15 0H6V1H15C16.1046 1 17 1.89543 17 3V14H18Z" fill="#286CF0"/>
                </svg>
            </div>
        `
        document.getElementById("indexConstructorList").appendChild(newElement);
        $(`#indexConstructorListElement_${ids}`).attr('onclick', 'checkedPositionClient(this)')
        // if(typeWindows == 1) {
        //     $(`#indexConstructorListText_${ids}`).html(`Одностворчатое окно (Глухое), Даухкамерный стеклопакет, Алюминий, Кирпичный`)
        // }
});


function indexConstructorRemoveElement(element) {
    let idElement = element.id
    console.log(idElement)
    let valueElement = $(`#${idElement}`).val()
    $(`#${valueElement}`).remove()

    setTimeout(function() {
        $(`#${$("#indexConstructorList li")[0].id}`).click()
        console.log(312312312312)
    }, 100)

}


function idElementListConstructor() {
    ids++
    if (ids == 1) {
        $('#indexConstructorBasketListButton_1').addClass('display-n')
    } else if (ids == 2) {
        $('#indexConstructorBasketListButton_1').removeClass('display-n')
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
    typeWindows = 1
    $('#leaf-2').addClass('display-n')
    $('.leaf-2-select-item').addClass('display-n')

    $('#indexConstructorSelectLeaf_1').html('Глухой')
    $('#indexConstructorSelectLeaf_2').html('Глухой')
    Leaf_1()
    Leaf_2()
    clearInfoList()
});
$('#indexConstructorWindowTabsElement-2').on('click', function() {
    $(this).addClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-1').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-3').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-4').removeClass('ind-constructor__block-window-tabs-items-active')
    typeWindows = 2
    $('#leaf-2').removeClass('display-n')
    $('.leaf-2-select-item').removeClass('display-n')
    
    $('#indexConstructorSelectLeaf_1').html('Глухой')
    $('#indexConstructorSelectLeaf_2').html('Глухой')
    Leaf_1()
    Leaf_2()
    clearInfoList()
});
$('#indexConstructorWindowTabsElement-3').on('click', function() {
    $(this).addClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-2').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-1').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-4').removeClass('ind-constructor__block-window-tabs-items-active')
    typeWindows = 3
});
$('#indexConstructorWindowTabsElement-4').on('click', function() {
    $(this).addClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-2').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-3').removeClass('ind-constructor__block-window-tabs-items-active')
    $('#indexConstructorWindowTabsElement-1').removeClass('ind-constructor__block-window-tabs-items-active')
    typeWindows = 4
});





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




