dojo.declare("MovieReviews", wm.Page, {
	"preferredDevice": "phone",
    start: function() {
        wm.onidle(this, function() {
            this.reviewsSVar.update();
        });
    },

    list1Select: function(inSender, inItem) {
        window.open(inSender.selectedItem.getValue("links.review"), "reviewWindow");
        inSender.deselectAll();
    },
    _end: 0
});