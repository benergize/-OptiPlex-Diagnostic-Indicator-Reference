 
const Gen5 = {
	"template": `
		<div class = 'content'>
			<div class = 'controls'>
				<button v-for = '(led, it) in leds' class = 'led' v-on:click = 'toggleLit(it)' v-bind:style="{backgroundImage:'url(' + led.bg + ')' }">{{it}}</button>  
			</div> 
			<div>
				<b>State {{state}}:</b>
				<u>{{desc}}</u>
				<p>{{res}}</p>
			</div>
		</div>
	`,
	created: function() {this.evaluateError()},
	data(){
		return {
			state:"N.A.",
			desc:"",
			res:"",
			active:"img/led_orange.png",
			inactive:"img/led_white.png",
			leds: [
				{lit: false, bg: "img/led_white.png"},
				{lit: false, bg: "img/led_white.png"},
				{lit: false, bg: "img/led_white.png"},
				{lit: false, bg: "img/led_white.png"}
			]
		}
	},
	"methods": {
		toggleLit: function(pos) { 
			this.leds[pos].lit = !this.leds[pos].lit;
			this.leds[pos].bg = this.leds[pos].lit ? this.active : this.inactive;
			
			this.evaluateError();
		},
		evaluateError: function() {
			
			let code = codes_0509.filter(code=>{
				return code.led_one === this.leds[0].lit && 
				code.led_two === this.leds[1].lit && 
				code.led_three === this.leds[2].lit && 
				code.led_four === this.leds[3].lit
			});
			
			this.state = code[0] ? code[0].error_state : "N.A."; 
			this.desc = code[0] ? code[0].error_desc : "Not a valid error.";
			this.res = code[0] ? code[0].error_res : "Not a valid error.";
			 
		}
	}
};