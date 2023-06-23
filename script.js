
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
const mapOfProfession = new Map([
  ['math-physics',['B010','B054','B055','B059','B061','B062','B063','B064','B065','B067','B069','B070','B071','B076','B082','B167','B183']],
  ['math-geog',['B044','B046','B047','B048','B052','B075','B095']],
  ['math-cs',['B011','B057','B058']],
  ['biology-geog',['B001','B002','B003','B019','B020','B051','B079','B090']],
  ['geog-english',['B091','B093']],
  ['history-geog',['B014','B015','B032']],
  ['history-rights',['B049']],
  ['chemistry-biology',['B012','B013','B050','B053','B068','B072','B077','B078','B080','B083']],
  ['chemistry-physics',['B060']],
  ['english-history',['B018','B035','B036','B039','B040','B140']],
  ['art-art',['B005','B021','B027','B029','B030','B031','B033','B042']],
  ['kazakh-kazakhlit',['B016']],
  ['kr-krlit',['B037','B043']]
  ]);
const mapOfProfessionName = new Map([
  ['B010','Физика мұғалімдерін даярлау'],
  ['B054','Физика'],
  ['B055','Математика және статистика'],
  ['B059','Коммуникациялар және коммуникациялық технологиялар'],
  ['B061','Материалтану және технологиялар'],
  ['B062','Электр техникасы және энергетика'],
  ['B063','Электр техникасы және автоматтандыру'],
  ['B064','Механика және металл өңдеу'],
  ['B065','Автокөлік құралдары'],
  ['B067','Әуе көлігі және технологиялары'],
  ['B069','Материалдар өндірісі (шыны, қағаз, пластик, ағаш)'],
  ['B070','Тоқыма: киім, аяқ киім және былғары бұйымдары'],
  ['B071','Тау-кен ісі және пайдалы қазбаларды өндіру'],
  ['B076','Стандарттау, сертификаттау және метрология (сала бойынша)'],
  ['B082','Су ресурстары және суды пайдалану'],
  ['B167','Ұшу аппараттарын және қозғалтқыштарды ұшырып пайдалану'],
  ['B183','Агроинженерия'],
  ['B044','Менеджмент және басқару'],
  ['B046','Қаржы, экономика, банк және сақтандыру ісі'],
  ['B047','Маркетинг және жарнама'],
  ['B048','Еңбек дағдылары'],
  ['B052','Жер туралы ғылым'],
  ['B075','Кадастр және жерге орналастыру'],
  ['B095','Көлік қызметтері'],
  ['B011','Информатика мұғалімдерін даярлау'],
  ['B057','Ақпараттық технологиялар'],
  ['B058','Ақпараттық қауіпсіздік'],
  ['B001','Педагогика және психология'],
  ['B002','Мектепке дейінгі оқыту және тәрбиелеу'],
  ['B003','Бастауышта оқыту педагогикасы мен әдістемесі'],
  ['B019','Әлеуметтік педагогтарды даярлау'],
  ['B020','Арнайы педагогика'],
  ['B051','Қоршаған орта'],
  ['B079','Орман шаруашылығы'],
  ['B090','Әлеуметтік жұмыс'],
  ['B091','Туризм'],
  ['B093','Мейрамхана ісі және мейманхана бизнесі'],
  ['B014','География мұғалімдерін даярлау'],
  ['B015','Гуманитарлық пәндер мұғалімдерін даярлау'],
  ['B032','Философия және этика'],
  ['B049','Құқық'],
  ['B012','Химия мұғалімдерін даярлау'],
  ['B013','Биология мұғалімдерін даярлау'],
  ['B050','Биологиялық және сабақтас ғылымдар'],
  ['B053','Химия'],
  ['B068','Азық-түлік өнімдерінің өндірісі'],
  ['B072','Фармацевтикалық өндіріс технологиясы'],
  ['B077','Өсімдік шаруашылығы'],
  ['B078','Мал шаруашылығы'],
  ['B080','Балық шаруашылығы'],
  ['B083','Ветеринария'],
  ['B060','Химиялық инженерия және процестер'],
  ['B018','Шет тілі мұғалімдерін даярлау','B035 Түркітану және шығыстану'],
  ['B035','Түркітану және шығыстану'],
  ['B036','Аударма ісі'],
  ['B039','Мәдениеттану'],
  ['B040','Саясаттану'],
  ['B140','Халықаралық қатынастар мен дипломатия'],
  ['B005','Дене шынықтыру мұғалімдерін даярлау'],
  ['B021','Орындаушылық өнер'],
  ['B027','Театр өнері'],
  ['B029','Аудиовизуалды құрылғылар және медиа өндіріс'],
  ['B030','Бейнелеу өнері'],
  ['B031','Сән, дизайн'],
  ['B033','Дінтану және теология'],
  ['B042','Журналистика және репортер ісі'],
  ['B016','Қазақ тілі мен әдебиеті мұғалімдерін даярлау'],
  ['B037','Филология'],
  ['B043','Кітапхана ісі, ақпараттарды өңдеу және мұрағат ісі']
]);
const mapOfProfessionPoint = new Map([
  ['B010',118],
  ['B054',104],
  ['B055',120],
  ['B059',108],
  ['B061',98],
  ['B062',100],
  ['B063',107],  
  ['B064',85],
  ['B065',93],
  ['B067',121],
  ['B069',68], 
  ['B070',80],
  ['B071',95],
  ['B076',93],
  ['B082',76],
  ['B167',134],
  ['B183',87],   
  ['B044',122],
  ['B046',128],
  ['B047',123],
  ['B048',114],
  ['B052',107],
  ['B075',93], 
  ['B095',112],  
  ['B011',101],
  ['B057',107],
  ['B058',130],
  ['B001',108], 
  ['B002',88],
  ['B003',106],
  ['B019',90],
  ['B020',104],
  ['B051',98],
  ['B079',93],
  ['B090',91],  
  ['B091',119],
  ['B093',93],
  ['B014',112],
  ['B015',122],
  ['B032',100],
  ['B049',121],    
  ['B012',112],
  ['B013',109],
  ['B050',110],
  ['B053',102],   
  ['B068',93],
  ['B072',99],
  ['B077',101],
  ['B078',74],
  ['B080',63],
  ['B083',104],
  ['B060',95],
  ['B018',131],
  ['B035',118],
  ['B036',125],
  ['B039',115],
  ['B040',113],
  ['B140',132],
  ['B005',129],
  ['B021',119],
  ['B027',122],
  ['B029',121],
  ['B030',123],
  ['B031',122],
  ['B033',115],
  ['B042',122],
  ['B016',112],
  ['B037',116],
  ['B043',110]
]);

