const serverData = async () => {
    await fetch('https://ap.abid.app/api/corona/livetracker')
        .then(response => response.json())
	    .then(data => {
            document.getElementById('activeCase').innerHTML = data.active;
            document.getElementById('recoverdCase').innerHTML = data.recoverd;
            document.getElementById('dethsCase').innerHTML = data.deths;
        })
	    .catch(err => console.log(err));
}

serverData();

function timeout() {
    setTimeout(function () {
        serverData();
        timeout();
    }, 3000);
}
timeout();