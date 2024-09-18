(function() {
    var type_impls = Object.fromEntries([["pallet_message_queue",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Page%3CSize,+HeapSize%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_message_queue/lib.rs.html#248\">source</a><a href=\"#impl-Clone-for-Page%3CSize,+HeapSize%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Size: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, HeapSize: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;Size&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"pallet_message_queue/struct.Page.html\" title=\"struct pallet_message_queue::Page\">Page</a>&lt;Size, HeapSize&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_message_queue/lib.rs.html#248\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","pallet_message_queue::PageOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Page%3CSize,+HeapSize%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_message_queue/lib.rs.html#248\">source</a><a href=\"#impl-Debug-for-Page%3CSize,+HeapSize%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Size: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, HeapSize: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;Size&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pallet_message_queue/struct.Page.html\" title=\"struct pallet_message_queue::Page\">Page</a>&lt;Size, HeapSize&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_message_queue/lib.rs.html#248\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","pallet_message_queue::PageOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-Page%3CSize,+HeapSize%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_message_queue/lib.rs.html#248\">source</a><a href=\"#impl-Decode-for-Page%3CSize,+HeapSize%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Size, HeapSize: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;Size&gt;&gt; <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Decode.html\" title=\"trait parity_scale_codec::codec::Decode\">Decode</a> for <a class=\"struct\" href=\"pallet_message_queue/struct.Page.html\" title=\"struct pallet_message_queue::Page\">Page</a>&lt;Size, HeapSize&gt;<div class=\"where\">where\n    Size: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Decode.html\" title=\"trait parity_scale_codec::codec::Decode\">Decode</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    <a class=\"struct\" href=\"bounded_collections/bounded_vec/struct.BoundedVec.html\" title=\"struct bounded_collections::bounded_vec::BoundedVec\">BoundedVec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"pallet_message_queue/struct.IntoU32.html\" title=\"struct pallet_message_queue::IntoU32\">IntoU32</a>&lt;HeapSize, Size&gt;&gt;: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Decode.html\" title=\"trait parity_scale_codec::codec::Decode\">Decode</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_message_queue/lib.rs.html#248\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"parity_scale_codec/codec/trait.Decode.html#tymethod.decode\" class=\"fn\">decode</a>&lt;__CodecInputEdqy: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Input.html\" title=\"trait parity_scale_codec::codec::Input\">Input</a>&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"struct\" href=\"parity_scale_codec/error/struct.Error.html\" title=\"struct parity_scale_codec::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parity_scale_codec/codec.rs.html#308\">source</a><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"parity_scale_codec/codec/trait.Decode.html#method.decode_into\" class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/nightly/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"parity_scale_codec/decode_finished/struct.DecodeFinished.html\" title=\"struct parity_scale_codec::decode_finished::DecodeFinished\">DecodeFinished</a>, <a class=\"struct\" href=\"parity_scale_codec/error/struct.Error.html\" title=\"struct parity_scale_codec::error::Error\">Error</a>&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Input.html\" title=\"trait parity_scale_codec::codec::Input\">Input</a>,</div></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a href=\"parity_scale_codec/codec/trait.Decode.html#method.decode_into\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parity_scale_codec/codec.rs.html#320\">source</a><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"parity_scale_codec/codec/trait.Decode.html#method.skip\" class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"parity_scale_codec/error/struct.Error.html\" title=\"struct parity_scale_codec::error::Error\">Error</a>&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Input.html\" title=\"trait parity_scale_codec::codec::Input\">Input</a>,</div></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a href=\"parity_scale_codec/codec/trait.Decode.html#method.skip\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parity_scale_codec/codec.rs.html#330\">source</a><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"parity_scale_codec/codec/trait.Decode.html#method.encoded_fixed_size\" class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a href=\"parity_scale_codec/codec/trait.Decode.html#method.encoded_fixed_size\">Read more</a></div></details></div></details>","Decode","pallet_message_queue::PageOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Page%3CSize,+HeapSize%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_message_queue/lib.rs.html#248\">source</a><a href=\"#impl-Default-for-Page%3CSize,+HeapSize%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Size: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, HeapSize: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;Size&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"pallet_message_queue/struct.Page.html\" title=\"struct pallet_message_queue::Page\">Page</a>&lt;Size, HeapSize&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_message_queue/lib.rs.html#248\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","pallet_message_queue::PageOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-Page%3CSize,+HeapSize%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_message_queue/lib.rs.html#248\">source</a><a href=\"#impl-Encode-for-Page%3CSize,+HeapSize%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Size, HeapSize: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;Size&gt;&gt; <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Encode.html\" title=\"trait parity_scale_codec::codec::Encode\">Encode</a> for <a class=\"struct\" href=\"pallet_message_queue/struct.Page.html\" title=\"struct pallet_message_queue::Page\">Page</a>&lt;Size, HeapSize&gt;<div class=\"where\">where\n    Size: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Encode.html\" title=\"trait parity_scale_codec::codec::Encode\">Encode</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    <a class=\"struct\" href=\"bounded_collections/bounded_vec/struct.BoundedVec.html\" title=\"struct bounded_collections::bounded_vec::BoundedVec\">BoundedVec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"pallet_message_queue/struct.IntoU32.html\" title=\"struct pallet_message_queue::IntoU32\">IntoU32</a>&lt;HeapSize, Size&gt;&gt;: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Encode.html\" title=\"trait parity_scale_codec::codec::Encode\">Encode</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_message_queue/lib.rs.html#248\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"parity_scale_codec/codec/trait.Encode.html#method.size_hint\" class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a href=\"parity_scale_codec/codec/trait.Encode.html#method.size_hint\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_message_queue/lib.rs.html#248\">source</a><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"parity_scale_codec/codec/trait.Encode.html#method.encode_to\" class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Output.html\" title=\"trait parity_scale_codec::codec::Output\">Output</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>,\n)</h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parity_scale_codec/codec.rs.html#240\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"parity_scale_codec/codec/trait.Encode.html#method.encode\" class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parity_scale_codec/codec.rs.html#247\">source</a><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"parity_scale_codec/codec/trait.Encode.html#method.using_encoded\" class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; R,</div></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parity_scale_codec/codec.rs.html#259\">source</a><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"parity_scale_codec/codec/trait.Encode.html#method.encoded_size\" class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a href=\"parity_scale_codec/codec/trait.Encode.html#method.encoded_size\">Read more</a></div></details></div></details>","Encode","pallet_message_queue::PageOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MaxEncodedLen-for-Page%3CSize,+HeapSize%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_message_queue/lib.rs.html#248\">source</a><a href=\"#impl-MaxEncodedLen-for-Page%3CSize,+HeapSize%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Size, HeapSize: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;Size&gt;&gt; <a class=\"trait\" href=\"parity_scale_codec/max_encoded_len/trait.MaxEncodedLen.html\" title=\"trait parity_scale_codec::max_encoded_len::MaxEncodedLen\">MaxEncodedLen</a> for <a class=\"struct\" href=\"pallet_message_queue/struct.Page.html\" title=\"struct pallet_message_queue::Page\">Page</a>&lt;Size, HeapSize&gt;<div class=\"where\">where\n    Size: <a class=\"trait\" href=\"parity_scale_codec/max_encoded_len/trait.MaxEncodedLen.html\" title=\"trait parity_scale_codec::max_encoded_len::MaxEncodedLen\">MaxEncodedLen</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_encoded_len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_message_queue/lib.rs.html#248\">source</a><a href=\"#method.max_encoded_len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"parity_scale_codec/max_encoded_len/trait.MaxEncodedLen.html#tymethod.max_encoded_len\" class=\"fn\">max_encoded_len</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Upper bound, in bytes, of the maximum encoded size of this item.</div></details></div></details>","MaxEncodedLen","pallet_message_queue::PageOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-Page%3CSize,+HeapSize%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_message_queue/lib.rs.html#248\">source</a><a href=\"#impl-TypeInfo-for-Page%3CSize,+HeapSize%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Size, HeapSize&gt; <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"pallet_message_queue/struct.Page.html\" title=\"struct pallet_message_queue::Page\">Page</a>&lt;Size, HeapSize&gt;<div class=\"where\">where\n    Size: <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    <a class=\"struct\" href=\"bounded_collections/bounded_vec/struct.BoundedVec.html\" title=\"struct bounded_collections::bounded_vec::BoundedVec\">BoundedVec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"pallet_message_queue/struct.IntoU32.html\" title=\"struct pallet_message_queue::IntoU32\">IntoU32</a>&lt;HeapSize, Size&gt;&gt;: <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> + 'static,\n    HeapSize: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;Size&gt; + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/pallet_message_queue/lib.rs.html#248\">source</a><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"scale_info/trait.TypeInfo.html#associatedtype.Identity\" class=\"associatedtype\">Identity</a> = <a class=\"struct\" href=\"pallet_message_queue/struct.Page.html\" title=\"struct pallet_message_queue::Page\">Page</a>&lt;Size, HeapSize&gt;</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a href=\"scale_info/trait.TypeInfo.html#associatedtype.Identity\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_message_queue/lib.rs.html#248\">source</a><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"scale_info/trait.TypeInfo.html#tymethod.type_info\" class=\"fn\">type_info</a>() -&gt; <a class=\"struct\" href=\"scale_info/ty/struct.Type.html\" title=\"struct scale_info::ty::Type\">Type</a></h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","pallet_message_queue::PageOf"],["<section id=\"impl-EncodeLike-for-Page%3CSize,+HeapSize%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_message_queue/lib.rs.html#248\">source</a><a href=\"#impl-EncodeLike-for-Page%3CSize,+HeapSize%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Size, HeapSize: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;Size&gt;&gt; <a class=\"trait\" href=\"parity_scale_codec/encode_like/trait.EncodeLike.html\" title=\"trait parity_scale_codec::encode_like::EncodeLike\">EncodeLike</a> for <a class=\"struct\" href=\"pallet_message_queue/struct.Page.html\" title=\"struct pallet_message_queue::Page\">Page</a>&lt;Size, HeapSize&gt;<div class=\"where\">where\n    Size: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Encode.html\" title=\"trait parity_scale_codec::codec::Encode\">Encode</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    <a class=\"struct\" href=\"bounded_collections/bounded_vec/struct.BoundedVec.html\" title=\"struct bounded_collections::bounded_vec::BoundedVec\">BoundedVec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"pallet_message_queue/struct.IntoU32.html\" title=\"struct pallet_message_queue::IntoU32\">IntoU32</a>&lt;HeapSize, Size&gt;&gt;: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.Encode.html\" title=\"trait parity_scale_codec::codec::Encode\">Encode</a>,</div></h3></section>","EncodeLike","pallet_message_queue::PageOf"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[29036]}