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
/*Store all url parameters into a hash*/
function getAllUrlParametersHash(){
	var hash = {};
	for(var i = 0; i < location.search.replace('?','').split('&').length; i++) {
		hash[location.search.replace('?','').split('&')[i].split('=')[0]] = location.search.replace('?','').split('&')[i].split('=')[1];
	}
	return hash;
}
/*Store all url parameters into a array of objects*/
function getAllUrlParametersArray() {
	var array = [];
		for(var i = 0; i < location.search.replace('?','').split('&').length; i++) {
		var hash = {};
		hash[location.search.replace('?','').split('&')[i].split('=')[0]] = location.search.replace('?','').split('&')[i].split('=')[1];
		array[i] = hash;
	}
	return array;
}
/*Get the value of a single url Parameter */
function urlParameterSearch(par) {
	var foo = getAllUrlParametersHash();
	return foo[par];
}