(function() {
    var type_impls = Object.fromEntries([["sp_consensus_beefy",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Keccak256\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1053\">source</a><a href=\"#impl-Clone-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"sp_runtime/traits/struct.Keccak256.html\" title=\"struct sp_runtime::traits::Keccak256\">Keccak256</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1053\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"sp_runtime/traits/struct.Keccak256.html\" title=\"struct sp_runtime::traits::Keccak256\">Keccak256</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Keccak256\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1053\">source</a><a href=\"#impl-Debug-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"sp_runtime/traits/struct.Keccak256.html\" title=\"struct sp_runtime::traits::Keccak256\">Keccak256</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1053\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-Keccak256\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1054\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"sp_runtime/traits/struct.Keccak256.html\" title=\"struct sp_runtime::traits::Keccak256\">Keccak256</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1054\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"sp_runtime/traits/struct.Keccak256.html\" title=\"struct sp_runtime::traits::Keccak256\">Keccak256</a>, &lt;__D as <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-Keccak256\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1067\">source</a><a href=\"#impl-Hash-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"sp_runtime/traits/trait.Hash.html\" title=\"trait sp_runtime::traits::Hash\">Hash</a> for <a class=\"struct\" href=\"sp_runtime/traits/struct.Keccak256.html\" title=\"struct sp_runtime::traits::Keccak256\">Keccak256</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1068\">source</a><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"sp_runtime/traits/trait.Hash.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"struct\" href=\"primitive_types/struct.H256.html\" title=\"struct primitive_types::H256\">H256</a></h4></section></summary><div class='docblock'>The hash type produced.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ordered_trie_root\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1070\">source</a><a href=\"#method.ordered_trie_root\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_runtime/traits/trait.Hash.html#tymethod.ordered_trie_root\" class=\"fn\">ordered_trie_root</a>(\n    input: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;,\n    version: <a class=\"enum\" href=\"sp_storage/enum.StateVersion.html\" title=\"enum sp_storage::StateVersion\">StateVersion</a>,\n) -&gt; &lt;<a class=\"struct\" href=\"sp_runtime/traits/struct.Keccak256.html\" title=\"struct sp_runtime::traits::Keccak256\">Keccak256</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Hash.html\" title=\"trait sp_runtime::traits::Hash\">Hash</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Hash.html#associatedtype.Output\" title=\"type sp_runtime::traits::Hash::Output\">Output</a></h4></section></summary><div class='docblock'>The ordered Patricia tree root of the given <code>input</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.trie_root\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1074\">source</a><a href=\"#method.trie_root\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_runtime/traits/trait.Hash.html#tymethod.trie_root\" class=\"fn\">trie_root</a>(\n    input: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;(<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;)&gt;,\n    version: <a class=\"enum\" href=\"sp_storage/enum.StateVersion.html\" title=\"enum sp_storage::StateVersion\">StateVersion</a>,\n) -&gt; &lt;<a class=\"struct\" href=\"sp_runtime/traits/struct.Keccak256.html\" title=\"struct sp_runtime::traits::Keccak256\">Keccak256</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Hash.html\" title=\"trait sp_runtime::traits::Hash\">Hash</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Hash.html#associatedtype.Output\" title=\"type sp_runtime::traits::Hash::Output\">Output</a></h4></section></summary><div class='docblock'>The Patricia tree root of the given mapping.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#968\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_runtime/traits/trait.Hash.html#method.hash\" class=\"fn\">hash</a>(s: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; Self::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Hash.html#associatedtype.Output\" title=\"type sp_runtime::traits::Hash::Output\">Output</a></h4></section></summary><div class='docblock'>Produce the hash of some byte-slice.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_of\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#973\">source</a><a href=\"#method.hash_of\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_runtime/traits/trait.Hash.html#method.hash_of\" class=\"fn\">hash_of</a>&lt;S&gt;(s: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;S</a>) -&gt; Self::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Hash.html#associatedtype.Output\" title=\"type sp_runtime::traits::Hash::Output\">Output</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Encode.html\" title=\"trait parity_scale_codec::codec::Encode\">Encode</a>,</div></h4></section></summary><div class='docblock'>Produce the hash of some codec-encodable value.</div></details></div></details>","Hash","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hasher-for-Keccak256\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1057\">source</a><a href=\"#impl-Hasher-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"hash_db/trait.Hasher.html\" title=\"trait hash_db::Hasher\">Hasher</a> for <a class=\"struct\" href=\"sp_runtime/traits/struct.Keccak256.html\" title=\"struct sp_runtime::traits::Keccak256\">Keccak256</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedconstant.LENGTH\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1060\">source</a><a href=\"#associatedconstant.LENGTH\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"hash_db/trait.Hasher.html#associatedconstant.LENGTH\" class=\"constant\">LENGTH</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a> = 32usize</h4></section></summary><div class='docblock'>The length in bytes of the <code>Hasher</code> output.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Out\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1058\">source</a><a href=\"#associatedtype.Out\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"hash_db/trait.Hasher.html#associatedtype.Out\" class=\"associatedtype\">Out</a> = <a class=\"struct\" href=\"primitive_types/struct.H256.html\" title=\"struct primitive_types::H256\">H256</a></h4></section></summary><div class='docblock'>The output type of the <code>Hasher</code></div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.StdHasher\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1059\">source</a><a href=\"#associatedtype.StdHasher\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"hash_db/trait.Hasher.html#associatedtype.StdHasher\" class=\"associatedtype\">StdHasher</a> = <a class=\"struct\" href=\"hash256_std_hasher/struct.Hash256StdHasher.html\" title=\"struct hash256_std_hasher::Hash256StdHasher\">Hash256StdHasher</a></h4></section></summary><div class='docblock'>What to use to build <code>HashMap</code>s with this <code>Hasher</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1062\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hash_db/trait.Hasher.html#tymethod.hash\" class=\"fn\">hash</a>(s: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; &lt;<a class=\"struct\" href=\"sp_runtime/traits/struct.Keccak256.html\" title=\"struct sp_runtime::traits::Keccak256\">Keccak256</a> as <a class=\"trait\" href=\"hash_db/trait.Hasher.html\" title=\"trait hash_db::Hasher\">Hasher</a>&gt;::<a class=\"associatedtype\" href=\"hash_db/trait.Hasher.html#associatedtype.Out\" title=\"type hash_db::Hasher::Out\">Out</a></h4></section></summary><div class='docblock'>Compute the hash of the provided slice of bytes returning the <code>Out</code> type of the <code>Hasher</code>.</div></details></div></details>","Hasher","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Keccak256\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1053\">source</a><a href=\"#impl-PartialEq-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"sp_runtime/traits/struct.Keccak256.html\" title=\"struct sp_runtime::traits::Keccak256\">Keccak256</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1053\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"sp_runtime/traits/struct.Keccak256.html\" title=\"struct sp_runtime::traits::Keccak256\">Keccak256</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-Keccak256\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1054\">source</a><a href=\"#impl-Serialize-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sp_runtime/traits/struct.Keccak256.html\" title=\"struct sp_runtime::traits::Keccak256\">Keccak256</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1054\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-Keccak256\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1053\">source</a><a href=\"#impl-TypeInfo-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"sp_runtime/traits/struct.Keccak256.html\" title=\"struct sp_runtime::traits::Keccak256\">Keccak256</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1053\">source</a><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"scale_info/trait.TypeInfo.html#associatedtype.Identity\" class=\"associatedtype\">Identity</a> = <a class=\"struct\" href=\"sp_runtime/traits/struct.Keccak256.html\" title=\"struct sp_runtime::traits::Keccak256\">Keccak256</a></h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a href=\"scale_info/trait.TypeInfo.html#associatedtype.Identity\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1053\">source</a><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"scale_info/trait.TypeInfo.html#tymethod.type_info\" class=\"fn\">type_info</a>() -&gt; <a class=\"struct\" href=\"scale_info/ty/struct.Type.html\" title=\"struct scale_info::ty::Type\">Type</a></h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"],["<section id=\"impl-Eq-for-Keccak256\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1053\">source</a><a href=\"#impl-Eq-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"sp_runtime/traits/struct.Keccak256.html\" title=\"struct sp_runtime::traits::Keccak256\">Keccak256</a></h3></section>","Eq","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"],["<section id=\"impl-StructuralPartialEq-for-Keccak256\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits.rs.html#1053\">source</a><a href=\"#impl-StructuralPartialEq-for-Keccak256\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"sp_runtime/traits/struct.Keccak256.html\" title=\"struct sp_runtime::traits::Keccak256\">Keccak256</a></h3></section>","StructuralPartialEq","sp_consensus_beefy::BeefySignatureHasher","sp_consensus_beefy::MmrHashing"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[23675]}