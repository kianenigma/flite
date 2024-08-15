searchState.loadedDescShard("pallet_nis", 0, "Non-Interactive Staking (NIS) Pallet\nSetup the empty genesis state for benchmarking.\nCreate the counterpart asset. Should panic on error.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe <code>pallet</code> module in each FRAME pallet hosts the most …\nAutogenerated weights for <code>pallet_nis</code>\nThe receipt is already communal.\nThere are enough funds for what is required.\nThe receipt is already private.\nThe amount of the bid is less than the minimum allowed.\nThe base period for the duration queues. This is the …\nA single bid, an item of a <em>queue</em> in <code>Queues</code>.\nA bid was dropped from a queue because of another, more …\nA bid was successfully placed.\nA bid was successfully removed (before being accepted).\nThe queue for the bid’s duration is full and the amount …\nContains a variant per dispatchable extrinsic that this …\nConfiguration trait of this pallet.\nThe accounting system for the fungible counterpart tokens.\nThe system to convert an overall proportion of issuance …\nCurrency type that this works on.\nJust the <code>Balance</code> type; we have this item to allow us to …\nUnbalanced handler to account for funds created (in case …\nThe duration is the bid is greater than the number of …\nThe duration of the bid is less than one.\nThe <code>Error</code> enum of this pallet.\nThe <code>Event</code> enum of this pallet\nPortion of the queue which is free from ordering and just …\nOrigin required for auto-funding the deficit.\nAn automatic funding of the deficit was made.\nA reason for the NIS pallet placing a hold on funds.\nThe issuance to ignore. This is subtracted from the …\nThe number of blocks between consecutive attempts to …\nIssuance information returned by <code>issuance()</code>.\nA bid was accepted. The balance may not be released until …\nThe operation would result in a receipt worth an …\nThe maximum amount of bids that can consolidated into …\nMaximum number of items that may be in each duration queue.\nThe minimum amount of funds that may be placed in a bid. …\nThe minimum amount of funds which may intentionally be …\nType alias to <code>Pallet</code>, to be used by <code>construct_runtime</code>.\nThe NIS Pallet has reserved it for a non-fungible receipt.\nBond not yet at expiry date.\nNot the owner of the receipt.\nThe <code>Pallet</code> struct, the main type that implements traits …\nThe treasury’s pallet id, used for deriving its …\nThe portion supplied is beyond the value of the receipt.\nNumber of duration queues in total. This sets the maximum …\nThe totals of items and balances within each queue. Saves …\nThe queues of bids. Indexed by duration (in <code>Period</code>s).\nAn index for a receipt.\nInformation representing a receipt.\nThe currently outstanding receipts, indexed according to …\nOverarching event type.\nOverarching hold reason.\nSummary information over the general state.\nOverall information package on the outstanding receipts.\nThe target sum of all receipts’ proportions.\nThe maximum proportion which may be thawed and the period …\nAn receipt has been (at least partially) thawed.\nThe thaw throttle has been reached for this period.\nA receipt was transferred.\nNot enough funds are held to pay out.\nThe given bid for retraction is not found.\nReceipt index is unknown.\nInformation on runtime weights.\nThe account ID of the reserves.\nThe amount bid.\nMake a private receipt communal and create fungible …\nMake a private receipt communal and create fungible …\nAuto-generated docs-only module listing all defined …\nThe effective total issuance, hypothetically if all …\nThe time after which this receipt can be thawed.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nEnsure we have sufficient funding for all potential …\nEnsure we have sufficient funding for all potential …\nThe balance held by this pallet instance together with the …\nThe total number of receipts created so far.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns information on the issuance within the system.\nReturns information on the issuance within the system\nThe current thaw period’s beginning.\nCreate a call with the variant <code>communify</code>.\nCreate a call with the variant <code>fund_deficit</code>.\nCreate a call with the variant <code>place_bid</code>.\nCreate a call with the variant <code>privatize</code>.\nCreate a call with the variant <code>retract_bid</code>.\nCreate a call with the variant <code>thaw_communal</code>.\nCreate a call with the variant <code>thaw_private</code>.\nThe (non-ignored) issuance in the system, not including …\nThe account to whom this receipt belongs and the amount of …\nPlace a bid.\nPlace a bid.\nMake a communal receipt private and burn fungible …\nMake a communal receipt private and burn fungible …\nThe proportion of the effective total issuance.\nThe total proportion over all outstanding receipts.\nThe total amount of funds on hold for receipts. This doesn…\nThe amount needed to be accessible to this pallet in case …\nRetract a previously placed bid.\nRetract a previously placed bid.\nAuto-generated docs-only module listing all (public and …\nReduce or remove an outstanding receipt, placing the …\nReduce or remove an outstanding receipt, placing the …\nReduce or remove an outstanding receipt, placing the …\nReduce or remove an outstanding receipt, placing the …\nThe amount (as a proportion of ETI) which has been thawed …\nThe owner of the bid.\nThe amount of funds which were debited from the owner.\nThe amount by which the owner was credited.\nIf <code>true</code> then the receipt is done.\nThe block number at which the receipt may be thawed.\nThe identity of the receipt.\nThe identity of the receipt.\nThe proportion of the effective total issuance which the …\nThe proportion of the effective total issuance by which …\nThe owner of the receipt.\nThe owner.\nMake a private receipt communal and create fungible …\nEnsure we have sufficient funding for all potential …\nPlace a bid.\nMake a communal receipt private and burn fungible …\nRetract a previously placed bid.\nReduce or remove an outstanding receipt, placing the …\nReduce or remove an outstanding receipt, placing the …\nThe totals of items and balances within each queue. Saves …\nThe queues of bids. Indexed by duration (in <code>Period</code>s).\nThe currently outstanding receipts, indexed according to …\nSummary information over the general state.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWeights for <code>pallet_nis</code> using the Substrate node and …\nWeight functions needed for <code>pallet_nis</code>.\nStorage: <code>Nis::Receipts</code> (r:1 w:1) Proof: <code>Nis::Receipts</code> (…\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nStorage: <code>Nis::Summary</code> (r:1 w:0) Proof: <code>Nis::Summary</code> (…\nCalls <code>U::from(self)</code>.\nStorage: <code>Nis::Queues</code> (r:1 w:1) Proof: <code>Nis::Queues</code> (…\nStorage: <code>Nis::Queues</code> (r:1 w:1) Proof: <code>Nis::Queues</code> (…\nStorage: <code>Nis::Receipts</code> (r:1 w:1) Proof: <code>Nis::Receipts</code> (…\nStorage: <code>Nis::Receipts</code> (r:0 w:1) Proof: <code>Nis::Receipts</code> (…\nStorage: <code>Nis::Queues</code> (r:1 w:1) Proof: <code>Nis::Queues</code> (…\nStorage: <code>Nis::Summary</code> (r:1 w:1) Proof: <code>Nis::Summary</code> (…\nStorage: <code>Nis::Queues</code> (r:1 w:1) Proof: <code>Nis::Queues</code> (…\nStorage: <code>Nis::Receipts</code> (r:1 w:1) Proof: <code>Nis::Receipts</code> (…\nStorage: <code>Nis::Receipts</code> (r:1 w:1) Proof: <code>Nis::Receipts</code> (…")