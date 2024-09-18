(function() {
    var type_impls = Object.fromEntries([["object",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ElfSegment%3C'data,+'file,+Elf,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/elf/segment.rs.html#59\">source</a><a href=\"#impl-Debug-for-ElfSegment%3C'data,+'file,+Elf,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, Elf, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"object/read/elf/struct.ElfSegment.html\" title=\"struct object::read::elf::ElfSegment\">ElfSegment</a>&lt;'data, 'file, Elf, R&gt;<div class=\"where\">where\n    Elf: <a class=\"trait\" href=\"object/read/elf/trait.FileHeader.html\" title=\"trait object::read::elf::FileHeader\">FileHeader</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    R: <a class=\"trait\" href=\"object/read/trait.ReadRef.html\" title=\"trait object::read::ReadRef\">ReadRef</a>&lt;'data&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    Elf::<a class=\"associatedtype\" href=\"object/read/elf/trait.FileHeader.html#associatedtype.ProgramHeader\" title=\"type object::read::elf::FileHeader::ProgramHeader\">ProgramHeader</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/elf/segment.rs.html#59\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","object::read::elf::segment::ElfSegment32","object::read::elf::segment::ElfSegment64"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ElfSegment%3C'data,+'file,+Elf,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/elf/segment.rs.html#69-85\">source</a><a href=\"#impl-ElfSegment%3C'data,+'file,+Elf,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, Elf: <a class=\"trait\" href=\"object/read/elf/trait.FileHeader.html\" title=\"trait object::read::elf::FileHeader\">FileHeader</a>, R: <a class=\"trait\" href=\"object/read/trait.ReadRef.html\" title=\"trait object::read::ReadRef\">ReadRef</a>&lt;'data&gt;&gt; <a class=\"struct\" href=\"object/read/elf/struct.ElfSegment.html\" title=\"struct object::read::elf::ElfSegment\">ElfSegment</a>&lt;'data, 'file, Elf, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.elf_file\" class=\"method\"><a class=\"src rightside\" href=\"src/object/read/elf/segment.rs.html#71-73\">source</a><h4 class=\"code-header\">pub fn <a href=\"object/read/elf/struct.ElfSegment.html#tymethod.elf_file\" class=\"fn\">elf_file</a>(&amp;self) -&gt; &amp;'file <a class=\"struct\" href=\"object/read/elf/struct.ElfFile.html\" title=\"struct object::read::elf::ElfFile\">ElfFile</a>&lt;'data, Elf, R&gt;</h4></section></summary><div class=\"docblock\"><p>Get the ELF file containing this segment.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.elf_program_header\" class=\"method\"><a class=\"src rightside\" href=\"src/object/read/elf/segment.rs.html#76-78\">source</a><h4 class=\"code-header\">pub fn <a href=\"object/read/elf/struct.ElfSegment.html#tymethod.elf_program_header\" class=\"fn\">elf_program_header</a>(&amp;self) -&gt; &amp;'data Elf::<a class=\"associatedtype\" href=\"object/read/elf/trait.FileHeader.html#associatedtype.ProgramHeader\" title=\"type object::read::elf::FileHeader::ProgramHeader\">ProgramHeader</a></h4></section></summary><div class=\"docblock\"><p>Get the raw ELF program header for the segment.</p>\n</div></details></div></details>",0,"object::read::elf::segment::ElfSegment32","object::read::elf::segment::ElfSegment64"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ObjectSegment%3C'data%3E-for-ElfSegment%3C'data,+'file,+Elf,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/elf/segment.rs.html#94-148\">source</a><a href=\"#impl-ObjectSegment%3C'data%3E-for-ElfSegment%3C'data,+'file,+Elf,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, Elf, R&gt; <a class=\"trait\" href=\"object/read/trait.ObjectSegment.html\" title=\"trait object::read::ObjectSegment\">ObjectSegment</a>&lt;'data&gt; for <a class=\"struct\" href=\"object/read/elf/struct.ElfSegment.html\" title=\"struct object::read::elf::ElfSegment\">ElfSegment</a>&lt;'data, 'file, Elf, R&gt;<div class=\"where\">where\n    Elf: <a class=\"trait\" href=\"object/read/elf/trait.FileHeader.html\" title=\"trait object::read::elf::FileHeader\">FileHeader</a>,\n    R: <a class=\"trait\" href=\"object/read/trait.ReadRef.html\" title=\"trait object::read::ReadRef\">ReadRef</a>&lt;'data&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.address\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/elf/segment.rs.html#100-102\">source</a><a href=\"#method.address\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.ObjectSegment.html#tymethod.address\" class=\"fn\">address</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Returns the virtual address of the segment.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/elf/segment.rs.html#105-107\">source</a><a href=\"#method.size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.ObjectSegment.html#tymethod.size\" class=\"fn\">size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Returns the size of the segment in memory.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.align\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/elf/segment.rs.html#110-112\">source</a><a href=\"#method.align\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.ObjectSegment.html#tymethod.align\" class=\"fn\">align</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Returns the alignment of the segment in memory.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.file_range\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/elf/segment.rs.html#115-117\">source</a><a href=\"#method.file_range\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.ObjectSegment.html#tymethod.file_range\" class=\"fn\">file_range</a>(&amp;self) -&gt; (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>)</h4></section></summary><div class='docblock'>Returns the offset and size of the segment in the file.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/elf/segment.rs.html#120-122\">source</a><a href=\"#method.data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.ObjectSegment.html#tymethod.data\" class=\"fn\">data</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;&amp;'data [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;</h4></section></summary><div class='docblock'>Returns a reference to the file contents of the segment. <a href=\"object/read/trait.ObjectSegment.html#tymethod.data\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data_range\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/elf/segment.rs.html#124-131\">source</a><a href=\"#method.data_range\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.ObjectSegment.html#tymethod.data_range\" class=\"fn\">data_range</a>(&amp;self, address: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>, size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'data [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;&gt;</h4></section></summary><div class='docblock'>Return the segment data in the given range. <a href=\"object/read/trait.ObjectSegment.html#tymethod.data_range\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.name_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/elf/segment.rs.html#134-136\">source</a><a href=\"#method.name_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.ObjectSegment.html#tymethod.name_bytes\" class=\"fn\">name_bytes</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;&gt;</h4></section></summary><div class='docblock'>Returns the name of the segment.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.name\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/elf/segment.rs.html#139-141\">source</a><a href=\"#method.name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.ObjectSegment.html#tymethod.name\" class=\"fn\">name</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt;</h4></section></summary><div class='docblock'>Returns the name of the segment. <a href=\"object/read/trait.ObjectSegment.html#tymethod.name\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.flags\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/elf/segment.rs.html#144-147\">source</a><a href=\"#method.flags\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.ObjectSegment.html#tymethod.flags\" class=\"fn\">flags</a>(&amp;self) -&gt; <a class=\"enum\" href=\"object/read/enum.SegmentFlags.html\" title=\"enum object::read::SegmentFlags\">SegmentFlags</a></h4></section></summary><div class='docblock'>Return the flags of segment.</div></details></div></details>","ObjectSegment<'data>","object::read::elf::segment::ElfSegment32","object::read::elf::segment::ElfSegment64"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[12836]}