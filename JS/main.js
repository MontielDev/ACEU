
// despliegue suave
$(document).ready(function(){
    let despliegue_a = $(".desplazar");

    despliegue_a.click(function(e){
        e.preventDefault();
        $("body, html").animate(
            {
                scrollTop: $(this.hash).offset().top,
            }, 1500
        );
    })
})


// slide 1 recorrido - seccion 2

let counter = 1;

setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4) {
        counter = 1;
    }
}, 7000)


//close-img - seccion 3

const fullImgBox = document.getElementById("fullImgBox");
fullImg = document.getElementById("fullImg");

function openFullImg(reference) {
    fullImgBox.style.display = "flex";
    fullImg.src = reference
}

function closeImg() {
    fullImgBox.style.display = "none";
}
