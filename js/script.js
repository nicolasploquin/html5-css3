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
        var monFormulaire = document.querySelector(".mon-formulaire.animation");
        if(monFormulaire){
            monFormulaire.addEventListener("submit", function(event) {
                //event.preventDefault(); // annule l'envoi par le navigateur et donc le rechargement de la page
                event.target.classList.add("envoi");
            },false);
        }
            
        
        
        // ----- Vidéo player
        let video = document.querySelector(".video-player video");
        video.volume = 0.05;
        video.muted = true;
        
        let btnPlay = document.querySelector("#btn-play");
        let btnPlaySpeed = document.querySelector("#btn-play-speed");
        let btnPause = document.querySelector("#btn-pause");
        let btnStop = document.querySelector("#btn-stop");
        let btnRepeat = document.querySelector("#btn-repeat");
        let btnReplay = document.querySelector("#btn-replay");
        let btnMute = document.querySelector("#btn-mute");
        
        btnPlay.addEventListener("click", (event) => {  
            video.play(); // pause()
        });
        btnPlaySpeed.addEventListener("click", (event) => { 
            video.playbackRate = 2;
            video.play(); // pause()
        });
        btnPause.addEventListener("click", (event) => { 
            video.pause(); 
        }); 
        btnStop.addEventListener("click", (event) => { 
            video.pause();
            video.currentTime = 0; 
        }); 
        
        // btnRepeat.style.backgroundColor = "#999";
        btnRepeat.classList.add("inactive");
        btnRepeat.addEventListener("click", (event) => { 
            video.loop = !video.loop;
            btnRepeat.classList.toggle("inactive");
        }); 
        
        btnReplay.addEventListener("click", (event) => { 
            video.currentTime = video.currentTime - 10; 
        }); 
        
        btnMute.classList.add("inactive");
        btnMute.addEventListener("click", (event) => { 
            let icon = btnMute.querySelector("i");
            video.muted = !video.muted;
            btnMute.classList.toggle("inactive");
            icon.textContent = video.muted ? "volume_off" : "volume_up";
        }); 
        
        // ----- Entête réduite
        var entete = document.querySelector("header");
        var btnReduire = document.querySelector("header button");
        
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
                
        /* --- svg --- */
        document.querySelector('svg circle').addEventListener("click",function(event){
            event.target.setAttribute("r", parseInt(event.target.getAttribute("r")) + 5);

        });
        

    })();
    