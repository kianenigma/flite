(function() {
    var type_impls = Object.fromEntries([["sp_trie",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TrieDBMutBuilder%3C'db,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/trie_db/triedbmut.rs.html#650\">source</a><a href=\"#impl-TrieDBMutBuilder%3C'db,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'db, L&gt; <a class=\"struct\" href=\"trie_db/triedbmut/struct.TrieDBMutBuilder.html\" title=\"struct trie_db::triedbmut::TrieDBMutBuilder\">TrieDBMutBuilder</a>&lt;'db, L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/trie_db/triedbmut.rs.html#653\">source</a><h4 class=\"code-header\">pub fn <a href=\"trie_db/triedbmut/struct.TrieDBMutBuilder.html#tymethod.new\" class=\"fn\">new</a>(\n    db: &amp;'db mut dyn <a class=\"trait\" href=\"sp_trie/trait.HashDBT.html\" title=\"trait sp_trie::HashDBT\">HashDB</a>&lt;&lt;L as <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>&gt;::<a class=\"associatedtype\" href=\"sp_trie/trait.TrieLayout.html#associatedtype.Hash\" title=\"type sp_trie::TrieLayout::Hash\">Hash</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;,\n    root: &amp;'db mut &lt;&lt;L as <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>&gt;::<a class=\"associatedtype\" href=\"sp_trie/trait.TrieLayout.html#associatedtype.Hash\" title=\"type sp_trie::TrieLayout::Hash\">Hash</a> as <a class=\"trait\" href=\"hash_db/trait.Hasher.html\" title=\"trait hash_db::Hasher\">Hasher</a>&gt;::<a class=\"associatedtype\" href=\"hash_db/trait.Hasher.html#associatedtype.Out\" title=\"type hash_db::Hasher::Out\">Out</a>,\n) -&gt; <a class=\"struct\" href=\"trie_db/triedbmut/struct.TrieDBMutBuilder.html\" title=\"struct trie_db::triedbmut::TrieDBMutBuilder\">TrieDBMutBuilder</a>&lt;'db, L&gt;</h4></section></summary><div class=\"docblock\"><p>Create a builder for constructing a new trie with the backing database <code>db</code> and empty\n<code>root</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_existing\" class=\"method\"><a class=\"src rightside\" href=\"src/trie_db/triedbmut.rs.html#663-666\">source</a><h4 class=\"code-header\">pub fn <a href=\"trie_db/triedbmut/struct.TrieDBMutBuilder.html#tymethod.from_existing\" class=\"fn\">from_existing</a>(\n    db: &amp;'db mut dyn <a class=\"trait\" href=\"sp_trie/trait.HashDBT.html\" title=\"trait sp_trie::HashDBT\">HashDB</a>&lt;&lt;L as <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>&gt;::<a class=\"associatedtype\" href=\"sp_trie/trait.TrieLayout.html#associatedtype.Hash\" title=\"type sp_trie::TrieLayout::Hash\">Hash</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;,\n    root: &amp;'db mut &lt;&lt;L as <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>&gt;::<a class=\"associatedtype\" href=\"sp_trie/trait.TrieLayout.html#associatedtype.Hash\" title=\"type sp_trie::TrieLayout::Hash\">Hash</a> as <a class=\"trait\" href=\"hash_db/trait.Hasher.html\" title=\"trait hash_db::Hasher\">Hasher</a>&gt;::<a class=\"associatedtype\" href=\"hash_db/trait.Hasher.html#associatedtype.Out\" title=\"type hash_db::Hasher::Out\">Out</a>,\n) -&gt; <a class=\"struct\" href=\"trie_db/triedbmut/struct.TrieDBMutBuilder.html\" title=\"struct trie_db::triedbmut::TrieDBMutBuilder\">TrieDBMutBuilder</a>&lt;'db, L&gt;</h4></section></summary><div class=\"docblock\"><p>Create a builder for constructing a new trie with the backing database <code>db</code> and <code>root</code>.</p>\n<p>This doesn’t check if <code>root</code> exists in the given <code>db</code>. If <code>root</code> doesn’t exist it will fail\nwhen trying to lookup any key.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_cache\" class=\"method\"><a class=\"src rightside\" href=\"src/trie_db/triedbmut.rs.html#671\">source</a><h4 class=\"code-header\">pub fn <a href=\"trie_db/triedbmut/struct.TrieDBMutBuilder.html#tymethod.with_cache\" class=\"fn\">with_cache</a>(\n    self,\n    cache: &amp;'db mut dyn <a class=\"trait\" href=\"sp_trie/trait.TrieCache.html\" title=\"trait sp_trie::TrieCache\">TrieCache</a>&lt;&lt;L as <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>&gt;::<a class=\"associatedtype\" href=\"sp_trie/trait.TrieLayout.html#associatedtype.Codec\" title=\"type sp_trie::TrieLayout::Codec\">Codec</a>&gt;,\n) -&gt; <a class=\"struct\" href=\"trie_db/triedbmut/struct.TrieDBMutBuilder.html\" title=\"struct trie_db::triedbmut::TrieDBMutBuilder\">TrieDBMutBuilder</a>&lt;'db, L&gt;</h4></section></summary><div class=\"docblock\"><p>Use the given <code>cache</code> for the db.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_optional_cache\" class=\"method\"><a class=\"src rightside\" href=\"src/trie_db/triedbmut.rs.html#677-680\">source</a><h4 class=\"code-header\">pub fn <a href=\"trie_db/triedbmut/struct.TrieDBMutBuilder.html#tymethod.with_optional_cache\" class=\"fn\">with_optional_cache</a>&lt;'cache&gt;(\n    self,\n    cache: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'cache mut dyn <a class=\"trait\" href=\"sp_trie/trait.TrieCache.html\" title=\"trait sp_trie::TrieCache\">TrieCache</a>&lt;&lt;L as <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>&gt;::<a class=\"associatedtype\" href=\"sp_trie/trait.TrieLayout.html#associatedtype.Codec\" title=\"type sp_trie::TrieLayout::Codec\">Codec</a>&gt;&gt;,\n) -&gt; <a class=\"struct\" href=\"trie_db/triedbmut/struct.TrieDBMutBuilder.html\" title=\"struct trie_db::triedbmut::TrieDBMutBuilder\">TrieDBMutBuilder</a>&lt;'db, L&gt;<div class=\"where\">where\n    'cache: 'db,</div></h4></section></summary><div class=\"docblock\"><p>Use the given optional <code>cache</code> for the db.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_recorder\" class=\"method\"><a class=\"src rightside\" href=\"src/trie_db/triedbmut.rs.html#687\">source</a><h4 class=\"code-header\">pub fn <a href=\"trie_db/triedbmut/struct.TrieDBMutBuilder.html#tymethod.with_recorder\" class=\"fn\">with_recorder</a>(\n    self,\n    recorder: &amp;'db mut dyn <a class=\"trait\" href=\"sp_trie/trait.TrieRecorder.html\" title=\"trait sp_trie::TrieRecorder\">TrieRecorder</a>&lt;&lt;&lt;L as <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>&gt;::<a class=\"associatedtype\" href=\"sp_trie/trait.TrieLayout.html#associatedtype.Hash\" title=\"type sp_trie::TrieLayout::Hash\">Hash</a> as <a class=\"trait\" href=\"hash_db/trait.Hasher.html\" title=\"trait hash_db::Hasher\">Hasher</a>&gt;::<a class=\"associatedtype\" href=\"hash_db/trait.Hasher.html#associatedtype.Out\" title=\"type hash_db::Hasher::Out\">Out</a>&gt;,\n) -&gt; <a class=\"struct\" href=\"trie_db/triedbmut/struct.TrieDBMutBuilder.html\" title=\"struct trie_db::triedbmut::TrieDBMutBuilder\">TrieDBMutBuilder</a>&lt;'db, L&gt;</h4></section></summary><div class=\"docblock\"><p>Use the given <code>recorder</code> to record trie accesses.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_optional_recorder\" class=\"method\"><a class=\"src rightside\" href=\"src/trie_db/triedbmut.rs.html#693-696\">source</a><h4 class=\"code-header\">pub fn <a href=\"trie_db/triedbmut/struct.TrieDBMutBuilder.html#tymethod.with_optional_recorder\" class=\"fn\">with_optional_recorder</a>&lt;'recorder&gt;(\n    self,\n    recorder: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'recorder mut dyn <a class=\"trait\" href=\"sp_trie/trait.TrieRecorder.html\" title=\"trait sp_trie::TrieRecorder\">TrieRecorder</a>&lt;&lt;&lt;L as <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>&gt;::<a class=\"associatedtype\" href=\"sp_trie/trait.TrieLayout.html#associatedtype.Hash\" title=\"type sp_trie::TrieLayout::Hash\">Hash</a> as <a class=\"trait\" href=\"hash_db/trait.Hasher.html\" title=\"trait hash_db::Hasher\">Hasher</a>&gt;::<a class=\"associatedtype\" href=\"hash_db/trait.Hasher.html#associatedtype.Out\" title=\"type hash_db::Hasher::Out\">Out</a>&gt;&gt;,\n) -&gt; <a class=\"struct\" href=\"trie_db/triedbmut/struct.TrieDBMutBuilder.html\" title=\"struct trie_db::triedbmut::TrieDBMutBuilder\">TrieDBMutBuilder</a>&lt;'db, L&gt;<div class=\"where\">where\n    'recorder: 'db,</div></h4></section></summary><div class=\"docblock\"><p>Use the given optional <code>recorder</code> to record trie accesses.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.build\" class=\"method\"><a class=\"src rightside\" href=\"src/trie_db/triedbmut.rs.html#703\">source</a><h4 class=\"code-header\">pub fn <a href=\"trie_db/triedbmut/struct.TrieDBMutBuilder.html#tymethod.build\" class=\"fn\">build</a>(self) -&gt; <a class=\"struct\" href=\"trie_db/triedbmut/struct.TrieDBMut.html\" title=\"struct trie_db::triedbmut::TrieDBMut\">TrieDBMut</a>&lt;'db, L&gt;</h4></section></summary><div class=\"docblock\"><p>Build the <a href=\"trie_db/triedbmut/struct.TrieDBMut.html\" title=\"struct trie_db::triedbmut::TrieDBMut\"><code>TrieDBMut</code></a>.</p>\n</div></details></div></details>",0,"sp_trie::TrieDBMutBuilder"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[10433]}