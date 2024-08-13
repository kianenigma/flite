//! FLITE / FRAME-LITE
//!
//! Polkadot-SDK's FRAME, but low on the dose of complexity, therefore lite.
//!
//! This is a an experimental library meant only for demonstration purposes, and is not meant for
//! production use. Yet, it might influence the decision making to those who want to build
//! **reusable** FRAME-based libraries.
//!
//! Put differently, this crate demonstrates a number of techniques that can be used to build more
//! opinionated, yet simpler variants of FRAME.
//!
//! ## Techniques
//!
//! The main techniques used in this library are as follows:
//!
//! ### NOT Relying on `frame_system` (and `cumulus::parachain_system`).
//!
//! FRAME comes with an underrated macro: `#[pallet::disable_frame_system_supertrait_check]`. This
//! macro enables a pallet to rely on a pallet other than `frame_system`. This opens the door for a
//! team to write an "opinionated flavor" of `frame_system` for their own use.
//!
//! In this crate, we introduce [`flite_system`], an opinionated alternative to
//! [`polkadot_sdk::frame_system`].
//!
//! ### Constrained Associated Types
//!
//! Constrained associated types are a powerful and an underrated feature of Rust, and they are
//! crucially important for FRAME.
//!
//! FRAME expresses the majority of its flexibility through associated types. Constrained associated
//! types are then therefore a way for one to express limitations on those associated types.
//!
//! The downside of this would be that the users would have less flexibility. Yet, the benefit would
//! be that the syntax would be less generic, and more concrete.
//!
//! We argue that for a starter FRAME template, and for beginner users it is much easier to work
//! with concrete types for common concepts like `AccountId` and `Balance`, rather than generic
//! variants.
//!
//! ```rust
//! trait Currency {
//!     type Balance;
//!
//!     fn get() -> Balance {};
//! }
//!
//! /// A pallet that is not constraining `Currency::Balance`, and must always refer to it as
//! trait Config {
//!     type Currency: Currency
//!
//!     fn usage() {
//!         // This pallet doesn't really now what `<Self::Currency as Currency>::Balance` is.
//!         let _: <Self::Currency as Currency>::Balance = T::Currency::get();
//!     }
//! }
//!
//! /// A pallet that is constraining `Currency::Balance`, to JUST `u128`.
//! trait Config {
//!     type Currency: Currency<Balance = u128>;
//!
//!     fn usage() {
//!         // This pallet knows that `Self::Currency::Balance` is `u128`.
//!         let _: u128 = T::Currency::get();
//!     }
//! }
//! ```
//!
//! [`flite_system`] constraints a number of important associated types, to be seen in the example
//! further below.
//!
//! ### Tight Coupling To Our Benefit
//!
//! Generally, [tight
//! coupling](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/reference_docs/frame_pallet_coupling/index.html)
//! is considered a bad thing. Yet, in the context of a library like `flite`, we can use it to our
//! advantage. If we tightly couple [`flite_system`] with a number of pallets, we achieve:
//!
//! * We can express that a runtime can only work if [`flite_system`] and the tightly coupled
//!   pallets are present in it.
//! * We can safely provide a set of default for all the configurations of the tightly coupled
//!   pallets.
//! * We can also express constrains on the configurations as constraints on the associated types,
//!   as explained above.
//!
//! ### Example: `flite_system`
//!
//! With the above context in mind, let's look and analyze [`flite_system::Config`], which puts all
//! of the above practices in one place.
#![doc = docify::embed!("./src/lib.rs", FliteSystemConfigExport)]
//!
//! Notice how `flite` is constraining the `AccountId` to be [`types::AccountId`], the `Balance` to
//! be [`types::Balance`], and even more advance things like `HoldReason`.
//!
//! This means `flite_system` can only be used in a runtime with such constants. More nicely, a
//! pallet using `flite_system` can already be written with these concrete types in mind.
//!
//! ### Simplifying a New Pallet
//!
//! Let's see how now we can simplify the process of writing a new pallet using that relies on
//! [`flite_system`].
//!
//! First, this pallet is indeed declared as such:
#![doc = docify::embed!("../simple-pallet/src/lib.rs", DemonstrationConfig)]
//!
//! This then allows the pallet to be written with concrete types in mind:
//!
//! #### Currency Simplification
//!
//! We also present two ideas on how a simpler currency system can be built on top of the above
//! abstractions. These are discussed in [`native_currency`].
//!
//! First, a pallet can import and use FRAME's currency abstractions in the *old school* way. That
//! is, pull the currency abstractions via `trait Config`:
#![doc = docify::embed!("../simple-pallet/src/lib.rs", Config)]
//!
//! And then use them as such:
#![doc = docify::embed!("../simple-pallet/src/lib.rs", advance_currency_usage)]
//!
//! Note that this already comes with some improvements. This code so far looks just like the normal
//! FRAME code, except there is no trace of the notorious `BalanceOf` type. Moreover, there is no
//! special consideration needed for `RuntimeHoldReason` conversion. `RuntimeHoldReason` is simply a
//! `u8`. All of this is because [`flite_system`] has already constrained these types.
//!
//! `flite` can also provide even simpler, even more opinionated currency abstractions, such as
//! [`native_currency::Simple`]. The usage of such a simple abstraction can look like:
#![doc = docify::embed!("../simple-pallet/src/lib.rs", simple_currency_usage)]
//!
//! ### A Step Further: Defaults For Tightly Coupled Pallets
//!
//! As the final step, `flite` could also simplify the process of runtime configuration, if it could
//! provide defaults for all the pallets that it is tightly coupling itself with.
//!
//! All of these defaults can be audited and guaranteed to work nicely together, as long as none of
//! them is tweaked by the end user. If a mild degree of flexibility is needed, we instead provide a
//! separate, higher level trait that can be used to parameterize all other pallets with.
//!
//! In [`default_configs`], we provide one such example. The end-user entry-point is merely
//! [`default_configs::FliteConfigurations`]. This is one trait that we expect the end user to
//! parameterize for us. Instead of a lot of the technical nitty-gritty details that
//! [`polkadot_sdk::frame_system`] exposes, this trait is meant to be very easy to comprehend to a
//! novice developer.
//!
//! Then, based on `FliteConfigurations`, we provide defaults for each pallet's `Config` traits:
//!
//! - [`struct@default_configs::FliteFrameSystem`]
//! - [`struct@default_configs::FliteTimestamp`]
//! - [`struct@default_configs::FliteAura`]
//! - [`struct@default_configs::FliteBalances`]
//!
//! > These defaults are provided in a format that should be compatible with `FRAME`'s native
//! > `derive_impl` (or the underlying `macro_magic` crate), yet this part is not yet working in
//! > this demo and therefore the runtime file contains a lot of boilerplate.
//!
//! Notice how all of these types are generic over `F`, which is a [`FliteConfigurations`].
//!
//! This technique allows us to retain some degree fo flexibility, and abstract over complicated
//! relationships. For example, (almost) all runtimes have
//! [`polkadot_sdk::pallet_timestamp::Config::MinimumPeriod`] set to half of
//! [`polkadot_sdk::pallet_aura::Config::SlotDuration`]. We abstract over this needless complication
//! by providing one simple configuration to the user [`FliteConfigurations::BlockTime`] (which is
//! what we mean by `SlotDuration`). Under the hood, we take care of providing the correct defaults
//! to each of the aforementioned pallets.
//!
//!
//! ## Dependencies
//!
//! This work is dependent on the following PR(s)
//! - <https://github.com/paritytech/polkadot-sdk/pull/5246>
//!
//! ## Further Ideas
//!
//! - Create abstractions over [`polkadot_sdk::pallet_assets`], and the
//!   [`polkadot_sdk::polkadot_sdk_frame::traits::fungibles`] as well, for example hardcoding the
//!   `AssetId` to be `u32`.
//! - More pallets that are reasonable always needed: `authorship`, `session`, etc.
//! - `flite`, and `flite-parachain`. If one has to be chosen, we care more about parachain.
//! - `flite` can provide a single set of weights that are safe to use in [`weights`].
//! - [`flite_system::Pallet`] can provide further standalone helper functions, such as
//!   [`flite_system::Pallet::block_author`].
//! - `integrity_test` in `flite_system` is super important, as it is the one place where we can
//!   check the configuration of all pallets. For example, the relationship between `BlockTime`,
//!   `SlotDuration` and `MinimumPeriod` can be expressed here. The ability to check these within a
//!   pallet is yet another benefit of tight coupling.
//!
//! ## Reflection
//!
//! - Everything here is backwards compatible, and a developer who is advance can always fallback
//!   into the ADVANCE-FRAME-land.
#![cfg_attr(not(feature = "std"), no_std)]

