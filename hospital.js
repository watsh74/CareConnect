//for doctor scrool
let doctors=document.querySelectorAll(".team")
let card=document.querySelectorAll(".serviceCard")//applying for when we select this particular  lab secttion will open in our services
let count=0;
doctors.forEach(function(card,index){
    card.style.left=`${index*100}`;
})
function myFun(){
    doctors.forEach(function(curValue){
        curValue.style.transform=`translateX(-${count*100}%)`;

    })
}
setInterval(function(){
    count++
    if(count==doctors.length){
        count=0;
    }
    myFun()
},3000)

//serviceCard hai yaha


document.querySelectorAll('.serviceCard').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('enlarged');
    });
});
