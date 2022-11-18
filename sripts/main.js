var myImage = document.querySelector('img')

myImage.onclick =function() {
var mySrc = myImage.getAttribute('src')
if(mySrc ==='images/123.jpg') {
myImage.setAttribute('src','')
} else {
myImage.setAttribute('src','')
}
}
var myButton =document
var myHeading = document.querySelector('button')
var myHeading = document.querySelector('h1')
function setUserName() {
    var myName = ('Введите своё имя')
    localStorage.textConent = 'Добро пожаловать ' +myName;
}
if(!localStorage.getItem('name')){
    setUserName()
}else{
    var stoedName = localStorage.getItem('name');
    myHeading.textContent = 'Привет' + storedName;
}
myButton.onclick = function(){
    setUserName
}