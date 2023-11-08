
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


// slide 1 recorrido

let counter = 1;

setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4) {
        counter = 1;
    }
}, 7000)


async function getData() {
    const res = await fetch ("https://console.cloudinary.com/pm/c-6383c532d2ab63fb4fc295f022e126/media-explorer/ACEU/Galeria");
    console.log(res);
}

getData();