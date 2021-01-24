//cheatin' by using a global variable that fakes like a user has logged in

var auth = false;

function Authentication() {
    if(auth == false){
        auth = true;
    }
    else{
        auth = false;
    }

    return auth;
}

export default Authentication;