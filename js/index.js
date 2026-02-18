var today = new Date();
var thisYear = today.getFullYear();



var footer = document.querySelector('footer');

var copyright = document.createElement('p');
copyright.innerHTML = `© ${thisYear} Oswaldo Criollo Ortiz. All rights reserved.`;

footer.appendChild(copyright);


var skills = ["JavaScript", "HTML", "CSS", "GitHub","C/C++ Programming","Python",
    "Embedded Systems (Raspberry Pi, STM32, ESP32)","Embedded Linux","Circuit Design","TCP/IP Networking",
"Scikit-learn","TensorFlow o PyTorch","OpenCV"];
var skillsSection = document.querySelector('#skills')
var skillsList  = skillsSection.querySelector('ul')

for(var i =0;i< skills.length; i++){
    var skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);

}