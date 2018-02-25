function getUsers() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var users = JSON.parse(this.responseText);
            
            users.forEach(user => {
                document.getElementById('usersDiv').innerHTML += userTemplate(user);
            });
        }
    };

    xhttp.open("GET", "../data.php", true);
    xhttp.send();
}


var userTemplate = function(user)
{
    return `<div style='display: block; width: 100%; background: yellow'>
                <p>First Name: ${user.firstName} </p>
                <p>Last Name: ${user.lastName} </p>
            </div>`;
}