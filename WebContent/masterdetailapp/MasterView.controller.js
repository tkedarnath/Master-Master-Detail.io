sap.ui.controller("masterdetailapp.MasterView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf masterdetailapp.MasterView
*/
	onInit: function() {
		sap.ui.localResources("Model");
		this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		//set the model for project dropdown
		oOrgModel = new sap.ui.model.json.JSONModel();		
		oOrgModel.loadData("Model/org.json",null,false);
		sap.ui.getCore().setModel(oOrgModel,"Orgs");
		
		oList = sap.ui.getCore().byId("Orgs");
		oListItem = sap.ui.getCore().byId("OrgsList");
		
		oList.bindItems("/value/Organizations", oListItem);
		oList.setModel(oOrgModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf masterdetailapp.MasterView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf masterdetailapp.MasterView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf masterdetailapp.MasterView
*/
//	onExit: function() {
//
//	}
	
handlepressfn: function(oEvent){
		
		console.log(oEvent.getSource().getBindingContext());
		  var data = {};
		  data.context = oEvent.getSource().getBindingContext();		  
		  
		  org =  data.context.getProperty("Org");
		  suborg = data.context.getProperty("Suborg");
		  console.log(suborg);
	
		  
			oSubOrgModel = new sap.ui.model.json.JSONModel();		
			oSubOrgModel.loadData("Model/suborg.json",null,false);
			sap.ui.getCore().setModel(oSubOrgModel,"SubOrgs");
			
			oList = sap.ui.getCore().byId("Orgs");
			oListItem = sap.ui.getCore().byId("OrgsList");
			
			oList.unbindItems();
			
			filter = new sap.ui.model.Filter("Org", "EQ",org);
			
			oList.bindItems("/value/SubOrgs", oListItem,null,filter);
			oList.setModel(oSubOrgModel);
			
			if(null == suborg){
				this.oRouter.navTo("DetailView1", {org: data.context.getProperty("Org"),
						 						});
			}else{
		
			this.oRouter.navTo("DetailView2", {org: data.context.getProperty("Org"),
				  							 suborg:data.context.getProperty("Suborg")});
			};
},

});