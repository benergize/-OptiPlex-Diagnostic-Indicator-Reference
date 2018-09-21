var codes_beep = [
	{
		beep_one:1,
		beep_two:1,
		beep_three:2,  
		error_desc:"Microprocessor register failure.",
		error_res:"Contact Technical Support."
	}, 
	
	{
		beep_one:1,
		beep_two:1,
		beep_three:3,  
		error_desc:"NVRAM.",
		error_res:"Run the Dell Diagnostics."
	}, 
	
	{
		beep_one:1,
		beep_two:1,
		beep_three:4,  
		error_desc:"ROM BIOS checksum failure.",
		error_res:"Run the Dell Diagnostics."
	}, 
	
	{
		beep_one:1,
		beep_two:2,
		beep_three:1,  
		error_desc:"Programmable interval timer.",
		error_res:"Run the Dell Diagnostics."
	}, 
	
	{
		beep_one:1,
		beep_two:2,
		beep_three:2,  
		error_desc:"DMA initialization failure.",
		error_res:"Run the Dell Diagnostics."
	}, 
	
	{
		beep_one:1,
		beep_two:2,
		beep_three:3,  
		error_desc:"DMA page register read/write failure.",
		error_res:"Run the Dell Diagnostics."
	}, 
	
	{ beep_one:1, beep_two:3, beep_three:1, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, 
	{ beep_one:1, beep_two:3, beep_three:2, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, 
	{ beep_one:1, beep_two:3, beep_three:3, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, 
	{ beep_one:1, beep_two:3, beep_three:4, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, //
	{ beep_one:1, beep_two:4, beep_three:1, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, 
	{ beep_one:1, beep_two:4, beep_three:2, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, 
	{ beep_one:1, beep_two:4, beep_three:3, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, 
	{ beep_one:1, beep_two:4, beep_three:4, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, //
	{ beep_one:2, beep_two:1, beep_three:1, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, 
	{ beep_one:2, beep_two:1, beep_three:2, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, 
	{ beep_one:2, beep_two:1, beep_three:3, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, 
	{ beep_one:2, beep_two:1, beep_three:4, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, //
	{ beep_one:2, beep_two:2, beep_three:1, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, 
	{ beep_one:2, beep_two:2, beep_three:2, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." },
	{ beep_one:2, beep_two:2, beep_three:3, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." },
	{ beep_one:2, beep_two:2, beep_three:4, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, //
	{ beep_one:2, beep_two:3, beep_three:1, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, 
	{ beep_one:2, beep_two:3, beep_three:2, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, 
	{ beep_one:2, beep_two:3, beep_three:3, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, 
	{ beep_one:2, beep_two:3, beep_three:4, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, //
	{ beep_one:2, beep_two:4, beep_three:1, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, 
	{ beep_one:2, beep_two:4, beep_three:2, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, 
	{ beep_one:2, beep_two:4, beep_three:3, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." },
	{ beep_one:2, beep_two:4, beep_three:4, error_desc:"DIMMs not being properly identified or used", error_res:"Troubleshoot the memory modules and the memory slots." }, 
	
	
	{
		beep_one:3,
		beep_two:1,
		beep_three:1,  
		error_desc:"Slave DMA register failure.",
		error_res:"Run the Dell Diagnostics."
	}, 
	
	{
		beep_one:3,
		beep_two:1,
		beep_three:2,  
		error_desc:"Master DMA register failure.",
		error_res:"Run the Dell Diagnostics."
	}, 
	
	{
		beep_one:3,
		beep_two:1,
		beep_three:3,  
		error_desc:"Master interrupt mask register failure.",
		error_res:"Contact Technical Support."
	}, 
	
	{
		beep_one:3,
		beep_two:1,
		beep_three:4,  
		error_desc:"Slave interrupt mask register failure.",
		error_res:"Contact Technical Support."
	}, 
	
	{
		beep_one:3,
		beep_two:2,
		beep_three:2,  
		error_desc:"Interrupt vector loading failure.",
		error_res:"Contact Technical Support."
	}, 
	
	{
		beep_one:3,
		beep_two:2,
		beep_three:4,  
		error_desc:"Keyboard Controller test failure.",
		error_res:"Run the Dell Diagnostics."
	}, 
	
	{
		beep_one:3,
		beep_two:3,
		beep_three:1,  
		error_desc:"NVRAM power loss.",
		error_res:"Run the Dell Diagnostics."
	}, 
	
	{
		beep_one:3,
		beep_two:3,
		beep_three:2,  
		error_desc:"NVRAM configuration.",
		error_res:"Run the Dell Diagnostics."
	}, 
	
	{
		beep_one:3,
		beep_two:3,
		beep_three:4,  
		error_desc:"Video Memory Test failure.",
		error_res:"Run the Dell Diagnostics."
	}, 
	
	{
		beep_one:3,
		beep_two:4,
		beep_three:1,  
		error_desc:"Screen initialization failure.",
		error_res:"Run the Dell Diagnostics."
	}, 
	
	{
		beep_one:3,
		beep_two:4,
		beep_three:2,  
		error_desc:"Screen retrace failure.",
		error_res:"Run the Dell Diagnostics."
	}, 
	
	{
		beep_one:3,
		beep_two:4,
		beep_three:3,  
		error_desc:"Search for video ROM failure.",
		error_res:"Run the Dell Diagnostics."
	}, 
	
	{
		beep_one:4,
		beep_two:4,
		beep_three:1,  
		error_desc:"No time tick.",
		error_res:"Contact Technical Support."
	}, 
	
	{
		beep_one:4,
		beep_two:2,
		beep_three:1,  
		error_desc:"No time tick.",
		error_res:"Contact Technical Support."
	}, 
	
	{
		beep_one:4,
		beep_two:2,
		beep_three:2,  
		error_desc:"Shutdown failure.",
		error_res:"Contact Technical Support."
	}, 
	
	{
		beep_one:4,
		beep_two:2,
		beep_three:3,  
		error_desc:"Gate A20 failure.",
		error_res:"Contact Technical Support."
	}, 
	
	{
		beep_one:4,
		beep_two:2,
		beep_three:4,  
		error_desc:"Unexpected interrupt in protected mode.",
		error_res:"Contact Technical Support."
	}, 
	
	{
		beep_one:4,
		beep_two:3,
		beep_three:1,  
		error_desc:"Memory failure above address 0FFFFh.",
		error_res:"Run the Dell Diagnostics."
	}, 
	
	{
		beep_one:4,
		beep_two:3,
		beep_three:3,  
		error_desc:"Timer-chip counter 2 failure.",
		error_res:"Contact Technical Support."
	}, 
	
	{
		beep_one:4,
		beep_two:3,
		beep_three:4,  
		error_desc:"Time-of-day clock stopped.",
		error_res:"Contact Technical Support."
	}, 
	
	{
		beep_one:4,
		beep_two:4,
		beep_three:1,  
		error_desc:"Serial or parallel port test failure.",
		error_res:"Run the Dell Diagnostics."
	}, 
	
	{
		beep_one:4,
		beep_two:4,
		beep_three:1,  
		error_desc:"Failure to decompress code to shadowed memory.",
		error_res:"Run the Dell Diagnostics."
	}, 
	
	{
		beep_one:4,
		beep_two:4,
		beep_three:2,  
		error_desc:"Failure to decompress code to shadowed memory.",
		error_res:"Run the Dell Diagnostics."
	}, 
	
	{
		beep_one:4,
		beep_two:4,
		beep_three:3,  
		error_desc:"Math coprocessor test failure.",
		error_res:"Run the Dell Diagnostics."
	}, 
	
	{
		beep_one:4,
		beep_two:4,
		beep_three:4,  
		error_desc:"Cache test failure.",
		error_res:"Run the Dell Diagnostics."
	}
];