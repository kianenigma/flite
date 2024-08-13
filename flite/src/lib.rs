//! FRAME, but opinionated af.
//!
//! > This is an experimental library, build on top of [`frame-system`]
//!
//! ## Overview
//!
//! - [ ] Provide many pallets together, a `super-pallet` system.
//!     - Timestamp
//!     - Randomness
//!     - Aura
//!     - Authorship
//! - [ ] More helper function
//! - [ ] Less Generic types: No `T::BlockNumberFor`, No `T::AccountId`, No `RuntimeOrigin`.
//! - [ ] Parachain ready
//!
//! ## Realization
//!
//! * `#[pallet::disable_frame_system_supertrait_check]`, the fact that you can build a FRAME pallet
//! that is not reliant on `frame-system`. Our `frame-system` is pretty opinionated, and in a very
//! specific way.
//! * _Constrained associated types in Rust_.
//! * `derive_impl` outside of the pallet context.
//! * You *don't need* a runtime template.
//!
//! Note: you only parameterize `flite_system` in runtime, and you guarantee to not parameterize any
//! other pallet. This is the underlying premise of this tool. We could wrap this with a further
//! macro for you at the runtime level.
//!
//!
//! ## Aux Tools
//!
//! - cargo-generate
//!
//! ## Dependencies
//!
//! This work is dependent on the following PR(s)
//! - https://github.com/paritytech/polkadot-sdk/pull/5246
#![cfg_attr(not(feature = "std"), no_std)]

pub use flite_system::FliteConfigurations;
use polkadot_sdk::{self as psdk, polkadot_sdk_frame as frame};

/// The opinionated types that we dictate.
/// [`polkadot_sdk::polkadot_sdk_frame::runtime::types_common`] already defined a lot of such types,
/// so we re-use them as much as possible.
pub mod types {
	use super::*;
	pub use frame::runtime::types_common::{AccountId, BlockNumber, BlockOf};

	pub type Balance = u128;
	pub type Moment = u64;
	pub type AuraId = psdk::sp_consensus_aura::sr25519::AuthorityId;
}

/// Default configurations for the pallets used.
pub mod default_configs {
	use super::*;
	use frame::{arithmetic::Perbill, deps::frame_support::register_default_impl, prelude::*};
	use frame_system::limits::{BlockLength, BlockWeights};
	use psdk::{frame_support::weights::constants::RocksDbWeight, pallet_balances::AccountData};

	pub struct RuntimeBlockWeights<F: FliteConfigurations>(core::marker::PhantomData<F>);
	impl<F: FliteConfigurations> Get<BlockWeights> for RuntimeBlockWeights<F> {
		fn get() -> BlockWeights {
			// TODO: hypothetically, we should use very safe and sane and audited values here, but
			// for now we go with a simple model.
			BlockWeights::with_sensible_defaults(F::BlockWeight::get(), Perbill::one())
		}
	}

	pub struct RuntimeBlockLength<F: FliteConfigurations>(core::marker::PhantomData<F>);
	impl<F: FliteConfigurations> Get<BlockLength> for RuntimeBlockLength<F> {
		fn get() -> BlockLength {
			BlockLength::max(F::BlockLength::get())
		}
	}

	pub struct FliteFrameSystem<F>(core::marker::PhantomData<F>);

	// TODO: we could define our own `trait FliteFrameSystemDefaultConfig`, but the one provided in
	// `frame_system::DefaultConfig` is good enough.
	#[register_default_impl(FliteFrameSystem)]
	impl<F: FliteConfigurations> frame_system::DefaultConfig for FliteFrameSystem<F> {
		/// Flite might decide to force its users to
		type SystemWeightInfo = weights::FliteFrameSystemWeights;
		type SS58Prefix = F::Ss58;
		type Version = F::Version;
		type BlockWeights = RuntimeBlockWeights<F>;
		type BlockLength = RuntimeBlockLength<F>;

		// opinionated
		type AccountId = types::AccountId;
		type AccountData = AccountData<types::Balance>;
		type DbWeight = RocksDbWeight;
		type Nonce = u32;
		type Hash = psdk::sp_core::hash::H256;
		type Hashing = psdk::sp_runtime::traits::BlakeTwo256;

		// TODO: this is super pesky and causes very hard compiler errors, if we add the second
		// parameter wrt. account index. Make sure to elaborate on this.
		type Lookup = psdk::sp_runtime::traits::AccountIdLookup<Self::AccountId, ()>;

		// TODO: For now we don't set them, but if need be, you can let the user configure them
		// via `F`, hopefully in a simpler manner.
		type MaxConsumers = psdk::frame_support::traits::ConstU32<128>;
		type BaseCallFilter = psdk::frame_support::traits::Everything;
		type BlockHashCount = psdk::frame_support::traits::ConstU32<256>;
		type OnSetCode = ();
		type SingleBlockMigrations = ();
		type MultiBlockMigrator = ();
		type PreInherents = ();
		type PostInherents = ();
		type PostTransactions = ();
		type OnNewAccount = ();
		type OnKilledAccount = ();

