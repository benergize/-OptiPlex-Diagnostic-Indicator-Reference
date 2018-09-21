var codes_0912 = [
	{
		led_one:false,
		led_two:false,
		led_three:false,
		led_four:false,
		led_power_color:"white",
		led_power_blinking:false,
		error_desc:"The computer is either turned off or not receiving power.",
		error_res:"Reseat the power cable in the power connector on the back of the computer and the electrical outlet. Bypass power strips, power extension cables, and other power protection devices to verify that the computer turns on properly. Ensure that any power strips being used are plugged into an electrical outlet and are turned on. Ensure that the electrical outlet is working by testing it with another device, such as a lamp. Ensure that the main power cable and front panel cable are securely connected to the system board."
	},
	{
		led_one:true,
		led_two:true,
		led_three:false,
		led_four:false,
		led_power_color:"white",
		led_power_blinking:false,
		error_desc:"A possible system board failure has occurred.",
		error_res:"Unplug the computer. Allow one minute for the power to drain. Plug the computer into a working electrical outlet and press the power button."
	},
	{
		led_one:true,
		led_two:false,
		led_three:true,
		led_four:false,
		led_power_color:"orange",
		led_power_blinking:true,
		error_desc:"A possible system board failure has occurred.",
		error_res:"Unplug the computer. Allow one minute for the power to drain. Plug the computer into a working electrical outlet and press the power button."
	},
	{
		led_one:true,
		led_two:true,
		led_three:false,
		led_four:true,
		led_power_color:"orange",
		led_power_blinking:false,
		error_desc:"No CPU present.",
		error_res:"Reinstall the CPU and restart the system. If the computer still fails to boot, inspect the CPU socket for damage."
	},
	{
		led_one:false,
		led_two:false,
		led_three:true,
		led_four:true,
		led_power_color:"orange",
		led_power_blinking:false,
		error_desc:"Memory modules are detected, but a memory power failure has occurred.",
		error_res:"If two or more memory modules are installed, remove the modules, then reinstall one module and restart the computer. If the computer starts normally, continue to install additional memory modules (one at a time) until you have identified a faulty module or reinstalled all modules without error. If only one memory module is installed, try moving it to a different DIMM connector and restart the computer. If available, install verified working memory of the same type into your computer."
	},
	{
		led_one:false,
		led_two:true,
		led_three:false,
		led_four:true,
		led_power_color:"orange",
		led_power_blinking:false,
		error_desc:"A possible CPU or system board failure has occurred.",
		error_res:"Replace the CPU with a known good CPU. If the computer still fails to boot, inspect the CPU socket for damage."
	},
	{
		led_one:false,
		led_two:true,
		led_three:true,
		led_four:true,
		led_power_color:"orange",
		led_power_blinking:false,
		error_desc:"BIOS may be corrupt or missing.",
		error_res:"The computer hardware is operating normally but the BIOS may be corrupt or missing."
	},
	{
		led_one:true,
		led_two:false,
		led_three:false,
		led_four:false,
		led_power_color:"orange",
		led_power_blinking:false,
		error_desc:"A possible system board failure has occurred.",
		error_res:"Remove all peripheral cards from the PCI and PCI-E slots and restart the computer. If the computer boots, add the peripheral cards back one by one until you find the bad one."
	},
	{
		led_one:true,
		led_two:false,
		led_three:false,
		led_four:true,
		led_power_color:"orange",
		led_power_blinking:false,
		error_desc:"Power connector not installed properly.",
		error_res:"Reseat the 2x2 power connector from the power supply unit."
	},
	{
		led_one:false,
		led_two:true,
		led_three:false,
		led_four:false,
		led_power_color:"orange",
		led_power_blinking:false,
		error_desc:"Possible peripheral card or system board failure has occurred.",
		error_res:"Remove the coin cell battery for one minute, reinstall the battery, and restart."
	},
	{
		led_one:true,
		led_two:true,
		led_three:true,
		led_four:false,
		led_power_color:"orange",
		led_power_blinking:false,
		error_desc:"A possible coin cell battery failure has occurred.",
		error_res:"Remove the coin cell battery for one minute, reinstall the battery, and restart."
	},
	{
		led_one:false,
		led_two:false,
		led_three:false,
		led_four:false,
		led_power_color:"blue",
		led_power_blinking:false,
		error_desc:"The computer is in a normal on condition. The diagnostic lights are not lit after the computer successfully boots to the operating system.",
		error_res:"Ensure that the display is connected and powered on."
	},
	{
		led_one:false,
		led_two:false,
		led_three:true,
		led_four:false,
		led_power_color:"blue",
		led_power_blinking:false,
		error_desc:"A possible processor failure has occurred.",
		error_res:"Reseat the processor."
	},
	{
		led_one:false,
		led_two:false,
		led_three:true,
		led_four:true,
		led_power_color:"blue",
		led_power_blinking:false,
		error_desc:"Memory modules are detected, but a memory failure has occurred.",
		error_res:"If two or more memory modules are installed, remove the modules (see your service manual), then reinstall one module (see your service manual and restart the computer. If the computer starts normally, continue to install additional memory modules (one at a time) until you have identified a faulty module or reinstalled all modules without error. If available, install working memory of the same type into your computer."
	},
	{
		led_one:false,
		led_two:true,
		led_three:false,
		led_four:true,
		led_power_color:"blue",
		led_power_blinking:false,
		error_desc:"A possible graphics card failure has occurred.",
		error_res:"Reseat any installed graphics cards. If available, install a working graphics card into your computer."
	},
	{
		led_one:false,
		led_two:true,
		led_three:true,
		led_four:false,
		led_power_color:"blue",
		led_power_blinking:false,
		error_desc:"A possible floppy drive or hard drive failure has occurred.",
		error_res:"Reseat all power and data cables."
	},
	{
		led_one:false,
		led_two:true,
		led_three:true,
		led_four:true,
		led_power_color:"blue",
		led_power_blinking:false,
		error_desc:"A possible USB failure has occurred.",
		error_res:"Reinstall all USB devices and check all cable connections."
	},
	{
		led_one:true,
		led_two:false,
		led_three:false,
		led_four:false,
		led_power_color:"blue",
		led_power_blinking:false,
		error_desc:"No memory modules are detected.",
		error_res:"If two or more memory modules are installed, remove the modules (see your service manual), then reinstall one module (see your service manual) and restart the computer. If the computer starts normally, continue to install additional memory modules (one at a time) until you have identified a faulty module or reinstalled all modules without error. If available, install working memory of the same type into your computer."
	},
	{
		led_one:true,
		led_two:false,
		led_three:true,
		led_four:false,
		led_power_color:"blue",
		led_power_blinking:false,
		error_desc:"Memory modules are detected, but a memory configuration or compatibility error has occurred.",
		error_res:"Ensure that no special requirements for memory module/connector placement exist. Ensure that the memory you are using is supported by your computer."
	},
	{
		led_one:true,
		led_two:false,
		led_three:true,
		led_four:true,
		led_power_color:"blue",
		led_power_blinking:false,
		error_desc:"A possible system board resource and/or hardware failure has occurred.",
		error_res:"Clear CMOS. Disconnect all internal and external peripherals, and restart the computer. If the computer boots, add the peripheral cards back one by one until you find the bad one. If the problem persists, the system board / system board component is probably bad."
	},
	{
		led_one:true,
		led_two:true,
		led_three:true,
		led_four:false,
		led_power_color:"blue",
		led_power_blinking:false,
		error_desc:"Another failure has occurred.",
		error_res:"Ensure that all hard drive and optical drive cables are properly connected to the system board. If there is an error message on the screen identifying a problem with a device (such as the floppy drive or hard drive), check the device to make sure it is functioning properly. If the operating system is attempting to boot from a device (such as the floppy drive or optical drive), check system setup to ensure the boot sequence is correct for the devices installed on your computer."
	}
	
];