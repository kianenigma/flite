searchState.loadedDescShard("pallet_babe", 0, "Consensus extension module for BABE consensus. Collects …\nA Babe authority identifier. Necessarily equivalent to the …\nRandomness produced semi-freshly with each block, but …\nTrigger an epoch change, if any should take place.\nBABE equivocation offence report.\nBABE equivocation offence report system.\nA type signifying to BABE that an external trigger for …\nRandomness produced semi-freshly with each block, but …\nRandomness usable by on-chain code that <strong>does not depend</strong> …\nRandomness usable by consensus protocols that <strong>depend</strong> upon …\nA type signifying to BABE that it should perform epoch …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe authority that produced the equivocation.\nThe <code>pallet</code> module in each FRAME pallet hosts the most …\nThe session index in which the incident happened.\nA babe slot in which this incident happened.\nTrigger an epoch change, if any should take place. This …\nThe size of the validator set at the time of the offence.\nSomething that can return the storage prefix of the <code>Babe</code> …\nA storage migration that adds the current epoch …\nThis field should always be populated during block …\nCurrent epoch authorities.\nContains a variant per dispatchable extrinsic that this …\nConfiguration trait of this pallet.\nCurrent slot number.\nA way to check whether a given validator is disabled and …\nA given equivocation report is valid but already …\nBABE requires some logic to be triggered on every block to …\nThe configuration for the current epoch. Should never be …\nThe amount of time, in slots, that each epoch should last. …\nCurrent epoch index.\nThe block numbers when the last and current epoch have …\nThe equivocation handling subsystem, defines methods to …\nThe <code>Error</code> enum of this pallet.\nThe expected average block time at which BABE should be …\nCan be used to configure the genesis state of this pallet.\nThe slot at which the first epoch actually started. This …\nTemporary value (cleared at block finalization) which is …\nSubmitted configuration is invalid.\nAn equivocation proof provided as part of an equivocation …\nA key ownership proof provided as part of an equivocation …\nThe proof of key ownership, used for validating …\nHow late the current block is compared to its parent.\nMax number of authorities allowed\nThe maximum number of nominators for each validator.\nType alias to <code>Pallet</code>, to be used by <code>construct_runtime</code>.\nNext epoch authorities.\nThe configuration for the next epoch, <code>None</code> if the config …\nNext epoch randomness.\nThe BABE Pallet\nPending epoch configuration change that will be applied …\nThe epoch randomness for the <em>current</em> epoch.\nRandomness under construction.\nA list of the last 100 skipped epochs and the …\nTWOX-NOTE: <code>SegmentIndex</code> is an increasing integer, so this …\nHelper for weights computations\nPublic function to access author_vrf_randomness storage.\nPublic function to access authorities storage.\nProduces information about the current epoch.\nFinds the start slot of the current epoch.\nPublic function to access current_slot storage.\nAuto-generated docs-only module listing all defined …\nDANGEROUS: Enact an epoch change. Should be done on every …\nPublic function to access epoch_config storage.\nPublic function to access epoch_index storage.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nPublic function to access genesis_slot storage.\nPublic function to access initialized storage.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nPublic function to access lateness storage.\nCreate a call with the variant <code>plan_config_change</code>.\nCreate a call with the variant <code>report_equivocation</code>.\nCreate a call with the variant <code>report_equivocation_unsigned</code>…\nProduces information about the next epoch (which was …\nReturn the <em>best guess</em> block number, at which the next …\nBlock finalization\nInitialization\nPlan an epoch config change. The epoch config change is …\nPlan an epoch config change. The epoch config change is …\nPublic function to access randomness storage.\nReport authority equivocation/misbehavior. This method …\nReport authority equivocation/misbehavior. This method …\nReport authority equivocation/misbehavior. This method …\nReport authority equivocation/misbehavior. This method …\nDetermine whether an epoch change should take place at …\nPublic function to access skipped_epochs storage.\nDetermine the BABE slot duration based on the Timestamp …\nAuto-generated docs-only module listing all (public and …\nSubmits an extrinsic to report an equivocation. This …\nPlan an epoch config change. The epoch config change is …\nReport authority equivocation/misbehavior. This method …\nReport authority equivocation/misbehavior. This method …\nThis field should always be populated during block …\nCurrent epoch authorities.\nCurrent slot number.\nThe configuration for the current epoch. Should never be …\nCurrent epoch index.\nThe block numbers when the last and current epoch have …\nThe slot at which the first epoch actually started. This …\nTemporary value (cleared at block finalization) which is …\nHow late the current block is compared to its parent.\nNext epoch authorities.\nThe configuration for the next epoch, <code>None</code> if the config …\nNext epoch randomness.\nPending epoch configuration change that will be applied …\nThe epoch randomness for the <em>current</em> epoch.\nRandomness under construction.\nA list of the last 100 skipped epochs and the …\nTWOX-NOTE: <code>SegmentIndex</code> is an increasing integer, so this …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.")