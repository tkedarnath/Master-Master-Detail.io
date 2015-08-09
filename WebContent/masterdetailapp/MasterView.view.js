sap.ui.jsview("masterdetailapp.MasterView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf masterdetailapp.MasterView
	*/ 
	getControllerName : function() {
		return "masterdetailapp.MasterView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf masterdetailapp.MasterView
	*/ 
	createContent : function(oController) {
		
		var oHeaderPage = new sap.m.Page("Header",{showNavButton: "{device>/isPhone}",
												  navButtonPress: function(oEvent){
													  oController.navbuttonpressfn(oEvent)}});
			
		
		oHeaderPage.setTitle("Organizations ");
		
		var oOrgList = new sap.m.List("Orgs",
											{/*updateFinished: function(oEvent){
															oController.listcount(oEvent)
																			  },*/
											noDataText: "No Orgs",
											showNoData: true});
				
		
		
		var oHeaderList = new sap.m.ObjectListItem("OrgsList",
												{number:"{Org}",
												press : function(oEvent){
												oController.handlepressfn(oEvent)},
												/*type: "{device>/listItemType}"*/});
		
		oHeaderList.setType(sap.m.ListType.Active);
		
		// Set the Suborg
		var oAttrSuborg = new sap.m.ObjectAttribute({id:"Suborg",
													visible: true,
													/*title: "Desc",*/
													text: "{Suborg}",
													active: false });	
		
		// Set the Desc
		var oAttrDesc = new sap.m.ObjectAttribute({id:"Desc",
													visible: true,
													title: "Desc",
													text: "{Desc}",
													active: false });
		
		
		oHeaderList.addAttribute(oAttrSuborg);
		oHeaderList.addAttribute(oAttrDesc);		
		
		oHeaderPage.addContent(oOrgList); 
		return oHeaderPage;  
	}

});