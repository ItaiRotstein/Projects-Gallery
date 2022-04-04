$(onInit)

function onInit() {
    renderProjects()
    EventListeners()
}

function EventListeners() {
    $('.contact-btn').click(openCanvas)
    $('.navbar-brand.js-scroll-trigger').click(openCanvas)

    $('.portfolio-hover').click(removeCanvasBtn)
    $('.close-proj-btn').click(showCanvasBtn)
    $('.close-modal').click(showCanvasBtn)

    $('.submit-email').click(onContactMe)
}


function renderProjects() {
    var projects = getProjects()
    var strHTMLs = projects.map(project =>
        `<div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" onclick="renderModal('${project.id}')" href="#portfolioModal">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid" src="${project.img}" alt="">
            </a>
            <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
            </div>
        </div>`
    )
    $('.projects-items').html(strHTMLs)
}

function renderModal(projId) {
    var project = getProjectById(projId)
    var strHTML =
        `<h2>${project.name}</h2>
    <p class="item-intro text-muted">${project.title}.</p>
    <img class="img-fluid d-block mx-auto" src="${project.img}" alt="">
    <p>${project.desc}</p>
    <ul class="list-inline">
        <li><a href="${project.url}" class="btn btn-primary">Project Link</a></li>
        <li>Date: ${getFormattedTime(project.publishedAt)}</li>
        <li>Client: ${project.client}</li>
        <li>Category: ${project.category}</li>
    </ul>
    <button class="btn btn-primary close-proj-btn" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close Project</button>`

    $('.modal-body').html(strHTML)
}

function onContactMe(ev) {
    ev.preventDefault()

    var elEmail = $('#email').val()
    var elSubject = $('#subject').val()
    var elMassage = $('#massage').val()

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=itai.rotstein@gmail.com&su=${elSubject}&body=${elMassage} ${elEmail}`)

    $('#email').val('')
    $('#subject').val('')
    $('#massage').val('')
}

function removeCanvasBtn() {
    $('.offcanvas-btn').hide()
}
function showCanvasBtn() {
    $('.offcanvas-btn').show()
}

