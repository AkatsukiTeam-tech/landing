
// accordion

const accordionItems = document.querySelectorAll(".accordion__item");

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
  const score = document.querySelector(".analysis__score");

  slider.addEventListener("input", function () {
    score.innerText = slider.value;
});


const checkerItems = document.querySelectorAll(".checker__card");
const dotsItems = document.querySelectorAll(".checker_dot");

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

dotsItems.forEach((dot , index) => {
  dot.addEventListener("click", () => {
    const isActive = dot.classList.contains("active");

    dotsItems.forEach((item, index2) => {
      item.classList.remove("active");
      checkerItems[index2].classList.remove("active");
    });

    if (!isActive) {
      dot.classList.add("active");
      checkerItems[index].classList.add("active");
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
var modal3 = document.getElementById('modal3');
var openModalBtn = document.getElementById('openModalBtn');
var openModalBtn2 = document.getElementById('openModalBtn2');
var againBtn = document.getElementById('again');
var closeBtn = document.getElementsByClassName('close')[0];
var closeBtn1 = document.getElementsByClassName('close')[1];
var closeBtn2 = document.getElementsByClassName('close')[2];

const professionItems = document.querySelectorAll(".profession");
const posterItems = document.querySelectorAll(".poster");
const arrowItems = document.querySelectorAll(".arrow2");
var ind;

posterItems.forEach((poster, index) => {
  poster.addEventListener("click", () => {
    modal2.style.display = 'block';
    console.log('нажал на элемент');
    ind = index;
  });
});

professionItems.forEach((profession) => {
  profession.addEventListener("click", () => {
    modal2.style.display = 'none';
    console.log('нажал на профессию');
    const selectedProfession = profession.innerHTML;
    const selectedPoster = posterItems[ind];
    selectedPoster.innerHTML = selectedProfession;
    arrowItems[ind].src = 'img/Vector2.svg';
    arrowItems[ind].classList.add("active");
  });
});

arrowItems.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    
    console.log('нажал на стрелку');
    const isActive = arrow.classList.contains("active");
    if(isActive){
      arrow.classList.remove("active");
      posterItems[index].innerHTML = "Мамандықты таңдау";
      arrow.src = "img/Vector.svg";
      console.log('нажал на стрелку и убрал');
    }else{
      modal2.style.display = 'block';
      ind = index;
    }
  });
});


openModalBtn.addEventListener("click", () => {
    modal.style.display = 'block';
});

openModalBtn2.addEventListener("click", () => {
  modal3.style.display = 'block';
});

closeBtn.onclick = function() {
  modal.style.display = 'none';
}


closeBtn1.onclick = function() {
    modal2.style.display = 'none';
}

closeBtn2.onclick = function() {
  modal3.style.display = 'none';
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  } else if(event.target == modal2){
    modal2.style.display = 'none';
  } else if(event.target == modal3){
    modal3.style.display = 'none';
  }
}

againBtn.onclick = function() {
  modal3.style.display = 'none';
  posterItems.forEach((poster,index) => {
    arrowItems[index].classList.remove("active");
    poster.innerHTML = "Мамандықты таңдау";
    arrowItems[index].src = "img/Vector.svg";
  });
}





const carousel = document.querySelector(".slider__carousel");

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

var phoneInputs = document.getElementsByClassName('telephone');

for (var i = 0; i < phoneInputs.length; i++) {
  Inputmask({
    mask: '+7 (999) 999-99-99',
    placeholder: '_',
    oncomplete: function() {
      var phoneNumberWithCode = this.value.replace(/[^0-9]/g, '');
      var phoneNumber = phoneNumberWithCode.slice(1);
      console.log(phoneNumber);
    }
  }).mask(phoneInputs[i]);
}


// Получение значений из полей ввода

var submitLession = document.getElementsByClassName('panel-btn btn yellow')[0];
var submitQuestion = document.getElementsByClassName('panel-btn btn yellow')[1];

// Создание объекта данных для отправки

submitLession.onclick = function() {
  const input1Value = document.getElementById('input1').value;
  const input2Value = document.getElementById('input2').value;
  var phoneNumberWithCode = input2Value.replace(/[^0-9]/g, '');
  var phoneNumber = phoneNumberWithCode.slice(1);

  console.log(phoneNumber);
  const data = {
    fullName: input1Value,
    number: phoneNumber,
    typeOfRequest: "LESSON"
  };

  axios.post('http://192.168.1.232:8080/request/create', data)
  .then(response => {
    // Обработка успешного ответа
    if(response.status == 200){
      showNotification();
      var errorTvFild = document.getElementsByClassName('error_message')[0];
      errorTvFild.style.display = 'none';
    }
    console.log(response.data);
    console.log(response.status);
  })
  .catch(error => {
    var errorTvFild = document.getElementsByClassName('error_message')[0];
    // Обработка ошибок
    const fieldErrors = error.response.data.fieldErrors;
    if(fieldErrors.number){
      errorTvFild.innerHTML = fieldErrors.number;
      errorTvFild.style.display = 'block';
      console.log(fieldErrors.number);
    }else if(fieldErrors.fullName){
      errorTvFild.innerHTML = fieldErrors.fullName;
      errorTvFild.style.display = 'block';
      console.log(fieldErrors.fullName);
    }
    
    console.error(error);
  });
  console.log(data);
}


submitQuestion.onclick = function() {
  const input1Value = document.getElementById('input3').value;
  const input2Value = document.getElementById('input4').value;
  var phoneNumberWithCode = input2Value.replace(/[^0-9]/g, '');
  var phoneNumber = phoneNumberWithCode.slice(1);

  console.log(phoneNumber);
  const data = {
    fullName: input1Value,
    number: phoneNumber,
    typeOfRequest: "ANSWER"
  };

  axios.post('http://192.168.1.232:8080/request/create', data)
  .then(response => {
    // Обработка успешного ответа
    if(response.status == 200){
      showNotification2();
      var errorTvFild = document.getElementsByClassName('error_message1')[0];
      errorTvFild.style.display = 'none';
    }
    console.log(response.data);
    console.log(response.status);
  })
  .catch(error => {
    var errorTvFild = document.getElementsByClassName('error_message1')[0];
    // Обработка ошибок
    const fieldErrors = error.response.data.fieldErrors;
    if(fieldErrors.number){
      errorTvFild.innerHTML = fieldErrors.number;
      errorTvFild.style.display = 'block';
      console.log(fieldErrors.number);
    }else if(fieldErrors.fullName){
      errorTvFild.innerHTML = fieldErrors.fullName;
      errorTvFild.style.display = 'block';
      console.log(fieldErrors.fullName);
    }
    
    console.error(error);
  });
  console.log(data);
}

const notificationBox = document.getElementsByClassName('notification_box')[0];
const notificationBox2 = document.getElementsByClassName('notification_box')[1];
const closeIcon = document.getElementsByClassName('bx-x')[0];
const closeIcon2 = document.getElementsByClassName('bx-x')[1];

function showNotification() {
    notificationBox.style.display = 'flex'; 
    notificationBox.style.right = '0';
    setTimeout(hideNotification, 5000); 
}

function hideNotification() {
    notificationBox.style.right = '-500px'; 
}

function showNotification2() {
  notificationBox2.style.display = 'flex'; 
  notificationBox2.style.right = '0';
  setTimeout(hideNotification2, 5000); 
}

function hideNotification2() {
  notificationBox2.style.right = '-500px'; 
}

closeIcon.addEventListener('click', hideNotification);
closeIcon2.addEventListener('click', hideNotification);