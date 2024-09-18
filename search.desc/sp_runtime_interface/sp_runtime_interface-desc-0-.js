searchState.loadedDescShard("sp_runtime_interface", 0, "Substrate runtime interface\nThe ffi type that is used to represent <code>Self</code>.\nA pointer that can be used in a runtime interface function …\nSomething that can be used by the runtime interface as …\nTraits required by the runtime interface from the host …\nPack a pointer and length into an <code>u64</code>.\nProvides the <code>PassBy</code> trait to simplify the implementation …\nAttribute macro for transforming a trait declaration into …\nUnpacks an <code>u64</code> into the pointer and length.\nTraits required by the runtime interface from the wasm …\nSomething that can be created from a ffi value. …\nSomething that can be converted into a ffi value.\nSomething that can be converted into a preallocated ffi …\nAs <code>Self</code> can be an unsized type, it needs to be represented …\nAs <code>Self</code> can be an unsized type, it needs to be represented …\nCreate <code>SelfInstance</code> from the given\nConvert <code>self</code> into a ffi value.\nConvert <code>self_instance</code> into the given preallocated ffi …\nThe implementation of the pass by codec strategy. This …\nThe implementation of the pass by enum strategy. This …\nThe implementation of the pass by inner type strategy. The …\nThe inner type that is wrapped by <code>Self</code>.\nSomething that should be passed between wasm and the host …\nThe strategy that should be used to pass the type.\nDerive macro for implementing <code>PassBy</code> with the <code>Codec</code> …\nDerive macro for implementing <code>PassBy</code> with the <code>Enum</code> …\nSomething that provides a strategy for passing a type …\nTrait that needs to be implemented by a type that should …\nDerive macro for implementing <code>PassBy</code> with the <code>Inner</code> …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate <code>T</code> from the given ffi value.\nConstruct <code>Self</code> from the given <code>inner</code>.\nReturns the reference to the inner type.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert the given instance to the ffi value.\nConsumes <code>self</code> and returns the inner type.\nA function which implementation can be exchanged.\nSomething that can be created from a ffi value.\nSomething that can be converted into a ffi value.\nThe owned rust type that is stored with the ffi value in …\nRestores a function implementation on drop.\nRepresents a wrapped ffi value.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate <code>Self</code> from the given ffi value.\nReturns the wrapped ffi value.\nReturns the internal function pointer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert <code>self</code> into a <code>WrappedFFIValue</code>.\nCreate a new instance of <code>ExchangeableFunction</code>.\nReplace the implementation with <code>new_impl</code>.")