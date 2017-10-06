(function(){
    "use strict";

    var titre = document.querySelector("header h1");
    titre.addEventListener("click",titreClick,false);
        
    function titreClick(event){	
        
        event.currentTarget.classList.toggle("js");
    //	event.currentTarget.style.color = "#0033CC";
        
        event.currentTarget.textContent = "HTML5, CSS3 & JavaScript"
    }


    document.querySelector(".mon-formulaire")
        .addEventListener("submit", event => {
            event.preventDefault();
            event.target.classList.add("envoi"); 
        },false);
        
    document.querySelector("#animPlay").addEventListener("click",function(event){
        var cube = document.querySelector("#cube3D");
        cube.style.webkitAnimationName = "cube-anim"; 
        cube.style.animationName = "cube-anim"; 
    },false);
    document.querySelector("#animPause").addEventListener("click",function(event){
        var cube = document.querySelector("#cube3D");	
        cube.style.animationName = undefined; 
        cube.style.webkitAnimationName = undefined; 
    },false);

        // --------- Validation Formulaire --------------------------------

        // ---- Champ nom ---------
        var erreurNom = "Le champ nom est obligatoire.";
        var champsNom = document.querySelector("#nom");
        champsNom.addEventListener("input", validerNom,false);
        function validerNom(event){
            var elemInput = event.target;
            if (elemInput.value.trim() === ""){
                elemInput.setCustomValidity(erreurNom);
            }else{
                elemInput.setCustomValidity("");
            }
        }
        
        
        // ---- Vérification E-mail
        var email = document.querySelector("#email");
        email.addEventListener("input", verificationEmails,false);
        var verifEmail = document.querySelector("#verifEmail");
        verifEmail.addEventListener("input", verificationEmails,false);

        function verificationEmails(event) {
            if(email.value.trim() === verifEmail.value.trim()){
                verifEmail.setCustomValidity("");
            }else{
                verifEmail.setCustomValidity("Vous devez saisir deux fois la même adresse e-mail.");
            }
        }

        // ---- Animation Envoi
        var monFormulaire = document.querySelector(".mon-formulaire");
        monFormulaire.addEventListener("submit", function(event) {
            event.preventDefault(); // annule l'envoi par le navigateur et donc le rechargement de la page
            event.target.classList.add("envoi");
        },false);

        
        
        // ----- Vidéo player
        var video = document.querySelector("video");
        var play = document.querySelector("#play");
        var pause = document.querySelector("#pause");
        var stop = document.querySelector("#stop");
        var x1 = document.querySelector("#x1");
        var x2 = document.querySelector("#x2");
        var temps = document.querySelector("#temps");
        
        play.addEventListener("click",function(){
            video.play();
        },false);
        pause.addEventListener("click",function(){
            video.pause();
        },false);
        stop.addEventListener("click",function(){
            video.pause();
            video.currentTime = 0;
        },false);
        x1.addEventListener("click",function(){
            video.playbackRate = 1;
        },false);
        x2.addEventListener("click",function(){
            video.playbackRate = 2;
        },false);
        video.addEventListener("timeupdate",function(){
            temps.textContent = new Date((video.currentTime-3600)*1000).toLocaleTimeString();
        },false);

        // ----- Entête réduite
        var entete = document.querySelector("header");
        var btnReduire = document.querySelector("header nav button");
        
        btnReduire.addEventListener("click",function(){
            entete.classList.toggle("reduit");
        });
        
        
        // ----- Formulaire

        var formInscription = document.querySelector('#form-inscription');
        
        var btnSubmit = document.querySelector('#form-inscription [type="submit"]');
        var inputNom = document.querySelector('#form-inscription [name="nom"]');
        var inputPrenom = document.querySelector('#form-inscription [name="prenom"]');
        inputNom.value = inputNom.value.toUpperCase();
        
        formInscription.addEventListener("input",function(){
            // btnSubmit.disabled = ! formInscription.checkValidity();
        });
        
        inputNom.addEventListener("input",upperSaisie);
        inputPrenom.addEventListener("input",upperSaisie);

        function upperSaisie(event){
            var input = event.target;
            input.value = input.value.toUpperCase();
        }

        var listeTitre = document.querySelectorAll('h2');
        for(var i = 0 ; i < listeTitre.length ; i++){
            listeTitre[i].addEventListener("",maFonction);
        }
        



    })();
    