		// injected
		#[inject_runtime_type]
		type RuntimeEvent = ();
		#[inject_runtime_type]
		type RuntimeOrigin = ();
		#[inject_runtime_type]
		type RuntimeCall = ();
		#[inject_runtime_type]
		type RuntimeTask = ();
		#[inject_runtime_type]
		type PalletInfo = ();
	}

	/// Default for [`polkadot_sdk::pallet_timestamp`]
	///
	/// We want the `FliteTimestamp` to be generic over `F: FliteConfigurations`.
	/// The default `pallet_timestamp::DefaultConfig` is constrained by
	/// `frame_system::DefaultConfig`, which itself relies on `<F: FliteConfigurations>`, so it is
	/// all a dead end, and we need to define our own `trait FliteTimestampDefaultConfig`. This is
	/// more or less a copy of `pallet_timestamp::DefaultConfig`, and that is fine.
	///
	/// See: https://paritytech.github.io/polkadot-sdk/master/pallet_timestamp/pallet/trait.DefaultConfig.html
	pub struct FliteTimestamp<F: FliteConfigurations>(core::marker::PhantomData<F>);

	pub trait FliteTimestampDefaultConfig {
		/// See [`polkadot_sdk::pallet_timestamp::Config::Moment`].
		type Moment;
		/// See [`polkadot_sdk::pallet_timestamp::Config::OnTimeStampSet`].
		type OnTimestampSet;
		/// See [`polkadot_sdk::pallet_timestamp::Config::MinimumPeriod`].
		type MinimumPeriod;
		/// See [`polkadot_sdk::pallet_timestamp::Config::WeightInfo`].
		type WeightInfo;
	}

	#[deprecated(
		note = "This is a placeholder type, you need to replace it with the name assigned to
	`pallet_aura`."
	)]
	pub struct ReplaceWithAuraPalletName;

	#[register_default_impl(FliteTimestamp)]
	impl<F: FliteConfigurations> FliteTimestampDefaultConfig for FliteTimestamp<F> {
		type Moment = types::Moment;
		// We can use
		type MinimumPeriod = F::BlockTime;
		type WeightInfo = weights::FliteTimestampWeights;
		// #[inject_custom_runtime_type("Aura")] -> should replace it with `Type OnTimestampSet =
		// Aura` in the runtime.
		#[allow(deprecated)]
		type OnTimestampSet = ReplaceWithAuraPalletName;
	}

	pub struct FliteAura<F: FliteConfigurations>(core::marker::PhantomData<F>);

	/// A `flite` representative of [`pallet_aura::Config`].
	///
	/// This merely exists because `pallet_aura` itself doesn't have
	/// `#[pallet::config(with_default)]`. Although, as we established for [`FliteTimestamp`], even
	/// if it would, it would have not been useful for this case.
	///
	/// We drop all most trait bounds, as we test it and we are professional.
	pub trait FliteAuraDefaultConfig {
		/// See [`polkadot_skd::pallet_aura::Config::AuthorityId`].
		type AuthorityId;
		/// See [`polkadot_skd::pallet_aura::Config::MaxAuthorities`].
		type MaxAuthorities;
		/// See [`polkadot_skd::pallet_aura::Config::DisabledValidators`].
		type DisabledValidators;
		/// See [`polkadot_skd::pallet_aura::Config::AllowMultipleBlocksPerSlot`].
		type AllowMultipleBlocksPerSlot;
		/// See [`polkadot_skd::pallet_aura::Config::SlotDuration`].
		type SlotDuration;
	}

	#[register_default_impl(FliteAura)]
	impl<F: FliteConfigurations> FliteAuraDefaultConfig for FliteAura<F> {
		type AuthorityId = types::AuraId;
		type DisabledValidators = ();
		type MaxAuthorities = psdk::frame_support::traits::ConstU32<1024>;
		// NOTE: in a parachain, this has to be `true`.
		type AllowMultipleBlocksPerSlot = psdk::frame_support::traits::ConstBool<false>;
		type SlotDuration = F::BlockTime;
	}

	pub struct FliteBalances<F: FliteConfigurations>(core::marker::PhantomData<F>);
	pub trait FliteBalancesDefaultConfig {
		type RuntimeHoldReason;
		type RuntimeFreezeReason;
		type WeightInfo;
		type Balance;
		type DustRemoval;
		type ExistentialDeposit;
		type AccountStore;
		type ReserveIdentifier;
		type FreezeIdentifier;
		type MaxLocks;
		type MaxReserves;
		type MaxFreezes;
	}

	#[deprecated(
		note = "This is a placeholder type, you need to replace it with the name assigned to
		`frame_system`."
	)]
	pub struct ReplaceWithFrameSystemPalletName;
	#[register_default_impl(FliteBalances)]
	impl<F: FliteConfigurations> FliteBalancesDefaultConfig for FliteBalances<F> {
		type RuntimeHoldReason = u8;
		type RuntimeFreezeReason = u8;
		type WeightInfo = weights::FliteDbWeights;
		type Balance = types::Balance;
		type ExistentialDeposit = F::MinimumBalance;
		type DustRemoval = ();
		#[allow(deprecated)]
		type AccountStore = ReplaceWithAuraPalletName;
		// TODO: must be RuntimeFreezeReason
		type FreezeIdentifier = ();

		// Flite wants to provide only Hold and Freezes, so no reserves or locks are allowed.
		type MaxFreezes = ConstU32<128>;

		type MaxLocks = ();
		type MaxReserves = ();
		type ReserveIdentifier = ();
	}
}

