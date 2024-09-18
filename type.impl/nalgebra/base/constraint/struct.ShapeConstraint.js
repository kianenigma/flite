(function() {
    var type_impls = Object.fromEntries([["nalgebra",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ShapeConstraint\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#6\">source</a><a href=\"#impl-Clone-for-ShapeConstraint\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#6\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","nalgebra::base::allocator::SameShapeR","nalgebra::base::allocator::SameShapeC"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ShapeConstraint\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#6\">source</a><a href=\"#impl-Debug-for-ShapeConstraint\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#6\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","nalgebra::base::allocator::SameShapeR","nalgebra::base::allocator::SameShapeC"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DimEq%3CD,+D%3E-for-ShapeConstraint\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#24-26\">source</a><a href=\"#impl-DimEq%3CD,+D%3E-for-ShapeConstraint\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"trait\" href=\"nalgebra/base/constraint/trait.DimEq.html\" title=\"trait nalgebra::base::constraint::DimEq\">DimEq</a>&lt;D, D&gt; for <a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Representative\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#25\">source</a><a href=\"#associatedtype.Representative\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"nalgebra/base/constraint/trait.DimEq.html#associatedtype.Representative\" class=\"associatedtype\">Representative</a> = D</h4></section></summary><div class='docblock'>This is either equal to <code>D1</code> or <code>D2</code>, always choosing the one (if any) which is a type-level\nconstant.</div></details></div></details>","DimEq<D, D>","nalgebra::base::allocator::SameShapeR","nalgebra::base::allocator::SameShapeC"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DimEq%3CD,+Dyn%3E-for-ShapeConstraint\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#28-30\">source</a><a href=\"#impl-DimEq%3CD,+Dyn%3E-for-ShapeConstraint\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.DimName.html\" title=\"trait nalgebra::base::dimension::DimName\">DimName</a>&gt; <a class=\"trait\" href=\"nalgebra/base/constraint/trait.DimEq.html\" title=\"trait nalgebra::base::constraint::DimEq\">DimEq</a>&lt;D, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>&gt; for <a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Representative\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#29\">source</a><a href=\"#associatedtype.Representative\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"nalgebra/base/constraint/trait.DimEq.html#associatedtype.Representative\" class=\"associatedtype\">Representative</a> = D</h4></section></summary><div class='docblock'>This is either equal to <code>D1</code> or <code>D2</code>, always choosing the one (if any) which is a type-level\nconstant.</div></details></div></details>","DimEq<D, Dyn>","nalgebra::base::allocator::SameShapeR","nalgebra::base::allocator::SameShapeC"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DimEq%3CDyn,+D%3E-for-ShapeConstraint\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#32-34\">source</a><a href=\"#impl-DimEq%3CDyn,+D%3E-for-ShapeConstraint\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.DimName.html\" title=\"trait nalgebra::base::dimension::DimName\">DimName</a>&gt; <a class=\"trait\" href=\"nalgebra/base/constraint/trait.DimEq.html\" title=\"trait nalgebra::base::constraint::DimEq\">DimEq</a>&lt;<a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>, D&gt; for <a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Representative\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#33\">source</a><a href=\"#associatedtype.Representative\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"nalgebra/base/constraint/trait.DimEq.html#associatedtype.Representative\" class=\"associatedtype\">Representative</a> = D</h4></section></summary><div class='docblock'>This is either equal to <code>D1</code> or <code>D2</code>, always choosing the one (if any) which is a type-level\nconstant.</div></details></div></details>","DimEq<Dyn, D>","nalgebra::base::allocator::SameShapeR","nalgebra::base::allocator::SameShapeC"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SameDimension%3CD,+D%3E-for-ShapeConstraint\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#81-83\">source</a><a href=\"#impl-SameDimension%3CD,+D%3E-for-ShapeConstraint\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"trait\" href=\"nalgebra/base/constraint/trait.SameDimension.html\" title=\"trait nalgebra::base::constraint::SameDimension\">SameDimension</a>&lt;D, D&gt; for <a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Representative\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#82\">source</a><a href=\"#associatedtype.Representative\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"nalgebra/base/constraint/trait.SameDimension.html#associatedtype.Representative\" class=\"associatedtype\">Representative</a> = D</h4></section></summary><div class='docblock'>This is either equal to <code>D1</code> or <code>D2</code>, always choosing the one (if any) which is a type-level\nconstant.</div></details></div></details>","SameDimension<D, D>","nalgebra::base::allocator::SameShapeR","nalgebra::base::allocator::SameShapeC"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SameDimension%3CD,+Dyn%3E-for-ShapeConstraint\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#85-87\">source</a><a href=\"#impl-SameDimension%3CD,+Dyn%3E-for-ShapeConstraint\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.DimName.html\" title=\"trait nalgebra::base::dimension::DimName\">DimName</a>&gt; <a class=\"trait\" href=\"nalgebra/base/constraint/trait.SameDimension.html\" title=\"trait nalgebra::base::constraint::SameDimension\">SameDimension</a>&lt;D, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>&gt; for <a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Representative\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#86\">source</a><a href=\"#associatedtype.Representative\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"nalgebra/base/constraint/trait.SameDimension.html#associatedtype.Representative\" class=\"associatedtype\">Representative</a> = D</h4></section></summary><div class='docblock'>This is either equal to <code>D1</code> or <code>D2</code>, always choosing the one (if any) which is a type-level\nconstant.</div></details></div></details>","SameDimension<D, Dyn>","nalgebra::base::allocator::SameShapeR","nalgebra::base::allocator::SameShapeC"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SameDimension%3CDyn,+D%3E-for-ShapeConstraint\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#89-91\">source</a><a href=\"#impl-SameDimension%3CDyn,+D%3E-for-ShapeConstraint\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.DimName.html\" title=\"trait nalgebra::base::dimension::DimName\">DimName</a>&gt; <a class=\"trait\" href=\"nalgebra/base/constraint/trait.SameDimension.html\" title=\"trait nalgebra::base::constraint::SameDimension\">SameDimension</a>&lt;<a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>, D&gt; for <a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Representative\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#90\">source</a><a href=\"#associatedtype.Representative\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"nalgebra/base/constraint/trait.SameDimension.html#associatedtype.Representative\" class=\"associatedtype\">Representative</a> = D</h4></section></summary><div class='docblock'>This is either equal to <code>D1</code> or <code>D2</code>, always choosing the one (if any) which is a type-level\nconstant.</div></details></div></details>","SameDimension<Dyn, D>","nalgebra::base::allocator::SameShapeR","nalgebra::base::allocator::SameShapeC"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SameNumberOfColumns%3CD,+D%3E-for-ShapeConstraint\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#60-69\">source</a><a href=\"#impl-SameNumberOfColumns%3CD,+D%3E-for-ShapeConstraint\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"trait\" href=\"nalgebra/base/constraint/trait.SameNumberOfColumns.html\" title=\"trait nalgebra::base::constraint::SameNumberOfColumns\">SameNumberOfColumns</a>&lt;D, D&gt; for <a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Representative\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#60-69\">source</a><a href=\"#associatedtype.Representative\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"nalgebra/base/constraint/trait.SameNumberOfColumns.html#associatedtype.Representative\" class=\"associatedtype\">Representative</a> = D</h4></section></summary><div class='docblock'>This is either equal to <code>D1</code> or <code>D2</code>, always choosing the one (if any) which is a type-level\nconstant.</div></details></div></details>","SameNumberOfColumns<D, D>","nalgebra::base::allocator::SameShapeR","nalgebra::base::allocator::SameShapeC"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SameNumberOfColumns%3CD,+Dyn%3E-for-ShapeConstraint\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#60-69\">source</a><a href=\"#impl-SameNumberOfColumns%3CD,+Dyn%3E-for-ShapeConstraint\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.DimName.html\" title=\"trait nalgebra::base::dimension::DimName\">DimName</a>&gt; <a class=\"trait\" href=\"nalgebra/base/constraint/trait.SameNumberOfColumns.html\" title=\"trait nalgebra::base::constraint::SameNumberOfColumns\">SameNumberOfColumns</a>&lt;D, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>&gt; for <a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Representative\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#60-69\">source</a><a href=\"#associatedtype.Representative\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"nalgebra/base/constraint/trait.SameNumberOfColumns.html#associatedtype.Representative\" class=\"associatedtype\">Representative</a> = D</h4></section></summary><div class='docblock'>This is either equal to <code>D1</code> or <code>D2</code>, always choosing the one (if any) which is a type-level\nconstant.</div></details></div></details>","SameNumberOfColumns<D, Dyn>","nalgebra::base::allocator::SameShapeR","nalgebra::base::allocator::SameShapeC"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SameNumberOfColumns%3CDyn,+D%3E-for-ShapeConstraint\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#60-69\">source</a><a href=\"#impl-SameNumberOfColumns%3CDyn,+D%3E-for-ShapeConstraint\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.DimName.html\" title=\"trait nalgebra::base::dimension::DimName\">DimName</a>&gt; <a class=\"trait\" href=\"nalgebra/base/constraint/trait.SameNumberOfColumns.html\" title=\"trait nalgebra::base::constraint::SameNumberOfColumns\">SameNumberOfColumns</a>&lt;<a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>, D&gt; for <a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Representative\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#60-69\">source</a><a href=\"#associatedtype.Representative\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"nalgebra/base/constraint/trait.SameNumberOfColumns.html#associatedtype.Representative\" class=\"associatedtype\">Representative</a> = D</h4></section></summary><div class='docblock'>This is either equal to <code>D1</code> or <code>D2</code>, always choosing the one (if any) which is a type-level\nconstant.</div></details></div></details>","SameNumberOfColumns<Dyn, D>","nalgebra::base::allocator::SameShapeR","nalgebra::base::allocator::SameShapeC"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SameNumberOfRows%3CD,+D%3E-for-ShapeConstraint\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#60-69\">source</a><a href=\"#impl-SameNumberOfRows%3CD,+D%3E-for-ShapeConstraint\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"trait\" href=\"nalgebra/base/constraint/trait.SameNumberOfRows.html\" title=\"trait nalgebra::base::constraint::SameNumberOfRows\">SameNumberOfRows</a>&lt;D, D&gt; for <a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Representative\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#60-69\">source</a><a href=\"#associatedtype.Representative\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"nalgebra/base/constraint/trait.SameNumberOfRows.html#associatedtype.Representative\" class=\"associatedtype\">Representative</a> = D</h4></section></summary><div class='docblock'>This is either equal to <code>D1</code> or <code>D2</code>, always choosing the one (if any) which is a type-level\nconstant.</div></details></div></details>","SameNumberOfRows<D, D>","nalgebra::base::allocator::SameShapeR","nalgebra::base::allocator::SameShapeC"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SameNumberOfRows%3CD,+Dyn%3E-for-ShapeConstraint\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#60-69\">source</a><a href=\"#impl-SameNumberOfRows%3CD,+Dyn%3E-for-ShapeConstraint\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.DimName.html\" title=\"trait nalgebra::base::dimension::DimName\">DimName</a>&gt; <a class=\"trait\" href=\"nalgebra/base/constraint/trait.SameNumberOfRows.html\" title=\"trait nalgebra::base::constraint::SameNumberOfRows\">SameNumberOfRows</a>&lt;D, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>&gt; for <a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Representative\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#60-69\">source</a><a href=\"#associatedtype.Representative\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"nalgebra/base/constraint/trait.SameNumberOfRows.html#associatedtype.Representative\" class=\"associatedtype\">Representative</a> = D</h4></section></summary><div class='docblock'>This is either equal to <code>D1</code> or <code>D2</code>, always choosing the one (if any) which is a type-level\nconstant.</div></details></div></details>","SameNumberOfRows<D, Dyn>","nalgebra::base::allocator::SameShapeR","nalgebra::base::allocator::SameShapeC"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SameNumberOfRows%3CDyn,+D%3E-for-ShapeConstraint\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#60-69\">source</a><a href=\"#impl-SameNumberOfRows%3CDyn,+D%3E-for-ShapeConstraint\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.DimName.html\" title=\"trait nalgebra::base::dimension::DimName\">DimName</a>&gt; <a class=\"trait\" href=\"nalgebra/base/constraint/trait.SameNumberOfRows.html\" title=\"trait nalgebra::base::constraint::SameNumberOfRows\">SameNumberOfRows</a>&lt;<a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>, D&gt; for <a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Representative\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#60-69\">source</a><a href=\"#associatedtype.Representative\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"nalgebra/base/constraint/trait.SameNumberOfRows.html#associatedtype.Representative\" class=\"associatedtype\">Representative</a> = D</h4></section></summary><div class='docblock'>This is either equal to <code>D1</code> or <code>D2</code>, always choosing the one (if any) which is a type-level\nconstant.</div></details></div></details>","SameNumberOfRows<Dyn, D>","nalgebra::base::allocator::SameShapeR","nalgebra::base::allocator::SameShapeC"],["<section id=\"impl-AreMultipliable%3CR1,+C1,+R2,+C2%3E-for-ShapeConstraint\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#12-15\">source</a><a href=\"#impl-AreMultipliable%3CR1,+C1,+R2,+C2%3E-for-ShapeConstraint\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R1: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, C1: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, R2: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, C2: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"trait\" href=\"nalgebra/base/constraint/trait.AreMultipliable.html\" title=\"trait nalgebra::base::constraint::AreMultipliable\">AreMultipliable</a>&lt;R1, C1, R2, C2&gt; for <a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a><div class=\"where\">where\n    <a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a>: <a class=\"trait\" href=\"nalgebra/base/constraint/trait.DimEq.html\" title=\"trait nalgebra::base::constraint::DimEq\">DimEq</a>&lt;C1, R2&gt;,</div></h3></section>","AreMultipliable<R1, C1, R2, C2>","nalgebra::base::allocator::SameShapeR","nalgebra::base::allocator::SameShapeC"],["<section id=\"impl-Copy-for-ShapeConstraint\" class=\"impl\"><a class=\"src rightside\" href=\"src/nalgebra/base/constraint.rs.html#6\">source</a><a href=\"#impl-Copy-for-ShapeConstraint\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"nalgebra/base/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::base::constraint::ShapeConstraint\">ShapeConstraint</a></h3></section>","Copy","nalgebra::base::allocator::SameShapeR","nalgebra::base::allocator::SameShapeC"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[26828]}