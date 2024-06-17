function toggleSidebar(){
    var sidebar = document.getElementById("sidebar")
    if(sidebar.style.left === "0px"){
        sidebar.style.left="-250px";
    }else{
        sidebar.style.left = "0"
    }
}

function closeSidebar(){
    var sidebar = document.getElementById("sidebar")
    sidebar.style.left= "-250px"
}

document.addEventListener("DOMContentLoaded", function(){
    const fadeElements = document.querySelectorAll('.fade');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');

//Toggle

setInterval(() =>{
    if
        (el.classList.contains('fade-in')) {
    
            el.classList.remove('fade-in');
            el.classList.add('fade-out');
        }else{
            el.classList.remove('fade-out');
            el.classList.add('fade-in');
        }
    }, 2500);
    
    });
});

document.addEventListener('DOMContentLoaded', ()=> {
    const words = ['DISRUPTOR PRODUCTION' , ' PROMOTION ' , ' BRANDING ', ' MARKETING'];
    let index=0;
    const changingText = document.getElementById('changing-text');
    function changeWord(){
        changingText.textContent = words[index];
        index = (index + 1)% words.length;
    }
    setInterval(changeWord,2500);
});

document.addEventListener('DOMContentLoaded', () => {
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('click', () =>{
            item.classList.toggle('clicked')
        });
    });
});

document.getElementById('bookingForm').addEventListener('submit',function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    document.getElementById('confirmation').classList.remove('hidden');
    document.getElementById('confirmName').textContent = name;
    document.getElementById('confirmEmail').textContent = email;

    document.getElementById('bookingForm').reset();

    
});



