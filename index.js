/*$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};*/

function submitForm() {
    // Storing Field Values In Variables
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let location = document.getElementById("location").value;
    let checkIn = document.getElementById("checkIn").value;
    if (firstName != '') {
    if (lastName != '') {}
    if (location != '') {}
    if (checkIn != true) {}
    return true;
    }
    alert("Please fill out your name");
    return false;
    }

    document.getElementById("submit-form").onsubmit = function() {submitForm()};

 /*   function generateDate(){
        let currentDate = new Date();                
        let curdate = currentDate.getDate();
        document.getElementbyId("dateHidden").value = curdate;
        return true;
    }
*/
    

/*var $form = $('form#submit-form'),
    url = 'https://script.google.com/macros/s/AKfycbzSZsptIhfRJcDlNEQVUnUvpUPQejdM1hKmmhI3x7CeFXkPAog/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).done(
    // do something
  );
})
/*const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://script.google.com/macros/s/AKfycbzSZsptIhfRJcDlNEQVUnUvpUPQejdM1hKmmhI3x7CeFXkPAog/exec"; // site that doesn’t send Access-Control-*
const form = document.forms['submit-form'];

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(proxyurl + url, { method: 'POST', body: new FormData(form)})
  .then(response => response.text())
  .then(contents => console.log(contents))
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
})*/
  

/*const scriptURL = 'https://script.google.com/macros/s/AKfycbzSZsptIhfRJcDlNEQVUnUvpUPQejdM1hKmmhI3x7CeFXkPAog/exec'
const form = document.forms['submit-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})*/


//Today's Date

//document.getElementById("today").valueAsDate = new Date();

