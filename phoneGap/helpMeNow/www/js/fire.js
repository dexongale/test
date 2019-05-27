function put(){
//   $( document ).bind( 'mobileinit', function(){
//   $.mobile.loader.prototype.options.text = "loading";
//   $.mobile.loader.prototype.options.textVisible = false;
//   $.mobile.loader.prototype.options.theme = "a";
//   $.mobile.loader.prototype.options.html = "";
// });
     


  var config = {
    apiKey: "AIzaSyAs6OFI0xWhlRNRmo2MBdUcl56IIj1MCQw",
    // authDomain: "mobiledb-5a48f.firebaseapp.com",
    databaseURL: "https://mobiledb-5a48f.firebaseio.com",
    projectId: "mobiledb-5a48f",
    storageBucket: "mobiledb-5a48f.appspot.com",
    messagingSenderId: "462522093357"
  };
  firebase.initializeApp(config);
  var firestore = firebase.firestore();
  var auth = firebase.auth();

  //firestore.settings({timestampinInSnapshots: true});

  // const docRef = firestore.doc("samples/sandwhichdata");
  
  // const firstname = document.querySelector("#firstname");
  // const lastname = document.querySelector("#lastname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const saveButton = document.querySelector("#signup");



    // const firstnameSave=firstname.value;
    // const lastnameSave=lastname.value;
    const emailSave=email.value;
    const passwordSave=password.value;

    // console.log("i am going to save"+ firstnameSave+"to Firebase");
    // firestore.collection("students").add({
    //     firstname:firstnameSave,
    //     lastname:lastnameSave,
    //     email:emailSave,
    //     password:passwordSave
    // }).then(function(){
    //     console.log("saved");
    //     window.location.href="#page1";

        firebase.auth().createUserWithEmailAndPassword(emailSave,passwordSave).then(function(){
          console.log("go");
        })

        .catch(function(error) {
          // Handle Errors here.
          alert("failed");
          // ...
        });

}
//     }).catch(function(){
//         console.log("error");
//     })

    
// }

// function give(){
//   var config = {
//     apiKey: "AIzaSyAs6OFI0xWhlRNRmo2MBdUcl56IIj1MCQw",
//     authDomain: "mobiledb-5a48f.firebaseapp.com",
//     databaseURL: "https://mobiledb-5a48f.firebaseio.com",
//     projectId: "mobiledb-5a48f",
//     storageBucket: "mobiledb-5a48f.appspot.com",
//     messagingSenderId: "462522093357"
//   };
//   firebase.initializeApp(config);
//   var firestore = firebase.firestore();

//   const
// }
