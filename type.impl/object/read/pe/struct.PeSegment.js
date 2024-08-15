(function() {var type_impls = {
"object":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-PeSegment%3C'data,+'file,+Pe,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/pe/section.rs.html#57\">source</a><a href=\"#impl-Debug-for-PeSegment%3C'data,+'file,+Pe,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, Pe, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"object/read/pe/struct.PeSegment.html\" title=\"struct object::read::pe::PeSegment\">PeSegment</a>&lt;'data, 'file, Pe, R&gt;<div class=\"where\">where\n    Pe: <a class=\"trait\" href=\"object/read/pe/trait.ImageNtHeaders.html\" title=\"trait object::read::pe::ImageNtHeaders\">ImageNtHeaders</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    R: <a class=\"trait\" href=\"object/read/trait.ReadRef.html\" title=\"trait object::read::ReadRef\">ReadRef</a>&lt;'data&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/pe/section.rs.html#57\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","object::read::pe::section::PeSegment32","object::read::pe::section::PeSegment64"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ObjectSegment%3C'data%3E-for-PeSegment%3C'data,+'file,+Pe,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/pe/section.rs.html#90-151\">source</a><a href=\"#impl-ObjectSegment%3C'data%3E-for-PeSegment%3C'data,+'file,+Pe,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, Pe, R&gt; <a class=\"trait\" href=\"object/read/trait.ObjectSegment.html\" title=\"trait object::read::ObjectSegment\">ObjectSegment</a>&lt;'data&gt; for <a class=\"struct\" href=\"object/read/pe/struct.PeSegment.html\" title=\"struct object::read::pe::PeSegment\">PeSegment</a>&lt;'data, 'file, Pe, R&gt;<div class=\"where\">where\n    Pe: <a class=\"trait\" href=\"object/read/pe/trait.ImageNtHeaders.html\" title=\"trait object::read::pe::ImageNtHeaders\">ImageNtHeaders</a>,\n    R: <a class=\"trait\" href=\"object/read/trait.ReadRef.html\" title=\"trait object::read::ReadRef\">ReadRef</a>&lt;'data&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.address\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/pe/section.rs.html#96-98\">source</a><a href=\"#method.address\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.ObjectSegment.html#tymethod.address\" class=\"fn\">address</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Returns the virtual address of the segment.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/pe/section.rs.html#101-103\">source</a><a href=\"#method.size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.ObjectSegment.html#tymethod.size\" class=\"fn\">size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Returns the size of the segment in memory.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.align\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/pe/section.rs.html#106-108\">source</a><a href=\"#method.align\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.ObjectSegment.html#tymethod.align\" class=\"fn\">align</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Returns the alignment of the segment in memory.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.file_range\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/pe/section.rs.html#111-114\">source</a><a href=\"#method.file_range\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.ObjectSegment.html#tymethod.file_range\" class=\"fn\">file_range</a>(&amp;self) -&gt; (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>)</h4></section></summary><div class='docblock'>Returns the offset and size of the segment in the file.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/pe/section.rs.html#116-118\">source</a><a href=\"#method.data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.ObjectSegment.html#tymethod.data\" class=\"fn\">data</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;&amp;'data [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;</h4></section></summary><div class='docblock'>Returns a reference to the file contents of the segment. <a href=\"object/read/trait.ObjectSegment.html#tymethod.data\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data_range\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/pe/section.rs.html#120-127\">source</a><a href=\"#method.data_range\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.ObjectSegment.html#tymethod.data_range\" class=\"fn\">data_range</a>(&amp;self, address: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>, size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'data [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;&gt;</h4></section></summary><div class='docblock'>Return the segment data in the given range. <a href=\"object/read/trait.ObjectSegment.html#tymethod.data_range\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.name_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/pe/section.rs.html#130-134\">source</a><a href=\"#method.name_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.ObjectSegment.html#tymethod.name_bytes\" class=\"fn\">name_bytes</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;&gt;</h4></section></summary><div class='docblock'>Returns the name of the segment.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.name\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/pe/section.rs.html#137-144\">source</a><a href=\"#method.name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.ObjectSegment.html#tymethod.name\" class=\"fn\">name</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt;</h4></section></summary><div class='docblock'>Returns the name of the segment. <a href=\"object/read/trait.ObjectSegment.html#tymethod.name\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.flags\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/pe/section.rs.html#147-150\">source</a><a href=\"#method.flags\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.ObjectSegment.html#tymethod.flags\" class=\"fn\">flags</a>(&amp;self) -&gt; <a class=\"enum\" href=\"object/read/enum.SegmentFlags.html\" title=\"enum object::read::SegmentFlags\">SegmentFlags</a></h4></section></summary><div class='docblock'>Return the flags of segment.</div></details></div></details>","ObjectSegment<'data>","object::read::pe::section::PeSegment32","object::read::pe::section::PeSegment64"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PeSegment%3C'data,+'file,+Pe,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/pe/section.rs.html#67-81\">source</a><a href=\"#impl-PeSegment%3C'data,+'file,+Pe,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, Pe, R&gt; <a class=\"struct\" href=\"object/read/pe/struct.PeSegment.html\" title=\"struct object::read::pe::PeSegment\">PeSegment</a>&lt;'data, 'file, Pe, R&gt;<div class=\"where\">where\n    Pe: <a class=\"trait\" href=\"object/read/pe/trait.ImageNtHeaders.html\" title=\"trait object::read::pe::ImageNtHeaders\">ImageNtHeaders</a>,\n    R: <a class=\"trait\" href=\"object/read/trait.ReadRef.html\" title=\"trait object::read::ReadRef\">ReadRef</a>&lt;'data&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.pe_file\" class=\"method\"><a class=\"src rightside\" href=\"src/object/read/pe/section.rs.html#73-75\">source</a><h4 class=\"code-header\">pub fn <a href=\"object/read/pe/struct.PeSegment.html#tymethod.pe_file\" class=\"fn\">pe_file</a>(&amp;self) -&gt; &amp;'file <a class=\"struct\" href=\"object/read/pe/struct.PeFile.html\" title=\"struct object::read::pe::PeFile\">PeFile</a>&lt;'data, Pe, R&gt;</h4></section></summary><div class=\"docblock\"><p>Get the PE file containing this segment.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.pe_section\" class=\"method\"><a class=\"src rightside\" href=\"src/object/read/pe/section.rs.html#78-80\">source</a><h4 class=\"code-header\">pub fn <a href=\"object/read/pe/struct.PeSegment.html#tymethod.pe_section\" class=\"fn\">pe_section</a>(&amp;self) -&gt; &amp;'data <a class=\"struct\" href=\"object/pe/struct.ImageSectionHeader.html\" title=\"struct object::pe::ImageSectionHeader\">ImageSectionHeader</a></h4></section></summary><div class=\"docblock\"><p>Get the raw PE section header.</p>\n</div></details></div></details>",0,"object::read::pe::section::PeSegment32","object::read::pe::section::PeSegment64"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()