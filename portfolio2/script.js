//acceuil -> présentation -> parcours -> compétences -> expérience

a = document.getElementById('home').addEventListener('click', (event) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

const dMDP = "SIO2CHARTREUX"

$( document ).ready(function() {
  $(".parcours-box").removeClass("parcours-active");
  
  
  $(".round1").on("click",function(){
     $(".tl-round").css("background-color","rgb(85, 69, 69)");
     $(".round1").css("background-color","blue");
     $(".parcours-active").removeClass("parcours-active");
     $(".parc1").addClass("parcours-active");
     $(".timeline-indicator").css("width","0");
  })
  
  $(".round2").on("click",function(){
     $(".tl-round").css("background-color","rgb(85, 69, 69)");
     $(".round1").css("background-color","blue");
     $(".round2").css("background-color","blue");
     $(".parcours-active").removeClass("parcours-active");
     $(".parc2").addClass("parcours-active");
     $(".timeline-indicator").css("width","240");
  })
  
  $(".round3").on("click",function(){
     $(".tl-round").css("background-color","rgb(85, 69, 69)");
     $(".round1").css("background-color","blue");
     $(".round2").css("background-color","blue");
     $(".round3").css("background-color","blue");
     $(".parcours-active").removeClass("parcours-active");
     $(".parc3").addClass("parcours-active");
     $(".timeline-indicator").css("width","480");
  })
  
  $(".round4").on("click",function(){
     $(".tl-round").css("background-color","rgb(85, 69, 69)");
     $(".round1").css("background-color","blue");
     $(".round2").css("background-color","blue");
     $(".round3").css("background-color","blue");
     $(".round4").css("background-color","blue");
     $(".parcours-active").removeClass("parcours-active");
     $(".parc4").addClass("parcours-active");
     $(".timeline-indicator").css("width","720");
  })
  
});

const zoneCV = document.getElementById("CV").addEventListener('click', async (event) => {
      mdp = await prompt("Entrez le mot de passe pour accéder aux docmuemnts: ")

      if (mdp != dMDP) {
         window.alert("Mot de passe éronné, vous ne pouvez pas accéder aux fichiers")
      } else {
         window.location.href = 'CV_ADAM_Emilien.pdf'
      }
   })

const zoneSynth = document.getElementById("tablSynth").addEventListener('click', async (event) => {
   mdp = await prompt("Entrez le mot de passe pour accéder aux docmuemnts: ")

   if (mdp != dMDP) {
      window.alert("Mot de passe éronné, vous ne pouvez pas accéder aux fichiers")
   } else {
      window.location.href = 'E4_-_Tableau_de_synthese.pdf'
   }
})