/// Flite provides a set of weights for its users. Technically, this should be something like a
/// well-benchmarked, audited set of weights that are safe to use.
///
/// For now, given that this is just for demonstration purposes, I will use the fact that all FRAME
/// pallet weights are implemented for `()`.
pub mod weights {
	pub type FliteDbWeights = ();
	pub type FliteFrameSystemWeights = ();
	pub type FliteTimestampWeights = ();
	pub type FliteAuraWeights = ();
}

pub mod native_currency {
	use super::*;
	use frame::{
		prelude::*,
		traits::fungible::{self, *},
	};

	/// Trait to give you access to the advance underlying FRAME currency primitives. You can also
	/// import all of these manually into your trait, this is merely a syntactic sugar.
	pub trait Advance:
		fungible::Inspect<types::AccountId, Balance = types::Balance>
		+ fungible::Mutate<types::AccountId>
		+ fungible::InspectHold<types::AccountId, Reason = u8>
		+ fungible::MutateHold<types::AccountId>
	{
	}

	/// A simple native currency abstraction.
	pub struct Simple<T: flite_system::Config>(core::marker::PhantomData<T>);
	impl<T: flite_system::Config> Simple<T> {
		/// Flite can go down the path of providing its own wrappers around the FRAME advanced
		/// currency system.
		pub fn balance_of(account: &types::AccountId) -> types::Balance {
			<psdk::pallet_balances::Pallet<T> as fungible::Inspect<types::AccountId>>::balance(
				account,
			)
		}

		pub fn transfer(
			from: &types::AccountId,
			to: &types::AccountId,
			amount: types::Balance,
		) -> DispatchResult {
			<psdk::pallet_balances::Pallet<T> as fungible::Mutate<types::AccountId>>::transfer(
				from,
				to,
				amount,
				frame::traits::tokens::Preservation::Expendable,
			)
			.map(|_| ())
		}

		pub fn lock(from: &types::AccountId, amount: types::Balance) -> DispatchResult {
			<psdk::pallet_balances::Pallet<T> as fungible::MutateHold<types::AccountId>>::hold(
				&0u8, from, amount,
			)
		}
	}
}

#[frame::pallet]
pub mod flite_system {
	use super::*;
	use frame::prelude::*;

	/// The master `flite` configurations. This is the only thing that the user is meant to
	/// override.
	pub trait FliteConfigurations {
		type BlockWeight: Get<Weight>;
		type BlockTime: Get<types::Moment>;
		type BlockLength: Get<u32>;
		type MinimumBalance: Get<types::Balance>;
		type Ss58: Get<u16>;
		type Version: Get<psdk::sp_version::RuntimeVersion>;
	}

	/// Flite puts a lot of restrictions on what types are fed to account Id. All of this is fine as
	/// long as the users use the provided [`config_preludes::FliteFrameSystem`].
	#[pallet::config]
	pub trait Config:
		polkadot_sdk::frame_system::Config<AccountId = types::AccountId>
		+ psdk::pallet_timestamp::Config
		+ psdk::pallet_aura::Config
		+ psdk::pallet_balances::Config<
			Balance = types::Balance,
			RuntimeHoldReason = u8,
			RuntimeFreezeReason = u8,
		>
	{
	}

	#[pallet::pallet]
	pub struct Pallet<T>(_);

	impl<T: Config> Pallet<T> {
		pub fn block_author() {
			todo!(
				"A useful helper function for flite to provide. Think of similar helper functions"
			);
		}
	}

	#[pallet::hooks]
	impl<T: Config> Hooks<BlockNumberFor<T>> for Pallet<T> {
		fn integrity_test() {
			// Important for this pallet to have triple-A integrity checks to make sure all of the
			// configs are correct. Esp. If the user overrides some but not all, this can be quite
			// hairy.
		}
	}
}
