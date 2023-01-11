//console.log("check");

const firstelement = document.querySelectorAll(".panel");
    firstelement.forEach((i)=>{
    i.addEventListener("mouseover",()=>{
            console.log('mouseover')
            i.style.flex='3'
   console.log(i);
    });
    i.addEventListener("mouseout",()=>{
        console.group('mouseout')
        i.style.flex='0.5'
    });
});
console.log(firstelement);
