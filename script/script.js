// fade effect
const faders = document.querySelectorAll('.fade-in');

const scroller = new IntersectionObserver( entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show', entry.isIntersecting)
            if (entry.isIntersecting) scroller.unobserve(entry.target)
        })
    },
    {
        threshold: 0.9
    }
)

faders.forEach(fade => {
    scroller.observe(fade);
})

// toggle socials
var divs = ["facebook", "instagram", "spotify"];
var visibleId = null;

function showSocial(id) {
    if(visibleId !== id) {
    visibleId = id;
    } 
    hideSocial();
}

function hideSocial() {
    var div;
    var id;

    for(i = 0; i < divs.length; i++) {
    id = divs[i];
    div = document.getElementById(id);

    if(visibleId == id) {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
    }
}

//fade socials
$(document).ready(function(){
$('#igClick').click(function(){
    $('#instagram').fadeOut(0);
});
$('#igClick').click(function(){
    $('#instagram').fadeIn();
});

$('#fbClick').click(function(){
    $('#facebook').fadeOut(0);
});
$('#fbClick').click(function(){
    $('#facebook').fadeIn();
});

$('#spotifyClick').click(function(){
    $('#spotify').fadeOut(0);
});
$('#spotifyClick').click(function(){
    $('#spotify').fadeIn();
});
});

