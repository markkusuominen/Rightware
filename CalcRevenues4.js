function CalcRevenues4(){
	var sbusinessunit = Xrm.Page.getAttribute("new_businessunit").getText();

	if (sbusinessunit == "Benchmark") {
		// alert ("bbb");
		var val1 = Xrm.Page.data.entity.attributes.get("new_benchmarklicences").getValue(); 
		
		if (val1 == null || value == "") {
			val1 = "0";
			Xrm.Page.data.entity.attributes.get("new_benchmarklicences").setValue(val1); 
			}
			
		var val2 = Xrm.Page.data.entity.attributes.get("new_bdp").getValue();
		
		if (val2 == null || value == "") {
			val2 = "0";
			Xrm.Page.data.entity.attributes.get("new_bdp").setValue(val1); 
			}
			
		var val3 = Xrm.Page.data.entity.attributes.get("new_premiumbdp").getValue();
		
		if (val3 == null || value == "") {
			val3 = "0";
			Xrm.Page.data.entity.attributes.get("new_premiumbdp").setValue(val1); 
			}
		
			
		var val4 = Xrm.Page.data.entity.attributes.get("new_benchmarksupport").getValue();
		
		if (val4 == null || value == "") {
			val4 = "0";
			Xrm.Page.data.entity.attributes.get("new_benchmarksupport").setValue(val1); 
			}
			
					
		var result = parseFloat(val1) + parseFloat(val2) + parseFloat(val3) + parseFloat(val4);
	} else {
		var val1 = Xrm.Page.data.entity.attributes.get("new_kanzilicences").getValue();
		
		if (val1 == null || value == "") {
			val1 = "0";
			Xrm.Page.data.entity.attributes.get("new_kanzilicences").setValue(val1); 
			}
			
		var val2 = Xrm.Page.data.entity.attributes.get("new_kanzisupport").getValue();
		if (val2 == null || value == "") {
			val2 = "0";
			Xrm.Page.data.entity.attributes.get("new_kanzisupport").setValue(val1); 
			}
			
		var val3 = Xrm.Page.data.entity.attributes.get("new_kanzinre").getValue();
		if (val3 == null || value == "") {
			val3 = "0";
			Xrm.Page.data.entity.attributes.get("new_kanzinre").setValue(val1); 
			}
			
		var val4 = Xrm.Page.data.entity.attributes.get("new_kanziroyalty").getValue();
		if (val4 == null || value == "") {
			val4 = "0";
			Xrm.Page.data.entity.attributes.get("new_kanziroyalty").setValue(val1); 
			}
			
		var val5 = Xrm.Page.data.entity.attributes.get("new_kanzitraining").getValue();
		if (val5 == null || value == "") {
			val5 = "0";
			Xrm.Page.data.entity.attributes.get("new_kanzitraining").setValue(val1); 
			}
			
		var result = parseFloat(val1) + parseFloat(val2) + parseFloat(val3) + parseFloat(val4) + parseFloat(val5);
	}

    Xrm.Page.getAttribute('estimatedvalue').setValue(result);  
	calcWeightedEstRevenue();
	Xrm.Page.getAttribute("estimatedvalue").setSubmitMode("always");
	
}