dojo.declare("MovieDetails", wm.Page, {
	"preferredDevice": "phone",
    start: function() {
    },

    imdbEditor1ReadOnlyNodeFormat: function(inSender, inValue) {
        return "<a target='imdb' href='http://m.imdb.com/title/tt" + inValue + "/'>Open IMDB</a>";
    },
    abridged_castOneToMany1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        if (!inSetByCode) {
            window.open("http://www.flixster.com/celebrity/" + inSender.selectedItem.getValue("id") + "/");
        }
    },
    onShow: function() {
        wm.onidle(this, function() {
            main.titleLabel.setCaption(this.dataForm1.dataSet.getValue("title"));
        });
    },
    _end: 0
});