subject2Select.addEventListener('change', function(){
  arrowItems.forEach((arrow, index) => {
    arrow.classList.remove("active");
    posterItems[index].innerHTML = "Мамандықты таңдау";
    arrow.src = "img/Vector.svg";
  });
});

subject1Select.addEventListener('change', function() {
    subject2Select.disabled = false;
    subject2Select.selectedIndex = 0;

    arrowItems.forEach((arrow, index) => {
      arrow.classList.remove("active");
      posterItems[index].innerHTML = "Мамандықты таңдау";
      arrow.src = "img/Vector.svg";
    });

    // Get the selected value of subject1Select
    const selectedValue = subject1Select.value;
  
    // Clear previous disabled options in subject2Select
    subject2Select.querySelectorAll('option').forEach(function(option) {
      option.disabled = false;
    });

 
  switch (selectedValue) {
    case 'math':

        subject2Select.querySelectorAll('option').forEach(function(option) {
            if(option.value !== 'physics' && option.value !== 'geog' && option.value !== 'cs'){
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
            if(option.value !== 'geog'){
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
    case 'kazakh':
        subject2Select.querySelectorAll('option').forEach(function(option) {
            if(option.value !== 'kazakhlit'){
                option.disabled = true;
            } 
        });
        
            
        break;  

    case 'kr':
          subject2Select.querySelectorAll('option').forEach(function(option) {
              if(option.value !== 'krlit'){
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
            if(option.value !== 'physics' && option.value !== 'biology'){
                option.disabled = true;
            } 
        });
                
                    
        break;  

    case 'art':
        subject2Select.querySelectorAll('option').forEach(function(option) {
          if(option.value !== 'art' ){
            option.disabled = true;
        } 
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

var professionItems = document.querySelectorAll(".profession");
const posterItems = document.querySelectorAll(".poster");
const resultItems = document.querySelectorAll(".poster2");
const arrowItems = document.querySelectorAll(".arrow2");
var ind;

posterItems.forEach((poster, index) => {
  poster.addEventListener("click", () => {
    modal2.style.display = 'block';
    fillModalInfo();
    
    ind = index;
  });
});



arrowItems.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    

    const isActive = arrow.classList.contains("active");
    if(isActive){
      arrow.classList.remove("active");
      posterItems[index].innerHTML = "Мамандықты таңдау";
      arrow.src = "img/Vector.svg";
      
    }else{
      modal2.style.display = 'block';
      fillModalInfo();
      ind = index;
    }
  });
});

var combiantion = "";
var point = 0; 

openModalBtn.addEventListener("click", () => {
  const subject1Select = document.getElementById('subject1');
  const subject2Select = document.getElementById('subject2');
  const pointRange = document.getElementById('myRange');
  var errorTvFild = document.getElementsByClassName('error_message2')[0];
  if(subject1Select.value == 0 || subject2Select.value == 0){
    errorTvFild.style.display = 'block';
  }else{
    errorTvFild.style.display = 'none';
    combiantion = `${subject1Select.value}-${subject2Select.value}`;
    point = pointRange.value;
    console.log(point);
    console.log(combiantion);
    modal.style.display = 'block';
  }
  
});

openModalBtn2.addEventListener("click", () => {
  var errorTvFild = document.getElementsByClassName('error_message3')[0];

  let allActive = true;

  arrowItems.forEach(item => {
    if (!item.classList.contains('active')) {
      allActive = false;
      return;
    }
  });
  if(!allActive){
    errorTvFild.style.display = 'block';
  }else{
    errorTvFild.style.display = 'none';
    modal3.style.display = 'block';
  }
  
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

function fillModalInfo(){
  var cont = document.getElementById('professions');
  var data = mapOfProfession.get(combiantion);
  cont.replaceChildren();

  for(var i = 0; i< data.length;i++){
    var row = `<div class="profession"> <p>${mapOfProfessionName.get(data[i])}</p> </div> <hr>`;

    cont.innerHTML += row;
  }  
  codeItems = document.querySelectorAll(".code");
  resItems = document.querySelectorAll(".res");
  professionItems = document.querySelectorAll(".profession");
  professionItems.forEach((profession, index) => {
    profession.addEventListener("click", () => {
      modal2.style.display = 'none';
      console.log('нажал на профессию');
      const selectedProfession = profession.innerHTML;
      const selectedPoster = posterItems[ind];
      const selectedPoster2 = resultItems[ind];
      const selectedCode = codeItems[ind];
      const selectedRes = resItems[ind];
      selectedCode.innerHTML = `Код: ${data[index]}`;
      var persent = Math.ceil(point*100/mapOfProfessionPoint.get(data[index]));
      console.log(persent);
      if( persent >= 100){
        selectedRes.innerHTML = `100%`;
      }else{
        selectedRes.innerHTML = `${persent}%`;
      }
      
      selectedPoster2.innerHTML = selectedProfession;
      selectedPoster.innerHTML = selectedProfession;
      arrowItems[ind].src = 'img/Vector2.svg';
      arrowItems[ind].classList.add("active");
    });
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

