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
		var val2 = Xrm.Page.data.entity.attributes.get("new_kanzisupport").getValue();
		var val3 = Xrm.Page.data.entity.attributes.get("new_kanzinre").getValue();
		var val4 = Xrm.Page.data.entity.attributes.get("new_kanziroyalty").getValue();
		var val5 = Xrm.Page.data.entity.attributes.get("new_kanzitraining").getValue();
		var result = parseFloat(val1) + parseFloat(val2) + parseFloat(val3) + parseFloat(val4) + parseFloat(val5);
	}

    Xrm.Page.getAttribute('estimatedvalue').setValue(result);  
	calcWeightedEstRevenue();
	Xrm.Page.getAttribute("estimatedvalue").setSubmitMode("always");
	
}