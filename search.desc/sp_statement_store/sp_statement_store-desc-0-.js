searchState.loadedDescShard("sp_statement_store", 0, "A crate which contains statement-store primitives.\nAccount id\nStatement proof.\nStatement failed validation.\nBlock hash.\nStatement channel.\nAccount channel to use. Only one message per …\nAdditional data.\nDatabase error.\nError decoding statement structure.\nDecryption key identifier.\nAn identifier for the key that <code>Data</code> field may be decrypted …\nEd25519 Signature.\nContains the error value\nStatement store error.\nStatement attributes. Each statement is a list of 0 or …\nStatement hash.\nHigh priority. Statement should be broadcast to all peers.\nPriority is too low or the size is too big.\nInternal store error.\nSignature has failed verification.\nKnown statement\nKnown statement that’s already expired.\nLow priority.\nTotal number of topic fields allowed.\nNetwork propagation priority.\nAccepted as new with given score\nNo signature in the proof or no proof.\nContains the success value\nOn-chain event proof.\nPriority when competing with other messages from the same …\nStatement proof.\nResult type for <code>Error</code>\nError making runtime call.\nSecp256k1 Signature.\nResult returned by <code>Statement::verify_signature</code>\nSr25519 Signature.\nStatement structure.\nStatement store API.\nStatement submission outcome\nStatement topic.\nFirst statement topic.\nSecond statement topic.\nThird statement topic.\nFourth statement topic.\nSignature is valid and matches this account id.\nReturn account id for the proof creator.\nGet proof account id, if any\nReturn the data of all known statements which include all …\nGet channel, if any.\nGet plain data.\nGet plain data len.\nDecrypt data (if any) with the given private key.\nReturns decryption key if any.\nStatement-store specific ed25519 crypto primitives.\nEncrypt give data with given key and store both in the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalculate statement hash.\nReturns blake2-256 hash for the encoded statement.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert to internal data.\nCreate a new empty statement with no proof.\nCreate a new statement with a proof.\nReturn the data of all known statements whose decryption …\nReturn the decrypted data of all known statements whose …\nGet priority, if any.\nGet a reference to the statement proof, if any.\nRemove a statement from the store.\nRemove the proof of this statement.\nRuntime support for the statement store.\nSet statement channel.\nSet decryption key.\nSet unencrypted statement data.\nSet statement priority.\nSet statement proof. Any existing proof is overwritten.\nSet topic by index. Does noting if index is over <code>MAX_TOPICS</code>…\nSign with a given private key and add the signature proof …\nSign with a key that matches given public key in the …\nSign with a given private key and add the signature proof …\nSign with a key that matches given public key in the …\nSign with a given private key and add the signature proof …\nSign with a key that matches given public key in the …\nGet statement by hash.\nReturn all statements.\nSubmit a statement.\nReturns a topic by topic index.\nCheck proof signature, if any.\nHash of block that contains the event.\nIndex of the event in the event list.\nSignature.\nSignature.\nSignature.\nPublic key.\nPublic key.\nPublic key.\nAccount identifier associated with the event.\nStatement-store specific ed25519 key pair.\nStatement-store specific ed25519 public key.\nStatement failed validation.\nFailed proof validation.\nStatement is coming from the on-chain worker.\nStatement could not be inserted because of priority or …\nExport functions for the WASM host.\nValidity could not be checked because of internal error.\nAn reason for an invalid statement.\nStatement has been submitted over the local api.\nStatement has been received from the gossip network.\nMissing proof.\nThe store is not available.\nKnown statement\nAccepted as new.\nThe source of the statement.\nThe offchain database extension that will be registered at …\nSubmission result.\nInformation concerning a valid statement.\nRuntime API trait for statement validation.\nCheck if the source allows the statement to be resubmitted …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMax statement count for this account, as calculated by the …\nMax total data size for this account, as calculated by the …\nCreate new instance of externalities extensions.\nHost interface\nValidate the statement.\nProvides implementations for the extern host functions.\nReturn the data of all known statements which include all …\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nReturn the data of all known statements whose decryption …\nReturn the decrypted data of all known statements whose …\nRemove a statement from the store by hash.\nReturn all statements.\nSubmit a new new statement. The statement will be …")