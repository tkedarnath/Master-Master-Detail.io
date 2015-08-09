sap.ui.controller("masterdetailapp.DetailView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf masterdetailapp.DetailView
*/
	onInit: function() {
		this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		this.oRouter.attachRoutePatternMatched(this._handleRouteMatched, this);
	},
	
	_handleRouteMatched:function(oEvent){
		 var sRoute = oEvent.getParameter("name");
			/*if(sRoute !== "DetailView1"  ||
			   sRoute !== "DetailView2")
			{
				return;			 
			}*/
		 var oView = oEvent.getParameter("view");
		 var sFilter1 = oEvent.getParameter("arguments").org;		 
		 var sFilter2 = oEvent.getParameter("arguments").suborg;
	 
		 that = this;
		 oView.setBusyIndicatorDelay(0);  
		 oView.setBusy(true);
	 
			var oTileCont = this.byId("Cont");
			var oTile = this.byId("Tile");
			
			oEmpModel = new sap.ui.model.json.JSONModel();		
			oEmpModel.loadData("Model/employee.json",null,false);
			sap.ui.getCore().setModel(oEmpModel,"Emp");
			
			var oFilter1 = new sap.ui.model.Filter("Org", "EQ",sFilter1);
			if(null != sFilter2){
			var oFilter2 = new sap.ui.model.Filter("Suborg", "EQ",sFilter2);
			};
			
			if(null == sFilter2){
				if(null != oTileCont){
				oTileCont.bindAggregation("tiles","/value/HighEmployee",oTile,null,oFilter1);
				oTileCont.setModel(oEmpModel);
				};
			}else{
				if(null != oTileCont){
				oTileCont.bindAggregation("tiles","/value/SubEmployee",oTile,null,[oFilter1,oFilter2]);
				oTileCont.setModel(oEmpModel);
				};
			};
					
			
			
			oView.setBusy(false);
			
		 	 
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf masterdetailapp.DetailView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf masterdetailapp.DetailView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf masterdetailapp.DetailView
*/
//	onExit: function() {
//
//	}

});