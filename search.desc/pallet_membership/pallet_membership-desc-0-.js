searchState.loadedDescShard("pallet_membership", 0, "Membership Module\nThe <code>pallet</code> module in each FRAME pallet hosts the most …\nAutogenerated weights for <code>pallet_membership</code>\nVersion 4.\nMigrate the entire storage of this pallet to a new prefix.\nSome checks for after migration. This can be linked to …\nSome checks prior to migration. This can be linked to …\nRequired origin for adding a member (though can always be …\nAlready a member.\nContains a variant per dispatchable extrinsic that this …\nConfiguration trait of this pallet.\nPhantom member, never used.\nThe <code>Error</code> enum of this pallet.\nThe <code>Event</code> enum of this pallet\nCan be used to configure the genesis state of this pallet.\n<code>Instance1</code> to be used for instantiable pallets defined with …\nOne of the members’ keys changed.\nThe maximum number of members that this membership can …\nThe given member was added; see the transaction for who.\nThe given member was removed; see the transaction for who.\nThe current membership, stored as an ordered Vec.\nThe membership was reset; see the transaction for who the …\nTwo members were swapped; see the transaction for who.\nThe receiver of the signal for when the membership has …\nThe receiver of the signal for when the membership has …\nType alias to <code>Pallet</code>, to be used by <code>construct_runtime</code>.\nNot a member.\nThe <code>Pallet</code> struct, the main type that implements traits …\nThe current prime member, if one exists.\nRequired origin for setting or resetting the prime member.\nRequired origin for removing a member (though can always …\nRequired origin for resetting membership.\nThe overarching event type.\nRequired origin for adding and removing a member in a …\nToo many members.\nWeight information for extrinsics in this pallet.\nAdd a member <code>who</code> to the set.\nAdd a member <code>who</code> to the set.\nSwap out the sending member for some other key <code>new</code>.\nSwap out the sending member for some other key <code>new</code>.\nRemove the prime member if it exists.\nRemove the prime member if it exists.\nAuto-generated docs-only module listing all defined …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nImplementation uses a parameter type so calling is …\nThe current membership, stored as an ordered <code>Vec</code>.\nCreate a call with the variant <code>add_member</code>.\nCreate a call with the variant <code>change_key</code>.\nCreate a call with the variant <code>clear_prime</code>.\nCreate a call with the variant <code>remove_member</code>.\nCreate a call with the variant <code>reset_members</code>.\nCreate a call with the variant <code>set_prime</code>.\nCreate a call with the variant <code>swap_member</code>.\nThe current prime member, if one exists.\nRemove a member <code>who</code> from the set.\nRemove a member <code>who</code> from the set.\nChange the membership to a new set, disregarding the …\nChange the membership to a new set, disregarding the …\nSet the prime member. Must be a current member.\nSet the prime member. Must be a current member.\nAuto-generated docs-only module listing all (public and …\nSwap out one member <code>remove</code> for another <code>add</code>.\nSwap out one member <code>remove</code> for another <code>add</code>.\nAdd a member <code>who</code> to the set.\nSwap out the sending member for some other key <code>new</code>.\nRemove the prime member if it exists.\nRemove a member <code>who</code> from the set.\nChange the membership to a new set, disregarding the …\nSet the prime member. Must be a current member.\nSwap out one member <code>remove</code> for another <code>add</code>.\nThe current membership, stored as an ordered Vec.\nThe current prime member, if one exists.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWeights for <code>pallet_membership</code> using the Substrate node and …\nWeight functions needed for <code>pallet_membership</code>.\nStorage: <code>TechnicalMembership::Members</code> (r:1 w:1) Proof: …\nStorage: <code>TechnicalMembership::Members</code> (r:1 w:1) Proof: …\nStorage: <code>TechnicalMembership::Prime</code> (r:0 w:1) Proof: …\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nStorage: <code>TechnicalMembership::Members</code> (r:1 w:1) Proof: …\nStorage: <code>TechnicalMembership::Members</code> (r:1 w:1) Proof: …\nStorage: <code>TechnicalMembership::Members</code> (r:1 w:0) Proof: …\nStorage: <code>TechnicalMembership::Members</code> (r:1 w:1) Proof: …")