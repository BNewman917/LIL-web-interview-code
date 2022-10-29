$(function () {
    $("load-info").click(function () {
        $.ajax({
            url: "js/data_artists.json",
        }).done(function (data) {
            $.each(data.artists, function (index, artist) {
                $("artist-info").append("<li>" + artist.name + "</li>");
            });
        });
    });
});
