searchState.loadedDescShard("polkavm", 0, "List of all of the VM’s registers.\nList of all input/output argument registers.\nAsynchronous gas metering. Has a lower performance …\nThe execution triggered an external call with an <code>ecalli</code> …\nThe execution failed.\nThe execution finished normally.\nThe type of gas metering.\nThe memory map of a given guest program.\nA compiled PolkaVM program module.\nThe configuration for a module.\nThe execution ran out of gas.\nThe execution ran out of gas.\nA partially deserialized PolkaVM program.\nThe execution triggered a segmentation fault.\nExecuted a single instruction.\nSynchronous gas metering. This will immediately abort the …\nThe execution finished abnormally with a trap.\nThe execution finished abnormally with a trap.\nThe execution failed with a custom user error.\nGets the currently set backend, if any.\nReturns the code bitmask in its raw form.\nCalculates the gas cost for a given basic block starting …\nCalls a given exported function with the given arguments.\nA conveniance function to call <code>Instance::call_typed</code> and …\nA convenience function which sets all of the registers to …\nReturns the program code in its raw form.\nReturns whether cross-checking is enabled.\nMiscellaneous types related to debug info.\nThe default stack pointer for the module.\nDefines a fallback external call handler, in case no other …\nDefines a new statically typed handler for external calls …\nDefines a new untyped handler for external calls with a …\nReturns whether dynamic paging is enabled.\nCreates an empty memory map.\nReturns the module’s exports.\nReturns an iterator over program exports.\nFrees the given page(s).\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new module from a deserialized program <code>blob</code>.\nCreates a new default configuration and seeds it from the …\nCreates a program blob from parts.\nGets the amount of gas remaining.\nReturns the line program for the given instruction.\nReturns the debug string for the given relative offset.\nExtracts a return value from the argument registers …\nThe address at which the program’s heap starts.\nReturns the current size of the program’s heap.\nReturns the module’s imports.\nInstantiates a new module.\nPre-instantiates a new module, resolving its imports and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns a jump table.\nThe raw machine code of the compiled module.\nThe address at which the raw machine code will be loaded.\nThe maximum size of the program’s heap.\nThe program’s memory map.\nReturns the module from which this instance was created.\nCalculates the memory map from the given parameters.\nCreates a new module by deserializing the program from the …\nCreates a new default configuration.\nCreates a new default module configuration.\nGets the next native program counter.\nGets the next program counter.\nThe address of the page which was accessed.\nThe page size of the program.\nThe size of the page.\nParses the given bytes into a program blob.\nReturns the PID of the sandbox corresponding to this …\nA convenience function which sets up a fuction call …\nA convenience function which sets up a fuction call …\nMiscellaneous types related to program blobs.\nGets the current program counter.\nA slice which contains pairs of PolkaVM bytecode offsets …\nReads the VM’s memory.\nReads the VM’s memory.\nA convenience function to read an <code>u32</code> from the VM’s …\nGets the value of a given register.\nResets the VM’s memory to its initial state.\nReturns the contents of the read-only data section.\nThe address at where the program’s read-only data starts …\nThe range of addresses where the program’s read-only …\nThe size of the program’s read-only data.\nReturns the size of the read-only data section.\nStarts or resumes the execution.\nReturns the contents of the read-write data section.\nThe address at where the program’s read-write data …\nThe range of addresses where the program’s read-write …\nThe size of the program’s read-write data.\nReturns the size of the read-write data section.\nGets the currently set sandbox, if any.\nEnabling this makes it possible to enable other …\nForces the use of a given backend.\nEnables execution cross-checking.\nSets whether dynamic paging is enabled.\nSets the amount of gas remaining.\nSets the type of gas metering to enable for this module.\nSets the next program counter.\nSets the page size used for the module.\nSets the value of a given register.\nForces the use of a given sandbox.\nSets whether step tracing is enabled.\nSets the strict mode. When disabled it’s guaranteed that …\nSets the number of worker sandboxes that will be …\nThe address at where the program’s stack ends inside of …\nThe address at where the program’s stack starts inside …\nThe range of addresses where the program’s stack is …\nThe size of the program’s stack.\nReturns the initial size of the stack.\nReturns the number of worker sandboxes that will be …\nWrites into the VM’s memory.\nA convenience function to write an <code>u32</code> into the VM’s …\nFills the given memory region with zeros.\nA line program state machine.\nDebug information about a given region of bytecode.\nThe source location.\nReturns the source code column of this location, if …\nThe column in the original source file.\nReturns the entry index of this region info within the …\nReturns the entry index of this line program object.\nReturns an iterator over the frames this region covers.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the full name of the function.\nReturns the function name of location without the …\nThe range of instructions this region covers.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the source code line of this location, if …\nThe line in the original source file.\nReturns the source location of where this frame comes from.\nReturns the namespace of this location, if available.\nReturns the source code path of this location, if …\nThe path to the original source file.\nReturns the offset into the debug strings section …\nRuns the line program until the next region becomes …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.")