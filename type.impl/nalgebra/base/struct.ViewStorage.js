(function() {var type_impls = {
"nalgebra":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ViewStorage%3C'a,+T,+R,+C,+RStride,+CStride%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#126-138\">source</a><a href=\"#impl-Clone-for-ViewStorage%3C'a,+T,+R,+C,+RStride,+CStride%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T: <a class=\"trait\" href=\"nalgebra/base/trait.Scalar.html\" title=\"trait nalgebra::base::Scalar\">Scalar</a>, R: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, C: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, RStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, CStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nalgebra/base/struct.ViewStorage.html\" title=\"struct nalgebra::base::ViewStorage\">ViewStorage</a>&lt;'a, T, R, C, RStride, CStride&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#130-137\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#175\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","nalgebra::base::matrix_view::SliceStorage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ViewStorage%3C'a,+T,+R,+C,+RStride,+CStride%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#112-114\">source</a><a href=\"#impl-Debug-for-ViewStorage%3C'a,+T,+R,+C,+RStride,+CStride%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, RStride: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, CStride: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nalgebra/base/struct.ViewStorage.html\" title=\"struct nalgebra::base::ViewStorage\">ViewStorage</a>&lt;'a, T, R, C, RStride, CStride&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#112-114\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","nalgebra::base::matrix_view::SliceStorage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RawStorage%3CT,+R,+C%3E-for-ViewStorage%3C'a,+T,+R,+C,+RStride,+CStride%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#228\">source</a><a href=\"#impl-RawStorage%3CT,+R,+C%3E-for-ViewStorage%3C'a,+T,+R,+C,+RStride,+CStride%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T, R: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, C: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, RStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, CStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"trait\" href=\"nalgebra/base/storage/trait.RawStorage.html\" title=\"trait nalgebra::base::storage::RawStorage\">RawStorage</a>&lt;T, R, C&gt; for <a class=\"struct\" href=\"nalgebra/base/struct.ViewStorage.html\" title=\"struct nalgebra::base::ViewStorage\">ViewStorage</a>&lt;'a, T, R, C, RStride, CStride&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.RStride\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.RStride\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"nalgebra/base/storage/trait.RawStorage.html#associatedtype.RStride\" class=\"associatedtype\">RStride</a> = RStride</h4></section></summary><div class='docblock'>The static stride of this storage’s rows.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.CStride\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.CStride\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"nalgebra/base/storage/trait.RawStorage.html#associatedtype.CStride\" class=\"associatedtype\">CStride</a> = CStride</h4></section></summary><div class='docblock'>The static stride of this storage’s columns.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ptr\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#228\">source</a><a href=\"#method.ptr\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nalgebra/base/storage/trait.RawStorage.html#tymethod.ptr\" class=\"fn\">ptr</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*const T</a></h4></section></summary><div class='docblock'>The matrix data pointer.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.shape\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#228\">source</a><a href=\"#method.shape\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nalgebra/base/storage/trait.RawStorage.html#tymethod.shape\" class=\"fn\">shape</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(R, C)</a></h4></section></summary><div class='docblock'>The dimension of the matrix at run-time. Arr length of zero indicates the additive identity\nelement of any dimension. Must be equal to <code>Self::dimension()</code> if it is not <code>None</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.strides\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#228\">source</a><a href=\"#method.strides\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nalgebra/base/storage/trait.RawStorage.html#tymethod.strides\" class=\"fn\">strides</a>(&amp;self) -&gt; (Self::<a class=\"associatedtype\" href=\"nalgebra/base/storage/trait.RawStorage.html#associatedtype.RStride\" title=\"type nalgebra::base::storage::RawStorage::RStride\">RStride</a>, Self::<a class=\"associatedtype\" href=\"nalgebra/base/storage/trait.RawStorage.html#associatedtype.CStride\" title=\"type nalgebra::base::storage::RawStorage::CStride\">CStride</a>)</h4></section></summary><div class='docblock'>The spacing between consecutive row elements and consecutive column elements. <a href=\"nalgebra/base/storage/trait.RawStorage.html#tymethod.strides\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_contiguous\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#228\">source</a><a href=\"#method.is_contiguous\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nalgebra/base/storage/trait.RawStorage.html#tymethod.is_contiguous\" class=\"fn\">is_contiguous</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Indicates whether this data buffer stores its elements contiguously. <a href=\"nalgebra/base/storage/trait.RawStorage.html#tymethod.is_contiguous\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_slice_unchecked\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#228\">source</a><a href=\"#method.as_slice_unchecked\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"nalgebra/base/storage/trait.RawStorage.html#tymethod.as_slice_unchecked\" class=\"fn\">as_slice_unchecked</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[T]</a></h4></section></summary><div class='docblock'>Retrieves the data buffer as a contiguous slice. <a href=\"nalgebra/base/storage/trait.RawStorage.html#tymethod.as_slice_unchecked\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.linear_index\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/storage.rs.html#71-75\">source</a><a href=\"#method.linear_index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nalgebra/base/storage/trait.RawStorage.html#method.linear_index\" class=\"fn\">linear_index</a>(&amp;self, irow: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, icol: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Compute the index corresponding to the irow-th row and icol-th column of this matrix. The\nindex must be such that the following holds: <a href=\"nalgebra/base/storage/trait.RawStorage.html#method.linear_index\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_address_unchecked_linear\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/storage.rs.html#82-84\">source</a><a href=\"#method.get_address_unchecked_linear\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nalgebra/base/storage/trait.RawStorage.html#method.get_address_unchecked_linear\" class=\"fn\">get_address_unchecked_linear</a>(&amp;self, i: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*const T</a></h4></section></summary><div class='docblock'>Gets the address of the i-th matrix component without performing bound-checking. <a href=\"nalgebra/base/storage/trait.RawStorage.html#method.get_address_unchecked_linear\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_address_unchecked\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/storage.rs.html#91-93\">source</a><a href=\"#method.get_address_unchecked\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nalgebra/base/storage/trait.RawStorage.html#method.get_address_unchecked\" class=\"fn\">get_address_unchecked</a>(&amp;self, irow: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, icol: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*const T</a></h4></section></summary><div class='docblock'>Gets the address of the i-th matrix component without performing bound-checking. <a href=\"nalgebra/base/storage/trait.RawStorage.html#method.get_address_unchecked\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_unchecked_linear\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/storage.rs.html#100-102\">source</a><a href=\"#method.get_unchecked_linear\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"nalgebra/base/storage/trait.RawStorage.html#method.get_unchecked_linear\" class=\"fn\">get_unchecked_linear</a>(&amp;self, i: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class='docblock'>Retrieves a reference to the i-th element without bound-checking. <a href=\"nalgebra/base/storage/trait.RawStorage.html#method.get_unchecked_linear\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_unchecked\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/storage.rs.html#109-111\">source</a><a href=\"#method.get_unchecked\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"nalgebra/base/storage/trait.RawStorage.html#method.get_unchecked\" class=\"fn\">get_unchecked</a>(&amp;self, irow: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, icol: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class='docblock'>Retrieves a reference to the i-th element without bound-checking. <a href=\"nalgebra/base/storage/trait.RawStorage.html#method.get_unchecked\">Read more</a></div></details></div></details>","RawStorage<T, R, C>","nalgebra::base::matrix_view::SliceStorage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ReshapableStorage%3CT,+R1,+C1,+R2,+C2%3E-for-ViewStorage%3C'a,+T,+R1,+C1,+Const%3C1%3E,+R1%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#1192-1211\">source</a><a href=\"#impl-ReshapableStorage%3CT,+R1,+C1,+R2,+C2%3E-for-ViewStorage%3C'a,+T,+R1,+C1,+Const%3C1%3E,+R1%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T, R1, C1, R2, C2&gt; <a class=\"trait\" href=\"nalgebra/base/storage/trait.ReshapableStorage.html\" title=\"trait nalgebra::base::storage::ReshapableStorage\">ReshapableStorage</a>&lt;T, R1, C1, R2, C2&gt; for <a class=\"struct\" href=\"nalgebra/base/struct.ViewStorage.html\" title=\"struct nalgebra::base::ViewStorage\">ViewStorage</a>&lt;'a, T, R1, C1, <a class=\"type\" href=\"nalgebra/base/dimension/type.U1.html\" title=\"type nalgebra::base::dimension::U1\">U1</a>, R1&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"nalgebra/base/trait.Scalar.html\" title=\"trait nalgebra::base::Scalar\">Scalar</a>,\n    R1: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,\n    C1: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,\n    R2: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,\n    C2: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"nalgebra/base/storage/trait.ReshapableStorage.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"struct\" href=\"nalgebra/base/struct.ViewStorage.html\" title=\"struct nalgebra::base::ViewStorage\">ViewStorage</a>&lt;'a, T, R2, C2, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Const.html\" title=\"struct nalgebra::base::dimension::Const\">Const</a>&lt;1&gt;, R2&gt;</h4></section></summary><div class='docblock'>The reshaped storage type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reshape_generic\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#1203-1210\">source</a><a href=\"#method.reshape_generic\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nalgebra/base/storage/trait.ReshapableStorage.html#tymethod.reshape_generic\" class=\"fn\">reshape_generic</a>(self, nrows: R2, ncols: C2) -&gt; Self::<a class=\"associatedtype\" href=\"nalgebra/base/storage/trait.ReshapableStorage.html#associatedtype.Output\" title=\"type nalgebra::base::storage::ReshapableStorage::Output\">Output</a></h4></section></summary><div class='docblock'>Reshapes the storage into the output storage type.</div></details></div></details>","ReshapableStorage<T, R1, C1, R2, C2>","nalgebra::base::matrix_view::SliceStorage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Storage%3CT,+R,+C%3E-for-ViewStorage%3C'a,+T,+R,+C,+RStride,+CStride%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#228\">source</a><a href=\"#impl-Storage%3CT,+R,+C%3E-for-ViewStorage%3C'a,+T,+R,+C,+RStride,+CStride%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T: <a class=\"trait\" href=\"nalgebra/base/trait.Scalar.html\" title=\"trait nalgebra::base::Scalar\">Scalar</a>, R: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, C: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, RStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, CStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"trait\" href=\"nalgebra/base/storage/trait.Storage.html\" title=\"trait nalgebra::base::storage::Storage\">Storage</a>&lt;T, R, C&gt; for <a class=\"struct\" href=\"nalgebra/base/struct.ViewStorage.html\" title=\"struct nalgebra::base::ViewStorage\">ViewStorage</a>&lt;'a, T, R, C, RStride, CStride&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_owned\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#228\">source</a><a href=\"#method.into_owned\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nalgebra/base/storage/trait.Storage.html#tymethod.into_owned\" class=\"fn\">into_owned</a>(self) -&gt; <a class=\"type\" href=\"nalgebra/base/storage/type.Owned.html\" title=\"type nalgebra::base::storage::Owned\">Owned</a>&lt;T, R, C&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"nalgebra/base/default_allocator/struct.DefaultAllocator.html\" title=\"struct nalgebra::base::default_allocator::DefaultAllocator\">DefaultAllocator</a>: <a class=\"trait\" href=\"nalgebra/base/allocator/trait.Allocator.html\" title=\"trait nalgebra::base::allocator::Allocator\">Allocator</a>&lt;T, R, C&gt;,</div></h4></section></summary><div class='docblock'>Builds a matrix data storage that does not contain any reference.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_owned\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#228\">source</a><a href=\"#method.clone_owned\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nalgebra/base/storage/trait.Storage.html#tymethod.clone_owned\" class=\"fn\">clone_owned</a>(&amp;self) -&gt; <a class=\"type\" href=\"nalgebra/base/storage/type.Owned.html\" title=\"type nalgebra::base::storage::Owned\">Owned</a>&lt;T, R, C&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"nalgebra/base/default_allocator/struct.DefaultAllocator.html\" title=\"struct nalgebra::base::default_allocator::DefaultAllocator\">DefaultAllocator</a>: <a class=\"trait\" href=\"nalgebra/base/allocator/trait.Allocator.html\" title=\"trait nalgebra::base::allocator::Allocator\">Allocator</a>&lt;T, R, C&gt;,</div></h4></section></summary><div class='docblock'>Clones this data storage to one that does not contain any reference.</div></details></div></details>","Storage<T, R, C>","nalgebra::base::matrix_view::SliceStorage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ViewStorage%3C'a,+T,+R,+C,+Dyn,+Dyn%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#112-114\">source</a><a href=\"#impl-ViewStorage%3C'a,+T,+R,+C,+Dyn,+Dyn%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T, R: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, C: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"struct\" href=\"nalgebra/base/struct.ViewStorage.html\" title=\"struct nalgebra::base::ViewStorage\">ViewStorage</a>&lt;'a, T, R, C, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_unchecked\" class=\"method\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#112-114\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"nalgebra/base/struct.ViewStorage.html#tymethod.new_unchecked\" class=\"fn\">new_unchecked</a>&lt;RStor, CStor, S&gt;(\n    storage: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a S</a>,\n    start: (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>),\n    shape: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(R, C)</a>,\n) -&gt; <a class=\"struct\" href=\"nalgebra/base/struct.ViewStorage.html\" title=\"struct nalgebra::base::ViewStorage\">ViewStorage</a>&lt;'a, T, R, C, S::<a class=\"associatedtype\" href=\"nalgebra/base/storage/trait.RawStorage.html#associatedtype.RStride\" title=\"type nalgebra::base::storage::RawStorage::RStride\">RStride</a>, S::<a class=\"associatedtype\" href=\"nalgebra/base/storage/trait.RawStorage.html#associatedtype.CStride\" title=\"type nalgebra::base::storage::RawStorage::CStride\">CStride</a>&gt;<div class=\"where\">where\n    RStor: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,\n    CStor: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,\n    S: <a class=\"trait\" href=\"nalgebra/base/storage/trait.RawStorage.html\" title=\"trait nalgebra::base::storage::RawStorage\">RawStorage</a>&lt;T, RStor, CStor&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Create a new matrix view without bounds checking.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_with_strides_unchecked\" class=\"method\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#112-114\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"nalgebra/base/struct.ViewStorage.html#tymethod.new_with_strides_unchecked\" class=\"fn\">new_with_strides_unchecked</a>&lt;S, RStor, CStor, RStride, CStride&gt;(\n    storage: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a S</a>,\n    start: (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>),\n    shape: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(R, C)</a>,\n    strides: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(RStride, CStride)</a>,\n) -&gt; <a class=\"struct\" href=\"nalgebra/base/struct.ViewStorage.html\" title=\"struct nalgebra::base::ViewStorage\">ViewStorage</a>&lt;'a, T, R, C, RStride, CStride&gt;<div class=\"where\">where\n    RStor: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,\n    CStor: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,\n    S: <a class=\"trait\" href=\"nalgebra/base/storage/trait.RawStorage.html\" title=\"trait nalgebra::base::storage::RawStorage\">RawStorage</a>&lt;T, RStor, CStor&gt;,\n    RStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,\n    CStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,</div></h4></section></summary><div class=\"docblock\"><p>Create a new matrix view without bounds checking.</p>\n</div></details></div></details>",0,"nalgebra::base::matrix_view::SliceStorage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ViewStorage%3C'a,+T,+R,+C,+RStride,+CStride%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#112-114\">source</a><a href=\"#impl-ViewStorage%3C'a,+T,+R,+C,+RStride,+CStride%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T, R: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, C: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, RStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, CStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"struct\" href=\"nalgebra/base/struct.ViewStorage.html\" title=\"struct nalgebra::base::ViewStorage\">ViewStorage</a>&lt;'a, T, R, C, RStride, CStride&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_raw_parts\" class=\"method\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#112-114\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"nalgebra/base/struct.ViewStorage.html#tymethod.from_raw_parts\" class=\"fn\">from_raw_parts</a>(\n    ptr: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*const T</a>,\n    shape: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(R, C)</a>,\n    strides: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(RStride, CStride)</a>,\n) -&gt; Self<div class=\"where\">where\n    RStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,\n    CStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>,</div></h4></section></summary><div class=\"docblock\"><p>Create a new matrix view without bounds checking and from a raw pointer.</p>\n</div></details></div></details>",0,"nalgebra::base::matrix_view::SliceStorage"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ViewStorage%3C'a,+T,+R,+C,+RStride,+CStride%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#112-114\">source</a><a href=\"#impl-ViewStorage%3C'a,+T,+R,+C,+RStride,+CStride%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T, R: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, C: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, RStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, CStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"struct\" href=\"nalgebra/base/struct.ViewStorage.html\" title=\"struct nalgebra::base::ViewStorage\">ViewStorage</a>&lt;'a, T, R, C, RStride, CStride&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"nalgebra/base/storage/trait.RawStorage.html\" title=\"trait nalgebra::base::storage::RawStorage\">RawStorage</a>&lt;T, R, C&gt; + <a class=\"trait\" href=\"nalgebra/base/storage/trait.IsContiguous.html\" title=\"trait nalgebra::base::storage::IsContiguous\">IsContiguous</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_slice\" class=\"method\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#112-114\">source</a><h4 class=\"code-header\">pub fn <a href=\"nalgebra/base/struct.ViewStorage.html#tymethod.into_slice\" class=\"fn\">into_slice</a>(self) -&gt; &amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[T]</a></h4></section></summary><div class=\"docblock\"><p>Extracts the original slice from this storage.</p>\n</div></details></div></details>",0,"nalgebra::base::matrix_view::SliceStorage"],["<section id=\"impl-Copy-for-ViewStorage%3C'a,+T,+R,+C,+RStride,+CStride%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#121-124\">source</a><a href=\"#impl-Copy-for-ViewStorage%3C'a,+T,+R,+C,+RStride,+CStride%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T: <a class=\"trait\" href=\"nalgebra/base/trait.Scalar.html\" title=\"trait nalgebra::base::Scalar\">Scalar</a>, R: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, C: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, RStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, CStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nalgebra/base/struct.ViewStorage.html\" title=\"struct nalgebra::base::ViewStorage\">ViewStorage</a>&lt;'a, T, R, C, RStride, CStride&gt;</h3></section>","Copy","nalgebra::base::matrix_view::SliceStorage"],["<section id=\"impl-IsContiguous-for-ViewStorage%3C'a,+T,+R,+C,+Const%3C1%3E,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#256-259\">source</a><a href=\"#impl-IsContiguous-for-ViewStorage%3C'a,+T,+R,+C,+Const%3C1%3E,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T, R: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.DimName.html\" title=\"trait nalgebra::base::dimension::DimName\">DimName</a>, C: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a> + <a class=\"trait\" href=\"nalgebra/base/dimension/trait.IsNotStaticOne.html\" title=\"trait nalgebra::base::dimension::IsNotStaticOne\">IsNotStaticOne</a>&gt; <a class=\"trait\" href=\"nalgebra/base/storage/trait.IsContiguous.html\" title=\"trait nalgebra::base::storage::IsContiguous\">IsContiguous</a> for <a class=\"struct\" href=\"nalgebra/base/struct.ViewStorage.html\" title=\"struct nalgebra::base::ViewStorage\">ViewStorage</a>&lt;'a, T, R, C, <a class=\"type\" href=\"nalgebra/base/dimension/type.U1.html\" title=\"type nalgebra::base::dimension::U1\">U1</a>, R&gt;</h3></section>","IsContiguous","nalgebra::base::matrix_view::SliceStorage"],["<section id=\"impl-IsContiguous-for-ViewStorage%3C'a,+T,+R,+Const%3C1%3E,+Const%3C1%3E,+CStride%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#250\">source</a><a href=\"#impl-IsContiguous-for-ViewStorage%3C'a,+T,+R,+Const%3C1%3E,+Const%3C1%3E,+CStride%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T, R: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, CStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"trait\" href=\"nalgebra/base/storage/trait.IsContiguous.html\" title=\"trait nalgebra::base::storage::IsContiguous\">IsContiguous</a> for <a class=\"struct\" href=\"nalgebra/base/struct.ViewStorage.html\" title=\"struct nalgebra::base::ViewStorage\">ViewStorage</a>&lt;'a, T, R, <a class=\"type\" href=\"nalgebra/base/dimension/type.U1.html\" title=\"type nalgebra::base::dimension::U1\">U1</a>, <a class=\"type\" href=\"nalgebra/base/dimension/type.U1.html\" title=\"type nalgebra::base::dimension::U1\">U1</a>, CStride&gt;</h3></section>","IsContiguous","nalgebra::base::matrix_view::SliceStorage"],["<section id=\"impl-Send-for-ViewStorage%3C'a,+T,+R,+C,+RStride,+CStride%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#112-114\">source</a><a href=\"#impl-Send-for-ViewStorage%3C'a,+T,+R,+C,+RStride,+CStride%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>, R: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, C: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, RStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, CStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"nalgebra/base/struct.ViewStorage.html\" title=\"struct nalgebra::base::ViewStorage\">ViewStorage</a>&lt;'a, T, R, C, RStride, CStride&gt;</h3></section>","Send","nalgebra::base::matrix_view::SliceStorage"],["<section id=\"impl-Sync-for-ViewStorage%3C'a,+T,+R,+C,+RStride,+CStride%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/matrix_view.rs.html#112-114\">source</a><a href=\"#impl-Sync-for-ViewStorage%3C'a,+T,+R,+C,+RStride,+CStride%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>, R: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, C: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, RStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, CStride: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"nalgebra/base/struct.ViewStorage.html\" title=\"struct nalgebra::base::ViewStorage\">ViewStorage</a>&lt;'a, T, R, C, RStride, CStride&gt;</h3></section>","Sync","nalgebra::base::matrix_view::SliceStorage"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()