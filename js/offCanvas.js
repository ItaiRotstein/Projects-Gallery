function openCanvas(){
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');    
}

$('.contact-btn').click(openCanvas)

$('.portfolio-hover').click(removeCanvasBtn)
$('.close-proj-btn').click(showCanvasBtn)
$('.close-modal').click(showCanvasBtn)

function removeCanvasBtn() {
    $('.offcanvas-btn').hide()
}
function showCanvasBtn() {
    $('.offcanvas-btn').show()
}