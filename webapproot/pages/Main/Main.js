dojo.declare("Main", wm.Page, {
    start: function() {
        if (!wm.isMobile) window.location.search += "&wmmobile=phone";
    },
    "preferredDevice": "phone",

    inTheatersButtonClick: function(inSender) {
        if (this.inTheatersSVar.isEmpty()) {
            this.inTheatersSVar.update();
        } else {
            this.mainPageContainer.setProp("listDataSet", this.inTheatersSVar.getValue("movies"));
        }
    },
   
    boxOfficeButtonClick: function(inSender) {
        this.mainPageContainer.setProp("listDataSet", this.boxOfficeSVar.getValue("movies"));
    },
    inTheatersSVarSuccess: function(inSender, inDeprecated) {
        this.mainPageContainer.setProp("listDataSet", this.inTheatersSVar.getValue("movies"));        
    },
    dvdButtonClick: function(inSender) {
        
        if (this.dvdSVar.isEmpty()) {
            this.dvdSVar.update();
        } else {
            this.mainPageContainer.setProp("listDataSet", this.dvdSVar.getValue("movies"));
        }
    },
    dvdSVarSuccess: function(inSender, inDeprecated) {
        this.mainPageContainer.setProp("listDataSet", this.dvdSVar.getValue("movies"));
    },
    _end: 0
});