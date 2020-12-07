 const Gen9 = {
	"template": `
		<div class = 'content'>
			<div class = 'controls'>
				<button v-for = '(led, it) in leds' class = 'led' v-on:click = 'toggleLit(it)' v-bind:style="{backgroundImage:'url(' + led.bg + ')' }">{{it}}</button> 
				<img id="powerButton" v-on:click="toggleLit(5)" v-bind:src="'img/'+power.states[power.state]+'.png'" style="vertical-align:middle;">
			</div> 
			<div> 
				<u>{{desc}}</u>
				<p>{{res}}</p>
			</div>
		</div>
	`,
	created: function() {this.evaluateError()},
	data(){
		return {
			
			desc:"",
			res:"",
			active:"img/led_orange.png",
			inactive:"img/led_white.png",
			leds: [
				{lit: false, bg: "img/led_white.png"},
				{lit: false, bg: "img/led_white.png"},
				{lit: false, bg: "img/led_white.png"},
				{lit: false, bg: "img/led_white.png"}
			],
			
			power: { state: 0, states: ["white","orange","blue"] }
		}
	},
	"methods": {
		toggleLit: function(pos) {
			
			if(pos !== 5) {
				this.leds[pos].lit = !this.leds[pos].lit;
				this.leds[pos].bg = this.leds[pos].lit ? this.active : this.inactive;
			}
			else {
				this.power.state = this.power.state < 2 ? this.power.state + 1 : 0;
			}
			
			this.evaluateError();
		},
		evaluateError: function() {
			
			
			let code = codes_0912 .filter(code=>{
				return code.led_one === this.leds[0].lit && 
				code.led_two === this.leds[1].lit && 
				code.led_three === this.leds[2].lit && 
				code.led_four === this.leds[3].lit &&
				code.led_power_color === this.power.states[this.power.state]
			}); 
			
			
			this.desc = code[0] ? code[0].error_desc : "Not a valid error.";
			this.res = code[0] ? code[0].error_res : "Not a valid error.";
			 
		}
	}
};