document.getElementById('input').addEventListener('keyup', (e) => loadResults(e));

var out = document.getElementById('out');

function loadResults(e){
    fetch('data.json')
        .then((req) => req.json())
        .then((data) => {
            clearFeilds();
            data.forEach((state) => {
                var str = '-';
                str += (state.abbr +' '+state.name);
                str = str.toLowerCase();
                if(e.target.value != ''){
                    if(str.indexOf(e.target.value.toLowerCase()) != -1){
                        displayState(state);
                    }
                }else{
                    clearFeilds();
                }
            })
        })
}

function displayState(state){
    var div = document.createElement('div');
    div.className = 'card card-body mb-2';
    var rslt = `
        <h3>${state.name} (${state.abbr}) <span class="text-primary">${state.capital}</span></h3>
        <small>Lat: ${state.lat}/ Lng: ${state.lat}</small>
    `;
    div.innerHTML = rslt;
    out.appendChild(div);
}

function clearFeilds(){
    out.innerHTML = '';
}