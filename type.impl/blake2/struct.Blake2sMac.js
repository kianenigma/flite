(function() {var type_impls = {
"blake2":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Blake2sMac%3COutSize%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/blake2/lib.rs.html#169\">source</a><a href=\"#impl-Blake2sMac%3COutSize%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OutSize&gt; <a class=\"struct\" href=\"blake2/struct.Blake2sMac.html\" title=\"struct blake2::Blake2sMac\">Blake2sMac</a>&lt;OutSize&gt;<div class=\"where\">where\n    OutSize: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"typenum/type_operators/trait.IsLessOrEqual.html\" title=\"trait typenum::type_operators::IsLessOrEqual\">IsLessOrEqual</a>&lt;<a class=\"type\" href=\"typenum/generated/consts/type.U32.html\" title=\"type typenum::generated::consts::U32\">U32</a>&gt;,\n    <a class=\"type\" href=\"typenum/operator_aliases/type.LeEq.html\" title=\"type typenum::operator_aliases::LeEq\">LeEq</a>&lt;OutSize, <a class=\"type\" href=\"typenum/generated/consts/type.U32.html\" title=\"type typenum::generated::consts::U32\">U32</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_with_salt_and_personal\" class=\"method\"><a class=\"src rightside\" href=\"src/blake2/lib.rs.html#169\">source</a><h4 class=\"code-header\">pub fn <a href=\"blake2/struct.Blake2sMac.html#tymethod.new_with_salt_and_personal\" class=\"fn\">new_with_salt_and_personal</a>(\n    key: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>],\n    salt: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>],\n    persona: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>],\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"struct\" href=\"crypto_common/struct.InvalidLength.html\" title=\"struct crypto_common::InvalidLength\">InvalidLength</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Create new instance using provided key, salt, and persona.</p>\n<p>Key length should not be bigger than block size, salt and persona\nlength should not be bigger than quarter of block size. If any\nof those conditions is false the method will return an error.</p>\n</div></details></div></details>",0,"blake2::Blake2sMac256"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Blake2sMac%3COutSize%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/blake2/lib.rs.html#169\">source</a><a href=\"#impl-Clone-for-Blake2sMac%3COutSize%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OutSize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"blake2/struct.Blake2sMac.html\" title=\"struct blake2::Blake2sMac\">Blake2sMac</a>&lt;OutSize&gt;<div class=\"where\">where\n    OutSize: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"typenum/type_operators/trait.IsLessOrEqual.html\" title=\"trait typenum::type_operators::IsLessOrEqual\">IsLessOrEqual</a>&lt;<a class=\"type\" href=\"typenum/generated/consts/type.U32.html\" title=\"type typenum::generated::consts::U32\">U32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    <a class=\"type\" href=\"typenum/operator_aliases/type.LeEq.html\" title=\"type typenum::operator_aliases::LeEq\">LeEq</a>&lt;OutSize, <a class=\"type\" href=\"typenum/generated/consts/type.U32.html\" title=\"type typenum::generated::consts::U32\">U32</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/blake2/lib.rs.html#169\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"blake2/struct.Blake2sMac.html\" title=\"struct blake2::Blake2sMac\">Blake2sMac</a>&lt;OutSize&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#175\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","blake2::Blake2sMac256"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Blake2sMac%3COutSize%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/blake2/lib.rs.html#169\">source</a><a href=\"#impl-Debug-for-Blake2sMac%3COutSize%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OutSize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"blake2/struct.Blake2sMac.html\" title=\"struct blake2::Blake2sMac\">Blake2sMac</a>&lt;OutSize&gt;<div class=\"where\">where\n    OutSize: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"typenum/type_operators/trait.IsLessOrEqual.html\" title=\"trait typenum::type_operators::IsLessOrEqual\">IsLessOrEqual</a>&lt;<a class=\"type\" href=\"typenum/generated/consts/type.U32.html\" title=\"type typenum::generated::consts::U32\">U32</a>&gt;,\n    <a class=\"type\" href=\"typenum/operator_aliases/type.LeEq.html\" title=\"type typenum::operator_aliases::LeEq\">LeEq</a>&lt;OutSize, <a class=\"type\" href=\"typenum/generated/consts/type.U32.html\" title=\"type typenum::generated::consts::U32\">U32</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/blake2/lib.rs.html#169\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","blake2::Blake2sMac256"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FixedOutput-for-Blake2sMac%3COutSize%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/blake2/lib.rs.html#169\">source</a><a href=\"#impl-FixedOutput-for-Blake2sMac%3COutSize%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OutSize&gt; <a class=\"trait\" href=\"digest/trait.FixedOutput.html\" title=\"trait digest::FixedOutput\">FixedOutput</a> for <a class=\"struct\" href=\"blake2/struct.Blake2sMac.html\" title=\"struct blake2::Blake2sMac\">Blake2sMac</a>&lt;OutSize&gt;<div class=\"where\">where\n    OutSize: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"typenum/type_operators/trait.IsLessOrEqual.html\" title=\"trait typenum::type_operators::IsLessOrEqual\">IsLessOrEqual</a>&lt;<a class=\"type\" href=\"typenum/generated/consts/type.U32.html\" title=\"type typenum::generated::consts::U32\">U32</a>&gt; + 'static,\n    <a class=\"type\" href=\"typenum/operator_aliases/type.LeEq.html\" title=\"type typenum::operator_aliases::LeEq\">LeEq</a>&lt;OutSize, <a class=\"type\" href=\"typenum/generated/consts/type.U32.html\" title=\"type typenum::generated::consts::U32\">U32</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.finalize_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/blake2/lib.rs.html#169\">source</a><a href=\"#method.finalize_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"digest/trait.FixedOutput.html#tymethod.finalize_into\" class=\"fn\">finalize_into</a>(self, out: &amp;mut <a class=\"type\" href=\"crypto_common/type.Output.html\" title=\"type crypto_common::Output\">Output</a>&lt;Self&gt;)</h4></section></summary><div class='docblock'>Consume value and write result into provided array.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finalize_fixed\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/digest/lib.rs.html#99\">source</a><a href=\"#method.finalize_fixed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"digest/trait.FixedOutput.html#method.finalize_fixed\" class=\"fn\">finalize_fixed</a>(self) -&gt; <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, Self::<a class=\"associatedtype\" href=\"crypto_common/trait.OutputSizeUser.html#associatedtype.OutputSize\" title=\"type crypto_common::OutputSizeUser::OutputSize\">OutputSize</a>&gt;</h4></section></summary><div class='docblock'>Retrieve result and consume the hasher instance.</div></details></div></details>","FixedOutput","blake2::Blake2sMac256"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-KeyInit-for-Blake2sMac%3COutSize%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/blake2/lib.rs.html#169\">source</a><a href=\"#impl-KeyInit-for-Blake2sMac%3COutSize%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OutSize&gt; <a class=\"trait\" href=\"crypto_common/trait.KeyInit.html\" title=\"trait crypto_common::KeyInit\">KeyInit</a> for <a class=\"struct\" href=\"blake2/struct.Blake2sMac.html\" title=\"struct blake2::Blake2sMac\">Blake2sMac</a>&lt;OutSize&gt;<div class=\"where\">where\n    OutSize: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"typenum/type_operators/trait.IsLessOrEqual.html\" title=\"trait typenum::type_operators::IsLessOrEqual\">IsLessOrEqual</a>&lt;<a class=\"type\" href=\"typenum/generated/consts/type.U32.html\" title=\"type typenum::generated::consts::U32\">U32</a>&gt;,\n    <a class=\"type\" href=\"typenum/operator_aliases/type.LeEq.html\" title=\"type typenum::operator_aliases::LeEq\">LeEq</a>&lt;OutSize, <a class=\"type\" href=\"typenum/generated/consts/type.U32.html\" title=\"type typenum::generated::consts::U32\">U32</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/blake2/lib.rs.html#169\">source</a><a href=\"#method.new\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"crypto_common/trait.KeyInit.html#tymethod.new\" class=\"fn\">new</a>(key: &amp;<a class=\"type\" href=\"crypto_common/type.Key.html\" title=\"type crypto_common::Key\">Key</a>&lt;Self&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Create new value from fixed size key.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_from_slice\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/blake2/lib.rs.html#169\">source</a><a href=\"#method.new_from_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"crypto_common/trait.KeyInit.html#method.new_from_slice\" class=\"fn\">new_from_slice</a>(key: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"struct\" href=\"crypto_common/struct.InvalidLength.html\" title=\"struct crypto_common::InvalidLength\">InvalidLength</a>&gt;</h4></section></summary><div class='docblock'>Create new value from variable size key.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.generate_key\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/crypto_common/lib.rs.html#141\">source</a><a href=\"#method.generate_key\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"crypto_common/trait.KeyInit.html#method.generate_key\" class=\"fn\">generate_key</a>(\n    rng: impl <a class=\"trait\" href=\"rand_core/trait.CryptoRng.html\" title=\"trait rand_core::CryptoRng\">CryptoRng</a> + <a class=\"trait\" href=\"rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a>,\n) -&gt; <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, Self::<a class=\"associatedtype\" href=\"crypto_common/trait.KeySizeUser.html#associatedtype.KeySize\" title=\"type crypto_common::KeySizeUser::KeySize\">KeySize</a>&gt;</h4></section></summary><div class='docblock'>Generate random key using the provided <a href=\"rand_core/trait.CryptoRng.html\" title=\"trait rand_core::CryptoRng\"><code>CryptoRng</code></a>.</div></details></div></details>","KeyInit","blake2::Blake2sMac256"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-KeySizeUser-for-Blake2sMac%3COutSize%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/blake2/lib.rs.html#169\">source</a><a href=\"#impl-KeySizeUser-for-Blake2sMac%3COutSize%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OutSize&gt; <a class=\"trait\" href=\"crypto_common/trait.KeySizeUser.html\" title=\"trait crypto_common::KeySizeUser\">KeySizeUser</a> for <a class=\"struct\" href=\"blake2/struct.Blake2sMac.html\" title=\"struct blake2::Blake2sMac\">Blake2sMac</a>&lt;OutSize&gt;<div class=\"where\">where\n    OutSize: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"typenum/type_operators/trait.IsLessOrEqual.html\" title=\"trait typenum::type_operators::IsLessOrEqual\">IsLessOrEqual</a>&lt;<a class=\"type\" href=\"typenum/generated/consts/type.U32.html\" title=\"type typenum::generated::consts::U32\">U32</a>&gt;,\n    <a class=\"type\" href=\"typenum/operator_aliases/type.LeEq.html\" title=\"type typenum::operator_aliases::LeEq\">LeEq</a>&lt;OutSize, <a class=\"type\" href=\"typenum/generated/consts/type.U32.html\" title=\"type typenum::generated::consts::U32\">U32</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.KeySize\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.KeySize\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"crypto_common/trait.KeySizeUser.html#associatedtype.KeySize\" class=\"associatedtype\">KeySize</a> = <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>, <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt;, <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt;, <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt;, <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt;, <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt;, <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt;</h4></section></summary><div class='docblock'>Key size in bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.key_size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/crypto_common/lib.rs.html#85\">source</a><a href=\"#method.key_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"crypto_common/trait.KeySizeUser.html#method.key_size\" class=\"fn\">key_size</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Return key size in bytes.</div></details></div></details>","KeySizeUser","blake2::Blake2sMac256"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-OutputSizeUser-for-Blake2sMac%3COutSize%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/blake2/lib.rs.html#169\">source</a><a href=\"#impl-OutputSizeUser-for-Blake2sMac%3COutSize%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OutSize&gt; <a class=\"trait\" href=\"crypto_common/trait.OutputSizeUser.html\" title=\"trait crypto_common::OutputSizeUser\">OutputSizeUser</a> for <a class=\"struct\" href=\"blake2/struct.Blake2sMac.html\" title=\"struct blake2::Blake2sMac\">Blake2sMac</a>&lt;OutSize&gt;<div class=\"where\">where\n    OutSize: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"typenum/type_operators/trait.IsLessOrEqual.html\" title=\"trait typenum::type_operators::IsLessOrEqual\">IsLessOrEqual</a>&lt;<a class=\"type\" href=\"typenum/generated/consts/type.U32.html\" title=\"type typenum::generated::consts::U32\">U32</a>&gt; + 'static,\n    <a class=\"type\" href=\"typenum/operator_aliases/type.LeEq.html\" title=\"type typenum::operator_aliases::LeEq\">LeEq</a>&lt;OutSize, <a class=\"type\" href=\"typenum/generated/consts/type.U32.html\" title=\"type typenum::generated::consts::U32\">U32</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.OutputSize\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.OutputSize\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"crypto_common/trait.OutputSizeUser.html#associatedtype.OutputSize\" class=\"associatedtype\">OutputSize</a> = OutSize</h4></section></summary><div class='docblock'>Size of the output in bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.output_size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/crypto_common/lib.rs.html#72\">source</a><a href=\"#method.output_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"crypto_common/trait.OutputSizeUser.html#method.output_size\" class=\"fn\">output_size</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Return output size in bytes.</div></details></div></details>","OutputSizeUser","blake2::Blake2sMac256"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Update-for-Blake2sMac%3COutSize%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/blake2/lib.rs.html#169\">source</a><a href=\"#impl-Update-for-Blake2sMac%3COutSize%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OutSize&gt; <a class=\"trait\" href=\"digest/trait.Update.html\" title=\"trait digest::Update\">Update</a> for <a class=\"struct\" href=\"blake2/struct.Blake2sMac.html\" title=\"struct blake2::Blake2sMac\">Blake2sMac</a>&lt;OutSize&gt;<div class=\"where\">where\n    OutSize: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"typenum/type_operators/trait.IsLessOrEqual.html\" title=\"trait typenum::type_operators::IsLessOrEqual\">IsLessOrEqual</a>&lt;<a class=\"type\" href=\"typenum/generated/consts/type.U32.html\" title=\"type typenum::generated::consts::U32\">U32</a>&gt;,\n    <a class=\"type\" href=\"typenum/operator_aliases/type.LeEq.html\" title=\"type typenum::operator_aliases::LeEq\">LeEq</a>&lt;OutSize, <a class=\"type\" href=\"typenum/generated/consts/type.U32.html\" title=\"type typenum::generated::consts::U32\">U32</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.update\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/blake2/lib.rs.html#169\">source</a><a href=\"#method.update\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"digest/trait.Update.html#tymethod.update\" class=\"fn\">update</a>(&amp;mut self, input: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>])</h4></section></summary><div class='docblock'>Update state using the provided data.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.chain\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/digest/lib.rs.html#83-85\">source</a><a href=\"#method.chain\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"digest/trait.Update.html#method.chain\" class=\"fn\">chain</a>(self, data: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Digest input data in a chained manner.</div></details></div></details>","Update","blake2::Blake2sMac256"],["<section id=\"impl-MacMarker-for-Blake2sMac%3COutSize%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/blake2/lib.rs.html#169\">source</a><a href=\"#impl-MacMarker-for-Blake2sMac%3COutSize%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;OutSize&gt; <a class=\"trait\" href=\"digest/mac/trait.MacMarker.html\" title=\"trait digest::mac::MacMarker\">MacMarker</a> for <a class=\"struct\" href=\"blake2/struct.Blake2sMac.html\" title=\"struct blake2::Blake2sMac\">Blake2sMac</a>&lt;OutSize&gt;<div class=\"where\">where\n    OutSize: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"typenum/type_operators/trait.IsLessOrEqual.html\" title=\"trait typenum::type_operators::IsLessOrEqual\">IsLessOrEqual</a>&lt;<a class=\"type\" href=\"typenum/generated/consts/type.U32.html\" title=\"type typenum::generated::consts::U32\">U32</a>&gt;,\n    <a class=\"type\" href=\"typenum/operator_aliases/type.LeEq.html\" title=\"type typenum::operator_aliases::LeEq\">LeEq</a>&lt;OutSize, <a class=\"type\" href=\"typenum/generated/consts/type.U32.html\" title=\"type typenum::generated::consts::U32\">U32</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,</div></h3></section>","MacMarker","blake2::Blake2sMac256"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()