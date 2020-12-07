const Home = {
	"template": `
		 <div>
			<p> 
				Dell OptiPlex computers come with a variety of error diagnostic tools including numbered LED lights and beep codes. Select your OptiPlex model and enter the error you see on your computer to see the error description. 
			</p>
			
			<div>
				<router-link v-bind:to = 'section.href'  class = 'pages' v-for='section in sections'>{{section.text}}</router-link>
			</div>
		</div>
	`,
	data() {
		return {
			"sections": [
				{"text":"Dell OptiPlex 2005-2009","href":"/2005"},
				{"text":"Dell Optiplex 2009-2012","href":"/2009"},
				{"text":"Dell Optiplex 2012-Present","href":"/2012"},
				{"text":"Beep Codes","href":"/Beep"}
			]
		}
	}
};