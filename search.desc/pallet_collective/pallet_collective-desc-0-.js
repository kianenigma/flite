searchState.loadedDescShard("pallet_collective", 0, "Collective system: Members of a set of account IDs can …\nDefault voting strategy when a member is inactive.\nIt has been condoned by a single member of the collective.\nA number of members.\nIt has been condoned by a given number of members of the …\nFirst see if yes vote are over majority of the whole …\nSet the prime member’s vote as the default vote.\nSimple index type for proposal counting.\nOrigin for the collective module.\nInfo for keeping track of a motion being voted on.\nDummy to manage the fact we have instancing.\nGet the default voting strategy, given:\nEnsure that the origin <code>o</code> represents at least <code>n</code> members. …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe <code>pallet</code> module in each FRAME pallet hosts the most …\nAutogenerated weights for <code>pallet_collective</code>\nVersion 4.\nMigrate the entire storage of this pallet to a new prefix.\nSome checks for after migration. This can be linked to …\nSome checks prior to migration. This can be linked to …\nMembers are already initialized!\nA motion was approved by the required threshold.\nContains a variant per dispatchable extrinsic that this …\nA proposal was closed because its threshold was reached or …\nConfiguration trait of this pallet.\nDefault vote strategy of this collective.\nA motion was not approved by the required threshold.\nDuplicate proposals not allowed\nDuplicate vote ignored\nThe <code>Error</code> enum of this pallet.\nThe <code>Event</code> enum of this pallet\nA motion was executed; result will be <code>Ok</code> if it returned …\nCan be used to configure the genesis state of this pallet.\n<code>Instance1</code> to be used for instantiable pallets defined with …\nThe maximum number of members supported by the pallet. …\nThe maximum weight of a dispatch call that can be proposed …\nMaximum number of proposals allowed to be active in …\nIt has been condoned by a single member of the collective.\nA single member did some action; result will be <code>Ok</code> if it …\nThe current members of the collective. This is stored …\nIt has been condoned by a given number of members of the …\nType alias to <code>Pallet</code>, to be used by <code>construct_runtime</code>.\nThe time-out for council motions.\nAccount is not a member\nOrigin for the collective pallet.\nThe <code>Pallet</code> struct, the main type that implements traits …\nThe prime member that helps determine the default vote …\nPrime account is not a member\nThe runtime call dispatch type.\nProposals so far.\nProposal must exist\nActual proposal for a given hash, if it’s current.\nThe hashes of the active proposals.\nA motion (given hash) has been proposed (by given account) …\nThe runtime event type.\nThe runtime origin type.\nOrigin allowed to set collective members\nThe close call was made too early, before the end of the …\nThere can only be a maximum of <code>MaxProposals</code> active …\nA motion (given hash) has been voted on by given account, …\nVotes on a given proposal, if it is ongoing.\nWeight information for extrinsics in this pallet.\nMismatched index\nThe given length bound for the proposal was too low.\nThe given weight bound for the proposal was too low.\nDummy to manage the fact we have instancing.\nUpdate the members of the collective. Votes are updated …\nClose a vote that is either approved, disapproved or whose …\nClose a vote that is either approved, disapproved or whose …\nDisapprove a proposal, close, and remove it from the …\nDisapprove a proposal, close, and remove it from the …\nAuto-generated docs-only module listing all defined …\nClose a vote that is either approved, disapproved or whose …\nRemoves a proposal from the pallet, and deposit the …\nExecute immediately when adding a new proposal.\nAdd a new proposal to be voted.\nAdd an aye or nay vote for the member to the given …\nDispatch a proposal from a member using the <code>Member</code> origin.\nDispatch a proposal from a member using the <code>Member</code> origin.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck whether <code>who</code> is a member of the collective.\nCreate a call with the variant <code>close</code>.\nCreate a call with the variant <code>disapprove_proposal</code>.\nCreate a call with the variant <code>execute</code>.\nCreate a call with the variant <code>propose</code>.\nCreate a call with the variant <code>set_members</code>.\nCreate a call with the variant <code>vote</code>.\nAdd a new proposal to either be voted on or executed …\nAdd a new proposal to either be voted on or executed …\nSet the collective’s membership.\nSet the collective’s membership.\nAuto-generated docs-only module listing all (public and …\nAdd an aye or nay vote for the sender to the given …\nAdd an aye or nay vote for the sender to the given …\nClose a vote that is either approved, disapproved or whose …\nDisapprove a proposal, close, and remove it from the …\nDispatch a proposal from a member using the <code>Member</code> origin.\nAdd a new proposal to either be voted on or executed …\nSet the collective’s membership.\nAdd an aye or nay vote for the sender to the given …\nThe current members of the collective. This is stored …\nThe prime member that helps determine the default vote …\nProposals so far.\nActual proposal for a given hash, if it’s current.\nThe hashes of the active proposals.\nVotes on a given proposal, if it is ongoing.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWeights for <code>pallet_collective</code> using the Substrate node and …\nWeight functions needed for <code>pallet_collective</code>.\nStorage: <code>Council::Voting</code> (r:1 w:1) Proof: <code>Council::Voting</code> (…\nStorage: <code>Council::Voting</code> (r:1 w:1) Proof: <code>Council::Voting</code> (…\nStorage: <code>Council::Voting</code> (r:1 w:1) Proof: <code>Council::Voting</code> (…\nStorage: <code>Council::Voting</code> (r:1 w:1) Proof: <code>Council::Voting</code> (…\nStorage: <code>Council::Proposals</code> (r:1 w:1) Proof: …\nStorage: <code>Council::Members</code> (r:1 w:0) Proof: <code>Council::Members</code>…\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nStorage: <code>Council::Members</code> (r:1 w:0) Proof: <code>Council::Members</code>…\nStorage: <code>Council::Members</code> (r:1 w:0) Proof: <code>Council::Members</code>…\nStorage: <code>Council::Members</code> (r:1 w:1) Proof: <code>Council::Members</code>…\nStorage: <code>Council::Members</code> (r:1 w:0) Proof: <code>Council::Members</code>…")