var addBehavior, showPic;

addBehavior = function(){
	var gallery = document.getElementById("gallery");
	var links = gallery.getElementByTagName("a");

	for (var i = 0; i < links.length; i++){
		link[i]onclick = function(){
			showPic(this);
			return false;
		}
	}
}

showPic = function(pic){
	var source = pic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");

	placeholder.setAttribute("title");

	var text = pic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;

}

addBehavior();