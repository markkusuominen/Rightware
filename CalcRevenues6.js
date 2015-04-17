function CalcRevenues3(){
	var sbusinessunit = Xrm.Page.getAttribute("new_businessunit").getText();

	if (sbusinessunit == "Benchmark") {
		// alert ("bbb");
		var val1 = Xrm.Page.data.entity.attributes.get("new_benchmarklicences").getValue(); 
		var val2 = Xrm.Page.data.entity.attributes.get("new_bdp").getValue();
		var val3 = Xrm.Page.data.entity.attributes.get("new_premiumbdp").getValue();
		var val4 = Xrm.Page.data.entity.attributes.get("new_benchmarksupport").getValue();
		var result = parseFloat(val1) + parseFloat(val2) + parseFloat(val3) + parseFloat(val4);
	} else {
		var val1 = Xrm.Page.data.entity.attributes.get("new_kanzilicences").getValue();
		if (val1  == null) {
			val1 = 0; 
			Xrm.Page.getAttribute('new_kanzilicences').setValue(val1);
		}
		
		var val2 = Xrm.Page.data.entity.attributes.get("new_kanzisupport").getValue();
		alert (val2);
		Xrm.Page.getAttribute('new_kanzisupport').setValue('0');
		if (val2  == null) {
			val2 = 0; 
			Xrm.Page.getAttribute('new_kanzisupport').setValue(val2);
		}
		
		var val3 = Xrm.Page.data.entity.attributes.get("new_kanzinre").getValue();
		if (val3  == null) {
			val3 = 0; 
			Xrm.Page.getAttribute('new_kanzinre').setValue(val3);
		}		
		
		var val4 = Xrm.Page.data.entity.attributes.get("new_kanziroyalty").getValue();
		if (val4  == null) {
			val4 = 0; 
			Xrm.Page.getAttribute('new_kanziroyalty').setValue(val4);
		}		
		
		var val5 = Xrm.Page.data.entity.attributes.get("new_kanzitraining").getValue();
		if (val5  == null) {
			val5 = 0; 
			Xrm.Page.getAttribute('new_kanzitraining').setValue(val5);
		}		
		
		var result = parseFloat(val1) + parseFloat(val2) + parseFloat(val3) + parseFloat(val4) + parseFloat(val5);
	}

	alert (result);
    Xrm.Page.getAttribute('estimatedvalue').setValue(result);  
	calcWeightedEstRevenue();
	Xrm.Page.getAttribute("estimatedvalue").setSubmitMode("always");
	
}