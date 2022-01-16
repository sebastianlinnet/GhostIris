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

// toggle div contacts
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