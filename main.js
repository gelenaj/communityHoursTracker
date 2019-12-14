var database = firebase.database();
var ref = database.ref('users');
function save_user(){
   ref.push({
    user: document.getElementById('user_email').value,
    password: document.getElementById('user_password').value
});

}
