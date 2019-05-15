var oReqPeople = new XMLHttpRequest();
oReqPeople.addEventListener('load',getPeopleData);
oReqPeople.open('GET','https://swapi.co/api/people/')
oReqPeople.send();
var heightResult;
var peopleResult;
var massResult;
var birthYearResult;
var genderResult;
function getPeopleData(){
  var data = JSON.parse(this.responseText);
 for(var i=0; i<4; i++){
    var person = document.createElement('ul');
    person.innerHTML = data.results[i].name;
    peopleResult.appendChild(person);
    var height = document.createElement('li');
    height.innerHTML = data.results[i].height; 
    data.results[i].height;
    heightResult.appendChild(height);
    var mass = docuent.createElement('li');
    mass.innerHTML = data.results[i].mass;
    massResult.appendChild(mass);
    var birthYear = document.createElement('li');
    data.results[i].birthYear;
    birthYearResult.appendChild(birthYear);
    var gender = document.createElement('li');
    data.results[i].gender;
    genderResult.appendChild(gender);
}

}
