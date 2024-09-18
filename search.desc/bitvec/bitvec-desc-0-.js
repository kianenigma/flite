searchState.loadedDescShard("bitvec", 0, "<code>bitvec</code>\nBit-Array Type Definition\nMemory Bus Access Management\nStatically-Allocated, Fixed-Size, Bit Buffer\nBit-Array Value Constructor\nBoxed Bit-Slice Constructor\nBit-Slice Region Constructor\nBit-Vector Constructor\nHeap-Allocated, Fixed-Size, Bit Buffer\nMemory Region Description\nBit-Field Memory Slots\nBit Indices\nConstructor Macros\nMemory Element Descriptions\nIn-Element Bit Ordering\nSymbol Export\nRaw Pointer Implementation\nBit-Addressable Memory Regions\nStorage Memory Description\nDynamically-Allocated, Adjustable-Size, Bit Buffer\nBit View Adapters\nBit-Level Access Instructions\nRead-Only Semivolatile Handle\nRead-Only Shared-Mutable Handle\nRead-Only Shared-Mutable Handle\nRead-Only Shared-Mutable Handle\nRead-Only Shared-Mutable Handle\nRead-Only Shared-Mutable Handle\nThe element type being guarded against improper mutation.\nThe memory-access type this guards.\nThe zero constant.\nClears bits within a memory element to <code>0</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGets the function that will write <code>value</code> into all bits …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nInverts bits within a memory element.\nLoads the value from memory, allowing for the possibility …\nSets bits within a memory element to <code>1</code>.\nWrites a value to one bit in a memory element, returning …\nBit-Precision Array Immediate\nBit-Array Iteration\nA bit-array with all bits initialized to zero.\nThe ordering of bits within an <code>A::Store</code> element.\nExplicitly views the bit-array as a bit-slice.\nViews the remaining unyielded bits in the iterator.\nExplicitly views the bit-array as a mutable bit-slice.\nMutably views the remaining unyielded bits in the iterator.\nReturns a mutable bit-slice containing the entire …\nViews the bit-array as a mutable slice of its underlying …\nViews the bit-array as a slice of its underlying memory …\nReturns a bit-slice containing the entire bit-array. …\nThe wrapped data buffer.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRemoves the bit-array wrapper, returning the contained …\nTests whether the array is empty.\nGets the length (in bits) of the bit-array.\nWraps an existing buffer as a bit-array.\nConverts a bit-array into its iterator.\nFixed-Size, Heap-Allocated, Bit Slice\nAn iterator over a <code>BitBox</code>.\nViews the remaining unyielded bits as a bit-slice.\nExplicitly views the bit-box as a bit-slice.\nViews the remaining unyielded bits as a mutable bit-slice.\nExplicitly views the bit-box as a mutable bit-slice.\nViews the bit-box as a mutable slice of its underlying …\nViews the bit-box as a slice of its underlying memory …\nSets the unused bits outside the <code>BitBox</code> buffer to a fixed …\nEnsures that the allocated buffer has no dead bits between …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCopies a bit-slice region into a new bit-box allocation.\nConverts a <code>Box&lt;[T]&gt;</code> into a <code>BitBox&lt;T, O&gt;</code>, in place.\nConstructs a bit-box from a raw bit-slice pointer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts the bit-box into a bit-vector.\nConverts the bit-box back into an ordinary boxed element …\nConsumes the bit-box, returning a raw bit-slice pointer.\nDeliberately leaks the allocated memory, returning an …\nAttempts to convert an ordinary boxed slice into a boxed …\nBit-Slice Partitioning\nBit-Slice Element Partitioning\nIndicates that a bit-slice’s contents are entirely in …\nIndicates that a bit-slice’s contents are entirely in …\nPartially-Owned Memory Element\nIndicates that a bit-slice’s contents touch an element …\nIndicates that a bit-slice’s contents touch an element …\nGets the semantic head and tail indices that constrain …\nClears all bits governed by the partial-element to <code>0</code>.\nAttempts to unpack the bit-domain as an <code>Enclave</code> variant. …\nAttempts to unpack the bit-domain as an <code>Enclave</code> variant. …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGets the starting index of the live bits in the element.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts the element-wise <code>Domain</code> into the equivalent …\nConverts the partial element into a bit-slice over its …\nInverts the value of each bit governed by the …\nFetches the value stored through <code>self</code> and masks away extra …\nGets the bit-mask over all accessible bits.\nAttempts to unpack the bit-domain as a <code>Region</code> variant. …\nAttempts to unpack the bit-domain as a <code>Region</code> variant. …\nSets all bits governed by the partial-element to <code>1</code>.\nStores a value through <code>self</code> after masking away extra bits.\nPerforms a store operation on a partial-element whose bits …\nGets the ending index of the live bits in the element.\nAny bits that wholly-fill elements in the interior of the …\nAny bits that partially-fill the first element of the …\nAny bits that partially-fill the last element of the …\nAll fully-used elements in the bit-slice’s underlying …\nThe first element in the bit-slice’s underlying storage, …\nThe last element in the bit-slice’s underlying storage, …\nC-Style Bit-Field Access\nInteger Loading\nBig-Endian Integer Loading\nLittle-Endian Integer Loading\nInteger Storing\nBig-Endian Integer Storing\nLittle-Endian Integer Storing\nA full bit-mask with every bit set.\nOne-Bit-After Tail Index\nSemantic Bit Index\nBit Index Error\nMulti-Bit Selection Mask\nBit Position\nOne-Hot Bit Selection Mask\nThe inclusive maximum index within an <code>R</code> element.\nThe inclusive maximum tail within (or after) an <code>R</code> element.\nThe position value of the most significant bit in an <code>R</code> …\nThe inclusive minimum index within an <code>R</code> element.\nThe inclusive minimum tail within (or after) an <code>R</code> element.\nThe position value of the least significant bit in an <code>R</code> …\nAn empty bit-mask with every bit cleared.\nCreates a new mask with a selector bit activated.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nInserts a selector bit into a mask.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRemoves the index wrapper, leaving the internal counter.\nRemoves the error wrapper, leaving the internal counter.\nRemoves the tail wrapper, leaving the internal counter.\nRemoves the position wrapper, leaving the internal counter.\nRemoves the one-hot selection wrapper, leaving the …\nRemoves the mask wrapper, leaving the internal value.\nComputes the bit selector for <code>self</code> as an accessor mask.\nComputes the bit selector for <code>self</code> as an accessor mask.\nComputes a bit-mask for <code>self</code>. This is a type-cast.\nWraps a counter value as a known-good index into an <code>R</code> …\nWraps a counter value as a known-good tail of an <code>R</code> …\nWraps a counter value as a known-good position within an <code>R</code> …\nWraps a selector value as a known-good selection in an <code>R</code> …\nWraps any <code>R</code> value as a bit-mask.\nWraps a counter value as an assumed-good index into an <code>R</code> …\nWraps a counter value as an assumed-good position within …\nWraps a selector value as an assumed-good selection in an <code>R</code>…\nIncrements an index counter, wrapping at the back edge of …\nComputes the bit position corresponding to <code>self</code> under some …\nDecrements an index counter, wrapping at the front edge of …\nIterates over all indices between an inclusive start and …\nIterates over all possible index values.\nIterates over all possible selector values.\nIterates over all tail indices at and after an inclusive …\nComputes the bit selector corresponding to <code>self</code> under an …\nComputes the bit selector corresponding to <code>self</code>.\nTests if a mask contains a given selector bit.\nThe literal <code>!0</code>.\nRegister Descriptions\nThe number of bits required to store an index in the range …\nA mask over all bits that can be used as an index within …\nCounts the number of bits in a value of type <code>T</code>.\nBit Storage Calculator\nIn-Element Bit Ordering\nC-Compatible Bit Ordering\nLeast-Significant-First Bit Traversal\nMost-Significant-First Bit Traversal\nTranslates a semantic bit index into a real bit position.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nProduces a multi-bit selection mask from a range of …\nProduces a single-bit selection mask from a bit-index.\nComplete <code>BitOrder</code> Verification\nSingle-Type <code>BitOrder</code> Verification\nBit-Array Type Definition\nBit-Array Value Constructor\nBoxed Bit-Slice Constructor\nBit-Slice Region Constructor\nBit-Vector Constructor\nSingle-Bit Pointer\nErrors produced by invalid bit-pointer components.\nBit-Pointer Range\nProxy Bit-Reference\nAn error produced when creating <code>BitSpan</code> encoded references.\nMarks whether this type contains mutability permissions …\nA basic <code>const</code> marker.\nThe canonical dangling pointer. This selects the starting …\nThe canonical empty range. All ranges with zero length …\nThe error produced when an address is insufficiently …\nAttempted to construct a bit-pointer with an address not …\nThe base element pointer is not aligned.\nA basic <code>mut</code> marker.\nGeneralized mutability permissions.\nAttempted to construct a bit-pointer with the null element …\nA null pointer was provided.\nCounts the layers of <code>Frozen&lt;&gt;</code> wrapping around a base <code>Const</code> …\nOne of <code>*const</code> or <code>*mut</code>.\nAllow instances to be constructed generically.\nThe requested address is too high, and wraps to zero.\nThe requested length exceeds the <code>BitSpan</code> length ceiling.\nAdjusts a bit-pointer upwards in memory. This is …\nGets the address of the base storage element.\nComputes the offset (in bits) that needs to be applied to …\nProduces a proxy reference to the referent bit.\nProduces a proxy reference to the referent bit.\nGets the <code>BitIdx</code> that selects the bit within the memory …\nBit-Slice Pointer Construction\nBit-Slice Pointer Construction\nCasts to a <code>BitPtr</code> with a different storage parameter.\nEnsures that an address is well-aligned to its referent …\nCommits a bit into the proxied location.\nTests if a given bit-pointer is contained within the range.\nBit-wise <code>memcpy</code>\nCopies <code>count</code> bits from the region starting at <code>src</code> to the …\nCopies <code>count</code> bits from the region starting at <code>src</code> to the …\nBit-wise <code>memcpy</code>\nCopies <code>count</code> bits from <code>self</code> to <code>dest</code>. The source and …\nCopies <code>count</code> bits from <code>self</code> to <code>dest</code>. The source and …\nRemote Destructor\nRuns the destructor of the referent value.\nThe higher, exclusive, bound of the range. The bit to …\nBit-Pointer Equality\nFreeze this type, wrapping it in a <code>const</code> marker that may …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts a bit-pointer into a proxy bit-reference.\nConstructs a mutable <code>BitPtr</code> to the zeroth bit in a single …\nConstructs a <code>BitPtr</code> to the zeroth bit in the zeroth …\nExplicitly converts a <code>Range&lt;BitPtr&gt;</code> into a <code>BitPtrRange</code>.\nConstructs a <code>BitPtr</code> to the zeroth bit in a single element.\nConstructs a <code>BitPtr</code> to the zeroth bit in the zeroth …\nConstructs a mutable <code>BitPtr</code> to the zeroth bit in the …\nBit-Pointer Hashing\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nDecays the bit-reference to an ordinary bit-pointer.\nExplicitly converts a <code>BitPtrRange</code> into a <code>Range&lt;BitPtr&gt;</code>.\nTests if the range is empty (the distance between …\nTests if a bit-pointer is the null value.\nTries to construct a <code>BitPtr</code> from a memory location and a …\nConstructs a <code>BitPtr</code> from an address and head index, …\nBit-Pointer Sentinel Value\nBit-Pointer Sentinel Value\nCreates a new bit-pointer at a specified offset from the …\nCalculates the distance (in bits) between two bit-pointers.\nGets a raw pointer to the memory element containing the …\nGets a raw pointer to the memory location containing the …\nDecomposes a bit-pointer into its element address and bit …\nSingle-Bit Read\nReads the bit from <code>*self</code>.\nSingle-Bit Unaligned Read\nReads the bit from <code>*self</code> using an unaligned memory access.\nSingle-Bit Volatile Read\nReads the bit from <code>*self</code> using a volatile load.\nSingle-Bit Replacement\nMoves <code>src</code> into the referenced bit, returning the previous …\nReplaces the bit at <code>*self</code> with a new value, returning the …\nWrites <code>value</code> into the proxy.\nRaw Bit-Slice Pointer Construction\nRaw Bit-Slice Pointer Construction\nThe lower, inclusive, bound of the range. The bit to which …\nAdjusts a bit-pointer downwards in memory. This is …\nBit Swap\nSwaps the bit values of two proxies.\nSwaps the bits at two mutable locations.\nMany-Bit Swap\nThaw a previously-frozen type, removing its <code>Frozen</code> marker …\nRemoves write permissions from a bit-pointer.\nAdds write permissions to a bit-pointer.\nDecomposes a bit-pointer into its address and head-index …\nAdjusts a bit-pointer upwards in memory, using wrapping …\nCreates a new bit-pointer at a specified offset from the …\nAdjusts a bit-pointer downwards in memory, using wrapping …\nSingle-Bit Write\nWrites a new bit into the given location.\nBit-wise <code>memset</code>\nBit-wise <code>memset</code>\nSingle-Bit Unaligned Write\nWrites a bit into memory, tolerating unaligned addresses.\nSingle-Bit Volatile Write\nWrites a new bit using volatile I/O operations.\nAn iterator over <code>BitSlice</code> that yields <code>&amp;bool</code> directly.\nBit-Addressable Memory\nBit-Slice Indexing\nAn iterator over <code>BitSlice</code> that yields <code>bool</code> directly.\nShared Bit-Slice Chunking\nShared Bit-Slice Exact Chunking\nExclusive Bit-Slice Exact Chunking\nAnti-Aliasing Iterator Adapter\nExclusive Bit-Slice Chunking\nAnti-Aliasing Iterator Adapter\nThe output type of immutable access.\nShared Bit-Slice Iteration\nExclusive Bit-Slice Iteration\nAnti-Aliasing Iterator Adapter\nBit Seeking\nBit Seeking\nThe inclusive maximum length of a <code>BitSlice&lt;_, T&gt;</code>.\nThe inclusive maximum length that a <code>[T]</code> slice can be for …\nThe output type of mutable access.\nShared Bit-Slice Reverse Chunking\nShared Bit-Slice Reverse Exact Chunking\nExclusive Bit-Slice Reverse Exact Chunking\nAnti-Aliasing Iterator Adapter\nExclusive Bit-Slice Chunking\nAnti-Aliasing Iterator Adapter\nShared Bit-Slice Reverse Splitting\nExclusive Bit-Slice Reverse Splitting\nAnti-Aliasing Iterator Adapter\nShared Bit-Slice Reverse Splitting\nExclusive Bit-Slice Reverse Splitting\nAnti-Aliasing Iterator Adapter\nShared Bit-Slice Splitting\nShared Bit-Slice Splitting\nExclusive Bit-Slice Splitting\nAnti-Aliasing Iterator Adapter\nExclusive Bit-Slice Splitting\nAnti-Aliasing Iterator Adapter\nShared Bit-Slice Splitting\nExclusive Bit-Slice Splitting\nAnti-Aliasing Iterator Adapter\nBit-Slice Windowing\nProduces bit-slice view(s) with different underlying …\nProduces bit-slice view(s) with different underlying …\nTests if every bit is set to <code>1</code> in the bit-slice.\nTests if there is at least one bit set to <code>1</code> in the …\nGets a raw pointer to the zeroth bit of the bit-slice.\nViews the bit-slice as a half-open range of bit-pointers, …\nViews the currently unyielded bit-slice.\nViews the remaining bit-slice that has not yet been …\nGets a raw, write-capable pointer to the zeroth bit of the …\nViews the bit-slice as a half-open range of write-capable …\nProduces a range of mutable bit-pointers to each bit in …\nProduces a range of bit-pointers to each bit in the …\nPartitions a bit-slice into maybe-contended and …\nPartitions a mutable bit-slice into maybe-contended and …\nBoolean Arithmetic\nBoolean Arithmetic\nBoolean Arithmetic\nAdapts the iterator to yield regular <code>&amp;bool</code> references …\nAdapts the iterator to yield <code>bool</code> values rather than the …\nIterates over non-overlapping subslices of a bit-slice.\nIterates over non-overlapping subslices of a bit-slice.\nIterates over non-overlapping mutable subslices of a …\nIterates over non-overlapping mutable subslices of a …\nCopies the bits from <code>src</code> into <code>self</code>.\nTests if the bit-slice contains the given sequence …\nYields <code>bool</code> values directly, rather than proxy references.\nCopies all bits from <code>src</code> into <code>self</code>, using batched …\nCopies a span of bits to another location in the bit-slice.\nCopies bits from one region of the bit-slice to another …\nCounts the number of bits set to <code>1</code> in the bit-slice …\nCounts the number of bits cleared to <code>0</code> in the bit-slice …\nViews the underlying memory of a bit-slice, removing alias …\nViews the underlying memory of a bit-slice, removing alias …\nProduces an empty bit-slice with an arbitrary lifetime.\nProduces an empty bit-slice with an arbitrary lifetime.\nTests if the bit-slice ends with the given sequence.\nFills the bit-slice with a given bit.\nFills the bit-slice with bits produced by a generator …\nGets a reference to the first bit of the bit-slice, or <code>None</code>…\nGets a mutable reference to the first bit of the …\nFinds the index of the first bit in the bit-slice set to <code>1</code>.\nFinds the index of the first bit in the bit-slice cleared …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a shared <code>&amp;BitSlice</code> reference over a shared …\nConstructs an exclusive <code>&amp;mut BitSlice</code> reference over an …\nRaw Bit-Slice Construction\nRaw Bit-Slice Construction\nRaw Bit-Slice Construction\nRaw Bit-Slice Construction\nConstructs a shared <code>&amp;BitSlice</code> reference over a slice of …\nConstructs an exclusive <code>&amp;mut BitSlice</code> reference over a …\nConstructs a shared <code>&amp;BitSlice</code> over an element slice, …\nConstructs an exclusive <code>&amp;mut BitSlice</code> over an element …\nImmutably indexes into a bit-slice, returning <code>None</code> if <code>self</code> …\nGets a reference to a single bit or a subsection of the …\nMutably indexes into a bit-slice, returning <code>None</code> if <code>self</code> …\nGets a mutable reference to a single bit or a subsection …\nImmutably indexes into a bit-slice without doing any …\nGets a reference to a single bit or to a subsection of the …\nMutably indexes into a bit-slice without doing any bounds …\nGets a mutable reference to a single bit or a subsection …\nImmutably indexes into a bit-slice, panicking if <code>self</code> is …\nLooks up a single bit by its semantic index.\nMutably indexes into a bit-slice, panicking if <code>self</code> is out …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nViews the underlying bit-slice as a subslice of the …\nConsumes the iterator, returning the remnant bit-slice …\nConsumes the iterator, returning the remnant bit-slice …\nSee <code>ChunksExactMut::into_remainder()</code>.\nSee <code>RChunksExactMut::into_remainder()</code>\nTests if the bit-slice is empty (length zero).\nProduces an iterator over each bit in the bit-slice.\nProduces a mutable iterator over each bit in the bit-slice.\nEnumerates the index of each bit in a bit-slice set to <code>1</code>.\nEnumerates the index of each bit in a bit-slice cleared to …\nGets a reference to the last bit of the bit-slice, or <code>None</code> …\nGets a mutable reference to the last bit of the bit-slice, …\nFinds the index of the last bit in the bit-slice set to <code>1</code>.\nFinds the index of the last bit in the bit-slice cleared …\nCounts the number of bits from the start of the bit-slice …\nCounts the number of bits from the start of the bit-slice …\nGets the number of bits in the bit-slice.\n<code>Msb0</code> Big-Endian Integer Loading\n<code>Lsb0</code> Big-Endian Integer Loading\n<code>Msb0</code> Little-Endian Integer Loading\n<code>Lsb0</code> Little-Endian Integer Loading\nTests if at least one bit is cleared to <code>0</code> in the bit-slice.\nTests if every bit is cleared to <code>0</code> in the bit-slice.\nIterates over non-overlapping subslices of a bit-slice, …\nIterates over non-overlapping subslices of a bit-slice, …\nIterates over non-overlapping mutable subslices of a …\nIterates over non-overlapping mutable subslices of a …\nGets the remnant bit-slice that the iterator will not …\nGets the remnant bit-slice that the iterator will not …\nRemoves a layer of <code>::Alias</code> tainting from the yielded item.\nRemoves a layer of <code>::Alias</code> tainting from the yielded item.\nRemoves a layer of <code>::Alias</code> tainting from the yielded item.\nRemoves a layer of <code>::Alias</code> tainting from the yielded item.\nRemoves a layer of <code>::Alias</code> tainting from the yielded item.\nRemoves a layer of <code>::Alias</code> tainting from the yielded item.\nRemoves a layer of <code>::Alias</code> tainting from the yielded item.\nRemoves a layer of <code>::Alias</code> tainting from the yielded item.\nRemoves a layer of <code>::Alias</code> tainting from the yielded item.\nRemoves a layer of <code>::Alias</code> tainting from the yielded item.\nCreates a bit-vector by repeating a bit-slice <code>n</code> times.\nWrites a new value into a bit, and returns its previous …\nWrites a new value into a bit, returning the previous …\nReverses the order of bits in a bit-slice.\nRotates the contents of a bit-slice to the left (towards …\nRotates the contents of a bit-slice to the right (away …\nIterates over subslices separated by bits that match a …\nIterates over mutable subslices separated by bits that …\nIterates over mutable subslices separated by bits that …\nIterates over mutable subslices separated by bits that …\nWrites a new value into a single bit.\nWrites a new value into a single bit, using alias-safe …\nWrites a new value into a single bit, using alias-safe …\nWrites a new value into a single bit, without bounds …\nShifts the contents of a bit-slice “left” (towards the …\nShifts the contents of a bit-slice “right” (away from …\nTests if at least one bit is set to <code>1</code>, and at least one …\nIterates over subslices separated by bits that match a …\nSplits a bit-slice in two parts at an index.\nSplits a mutable bit-slice in two parts at an index.\nSplits a bit-slice at an index, without bounds checking.\nSplits a mutable bit-slice at an index, without bounds …\nSplits the bit-slice into a reference to its first bit, …\nSplits the bit-slice into mutable references of its first …\nIterates over subslices separated by bits that match a …\nIterates over mutable subslices separated by bits that …\nSplits the bit-slice into a reference to its last bit, and …\nSplits the bit-slice into mutable references to its last …\nIterates over mutable subslices separated by bits that …\nIterates over subslices separated by bits that match a …\nIterates over mutable subslices separated by bits that …\nTests if the bit-slice begins with the given sequence.\n<code>Lsb0</code> Big-Endian Integer Storing\n<code>Msb0</code> Big-Endian Integer Storing\n<code>Lsb0</code> Little-Endian Integer Storing\n<code>Msb0</code> Little-Endian Integer Storing\nRemoves a prefix bit-slice, if present.\nRemoves a suffix bit-slice, if present.\nExchanges the bit values at two indices.\nSwaps two bits in a bit-slice, without bounds checking.\nSwaps the contents of two bit-slices.\nTakes the remnant bit-slice out of the iterator.\nTakes the remnant bit-slice out of the iterator.\nSee <code>ChunksExactMut::take_remainder()</code>\nSee <code>RChunksExactMut::take_remainder()</code>\nCopies a bit-slice into an owned bit-vector.\nCounts the number of bits from the end of the bit-slice to …\nCounts the number of bits from the end of the bit-slice to …\nAttempts to construct a shared <code>&amp;BitSlice</code> reference over a …\nAttempts to construct an exclusive <code>&amp;mut BitSlice</code> reference …\nIterates over consecutive windowing subslices in a …\nAll implementors are required to have <code>Self</code> and <code>Self::Alias</code> …\nAll implementors are required to have their alignment …\nA type that selects the appropriate load/store …\nA sibling <code>BitStore</code> implementor that is known to be …\nBit Storage\nThe element type used in the memory region underlying a …\nThe inverse of <code>::Alias</code>. It is used when a <code>BitSlice</code> removes …\nThe zero constant.\nReads a single bit out of the memory system according to …\nLoads a value out of the memory system according to the …\nWraps a raw memory value as a <code>BitStore</code> type.\nStores a value into the memory system. This is only called …\nBit-Precision Dynamic Array\nDraining Iteration\nAn empty bit-vector with no backing allocation.\nSplicing Iteration\nMoves all the bits out of <code>other</code> into the back of <code>self</code>.\nCreates an unsafe shared bit-pointer to the start of the …\nViews the unyielded bits remaining in the drain.\nExplicitly views the bit-vector as a bit-slice.\nCreates an unsafe writable bit-pointer to the start of the …\nExplicitly views the bit-vector as a mutable bit-slice.\nViews the bit-vector as a mutable slice of its underlying …\nViews the bit-vector as a slice of its underlying memory …\nGets the allocation capacity, measured in bits.\nEmpties the bit-vector.\nIterates over a portion of the bit-vector, <em>removing</em> all …\nAppends the contents of a bit-slice to a bit-vector.\nAppends a slice of <code>T</code> elements to a bit-vector.\nExtends <code>self</code> by copying an internal range of its bit-slice …\nEnsures that the live region of the bit-vector’s …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCopies the contents of a bit-slice into a new heap …\nConstructs a new bit-vector from a single element.\nConstructs a bit-vector handle from its constituent fields.\nConstructs a new bit-vector from a slice of memory …\nConverts a regular vector in-place into a bit-vector.\nInserts a bit at a given position, shifting all bits after …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts a bit-vector into a boxed bit-slice.\nDecomposes a bit-vector into its constituent member fields.\nConverts a bit-vector into a <code>Vec</code> of its underlying storage.\nTests if the bit-vector is empty.\nDestroys the <code>BitVec</code> handle without destroying the …\nGets the length of the bit-vector.\nConstructs a new, empty, bit-vector.\nAttempts to remove the trailing bit from the bit-vector.\nAppends a single bit to the vector.\nRemoves a bit at a given position, shifting all bits after …\nCreates a new bit-vector by repeating a bit for the …\nEnsures that the bit-vector has allocation capacity for <em>at </em>…\nEnsures that the bit-vector has allocation capacity for <em>at </em>…\nResizes the bit-vector to a new length. New bits are …\nResizes the bit-vector to a new length, using a function …\nRetains only the bits that the predicate allows.\nOverwrites each element (visible in <code>.as_raw_mut_slice()</code>) …\nResizes a bit-vector to a new length.\nSets the uninitialized bits of a bit-vector to a known …\nReleases excess capacity back to the allocator.\nModifies <code>self.drain()</code> so that the removed bit-slice is …\nSplits the bit-vector in half at an index, moving …\nTakes a bit out of the bit-vector.\nShortens the bit-vector, keeping the first <code>new_len</code> bits …\nFallibly constructs a new bit-vector from a slice of …\nAttempts to convert a regular vector in-place into a …\nAllocates a new, empty, bit-vector with space for at least …\nImmutable Bit View\nMutable Bit View\nBit View\nHelper trait for scalars and arrays, but not slices.\nThe underlying element type.\nThe zero constant.\nViews <code>self</code> as an immutable bit-slice region with the <code>O</code> …\nViews <code>self</code> as a mutable bit-slice region with the <code>O</code> …\nViews the type as a mutable slice of its elements.\nViews the type as a slice of its elements.\nWraps <code>self</code> in a <code>BitArray</code>.\nAttempts to view <code>self</code> as an immutable bit-slice region …\nAttempts to view <code>self</code> as a mutable bit-slice region with …\nAttempts to view a memory region as an immutable bit-slice.\nAttempts to view a memory region as a mutable bit-slice.\nViews a memory region as an immutable bit-slice.\nViews a memory region as a mutable bit-slice.")