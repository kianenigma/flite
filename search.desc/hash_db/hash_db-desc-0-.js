searchState.loadedDescShard("hash_db", 0, "Database of byte-slices keyed to their hash.\nUpcast trait for HashDB.\nUpcast trait for PlainDB.\nAn empty prefix constant. Can be use when the prefix is …\nTrait modelling datastore keyed by a hash defined by the …\nTrait for immutable reference of HashDB.\nTrait describing an object that can hash a slice of bytes. …\nThe length in bytes of the <code>Hasher</code> output.\nThe output type of the <code>Hasher</code>\nTrait modelling a plain datastore whose key is a fixed …\nTrait for immutable reference of PlainDB.\nA trie node prefix, it is the nibble path from the trie …\nWhat to use to build <code>HashMap</code>s with this <code>Hasher</code>.\nPerform upcast to HashDB for anything that derives from …\nPerform mutable upcast to HashDB for anything that derives …\nPerform upcast to PlainDB for anything that derives from …\nPerform mutable upcast to PlainDB for anything that …\nCheck for the existence of a hash-key.\nCheck for the existance of a hash-key.\nCheck for the existence of a hash-key.\nCheck for the existance of a hash-key.\nInsert a datum item into the DB. Insertions are counted …\nLike <code>insert()</code>, except you provide the key and the data is …\nLook up a given hash into the bytes that hash to it, …\nLook up a given hash into the bytes that hash to it, …\nLook up a given hash into the bytes that hash to it, …\nLook up a given hash into the bytes that hash to it, …\nCompute the hash of the provided slice of bytes returning …\nInsert a datum item into the DB and return the datum’s …\nRemove a datum previously inserted. Insertions can be “…\nRemove a datum previously inserted. Insertions can be “…")