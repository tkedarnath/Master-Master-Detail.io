jQuery.sap.declare("Router.Router");
jQuery.sap.require("sap.ui.core.routing.Router");  
jQuery.sap.require("sap.ui.core.routing.History");
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");  
sap.ui.localResources("masterdetailapp");


Router.Router = {
		
		myNavBack : function (route, data) {
			var history = sap.ui.core.routing.History.getInstance();
			var url = this.getURL(route, data);
			var direction = history.getDirection(url);
			if ("Backwards" === direction) {
				window.history.go(-1);
			} else {
				var replace = true; // otherwise we go backwards with a forward history
				this.navTo(route, data, replace);
			}
		},  

		myNavToWithoutHash : function (viewName, viewType, master, data) {
			var app = sap.ui.getCore().byId("SplitApp");
			var view = this.getView(viewName, viewType);
			app.addPage(view, master);
			app.toDetail(view.getId(), "show", data);
		}
};