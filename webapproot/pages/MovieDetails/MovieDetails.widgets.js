MovieDetails.widgets = {
	dataForm1DataSet: ["wm.Property", {"bindSource":undefined,"bindTarget":1,"property":"dataForm1.dataSet","readonly":true,"type":"wm.Variable"}, {}],
	similarMoviesSVar: ["wm.ServiceVariable", {"operation":"RottenTomatoesSimilar","service":"xhrService"}, {}, {
		input: ["wm.ServiceInput", {"type":"RottenTomatoesSimilarInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"4s6y7rw49p47zepc23vgdcau\"","targetProperty":"apikey"}, {}],
				wire1: ["wm.Wire", {"expression":"(770672122 || ${dataForm1.dataOutput.id}) + \"/similar.json\"","targetProperty":"movies"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"similarMoviesLayer","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	notificationCall1: ["wm.NotificationCall", {"operation":"toast"}, {}, {
		input: ["wm.ServiceInput", {"type":"toastInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"The RottenTomatoes 'Similar' API mostly returns nothing, so this has been hardcoded to one movie that it DOES have data for\"","targetProperty":"text"}, {}],
				wire1: ["wm.Wire", {"expression":"10000","targetProperty":"duration"}, {}],
				wire2: ["wm.Wire", {"expression":"\"Warning\"","targetProperty":"cssClasses"}, {}],
				wire3: ["wm.Wire", {"expression":"\"bottom center\"","targetProperty":"dialogPosition"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		dataForm1: ["wm.DataForm", {"captionAlign":"left","height":"100%","isCompositeKey":false,"layoutKind":"left-to-right","readonly":true,"type":"RottenTomatoesMovie"}, {}, {
			dataForm1EditorFormPanel: ["wm.FormPanel", {"height":"100%","horizontalAlign":"center"}, {}, {
				layers1: ["wm.Layers", {}, {}, {
					infoLayer: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
						mainInfoPanel: ["wm.Panel", {"_classes":{"domNode":["InfoBoxWithPicture"]},"border":"2","desktopHeight":"178px","enableTouchHeight":true,"height":"190px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"4","mobileHeight":"190px","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
							picture2: ["wm.Picture", {"aspect":"v","height":"178px","width":"120px"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"dataForm1.dataOutput.posters.profile","targetProperty":"source"}, {}]
								}]
							}],
							formPanel1: ["wm.FormPanel", {"captionSize":"80px","height":"100%"}, {}, {
								release_datesSubForm1: ["wm.SubForm", {"caption":"Release_dates","changeOnKey":true,"desktopHeight":"26px","editingMode":"one-to-one","fitToContentHeight":true,"formField":"release_dates","height":"39px","isCompositeKey":false,"mobileHeight":"26px","readonly":true,"type":"RottenTomatoesBoxOfficeResponse.movies.release_dates"}, {}, {
									theaterEditor1: ["wm.Text", {"caption":"Date","captionAlign":"left","captionSize":"80px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","enableTouchHeight":false,"formField":"theater","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}]
								}],
								ratingsSubForm1: ["wm.SubForm", {"caption":"Ratings","captionAlign":"left","captionSize":"80px","changeOnKey":true,"desktopHeight":"26px","editingMode":"one-to-one","fitToContentHeight":true,"formField":"ratings","height":"74px","isCompositeKey":false,"mobileHeight":"26px","readonly":true,"type":"RottenTomatoesBoxOfficeResponse.movies.ratings"}, {}, {
									critics_scoreEditor1: ["wm.Number", {"caption":"Critics","captionAlign":"left","captionSize":"80px","changeOnKey":true,"dataValue":0,"emptyValue":"zero","enableTouchHeight":false,"formField":"critics_score","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
									audience_scoreEditor1: ["wm.Number", {"caption":"Audience","captionAlign":"left","captionSize":"80px","changeOnKey":true,"dataValue":0,"emptyValue":"zero","enableTouchHeight":false,"formField":"audience_score","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}]
								}],
								mpaa_ratingEditor1: ["wm.Text", {"caption":"Rating","captionAlign":"left","captionSize":"80px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","enableTouchHeight":false,"formField":"mpaa_rating","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
								runtimeEditor1: ["wm.Number", {"caption":"Runtime","captionAlign":"left","captionSize":"80px","changeOnKey":true,"dataValue":0,"emptyValue":"zero","enableTouchHeight":false,"formField":"runtime","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}]
							}]
						}],
						critics_consensusEditor1: ["wm.Text", {"autoSizeHeight":true,"caption":"Critics Consensus","captionAlign":"left","captionPosition":"top","captionSize":"12px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","enableTouchHeight":false,"formField":"critics_consensus","height":"35px","maxHeight":0,"readonly":true,"required":undefined,"width":"100%"}, {}],
						reviewsButtonPanel: ["wm.Panel", {"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							reviewsButton: ["wm.Button", {"caption":"More Reviews","height":"40px","margin":"4","width":"100%"}, {"onclick":"reviewsLayer"}],
							similarMoviesButton: ["wm.Button", {"caption":"Similar Movies","height":"40px","margin":"4","width":"100%"}, {"onclick":"similarMoviesLayer","onclick1":"similarMoviesSVar","onclick2":"notificationCall1"}]
						}],
						synopsisEditor1: ["wm.Text", {"autoSizeHeight":true,"caption":"Synopsis","captionAlign":"left","captionPosition":"top","captionSize":"12px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","enableTouchHeight":false,"formField":"synopsis","height":"35px","maxHeight":0,"readonly":true,"required":undefined,"width":"100%"}, {}],
						alternate_idsSubForm1: ["wm.SubForm", {"caption":"Alternate_ids","captionAlign":"left","changeOnKey":true,"desktopHeight":"26px","editingMode":"one-to-one","fitToContentHeight":true,"formField":"alternate_ids","height":"39px","isCompositeKey":false,"mobileHeight":"26px","readonly":true,"type":"RottenTomatoesBoxOfficeResponse.movies.alternate_ids"}, {}, {
							imdbEditor1: ["wm.Text", {"caption":"Imdb","captionAlign":"left","captionSize":"120px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","enableTouchHeight":false,"formField":"imdb","formatter":"imdbEditor1ReadOnlyNodeFormat","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}]
						}],
						abridged_castOneToMany1: ["wm.OneToMany", {"caption":"Cast","captionAlign":"left","captionPosition":"top","captionSize":"20px","dataValue":undefined,"displayField":"name","enableTouchHeight":false,"formField":"abridged_cast","height":"100%","minMobileHeight":100,"selectionMode":"single","width":"100%"}, {"onchange":"abridged_castOneToMany1Change"}]
					}],
					reviewsLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
						pageContainer: ["wm.PageContainer", {"deferLoad":true,"pageName":"MovieReviews","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{"movieIDVarDataSet":"movieIDVar.dataSet"}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"dataForm1.dataOutput.id","targetProperty":"movieIDVarDataSet.dataValue"}, {}]
							}]
						}]
					}],
					similarMoviesLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
						pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"MovieList","subpageEventlist":{"onListLayerShow":"listLayer.onShow","onDetailsLayerShow":"detailsLayer.onShow"},"subpageMethodlist":{},"subpageProplist":{"listDataSet":"list.dataSet","listSelectedItem":"list.selectedItem"}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"similarMoviesSVar.movies","targetProperty":"listDataSet"}, {}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}