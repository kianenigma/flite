(function() {
    var implementors = Object.fromEntries([["hash_db",[]],["memory_db",[["impl&lt;H, KF, T&gt; <a class=\"trait\" href=\"hash_db/trait.HashDBRef.html\" title=\"trait hash_db::HashDBRef\">HashDBRef</a>&lt;H, T&gt; for <a class=\"struct\" href=\"memory_db/struct.MemoryDB.html\" title=\"struct memory_db::MemoryDB\">MemoryDB</a>&lt;H, KF, T&gt;<div class=\"where\">where\n    H: <a class=\"trait\" href=\"hash_db/trait.Hasher.html\" title=\"trait hash_db::Hasher\">KeyHasher</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt; + for&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    KF: <a class=\"trait\" href=\"memory_db/trait.KeyFunction.html\" title=\"trait memory_db::KeyFunction\">KeyFunction</a>&lt;H&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</div>"]]],["sp_trie",[["impl&lt;'a, DB, H, T&gt; <a class=\"trait\" href=\"hash_db/trait.HashDBRef.html\" title=\"trait hash_db::HashDBRef\">HashDBRef</a>&lt;H, T&gt; for <a class=\"struct\" href=\"sp_trie/struct.KeySpacedDB.html\" title=\"struct sp_trie::KeySpacedDB\">KeySpacedDB</a>&lt;'a, DB, H&gt;<div class=\"where\">where\n    DB: <a class=\"trait\" href=\"hash_db/trait.HashDBRef.html\" title=\"trait hash_db::HashDBRef\">HashDBRef</a>&lt;H, T&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    H: <a class=\"trait\" href=\"hash_db/trait.Hasher.html\" title=\"trait hash_db::Hasher\">Hasher</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'static [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;,</div>"]]],["trie_db",[]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[14,2063,965,15]}