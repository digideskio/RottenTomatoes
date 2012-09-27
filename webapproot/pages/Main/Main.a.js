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

Main.widgets = {
boxOfficeSVar: ["wm.ServiceVariable", {"operation":"RottenTomatoesBoxOffice","service":"xhrService","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"RottenTomatoesBoxOfficeInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":"20","targetProperty":"limit"}, {}],
wire: ["wm.Wire", {"expression":"\"4s6y7rw49p47zepc23vgdcau\"","targetProperty":"apikey"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"mainPageContainer","targetProperty":"loadingDialog"}, {}]
}]
}],
inTheatersSVar: ["wm.ServiceVariable", {"operation":"RottenTomatoesInTheaters","service":"xhrService"}, {"onSuccess":"inTheatersSVarSuccess"}, {
input: ["wm.ServiceInput", {"type":"RottenTomatoesInTheatersInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"4s6y7rw49p47zepc23vgdcau\"","targetProperty":"apikey"}, {}],
wire1: ["wm.Wire", {"expression":"20","targetProperty":"page_limit"}, {}],
wire2: ["wm.Wire", {"expression":"1","targetProperty":"page"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"mainPageContainer","targetProperty":"loadingDialog"}, {}]
}]
}],
dvdSVar: ["wm.ServiceVariable", {"operation":"RottenTomatoesDVDs","service":"xhrService"}, {"onSuccess":"dvdSVarSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"mainPageContainer","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"RottenTomatoesDVDsInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"4s6y7rw49p47zepc23vgdcau\"","targetProperty":"apikey"}, {}],
wire1: ["wm.Wire", {"expression":"20","targetProperty":"page_limit"}, {}],
wire2: ["wm.Wire", {"expression":"1","targetProperty":"page"}, {}]
}]
}]
}],
listSelectedItem: ["wm.Variable", {"type":"RottenTomatoesMovie"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"mainPageContainer.listSelectedItem","targetProperty":"dataSet"}, {}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
layers1: ["wm.Layers", {"height":"40px","styles":{"backgroundGradient":{"direction":"vertical","startColor":"#3a3a3e","endColor":"#a7aab4","colorStop":57}}}, {}, {
menuLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
toggleButtonPanel1: ["wm.ToggleButtonPanel", {"horizontalAlign":"left","manageHistory":true,"manageURL":true,"margin":"0,1,0,0","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"boxOfficeButton","targetProperty":"currentButton"}, {}]
}],
boxOfficeButton: ["wm.Button", {"border":"0,1,0,0","caption":"Box Office","height":"100%","margin":"0","width":"100%"}, {"onclick":"boxOfficeButtonClick"}],
inTheatersButton: ["wm.Button", {"border":"0,1,0,0","caption":"In Theaters","height":"100%","margin":"0","width":"100%"}, {"onclick":"inTheatersButtonClick"}],
dvdButton: ["wm.Button", {"border":"0","borderColor":"#ABB8CF","caption":"DVD","height":"100%","margin":"0","width":"100%"}, {"onclick":"dvdButtonClick"}]
}]
}],
titleBar: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":""},"themeStyleType":"","verticalAlign":"top"}, {}, {
backButton: ["wm.MobileIconButton", {"border":"0","direction":"back","margin":"4"}, {"onclick":"app._onBack"}],
titleLabel: ["wm.Label", {"_classes":{"domNode":["PageTitle"]},"height":"100%","padding":"4","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"listSelectedItem.title","targetProperty":"caption"}, {}]
}]
}]
}]
}],
mainPageContainer: ["wm.PageContainer", {"deferLoad":true,"pageName":"MovieList","styles":{"backgroundGradient":{"direction":"vertical","startColor":"#fff","endColor":"#bdbfc6","colorStop":89}},"subpageEventlist":{"onListLayerShow":"listLayer.onShow","onDetailsLayerShow":"detailsLayer.onShow"},"subpageMethodlist":{},"subpageProplist":{"listDataSet":"list.dataSet","listSelectedItem":"list.selectedItem"}}, {"onDetailsLayerShow":"titleBar","onListLayerShow":"menuLayer"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"boxOfficeSVar.movies","targetProperty":"listDataSet"}, {}]
}]
}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';