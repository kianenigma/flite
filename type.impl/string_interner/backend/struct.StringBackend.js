(function() {var type_impls = {
"string_interner":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Backend-for-StringBackend%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/string_interner/backend/string.rs.html#147-194\">source</a><a href=\"#impl-Backend-for-StringBackend%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"string_interner/backend/trait.Backend.html\" title=\"trait string_interner::backend::Backend\">Backend</a> for <a class=\"struct\" href=\"string_interner/backend/struct.StringBackend.html\" title=\"struct string_interner::backend::StringBackend\">StringBackend</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"string_interner/trait.Symbol.html\" title=\"trait string_interner::Symbol\">Symbol</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Symbol\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Symbol\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"string_interner/backend/trait.Backend.html#associatedtype.Symbol\" class=\"associatedtype\">Symbol</a> = S</h4></section></summary><div class='docblock'>The symbol used by the string interner backend.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Iter\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Iter\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"string_interner/backend/trait.Backend.html#associatedtype.Iter\" class=\"associatedtype\">Iter</a>&lt;'a&gt; = Iter&lt;'a, S&gt;\n<span class=\"where\">where\n    Self: 'a</span></h4></section></summary><div class='docblock'>The iterator over the symbols and their strings.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_capacity\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/string_interner/backend/string.rs.html#157-165\">source</a><a href=\"#method.with_capacity\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"string_interner/backend/trait.Backend.html#tymethod.with_capacity\" class=\"fn\">with_capacity</a>(cap: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; Self</h4></section></summary><div class='docblock'>Creates a new backend for the given capacity. <a href=\"string_interner/backend/trait.Backend.html#tymethod.with_capacity\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.intern\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/string_interner/backend/string.rs.html#168-170\">source</a><a href=\"#method.intern\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"string_interner/backend/trait.Backend.html#tymethod.intern\" class=\"fn\">intern</a>(&amp;mut self, string: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; Self::<a class=\"associatedtype\" href=\"string_interner/backend/trait.Backend.html#associatedtype.Symbol\" title=\"type string_interner::backend::Backend::Symbol\">Symbol</a></h4></section></summary><div class='docblock'>Interns the given string and returns its interned ref and symbol. <a href=\"string_interner/backend/trait.Backend.html#tymethod.intern\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.resolve\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/string_interner/backend/string.rs.html#173-176\">source</a><a href=\"#method.resolve\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"string_interner/backend/trait.Backend.html#tymethod.resolve\" class=\"fn\">resolve</a>(&amp;self, symbol: Self::<a class=\"associatedtype\" href=\"string_interner/backend/trait.Backend.html#associatedtype.Symbol\" title=\"type string_interner::backend::Backend::Symbol\">Symbol</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class='docblock'>Resolves the given symbol to its original string contents.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.shrink_to_fit\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/string_interner/backend/string.rs.html#178-181\">source</a><a href=\"#method.shrink_to_fit\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"string_interner/backend/trait.Backend.html#tymethod.shrink_to_fit\" class=\"fn\">shrink_to_fit</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Shrink backend capacity to fit interned symbols exactly.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.resolve_unchecked\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/string_interner/backend/string.rs.html#184-188\">source</a><a href=\"#method.resolve_unchecked\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"string_interner/backend/trait.Backend.html#tymethod.resolve_unchecked\" class=\"fn\">resolve_unchecked</a>(&amp;self, symbol: Self::<a class=\"associatedtype\" href=\"string_interner/backend/trait.Backend.html#associatedtype.Symbol\" title=\"type string_interner::backend::Backend::Symbol\">Symbol</a>) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a></h4></section></summary><div class='docblock'>Resolves the given symbol to its original string contents. <a href=\"string_interner/backend/trait.Backend.html#tymethod.resolve_unchecked\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.iter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/string_interner/backend/string.rs.html#191-193\">source</a><a href=\"#method.iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"string_interner/backend/trait.Backend.html#tymethod.iter\" class=\"fn\">iter</a>(&amp;self) -&gt; Self::<a class=\"associatedtype\" href=\"string_interner/backend/trait.Backend.html#associatedtype.Iter\" title=\"type string_interner::backend::Backend::Iter\">Iter</a>&lt;'_&gt;</h4></section></summary><div class='docblock'>Creates an iterator that yields all interned strings and their symbols.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.intern_static\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/string_interner/backend/mod.rs.html#53-58\">source</a><a href=\"#method.intern_static\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"string_interner/backend/trait.Backend.html#method.intern_static\" class=\"fn\">intern_static</a>(&amp;mut self, string: &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; Self::<a class=\"associatedtype\" href=\"string_interner/backend/trait.Backend.html#associatedtype.Symbol\" title=\"type string_interner::backend::Backend::Symbol\">Symbol</a></h4></section></summary><div class='docblock'>Interns the given static string and returns its interned ref and symbol. <a href=\"string_interner/backend/trait.Backend.html#method.intern_static\">Read more</a></div></details></div></details>","Backend","string_interner::backend::DefaultBackend"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-StringBackend%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/string_interner/backend/string.rs.html#73-81\">source</a><a href=\"#impl-Clone-for-StringBackend%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"string_interner/backend/struct.StringBackend.html\" title=\"struct string_interner::backend::StringBackend\">StringBackend</a>&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/string_interner/backend/string.rs.html#74-80\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#175\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","string_interner::backend::DefaultBackend"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-StringBackend%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/string_interner/backend/string.rs.html#40\">source</a><a href=\"#impl-Debug-for-StringBackend%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"string_interner/backend/struct.StringBackend.html\" title=\"struct string_interner::backend::StringBackend\">StringBackend</a>&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/string_interner/backend/string.rs.html#40\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","string_interner::backend::DefaultBackend"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-StringBackend%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/string_interner/backend/string.rs.html#83-92\">source</a><a href=\"#impl-Default-for-StringBackend%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"string_interner/backend/struct.StringBackend.html\" title=\"struct string_interner::backend::StringBackend\">StringBackend</a>&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/string_interner/backend/string.rs.html#85-91\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","string_interner::backend::DefaultBackend"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-StringBackend%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/string_interner/backend/string.rs.html#54-69\">source</a><a href=\"#impl-PartialEq-for-StringBackend%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"string_interner/backend/struct.StringBackend.html\" title=\"struct string_interner::backend::StringBackend\">StringBackend</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"string_interner/trait.Symbol.html\" title=\"trait string_interner::Symbol\">Symbol</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/string_interner/backend/string.rs.html#58-68\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;Self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","string_interner::backend::DefaultBackend"],["<section id=\"impl-Eq-for-StringBackend%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/string_interner/backend/string.rs.html#71\">source</a><a href=\"#impl-Eq-for-StringBackend%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"string_interner/backend/struct.StringBackend.html\" title=\"struct string_interner::backend::StringBackend\">StringBackend</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"string_interner/trait.Symbol.html\" title=\"trait string_interner::Symbol\">Symbol</a>,</div></h3></section>","Eq","string_interner::backend::DefaultBackend"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()