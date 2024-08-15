(function() {var type_impls = {
"spin":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-RwLock%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#447-456\">source</a><a href=\"#impl-Debug-for-RwLock%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"spin/rwlock/struct.RwLock.html\" title=\"struct spin::rwlock::RwLock\">RwLock</a>&lt;T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#448-455\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","spin::RwLock"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-RwLock%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#458-462\">source</a><a href=\"#impl-Default-for-RwLock%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"spin/rwlock/struct.RwLock.html\" title=\"struct spin::rwlock::RwLock\">RwLock</a>&lt;T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#459-461\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","spin::RwLock"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CT%3E-for-RwLock%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#464-468\">source</a><a href=\"#impl-From%3CT%3E-for-RwLock%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"spin/rwlock/struct.RwLock.html\" title=\"struct spin::rwlock::RwLock\">RwLock</a>&lt;T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#465-467\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(data: T) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<T>","spin::RwLock"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLock%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#123-184\">source</a><a href=\"#impl-RwLock%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, R&gt; <a class=\"struct\" href=\"spin/rwlock/struct.RwLock.html\" title=\"struct spin::rwlock::RwLock\">RwLock</a>&lt;T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#140-146\">source</a><h4 class=\"code-header\">pub const fn <a href=\"spin/rwlock/struct.RwLock.html#tymethod.new\" class=\"fn\">new</a>(data: T) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new spinlock wrapping the supplied data.</p>\n<p>May be used statically:</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>spin;\n\n<span class=\"kw\">static </span>RW_LOCK: spin::RwLock&lt;()&gt; = spin::RwLock::new(());\n\n<span class=\"kw\">fn </span>demo() {\n    <span class=\"kw\">let </span>lock = RW_LOCK.read();\n    <span class=\"comment\">// do something with lock\n    </span>drop(lock);\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_inner\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#150-155\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/rwlock/struct.RwLock.html#tymethod.into_inner\" class=\"fn\">into_inner</a>(self) -&gt; T</h4></section></summary><div class=\"docblock\"><p>Consumes this <code>RwLock</code>, returning the underlying data.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_mut_ptr\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#181-183\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/rwlock/struct.RwLock.html#tymethod.as_mut_ptr\" class=\"fn\">as_mut_ptr</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut T</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable pointer to the underying data.</p>\n<p>This is mostly meant to be used for applications which require manual unlocking, but where\nstoring both the lock and the pointer to the inner data gets inefficient.</p>\n<p>While this is safe, writing to the data is undefined behavior unless the current thread has\nacquired a write lock, and reading requires either a read or write lock.</p>\n<h5 id=\"example\"><a class=\"doc-anchor\" href=\"#example\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>lock = spin::RwLock::new(<span class=\"number\">42</span>);\n\n<span class=\"kw\">unsafe </span>{\n    core::mem::forget(lock.write());\n\n    <span class=\"macro\">assert_eq!</span>(lock.as_mut_ptr().read(), <span class=\"number\">42</span>);\n    lock.as_mut_ptr().write(<span class=\"number\">58</span>);\n\n    lock.force_write_unlock();\n}\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>lock.read(), <span class=\"number\">58</span>);\n</code></pre></div>\n</div></details></div></details>",0,"spin::RwLock"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLock%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#186-257\">source</a><a href=\"#impl-RwLock%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, R: <a class=\"trait\" href=\"spin/relax/trait.RelaxStrategy.html\" title=\"trait spin::relax::RelaxStrategy\">RelaxStrategy</a>&gt; <a class=\"struct\" href=\"spin/rwlock/struct.RwLock.html\" title=\"struct spin::rwlock::RwLock\">RwLock</a>&lt;T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.read\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#209-216\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/rwlock/struct.RwLock.html#tymethod.read\" class=\"fn\">read</a>(&amp;self) -&gt; <a class=\"struct\" href=\"spin/rwlock/struct.RwLockReadGuard.html\" title=\"struct spin::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'_, T&gt;</h4></section></summary><div class=\"docblock\"><p>Locks this rwlock with shared read access, blocking the current thread\nuntil it can be acquired.</p>\n<p>The calling thread will be blocked until there are no more writers which\nhold the lock. There may be other readers currently inside the lock when\nthis method returns. This method does not provide any guarantees with\nrespect to the ordering of whether contentious readers or writers will\nacquire the lock first.</p>\n<p>Returns an RAII guard which will release this thread’s shared access\nonce it is dropped.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>mylock = spin::RwLock::new(<span class=\"number\">0</span>);\n{\n    <span class=\"kw\">let </span><span class=\"kw-2\">mut </span>data = mylock.read();\n    <span class=\"comment\">// The lock is now locked and the data can be read\n    </span><span class=\"macro\">println!</span>(<span class=\"string\">\"{}\"</span>, <span class=\"kw-2\">*</span>data);\n    <span class=\"comment\">// The lock is dropped\n</span>}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#237-244\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/rwlock/struct.RwLock.html#tymethod.write\" class=\"fn\">write</a>(&amp;self) -&gt; <a class=\"struct\" href=\"spin/rwlock/struct.RwLockWriteGuard.html\" title=\"struct spin::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'_, T, R&gt;</h4></section></summary><div class=\"docblock\"><p>Lock this rwlock with exclusive write access, blocking the current\nthread until it can be acquired.</p>\n<p>This function will not return while other writers or other readers\ncurrently have access to the lock.</p>\n<p>Returns an RAII guard which will drop the write access of this rwlock\nwhen dropped.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>mylock = spin::RwLock::new(<span class=\"number\">0</span>);\n{\n    <span class=\"kw\">let </span><span class=\"kw-2\">mut </span>data = mylock.write();\n    <span class=\"comment\">// The lock is now locked and the data can be written\n    </span><span class=\"kw-2\">*</span>data += <span class=\"number\">1</span>;\n    <span class=\"comment\">// The lock is dropped\n</span>}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.upgradeable_read\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#249-256\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/rwlock/struct.RwLock.html#tymethod.upgradeable_read\" class=\"fn\">upgradeable_read</a>(&amp;self) -&gt; <a class=\"struct\" href=\"spin/rwlock/struct.RwLockUpgradableGuard.html\" title=\"struct spin::rwlock::RwLockUpgradableGuard\">RwLockUpgradableGuard</a>&lt;'_, T, R&gt;</h4></section></summary><div class=\"docblock\"><p>Obtain a readable lock guard that can later be upgraded to a writable lock guard.\nUpgrades can be done through the <a href=\"spin/rwlock/struct.RwLockUpgradableGuard.html#method.upgrade\" title=\"method spin::rwlock::RwLockUpgradableGuard::upgrade\"><code>RwLockUpgradableGuard::upgrade</code></a> method.</p>\n</div></details></div></details>",0,"spin::RwLock"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RwLock%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#259-445\">source</a><a href=\"#impl-RwLock%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, R&gt; <a class=\"struct\" href=\"spin/rwlock/struct.RwLock.html\" title=\"struct spin::rwlock::RwLock\">RwLock</a>&lt;T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_read\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#298-313\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/rwlock/struct.RwLock.html#tymethod.try_read\" class=\"fn\">try_read</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"spin/rwlock/struct.RwLockReadGuard.html\" title=\"struct spin::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'_, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempt to acquire this lock with shared read access.</p>\n<p>This function will never block and will return immediately if <code>read</code>\nwould otherwise succeed. Returns <code>Some</code> of an RAII guard which will\nrelease the shared access of this thread when dropped, or <code>None</code> if the\naccess could not be granted. This method does not provide any\nguarantees with respect to the ordering of whether contentious readers\nor writers will acquire the lock first.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>mylock = spin::RwLock::new(<span class=\"number\">0</span>);\n{\n    <span class=\"kw\">match </span>mylock.try_read() {\n        <span class=\"prelude-val\">Some</span>(data) =&gt; {\n            <span class=\"comment\">// The lock is now locked and the data can be read\n            </span><span class=\"macro\">println!</span>(<span class=\"string\">\"{}\"</span>, <span class=\"kw-2\">*</span>data);\n            <span class=\"comment\">// The lock is dropped\n        </span>},\n        <span class=\"prelude-val\">None </span>=&gt; (), <span class=\"comment\">// no cigar\n    </span>};\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reader_count\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#321-324\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/rwlock/struct.RwLock.html#tymethod.reader_count\" class=\"fn\">reader_count</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Return the number of readers that currently hold the lock (including upgradable readers).</p>\n<h5 id=\"safety\"><a class=\"doc-anchor\" href=\"#safety\">§</a>Safety</h5>\n<p>This function provides no synchronization guarantees and so its result should be considered ‘out of date’\nthe instant it is called. Do not use it for synchronization purposes. However, it may be useful as a heuristic.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.writer_count\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#334-336\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/rwlock/struct.RwLock.html#tymethod.writer_count\" class=\"fn\">writer_count</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Return the number of writers that currently hold the lock.</p>\n<p>Because <a href=\"spin/rwlock/struct.RwLock.html\" title=\"struct spin::rwlock::RwLock\"><code>RwLock</code></a> guarantees exclusive mutable access, this function may only return either <code>0</code> or <code>1</code>.</p>\n<h5 id=\"safety-1\"><a class=\"doc-anchor\" href=\"#safety-1\">§</a>Safety</h5>\n<p>This function provides no synchronization guarantees and so its result should be considered ‘out of date’\nthe instant it is called. Do not use it for synchronization purposes. However, it may be useful as a heuristic.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.force_read_decrement\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#347-350\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"spin/rwlock/struct.RwLock.html#tymethod.force_read_decrement\" class=\"fn\">force_read_decrement</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Force decrement the reader count.</p>\n<h5 id=\"safety-2\"><a class=\"doc-anchor\" href=\"#safety-2\">§</a>Safety</h5>\n<p>This is <em>extremely</em> unsafe if there are outstanding <code>RwLockReadGuard</code>s\nlive, or if called more times than <code>read</code> has been called, but can be\nuseful in FFI contexts where the caller doesn’t know how to deal with\nRAII. The underlying atomic operation uses <code>Ordering::Release</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.force_write_unlock\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#361-364\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"spin/rwlock/struct.RwLock.html#tymethod.force_write_unlock\" class=\"fn\">force_write_unlock</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Force unlock exclusive write access.</p>\n<h5 id=\"safety-3\"><a class=\"doc-anchor\" href=\"#safety-3\">§</a>Safety</h5>\n<p>This is <em>extremely</em> unsafe if there are outstanding <code>RwLockWriteGuard</code>s\nlive, or if called when there are current readers, but can be useful in\nFFI contexts where the caller doesn’t know how to deal with RAII. The\nunderlying atomic operation uses <code>Ordering::Release</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_write\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#408-410\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/rwlock/struct.RwLock.html#tymethod.try_write\" class=\"fn\">try_write</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"spin/rwlock/struct.RwLockWriteGuard.html\" title=\"struct spin::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'_, T, R&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempt to lock this rwlock with exclusive write access.</p>\n<p>This function does not ever block, and it will return <code>None</code> if a call\nto <code>write</code> would otherwise block. If successful, an RAII guard is\nreturned.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>mylock = spin::RwLock::new(<span class=\"number\">0</span>);\n{\n    <span class=\"kw\">match </span>mylock.try_write() {\n        <span class=\"prelude-val\">Some</span>(<span class=\"kw-2\">mut </span>data) =&gt; {\n            <span class=\"comment\">// The lock is now locked and the data can be written\n            </span><span class=\"kw-2\">*</span>data += <span class=\"number\">1</span>;\n            <span class=\"comment\">// The lock is implicitly dropped\n        </span>},\n        <span class=\"prelude-val\">None </span>=&gt; (), <span class=\"comment\">// no cigar\n    </span>};\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_upgradeable_read\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#414-426\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/rwlock/struct.RwLock.html#tymethod.try_upgradeable_read\" class=\"fn\">try_upgradeable_read</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"spin/rwlock/struct.RwLockUpgradableGuard.html\" title=\"struct spin::rwlock::RwLockUpgradableGuard\">RwLockUpgradableGuard</a>&lt;'_, T, R&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Tries to obtain an upgradeable lock guard.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#440-444\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/rwlock/struct.RwLock.html#tymethod.get_mut\" class=\"fn\">get_mut</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut T</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the underlying data.</p>\n<p>Since this call borrows the <code>RwLock</code> mutably, no actual locking needs to\ntake place – the mutable borrow statically guarantees no locks exist.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>lock = spin::RwLock::new(<span class=\"number\">0</span>);\n<span class=\"kw-2\">*</span>lock.get_mut() = <span class=\"number\">10</span>;\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>lock.read(), <span class=\"number\">10</span>);</code></pre></div>\n</div></details></div></details>",0,"spin::RwLock"],["<section id=\"impl-Send-for-RwLock%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#111\">source</a><a href=\"#impl-Send-for-RwLock%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"spin/rwlock/struct.RwLock.html\" title=\"struct spin::rwlock::RwLock\">RwLock</a>&lt;T, R&gt;</h3></section>","Send","spin::RwLock"],["<section id=\"impl-Sync-for-RwLock%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/rwlock.rs.html#112\">source</a><a href=\"#impl-Sync-for-RwLock%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"spin/rwlock/struct.RwLock.html\" title=\"struct spin::rwlock::RwLock\">RwLock</a>&lt;T, R&gt;</h3></section>","Sync","spin::RwLock"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()