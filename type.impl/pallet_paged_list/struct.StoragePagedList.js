(function() {var type_impls = {
"pallet_paged_list":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-StorageList%3CValue%3E-for-StoragePagedList%3CPrefix,+Value,+ValuesPerNewPage%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_paged_list/paged_list.rs.html#314-335\">source</a><a href=\"#impl-StorageList%3CValue%3E-for-StoragePagedList%3CPrefix,+Value,+ValuesPerNewPage%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Prefix, Value, ValuesPerNewPage&gt; <a class=\"trait\" href=\"frame_support/storage/trait.StorageList.html\" title=\"trait frame_support::storage::StorageList\">StorageList</a>&lt;Value&gt; for <a class=\"struct\" href=\"pallet_paged_list/struct.StoragePagedList.html\" title=\"struct pallet_paged_list::StoragePagedList\">StoragePagedList</a>&lt;Prefix, Value, ValuesPerNewPage&gt;<div class=\"where\">where\n    Prefix: <a class=\"trait\" href=\"frame_support/traits/storage/trait.StorageInstance.html\" title=\"trait frame_support::traits::storage::StorageInstance\">StorageInstance</a>,\n    Value: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.FullCodec.html\" title=\"trait parity_scale_codec::codec::FullCodec\">FullCodec</a>,\n    ValuesPerNewPage: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Iterator\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Iterator\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"frame_support/storage/trait.StorageList.html#associatedtype.Iterator\" class=\"associatedtype\">Iterator</a> = StoragePagedListIterator&lt;Prefix, Value, ValuesPerNewPage&gt;</h4></section></summary><div class='docblock'>Iterator for normal and draining iteration.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Appender\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Appender\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"frame_support/storage/trait.StorageList.html#associatedtype.Appender\" class=\"associatedtype\">Appender</a> = StoragePagedListMeta&lt;Prefix, Value, ValuesPerNewPage&gt;</h4></section></summary><div class='docblock'>Append iterator for fast append operations.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.iter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_paged_list/paged_list.rs.html#324-326\">source</a><a href=\"#method.iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_support/storage/trait.StorageList.html#tymethod.iter\" class=\"fn\">iter</a>() -&gt; Self::<a class=\"associatedtype\" href=\"frame_support/storage/trait.StorageList.html#associatedtype.Iterator\" title=\"type frame_support::storage::StorageList::Iterator\">Iterator</a></h4></section></summary><div class='docblock'>List the elements in append order.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.drain\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_paged_list/paged_list.rs.html#328-330\">source</a><a href=\"#method.drain\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_support/storage/trait.StorageList.html#tymethod.drain\" class=\"fn\">drain</a>() -&gt; Self::<a class=\"associatedtype\" href=\"frame_support/storage/trait.StorageList.html#associatedtype.Iterator\" title=\"type frame_support::storage::StorageList::Iterator\">Iterator</a></h4></section></summary><div class='docblock'>Drain the elements in append order. <a href=\"frame_support/storage/trait.StorageList.html#tymethod.drain\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.appender\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_paged_list/paged_list.rs.html#332-334\">source</a><a href=\"#method.appender\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_support/storage/trait.StorageList.html#tymethod.appender\" class=\"fn\">appender</a>() -&gt; Self::<a class=\"associatedtype\" href=\"frame_support/storage/trait.StorageList.html#associatedtype.Appender\" title=\"type frame_support::storage::StorageList::Appender\">Appender</a></h4></section></summary><div class='docblock'>A fast append iterator.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_one\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/frame_support/storage/mod.rs.html#223-225\">source</a><a href=\"#method.append_one\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_support/storage/trait.StorageList.html#method.append_one\" class=\"fn\">append_one</a>&lt;EncodeLikeValue&gt;(item: EncodeLikeValue)<div class=\"where\">where\n    EncodeLikeValue: <a class=\"trait\" href=\"parity_scale_codec/encode_like/trait.EncodeLike.html\" title=\"trait parity_scale_codec::encode_like::EncodeLike\">EncodeLike</a>&lt;V&gt;,</div></h4></section></summary><div class='docblock'>Append a single element. <a href=\"frame_support/storage/trait.StorageList.html#method.append_one\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_many\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/frame_support/storage/mod.rs.html#235-238\">source</a><a href=\"#method.append_many\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_support/storage/trait.StorageList.html#method.append_many\" class=\"fn\">append_many</a>&lt;EncodeLikeValue, I&gt;(items: I)<div class=\"where\">where\n    EncodeLikeValue: <a class=\"trait\" href=\"parity_scale_codec/encode_like/trait.EncodeLike.html\" title=\"trait parity_scale_codec::encode_like::EncodeLike\">EncodeLike</a>&lt;V&gt;,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = EncodeLikeValue&gt;,</div></h4></section></summary><div class='docblock'>Append many elements. <a href=\"frame_support/storage/trait.StorageList.html#method.append_many\">Read more</a></div></details></div></details>","StorageList<Value>","pallet_paged_list::pallet::List"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-StoragePrefixedContainer-for-StoragePagedList%3CPrefix,+Value,+ValuesPerNewPage%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_paged_list/paged_list.rs.html#389-403\">source</a><a href=\"#impl-StoragePrefixedContainer-for-StoragePagedList%3CPrefix,+Value,+ValuesPerNewPage%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Prefix, Value, ValuesPerNewPage&gt; <a class=\"trait\" href=\"frame_support/storage/trait.StoragePrefixedContainer.html\" title=\"trait frame_support::storage::StoragePrefixedContainer\">StoragePrefixedContainer</a> for <a class=\"struct\" href=\"pallet_paged_list/struct.StoragePagedList.html\" title=\"struct pallet_paged_list::StoragePagedList\">StoragePagedList</a>&lt;Prefix, Value, ValuesPerNewPage&gt;<div class=\"where\">where\n    Prefix: <a class=\"trait\" href=\"frame_support/traits/storage/trait.StorageInstance.html\" title=\"trait frame_support::traits::storage::StorageInstance\">StorageInstance</a>,\n    Value: <a class=\"trait\" href=\"parity_scale_codec/codec/trait.FullCodec.html\" title=\"trait parity_scale_codec::codec::FullCodec\">FullCodec</a>,\n    ValuesPerNewPage: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.pallet_prefix\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_paged_list/paged_list.rs.html#396-398\">source</a><a href=\"#method.pallet_prefix\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_support/storage/trait.StoragePrefixedContainer.html#tymethod.pallet_prefix\" class=\"fn\">pallet_prefix</a>() -&gt; &amp;'static [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>] <a href=\"#\" class=\"tooltip\" data-notable-ty=\"&amp;&#39;static [u8]\">ⓘ</a></h4></section></summary><div class='docblock'>Pallet prefix. Used for generating final key.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.storage_prefix\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_paged_list/paged_list.rs.html#400-402\">source</a><a href=\"#method.storage_prefix\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_support/storage/trait.StoragePrefixedContainer.html#tymethod.storage_prefix\" class=\"fn\">storage_prefix</a>() -&gt; &amp;'static [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>] <a href=\"#\" class=\"tooltip\" data-notable-ty=\"&amp;&#39;static [u8]\">ⓘ</a></h4></section></summary><div class='docblock'>Storage prefix. Used for generating final key.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.final_prefix\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/frame_support/storage/mod.rs.html#1353\">source</a><a href=\"#method.final_prefix\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_support/storage/trait.StoragePrefixedContainer.html#method.final_prefix\" class=\"fn\">final_prefix</a>() -&gt; [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">32</a>]</h4></section></summary><div class='docblock'>Final full prefix that prefixes all keys.</div></details></div></details>","StoragePrefixedContainer","pallet_paged_list::pallet::List"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()