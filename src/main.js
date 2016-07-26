$(document).ready(function() {
console.log('sanity check');


$('form').on('submit', function(event){
  event.preventDefault();
  console.log('hijacked');
  var inputMovie = $('#inputMovie').val();
  titleSearch(inputMovie);

});

});

function titleSearch(title) {

  $.ajax({
  method: 'GET',
  dataType: 'json',
  url: 'http://www.omdbapi.com/?t=' + title
  }).done(function (result){
  //console.log(result);
   var posterUrl = result.Poster;
   $( ".titleImage" ).append(posterUrl);
   $( ".movieTitle" ).append( '<img src="' + title + '"></img>');
  //then append div ==> var $img = $('<img src="') + imgLocale + '">'
  //http://www.omdbapi.com/?t=test
  });
}

//titleSearch("Jaws");
