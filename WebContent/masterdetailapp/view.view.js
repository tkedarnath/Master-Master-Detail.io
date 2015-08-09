sap.ui.jsview("masterdetailapp.view", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf masterdetailapp.view
	*/ 
	getControllerName : function() {
		return "masterdetailapp.view";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf masterdetailapp.view
	*/ 
	createContent : function(oController) {
		this.setDisplayBlock(true);
		 
		sap.ui.localResources("masterdetailapp");
		/*jQuery.sap.registerModulePath("zjmjeapproval", "zjmjeapproval");*/
	 
		var oSplitApp = new sap.m.SplitApp("SplitApp",{
			afterDetailNavigate: function(){
				this.hideMaster();}  
			});
		
			
		var oMasterView = new sap.ui.view({id:"MasterView", viewName:"masterdetailapp.MasterView",type: sap.ui.core.mvc.ViewType.JS
										  }); 
		
					
	/*	var oDetailView = new sap.ui.view({id:"DetailView", viewName:"masterdetailapp.DetailView",
											type:sap.ui.core.mvc.ViewType.JS
											});*/
		
		var oEmptyView = new sap.ui.view({id:"EmptyView", viewName:"masterdetailapp.EmptyView",type:sap.ui.core.mvc.ViewType.JS});
		
		
		oSplitApp.addMasterPage(oMasterView);
		//oSplitApp.addDetailPage(oDetailView);
		oSplitApp.addDetailPage(oEmptyView);

		
 		return oSplitApp;
	}

});