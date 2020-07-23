function showMore() {
    var x = document.getElementById('myDIV');
    var info = document.getElementById("text3");
    info.onclick = function () {
        if (info.innerHTML == 'SHOW MORE') {
            x.style.display = "block";
            info.innerHTML = 'SHOW LESS';
        } else if(info.innerHTML == 'SHOW LESS'){
            x.style.display = "none";
            info.innerHTML = 'SHOW MORE';
        }
    }
}
showMore();

function subscribe() {
    let button = document.getElementById('button1');
    button.onclick = function () {
        if (button.innerHTML === 'SUBSCRIBE') {
            button.style.backgroundColor = 'gray';
            button.innerHTML = 'SUBSCRIBED';
        } else if (button.innerHTML === 'SUBSCRIBED') {
            let modal1 = document.getElementById("id01");
            modal1.style.display = "block";
            let cancel = document.querySelector('.cancelbtn');
            cancel.onclick = function () {
                modal1.style.display = "none";
            };

            let del = document.querySelector('.deletebtn');
            del.onclick = function () {
                button.style.backgroundColor = 'red';
                button.innerHTML = 'SUBSCRIBE';
                modal1.style.display = "none";
            };  
        }
    }
}
subscribe();