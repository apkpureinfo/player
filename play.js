for (var i = 0; i < playlist.length; i++) {
var item = playlist[i];
ii = i + 1;
$('#playlist').append('<li data-type="mp3"><span>' + ii + '. ' + item.title + ' - ' + item.artist + '</span><a class="download_playlist_btn" title="Download" href="/site-download-lagu.html?to-file=' + id + '&amp;to-artist=' + item.artist + '&to-title=' + item.title + '"></a></li>');
}
