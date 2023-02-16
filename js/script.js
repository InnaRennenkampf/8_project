// let url = "http://www.boredapi.com/api/activity/" //рандомная активность
// $.getJSON (url, function (data) {
//     console.log(data.activity)
//     $('#random-activity').append(
//         $('<p>' + data.activity + '</p>')
//     )
// })


$('#type-select').on('change', function () {
    requestActivityByType(this.value);
});

function requestActivityByType(type) { //получаем активность по типу
    let url = "http://www.boredapi.com/api/activity?type=" + type.toLowerCase();
    console.log(url)
    $.getJSON(url, function (data) {
        $('#activity').empty();
        $('#activity').append(
            $('<p>' + data.activity + '</p>') 
        )
    });
}