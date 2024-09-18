(function() {
    var type_impls = Object.fromEntries([["gimli",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-LineRow\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#631\">source</a><a href=\"#impl-Clone-for-LineRow\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"gimli/read/struct.LineRow.html\" title=\"struct gimli::read::LineRow\">LineRow</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#631\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"gimli/read/struct.LineRow.html\" title=\"struct gimli::read::LineRow\">LineRow</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","gimli::read::line::LineNumberRow"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-LineRow\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#631\">source</a><a href=\"#impl-Debug-for-LineRow\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"gimli/read/struct.LineRow.html\" title=\"struct gimli::read::LineRow\">LineRow</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#631\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","gimli::read::line::LineNumberRow"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LineRow\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#648-984\">source</a><a href=\"#impl-LineRow\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"gimli/read/struct.LineRow.html\" title=\"struct gimli::read::LineRow\">LineRow</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#650-673\">source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/struct.LineRow.html#tymethod.new\" class=\"fn\">new</a>&lt;R: <a class=\"trait\" href=\"gimli/read/trait.Reader.html\" title=\"trait gimli::read::Reader\">Reader</a>&gt;(header: &amp;<a class=\"struct\" href=\"gimli/read/struct.LineProgramHeader.html\" title=\"struct gimli::read::LineProgramHeader\">LineProgramHeader</a>&lt;R&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a line number row in the initial state for the given program.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.address\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#678-680\">source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/struct.LineRow.html#tymethod.address\" class=\"fn\">address</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><p>“The program-counter value corresponding to a machine instruction\ngenerated by the compiler.”</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.op_index\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#690-692\">source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/struct.LineRow.html#tymethod.op_index\" class=\"fn\">op_index</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><blockquote>\n<p>An unsigned integer representing the index of an operation within a VLIW\ninstruction. The index of the first operation is 0. For non-VLIW\narchitectures, this register will always be 0.</p>\n<p>The address and op_index registers, taken together, form an operation\npointer that can reference any individual operation with the\ninstruction stream.</p>\n</blockquote>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.file_index\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#697-699\">source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/struct.LineRow.html#tymethod.file_index\" class=\"fn\">file_index</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><p>“An unsigned integer indicating the identity of the source file\ncorresponding to a machine instruction.”</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.file\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#703-708\">source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/struct.LineRow.html#tymethod.file\" class=\"fn\">file</a>&lt;'header, R: <a class=\"trait\" href=\"gimli/read/trait.Reader.html\" title=\"trait gimli::read::Reader\">Reader</a>&gt;(\n    &amp;self,\n    header: &amp;'header <a class=\"struct\" href=\"gimli/read/struct.LineProgramHeader.html\" title=\"struct gimli::read::LineProgramHeader\">LineProgramHeader</a>&lt;R&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'header <a class=\"struct\" href=\"gimli/read/struct.FileEntry.html\" title=\"struct gimli::read::FileEntry\">FileEntry</a>&lt;R&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>The source file corresponding to the current machine instruction.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.line\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#715-717\">source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/struct.LineRow.html#tymethod.line\" class=\"fn\">line</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/num/nonzero/type.NonZeroU64.html\" title=\"type core::num::nonzero::NonZeroU64\">NonZeroU64</a>&gt;</h4></section></summary><div class=\"docblock\"><p>“An unsigned integer indicating a source line number. Lines are numbered\nbeginning at 1. The compiler may emit the value 0 in cases where an\ninstruction cannot be attributed to any source line.”\nLine number values of 0 are represented as <code>None</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.column\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#723-727\">source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/struct.LineRow.html#tymethod.column\" class=\"fn\">column</a>(&amp;self) -&gt; <a class=\"enum\" href=\"gimli/read/enum.ColumnType.html\" title=\"enum gimli::read::ColumnType\">ColumnType</a></h4></section></summary><div class=\"docblock\"><p>“An unsigned integer indicating a column number within a source\nline. Columns are numbered beginning at 1. The value 0 is reserved to\nindicate that a statement begins at the “left edge” of the line.”</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_stmt\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#734-736\">source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/struct.LineRow.html#tymethod.is_stmt\" class=\"fn\">is_stmt</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>“A boolean indicating that the current instruction is a recommended\nbreakpoint location. A recommended breakpoint location is intended to\n“represent” a line, a statement and/or a semantically distinct subpart\nof a statement.”</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.basic_block\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#741-743\">source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/struct.LineRow.html#tymethod.basic_block\" class=\"fn\">basic_block</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>“A boolean indicating that the current instruction is the beginning of a\nbasic block.”</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.end_sequence\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#750-752\">source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/struct.LineRow.html#tymethod.end_sequence\" class=\"fn\">end_sequence</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>“A boolean indicating that the current address is that of the first byte\nafter the end of a sequence of target machine instructions. end_sequence\nterminates a sequence of lines; therefore other information in the same\nrow is not meaningful.”</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.prologue_end\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#758-760\">source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/struct.LineRow.html#tymethod.prologue_end\" class=\"fn\">prologue_end</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>“A boolean indicating that the current address is one (of possibly many)\nwhere execution should be suspended for an entry breakpoint of a\nfunction.”</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.epilogue_begin\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#766-768\">source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/struct.LineRow.html#tymethod.epilogue_begin\" class=\"fn\">epilogue_begin</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>“A boolean indicating that the current address is one (of possibly many)\nwhere execution should be suspended for an exit breakpoint of a\nfunction.”</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.isa\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#779-781\">source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/struct.LineRow.html#tymethod.isa\" class=\"fn\">isa</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><p>Tag for the current instruction set architecture.</p>\n<blockquote>\n<p>An unsigned integer whose value encodes the applicable instruction set\narchitecture for the current instruction.</p>\n<p>The encoding of instruction sets should be shared by all users of a\ngiven architecture. It is recommended that this encoding be defined by\nthe ABI authoring committee for each architecture.</p>\n</blockquote>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.discriminator\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#790-792\">source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/struct.LineRow.html#tymethod.discriminator\" class=\"fn\">discriminator</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><p>“An unsigned integer identifying the block to which the current\ninstruction belongs. Discriminator values are assigned arbitrarily by\nthe DWARF producer and serve to distinguish among multiple blocks that\nmay all be associated with the same source file, line, and column. Where\nonly one block exists for a given source position, the discriminator\nvalue should be zero.”</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.execute\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#799-903\">source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/struct.LineRow.html#tymethod.execute\" class=\"fn\">execute</a>&lt;R, Program&gt;(\n    &amp;mut self,\n    instruction: <a class=\"enum\" href=\"gimli/read/enum.LineInstruction.html\" title=\"enum gimli::read::LineInstruction\">LineInstruction</a>&lt;R&gt;,\n    program: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;mut Program</a>,\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a><div class=\"where\">where\n    Program: <a class=\"trait\" href=\"gimli/read/trait.LineProgram.html\" title=\"trait gimli::read::LineProgram\">LineProgram</a>&lt;R&gt;,\n    R: <a class=\"trait\" href=\"gimli/read/trait.Reader.html\" title=\"trait gimli::read::Reader\">Reader</a>,</div></h4></section></summary><div class=\"docblock\"><p>Execute the given instruction, and return true if a new row in the\nline number matrix needs to be generated.</p>\n<p>Unknown opcodes are treated as no-ops.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reset\" class=\"method\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#907-922\">source</a><h4 class=\"code-header\">pub fn <a href=\"gimli/read/struct.LineRow.html#tymethod.reset\" class=\"fn\">reset</a>&lt;R: <a class=\"trait\" href=\"gimli/read/trait.Reader.html\" title=\"trait gimli::read::Reader\">Reader</a>&gt;(&amp;mut self, header: &amp;<a class=\"struct\" href=\"gimli/read/struct.LineProgramHeader.html\" title=\"struct gimli::read::LineProgramHeader\">LineProgramHeader</a>&lt;R&gt;)</h4></section></summary><div class=\"docblock\"><p>Perform any reset that was required after copying the previous row.</p>\n</div></details></div></details>",0,"gimli::read::line::LineNumberRow"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-LineRow\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#631\">source</a><a href=\"#impl-PartialEq-for-LineRow\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"gimli/read/struct.LineRow.html\" title=\"struct gimli::read::LineRow\">LineRow</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#631\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"gimli/read/struct.LineRow.html\" title=\"struct gimli::read::LineRow\">LineRow</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","gimli::read::line::LineNumberRow"],["<section id=\"impl-Copy-for-LineRow\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#631\">source</a><a href=\"#impl-Copy-for-LineRow\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"gimli/read/struct.LineRow.html\" title=\"struct gimli::read::LineRow\">LineRow</a></h3></section>","Copy","gimli::read::line::LineNumberRow"],["<section id=\"impl-Eq-for-LineRow\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#631\">source</a><a href=\"#impl-Eq-for-LineRow\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"gimli/read/struct.LineRow.html\" title=\"struct gimli::read::LineRow\">LineRow</a></h3></section>","Eq","gimli::read::line::LineNumberRow"],["<section id=\"impl-StructuralPartialEq-for-LineRow\" class=\"impl\"><a class=\"src rightside\" href=\"src/gimli/read/line.rs.html#631\">source</a><a href=\"#impl-StructuralPartialEq-for-LineRow\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"gimli/read/struct.LineRow.html\" title=\"struct gimli::read::LineRow\">LineRow</a></h3></section>","StructuralPartialEq","gimli::read::line::LineNumberRow"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[20815]}