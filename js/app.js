$(function() {
    $('#search-term').submit(function(e) {
        e.preventDefault();
        var searchTerm = $('#input').val();
        getRequest(searchTerm);
    });
});

function getRequest(searchTerm) {
    var params = {
      'part': 'snippet',
      'key': 'AIzaSyBqOghP0DoIevyrJO1dVQBgDKKvoBKHGug',
      'q': searchTerm
    };
    var url = 'https://www.googleapis.com/youtube/v3/search';
    $.getJSON(url, params, function(data) {
        showResults(data.items);
    });
}

function showResults(results) {
    var html = "";
    $.each(results, function(index, value) {
        html += '<li>' + value.snippet.title + '<br><a href=""><img src="' + value.snippet.thumbnails.high.url + '"></a></li>';
        console.log(value.snippet.title);
    });
    $('#search-results').show().html(html);
}


/*
<img src="' + value.snippet.thumbnails.medium.url + '>
Search for a specified string.
var search = function () {
    var q = $('#query').val();

    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet'
    });


    request.execute(function(response) {
        console.log(response.result);
        //var str = JSON.stringify(response.result);
        $.each(response.result.items, function(index, value) {
          console.log(value.snippet.title);
        });

        //$('#search-results').html('<pre>' + str + '</pre>');
    });

    return false;
};

function onLoadFn() {
    // Make gapi.client calls
    gapi.client.setApiKey('AIzaSyBqOghP0DoIevyrJO1dVQBgDKKvoBKHGug');

    gapi.client.load('youtube', 'v3', function() {

    });

    //gapi.auth.init(function() {});
}
gapi.load("client", onLoadFn);

$(document).ready(function() {
  $('#search-term').submit(search);
});
*/
