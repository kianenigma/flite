searchState.loadedDescShard("cfg_expr", 0, "<code>⚙️ cfg-expr</code>\nTypes related to parse errors\nTypes related to cfg expressions\nTypes related to rustc targets\nThe expression does not contain any valid terms\nError parsing a <code>target_has_atomic</code> predicate.\nThe characters are not valid in an cfg expression\nA <code>target_has_atomic</code> predicate didn’t correctly parse.\nFailed to parse an integer value\nnot() takes exactly 1 predicate, unlike all() and any()\nThe root cfg() may only contain a single predicate\nAn error related to parsing of a cfg expression\nThe particular reason for a <code>ParseError</code>\nAn opening parens was unmatched with a closing parens\nAn opening quotes was unmatched with a closing quotes\nFound an unexpected term, which wasn’t one of the …\nAn element was not part of the builtin information in rustc\nA closing parens was unmatched with an opening parens\nA closing quotes was unmatched with an opening quotes\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe string that was parsed\nThe specific reason for the error\nThe range of characters in the original string that result …\ntarget_abi\n<code>all()</code> with a comma separated list of configuration …\n<code>any()</code> with a comma separated list of configuration …\ntarget_arch\nEnabled when compiling without optimizations.\ntarget_endian\ntarget_env\nA parsed <code>cfg()</code> expression that can evaluated\ntarget_family This also applies to the bare <code>unix</code> and …\nA <code>feature = &quot;&lt;name&gt;&quot;</code>\nA generic bare predicate key that doesn’t match one of …\nA predicate function, used to combine 1 or more predicates …\ntarget_has_atomic.\nA generic key = “value” predicate that doesn’t match …\nA propositional logic used to evaluate <code>Expression</code> …\n<code>not()</code> with a configuration predicate. It is true if its …\ntarget_os\npanic\ntarget_pointer_width\nA single predicate in a <code>cfg()</code> expression\nEnabled for crates of the proc_macro type.\nA target predicate, with the <code>target_</code> prefix\ntarget_feature\nAll predicates that pertains to a target, except for …\nWhether rustc’s test harness is enabled\ntarget_vendor\n<code>AND</code>, which corresponds to the <code>all</code> operator.\nThe result of an <code>any</code> operation with no operands, akin to …\nEvaluates the expression, using the provided closure to …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true of the predicate matches the specified target\n<code>NOT</code>, which corresponds to the <code>not</code> operator.\n<code>OR</code>, which corresponds to the <code>any</code> operator.\nThe original string which has been parsed to produce this …\nGiven a <code>cfg()</code> expression (the cfg( and ) are optional), …\nAn iterator over each predicate in the expression\nThe result of an <code>all</code> operation with no operands, akin to …\nBeginning of an all() predicate list\nBeginning of an any() predicate list\nA <code>)</code> for ending a predicate list\nA <code>,</code> for separating predicates in a predicate list\nA ‘=’, joining a key and a value\nA single contiguous term\nAllows iteration through a cfg expression, yielding a …\nA wrapper around a particular token that includes the span …\nBeginning of a not() predicate\nA <code>(</code> for starting a predicate list\nA single token in a cfg expression …\nA single contiguous value, without its surrounding quotes\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a Lexer over a cfg expression, it can either be a …\nThe range of the token characters in the original license …\nThe token that was lexed\nA list of all of the builtin targets known to rustc, as of …\nThe “abi” field\nThe “architecture” field\nThe endian types known to rustc\nThe “environment” field, which specifies an ABI …\nA set of families for a target.\nIndividual target families, which describe a set of …\nInteger size and pointers for which there’s support for …\nA set of <code>HasAtomic</code> instances a target.\nThe platform supports atomics for the given integer size …\nThe “operating system” field, which sometimes implies …\nThe panic strategy used on this target by default.\nThe platform supports atomics for pointers (<code>AtomicPtr</code>).\nContains information regarding a particular target known …\nThe unique identifier for a target.\nThe “vendor” field, which in practice is little more …\nThe target’s ABI, if any. Used by the target_abi …\nThe target’s CPU architecture. Used by the target_arch …\nReturns the string for the field.\nReturns the string for the field.\nReturns the string for the field.\nReturns the string for the field.\nReturns the string for the field.\nReturns the string for the field.\nReturns the string for the field.\nReturns the string for the field.\nReturns true if this list of families contains a given …\nReturns true if this list of families contains a given …\nThe target’s endianness. Used by the target_endian …\nThe target’s ABI/libc used, if any. Used by the …\nThe target’s families, if any. Used by the target_family …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAttempts to find the <code>TargetInfo</code> for the specified target …\nThe target’s support for atomics. Used by the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstructs a new instance of this field.\nConstructs a new instance of this field.\nConstructs a new instance of this field.\nConstructs a new instance of this field.\nConstructs a new instance of this field.\nConstructs a new instance of this field.\nConstructs a new instance of this field.\nConstructs a new instance of this field.\nConstructs a new instance.\nConstructs a new instance.\nConstructs a new instance of this field from a <code>&amp;&#39;static str</code>…\nConstructs a new instance of this field from a <code>&amp;&#39;static str</code>…\nConstructs a new instance of this field from a <code>&amp;&#39;static str</code>…\nConstructs a new instance of this field from a <code>&amp;&#39;static str</code>…\nConstructs a new instance of this field from a <code>&amp;&#39;static str</code>…\nConstructs a new instance of this field from a <code>&amp;&#39;static str</code>…\nConstructs a new instance of this field from a <code>&amp;&#39;static str</code>…\nConstructs a new instance of this field from a <code>&amp;&#39;static str</code>…\nConstructs a new instance of this field from a static …\nConstructs a new instance of this struct from a static …\nThe target’s operating system, if any. Used by the …\nThe panic strategy used on this target by default. Used by …\nThe size of the target’s pointer type. Used by the …\nRetrieves the version of rustc for which the built-in …\nThe target’s unique identifier\nThe target’s vendor, if any. Used by the target_vendor …")