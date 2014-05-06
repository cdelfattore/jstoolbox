/* My function, slow way to get cookies */
function slowGetCookie(name) {
	var nameIndex = document.cookie.indexOf(name);
	var val = document.cookie.substring(nameIndex, document.cookie.indexOf(';',nameIndex));
	return val.substring(val.indexOf('=')+1);
}
/* From w3schools, fast way to grab cookies */
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "";
}