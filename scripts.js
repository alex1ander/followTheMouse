let currentClass;
let takeElement;
let currentPositionLeft;
let currentPositionTop;
let newPositionLeft;
let newPositionTop;

let finished = 0;

    document.addEventListener("click", function (e) {
        if(e.target.tagName == 'SPAN'  && e.target.className != currentClass && currentClass && finished != 1){
            newPositionLeft = e.target.style.left;
            newPositionTop = e.target.style.top

            e.target.style.left = currentPositionLeft;
            e.target.style.top = currentPositionTop;

            takeElement[0].style.left = newPositionLeft;
            takeElement[0].style.top = newPositionTop;
        
            finished = 1;

        
            return;
        }
        finished = 0;

        if(e.target.tagName != 'BUTTON' && e.target.tagName != 'INPUT'){
        currentClass = e.target.className;
        currentPositionLeft = e.target.style.left;
        currentPositionTop = e.target.style.top;
        }
        
    });



    window.addEventListener('mousemove',function(event){
        if(finished == 0){
            takeElement = document.querySelectorAll('span.' + currentClass);

            takeElement[0].style.left  = event.clientX + 'px';
            takeElement[0].style.top = event.clientY - 50 + 'px';
        }
    });


//// out Text

let getText;

    document.querySelector(".writeText").onclick = function(){

        getText = document.getElementsByClassName('textInput')[0].value;
        createText(getText);
    }  

    function createText(getText){
        let symblosArray = getText.split("");

        while(document.querySelector('span')){
            document.querySelector('span').remove();
            currentClass = '';
        }
        symblosArray.forEach(function(item, i, symblosArray){
            console.log(i);

            let divText = document.querySelector('body');

        

            let string = document.createElement("span");
            string.classList.add('item' + i);
            string.style.top = 100 + 'px';
            string.style.left = 20 * i + 'px';
            string.innerHTML = item;
            divText.insertAdjacentElement("afterbegin", string);
        });
        
    }


