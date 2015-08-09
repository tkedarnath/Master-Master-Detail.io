jQuery.sap.require("sap.ui.core.UIComponent");


sap.ui.core.UIComponent.extend("Component.Component", {
	metadata : {
		routing : {
			config : {
				viewType : "JS",
				viewPath : "masterdetailapp",  //view",
				targetControl : "SplitApp",
				 targetParent: "view",
//				targetAggregaton: "Detail",
				clearTarget : false,
				transition: "flip",//"slide", //"fade",//
//				transitionSpeed: 1
			},
			routes : [
				{
					pattern : "Master/{org}",					
					name : "MasterView",
					view : "MasterView",
					viewPath : "masterdetailapp", 
					viewLevel : 1,
					targetAggregation : "masterPages", //"pages"
					transition:"flip",
				},
				{
					
					pattern : "Detail1/{org}",					
					name : "DetailView1",
					view : "DetailView",
					viewPath : "masterdetailapp", 
					viewLevel : 1,
					targetAggregation : "detailPages", //"pages"
					transition:"slide",
				},
				{	
				
					pattern : "Detail2/{org},{suborg}",					
					name : "DetailView2",
					view : "DetailView",
					viewPath : "masterdetailapp", 
					viewLevel : 1,
					targetAggregation : "detailPages", //"pages"
					transition:"slide",
				},
								
				{
					pattern : " ",
					name : "MasterView",
					view : "MasterView",
					viewPath : "masterdetailapp",
					viewLevel : 1,
					targetAggregation : "masterPages"
						
				}, 
				{
					pattern: "Empty",
					name: "EmptyView",
					view: "EmptyView",
					viewPath: "masterdetailapp",
					viewLevel: 1,
					targetAggregation: "detailPages",
					transition: "slide",
				}
				]
		}
	},

init: function(){
	sap.ui.localResources("Router");
	sap.ui.localResources("Utility");
	jQuery.sap.require("sap.ui.core.routing.History");
	jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
	jQuery.sap.require("Router.Router");

	sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
	
	var oRouter = this.getRouter();  
	jQuery.extend(oRouter, Router.Router);
	oRouter.myNavBack = Router.myNavBack;
	oRouter.myNavToWithoutHash = Router.myNavToWithoutHash;

	// 5. initialize the router
	this.routeHandler = new sap.m.routing.RouteMatchedHandler(oRouter);
	oRouter.initialize();
},

destroy : function () {
	if (this.routeHandler) {
		this.routeHandler.destroy();
	}

	// call overridden destroy
	sap.ui.core.UIComponent.prototype.destroy.apply(this, arguments);
},


	createContent : function() {
		sap.ui.localResources("masterdetailapp");
		sap.ui.localResources("Router");
		sap.ui.localResources("Model");
		// create root view
		var oView = sap.ui.view({id:"view", viewName:"masterdetailapp.view", type:sap.ui.core.mvc.ViewType.JS});	


		
// build the url of the odata model		
		function getUrl(sUrl){
			if (sUrl == '')
				return sUrl;
			if (window.location.hostname == 'localhost'){
				return "proxy" + sUrl;
				}else {
					return sUrl;
					};
		} 
				
//		var serviceUrl = getUrl('/sap/opu/odata/sap/ZJEAPPROVAL_SRV/');
//		
//	
//		var oModelJeappItems = new sap.ui.model.odata.ODataModel(serviceUrl,false,null,null);
//
//		 sap.ui.getCore().setModel(oModelJeappItems, "JEAppItems");
//		 oModelJeappItems.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
//		 oModelJeappItems.setDefaultCountMode(true);
//		 oModelJeappItems.setSizeLimit(150); // set the maximum number of entries 
//		 
//		 oView.setModel(oModelJeappItems);
		 
		 // set device model
	        var deviceModel = new sap.ui.model.json.JSONModel({
	            isTouch : sap.ui.Device.support.touch,
	            isNoTouch : !sap.ui.Device.support.touch,
	            isPhone : sap.ui.Device.system.phone,
	            isNoPhone : !sap.ui.Device.system.phone,
	            listMode : sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
	            listItemType : sap.ui.Device.system.phone ? "Active" : "Inactive"
	        });
	        deviceModel.setDefaultBindingMode("OneWay");
	        oView.setModel(deviceModel, "device");

		// done
		return oView;
	}
});