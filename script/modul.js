document.getElementById("open-modul-btn").addEventListener("click",function(){
    document.getElementById("my-modul").classList.add("open")
});

document.getElementById("close-my-modal-btn").addEventListener("click",function(){
    document.getElementById("my-modul").classList.remove("open")
});

window.addEventListener('keydown',(e)=>{
    if(e.key === "Escape"){
        document.getElementById('my-modul').classList.remove("open")
    }
});

document.querySelector("#my-modul .modul-box").addEventListener('click',event =>{
    event.isClickWithInModal = true;
});

document.getElementById("my-modul").addEventListener("click", event=>{
    if(event.isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});