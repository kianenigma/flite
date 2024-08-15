searchState.loadedDescShard("pallet_fast_unstake", 0, "Made with <em>Substrate</em>, for <em>Polkadot</em>.\nAccountId type used by the staking system.\nBalance type used by the staking system.\nMeans of converting Currency to VoteWeight.\nThe pallet hooks trait. This is merely an umbrella trait …\nThe logging target of this pallet.\nA generic representation of a staking implementation.\nTotal active portion of a staker’s <code>Stake</code>, <code>Err</code> if not a …\nBond (lock) <code>value</code> of <code>who</code>’s balance, while forwarding any …\nBond some extra amount in <code>who</code>’s free balance against the …\nNumber of eras that staked funds must remain bonded for.\nChill <code>who</code>.\nThe current era index.\nThe ideal number of active validators.\nWhether or not there is an ongoing election.\nForce a current staker to become completely unstaked, …\nReturns whether a staker is FULLY unbonding, <code>Err</code> if not a …\nCheck the integrity of this pallet’s configuration.\nChecks whether an account <code>staker</code> has been exposed in an …\nReturns whether a staker is unbonding, <code>Err</code> if not a staker …\nChecks whether or not this is a validator account.\nChecks whether the staker is a virtual account.\nThe minimum amount required to bond in order to set …\nThe minimum amount required to bond in order to set …\nHave <code>who</code> nominate <code>validators</code>.\nGet the nominations of a stash, if they are a nominator, …\nImplementing this function on a pallet allows you to …\nBlock finalization hook. This is called at the very end of …\nHook to consume a block’s idle time. This will run when …\nBlock initialization hook. This is called at the very …\nA hook to run logic after inherent application.\nHook executed when a code change (aka. a “runtime upgrade…\nThe <code>pallet</code> module in each FRAME pallet hosts the most …\nSet the reward destination for the ledger associated with …\nReturns the fraction of the slash to be rewarded to …\nReturns the <code>Stake</code> of <code>who</code>.\nReturn a stash account that is controlled by a <code>controller</code>.\nReturn the status of the given staker, <code>Err</code> if not staked …\nTotal stake of a staker, <code>Err</code> if not a staker.\nTypes used in the Fast Unstake pallet.\nSchedule a portion of the active bonded balance to be …\nAutogenerated weights for <code>pallet_fast_unstake</code>\nUnlock any funds schedule to unlock before or at the …\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nThe provided un-staker is already in Head, and cannot …\nThe bonded account has already been queued.\nA batch was partially checked for the given eras, but the …\nA batch of a given size was terminated.\nBatch size.\nContains a variant per dispatchable extrinsic that this …\nThe call is not allowed at this point because the pallet …\nConfiguration trait of this pallet.\nThe origin that can control this pallet, in other words …\nThe currency used for deposits.\nDeposit to take for unstaking, to make sure we’re able …\nNumber of eras to check per block.\nThe <code>Error</code> enum of this pallet.\nThe <code>Event</code> enum of this pallet\nThe current “head of the queue” being unstaked.\nAn internal error happened. Operations will be paused now.\nMaximum value for <code>ErasToCheckPerBlock</code>, checked in …\nType alias to <code>Pallet</code>, to be used by <code>construct_runtime</code>.\nThe provided Controller account was not found.\nThe bonded account has active unlocking chunks.\nThe provided un-staker is not in the <code>Queue</code>.\nThe <code>Pallet</code> struct, the main type that implements traits …\nThe map of all accounts wishing to be unstaked.\nThe overarching event type.\nA staker was slashed for requesting fast-unstake whilst …\nThe access to staking functionality.\nA staker was unstaked.\nThe weight information of this pallet.\nControl the operation of this pallet.\nControl the operation of this pallet.\nDeregister oneself from the fast-unstake.\nDeregister oneself from the fast-unstake.\nAuto-generated docs-only module listing all defined …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a call with the variant <code>control</code>.\nCreate a call with the variant <code>deregister</code>.\nCreate a call with the variant <code>register_fast_unstake</code>.\nRegister oneself for fast-unstake.\nRegister oneself for fast-unstake.\nAuto-generated docs-only module listing all (public and …\nControl the operation of this pallet.\nDeregister oneself from the fast-unstake.\nRegister oneself for fast-unstake.\nNumber of eras to check per block.\nThe current “head of the queue” being unstaked.\nThe map of all accounts wishing to be unstaked.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMaximum number of eras that we might check for a single …\nAn unstake request.\nThe list of eras for which they have been checked.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThis list of stashes are being processed in this request, …\nWeights for <code>pallet_fast_unstake</code> using the Substrate node …\nWeight functions needed for <code>pallet_fast_unstake</code>.\nStorage: <code>FastUnstake::ErasToCheckPerBlock</code> (r:0 w:1) Proof: …\nStorage: <code>FastUnstake::ErasToCheckPerBlock</code> (r:1 w:0) Proof: …\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nStorage: <code>FastUnstake::ErasToCheckPerBlock</code> (r:1 w:0) Proof: …\nStorage: <code>FastUnstake::ErasToCheckPerBlock</code> (r:1 w:0) Proof: …\nStorage: <code>FastUnstake::ErasToCheckPerBlock</code> (r:1 w:0) Proof: …")