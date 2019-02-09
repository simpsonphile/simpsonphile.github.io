//contact form
window.addEventListener('keydown',function(e){
  if(e.keyCode=='27'){
    window.location.href = window.location.href.replace(/#contact-form/g,'#');
  }
});


var contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('click',function(e){
  if(e.path[0].id =='contact-form'){
    window.location.href = window.location.href.replace(/#contact-form/g,'#');
  }
});

//2 handle nouislider
var range = document.getElementById('range');
var minBudget = document.getElementById('min-budget');
var maxBudget = document.getElementById('max-budget');
noUiSlider.create(range, {
  range: {
    'min': 500,
    'max': 4000
  },
  step: 100,
  start: [500, 4000],
  margin: 100,
  connect: true,
  behaviour: 'tap-drag',
  tooltips: true
});

range.noUiSlider.on('update', function(values, handle){
  minBudget.value = values[0];
  maxBudget.value = values[1];
});


//selects ==> other content
var subjectInput = document.querySelector('#subject-input');
subjectInput.addEventListener('change', updateQuestions);

function updateQuestions(){
  var q1 = document.querySelector('.iwantwebsite-choosed');
  var q2 = document.querySelector('.ineeddesign-choosed');
  var q3 = document.querySelector('.ineedapplication-choosed');
  var inputs = document.querySelectorAll('.depended-inputs input[type=radio]');
  inputs.forEach(function(e){
    console.log(e.disabled = 'disabled');
  });

  var projectDateInput = document.querySelector('.project-date');
  var projectBudgetInput = document.querySelector('.project-budget');
  var textArea = document.querySelector('#message-textarea');


  q1.style.display = 'none';
  q2.style.display = 'none';
  q3.style.display = 'none';
  projectDateInput.style.display = 'block';
  projectBudgetInput.style.display = 'block';

  if(subjectInput.value == "I want website"){
    q1.style.display = 'block';
    q1.querySelectorAll('input[type=radio]').forEach(function(e){e.disabled = false;})
    textArea.placeholder = "Tell me about website you want me to do";

  } else if(subjectInput.value == "I need design"){
    q2.style.display = 'block';
    q2.querySelectorAll('input[type=radio]').forEach(function(e){e.disabled = false;})
    textArea.placeholder = "Additional information about design project I should know";


  } else if(subjectInput.value == "I need web application"){
    q3.style.display = 'block';
    q3.querySelectorAll('input[type=radio]').forEach(function(e){e.disabled = false;})
    textArea.placeholder = "More information about web application";

  }
  else {
    projectDateInput.style.display = 'none';
    projectBudgetInput.style.display = 'none';
    textArea.placeholder = "Additional informations..";
  }
}

updateQuestions();


//datepicker
var datepicker_start = new Pikaday({
  field: document.getElementById('start-date'),
  firstDay: 1,
  minDate: new Date(),
  maxDate: new Date(2020, 12, 31),
  yearRange: [2000,2020]
});

var datepicker_end = new Pikaday({
  field: document.getElementById('end-date'),
  firstDay: 1,
  minDate: new Date(),
  maxDate: new Date(2020, 12, 31),
  yearRange: [2000,2020]
});


//uploaded file text

var uploadFile = document.querySelector('#upload-file');
var uploadFile2 = document.querySelector('#upload-file2');
var uploadFile3 = document.querySelector('#upload-file3');
var uploadInputs = [];
uploadInputs.push(uploadFile);
uploadInputs.push(uploadFile2);
uploadInputs.push(uploadFile3);

function changeInputFileText(inputObject){
  var uploadText = inputObject.target.files[0].name;
  document.querySelector('#'+inputObject.target.id+' + .upload-text').innerHTML = uploadText;
  console.log(inputObject.target.id);
}


for (var i = 0; i < uploadInputs.length; i++) {
  uploadInputs[i].addEventListener('change', function(e){
    changeInputFileText(e);
    if(document.querySelector('.row.upload-row .grid-1-3:nth-child(2)').style.display == 'none')
    document.querySelector('.row.upload-row .grid-1-3:nth-child(2)').style.display = 'block';
    else document.querySelector('.row.upload-row .grid-1-3:nth-child(3)').style.display = 'block';
  });
}
