let url = "http://www.boredapi.com/api/activity/"
$.getJSON (url, function (data) {
    console.log(data.activity)
    $('#random-activity').append(
        $('<p>' + data.activity + '</p>')
    )
})