pub use default_configs::FliteConfigurations;
use polkadot_sdk::{self as psdk, polkadot_sdk_frame as frame};

/// The opinionated types that we dictate.
///
/// [`polkadot_sdk::polkadot_sdk_frame::runtime::types_common`] already defined a lot of such types,
/// so we re-use them as much as possible.
pub mod types {
	use super::*;
	pub use frame::runtime::types_common::{AccountId, BlockNumber, BlockOf};

	pub type Balance = u128;
	pub type Moment = u64;
	pub type AuraId = psdk::sp_consensus_aura::sr25519::AuthorityId;
}

/// Default configurations for the pallets that [`flite_system::Config`] is tightly coupled with.
pub mod default_configs {
	use super::*;
	use frame::{arithmetic::Perbill, deps::frame_support::register_default_impl, prelude::*};
	use frame_system::limits::{BlockLength, BlockWeights};
	use psdk::{frame_support::weights::constants::RocksDbWeight, pallet_balances::AccountData};

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

	#[doc(hidden)]
	pub struct RuntimeBlockWeights<F: FliteConfigurations>(core::marker::PhantomData<F>);
	impl<F: FliteConfigurations> Get<BlockWeights> for RuntimeBlockWeights<F> {
		fn get() -> BlockWeights {
			// TODO: hypothetically, we should use very safe and sane and audited values here, but
			// for now we go with a simple model.
			BlockWeights::with_sensible_defaults(F::BlockWeight::get(), Perbill::one())
		}
	}

