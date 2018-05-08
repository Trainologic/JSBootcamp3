function addUser(roomId, userName, callback) {
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        url: '//localhost:3000/room/' + roomId + '/user',
        data: JSON.stringify({
            name: userName
        }),
        success: function (response) {
            callback(null, response);
        },
        error: function (error) {
            callback(error);
        }
    });
}

function updateRoomStatus(status) {
    let playersList = $('<div id="players">Players:<ul></ul> </div>');

    status.players.forEach(function (player) {
        playersList.children('ul').append(`<li class="player">${player.name} ${player.score}</li>`);
    });

    let roomStatus = $(`<div>Room Name: ${status.name}</div>`);
    roomStatus.append(playersList);

    $('#roomStatus').html(roomStatus);
}

$(function () {
    let messageEle = $('#messageBoard');

    $('#addPlayer').click(function () {
        let playerName = $('#addPlayerWrapper > #playerName').val();

        addUser('GameRoom1', playerName, function (err, result) {
            let message = 'Successfully added player: ' + playerName;

            updateRoomStatus(result);

            if (err) {
                message = 'Failed to add player: ' + playerName + 'with error: ' + err.responseText;

            }

            messageEle.html(`<div class="alert alert-primary" role="alert">${message}</div>`);
        });
    });
});