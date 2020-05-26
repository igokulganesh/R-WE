

  
const auth=firebase.auth();


function signUp(){
	
		
		var email = document.getElementById("email");
		var password = document.getElementById("psw");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up Succcesfully");
	}
