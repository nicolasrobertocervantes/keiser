$(document).ready(function() {
	$("#back-button").click(function() {
		  $("#form-step-2").hide();
		  $("#form-step-1").fadeIn();
	  });
  
	  $("#mobile-nav-menu-button").click(function() {
		  if ($("#mobile-nav-menu-extended").is(":visible"))
			  $("#mobile-nav-menu-extended").slideUp();
		  else
			  $("#mobile-nav-menu-extended").slideDown();
	  });
  
	  $("#mobile-form-button").click(function() {
		  if ($("#form-container").is(":visible"))
			  $("#form-container").slideUp();
		  else
			  $("#form-container").slideDown();
	  });
  
  });
  
  // GCID to GlueID.
  $(document).ready(function() {
	  var url = document.URL;
	  var gcid_check = /[?&]GCID=([^&]+)/i;
	  var match = gcid_check.exec(url);
	  if (match != null) {
		  final_gcid = match[1];
	  } else {
		  final_gcid = "";
	  }
  
	  var glueId;
	  switch(final_gcid){
		  // Current Source Name
		  case "LATIN-ElNuevoDiaOnline":   glueId = '68302'; break;
		  case "LATIN-GoogleContentPR":   glueId = '68306'; break;
		  case "LATIN-GooglePR":   glueId = '68310'; break;
		  case "LATIN-YahooBingPR":   glueId = '68320'; break;
		  case "LATIN-Webform":   glueId = '68136'; break;
		  case "LATIN-OnlineNoRef":   glueId = '68137'; break;
		  case "LATIN-eMailMktg":   glueId = '68870'; break;
		  case "LATIN-PulpoMediaUS":   glueId = '72385'; break;
		  case "LATIN-EducacionOnline":   glueId = '73840'; break;
		  case "LATIN-RetargetingGoogle":   glueId = '73375'; break;
		  // New Consolidated Source Name
		  case "LATIN-PPC-PuertoRico":   glueId = '74294'; break;
		  case "LATWEBTV":   glueId = '97773'; break;
		  case "LATIN-PPC-M8 Publisher":   glueId = '97790'; break;
		  default: glueId = '97790';
	  }
	  $('#glueId').attr("value", glueId);
  });
  
  // AFID to AffiliateID.
  $(document).ready(function() {
	  var url = document.URL;
	  var afid_check = /[?&]AFID=([^&]+)/i;
	  var match = afid_check.exec(url);
	  if (match != null) {
		  final_afid = match[1];
	  } else {
		  final_afid = "";
	  }
  
	  var affiliateId;
	  switch(final_afid){
		  case "BingPRASMASP": affiliateId = "BingPRASMASP"; break;
		  case "BingPRASMBCSP": affiliateId = "BingPRASMBCSP"; break;
		  case "BingPRBABAS": affiliateId = "BingPRBABAS"; break;
		  case "BingPRMBA": affiliateId = "BingPRMBA"; break;
		  case "BingPRMBASI": affiliateId = "BingPRMBASI"; break;
		  case "BingPRMBASM": affiliateId = "BingPRMBASM"; break;
		  case "BingPRMSM": affiliateId = "BingPRMSM"; break;
		  case "Google_PR_DSC_AAGSS": affiliateId = "Google_PR_DSC_AAGSS"; break;
		  case "Google_PR_DSC_ASMASP": affiliateId = "Google_PR_DSC_ASMASP"; break;
		  case "Google_PR_DSC_ASMBCSP": affiliateId = "Google_PR_DSC_ASMBCSP"; break;
		  case "Google_PR_DSC_BAASP": affiliateId = "Google_PR_DSC_BAASP"; break;
		  case "Google_PR_DSC_BABASE": affiliateId = "Google_PR_DSC_BABASE"; break;
		  case "Google_PR_DSC_BABASHR": affiliateId = "Google_PR_DSC_BABASHR"; break;
		  case "Google_PR_DSC_BAHSAS": affiliateId = "Google_PR_DSC_BAHSAS"; break;
		  case "Google_PR_DSC_BSISS": affiliateId = "Google_PR_DSC_BSISS"; break;
		  case "Google_PR_DSC_DBAS": affiliateId = "Google_PR_DSC_DBAS"; break;
		  case "Google_PR_DSC_MBAGS": affiliateId = "Google_PR_DSC_MBAGS"; break;
		  case "Google_PR_DSC_MBASI": affiliateId = "Google_PR_DSC_MBASI"; break;
		  case "Google_PR_DSC_MBASM": affiliateId = "Google_PR_DSC_MBASM"; break;
		  case "Google_PR_DSC_MBASP": affiliateId = "Google_PR_DSC_MBASP"; break;
		  case "Google_PR_DSC_MSELS": affiliateId = "Google_PR_DSC_MSELS"; break;
		  case "Google_PR_DSC_MSMS": affiliateId = "Google_PR_DSC_MSMS"; break;
		  case "Google_PR_DSC_PHDELS": affiliateId = "Google_PR_DSC_PHDELS"; break;
		  case "Google_PR_GSP_AAGSS": affiliateId = "Google_PR_GSP_AAGSS"; break;
		  case "Google_PR_GSP_ASMASP": affiliateId = "Google_PR_GSP_ASMASP"; break;
		  case "Google_PR_GSP_ASMBCSP": affiliateId = "Google_PR_GSP_ASMBCSP"; break;
		  case "Google_PR_GSP_BAASP": affiliateId = "Google_PR_GSP_BAASP"; break;
		  case "Google_PR_GSP_BABAS": affiliateId = "Google_PR_GSP_BABAS"; break;
		  case "Google_PR_GSP_BAHSAS": affiliateId = "Google_PR_GSP_BAHSAS"; break;
		  case "Google_PR_GSP_BSISS": affiliateId = "Google_PR_GSP_BSISS"; break;
		  case "Google_PR_GSP_DBAS": affiliateId = "Google_PR_GSP_DBAS"; break;
		  case "Google_PR_GSP_MBASI": affiliateId = "Google_PR_GSP_MBASI"; break;
		  case "Google_PR_GSP_MBASM": affiliateId = "Google_PR_GSP_MBASM"; break;
		  case "Google_PR_GSP_MBASP": affiliateId = "Google_PR_GSP_MBASP"; break;
		  case "Google_PR_GSP_MSELS": affiliateId = "Google_PR_GSP_MSELS"; break;
		  case "Google_PR_GSP_MSMS": affiliateId = "Google_PR_GSP_MSMS"; break;
		  case "Google_PR_GSP_PHDELS": affiliateId = "Google_PR_GSP_PHDELS"; break;
		  case "Google_PR_IMSA_AAGSS": affiliateId = "Google_PR_IMSA_AAGSS"; break;
		  case "Google_PR_IMSA_ASMASP": affiliateId = "Google_PR_IMSA_ASMASP"; break;
		  case "Google_PR_IMSA_ASMBCSP": affiliateId = "Google_PR_IMSA_ASMBCSP"; break;
		  case "Google_PR_IMSA_BAASP": affiliateId = "Google_PR_IMSA_BAASP"; break;
		  case "Google_PR_IMSA_BABAS": affiliateId = "Google_PR_IMSA_BABAS"; break;
		  case "Google_PR_IMSA_BAHSAS": affiliateId = "Google_PR_IMSA_BAHSAS"; break;
		  case "Google_PR_IMSA_BSISS": affiliateId = "Google_PR_IMSA_BSISS"; break;
		  case "Google_PR_IMSA_DBAS": affiliateId = "Google_PR_IMSA_DBAS"; break;
		  case "Google_PR_IMSA_MBASI": affiliateId = "Google_PR_IMSA_MBASI"; break;
		  case "Google_PR_IMSA_MBASM": affiliateId = "Google_PR_IMSA_MBASM"; break;
		  case "Google_PR_IMSA_MBASP": affiliateId = "Google_PR_IMSA_MBASP"; break;
		  case "Google_PR_IMSA_MSELS": affiliateId = "Google_PR_IMSA_MSELS"; break;
		  case "Google_PR_IMSA_MSMS": affiliateId = "Google_PR_IMSA_MSMS"; break;
		  case "Google_PR_IMSA_PHDELS": affiliateId = "Google_PR_IMSA_PHDELS"; break;
		  case "Google_PR_Manual": affiliateId = "Google_PR_Manual"; break;
		  case "GOOGLE_PR_PS_AAACS": affiliateId = "GOOGLE_PR_PS_AAACS"; break;
		  case "Google_PR_PS_AAGSS": affiliateId = "Google_PR_PS_AAGSS"; break;
		  case "GOOGLE_PR_PS_AAHSAS": affiliateId = "GOOGLE_PR_PS_AAHSAS"; break;
		  case "GOOGLE_PR_PS_ASITS": affiliateId = "GOOGLE_PR_PS_ASITS"; break;
		  case "Google_PR_PS_ASMASP": affiliateId = "Google_PR_PS_ASMASP"; break;
		  case "Google_PR_PS_ASMBCSP": affiliateId = "Google_PR_PS_ASMBCSP"; break;
		  case "Google_PR_PS_BAASP": affiliateId = "Google_PR_PS_BAASP"; break;
		  case "Google_PR_PS_BABAS": affiliateId = "Google_PR_PS_BABAS"; break;
		  case "Google_PR_PS_BAHSAS": affiliateId = "Google_PR_PS_BAHSAS"; break;
		  case "Google_PR_PS_BSISS": affiliateId = "Google_PR_PS_BSISS"; break;
		  case "Google_PR_PS_DBAS": affiliateId = "Google_PR_PS_DBAS"; break;
		  case "Google_PR_PS_EN_GENERAL": affiliateId = "Google_PR_PS_EN_GENERAL"; break;
		  case "Google_PR_PS_GENERAL": affiliateId = "Google_PR_PS_GENERAL"; break;
		  case "Google_PR_PS_MBASI": affiliateId = "Google_PR_PS_MBASI"; break;
		  case "Google_PR_PS_MBASM": affiliateId = "Google_PR_PS_MBASM"; break;
		  case "Google_PR_PS_MBASP": affiliateId = "Google_PR_PS_MBASP"; break;
		  case "Google_PR_PS_MSELS": affiliateId = "Google_PR_PS_MSELS"; break;
		  case "Google_PR_PS_MSMS": affiliateId = "Google_PR_PS_MSMS"; break;
		  case "Google_PR_PS_PHDELS": affiliateId = "Google_PR_PS_PHDELS"; break;
		  case "Google_PR_Remarketing_AAGSS": affiliateId = "Google_PR_Remarketing_AAGSS"; break;
		  case "Google_PR_Remarketing_ASMASP": affiliateId = "Google_PR_Remarketing_ASMASP"; break;
		  case "Google_PR_Remarketing_ASMBCSP": affiliateId = "Google_PR_Remarketing_ASMBCSP"; break;
		  case "Google_PR_Remarketing_BAASP": affiliateId = "Google_PR_Remarketing_BAASP"; break;
		  case "Google_PR_Remarketing_BABAS": affiliateId = "Google_PR_Remarketing_BABAS"; break;
		  case "Google_PR_Remarketing_BAHSAS": affiliateId = "Google_PR_Remarketing_BAHSAS"; break;
		  case "Google_PR_Remarketing_BSISS": affiliateId = "Google_PR_Remarketing_BSISS"; break;
		  case "Google_PR_Remarketing_DBAS": affiliateId = "Google_PR_Remarketing_DBAS"; break;
		  case "Google_PR_Remarketing_MBASI": affiliateId = "Google_PR_Remarketing_MBASI"; break;
		  case "Google_PR_Remarketing_MBASM": affiliateId = "Google_PR_Remarketing_MBASM"; break;
		  case "Google_PR_Remarketing_MBASP": affiliateId = "Google_PR_Remarketing_MBASP"; break;
		  case "Google_PR_Remarketing_MSELS": affiliateId = "Google_PR_Remarketing_MSELS"; break;
		  case "Google_PR_Remarketing_MSMS": affiliateId = "Google_PR_Remarketing_MSMS"; break;
		  case "Google_PR_Remarketing_PHDELS": affiliateId = "Google_PR_Remarketing_PHDELS"; break;
		  case "Google_PR_RLSA_AAGSS": affiliateId = "Google_PR_RLSA_AAGSS"; break;
		  case "Google_PR_RLSA_ASMASP": affiliateId = "Google_PR_RLSA_ASMASP"; break;
		  case "Google_PR_RLSA_ASMBCSP": affiliateId = "Google_PR_RLSA_ASMBCSP"; break;
		  case "Google_PR_RLSA_BAASP": affiliateId = "Google_PR_RLSA_BAASP"; break;
		  case "Google_PR_RLSA_BABAS": affiliateId = "Google_PR_RLSA_BABAS"; break;
		  case "Google_PR_RLSA_BAHSAS": affiliateId = "Google_PR_RLSA_BAHSAS"; break;
		  case "Google_PR_RLSA_BSISS": affiliateId = "Google_PR_RLSA_BSISS"; break;
		  case "Google_PR_RLSA_DBAS": affiliateId = "Google_PR_RLSA_DBAS"; break;
		  case "Google_PR_RLSA_MBASI": affiliateId = "Google_PR_RLSA_MBASI"; break;
		  case "Google_PR_RLSA_MBASM": affiliateId = "Google_PR_RLSA_MBASM"; break;
		  case "Google_PR_RLSA_MBASP": affiliateId = "Google_PR_RLSA_MBASP"; break;
		  case "Google_PR_RLSA_MSELS": affiliateId = "Google_PR_RLSA_MSELS"; break;
		  case "Google_PR_RLSA_MSMS": affiliateId = "Google_PR_RLSA_MSMS"; break;
		  case "Google_PR_RLSA_PHDELS": affiliateId = "Google_PR_RLSA_PHDELS"; break;
		  case "Google_PR_Trueview_AAGSS": affiliateId = "Google_PR_Trueview_AAGSS"; break;
		  case "Google_PR_Trueview_ASMASP": affiliateId = "Google_PR_Trueview_ASMASP"; break;
		  case "Google_PR_Trueview_ASMBCSP": affiliateId = "Google_PR_Trueview_ASMBCSP"; break;
		  case "Google_PR_Trueview_BAASP": affiliateId = "Google_PR_Trueview_BAASP"; break;
		  case "Google_PR_Trueview_BABAS": affiliateId = "Google_PR_Trueview_BABAS"; break;
		  case "Google_PR_Trueview_BAHSAS": affiliateId = "Google_PR_Trueview_BAHSAS"; break;
		  case "Google_PR_Trueview_BSISS": affiliateId = "Google_PR_Trueview_BSISS"; break;
		  case "Google_PR_Trueview_DBAS": affiliateId = "Google_PR_Trueview_DBAS"; break;
		  case "Google_PR_Trueview_MBASI": affiliateId = "Google_PR_Trueview_MBASI"; break;
		  case "Google_PR_Trueview_MBASM": affiliateId = "Google_PR_Trueview_MBASM"; break;
		  case "Google_PR_Trueview_MBASP": affiliateId = "Google_PR_Trueview_MBASP"; break;
		  case "Google_PR_Trueview_MSELS": affiliateId = "Google_PR_Trueview_MSELS"; break;
		  case "Google_PR_Trueview_MSMS": affiliateId = "Google_PR_Trueview_MSMS"; break;
		  case "Google_PR_Trueview_PHDELS": affiliateId = "Google_PR_Trueview_PHDELS"; break;
		  case "Google_US_PS_BABASE": affiliateId = "Google_US_PS_BABASE"; break;
		  case "Google_US_PS_BABASHR": affiliateId = "Google_US_PS_BABASHR"; break;
		  case "Google_US_PS_MBAGS": affiliateId = "Google_US_PS_MBAGS"; break;
		  case "GoogleContentPRBABAS": affiliateId = "GoogleContentPRBABAS"; break;
		  case "GoogleContentPRMBA": affiliateId = "GoogleContentPRMBA"; break;
		  case "GoogleContentPRMBASI": affiliateId = "GoogleContentPRMBASI"; break;
		  case "GoogleContentPRMBASM": affiliateId = "GoogleContentPRMBASM"; break;
		  case "GoogleContentPRMBASP": affiliateId = "GoogleContentPRMBASP"; break;
		  case "GooglePR_Manual": affiliateId = "GooglePR_Manual"; break;
		  case "GooglePRAAGSS": affiliateId = "GooglePRAAGSS"; break;
		  case "GooglePRASMASP": affiliateId = "GooglePRASMASP"; break;
		  case "GooglePRASMBCSP": affiliateId = "GooglePRASMBCSP"; break;
		  case "GooglePRBAASP": affiliateId = "GooglePRBAASP"; break;
		  case "GooglePRBABAS": affiliateId = "GooglePRBABAS"; break;
		  case "GooglePRBAHSAS": affiliateId = "GooglePRBAHSAS"; break;
		  case "GooglePRBSISS": affiliateId = "GooglePRBSISS"; break;
		  case "GooglePRDBA": affiliateId = "GooglePRDBA"; break;
		  case "GooglePRMBA": affiliateId = "GooglePRMBA"; break;
		  case "GooglePRMBASI": affiliateId = "GooglePRMBASI"; break;
		  case "GooglePRMBASM": affiliateId = "GooglePRMBASM"; break;
		  case "GooglePRMBASP": affiliateId = "GooglePRMBASP"; break;
		  case "GooglePRMSELS": affiliateId = "GooglePRMSELS"; break;
		  case "GooglePRMSM": affiliateId = "GooglePRMSM"; break;
		  case "GooglePRPHDELS": affiliateId = "GooglePRPHDELS"; break;
		  case "InstagramAssociates": affiliateId = "InstagramAssociates"; break;
		  case "InstagramBach": affiliateId = "InstagramBach"; break;
		  case "InstagramMasters": affiliateId = "InstagramMasters"; break;
		  case "LATIN-PPC-PuertoRico": affiliateId = "LATIN-PPC-PuertoRico"; break;
		  case "RemarketingGooglePRASMASP": affiliateId = "RemarketingGooglePRASMASP"; break;
		  case "RemarketingGooglePRASMBCSP": affiliateId = "RemarketingGooglePRASMBCSP"; break;
		  case "RemarketingGooglePRBAASP": affiliateId = "RemarketingGooglePRBAASP"; break;
		  case "RemarketingGooglePRBABAS": affiliateId = "RemarketingGooglePRBABAS"; break;
		  case "RemarketingGooglePRBAHSAS": affiliateId = "RemarketingGooglePRBAHSAS"; break;
		  case "RemarketingGooglePRDBA": affiliateId = "RemarketingGooglePRDBA"; break;
		  case "RemarketingGooglePRMSM": affiliateId = "RemarketingGooglePRMSM"; break;
		  case "LATIN-PPC-M8 Publisher": affiliateId = "LATIN-PPC-M8 Publisher"; break;
		  case "LATWEBTV": affiliateId = "LATWEBTV"; break;
		  case "GOOGLE_PR_PS_BAPSYSP": affiliateId = "GOOGLE_PR_PS_BAPSYSP"; break;
		  case "GOOGLE_PR_PS_BSITMSP": affiliateId = "GOOGLE_PR_PS_BSITMSP"; break;
		  case "GOOGLE_PR_PS_MBAMKTSP": affiliateId = "GOOGLE_PR_PS_MBAMKTSP"; break;
		  case "GOOGLE_PR_PS_MSOLSP": affiliateId = "GOOGLE_PR_PS_MSOLSP"; break;
		  case "GOOGLE_PR_PS_MSPSYSP": affiliateId = "GOOGLE_PR_PS_MSPSYSP"; break;
		  case "GOOGLE_PR_PS_PHDPIOPS": affiliateId = "GOOGLE_PR_PS_PHDPIOPS"; break;
		  case "GOOGLE_PR_PS_PHDPSP": affiliateId = "GOOGLE_PR_PS_PHDPSP"; break;
		  case "GOOGLE_PR_PS_ASITS": affiliateId = "GOOGLE_PR_PS_ASITS"; break;
		  default: affiliateId = '';
	  }
	  $('#affiliateId').attr("value", affiliateId);
  });
  
  // Lets validate first step form.
  function validateOne(){
	  if(window.document.Form1.program.value==''){
		  alert('Por favor seleccione un programa.');
		  window.document.Form1.program.focus();
		  return false;
	  }
	  if(window.document.Form1.ed_level.value==''){
		  alert('Por favor seleccione su nivel de educaciÃ³n.');
		  window.document.Form1.ed_level.focus();
		  return false;
	  }
	  if(window.document.Form1.fname.value==''){
		  alert('Por favor escriba su nombre.');
		  window.document.Form1.fname.focus();
		  return false;
	  }
	  if(window.document.Form1.lname.value==''){
		  alert('Por favor escriba su apellido.');
		  window.document.Form1.lname.focus();
		  return false;
	  }
	  if(window.document.Form1.email.value==''){
		  alert('Por favor escriba su correo electrÃ³nico.');
		  window.document.Form1.email.focus();
		  return false;
	  }
  
	  if (window.document.Form1.program.value!='' && window.document.Form1.ed_level.value!='' && window.document.Form1.fname.value!='' && window.document.Form1.lname.value!='' && window.document.Form1.email.value!=''){
		  // If * inputs OK, show Step 2.
		  $("#form-step-1").hide();
		  $("#form-step-2").show();
		  stepTwoAtlasTag();
		  return true;
	  }
  };
  
  // New Atlas Tags Step01
  $(document).ready(function() {
	  if (window.location.href.indexOf("thankyou") > -1) {
		  // New Atlas Tags Step03 fired in thankyou.php
	  } else {
		  var windowWidth = $(window).width();
		  if (windowWidth < 420) {
				$("#newAtlasTag").attr("src","https://ad.atdmt.com/m/a.js;m=11082201078791;cache="+Math.random()+"?program="+Program+"&event=step1mobile");
		  } else {
				$("#newAtlasTag").attr("src","https://ad.atdmt.com/m/a.js;m=11082201078791;cache="+Math.random()+"?program="+Program+"&event=step1desktop");
		  }
  
		  // Facebook Pixel Code Step1
		  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
		  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
		  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
		  document,'script','https://connect.facebook.net/en_US/fbevents.js');
		  fbq('init', '138547363233597');
		  fbq('track', "PageView")
		  fbq('track', 'ViewContent');
  
	  }
  });
  
  var Program = "";
  
  function stepTwoAtlasTag(){
	  Program = window.document.Form1.program.value;
	  switch(Program){
		  case "DBAS":   Program = 'DBA'; break;
		  case "MBAS":   Program = 'MBA'; break;
		  case "MSMS":   Program = 'MSMAN'; break;
		  case "BABAS":   Program = 'BACHELORS-BA'; break;
		  case "BAHSAS":   Program = 'BAHSAS'; break;
		  case "BABAS-MKT":   Program = 'BACHELORS-BA-MKT'; break;
		  case "BABAS-FIN":   Program = 'BACHELORS-BA-FIN'; break;
		  case "BABAS-MAN":   Program = 'BACHELORS-BA-MGT'; break;
		  case "BABAS-IBT":   Program = 'BACHELORS-BA-INT'; break;
		  case "ESOL":   Program = 'ESOL'; break;
	  }
  
	  // New Atlas Tags Step02
	  var windowWidth = $(window).width();
	  if (windowWidth < 420) {
			$("#newAtlasTag").attr("src","https://ad.atdmt.com/m/a.js;m=11082201078791;cache="+Math.random()+"?program="+Program+"&event=step2mobile");
	  } else {
			$("#newAtlasTag").attr("src","https://ad.atdmt.com/m/a.js;m=11082201078791;cache="+Math.random()+"?program="+Program+"&event=step2desktop");
	  }
  
	  // Facebook Pixel Code Step2
	  fbq('track', 'InitiateCheckout', {
		content_name: Program,
	  });
  
  };
  
  function showStepOne(){
	  $("#form-step-1").show();
	  $("#form-step-2").hide();
  };
  
  // Now second step form validation.
  function validateTwo(){
	  if(window.document.Form1.country.value==''){
		  alert('Por favor seleccione su paÃ­s.');
		  window.document.Form1.country.focus();
		  return false;
	  }
	  if(window.document.Form1.city.value==''){
		  alert('Por favor escriba su ciudad.');
		  window.document.Form1.city.focus();
		  return false;
	  }
	  if(window.document.Form1.phone_day.value==''){
		  alert('Por favor escriba su nÃºmero telefÃ³nico.');
		  window.document.Form1.phone_day.focus();
		  return false;
	  }
  
	  if (window.document.Form1.country.value!='' && window.document.Form1.city.value!='' && window.document.Form1.phone_day.value!=''){
		  // If * inputs OK, submit form.
		  return true;
	  }
  };
  
  // Actual time in milliseconds. Then converted to Base36.
  var timeInMs = new Date().getTime();
  var OrderID = timeInMs.toString(36);
  
  function stepTresGoogleConversionTag(){
	  $.ajax({
		  url: "http://www.googleadservices.com/pagead/conversion/1062123661/?value=1.00&amp;currency_code=USD&amp;label=bnFoCJ-48QEQjfG6-gM&amp;guid=ON&amp;script=0",
		  dataType: "script"
	  });
  };
  
  // Submit form.
  $(document).ready(function() {
	  $('#btnSubmit').click( function() {
		  if (validateOne() && validateTwo()) {
			  stepTresGoogleConversionTag();
			  document.getElementById('Form1').submit();
		  }
	  });
  });
  
  // scroll form up
  $(document).ready(function() {
	  $('.goform').click(function(){
	   $('html, body').animate({
		   scrollTop: $("#feature > div.container").offset().top
	   }, 2000, function(){
  
		   if( $('#mobile-form-button').height() > 0 ) {
			$("#form-container").slideDown();
		}
  
	   });
	   return false;
	  });
  });
  
  // ver mas quotes
  $(document).ready(function(){
	  $('p.quote span.more').hide().after('<a href="">Ver M&aacute;s ></a>');
	  $('p.quote span.more').next('a').click(function(){
		  $(this).hide();
		  $(this).prev('span').show();
		  return false;
	  });
  });
  
  // Get ccValue.
  $(document).ready(function() {
	  $('#country').change(function(){
		  var ccValue = PhoneFormatTable[$(this).val()];
		  if (ccValue) {
			  ccValue = ccValue + ' - ';
		  }
		  $('#phone_day, #phone_cel').val(ccValue);
	  });
  });
  
  // City Code, depending on the Country.
  var PhoneFormatTable = new Object();
  PhoneFormatTable["AF"] = "93";
  PhoneFormatTable["AL"] = "355";
  PhoneFormatTable["DZ"] = "213";
  PhoneFormatTable["AS"] = "684";
  PhoneFormatTable["AD"] = "376";
  PhoneFormatTable["AO"] = "244";
  PhoneFormatTable["AI"] = "264";
  PhoneFormatTable["AQ"] = "672";
  PhoneFormatTable["AG"] = "268";
  PhoneFormatTable["AR"] = "54";
  PhoneFormatTable["AM"] = "374";
  PhoneFormatTable["AW"] = "297";
  PhoneFormatTable["AU"] = "61";
  PhoneFormatTable["AT"] = "43";
  PhoneFormatTable["AZ"] = "994";
  PhoneFormatTable["BS"] = "242";
  PhoneFormatTable["BH"] = "973";
  PhoneFormatTable["BD"] = "880";
  PhoneFormatTable["BB"] = "246";
  PhoneFormatTable["BY"] = "375";
  PhoneFormatTable["BE"] = "32";
  PhoneFormatTable["BZ"] = "501";
  PhoneFormatTable["BJ"] = "229";
  PhoneFormatTable["BM"] = "441";
  PhoneFormatTable["BT"] = "975";
  PhoneFormatTable["BO"] = "591";
  PhoneFormatTable["BA"] = "387";
  PhoneFormatTable["BW"] = "267";
  PhoneFormatTable["BV"] = "000";
  PhoneFormatTable["BR"] = "55";
  PhoneFormatTable["IO"] = "000";
  PhoneFormatTable["BN"] = "673";
  PhoneFormatTable["BG"] = "359";
  PhoneFormatTable["BF"] = "226";
  PhoneFormatTable["BI"] = "257";
  PhoneFormatTable["KH"] = "855";
  PhoneFormatTable["CM"] = "237";
  PhoneFormatTable["CA"] = "";
  PhoneFormatTable["CV"] = "238";
  PhoneFormatTable["KY"] = "345";
  PhoneFormatTable["CF"] = "236";
  PhoneFormatTable["TD"] = "235";
  PhoneFormatTable["CL"] = "56";
  PhoneFormatTable["CN"] = "86";
  PhoneFormatTable["CX"] = "672";
  PhoneFormatTable["CC"] = "672";
  PhoneFormatTable["CO"] = "57";
  PhoneFormatTable["KM"] = "269";
  PhoneFormatTable["CG"] = "242";
  PhoneFormatTable["CD"] = "242";
  PhoneFormatTable["CK"] = "682";
  PhoneFormatTable["CR"] = "506";
  PhoneFormatTable["CI"] = "225";
  PhoneFormatTable["HR"] = "385";
  PhoneFormatTable["CU"] = "53";
  PhoneFormatTable["CY"] = "357";
  PhoneFormatTable["CZ"] = "420";
  PhoneFormatTable["DK"] = "45";
  PhoneFormatTable["DJ"] = "253";
  PhoneFormatTable["DM"] = "767";
  PhoneFormatTable["DO"] = "809";
  PhoneFormatTable["EC"] = "593";
  PhoneFormatTable["EG"] = "20";
  PhoneFormatTable["SV"] = "503";
  PhoneFormatTable["GQ"] = "245";
  PhoneFormatTable["ER"] = "291";
  PhoneFormatTable["EE"] = "372";
  PhoneFormatTable["ET"] = "251";
  PhoneFormatTable["FK"] = "500";
  PhoneFormatTable["FO"] = "298";
  PhoneFormatTable["FM"] = "691";
  PhoneFormatTable["FJ"] = "679";
  PhoneFormatTable["FI"] = "358";
  PhoneFormatTable["FR"] = "33";
  PhoneFormatTable["GF"] = "594";
  PhoneFormatTable["PF"] = "689";
  PhoneFormatTable["TF"] = "596";
  PhoneFormatTable["GA"] = "241";
  PhoneFormatTable["GM"] = "220";
  PhoneFormatTable["GE"] = "995";
  PhoneFormatTable["DE"] = "49";
  PhoneFormatTable["GH"] = "233";
  PhoneFormatTable["GI"] = "350";
  PhoneFormatTable["GR"] = "30";
  PhoneFormatTable["GL"] = "299";
  PhoneFormatTable["GD"] = "473";
  PhoneFormatTable["GP"] = "590";
  PhoneFormatTable["GU"] = "671";
  PhoneFormatTable["GT"] = "502";
  PhoneFormatTable["GN"] = "224";
  PhoneFormatTable["GW"] = "245";
  PhoneFormatTable["GY"] = "592";
  PhoneFormatTable["HT"] = "509";
  PhoneFormatTable["HM"] = "000";
  PhoneFormatTable["VA"] = "39";
  PhoneFormatTable["HN"] = "504";
  PhoneFormatTable["HK"] = "852";
  PhoneFormatTable["HU"] = "36";
  PhoneFormatTable["IS"] = "354";
  PhoneFormatTable["IN"] = "91";
  PhoneFormatTable["ID"] = "62";
  PhoneFormatTable["IR"] = "98";
  PhoneFormatTable["IQ"] = "964";
  PhoneFormatTable["IE"] = "353";
  PhoneFormatTable["IL"] = "972";
  PhoneFormatTable["IT"] = "39";
  PhoneFormatTable["JM"] = "876";
  PhoneFormatTable["JP"] = "81";
  PhoneFormatTable["JO"] = "962";
  PhoneFormatTable["KZ"] = "7";
  PhoneFormatTable["KE"] = "254";
  PhoneFormatTable["KI"] = "686";
  PhoneFormatTable["KP"] = "82";
  PhoneFormatTable["KR"] = "850";
  PhoneFormatTable["KW"] = "965";
  PhoneFormatTable["KG"] = "7";
  PhoneFormatTable["LA"] = "856";
  PhoneFormatTable["LV"] = "371";
  PhoneFormatTable["LB"] = "961";
  PhoneFormatTable["LS"] = "266";
  PhoneFormatTable["LR"] = "231";
  PhoneFormatTable["LY"] = "218";
  PhoneFormatTable["LI"] = "423";
  PhoneFormatTable["LT"] = "370";
  PhoneFormatTable["LU"] = "352";
  PhoneFormatTable["MO"] = "853";
  PhoneFormatTable["MK"] = "389";
  PhoneFormatTable["MG"] = "261";
  PhoneFormatTable["MW"] = "265";
  PhoneFormatTable["MY"] = "60";
  PhoneFormatTable["MV"] = "90";
  PhoneFormatTable["ML"] = "223";
  PhoneFormatTable["MT"] = "356";
  PhoneFormatTable["MH"] = "692";
  PhoneFormatTable["MQ"] = "596";
  PhoneFormatTable["MR"] = "222";
  PhoneFormatTable["MU"] = "230";
  PhoneFormatTable["YT"] = "269";
  PhoneFormatTable["MX"] = "52";
  PhoneFormatTable["MD"] = "373";
  PhoneFormatTable["MC"] = "33";
  PhoneFormatTable["MN"] = "976";
  PhoneFormatTable["MS"] = "473";
  PhoneFormatTable["MA"] = "212";
  PhoneFormatTable["MZ"] = "258";
  PhoneFormatTable["MM"] = "95";
  PhoneFormatTable["NA"] = "264";
  PhoneFormatTable["NR"] = "674";
  PhoneFormatTable["NP"] = "977";
  PhoneFormatTable["NL"] = "31";
  PhoneFormatTable["AN"] = "599";
  PhoneFormatTable["NC"] = "687";
  PhoneFormatTable["NZ"] = "64";
  PhoneFormatTable["NI"] = "505";
  PhoneFormatTable["NE"] = "227";
  PhoneFormatTable["NG"] = "234";
  PhoneFormatTable["NU"] = "683";
  PhoneFormatTable["NF"] = "672";
  PhoneFormatTable["MP"] = "670";
  PhoneFormatTable["NO"] = "47";
  PhoneFormatTable["OM"] = "968";
  PhoneFormatTable["PK"] = "92";
  PhoneFormatTable["PW"] = "680";
  PhoneFormatTable["PA"] = "507";
  PhoneFormatTable["PG"] = "675";
  PhoneFormatTable["PY"] = "595";
  PhoneFormatTable["PE"] = "51";
  PhoneFormatTable["PH"] = "63";
  PhoneFormatTable["PN"] = "649";
  PhoneFormatTable["PL"] = "48";
  PhoneFormatTable["PT"] = "351";
  PhoneFormatTable["PR"] = "787";
  PhoneFormatTable["QA"] = "974";
  PhoneFormatTable["RE"] = "262";
  PhoneFormatTable["RO"] = "40";
  PhoneFormatTable["RU"] = "7";
  PhoneFormatTable["RW"] = "250";
  PhoneFormatTable["GS"] = "500";
  PhoneFormatTable["KN"] = "869";
  PhoneFormatTable["LC"] = "758";
  PhoneFormatTable["VC"] = "809";
  PhoneFormatTable["SM"] = "378";
  PhoneFormatTable["ST"] = "239";
  PhoneFormatTable["SA"] = "966";
  PhoneFormatTable["SN"] = "221";
  PhoneFormatTable["SC"] = "248";
  PhoneFormatTable["SL"] = "232";
  PhoneFormatTable["SG"] = "65";
  PhoneFormatTable["SK"] = "421";
  PhoneFormatTable["SI"] = "386";
  PhoneFormatTable["SB"] = "677";
  PhoneFormatTable["SO"] = "252";
  PhoneFormatTable["ZA"] = "27";
  PhoneFormatTable["ES"] = "34";
  PhoneFormatTable["LK"] = "94";
  PhoneFormatTable["SH"] = "290";
  PhoneFormatTable["PM"] = "508";
  PhoneFormatTable["SD"] = "249";
  PhoneFormatTable["SR"] = "597";
  PhoneFormatTable["SJ"] = "79";
  PhoneFormatTable["SZ"] = "268";
  PhoneFormatTable["SE"] = "46";
  PhoneFormatTable["CH"] = "41";
  PhoneFormatTable["SY"] = "963";
  PhoneFormatTable["TW"] = "886";
  PhoneFormatTable["TJ"] = "992";
  PhoneFormatTable["TZ"] = "255";
  PhoneFormatTable["TH"] = "66";
  PhoneFormatTable["TG"] = "228";
  PhoneFormatTable["TK"] = "690";
  PhoneFormatTable["TO"] = "676";
  PhoneFormatTable["TT"] = "868";
  PhoneFormatTable["TN"] = "216";
  PhoneFormatTable["TR"] = "90";
  PhoneFormatTable["TM"] = "993";
  PhoneFormatTable["TC"] = "649";
  PhoneFormatTable["TV"] = "688";
  PhoneFormatTable["UG"] = "256";
  PhoneFormatTable["UA"] = "380";
  PhoneFormatTable["AE"] = "971";
  PhoneFormatTable["GB"] = "44";
  PhoneFormatTable["US"] = "";
  PhoneFormatTable["UM"] = "808";
  PhoneFormatTable["UY"] = "598";
  PhoneFormatTable["UZ"] = "998";
  PhoneFormatTable["VU"] = "678";
  PhoneFormatTable["VE"] = "58";
  PhoneFormatTable["VN"] = "84";
  PhoneFormatTable["VG"] = "284";
  PhoneFormatTable["VI"] = "340";
  PhoneFormatTable["WF"] = "681";
  PhoneFormatTable["EH"] = "212";
  PhoneFormatTable["WS"] = "685";
  PhoneFormatTable["YE"] = "967";
  PhoneFormatTable["YU"] = "381";
  PhoneFormatTable["ZM"] = "260";
  PhoneFormatTable["ZW"] = "263";
  
  $(document).ready(function(){
	  // Get current href and add GCID and AFID parameters. Saved into a var to use later.
	  var addParam = "location.href=this.href+'?GCID='+final_gcid+'&AFID='+final_afid;return false;";
  
	  // A var containing all elements in the Array returned by getElementsByClassName.
	  var sectionsArray = document.getElementsByClassName("kuSections");
  
	  // Set the Attr that will do the magic to each element in the Array.
	  for (i = 0; i < sectionsArray.length; i++) {
		  sectionsArray[i].setAttribute("onclick",addParam);
	  }
  });