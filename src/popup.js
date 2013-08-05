Popup = (function() {

	function createElement(tag, id, content, attributes) {
		var element = document.createElement(tag);
		element.id = id;
		element.innerHTML = content || "";
		for (var attr in attributes) {
			element.setAttribute(attr, attributes[attr]);
		}
		return element;
	}
	
	this.create = function(title, message) {
		var popup = createElement("div", "popupEl");
		popup.appendChild(createElement("div", "popupTitle", title));
		popup.appendChild(createElement("div", "popupMessage", message));
		popup.appendChild(createElement("span", "popupClose", "OK"));
		var popupWrapper = createElement("div", "popupWrapper");
		popupWrapper.appendChild(popup);
		return popupWrapper;
	}
	
	return this;
})();

jQuery.createPopup = function(title, message) {
	var popup = Popup.create(title, message);
	document.body.appendChild(popup);
	var wrapper = $("#popupWrapper");
	var wrapperHeight = wrapper.height();
	var wrapperWidth = wrapper.width();
	$("#popupEl").css({
		"opacity": "0",
		"position": "absolute",
		"left": (wrapperWidth / 2 - 200) + "px",
		"top": (wrapperHeight / 2 - 100) + "px"
	}).fadeTo("fast", 1);
	$("#popupClose").click(function() {
		$("#popupEl").fadeOut("fast", function() {
			document.body.removeChild(popup);
		});
	});
}