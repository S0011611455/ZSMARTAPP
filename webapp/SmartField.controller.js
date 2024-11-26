sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/wakefern/zsmartapp/localService/mockdata/UShellCrossApplicationNavigationMock"
], function(Controller, UShellCrossApplicationNavigationMock) {
	"use strict";

	return Controller.extend("com.wakefern.SmartField", {
		onInit: function() {
			this.getView().bindElement("/Products('4711')");
			UShellCrossApplicationNavigationMock.mockUShellServices({
				tutorial_03_Name: {
					links: [
						{
							action: "sap_se",
							intent: "http://www.sap.com",
							text: "SAP SE"
						}, {
							action: "sap_sapphire",
							intent: "http://www.sap.com/sapphire",
							text: "SAP Sapphire"
						}, {
							action: "app3",
							intent: "http://www.sap.com/hana",
							text: "App3"
						}
					]
				}
			});
		},
		onExit: function() {
			UShellCrossApplicationNavigationMock.unMockUShellServices();
		}
	});

});