	#[doc(hidden)]
	pub struct RuntimeBlockLength<F: FliteConfigurations>(core::marker::PhantomData<F>);
	impl<F: FliteConfigurations> Get<BlockLength> for RuntimeBlockLength<F> {
		fn get() -> BlockLength {
			BlockLength::max(F::BlockLength::get())
		}
	}

	/// Default for [`polkadot_sdk::frame_system::DefaultConfig`].
	///
	/// TODO: we could define our own `trait FliteFrameSystemDefaultConfig`, but the one provided in
	/// `frame_system::DefaultConfig` is good enough.
	pub struct FliteFrameSystem<F>(core::marker::PhantomData<F>);

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

	/// Default for [`polkadot_sdk::pallet_timestamp`] through [`FliteTimestampDefaultConfig`].
	///
	/// We want the `FliteTimestamp` to be generic over `F: FliteConfigurations`.
	/// The default `pallet_timestamp::DefaultConfig` is constrained by
	/// `frame_system::DefaultConfig`, which itself relies on `<F: FliteConfigurations>`, so it is
	/// all a dead end, and we need to define our own `trait FliteTimestampDefaultConfig`. This is
	/// more or less a copy of `pallet_timestamp::DefaultConfig`, and that is fine.
	///
	/// See: <https://paritytech.github.io/polkadot-sdk/master/pallet_timestamp/pallet/trait.DefaultConfig.html>
	pub struct FliteTimestamp<F: FliteConfigurations>(core::marker::PhantomData<F>);

	pub trait FliteTimestampDefaultConfig {
		/// See [`polkadot_sdk::pallet_timestamp::Config::Moment`].
		type Moment;
		/// See [`polkadot_sdk::pallet_timestamp::Config::OnTimestampSet`].
		type OnTimestampSet;
		/// See [`polkadot_sdk::pallet_timestamp::Config::MinimumPeriod`].
		type MinimumPeriod;
		/// See [`polkadot_sdk::pallet_timestamp::Config::WeightInfo`].
		type WeightInfo;
	}

	#[doc(hidden)]
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

	/// Default for [`polkadot_sdk::pallet_aura`] through [`FliteAuraDefaultConfig`].
	pub struct FliteAura<F: FliteConfigurations>(core::marker::PhantomData<F>);

	/// A `flite` representative of [`polkadot_sdk::pallet_aura::Config`].
	///
	/// This merely exists because `pallet_aura` itself doesn't have
	/// `#[pallet::config(with_default)]`. Although, as we established for
	/// [`struct@FliteTimestamp`], even if it would, it would have not been useful for this case.
	///
	/// We drop all most trait bounds, as we test it and we are professional.
	pub trait FliteAuraDefaultConfig {
		/// See [`polkadot_sdk::pallet_aura::Config::AuthorityId`].
		type AuthorityId;
		/// See [`polkadot_sdk::pallet_aura::Config::MaxAuthorities`].
		type MaxAuthorities;
		/// See [`polkadot_sdk::pallet_aura::Config::DisabledValidators`].
		type DisabledValidators;
		/// See [`polkadot_sdk::pallet_aura::Config::AllowMultipleBlocksPerSlot`].
		type AllowMultipleBlocksPerSlot;
		/// See [`polkadot_sdk::pallet_aura::Config::SlotDuration`].
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

	/// Defaults for [`polkadot_sdk::pallet_balances`] through [`FliteBalancesDefaultConfig`].
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

	#[doc(hidden)]
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

	#[docify::export(FliteSystemConfigExport)]
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
