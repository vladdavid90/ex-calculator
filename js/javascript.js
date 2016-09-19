// Se creaza 2 stringuri, unul cu numere unul cu operatorii dintre ei.
var numere = [],
	operatori = [],
	op = ["+","-", "*", "/","="];
var numarCompus = 0;
var ecuatie = [];
var rez;
function add (a) {
	if(a===op[4] || a===String.fromCharCode(13)){ //daca se apasa butonul "="
		
		ecuatie=[rezultat()];
		console.log("ecuatie", ecuatie);
		document.getElementById("ecran").innerHTML = ecuatie.join("");
	} else {
		if (a===op[0] || a===op[1] || a===op[2] ||a===op[3]){ //daca se apasa un buton de operatori "+", "-", "*" sau "/"

			
			if(ecuatie[ecuatie.length-1]===op[0] || ecuatie[ecuatie.length-1]===op[1] || ecuatie[ecuatie.length-1]===op[2] || ecuatie[ecuatie.length-1]===op[3]){ //cercetez daca a fost deja un operator pentru a evita erori
				ecuatie[ecuatie.length-1]=a;
				console.log(ecuatie);
				document.getElementById("ecran").innerHTML = ecuatie.join("");
			} else{
				ecuatie.push(a);
				console.log("ecuatie",ecuatie);
				document.getElementById("ecran").innerHTML = ecuatie.join("");
				}
		}	else { // daca se apasa un buton de cifre
				if(ecuatie[ecuatie.length-1]=== undefined ||ecuatie[ecuatie.length-1]===op[0] || ecuatie[ecuatie.length-1]===op[1] || ecuatie[ecuatie.length-1]===op[2] || ecuatie[ecuatie.length-1]===op[3]) { // verifica daca se vrea a se introduce un numar format din mai multe cifre
					ecuatie.push(a);
					console.log("ecuatie",ecuatie);
					document.getElementById("ecran").innerHTML = ecuatie.join("");
				}else {
					var string1=String(ecuatie[ecuatie.length-1]);
					var string2=String(a);
					console.log(string1, string2);
					ecuatie[ecuatie.length-1] = string1.concat(string2);	
					
					document.getElementById("ecran").innerHTML = ecuatie.join("");
				}
			
			}
	}
}

function rezultat(){
	for(var i=0;i<ecuatie.length;i++){
		if(i==0){
			rez=1;
			rez=rez*ecuatie[i];
		}else {
		rez = rez + ecuatie[i];
		}
	}
	
	return eval(rez);
}



function clearC (){
	ecuatie = [];
	operatori = [];
	rez = 0;
	document.getElementById("ecran").innerHTML = "...";
}




function key(event){
	var x =event.which;
	add (String.fromCharCode(x));
}

function in_array( arr, val ) {
    for( var i = 0; i < arr.length; i++) {
        if( arr[ i ] == val ) {
            return true;
        }
    }
}
