function getUsers() {    
    $.ajax({
        url: "../data.php", 
        type: 'GET',
        processData: false,
        contentType: false,
        data: null,
        dataType:"json",
        complete: function(res) {			
        },
        success: function(res) {
            var users = res;

            users.forEach(user => {
                $("#usersDiv").append(userTemplate(user));
            });
        },
        error: function(err) {
        }
    });
}


var userTemplate = function(user)
{
    return `<div style='display: block; width: 100%; background: yellow'>
                <p>First Name: ${user.firstName} </p>
                <p>Last Name: ${user.lastName} </p>
            </div>`;
}