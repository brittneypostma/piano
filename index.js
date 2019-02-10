var $form = $('form#test-form'),
url = 'https://script.google.com/macros/s/AKfycbzSZsptIhfRJcDlNEQVUnUvpUPQejdM1hKmmhI3x7CeFXkPAog/exec'

$('#submit-form').on('click', function(e) {
e.preventDefault();
var jqxhr = $.ajax({
url: url,
method: "GET",
dataType: "json",
data: $form.serializeObject()
}).success(
// do something
);
})
