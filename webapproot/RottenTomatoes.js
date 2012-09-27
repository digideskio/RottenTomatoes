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
	"projectSubVersion": "Alpha4", 
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