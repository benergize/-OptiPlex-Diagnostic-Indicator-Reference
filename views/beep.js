 const Beep = {
	"template": `
		 <transition name="slide"><div class = 'content'>
			<div class="controls">
				
				Beep Pattern:<br><br/>
				<select v-model="beep_one" v-on:change="evaluateError();">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
				</select> 
				 - 
				<select v-model="beep_two" v-on:change="evaluateError();">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option> 
				</select> 
				 - 
				<select v-model="beep_three" v-on:change="evaluateError();">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option> 
				</select> 
			</div>
			<div> 
				<u>{{desc}}</u> 
				<p>{{res}}</p>
			</div>
		</div></transition>
	`,
	data(){
		return { 
			desc: "", 
			res:"",
			beep_one:"1",
			beep_two:"1",
			beep_three:"1"
		}
	},
	created: function() {this.evaluateError()},
	"methods": {
		evaluateError: function() {
			
			let code = codes_beep.filter(code=>{
				return String(code.beep_one) == this.beep_one && 
				String(code.beep_two) == this.beep_two && 
				String(code.beep_three) == this.beep_three 
			}); 
			
			 
			this.desc = code[0] ? code[0].error_desc : "Not a valid error.";
			this.res = code[0] ? code[0].error_res : "Not a valid error.";
			 
		}
	}
};