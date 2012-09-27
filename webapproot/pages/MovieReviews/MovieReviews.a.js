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

MovieReviews.widgets = {
reviewsSVar: ["wm.ServiceVariable", {"operation":"RottenTomatoesReviews","service":"xhrService"}, {}, {
input: ["wm.ServiceInput", {"type":"RottenTomatoesReviewsInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"4s6y7rw49p47zepc23vgdcau\"","targetProperty":"apikey"}, {}],
wire1: ["wm.Wire", {"expression":"15","targetProperty":"limit"}, {}],
wire2: ["wm.Wire", {"expression":"\"top_critic\"","targetProperty":"review_type"}, {}],
wire3: ["wm.Wire", {"expression":"${movieIDVar.dataValue} + \"/reviews.json\"","targetProperty":"movies"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"list1","targetProperty":"loadingDialog"}, {}]
}]
}],
movieIDVar: ["wm.Variable", {"type":"NumberData"}, {}],
movieIDVarDataSet: ["wm.Property", {"bindSource":undefined,"bindTarget":1,"property":"movieIDVar.dataSet","type":"RottenTomatoesMovie"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
list1: ["wm.List", {"_classes":{"domNode":["MobileListStyle"]},"border":"0","columns":[{"show":true,"field":"critic","title":"Critic","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"date","title":"Date","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"freshness","title":"Freshness","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"publication","title":"Publication","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"quote","title":"Quote","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"links.review","title":"Links.review","width":"100%","align":"left","formatFunc":"wm_link_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRow' style='float:right'>\" + ${date} + \"</div>\"\n+ \"<div class='MobileRowTitle'>\" + ${critic} + \"</div>\"\n+ \"<div class='MobileRow'>Freshness: \" + ${freshness} + \"</div>\"\n+ \"<div class='MobileRow'>Publication: \" + ${publication} + \"</div>\"\n+ \"<div class='MobileRow Quote'>\" + ${quote} + \"</div>\"","isCustomField":true,"mobileColumn":true},{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}],"headerVisible":false,"height":"100%","margin":"0","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false}, {"onSelect":"list1Select"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reviewsSVar.reviews","targetProperty":"dataSet"}, {}]
}]
}]
}]
};

MovieReviews.prototype._cssText = '';
MovieReviews.prototype._htmlText = '';