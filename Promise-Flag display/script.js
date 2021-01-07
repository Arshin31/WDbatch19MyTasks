let resturl = 'https://restcountries.eu/rest/v2/all';

let p = new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
    request.send();
    request.onload = function () {
        var data = JSON.parse(this.response);
        resolve(data);
    }
    request.onerror = function (error) {
        reject(error);
    }
})
    .then((getdata) => {
        let i = 0;
        var div1;
        getdata.forEach(element => {

            div1 = document.getElementById('checkcard');
            div1.style.backgroundColor = "lightgrey";
            div1.style.width = "35%";
            div1.style.margin = "auto";

            var div2 = document.createElement('div');
            div2.style.padding = "5px";
            div2.style.marginLeft = "13px";

            var header = document.createElement('div');
            header.setAttribute('class', 'card-header');
            header.style.backgroundColor = "white";
            header.style.border = "none";
            header.style.width = "150px";
            header.style.fontSize = "12px";
            header.innerHTML = '<b>'+element.name+'</b>';

            var body = document.createElement('div');
            body.setAttribute('class', 'card-body');
            body.style.backgroundColor = "white";
            body.style.width = "150px";
            body.style.fontSize = "10px";
            body.innerHTML = '<p><b> Capital:<b>'+' ' +element.capital + '</p>' 
                + '<p> <b>Country Codes:</b>'+ " " +element.alpha2Code + ',' + element.alpha3Code + '</p>' 
                + '<p> <b>Capital:</b>'+ " "+element.region + '</p>' 
                + '<p> <b>Capital:</b>'+ " " +Math.ceil(element.latlng[0]) + ',' + Math.ceil(element.latlng[1]) + '</p>' 

            var img = document.createElement('img');
            img.src = element.flag;
            img.width = 150;
            img.height = 200;
            
            div2.append(header);
            div2.append(img);
            div2.append(body);

            div1.append(div2);

            // console.log(getdata);
        });

    })
    .catch((err) => {
        console.log(err)
    })
