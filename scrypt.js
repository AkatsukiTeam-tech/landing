
// accordion

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      const isActive = accordion.classList.contains("active");
  
      accordionItems.forEach((item) => {
        item.classList.remove("active");
      });
  
      if (!isActive) {
        accordion.classList.add("active");
      }
    });
});

const slider = document.getElementById("myRange");
  const score = document.querySelector(".score");

  slider.addEventListener("input", function () {
    score.innerText = slider.value;
});


const checkerItems = document.querySelectorAll(".card2");
const dotsItems = document.querySelectorAll(".dot");

checkerItems.forEach((checker , index) => {
    checker.addEventListener("click", () => {
      const isActive = checker.classList.contains("active");
  
      checkerItems.forEach((item, index2) => {
        item.classList.remove("active");
        dotsItems[index2].classList.remove("active");
      });
  
      if (!isActive) {
        checker.classList.add("active");
        dotsItems[index].classList.add("active");
      }
    });
});

const subject1Select = document.getElementById('subject1');
const subject2Select = document.getElementById('subject2');

// Add event listener to subject1Select
subject1Select.addEventListener('change', function() {
 
    subject2Select.selectedIndex = 0;

    // Get the selected value of subject1Select
    const selectedValue = subject1Select.value;
  
    // Clear previous disabled options in subject2Select
    subject2Select.querySelectorAll('option').forEach(function(option) {
      option.disabled = false;
    });

 
  switch (selectedValue) {
    case 'math':

        subject2Select.querySelectorAll('option').forEach(function(option) {
            if(option.value !== 'physics' && option.value !== 'geog'){
                option.disabled = true;
            } 
        });
    
        break;
    case 'history':
        subject2Select.querySelectorAll('option').forEach(function(option) {
            if(option.value !== 'geog' && option.value !== 'rights'){
                option.disabled = true;
            } 
        });

        break;

    case 'biology':
        subject2Select.querySelectorAll('option').forEach(function(option) {
            if(option.value !== 'geog' && option.value !== 'chemistry'){
                option.disabled = true;
            } 
        });
    
        break; 

    case 'english':
        subject2Select.querySelectorAll('option').forEach(function(option) {
            if(option.value !== 'history'){
                option.disabled = true;
            } 
        });
    
        
        break;  
    case 'literature':
        subject2Select.querySelectorAll('option').forEach(function(option) {
            if(option.value !== 'history'){
                option.disabled = true;
            } 
        });
        
            
        break;  
        
    case 'geog':
        subject2Select.querySelectorAll('option').forEach(function(option) {
            if(option.value !== 'english'){
                option.disabled = true;
            } 
        });
            
                
        break;   
        
    case 'chemistry':
        subject2Select.querySelectorAll('option').forEach(function(option) {
            if(option.value !== 'physics'){
                option.disabled = true;
            } 
        });
                
                    
        break;  

    case 'art':
        subject2Select.querySelectorAll('option').forEach(function(option) {
            option.disabled = true;
        });
                    
                        
        break;      
        
        
    default:
      
        subject2Select.querySelectorAll('option').forEach(function(option) {
            option.disabled = false;
        });

      break;
    }
});



// modal

var modal = document.getElementById('modal');
var modal2 = document.getElementById('modal2');
var openModalBtn = document.getElementById('openModalBtn');
var closeBtn = document.getElementsByClassName('close')[0];
var closeBtn1 = document.getElementsByClassName('close1')[0];

const professionItems = document.querySelectorAll(".profession");
const posterItems = document.querySelectorAll(".poster");
const arrowItems = document.querySelectorAll(".arrow2");


posterItems.forEach((poster,index) => {
  poster.addEventListener("click", () => {
    modal2.style.display = 'block';
    
    professionItems.forEach((profession) => {
      profession.addEventListener("click", () => {
        modal2.style.display = 'none';
        
        poster.innerHTML = profession.innerHTML;
        
        arrowItems[index].src = 'img/Vector2.png'
        arrowItems[index].classList.add("active");
      });
    });
    
  });
});

arrowItems.forEach((arrow,index) => {
    arrow.addEventListener("click", () => {
    
    const isActive = arrow.classList.contains("active");
    if(isActive){
      arrow.classList.remove("active");
      posterItems[index].innerHTML = "Мамандықты таңдау";
      arrow.src = "img/Vector.png";
    }else{

      modal2.style.display = 'block';

      professionItems.forEach((profession) => {
        profession.addEventListener("click", () => {
          modal2.style.display = 'none';
          
          posterItems[index].innerHTML = profession.innerHTML;
          
          arrowItems[index].src = 'img/Vector2.png'
          arrowItems[index].classList.add("active");
        });
      });
    } 
  });
});

openModalBtn.addEventListener("click", () => {
    modal.style.display = 'block';
});

closeBtn.onclick = function() {
  modal.style.display = 'none';
}


closeBtn1.onclick = function() {
    modal2.style.display = 'none';
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}


const carousel = document.querySelector(".carousel");

let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) =>{
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e)=>{
  if(!isDragStart) return;
  e.preventDefoult;
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () =>{
  isDragStart = false;
}

carousel.addEventListener("mousedown", dragStart);

carousel.addEventListener("mousemove", dragging);

carousel.addEventListener("mouseup", dragStop);