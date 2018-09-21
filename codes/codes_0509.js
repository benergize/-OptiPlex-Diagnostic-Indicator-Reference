var codes_0509 = [
	
	{
		led_one:false,
		led_two:false,
		led_three:false,
		led_four:false,
		error_state:"OFF",
		error_desc:"System POST complete - LED time-out has occurred.",
		error_res:"If the LEDs came on and then went off, look at troubleshooting the display and the operating system. If the LEDs never came on at any point then look into a power issue."
	},
	
	{
		led_one:false,
		led_two:false,
		led_three:false,
		led_four:true,
		error_state:"RCM",
		error_desc:"System POST complete - LED time-out has occurred.",
		error_res:"If the LEDs came on and then went off, look at troubleshooting the display and the operating system. If the LEDs never came on at any point then look into a power issue."
	},
	
	{
		led_one:false,
		led_two:false,
		led_three:true,
		led_four:false,
		error_state:"CPU",
		error_desc:"CPU configuration activity or failure; CPU Cache failure.",
		error_res:"Disconnect all external peripherals and configure PC down to PSU, Motherboard and CPU If fault continues contact your technical support If fault stops, plug disconnected parts back one at a time until fault re-occurs. Contact your technical support to take this further."
	},
	
	{
		led_one:false,
		led_two:false,
		led_three:true,
		led_four:true,
		error_state:"MEM",
		error_desc:"Memory subsystem configuration activity or failure.",
		error_res:"Remove all memory from PC, does the LED code change? If it doesn't contact your technical support If it does add the memory modules back one at a time until the fault re-occurs, test that module in another slot and contact your technical support."
	},
	
	{
		led_one:false,
		led_two:true,
		led_three:false,
		led_four:true,
		error_state:"VID",
		error_desc:"Video subsystem configuration or failure.",
		error_res:"Ensure the video cable is connected to the correct port Reseat any add in graphics cards If fault continues, remove any add in graphics cards and test with known good monitor and video cable Contact your technical support once you know which part the fault follows."
	},
	
	{
		led_one:false,
		led_two:true,
		led_three:true,
		led_four:false,
		error_state:"STO",
		error_desc:"Storage device configuration or failure.",
		error_res:"Reseat the cables from the HDDs to the motherboard If fault continues try substituting a known good HDD into the system and contact your technical support."
	},
	
	{
		led_one:false,
		led_two:true,
		led_three:true,
		led_four:true,
		error_state:"USB",
		error_desc:"USB subsystem configuration activity or failure.",
		error_res:"Remove all external peripherals and any internal CRUs If LEDs change, add parts back one at a time until fault re-occurs and contact your technical support If fault remains the same with parts removed, contact your technical support."
	},
	
	{
		led_one:true,
		led_two:false,
		led_three:false,
		led_four:false,
		error_state:"",
		error_desc:"No memory detected.",
		error_res:"Install or reseat all memory modules. If fault continues, try the memory in different slots and contact your technical support."
	},
	
	{
		led_one:true,
		led_two:false,
		led_three:false,
		led_four:true,
		error_state:"MBF",
		error_desc:"Fatal system board failure detected.",
		error_res:"Contact your technical support."
	},
	
	{
		led_one:true,
		led_two:false,
		led_three:true,
		led_four:false,
		error_state:"MBF",
		error_desc:"Memory is detected, configuration or compatibility error.",
		error_res:"Reset the BIOS and clear the NVRAM and any previous errors Remove all memory from PC, (This includes any Graphics cards.) does the LED code change? If it doesn't contact your technical support If it does add the parts back one at a time until the fault re-occurs, test that part in another slot and contact your technical support."
	},
	
	{
		led_one:true,
		led_two:false,
		led_three:true,
		led_four:true,
		error_state:"PRV",
		error_desc:"Indicates system activity preceding video initialization.",
		error_res:"Remove all external peripherals and any internal CRUs If LEDs change, add parts back one at a time until fault re-occurs and contact your technical support If fault remains the same with parts removed, contact your technical support."
	},
	
	{
		led_one:true,
		led_two:true,
		led_three:false,
		led_four:false,
		error_state:"CFG",
		error_desc:"System resource configuration.",
		error_res:"Reset the BIOS and clear the NVRAM and any previous errors Remove all external peripherals If LEDs change, add parts back one at a time until fault re-occurs and contact your technical support If fault remains the same with parts removed, contact your technical support."
	},
	
	{
		led_one:true,
		led_two:true,
		led_three:false,
		led_four:true,
		error_state:"CFG",
		error_desc:"Reserved.",
		error_res:"Reserved."
	},
	
	{
		led_one:true,
		led_two:true,
		led_three:true,
		led_four:false,
		error_state:"POV",
		error_desc:"POST complete --  Onscreen error message.",
		error_res:"Troubleshoot as per the error message onscreen."
	},
	
	{
		led_one:true,
		led_two:true,
		led_three:true,
		led_four:true,
		error_state:"STD",
		error_desc:"POST complete -- OS hand-off complete.",
		error_res:"The Power On Self Test has passed all checks Troubleshoot the HDD and the Operating System."
	},
	
	
];