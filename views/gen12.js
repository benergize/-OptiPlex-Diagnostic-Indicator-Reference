 const Gen12 = {
	"template": `
		 <transition name="slide"><div class = 'content'>
			<div class="controls">
				Light Blink Pattern:<br>
				<select v-model:selected="blink_one" v-on:change="evaluateError()">
					<option value="2">2</option>
					<option value="3">3</option>
				</select> 
				blinks, then pause, then 
				<select v-model:selected="blink_two" v-on:change="evaluateError()">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option> 
				</select> 
				blinks.
			</div>
			<div> 
				<b>State {{state}}: {{name}}</b>
				<u>{{desc}}</u>
				<p>{{res}}</p>
			</div>
		</div></transition>
	`,
	data(){
		return {
			state:"",
			name:"",
			desc: "",
			res: "",
			blink_one:"2",
			blink_two:"1"
		}
	},
	"created": function() {this.evaluateError()},
	"methods": {
		evaluateError: function() {
			
			let code = codes_12xx.filter(code=>{
				return String(code.blink_one) == this.blink_one && String(code.blink_two) == this.blink_two;
			}); 
			
			
			this.state = code[0] ? code[0].error_start : " ";
			this.name = code[0] ? code[0].error_state_name : " ";
			this.desc = code[0] ? code[0].error_desc : "Not a valid error.";
			this.res = code[0] ? code[0].error_res : "Not a valid error.";
			 
		}
	}
};