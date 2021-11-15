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
