$('#example').countdown({
    date: '04/22/2023 00:00:00'
    offset: '-5'
    // date: '11/20/2020 00:00:00'
}, function () {
    // alert('Merry Christmas!');
    var marriedIndicator = 'images/laurel-5.png';
    if($('#married-status').attr('src') === marriedIndicator){
    	return;
    }

    $('#married-status').attr('src', marriedIndicator);
});


function loadGallery(){
    var currentIndexHtmlFilepath = window.location.href;
    var indexHtmlBaseUrl = currentIndexHtmlFilepath.substring( 0, currentIndexHtmlFilepath.lastIndexOf( "/" ) + 1);
    $.getJSON(indexHtmlBaseUrl +  "/images/gallery/manifest.json", function(data){
        if (!Array.isArray(data)){
            console.log("Gallery manifest file is not array! Check the format of the manifest content at: " + indexHtmlBaseUrl +  "/images/gallery/manifest.json");
            return;
        }

        data.forEach(function (d) {
            console.log(d);
            var img = `<div class="card" data-groups="[`+ d.group +`]"> <a href="images/gallery/`+ d.filename +`" data-toggle="lightbox" data-gallery="ww-gallery"> <img class="img-fluid" src="images/gallery/`+ d.filename + `" alt=" `+ d.filename +`" /> </a> </div>`;
            $('#gallery-to-append').append(img);

        })
    }).fail(function(err){
        console.log("An error has occurred. Response: " +  err);
        console.log(err);
    });
}

loadGallery();
