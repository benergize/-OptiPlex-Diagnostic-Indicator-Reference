var leds = [false,false,false,false];
var powerState = "white";

//-------------------------------------------------------
//
//  Figure out which error to report for 2005-2009 optiplex models
//

function evalError_0509(pos) { 
	if(leds[pos]) { leds[pos] = false; }
	else { leds[pos] = true; }
	
	led1 = leds[0];
	led2 = leds[1];
	led3 = leds[2];
	led4 = leds[3];
	
	if(led1) { document.getElementById('led1').style['background'] = "url('img/led_orange.png')" } else { document.getElementById('led1').style['background'] = "url('img/led_white.png')"} 
	if(led2) { document.getElementById('led2').style['background'] = "url('img/led_orange.png')" } else { document.getElementById('led2').style['background'] = "url('img/led_white.png')"} 
	if(led3) { document.getElementById('led3').style['background'] = "url('img/led_orange.png')" } else { document.getElementById('led3').style['background'] = "url('img/led_white.png')"} 
	if(led4) { document.getElementById('led4').style['background'] = "url('img/led_orange.png')" } else { document.getElementById('led4').style['background'] = "url('img/led_white.png')"} 
	
	for(var v = 0; v < codes_0509.length; v++) {
		if(codes_0509[v].led_one == led1 && codes_0509[v].led_two == led2 && codes_0509[v].led_three == led3 && codes_0509[v].led_four == led4) {
			document.getElementById('problemDesc').innerHTML = "<br/><br/><b>State " + codes_0509[v].error_state + ": </b><br/><br/><u>" + codes_0509[v].error_desc + "</u>";
			document.getElementById('problemDesc').innerHTML += "<br/><br/>" + codes_0509[v].error_res;
			return;
		}
	}
	
	document.getElementById('problemDesc').innerHTML = "<br/><br/>Not a valid error.";
}

//-------------------------------------------------------
//
//  Figure out which error to report for 2009-2012 optiplex models
//

function evalError(pos) { 
	if(leds[pos]) { leds[pos] = false; }
	else { leds[pos] = true; }
	
	led1 = leds[0];
	led2 = leds[1];
	led3 = leds[2];
	led4 = leds[3];
	
	if(led1) { document.getElementById('led1b').style['background'] = "url('img/led_orange.png')" } else { document.getElementById('led1b').style['background'] = "url('img/led_white.png')"} 
	if(led2) { document.getElementById('led2b').style['background'] = "url('img/led_orange.png')" } else { document.getElementById('led2b').style['background'] = "url('img/led_white.png')"} 
	if(led3) { document.getElementById('led3b').style['background'] = "url('img/led_orange.png')" } else { document.getElementById('led3b').style['background'] = "url('img/led_white.png')"} 
	if(led4) { document.getElementById('led4b').style['background'] = "url('img/led_orange.png')" } else { document.getElementById('led4b').style['background'] = "url('img/led_white.png')"} 
	
	for(var v = 0; v < codes_0912.length; v++) {
		if(codes_0912[v].led_one == led1 && codes_0912[v].led_two == led2 && codes_0912[v].led_three == led3 && codes_0912[v].led_four == led4 && codes_0912[v].led_power_color == powerState) {
			document.getElementById('problemDesc').innerHTML = "<br/><br/><u>" + codes_0912[v].error_desc + "</u>";
			document.getElementById('problemDesc').innerHTML += "<br/><br/>" + codes_0912[v].error_res;
			return;
		}
	}
	
	document.getElementById('problemDesc').innerHTML = "<br/><br/>Not a valid error.";
}

//-------------------------------------------------------
//
//  Show or hide power button on certain optiplex models
//

function togglePowerButton() {
	if(powerState == "white") { powerState = "orange"; }
	else if(powerState == "orange") { powerState = "blue"; }
	else if(powerState == "blue") { powerState = "white"; }
	
	document.getElementById("powerButton").src = "img/"+powerState+".png";
	
	console.log(powerState);
	
	evalError();
}



//-------------------------------------------------------
//
//  Change models (activated from model select menu)
//
function changeModel(model) {

	for(var v = 0; v < leds.length; v++) { leds[v] = false; }

	document.getElementById('modelSelect').style['display'] = "none";
	document.getElementById('helpText').style['display'] = "none";
	document.getElementById('problemDesc').style['display'] = "block"; 
	
	for(var v = 0; v < pages.length; v++) {	pages[v].style['display'] = "none"; }

	if(model == 0){ 
		document.getElementById('gen_0509').style['display'] = "block"; 
		document.getElementById('modelId').innerHTML = "Dell Optiplex 2005-2009";
		evalError_0509();
	}
	else if(model == 1){ 
		document.getElementById('gen_0912').style['display'] = "block";  
		document.getElementById('modelId').innerHTML = "Dell Optiplex 2009-2012";
		evalError();
	}
	else if(model == 2){
		document.getElementById('gen_12xx').style['display'] = "block";   
		document.getElementById('modelId').innerHTML = "Dell Optiplex 2012-Present";
		evalError_12xx();
	}
	else if(model == 3){
		document.getElementById('beep_codes').style['display'] = "block";    
		document.getElementById('modelId').innerHTML = "Dell Optiplex Beep Codes";
		evalError_beep();
	}
	
	document.getElementById('backButton').style['visibility'] = "visible";
}

//-------------------------------------------------------
//
//  Figure out which error to report for 2012-present optiplex models
//

function evalError_12xx() {

	blink_one = document.getElementById('blink_one').value;
	blink_two = document.getElementById('blink_two').value;
	
	for(var v = 0; v < codes_12xx.length; v++) {
		if(codes_12xx[v].blink_one == blink_one && codes_12xx[v].blink_two == blink_two) {
			document.getElementById('problemDesc').innerHTML = "<br/><br/><u>" + codes_12xx[v].error_desc + "</u>";
			document.getElementById('problemDesc').innerHTML += "<br/><br/>" + codes_12xx[v].error_res;
			return;
		}
	}
	
	document.getElementById('problemDesc').innerHTML = "<br/><br/>Not a valid error.";
}


//-------------------------------------------------------
//
//  Figure out which error to report from optiplex beep codes
//

function evalError_beep() {

	beep_one = document.getElementById('beep_one').value;
	beep_two = document.getElementById('beep_two').value;
	beep_three = document.getElementById('beep_three').value;
	
	for(var v = 0; v < codes_beep.length; v++) {
		if(codes_beep[v].beep_one == beep_one && codes_beep[v].beep_two == beep_two && codes_beep[v].beep_three == beep_three) {
			document.getElementById('problemDesc').innerHTML = "<br/><br/><u>" + codes_beep[v].error_desc + "</u>";
			document.getElementById('problemDesc').innerHTML += "<br/><br/>" + codes_beep[v].error_res;
			return;
		}
	}
	
	document.getElementById('problemDesc').innerHTML = "<br/><br/>Not a valid error.";
}


