wm.JsonRpcService.smdCache['runtimeService.smd'] = {
	"methods": [{
		"name": "delete",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToDelete",
			"type": "java.lang.Object"
		}],
		"returnType": null
	}, {
		"name": "echo",
		"operationType": null,
		"parameters": [{
			"name": "contents",
			"type": "java.lang.String"
		}, {
			"name": "contentType",
			"type": "java.lang.String"
		}, {
			"name": "fileName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.server.DownloadResponse"
	}, {
		"name": "getInternalRuntime",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.server.InternalRuntime"
	}, {
		"name": "getLocalHostIP",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getProperty",
		"operationType": null,
		"parameters": [{
			"name": "instance",
			"type": "java.lang.Object"
		}, {
			"name": "type",
			"type": "java.lang.String"
		}, {
			"name": "propertyName",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.Object"
	}, {
		"name": "getRuntimeAccess",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.RuntimeAccess"
	}, {
		"name": "getServiceEventNotifier",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
	}, {
		"name": "getServiceManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.ServiceManager"
	}, {
		"name": "getServiceWire",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.service.ServiceWire"
	}, {
		"name": "getSessionId",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getTypeManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.TypeManager"
	}, {
		"name": "insert",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToInsert",
			"type": "java.lang.Object"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}, {
		"name": "read",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "instance",
			"type": "java.lang.Object"
		}, {
			"name": "propertyOptions",
			"type": "com.wavemaker.runtime.service.PropertyOptions"
		}, {
			"name": "pagingOptions",
			"type": "com.wavemaker.runtime.service.PagingOptions"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}, {
		"name": "setInternalRuntime",
		"operationType": null,
		"parameters": [{
			"name": "internalRuntime",
			"type": "com.wavemaker.runtime.server.InternalRuntime"
		}],
		"returnType": null
	}, {
		"name": "setRuntimeAccess",
		"operationType": null,
		"parameters": [{
			"name": "runtimeAccess",
			"type": "com.wavemaker.runtime.RuntimeAccess"
		}],
		"returnType": null
	}, {
		"name": "setServiceEventNotifier",
		"operationType": null,
		"parameters": [{
			"name": "serviceEventNotifier",
			"type": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
		}],
		"returnType": null
	}, {
		"name": "setServiceManager",
		"operationType": null,
		"parameters": [{
			"name": "serviceManager",
			"type": "com.wavemaker.runtime.service.ServiceManager"
		}],
		"returnType": null
	}, {
		"name": "setTypeManager",
		"operationType": null,
		"parameters": [{
			"name": "typeManager",
			"type": "com.wavemaker.runtime.service.TypeManager"
		}],
		"returnType": null
	}, {
		"name": "shiftDeserializedProperties",
		"operationType": null,
		"parameters": [{
			"name": "index",
			"type": "int"
		}],
		"returnType": null
	}, {
		"name": "update",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToUpdate",
			"type": "java.lang.Object"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}],
	"serviceType": "JSON-RPC",
	"serviceURL": "runtimeService.json"
};
wm.JsonRpcService.smdCache['wavemakerService.smd'] = {
	"methods": [{
		"name": "echo",
		"operationType": null,
		"parameters": [{
			"name": "contents",
			"type": "java.lang.String"
		}, {
			"name": "contentType",
			"type": "java.lang.String"
		}, {
			"name": "fileName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.server.DownloadResponse"
	}, {
		"name": "getInternalRuntime",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.server.InternalRuntime"
	}, {
		"name": "getLocalHostIP",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getRuntimeAccess",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.RuntimeAccess"
	}, {
		"name": "getServerTimeOffset",
		"operationType": null,
		"parameters": null,
		"returnType": "int"
	}, {
		"name": "getServiceEventNotifier",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
	}, {
		"name": "getServiceManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.ServiceManager"
	}, {
		"name": "getServiceWire",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.service.ServiceWire"
	}, {
		"name": "getSessionId",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getTypeManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.TypeManager"
	}, {
		"name": "remoteRESTCall",
		"operationType": null,
		"parameters": [{
			"name": "remoteURL",
			"type": "java.lang.String"
		}, {
			"name": "params",
			"type": "java.lang.String"
		}, {
			"name": "method",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.String"
	}, {
		"name": "setInternalRuntime",
		"operationType": null,
		"parameters": [{
			"name": "internalRuntime",
			"type": "com.wavemaker.runtime.server.InternalRuntime"
		}],
		"returnType": null
	}, {
		"name": "setRuntimeAccess",
		"operationType": null,
		"parameters": [{
			"name": "runtimeAccess",
			"type": "com.wavemaker.runtime.RuntimeAccess"
		}],
		"returnType": null
	}, {
		"name": "setServiceEventNotifier",
		"operationType": null,
		"parameters": [{
			"name": "serviceEventNotifier",
			"type": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
		}],
		"returnType": null
	}, {
		"name": "setServiceManager",
		"operationType": null,
		"parameters": [{
			"name": "serviceManager",
			"type": "com.wavemaker.runtime.service.ServiceManager"
		}],
		"returnType": null
	}, {
		"name": "setTypeManager",
		"operationType": null,
		"parameters": [{
			"name": "typeManager",
			"type": "com.wavemaker.runtime.service.TypeManager"
		}],
		"returnType": null
	}],
	"serviceType": "JSON-RPC",
	"serviceURL": "waveMakerService.json"
};
wm.types = {
	"types": {
		"boolean": {
			"internal": true,
			"primitiveType": "Boolean"
		},
		"byte": {
			"internal": true,
			"primitiveType": "Number"
		},
		"char": {
			"internal": true,
			"primitiveType": "String"
		},
		"double": {
			"internal": true,
			"primitiveType": "Number"
		},
		"float": {
			"internal": true,
			"primitiveType": "Number"
		},
		"int": {
			"internal": true,
			"primitiveType": "Number"
		},
		"java.lang.Boolean": {
			"internal": false,
			"primitiveType": "Boolean"
		},
		"java.lang.Byte": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Character": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.Double": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Float": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Integer": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Long": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Short": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.String": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.StringBuffer": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.math.BigDecimal": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.math.BigInteger": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.sql.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Time": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Timestamp": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.util.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"long": {
			"internal": true,
			"primitiveType": "Number"
		},
		"short": {
			"internal": true,
			"primitiveType": "Number"
		}
	}
};
wm.Application.themeData['wm_default'] = {"wm.ToggleButton":{"border":"1","borderColor":"#333333"},"wm.ToggleButtonPanel":{"border":"1","borderColor":"#333333"},"wm.Button":{"border":"1","borderColor":"#333333","height":"32px"},"wm.Layout":{"border":"0","borderColor":"#333333"},"wm.Bevel":{"bevelSize":"10","border":"1","borderColor":"#333333"},"wm.Splitter":{"bevelSize":"4","border":"1","borderColor":"#333333"},"wm.AccordionDecorator":{"captionBorder":"1","captionBorderColor":"#333333"},"wm.AccordionLayers":{"border":"0","borderColor":"#333333","captionBorder":"2","layerBorder":"1","captionHeight":"30"},"wm.FancyPanel":{"margin":"2","border":"0","borderColor":"#999999","innerBorder":"2","labelHeight":"24"},"wm.TabLayers":{"layersType":"Tabs","margin":"0,2,0,2","clientBorder":"1","border":"0","clientBorderColor":"#999999","headerHeight":"29px","borderColor":"#999999","mobileHeaderHeight":"38px"},"wm.WizardLayers":{"margin":"0,2,0,2","border":"0","clientBorder":"1","clientBorderColor":"#333333"},"wm.Layer":{},"wm.Dialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","containerClass":"MainContent","titlebarHeight":"22"},"wm.GenericDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","containerClass":"MainContent"},"wm.RichTextDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","containerClass":"MainContent"},"wm.PageDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","noBevel":true,"containerClass":"MainContent"},"wm.DesignableDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","containerClass":"MainContent"},"wm.DojoMenu":{"padding":"0","border":"0","borderColor":"#333333"},"wm.List":{"margin":"0,2,0,2","border":"2","borderColor":"#333333"},"wm.dijit.ProgressBar":{"border":"0","borderColor":"#333333"},"wm.RichText":{"border":"0","borderColor":"#333333"},"wm.RoundedButton":{"border":"0","borderColor":"#333333"},"wm.DataGrid":{"border":"2","borderColor":"#333333"},"wm.Label":{},"wm.Picture":{},"wm.Spacer":{},"wm.Layers":{"border":"0"},"wm.PageContainer":{},"wm.Panel":{"borderColor":"#333333","border":"0"},"wm.CheckBoxEditor":{},"wm.CurrencyEditor":{},"wm.Text":{"border":"0"},"wm.SelectMenu":{"border":"0"},"wm.dijit.Calendar":{},"wm.DojoGrid":{"border":"1","borderColor":"#999999"},"wm.Control":{"borderColor":"#333333"},"wm.BusyButton":{"border":"1","borderColor":"#333333"},"wm.Checkbox":{"border":"0"},"wm.ColorPicker":{"border":"0"},"wm.Currency":{"border":"0"},"wm.Date":{"border":"0"},"wm.Number":{"border":"0"},"wm.RadioButton":{"border":"0"},"wm.Slider":{"border":"0"},"wm.LargeTextArea":{"border":"0"},"wm.Time":{"border":"0"},"wm.WidgetsJsDialog":{"containerClass":"MainContent","border":"1","borderColor":"#333333"},"wm.FileUploadDialog":{"containerClass":"MainContent","border":"1","borderColor":"#333333"},"wm.ColorPickerDialog":{"border":"1","borderColor":"#333333"},"wm.MainContentPanel":{"border":"1","borderColor":"#ffffff"},"wm.HeaderContentPanel":{"border":"1","borderColor":"#888888"},"wm.EmphasizedContentPanel":{"border":"1","borderColor":"#333333"},"wm.WidgetList":{},"wm.PopupMenuButton":{}};
dojo.declare("RottenTomatoes", wm.Application, {
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"i18n": false, 
	"isSecurityEnabled": false, 
	"main": "Main", 
	"manageHistory": true, 
	"manageURL": false, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "", 
	"projectSubVersion": "Alpha3", 
	"projectVersion": 1, 
	"saveCounter": 133, 
	"showIOSPhoneGapBackButton": false, 
	"studioVersion": "6.5.0.M4", 
	"tabletMain": "", 
	"theme": "wm_default", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		"RottenTomatoesBoxOfficeResponse.links": ["wm.TypeDefinition", {}, {}, {
			self: ["wm.TypeDefinitionField", {"fieldName":"self"}, {}],
			alternate: ["wm.TypeDefinitionField", {"fieldName":"alternate"}, {}]
		}], 
		"RottenTomatoesBoxOfficeResponse.movies.abridged_cast": ["wm.TypeDefinition", {}, {}, {
			name: ["wm.TypeDefinitionField", {"fieldName":"name"}, {}],
			id: ["wm.TypeDefinitionField", {"fieldName":"id"}, {}],
			characters: ["wm.TypeDefinitionField", {"fieldName":"characters","fieldType":"StringData","isList":true}, {}]
		}], 
		"RottenTomatoesBoxOfficeResponse.movies.alternate_ids": ["wm.TypeDefinition", {}, {}, {
			imdb: ["wm.TypeDefinitionField", {"fieldName":"imdb"}, {}]
		}], 
		"RottenTomatoesBoxOfficeResponse.movies.links": ["wm.TypeDefinition", {}, {}, {
			self: ["wm.TypeDefinitionField", {"fieldName":"self"}, {}],
			alternate: ["wm.TypeDefinitionField", {"fieldName":"alternate"}, {}],
			cast: ["wm.TypeDefinitionField", {"fieldName":"cast"}, {}],
			clips: ["wm.TypeDefinitionField", {"fieldName":"clips"}, {}],
			reviews: ["wm.TypeDefinitionField", {"fieldName":"reviews"}, {}],
			similar: ["wm.TypeDefinitionField", {"fieldName":"similar"}, {}]
		}], 
		"RottenTomatoesBoxOfficeResponse.movies.posters": ["wm.TypeDefinition", {}, {}, {
			thumbnail: ["wm.TypeDefinitionField", {"fieldName":"thumbnail"}, {}],
			profile: ["wm.TypeDefinitionField", {"fieldName":"profile"}, {}],
			detailed: ["wm.TypeDefinitionField", {"fieldName":"detailed"}, {}],
			original: ["wm.TypeDefinitionField", {"fieldName":"original"}, {}]
		}], 
		"RottenTomatoesBoxOfficeResponse.movies.ratings": ["wm.TypeDefinition", {}, {}, {
			critics_rating: ["wm.TypeDefinitionField", {"fieldName":"critics_rating"}, {}],
			critics_score: ["wm.TypeDefinitionField", {"fieldName":"critics_score","fieldType":"Number"}, {}],
			audience_rating: ["wm.TypeDefinitionField", {"fieldName":"audience_rating"}, {}],
			audience_score: ["wm.TypeDefinitionField", {"fieldName":"audience_score","fieldType":"Number"}, {}]
		}], 
		"RottenTomatoesBoxOfficeResponse.movies.release_dates": ["wm.TypeDefinition", {}, {}, {
			theater: ["wm.TypeDefinitionField", {"fieldName":"theater"}, {}]
		}], 
		"RottenTomatoesReviewsResponse.links": ["wm.TypeDefinition", {}, {}, {
			self: ["wm.TypeDefinitionField", {"fieldName":"self"}, {}],
			next: ["wm.TypeDefinitionField", {"fieldName":"next"}, {}],
			alternate: ["wm.TypeDefinitionField", {"fieldName":"alternate"}, {}],
			rel: ["wm.TypeDefinitionField", {"fieldName":"rel"}, {}]
		}], 
		"RottenTomatoesReviewsResponse.reviews": ["wm.TypeDefinition", {}, {}, {
			critic: ["wm.TypeDefinitionField", {"fieldName":"critic"}, {}],
			date: ["wm.TypeDefinitionField", {"fieldName":"date"}, {}],
			freshness: ["wm.TypeDefinitionField", {"fieldName":"freshness"}, {}],
			publication: ["wm.TypeDefinitionField", {"fieldName":"publication"}, {}],
			quote: ["wm.TypeDefinitionField", {"fieldName":"quote"}, {}],
			links: ["wm.TypeDefinitionField", {"fieldName":"links","fieldType":"RottenTomatoesReviewsResponse.reviews.links"}, {}]
		}], 
		"RottenTomatoesReviewsResponse.reviews.links": ["wm.TypeDefinition", {}, {}, {
			review: ["wm.TypeDefinitionField", {"fieldName":"review"}, {}]
		}], 
		RottenTomatoesBoxOfficeResponse: ["wm.TypeDefinition", {}, {}, {
			movies: ["wm.TypeDefinitionField", {"fieldName":"movies","fieldType":"RottenTomatoesMovie","isList":true}, {}],
			links: ["wm.TypeDefinitionField", {"fieldName":"links","fieldType":"RottenTomatoesBoxOfficeResponse.links"}, {}],
			link_template: ["wm.TypeDefinitionField", {"fieldName":"link_template"}, {}],
			field1: ["wm.TypeDefinitionField", {"fieldName":"field1"}, {}],
			field2: ["wm.TypeDefinitionField", {"fieldName":"total","fieldType":"Number"}, {}]
		}], 
		RottenTomatoesMovie: ["wm.TypeDefinition", {}, {}, {
			id: ["wm.TypeDefinitionField", {"fieldName":"id"}, {}],
			title: ["wm.TypeDefinitionField", {"fieldName":"title"}, {}],
			year: ["wm.TypeDefinitionField", {"fieldName":"year","fieldType":"Number"}, {}],
			mpaa_rating: ["wm.TypeDefinitionField", {"fieldName":"mpaa_rating"}, {}],
			runtime: ["wm.TypeDefinitionField", {"fieldName":"runtime","fieldType":"Number"}, {}],
			critics_consensus: ["wm.TypeDefinitionField", {"fieldName":"critics_consensus"}, {}],
			release_dates: ["wm.TypeDefinitionField", {"fieldName":"release_dates","fieldType":"RottenTomatoesBoxOfficeResponse.movies.release_dates"}, {}],
			ratings: ["wm.TypeDefinitionField", {"fieldName":"ratings","fieldType":"RottenTomatoesBoxOfficeResponse.movies.ratings"}, {}],
			synopsis: ["wm.TypeDefinitionField", {"fieldName":"synopsis"}, {}],
			posters: ["wm.TypeDefinitionField", {"fieldName":"posters","fieldType":"RottenTomatoesBoxOfficeResponse.movies.posters"}, {}],
			abridged_cast: ["wm.TypeDefinitionField", {"fieldName":"abridged_cast","fieldType":"RottenTomatoesBoxOfficeResponse.movies.abridged_cast","isList":true}, {}],
			alternate_ids: ["wm.TypeDefinitionField", {"fieldName":"alternate_ids","fieldType":"RottenTomatoesBoxOfficeResponse.movies.alternate_ids"}, {}],
			links: ["wm.TypeDefinitionField", {"fieldName":"links","fieldType":"RottenTomatoesBoxOfficeResponse.movies.links"}, {}]
		}], 
		RottenTomatoesReviewsResponse: ["wm.TypeDefinition", {}, {}, {
			total: ["wm.TypeDefinitionField", {"fieldName":"total","fieldType":"Number"}, {}],
			reviews: ["wm.TypeDefinitionField", {"fieldName":"reviews","fieldType":"RottenTomatoesReviewsResponse.reviews","isList":true}, {}],
			links: ["wm.TypeDefinitionField", {"fieldName":"links","fieldType":"RottenTomatoesReviewsResponse.links"}, {}],
			link_template: ["wm.TypeDefinitionField", {"fieldName":"link_template"}, {}]
		}], 
		RottenTomatoesBoxOffice: ["wm.XhrDefinition", {"headers":{},"parameters":{"apikey":{"transmitType":"queryString","type":"String","bindable":true},"limit":{"transmitType":"queryString","type":"Number","bindable":true}},"returnType":"RottenTomatoesBoxOfficeResponse","url":"http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json"}, {}], 
		RottenTomatoesDVDs: ["wm.XhrDefinition", {"headers":{},"parameters":{"apikey":{"transmitType":"queryString","type":"String"},"page_limit":{"transmitType":"queryString","type":"Number"},"page":{"transmitType":"queryString","type":"Number"}},"returnType":"RottenTomatoesBoxOfficeResponse","url":"http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/current_releases.json"}, {}], 
		RottenTomatoesInTheaters: ["wm.XhrDefinition", {"headers":{},"parameters":{"apikey":{"transmitType":"queryString","type":"String"},"page_limit":{"transmitType":"queryString","type":"Number"},"page":{"transmitType":"queryString","type":"Number"}},"returnType":"RottenTomatoesBoxOfficeResponse","url":"http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json"}, {}], 
		RottenTomatoesReviews: ["wm.XhrDefinition", {"headers":{},"parameters":{"movies":{"transmitType":"path","type":"String","bindable":true},"apikey":{"transmitType":"queryString","type":"String","bindable":true},"limit":{"transmitType":"queryString","type":"Number","bindable":true},"review_type":{"transmitType":"queryString","type":"String","bindable":true}},"returnType":"RottenTomatoesReviewsResponse","url":"http://api.rottentomatoes.com/api/public/v1.0/"}, {}], 
		RottenTomatoesSimilar: ["wm.XhrDefinition", {"headers":{},"parameters":{"apikey":{"transmitType":"queryString","type":"String"},"movies":{"transmitType":"path","type":"String"}},"returnType":"RottenTomatoesBoxOfficeResponse","url":"http://api.rottentomatoes.com/api/public/v1.0/"}, {}]
	},
	_end: 0
});

RottenTomatoes.extend({

	_end: 0
});
RottenTomatoes.prototype._css = '.TopOfRow {\
margin-bottom: 10px;\
}\
.PosterItem {\
float:left;\
margin-right:10px;\
}\
.Quote {\
margin: 10px;\
font-style: italic;\
}\
#wavemakerNode .wmlayout .wmlist a,\
#wavemakerNode .wmlayout .wmlist a:visited {\
color: white;\
}\
html.WMApp body .PageTitle {\
font-weight: bold;\
font-size: 1.4Em;\
color: white;\
}\
html.WMApp body .InfoBoxWithPicture {\
-webkit-border-top-right-radius: 8px;\
-webkit-border-bottom-right-radius: 8px;\
border-top-right-radius: 8px;\
border-bottom-right-radius: 8px;\
}\
.wmeditor .wmeditor-caption {\
font-weight: bold;\
}\
';
