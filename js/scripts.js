function openNav() {

var x = document.getElementById("navigation");

if(x.className === "navigation"){

	x.className += " menujs";
	document.getElementById("treslinhas-icon").innerHTML = "&Cross;";
} else {
	x.className = "navigation";
	document.getElementById("treslinhas-icon").innerHTML = "&#9776;";

}


}