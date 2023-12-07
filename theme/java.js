var $pred;
var $perso;
let ThemesPred = ["DARK", "Base", "Enfant", "XMAS"];




$(document).ready(function() {
    $pred = $("#Pre");
    $perso = $("#Perso");
    themepred();
    
    $pred.css("display","none");
    $perso.css("display","none");
    $('input[type="radio"]').on('click', function() {
        var valeurSelectionnee = $('input[name="options"]:checked').val();
        // console.log("Bouton cliqué : " + valeurSelectionnee);
        if(valeurSelectionnee=="Pre"){
        	$perso.css("display","none");
        	$pred.css("display","block");
        }else if (valeurSelectionnee == "Perso") {
        	$pred.css("display","none");
        	$perso.css("display","block");
        }
    });
});

function themepred(){
    for (var i = 0; i<ThemesPred.length; i++) {
        var radioElement = $("<input>").attr({
            type: "radio",
            id: "radio"+i,
            name: "Thème",
            value: ThemesPred[i]
        });
        var labelElement = $("<label>").attr("for", "radio" + i).text(ThemesPred[i]);
        $pred.append(radioElement, labelElement, "<br>");
    }
}


