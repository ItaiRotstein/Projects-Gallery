console.log('Starting up');

$(onInit)


function onInit() {
    renderProjects()
    renderModals()
    EventListeners()
}

function EventListeners() {
    $('.contact-btn').click(openCanvas)

    $('.portfolio-hover').click(removeCanvasBtn)
    $('.close-proj-btn').click(showCanvasBtn)
    $('.close-modal').click(showCanvasBtn)
}


function renderProjects() {
    var projects = getProjects()
    var strHTMLs = projects.map(project =>
        `<div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#${project.id}">
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

function renderModals() {
    var projects = getProjects()
    var strHTMLs = projects.map(project =>
        `<div class="portfolio-modal modal fade" id="${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>${project.name}</h2>
                    <p class="item-intro text-muted">${project.title}.</p>
                    <img class="img-fluid d-block mx-auto" src="${project.img}" alt="">
                    <p>${project.desc}</p>
                    <ul class="list-inline">
                      <li><a href="${project.url}">Project Link</a></li>
                      <li>Date: ${getFormattedTime(project.publishedAt)}</li>
                      <li>Client: ${project.client}</li>
                      <li>Category: ${project.category}</li>
                    </ul>
                    <button class="btn btn-primary close-proj-btn" data-dismiss="modal" type="button">
                      <i class="fa fa-times"></i>
                      Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
    )
    $('.modals').html(strHTMLs)
}

function removeCanvasBtn() {
    $('.offcanvas-btn').hide()
}
function showCanvasBtn() {
    $('.offcanvas-btn').show()
}