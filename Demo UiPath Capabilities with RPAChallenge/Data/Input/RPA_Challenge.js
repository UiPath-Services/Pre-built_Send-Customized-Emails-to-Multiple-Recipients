function(e, strRowValues){
	var strFirstName = strRowValues.split("|")[0];
	var strLastName = strRowValues.split("|")[1];
	var strEmail = strRowValues.split("|")[2];
	var strAddress = strRowValues.split("|")[3];
	var strPhoneNumber = strRowValues.split("|")[4];
	var strCompanyName = strRowValues.split("|")[5];
	var strRoleInCompany = strRowValues.split("|")[6];
	
	var elemLabels = Array.from(document.getElementsByTagName("label"));

	for(var i = 0; i < elemLabels.length; i++){
		switch(elemLabels[i].textContent){
			case "First Name":
				if(elemLabels[i].nextSibling.tagName == "BR"){
					elemLabels[i].nextSibling.nextSibling.value = strFirstName;
				}
				else{
					elemLabels[i].nextSibling.value = strFirstName;
				}
			break;
			case "Last Name":
				if(elemLabels[i].nextSibling.tagName == "BR"){
					elemLabels[i].nextSibling.nextSibling.value = strLastName;
				}
				else{
					elemLabels[i].nextSibling.value = strLastName;
				}
			break;
			case "Email":
				if(elemLabels[i].nextSibling.tagName == "BR"){
					elemLabels[i].nextSibling.nextSibling.value = strEmail;
				}
				else{
					elemLabels[i].nextSibling.value = strEmail;
				}
			break;
			case "Address":
				if(elemLabels[i].nextSibling.tagName == "BR"){
					elemLabels[i].nextSibling.nextSibling.value = strAddress;
				}
				else{
					elemLabels[i].nextSibling.value = strAddress;
				}
			break;
			case "Phone Number":
				if(elemLabels[i].nextSibling.tagName == "BR"){
					elemLabels[i].nextSibling.nextSibling.value = strPhoneNumber;
				}
				else{
					elemLabels[i].nextSibling.value = strPhoneNumber;
				}
			break;
			case "Company Name":
				if(elemLabels[i].nextSibling.tagName == "BR"){
					elemLabels[i].nextSibling.nextSibling.value = strCompanyName;
				}
				else{
					elemLabels[i].nextSibling.value = strCompanyName;
				}
			break;
			case "Role in Company":
				if(elemLabels[i].nextSibling.tagName == "BR"){
					elemLabels[i].nextSibling.nextSibling.value = strRoleInCompany;
				}
				else{
					elemLabels[i].nextSibling.value = strRoleInCompany;
				}
			break;
		}
	}
	document.getElementsByClassName("btn uiColorButton")[0].click();
}