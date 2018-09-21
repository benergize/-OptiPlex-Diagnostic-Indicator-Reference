var codes_12xx = [
	{
		blink_one:2,
		blink_two:1,
		error_state:"",
		error_state_name:"",
		error_desc:"Bad Motherboard.",
		error_res:"Replace the motherboard"
	},
	
	{
		blink_one:2,
		blink_two:2,
		error_state:"",
		error_state_name:"",
		error_desc:"Bad Motherboard, Power Supply or Power Supply cabling.",
		error_res:"If you can assist to troubleshoot, narrow down the issue with PSU BIST Test, reseat cable. If nothing works, replace the motherboard, power supply or cabling."
	},
	
	{
		blink_one:2,
		blink_two:3,
		error_state:"",
		error_state_name:"",
		error_desc:"Bad Motherboard, Memory or Processor.",
		error_res:"If you can assist to troubleshoot, narrow down the issue by reseating memory and swapping a known good memory if available. If nothing works, replace the motherboard, memory or processor."
	},
	
	{
		blink_one:2,
		blink_two:4,
		error_state:"",
		error_state_name:"",
		error_desc:"Bad coin cell battery.",
		error_res:"If you can assist to troubleshoot, narrow down the issue by swapping a known good coin cell battery if available. If nothing works, replace the coin cell battery."
	},
	
	{
		blink_one:2,
		blink_two:5,
		error_state:"S1",
		error_state_name:"RCM",
		error_desc:"BIOS Checksum Failure.",
		error_res:"System is in Recovery Mode. Flash latest BIOS version. If problem persists, replace the motherboard."
	},
	
	{
		blink_one:2,
		blink_two:6,
		error_state:"S2",
		error_state_name:"CPU",
		error_desc:"Bad Processor.",
		error_res:"CPU configuration activity is in progress or a CPU failure was detected. Replace the processor."
	},
	
	{
		blink_one:2,
		blink_two:7,
		error_state:"S3",
		error_state_name:"MEM",
		error_desc:"Memory failures.",
		error_res:"Memory subsystem configuration activity is in progress. Appropriate memory modules were detected but a memory failure has occurred. If you can assist to troubleshoot, narrow down the issue with reseating memory and swapping a known good memory if available. If nothing works, replace the memory."
	},
	
	{
		blink_one:3,
		blink_two:1,
		error_state:"S4",
		error_state_name:"PCI",
		error_desc:"PCI Device or Video subsystem failures.",
		error_res:"PCI device configuration activity is in progress or PCI device failure was detected. If you can assist to troubleshoot, narrow down the issue by reseating PCI card and removing one by one to determine which card failed. If identified the PCI card failed, replace the PCI Card. If none of the PCI Cards failed, replace the motherboard."
	},
	
	{
		blink_one:3,
		blink_two:2,
		error_state:"S5",
		error_state_name:"VID",
		error_desc:"Video Subsystem failure.",
		error_res:"Video subsystem configuration activity in progress or video subsystem failure. If customer can assist to troubleshoot, narrow down the issue by removing one by one to determine which card failed. If identified the card failed, replace the card. If none of the card failed, replace the motherboard."
	},
	
	{
		blink_one:3,
		blink_two:3,
		error_state:"S6",
		error_state_name:"STO",
		error_desc:"No Memory detected.",
		error_res:"If customer can assist to troubleshoot, narrow down the issue by removing one by one memory to determine which one failed and swapping to a known good memory if available to confirm. If identified the memory failed, replace the memory. If none of the memory failed, replace the motherboard."
	},
	
	{
		blink_one:3,
		blink_two:4,
		error_state:"S7",
		error_state_name:"USB",
		error_desc:"Storage Subsystem failure.",
		error_res:"Possible storage device configuration in progress or storage subsystem failure. If you can assist to troubleshoot, narrow down the issue by removing one by one the storages on motherboard to determine which one failed. If identified the storage failed, replace the storage. If none of the storage failed, replace the motherboard."
	},
	
	{
		blink_one:3,
		blink_two:5,
		error_state:"S8",
		error_state_name:"MEM",
		error_desc:"Memory configuration or incompatible error.",
		error_res:"Memory subsystem configuration activity is in progress. No memory modules were detected. If customer can assist to troubleshoot, narrow down the issue by removing one by one the memory on motherboard to determine which one failed. Also, combining the configuration to validate appropriate combination. If identified the component failed, replace the component. If none of the component failed, replace the motherboard."
	},
	
	{
		blink_one:3,
		blink_two:6,
		error_state:"S9",
		error_state_name:"MBF",
		error_desc:"System board failure.",
		error_res:"Fatal system board failure detected. If customer can assist to troubleshoot, narrow down the issue by removing one by one the component on motherboard to determine which one failed. If identified any of the component failed, replace the component. If none of the component failed, replace the motherboard."
	},
	
	{
		blink_one:3,
		blink_two:7,
		error_state:"S10",
		error_state_name:"MEM",
		error_desc:"Possible memory failure.",
		error_res:"Memory subsystem configuration activity is in progress. Memory modules have been detected but appear to be incompatible or in an invalid configuration. If customer can assist to troubleshoot, narrow down the issue by removing one by one the memory on motherboard to determine which one failed. If identified the memory failed, replace the memory. If else, replace the motherboard."
	},
];