$(function() {
    $('#search-term').submit(function(e) {
        e.preventDefault();
        var searchTerm = $('#input').val();
        getRequest(searchTerm);
        document.getElementById('search-term').reset();
    });

});

function getRequest(searchTerm) {
    var params = {
      'part': 'snippet',
      'videoId': 'id',
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
        html += '<li>' + value.snippet.title + '<br><a target="_blank" href="https://www.youtube.com/watch?v=' + value.id.videoId + '"><img src="' + value.snippet.thumbnails.high.url + '"></a></li>';
        console.log(value.snippet.thumbnails.high.url);
    });
    $('#search-results').show().html(html);
}
/*need to use video ID to */
