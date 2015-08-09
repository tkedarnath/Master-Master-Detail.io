sap.ui.jsview("masterdetailapp.DetailView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf masterdetailapp.DetailView
	*/ 
	getControllerName : function() {
		return "masterdetailapp.DetailView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf masterdetailapp.DetailView
	*/ 
	createContent : function(oController) {
		
	
		var oDetailPage = new sap.m.Page({title: 'Employee Details'});
		
		oTileCont = new sap.m.TileContainer({id:(this.createId("Cont")),height: "100%"});
		
		oTile = new sap.m.StandardTile({id:(this.createId("Tile")),
										title: "{FName}",
										/*{parts: [{path: "FName"},{path: "LName"}],
												formatter: function(first,last){
													return  first + " " + last;
												}},*/
            							info: "{Age}",
            							number: '{EmpId}'});
				
		oDetailPage.addContent(oTileCont);
		return oDetailPage;
	}

});