searchState.loadedDescShard("parity_bip39", 0, "BIP39 Mnemonic Codes\nA structured used in the Error::AmbiguousLanguages variant …\nThe mnemonic can be interpreted as multiple languages. Use …\nEntropy was not a multiple of 32 bits or between 128-256n …\nMnemonic has a word count that is not a multiple of 6.\nThe English language.\nA BIP39 error.\nThe mnemonic has an invalid checksum.\nLanguage to be used for the mnemonic phrase.\nA mnemonic code.\nMnemonic contains an unknown word. Error contains the …\nThe list of supported languages. Language support is …\nPresents the possible languages in the form of a slice of …\nReturn checksum value for the Mnemonic.\nGet the index of the word in the word list.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a new English Mnemonic from the given entropy. …\nCreate a new Mnemonic in the specified language from the …\nGenerate a new Mnemonic in English. For the different …\nGenerate a new Mnemonic in the given language. For the …\nGenerate a new Mnemonic in the given language with the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAn iterator over the possible languages.\nGet the language of the Mnemonic.\nDetermine the language of the mnemonic.\nEnsure the content of the Cow is normalized UTF8. …\nParse a mnemonic and detect the language from the enabled …\nParse a mnemonic in the given language.\nParse a mnemonic in normalized UTF8 in the given language.\nParse a mnemonic in normalized UTF8 in the given language …\nParse a mnemonic in normalized UTF8.\nConvert the mnemonic back to the entropy used to generate …\nConvert the mnemonic back to the entropy used to generate …\nConvert to seed bytes.\nConvert to seed bytes with a passphrase in normalized UTF8.\nReturns a vector of the possible languages.\nGet the number of words in the mnemonic.\nReturns an iterator over Mnemonic word indices.\nReturns an iterator over the words of the Mnemonic.\nThe word list for this language.\nReturns an iterator over the words of the Mnemonic.\nGet words from the word list that start with the given …")