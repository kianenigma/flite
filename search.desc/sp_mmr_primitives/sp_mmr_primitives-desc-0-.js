searchState.loadedDescShard("sp_mmr_primitives", 0, "Merkle Mountain Range primitive types.\nAn MMR ancestry proof for a prior mmr root.\nError committing changes.\nA composition of multiple leaf elements with compact form …\nArbitrary data in its full form.\nAn element representing either full data or its hash.\nA type-safe wrapper for the concrete leaf type.\nMerkle Mountain Range operation error.\nA full leaf content stored in the offchain-db.\nError during proof generation.\nError getting the new root.\nA hash of some data.\nPrefix for elements stored in the Off-chain DB via …\nThe provided best know block number is invalid.\nCannot find the requested leaf index\nError during translation of a block number into a leaf …\nA type that should end up in the leaf of MMR.\nA provider of the MMR’s leaf data.\nA type to describe leaf position in the MMR.\nLeaf not found in the storage.\nAn MMR proof data for a group of leaves.\nAPI to interact with MMR pallet.\nA type to describe node position in the MMR (node index).\nNew MMR root notification hook.\nA helper type to allow using arbitrary SCALE-encoded leaf …\nMmr Pallet not included in runtime\nError while pushing new node.\nProof verification error.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a <code>OpaqueLeaf</code> given raw bytes of compact-encoded …\nConvert a concrete MMR leaf into an opaque type.\nConvert a concrete leaf into encodable opaque version.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGiven an opaque leaf, make it encodable.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGenerate MMR proof for a series of block numbers. If …\nRetrieve a hash of this item.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTry to convert into a OpaqueLeaf.\nProof elements (hashes of siblings of inner nodes on the …\nProof elements (positions and hashes of siblings of inner …\nNumber of leaves in MMR, when the proof was generated.\nNumber of leaves in MMR, when the proof was generated.\nThe method to return leaf data that should be placed in …\nThe indices of the leaves the proof is for.\nConsume given error <code>e</code> with <code>self</code> and generate a native log …\nConsume given error <code>e</code> with <code>self</code> and generate a native log …\nReturn the number of MMR blocks in the chain.\nReturn the on-chain MMR root hash.\nCreate a new Compact wrapper for a tuple.\nFunction called by the pallet in case new MMR root has …\nNumber of leaves in the ancestor’s MMR.\nPeaks of the ancestor’s mmr\nAttempt to decode the leaf into expected concrete type.\nInternal tuple representation.\nEncode the leaf either in its full or compact form.\nMerkle Mountain Range utilities.\nVerify MMR proof against on-chain MMR for a batch of …\nVerify MMR proof against given root hash for a batch of …\nMMR nodes &amp; size -related utilities.\nConvert a block number into a leaf index.\nGet the first block with MMR.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalculate <code>LeafIndex</code> for the leaf that added <code>node_index</code> to …\nCreate new instance of MMR nodes utilities for given …\nBuild canonical offchain key for node <code>pos</code> in MMR.\nBuild offchain key from <code>parent_hash</code> of block that …\nReturn the number of leaves in the MMR.\nCalculate number of peaks in the MMR.\nStarting from any leaf index, get the sequence of …\nCalculate the total size of MMR (number of nodes).")