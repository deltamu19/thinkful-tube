// Search for a specified string.
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
