#![feature(prelude_import)]
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
//! - [ ] Less Generic types
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
//!
//! ## Aux Tools
//!
//! - cargo-generate
#[prelude_import]
use std::prelude::rust_2021::*;
#[macro_use]
extern crate std;
use polkadot_sdk::polkadot_sdk_frame as frame;
/// The opinionated types that we dictate.
/// [`polkadot_sdk::polkadot_sdk_frame::runtime::types_common`] already defined a lot of such types,
/// so we re-use them as much as possible.
pub mod types {
    pub use polkadot_sdk::polkadot_sdk_frame::runtime::types_common::{AccountId, BlockNumber, BlockOf};
    pub type Balance = u128;
}
/// Default configurations for the pallets used.
pub mod default_configs {
    use super::flite_system::Config;
    use super::*;
    use frame::{
        arithmetic::Perbill,
        deps::frame_support::{derive_impl, register_default_impl},
        prelude::*,
        runtime::prelude::*,
    };
    use frame_system::limits::{BlockLength, BlockWeights};
    use polkadot_sdk::{
        frame_support::weights::constants::RocksDbWeight,
        pallet_balances::AccountData,
        sp_weights::constants::{WEIGHT_PROOF_SIZE_PER_MB, WEIGHT_REF_TIME_PER_MILLIS},
    };
    pub struct RuntimeBlockWeights<T: Config>(core::marker::PhantomData<T>);
    impl<T: Config> Get<BlockWeights> for RuntimeBlockWeights<T> {
        fn get() -> BlockWeights {
            BlockWeights::with_sensible_defaults(T::BlockWeight::get(), Perbill::one())
        }
    }
    pub struct RuntimeBlockLength<T: Config>(core::marker::PhantomData<T>);
    impl<T: Config> Get<BlockLength> for RuntimeBlockLength<T> {
        fn get() -> BlockLength {
            BlockLength::max(<T as flite_system::Config>::BlockLength::get())
        }
    }
    #[deprecated(
        note = "This is a placeholder type, you need to provide your own weights before launching, but for testing this will just do fine."
    )]
    #[allow(non_camel_case_types)]
    pub type ThisWillCompile_ButYouNeedYourOwn_SystemWeightInfo = ();
    #[deprecated(
        note = "This is a placeholder type, you need to provide your own SS58Prefix before launching, but for testing this will just do fine."
    )]
    #[allow(non_camel_case_types)]
    pub type ThisWillCompile_ButYouWillNeedYourOwn_SS58Prefix = ();
    #[deprecated(
        note = "This is a placeholder type, you need to provide your own Version before launching, but for testing this will just do fine."
    )]
    #[allow(non_camel_case_types)]
    pub type ThisWillCompile_ButYouWillNeedYourOwn_Version = ();
    #[deprecated(
        note = "This is a placeholder type, you need to provide your own BlockWeights before launching, but for testing this will just do fine. An easy option is `flite_system::RuntimeBlockWeights<Runtime>`."
    )]
    #[allow(non_camel_case_types)]
    pub type ThisWillCompile_ButYouNeedYourOwn_BlockWeights = ();
    #[deprecated(
        note = "This is a placeholder type, you need to provide your own BlockLength before launching, but for testing this will just do fine. An easy option is `flite_system::RuntimeBlockLength<Runtime>`."
    )]
    #[allow(non_camel_case_types)]
    pub type ThisWillCompile_ButYouNeedYourOwn_BlockLength = ();
    pub struct FliteFrameSystem;
    pub use __export_tokens_tt_1182070637_flite_frame_system_0 as FliteFrameSystem;
    #[allow(unused)]
    impl frame_system::DefaultConfig for FliteFrameSystem {
        type AccountId = types::AccountId;
        type AccountData = AccountData<types::Balance>;
        type DbWeight = RocksDbWeight;
        type SystemWeightInfo = ThisWillCompile_ButYouNeedYourOwn_SystemWeightInfo;
        type SS58Prefix = ThisWillCompile_ButYouWillNeedYourOwn_SS58Prefix;
        type Version = ThisWillCompile_ButYouWillNeedYourOwn_Version;
        type BlockWeights = ThisWillCompile_ButYouNeedYourOwn_BlockWeights;
        type BlockLength = ThisWillCompile_ButYouNeedYourOwn_BlockLength;
        type Nonce = < frame_system :: config_preludes :: SolochainDefaultConfig as frame_system :: DefaultConfig > :: Nonce ;
        type Hash = < frame_system :: config_preludes :: SolochainDefaultConfig as frame_system :: DefaultConfig > :: Hash ;
        type Hashing = < frame_system :: config_preludes :: SolochainDefaultConfig as frame_system :: DefaultConfig > :: Hashing ;
        type Lookup = < frame_system :: config_preludes :: SolochainDefaultConfig as frame_system :: DefaultConfig > :: Lookup ;
        type MaxConsumers = < frame_system :: config_preludes :: SolochainDefaultConfig as frame_system :: DefaultConfig > :: MaxConsumers ;
        type OnNewAccount = < frame_system :: config_preludes :: SolochainDefaultConfig as frame_system :: DefaultConfig > :: OnNewAccount ;
        type OnKilledAccount = < frame_system :: config_preludes :: SolochainDefaultConfig as frame_system :: DefaultConfig > :: OnKilledAccount ;
        /// The ubiquitous event type injected by `construct_runtime!`.
        type RuntimeEvent = ();
        /// The ubiquitous origin type injected by `construct_runtime!`.
        type RuntimeOrigin = ();
        /// The aggregated dispatch type available for extrinsics, injected by
        /// `construct_runtime!`.
        type RuntimeCall = ();
        /// The aggregated Task type, injected by `construct_runtime!`.
        type RuntimeTask = ();
        /// Converts a module to the index of the module, injected by `construct_runtime!`.
        type PalletInfo = ();
        type BaseCallFilter = < frame_system :: config_preludes :: SolochainDefaultConfig as frame_system :: DefaultConfig > :: BaseCallFilter ;
        type BlockHashCount = < frame_system :: config_preludes :: SolochainDefaultConfig as frame_system :: DefaultConfig > :: BlockHashCount ;
        type OnSetCode = < frame_system :: config_preludes :: SolochainDefaultConfig as frame_system :: DefaultConfig > :: OnSetCode ;
        type SingleBlockMigrations = < frame_system :: config_preludes :: SolochainDefaultConfig as frame_system :: DefaultConfig > :: SingleBlockMigrations ;
        type MultiBlockMigrator = < frame_system :: config_preludes :: SolochainDefaultConfig as frame_system :: DefaultConfig > :: MultiBlockMigrator ;
        type PreInherents = < frame_system :: config_preludes :: SolochainDefaultConfig as frame_system :: DefaultConfig > :: PreInherents ;
        type PostInherents = < frame_system :: config_preludes :: SolochainDefaultConfig as frame_system :: DefaultConfig > :: PostInherents ;
        type PostTransactions = < frame_system :: config_preludes :: SolochainDefaultConfig as frame_system :: DefaultConfig > :: PostTransactions ;
    }
    pub struct DefaultBlockWeight;
    impl DefaultBlockWeight {
        /// Returns the value of this parameter type.
        pub const fn get() -> Weight {
            Weight::from_parts(
                WEIGHT_REF_TIME_PER_MILLIS * 500,
                WEIGHT_PROOF_SIZE_PER_MB * 2,
            )
        }
    }
    impl<_I: From<Weight>> ::frame_support::traits::Get<_I> for DefaultBlockWeight {
        fn get() -> _I {
            _I::from(Self::get())
        }
    }
    impl ::frame_support::traits::TypedGet for DefaultBlockWeight {
        type Type = Weight;
        fn get() -> Weight {
            Self::get()
        }
    }
    pub struct DefaultBlockLength;
    impl DefaultBlockLength {
        /// Returns the value of this parameter type.
        pub const fn get() -> u32 {
            5 * 1024 * 1024
        }
    }
    impl<_I: From<u32>> ::frame_support::traits::Get<_I> for DefaultBlockLength {
        fn get() -> _I {
            _I::from(Self::get())
        }
    }
    impl ::frame_support::traits::TypedGet for DefaultBlockLength {
        type Type = u32;
        fn get() -> u32 {
            Self::get()
        }
    }
}
///The `pallet` module in each FRAME pallet hosts the most important items needed
///to construct this pallet.
///
///The main components of this pallet are:
///- [`Pallet`], which implements all of the dispatchable extrinsics of the pallet, among
///other public functions.
///	- The subset of the functions that are dispatchable can be identified either in the
///	[`dispatchables`] module or in the [`Call`] enum.
///- [`storage_types`], which contains the list of all types that are representing a
///storage item. Otherwise, all storage items are listed among [*Type Definitions*](#types).
///- [`Config`], which contains the configuration trait of this pallet.
///- [`Event`] and [`Error`], which are listed among the [*Enums*](#enums).
///
pub mod flite_system {
    use super::*;
    use frame::prelude::*;
    ///
    ///Configuration trait of this pallet.
    ///
    ///The main purpose of this trait is to act as an interface between this pallet and the runtime in
    ///which it is embedded in. A type, function, or constant in this trait is essentially left to be
    ///configured by the runtime that includes this pallet.
    ///
    ///Consequently, a runtime that wants to include this pallet must implement this trait.
    pub trait Config: polkadot_sdk::frame_system::Config {
        type BlockWeight: Get<Weight>;
        type BlockLength: Get<u32>;
    }
    ///
    ///				The `Pallet` struct, the main type that implements traits and standalone
    ///				functions within the pallet.
    ///
    pub struct Pallet<T>(core::marker::PhantomData<(T)>);
    const _: () = {
        #[automatically_derived]
        impl<T> ::core::clone::Clone for Pallet<T> {
            fn clone(&self) -> Self {
                Self(::core::clone::Clone::clone(&self.0))
            }
        }
    };
    const _: () = {
        impl<T> ::core::cmp::Eq for Pallet<T> {}
    };
    const _: () = {
        #[automatically_derived]
        impl<T> ::core::cmp::PartialEq for Pallet<T> {
            fn eq(&self, other: &Self) -> bool {
                true && self.0 == other.0
            }
        }
    };
    const _: () = {
        #[automatically_derived]
        impl<T> ::core::fmt::Debug for Pallet<T> {
            fn fmt(&self, fmt: &mut ::core::fmt::Formatter) -> ::core::fmt::Result {
                fmt.debug_tuple("Pallet").field(&self.0).finish()
            }
        }
    };
    impl<T: Config> Pallet<T> {
        #[doc(hidden)]
        pub fn pallet_documentation_metadata(
        ) -> polkadot_sdk::frame_support::__private::Vec<&'static str> {
            ::alloc::vec::Vec::new()
        }
    }
    impl<T: Config> Pallet<T> {
        #[doc(hidden)]
        pub fn pallet_constants_metadata() -> polkadot_sdk::frame_support::__private::Vec<
            polkadot_sdk::frame_support::__private::metadata_ir::PalletConstantMetadataIR,
        > {
            ::alloc::vec::Vec::new()
        }
    }
    impl<T: Config> Pallet<T> {
        #[doc(hidden)]
        pub fn error_metadata(
        ) -> Option<polkadot_sdk::frame_support::__private::metadata_ir::PalletErrorMetadataIR>
        {
            None
        }
    }
    /// Type alias to `Pallet`, to be used by `construct_runtime`.
    ///
    /// Generated by `pallet` attribute macro.
    #[deprecated(note = "use `Pallet` instead")]
    #[allow(dead_code)]
    pub type Module<T> = Pallet<T>;
    impl<T: Config> polkadot_sdk::frame_support::traits::GetStorageVersion for Pallet<T> {
        type InCodeStorageVersion = polkadot_sdk::frame_support::traits::NoStorageVersionSet;
        fn in_code_storage_version() -> Self::InCodeStorageVersion {
            core::default::Default::default()
        }
        fn on_chain_storage_version() -> polkadot_sdk::frame_support::traits::StorageVersion {
            polkadot_sdk::frame_support::traits::StorageVersion::get::<Self>()
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::OnGenesis for Pallet<T> {
        fn on_genesis() {
            let storage_version: polkadot_sdk::frame_support::traits::StorageVersion =
                core::default::Default::default();
            storage_version.put::<Self>();
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::PalletInfoAccess for Pallet<T> {
        fn index() -> usize {
            < < T as polkadot_sdk :: frame_system :: Config > :: PalletInfo as polkadot_sdk :: frame_support :: traits :: PalletInfo > :: index :: < Self > () . expect ("Pallet is part of the runtime because pallet `Config` trait is \
						implemented by the runtime")
        }
        fn name() -> &'static str {
            < < T as polkadot_sdk :: frame_system :: Config > :: PalletInfo as polkadot_sdk :: frame_support :: traits :: PalletInfo > :: name :: < Self > () . expect ("Pallet is part of the runtime because pallet `Config` trait is \
						implemented by the runtime")
        }
        fn name_hash() -> [u8; 16] {
            < < T as polkadot_sdk :: frame_system :: Config > :: PalletInfo as polkadot_sdk :: frame_support :: traits :: PalletInfo > :: name_hash :: < Self > () . expect ("Pallet is part of the runtime because pallet `Config` trait is \
						implemented by the runtime")
        }
        fn module_name() -> &'static str {
            < < T as polkadot_sdk :: frame_system :: Config > :: PalletInfo as polkadot_sdk :: frame_support :: traits :: PalletInfo > :: module_name :: < Self > () . expect ("Pallet is part of the runtime because pallet `Config` trait is \
						implemented by the runtime")
        }
        fn crate_version() -> polkadot_sdk::frame_support::traits::CrateVersion {
            polkadot_sdk::frame_support::traits::CrateVersion {
                major: 0u16,
                minor: 1u8,
                patch: 0u8,
            }
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::PalletsInfoAccess for Pallet<T> {
        fn count() -> usize {
            1
        }
        fn infos() -> polkadot_sdk::frame_support::__private::Vec<
            polkadot_sdk::frame_support::traits::PalletInfoData,
        > {
            use polkadot_sdk::frame_support::traits::PalletInfoAccess;
            let item = polkadot_sdk::frame_support::traits::PalletInfoData {
                index: Self::index(),
                name: Self::name(),
                module_name: Self::module_name(),
                crate_version: Self::crate_version(),
            };
            <[_]>::into_vec(
                #[rustc_box]
                ::alloc::boxed::Box::new([item]),
            )
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::StorageInfoTrait for Pallet<T> {
        fn storage_info() -> polkadot_sdk::frame_support::__private::Vec<
            polkadot_sdk::frame_support::traits::StorageInfo,
        > {
            #[allow(unused_mut)]
            let mut res = ::alloc::vec::Vec::new();
            res
        }
    }
    use polkadot_sdk::frame_support::traits::{
        StorageInfoTrait, TrackedStorageKey, WhitelistedStorageKeys,
    };
    impl<T: Config> WhitelistedStorageKeys for Pallet<T> {
        fn whitelisted_storage_keys(
        ) -> polkadot_sdk::frame_support::__private::Vec<TrackedStorageKey> {
            use polkadot_sdk::frame_support::__private::vec;
            ::alloc::vec::Vec::new()
        }
    }
    #[doc(hidden)]
    mod warnings {}
    #[allow(unused_imports)]
    #[doc(hidden)]
    pub mod __substrate_call_check {
        #[doc(hidden)]
        pub use __is_call_part_defined_0 as is_call_part_defined;
    }
    ///Contains a variant per dispatchable extrinsic that this pallet has.
    #[codec(encode_bound())]
    #[codec(decode_bound())]
    #[scale_info(skip_type_params(T), capture_docs = "always")]
    #[allow(non_camel_case_types)]
    pub enum Call<T: Config> {
        #[doc(hidden)]
        #[codec(skip)]
        __Ignore(
            ::core::marker::PhantomData<(T,)>,
            polkadot_sdk::frame_support::Never,
        ),
    }
    const _: () = {
        #[automatically_derived]
        impl<T: Config> ::core::fmt::Debug for Call<T> {
            fn fmt(&self, fmt: &mut ::core::fmt::Formatter) -> ::core::fmt::Result {
                match *self {
                    Self::__Ignore(ref _0, ref _1) => fmt
                        .debug_tuple("Call::__Ignore")
                        .field(&_0)
                        .field(&_1)
                        .finish(),
                }
            }
        }
    };
    const _: () = {
        #[automatically_derived]
        impl<T: Config> ::core::clone::Clone for Call<T> {
            fn clone(&self) -> Self {
                match self {
                    Self::__Ignore(ref _0, ref _1) => Self::__Ignore(
                        ::core::clone::Clone::clone(_0),
                        ::core::clone::Clone::clone(_1),
                    ),
                }
            }
        }
    };
    const _: () = {
        impl<T: Config> ::core::cmp::Eq for Call<T> {}
    };
    const _: () = {
        #[automatically_derived]
        impl<T: Config> ::core::cmp::PartialEq for Call<T> {
            fn eq(&self, other: &Self) -> bool {
                match (self, other) {
                    (Self::__Ignore(_0, _1), Self::__Ignore(_0_other, _1_other)) => {
                        true && _0 == _0_other && _1 == _1_other
                    }
                }
            }
        }
    };
    #[allow(deprecated)]
    const _: () = {
        #[allow(non_camel_case_types)]
        #[automatically_derived]
        impl<T: Config> ::parity_scale_codec::Encode for Call<T> {}
        #[automatically_derived]
        impl<T: Config> ::parity_scale_codec::EncodeLike for Call<T> {}
    };
    #[allow(deprecated)]
    const _: () = {
        #[allow(non_camel_case_types)]
        #[automatically_derived]
        impl<T: Config> ::parity_scale_codec::Decode for Call<T> {
            fn decode<__CodecInputEdqy: ::parity_scale_codec::Input>(
                __codec_input_edqy: &mut __CodecInputEdqy,
            ) -> ::core::result::Result<Self, ::parity_scale_codec::Error> {
                match __codec_input_edqy
                    .read_byte()
                    .map_err(|e| e.chain("Could not decode `Call`, failed to read variant byte"))?
                {
                    _ => {
                        #[allow(clippy::redundant_closure_call)]
                        return (move || {
                            ::core::result::Result::Err(<_ as ::core::convert::Into<_>>::into(
                                "Could not decode `Call`, variant doesn't exist",
                            ))
                        })();
                    }
                }
            }
        }
    };
    #[allow(non_upper_case_globals, unused_attributes, unused_qualifications)]
    const _: () = {
        impl<T: Config> ::scale_info::TypeInfo for Call<T>
        where
            ::core::marker::PhantomData<(T,)>: ::scale_info::TypeInfo + 'static,
            T: Config + 'static,
        {
            type Identity = Self;
            fn type_info() -> ::scale_info::Type {
                ::scale_info::Type::builder()
                    .path(::scale_info::Path::new_with_replace(
                        "Call",
                        "flite::flite_system",
                        &[],
                    ))
                    .type_params(<[_]>::into_vec(
                        #[rustc_box]
                        ::alloc::boxed::Box::new([::scale_info::TypeParameter::new(
                            "T",
                            ::core::option::Option::None,
                        )]),
                    ))
                    .docs_always(&[
                        "Contains a variant per dispatchable extrinsic that this pallet has.",
                    ])
                    .variant(::scale_info::build::Variants::new())
            }
        };
    };
    impl<T: Config> Call<T> {}
    impl<T: Config> polkadot_sdk::frame_support::dispatch::GetDispatchInfo for Call<T> {
        fn get_dispatch_info(&self) -> polkadot_sdk::frame_support::dispatch::DispatchInfo {
            match *self {
                Self::__Ignore(_, _) => {
                    ::core::panicking::panic_fmt(format_args!(
                        "internal error: entered unreachable code: {0}",
                        format_args!("__Ignore cannot be used")
                    ));
                }
            }
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::dispatch::CheckIfFeeless for Call<T> {
        type Origin = polkadot_sdk::frame_system::pallet_prelude::OriginFor<T>;
        #[allow(unused_variables)]
        fn is_feeless(&self, origin: &Self::Origin) -> bool {
            match *self {
                Self::__Ignore(_, _) => {
                    ::core::panicking::panic_fmt(format_args!(
                        "internal error: entered unreachable code: {0}",
                        format_args!("__Ignore cannot be used")
                    ));
                }
            }
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::GetCallName for Call<T> {
        fn get_call_name(&self) -> &'static str {
            match *self {
                Self::__Ignore(_, _) => {
                    ::core::panicking::panic_fmt(format_args!(
                        "internal error: entered unreachable code: {0}",
                        format_args!("__PhantomItem cannot be used.")
                    ));
                }
            }
        }
        fn get_call_names() -> &'static [&'static str] {
            &[]
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::GetCallIndex for Call<T> {
        fn get_call_index(&self) -> u8 {
            match *self {
                Self::__Ignore(_, _) => {
                    ::core::panicking::panic_fmt(format_args!(
                        "internal error: entered unreachable code: {0}",
                        format_args!("__PhantomItem cannot be used.")
                    ));
                }
            }
        }
        fn get_call_indices() -> &'static [u8] {
            &[]
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::UnfilteredDispatchable for Call<T> {
        type RuntimeOrigin = polkadot_sdk::frame_system::pallet_prelude::OriginFor<T>;
        fn dispatch_bypass_filter(
            self,
            origin: Self::RuntimeOrigin,
        ) -> polkadot_sdk::frame_support::dispatch::DispatchResultWithPostInfo {
            polkadot_sdk::frame_support::dispatch_context::run_in_context(|| match self {
                Self::__Ignore(_, _) => {
                    let _ = origin;
                    {
                        ::core::panicking::panic_fmt(format_args!(
                            "internal error: entered unreachable code: {0}",
                            format_args!("__PhantomItem cannot be used.")
                        ));
                    };
                }
            })
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::dispatch::Callable<T> for Pallet<T> {
        type RuntimeCall = Call<T>;
    }
    impl<T: Config> Pallet<T> {
        #[allow(dead_code)]
        #[doc(hidden)]
        pub fn call_functions(
        ) -> polkadot_sdk::frame_support::__private::metadata_ir::PalletCallMetadataIR {
            polkadot_sdk::frame_support::__private::scale_info::meta_type::<Call<T>>().into()
        }
    }
    pub use __tt_error_token_1 as tt_error_token;
    #[doc(hidden)]
    pub mod __substrate_event_check {
        #[doc(hidden)]
        pub use __is_event_part_defined_2 as is_event_part_defined;
    }
    impl<T: Config> Pallet<T> {
        #[doc(hidden)]
        pub fn storage_metadata(
        ) -> polkadot_sdk::frame_support::__private::metadata_ir::PalletStorageMetadataIR {
            polkadot_sdk :: frame_support :: __private :: metadata_ir :: PalletStorageMetadataIR { prefix : < < T as polkadot_sdk :: frame_system :: Config > :: PalletInfo as polkadot_sdk :: frame_support :: traits :: PalletInfo > :: name :: < Pallet < T > > () . expect ("No name found for the pallet in the runtime! This usually means that the pallet wasn't added to `construct_runtime!`.") , entries : { # [allow (unused_mut)] let mut entries = :: alloc :: vec :: Vec :: new () ; entries } , }
        }
    }
    #[doc(hidden)]
    pub mod __substrate_inherent_check {
        #[doc(hidden)]
        pub use __is_inherent_part_defined_3 as is_inherent_part_defined;
    }
    /// Hidden instance generated to be internally used when module is used without
    /// instance.
    #[doc(hidden)]
    pub type __InherentHiddenInstance = ();
    impl<T: Config>
        polkadot_sdk::frame_support::traits::Hooks<
            polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
        > for Pallet<T>
    {
    }
    impl<T: Config>
        polkadot_sdk::frame_support::traits::OnFinalize<
            polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
        > for Pallet<T>
    {
        fn on_finalize(n: polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>) {
            let __within_span__ = {
                use ::tracing::__macro_support::Callsite as _;
                static __CALLSITE: ::tracing::callsite::DefaultCallsite = {
                    static META: ::tracing::Metadata<'static> = {
                        ::tracing_core::metadata::Metadata::new(
                            "on_finalize",
                            "flite::flite_system",
                            ::tracing::Level::TRACE,
                            ::core::option::Option::Some("flite/src/lib.rs"),
                            ::core::option::Option::Some(145u32),
                            ::core::option::Option::Some("flite::flite_system"),
                            ::tracing_core::field::FieldSet::new(
                                &[],
                                ::tracing_core::callsite::Identifier(&__CALLSITE),
                            ),
                            ::tracing::metadata::Kind::SPAN,
                        )
                    };
                    ::tracing::callsite::DefaultCallsite::new(&META)
                };
                let mut interest = ::tracing::subscriber::Interest::never();
                if ::tracing::Level::TRACE <= ::tracing::level_filters::STATIC_MAX_LEVEL
                    && ::tracing::Level::TRACE <= ::tracing::level_filters::LevelFilter::current()
                    && {
                        interest = __CALLSITE.interest();
                        !interest.is_never()
                    }
                    && ::tracing::__macro_support::__is_enabled(__CALLSITE.metadata(), interest)
                {
                    let meta = __CALLSITE.metadata();
                    ::tracing::Span::new(meta, &{ meta.fields().value_set(&[]) })
                } else {
                    let span = ::tracing::__macro_support::__disabled_span(__CALLSITE.metadata());
                    if match ::tracing::Level::TRACE {
                        ::tracing::Level::ERROR => ::tracing::log::Level::Error,
                        ::tracing::Level::WARN => ::tracing::log::Level::Warn,
                        ::tracing::Level::INFO => ::tracing::log::Level::Info,
                        ::tracing::Level::DEBUG => ::tracing::log::Level::Debug,
                        _ => ::tracing::log::Level::Trace,
                    } <= ::tracing::log::STATIC_MAX_LEVEL
                    {
                        if !::tracing::dispatcher::has_been_set() {
                            {
                                span.record_all(&{ __CALLSITE.metadata().fields().value_set(&[]) });
                            }
                        } else {
                            {}
                        }
                    } else {
                        {}
                    };
                    span
                }
            };
            let __tracing_guard__ = __within_span__.enter();
            <Self as polkadot_sdk::frame_support::traits::Hooks<
                polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
            >>::on_finalize(n)
        }
    }
    impl<T: Config>
        polkadot_sdk::frame_support::traits::OnIdle<
            polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
        > for Pallet<T>
    {
        fn on_idle(
            n: polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
            remaining_weight: polkadot_sdk::frame_support::weights::Weight,
        ) -> polkadot_sdk::frame_support::weights::Weight {
            <Self as polkadot_sdk::frame_support::traits::Hooks<
                polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
            >>::on_idle(n, remaining_weight)
        }
    }
    impl<T: Config>
        polkadot_sdk::frame_support::traits::OnPoll<
            polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
        > for Pallet<T>
    {
        fn on_poll(
            n: polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
            weight: &mut polkadot_sdk::frame_support::weights::WeightMeter,
        ) {
            <Self as polkadot_sdk::frame_support::traits::Hooks<
                polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
            >>::on_poll(n, weight);
        }
    }
    impl<T: Config>
        polkadot_sdk::frame_support::traits::OnInitialize<
            polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
        > for Pallet<T>
    {
        fn on_initialize(
            n: polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
        ) -> polkadot_sdk::frame_support::weights::Weight {
            let __within_span__ = {
                use ::tracing::__macro_support::Callsite as _;
                static __CALLSITE: ::tracing::callsite::DefaultCallsite = {
                    static META: ::tracing::Metadata<'static> = {
                        ::tracing_core::metadata::Metadata::new(
                            "on_initialize",
                            "flite::flite_system",
                            ::tracing::Level::TRACE,
                            ::core::option::Option::Some("flite/src/lib.rs"),
                            ::core::option::Option::Some(145u32),
                            ::core::option::Option::Some("flite::flite_system"),
                            ::tracing_core::field::FieldSet::new(
                                &[],
                                ::tracing_core::callsite::Identifier(&__CALLSITE),
                            ),
                            ::tracing::metadata::Kind::SPAN,
                        )
                    };
                    ::tracing::callsite::DefaultCallsite::new(&META)
                };
                let mut interest = ::tracing::subscriber::Interest::never();
                if ::tracing::Level::TRACE <= ::tracing::level_filters::STATIC_MAX_LEVEL
                    && ::tracing::Level::TRACE <= ::tracing::level_filters::LevelFilter::current()
                    && {
                        interest = __CALLSITE.interest();
                        !interest.is_never()
                    }
                    && ::tracing::__macro_support::__is_enabled(__CALLSITE.metadata(), interest)
                {
                    let meta = __CALLSITE.metadata();
                    ::tracing::Span::new(meta, &{ meta.fields().value_set(&[]) })
                } else {
                    let span = ::tracing::__macro_support::__disabled_span(__CALLSITE.metadata());
                    if match ::tracing::Level::TRACE {
                        ::tracing::Level::ERROR => ::tracing::log::Level::Error,
                        ::tracing::Level::WARN => ::tracing::log::Level::Warn,
                        ::tracing::Level::INFO => ::tracing::log::Level::Info,
                        ::tracing::Level::DEBUG => ::tracing::log::Level::Debug,
                        _ => ::tracing::log::Level::Trace,
                    } <= ::tracing::log::STATIC_MAX_LEVEL
                    {
                        if !::tracing::dispatcher::has_been_set() {
                            {
                                span.record_all(&{ __CALLSITE.metadata().fields().value_set(&[]) });
                            }
                        } else {
                            {}
                        }
                    } else {
                        {}
                    };
                    span
                }
            };
            let __tracing_guard__ = __within_span__.enter();
            <Self as polkadot_sdk::frame_support::traits::Hooks<
                polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
            >>::on_initialize(n)
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::BeforeAllRuntimeMigrations for Pallet<T> {
        fn before_all_runtime_migrations() -> polkadot_sdk::frame_support::weights::Weight {
            use polkadot_sdk::frame_support::traits::{Get, PalletInfoAccess};
            use polkadot_sdk::frame_support::__private::hashing::twox_128;
            use polkadot_sdk::frame_support::storage::unhashed::contains_prefixed_key;
            let __within_span__ = {
                use ::tracing::__macro_support::Callsite as _;
                static __CALLSITE: ::tracing::callsite::DefaultCallsite = {
                    static META: ::tracing::Metadata<'static> = {
                        ::tracing_core::metadata::Metadata::new(
                            "before_all",
                            "flite::flite_system",
                            ::tracing::Level::TRACE,
                            ::core::option::Option::Some("flite/src/lib.rs"),
                            ::core::option::Option::Some(145u32),
                            ::core::option::Option::Some("flite::flite_system"),
                            ::tracing_core::field::FieldSet::new(
                                &[],
                                ::tracing_core::callsite::Identifier(&__CALLSITE),
                            ),
                            ::tracing::metadata::Kind::SPAN,
                        )
                    };
                    ::tracing::callsite::DefaultCallsite::new(&META)
                };
                let mut interest = ::tracing::subscriber::Interest::never();
                if ::tracing::Level::TRACE <= ::tracing::level_filters::STATIC_MAX_LEVEL
                    && ::tracing::Level::TRACE <= ::tracing::level_filters::LevelFilter::current()
                    && {
                        interest = __CALLSITE.interest();
                        !interest.is_never()
                    }
                    && ::tracing::__macro_support::__is_enabled(__CALLSITE.metadata(), interest)
                {
                    let meta = __CALLSITE.metadata();
                    ::tracing::Span::new(meta, &{ meta.fields().value_set(&[]) })
                } else {
                    let span = ::tracing::__macro_support::__disabled_span(__CALLSITE.metadata());
                    if match ::tracing::Level::TRACE {
                        ::tracing::Level::ERROR => ::tracing::log::Level::Error,
                        ::tracing::Level::WARN => ::tracing::log::Level::Warn,
                        ::tracing::Level::INFO => ::tracing::log::Level::Info,
                        ::tracing::Level::DEBUG => ::tracing::log::Level::Debug,
                        _ => ::tracing::log::Level::Trace,
                    } <= ::tracing::log::STATIC_MAX_LEVEL
                    {
                        if !::tracing::dispatcher::has_been_set() {
                            {
                                span.record_all(&{ __CALLSITE.metadata().fields().value_set(&[]) });
                            }
                        } else {
                            {}
                        }
                    } else {
                        {}
                    };
                    span
                }
            };
            let __tracing_guard__ = __within_span__.enter();
            let pallet_hashed_prefix = <Self as PalletInfoAccess>::name_hash();
            let exists = contains_prefixed_key(&pallet_hashed_prefix);
            if !exists {
                let default_version = polkadot_sdk::frame_support::traits::StorageVersion::new(0);
                {
                    let lvl = ::log::Level::Info;
                    if lvl <= ::log::STATIC_MAX_LEVEL && lvl <= ::log::max_level() {
                        :: log :: __private_api :: log (format_args ! ("🐥 New pallet {0:?} detected in the runtime. The pallet has no defined storage version, so the on-chain version is being initialized to {1:?}." , << T as polkadot_sdk :: frame_system :: Config >:: PalletInfo as polkadot_sdk :: frame_support :: traits :: PalletInfo >:: name ::< Self > () . unwrap_or ("<unknown pallet name>") , default_version) , lvl , & (polkadot_sdk :: frame_support :: LOG_TARGET , "flite::flite_system" , :: log :: __private_api :: loc ()) , ()) ;
                    }
                };
                default_version.put::<Self>();
                <T as polkadot_sdk::frame_system::Config>::DbWeight::get().reads_writes(1, 1)
            } else {
                <T as polkadot_sdk::frame_system::Config>::DbWeight::get().reads(1)
            }
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::OnRuntimeUpgrade for Pallet<T> {
        fn on_runtime_upgrade() -> polkadot_sdk::frame_support::weights::Weight {
            let __within_span__ = {
                use ::tracing::__macro_support::Callsite as _;
                static __CALLSITE: ::tracing::callsite::DefaultCallsite = {
                    static META: ::tracing::Metadata<'static> = {
                        ::tracing_core::metadata::Metadata::new(
                            "on_runtime_update",
                            "flite::flite_system",
                            ::tracing::Level::TRACE,
                            ::core::option::Option::Some("flite/src/lib.rs"),
                            ::core::option::Option::Some(145u32),
                            ::core::option::Option::Some("flite::flite_system"),
                            ::tracing_core::field::FieldSet::new(
                                &[],
                                ::tracing_core::callsite::Identifier(&__CALLSITE),
                            ),
                            ::tracing::metadata::Kind::SPAN,
                        )
                    };
                    ::tracing::callsite::DefaultCallsite::new(&META)
                };
                let mut interest = ::tracing::subscriber::Interest::never();
                if ::tracing::Level::TRACE <= ::tracing::level_filters::STATIC_MAX_LEVEL
                    && ::tracing::Level::TRACE <= ::tracing::level_filters::LevelFilter::current()
                    && {
                        interest = __CALLSITE.interest();
                        !interest.is_never()
                    }
                    && ::tracing::__macro_support::__is_enabled(__CALLSITE.metadata(), interest)
                {
                    let meta = __CALLSITE.metadata();
                    ::tracing::Span::new(meta, &{ meta.fields().value_set(&[]) })
                } else {
                    let span = ::tracing::__macro_support::__disabled_span(__CALLSITE.metadata());
                    if match ::tracing::Level::TRACE {
                        ::tracing::Level::ERROR => ::tracing::log::Level::Error,
                        ::tracing::Level::WARN => ::tracing::log::Level::Warn,
                        ::tracing::Level::INFO => ::tracing::log::Level::Info,
                        ::tracing::Level::DEBUG => ::tracing::log::Level::Debug,
                        _ => ::tracing::log::Level::Trace,
                    } <= ::tracing::log::STATIC_MAX_LEVEL
                    {
                        if !::tracing::dispatcher::has_been_set() {
                            {
                                span.record_all(&{ __CALLSITE.metadata().fields().value_set(&[]) });
                            }
                        } else {
                            {}
                        }
                    } else {
                        {}
                    };
                    span
                }
            };
            let __tracing_guard__ = __within_span__.enter();
            {
                let lvl = ::log::Level::Debug;
                if lvl <= ::log::STATIC_MAX_LEVEL && lvl <= ::log::max_level() {
                    :: log :: __private_api :: log (format_args ! ("✅ no migration for {0}" , << T as polkadot_sdk :: frame_system :: Config >:: PalletInfo as polkadot_sdk :: frame_support :: traits :: PalletInfo >:: name ::< Self > () . unwrap_or ("<unknown pallet name>")) , lvl , & (polkadot_sdk :: frame_support :: LOG_TARGET , "flite::flite_system" , :: log :: __private_api :: loc ()) , ()) ;
                }
            };
            <Self as polkadot_sdk::frame_support::traits::Hooks<
                polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
            >>::on_runtime_upgrade()
        }
    }
    impl<T: Config>
        polkadot_sdk::frame_support::traits::OffchainWorker<
            polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
        > for Pallet<T>
    {
        fn offchain_worker(n: polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>) {
            <Self as polkadot_sdk::frame_support::traits::Hooks<
                polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
            >>::offchain_worker(n)
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::IntegrityTest for Pallet<T> {
        fn integrity_test() {
            polkadot_sdk::frame_support::__private::sp_io::TestExternalities::default()
                .execute_with(|| {
                    <Self as polkadot_sdk::frame_support::traits::Hooks<
                        polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
                    >>::integrity_test()
                });
        }
    }
    #[doc(hidden)]
    pub mod __substrate_genesis_config_check {
        #[doc(hidden)]
        pub use __is_genesis_config_defined_4 as is_genesis_config_defined;
        #[doc(hidden)]
        pub use __is_std_enabled_for_genesis_4 as is_std_enabled_for_genesis;
    }
    #[doc(hidden)]
    pub mod __substrate_origin_check {
        #[doc(hidden)]
        pub use __is_origin_part_defined_5 as is_origin_part_defined;
    }
    #[doc(hidden)]
    pub mod __substrate_validate_unsigned_check {
        #[doc(hidden)]
        pub use __is_validate_unsigned_part_defined_6 as is_validate_unsigned_part_defined;
    }
    pub use __tt_default_parts_7 as tt_default_parts;
    pub use __tt_extra_parts_7 as tt_extra_parts;
    pub use __tt_default_parts_v2_7 as tt_default_parts_v2;
}
///The `pallet` module in each FRAME pallet hosts the most important items needed
///to construct this pallet.
///
///The main components of this pallet are:
///- [`Pallet`], which implements all of the dispatchable extrinsics of the pallet, among
///other public functions.
///	- The subset of the functions that are dispatchable can be identified either in the
///	[`dispatchables`] module or in the [`Call`] enum.
///- [`storage_types`], which contains the list of all types that are representing a
///storage item. Otherwise, all storage items are listed among [*Type Definitions*](#types).
///- [`Config`], which contains the configuration trait of this pallet.
///- [`Event`] and [`Error`], which are listed among the [*Enums*](#enums).
///
pub mod user_pallet {
    use super::*;
    use frame::prelude::*;
    ///
    ///Configuration trait of this pallet.
    ///
    ///The main purpose of this trait is to act as an interface between this pallet and the runtime in
    ///which it is embedded in. A type, function, or constant in this trait is essentially left to be
    ///configured by the runtime that includes this pallet.
    ///
    ///Consequently, a runtime that wants to include this pallet must implement this trait.
    pub trait Config: flite_system::Config {}
    ///
    ///				The `Pallet` struct, the main type that implements traits and standalone
    ///				functions within the pallet.
    ///
    pub struct Pallet<T>(core::marker::PhantomData<(T)>);
    const _: () = {
        #[automatically_derived]
        impl<T> ::core::clone::Clone for Pallet<T> {
            fn clone(&self) -> Self {
                Self(::core::clone::Clone::clone(&self.0))
            }
        }
    };
    const _: () = {
        impl<T> ::core::cmp::Eq for Pallet<T> {}
    };
    const _: () = {
        #[automatically_derived]
        impl<T> ::core::cmp::PartialEq for Pallet<T> {
            fn eq(&self, other: &Self) -> bool {
                true && self.0 == other.0
            }
        }
    };
    const _: () = {
        #[automatically_derived]
        impl<T> ::core::fmt::Debug for Pallet<T> {
            fn fmt(&self, fmt: &mut ::core::fmt::Formatter) -> ::core::fmt::Result {
                fmt.debug_tuple("Pallet").field(&self.0).finish()
            }
        }
    };
    impl<T: Config> Pallet<T> {
        #[doc(hidden)]
        pub fn pallet_documentation_metadata(
        ) -> polkadot_sdk::frame_support::__private::Vec<&'static str> {
            ::alloc::vec::Vec::new()
        }
    }
    impl<T: Config> Pallet<T> {
        #[doc(hidden)]
        pub fn pallet_constants_metadata() -> polkadot_sdk::frame_support::__private::Vec<
            polkadot_sdk::frame_support::__private::metadata_ir::PalletConstantMetadataIR,
        > {
            ::alloc::vec::Vec::new()
        }
    }
    impl<T: Config> Pallet<T> {
        #[doc(hidden)]
        pub fn error_metadata(
        ) -> Option<polkadot_sdk::frame_support::__private::metadata_ir::PalletErrorMetadataIR>
        {
            None
        }
    }
    /// Type alias to `Pallet`, to be used by `construct_runtime`.
    ///
    /// Generated by `pallet` attribute macro.
    #[deprecated(note = "use `Pallet` instead")]
    #[allow(dead_code)]
    pub type Module<T> = Pallet<T>;
    impl<T: Config> polkadot_sdk::frame_support::traits::GetStorageVersion for Pallet<T> {
        type InCodeStorageVersion = polkadot_sdk::frame_support::traits::NoStorageVersionSet;
        fn in_code_storage_version() -> Self::InCodeStorageVersion {
            core::default::Default::default()
        }
        fn on_chain_storage_version() -> polkadot_sdk::frame_support::traits::StorageVersion {
            polkadot_sdk::frame_support::traits::StorageVersion::get::<Self>()
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::OnGenesis for Pallet<T> {
        fn on_genesis() {
            let storage_version: polkadot_sdk::frame_support::traits::StorageVersion =
                core::default::Default::default();
            storage_version.put::<Self>();
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::PalletInfoAccess for Pallet<T> {
        fn index() -> usize {
            < < T as polkadot_sdk :: frame_system :: Config > :: PalletInfo as polkadot_sdk :: frame_support :: traits :: PalletInfo > :: index :: < Self > () . expect ("Pallet is part of the runtime because pallet `Config` trait is \
						implemented by the runtime")
        }
        fn name() -> &'static str {
            < < T as polkadot_sdk :: frame_system :: Config > :: PalletInfo as polkadot_sdk :: frame_support :: traits :: PalletInfo > :: name :: < Self > () . expect ("Pallet is part of the runtime because pallet `Config` trait is \
						implemented by the runtime")
        }
        fn name_hash() -> [u8; 16] {
            < < T as polkadot_sdk :: frame_system :: Config > :: PalletInfo as polkadot_sdk :: frame_support :: traits :: PalletInfo > :: name_hash :: < Self > () . expect ("Pallet is part of the runtime because pallet `Config` trait is \
						implemented by the runtime")
        }
        fn module_name() -> &'static str {
            < < T as polkadot_sdk :: frame_system :: Config > :: PalletInfo as polkadot_sdk :: frame_support :: traits :: PalletInfo > :: module_name :: < Self > () . expect ("Pallet is part of the runtime because pallet `Config` trait is \
						implemented by the runtime")
        }
        fn crate_version() -> polkadot_sdk::frame_support::traits::CrateVersion {
            polkadot_sdk::frame_support::traits::CrateVersion {
                major: 0u16,
                minor: 1u8,
                patch: 0u8,
            }
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::PalletsInfoAccess for Pallet<T> {
        fn count() -> usize {
            1
        }
        fn infos() -> polkadot_sdk::frame_support::__private::Vec<
            polkadot_sdk::frame_support::traits::PalletInfoData,
        > {
            use polkadot_sdk::frame_support::traits::PalletInfoAccess;
            let item = polkadot_sdk::frame_support::traits::PalletInfoData {
                index: Self::index(),
                name: Self::name(),
                module_name: Self::module_name(),
                crate_version: Self::crate_version(),
            };
            <[_]>::into_vec(
                #[rustc_box]
                ::alloc::boxed::Box::new([item]),
            )
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::StorageInfoTrait for Pallet<T> {
        fn storage_info() -> polkadot_sdk::frame_support::__private::Vec<
            polkadot_sdk::frame_support::traits::StorageInfo,
        > {
            #[allow(unused_mut)]
            let mut res = ::alloc::vec::Vec::new();
            res
        }
    }
    use polkadot_sdk::frame_support::traits::{
        StorageInfoTrait, TrackedStorageKey, WhitelistedStorageKeys,
    };
    impl<T: Config> WhitelistedStorageKeys for Pallet<T> {
        fn whitelisted_storage_keys(
        ) -> polkadot_sdk::frame_support::__private::Vec<TrackedStorageKey> {
            use polkadot_sdk::frame_support::__private::vec;
            ::alloc::vec::Vec::new()
        }
    }
    #[doc(hidden)]
    mod warnings {}
    #[allow(unused_imports)]
    #[doc(hidden)]
    pub mod __substrate_call_check {
        #[doc(hidden)]
        pub use __is_call_part_defined_8 as is_call_part_defined;
    }
    ///Contains a variant per dispatchable extrinsic that this pallet has.
    #[codec(encode_bound())]
    #[codec(decode_bound())]
    #[scale_info(skip_type_params(T), capture_docs = "always")]
    #[allow(non_camel_case_types)]
    pub enum Call<T: Config> {
        #[doc(hidden)]
        #[codec(skip)]
        __Ignore(
            ::core::marker::PhantomData<(T,)>,
            polkadot_sdk::frame_support::Never,
        ),
    }
    const _: () = {
        #[automatically_derived]
        impl<T: Config> ::core::fmt::Debug for Call<T> {
            fn fmt(&self, fmt: &mut ::core::fmt::Formatter) -> ::core::fmt::Result {
                match *self {
                    Self::__Ignore(ref _0, ref _1) => fmt
                        .debug_tuple("Call::__Ignore")
                        .field(&_0)
                        .field(&_1)
                        .finish(),
                }
            }
        }
    };
    const _: () = {
        #[automatically_derived]
        impl<T: Config> ::core::clone::Clone for Call<T> {
            fn clone(&self) -> Self {
                match self {
                    Self::__Ignore(ref _0, ref _1) => Self::__Ignore(
                        ::core::clone::Clone::clone(_0),
                        ::core::clone::Clone::clone(_1),
                    ),
                }
            }
        }
    };
    const _: () = {
        impl<T: Config> ::core::cmp::Eq for Call<T> {}
    };
    const _: () = {
        #[automatically_derived]
        impl<T: Config> ::core::cmp::PartialEq for Call<T> {
            fn eq(&self, other: &Self) -> bool {
                match (self, other) {
                    (Self::__Ignore(_0, _1), Self::__Ignore(_0_other, _1_other)) => {
                        true && _0 == _0_other && _1 == _1_other
                    }
                }
            }
        }
    };
    #[allow(deprecated)]
    const _: () = {
        #[allow(non_camel_case_types)]
        #[automatically_derived]
        impl<T: Config> ::parity_scale_codec::Encode for Call<T> {}
        #[automatically_derived]
        impl<T: Config> ::parity_scale_codec::EncodeLike for Call<T> {}
    };
    #[allow(deprecated)]
    const _: () = {
        #[allow(non_camel_case_types)]
        #[automatically_derived]
        impl<T: Config> ::parity_scale_codec::Decode for Call<T> {
            fn decode<__CodecInputEdqy: ::parity_scale_codec::Input>(
                __codec_input_edqy: &mut __CodecInputEdqy,
            ) -> ::core::result::Result<Self, ::parity_scale_codec::Error> {
                match __codec_input_edqy
                    .read_byte()
                    .map_err(|e| e.chain("Could not decode `Call`, failed to read variant byte"))?
                {
                    _ => {
                        #[allow(clippy::redundant_closure_call)]
                        return (move || {
                            ::core::result::Result::Err(<_ as ::core::convert::Into<_>>::into(
                                "Could not decode `Call`, variant doesn't exist",
                            ))
                        })();
                    }
                }
            }
        }
    };
    #[allow(non_upper_case_globals, unused_attributes, unused_qualifications)]
    const _: () = {
        impl<T: Config> ::scale_info::TypeInfo for Call<T>
        where
            ::core::marker::PhantomData<(T,)>: ::scale_info::TypeInfo + 'static,
            T: Config + 'static,
        {
            type Identity = Self;
            fn type_info() -> ::scale_info::Type {
                ::scale_info::Type::builder()
                    .path(::scale_info::Path::new_with_replace(
                        "Call",
                        "flite::user_pallet",
                        &[],
                    ))
                    .type_params(<[_]>::into_vec(
                        #[rustc_box]
                        ::alloc::boxed::Box::new([::scale_info::TypeParameter::new(
                            "T",
                            ::core::option::Option::None,
                        )]),
                    ))
                    .docs_always(&[
                        "Contains a variant per dispatchable extrinsic that this pallet has.",
                    ])
                    .variant(::scale_info::build::Variants::new())
            }
        };
    };
    impl<T: Config> Call<T> {}
    impl<T: Config> polkadot_sdk::frame_support::dispatch::GetDispatchInfo for Call<T> {
        fn get_dispatch_info(&self) -> polkadot_sdk::frame_support::dispatch::DispatchInfo {
            match *self {
                Self::__Ignore(_, _) => {
                    ::core::panicking::panic_fmt(format_args!(
                        "internal error: entered unreachable code: {0}",
                        format_args!("__Ignore cannot be used")
                    ));
                }
            }
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::dispatch::CheckIfFeeless for Call<T> {
        type Origin = polkadot_sdk::frame_system::pallet_prelude::OriginFor<T>;
        #[allow(unused_variables)]
        fn is_feeless(&self, origin: &Self::Origin) -> bool {
            match *self {
                Self::__Ignore(_, _) => {
                    ::core::panicking::panic_fmt(format_args!(
                        "internal error: entered unreachable code: {0}",
                        format_args!("__Ignore cannot be used")
                    ));
                }
            }
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::GetCallName for Call<T> {
        fn get_call_name(&self) -> &'static str {
            match *self {
                Self::__Ignore(_, _) => {
                    ::core::panicking::panic_fmt(format_args!(
                        "internal error: entered unreachable code: {0}",
                        format_args!("__PhantomItem cannot be used.")
                    ));
                }
            }
        }
        fn get_call_names() -> &'static [&'static str] {
            &[]
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::GetCallIndex for Call<T> {
        fn get_call_index(&self) -> u8 {
            match *self {
                Self::__Ignore(_, _) => {
                    ::core::panicking::panic_fmt(format_args!(
                        "internal error: entered unreachable code: {0}",
                        format_args!("__PhantomItem cannot be used.")
                    ));
                }
            }
        }
        fn get_call_indices() -> &'static [u8] {
            &[]
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::UnfilteredDispatchable for Call<T> {
        type RuntimeOrigin = polkadot_sdk::frame_system::pallet_prelude::OriginFor<T>;
        fn dispatch_bypass_filter(
            self,
            origin: Self::RuntimeOrigin,
        ) -> polkadot_sdk::frame_support::dispatch::DispatchResultWithPostInfo {
            polkadot_sdk::frame_support::dispatch_context::run_in_context(|| match self {
                Self::__Ignore(_, _) => {
                    let _ = origin;
                    {
                        ::core::panicking::panic_fmt(format_args!(
                            "internal error: entered unreachable code: {0}",
                            format_args!("__PhantomItem cannot be used.")
                        ));
                    };
                }
            })
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::dispatch::Callable<T> for Pallet<T> {
        type RuntimeCall = Call<T>;
    }
    impl<T: Config> Pallet<T> {
        #[allow(dead_code)]
        #[doc(hidden)]
        pub fn call_functions(
        ) -> polkadot_sdk::frame_support::__private::metadata_ir::PalletCallMetadataIR {
            polkadot_sdk::frame_support::__private::scale_info::meta_type::<Call<T>>().into()
        }
    }
    pub use __tt_error_token_9 as tt_error_token;
    #[doc(hidden)]
    pub mod __substrate_event_check {
        #[doc(hidden)]
        pub use __is_event_part_defined_10 as is_event_part_defined;
    }
    impl<T: Config> Pallet<T> {
        #[doc(hidden)]
        pub fn storage_metadata(
        ) -> polkadot_sdk::frame_support::__private::metadata_ir::PalletStorageMetadataIR {
            polkadot_sdk :: frame_support :: __private :: metadata_ir :: PalletStorageMetadataIR { prefix : < < T as polkadot_sdk :: frame_system :: Config > :: PalletInfo as polkadot_sdk :: frame_support :: traits :: PalletInfo > :: name :: < Pallet < T > > () . expect ("No name found for the pallet in the runtime! This usually means that the pallet wasn't added to `construct_runtime!`.") , entries : { # [allow (unused_mut)] let mut entries = :: alloc :: vec :: Vec :: new () ; entries } , }
        }
    }
    #[doc(hidden)]
    pub mod __substrate_inherent_check {
        #[doc(hidden)]
        pub use __is_inherent_part_defined_11 as is_inherent_part_defined;
    }
    /// Hidden instance generated to be internally used when module is used without
    /// instance.
    #[doc(hidden)]
    pub type __InherentHiddenInstance = ();
    impl<T: Config>
        polkadot_sdk::frame_support::traits::Hooks<
            polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
        > for Pallet<T>
    {
    }
    impl<T: Config>
        polkadot_sdk::frame_support::traits::OnFinalize<
            polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
        > for Pallet<T>
    {
        fn on_finalize(n: polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>) {
            let __within_span__ = {
                use ::tracing::__macro_support::Callsite as _;
                static __CALLSITE: ::tracing::callsite::DefaultCallsite = {
                    static META: ::tracing::Metadata<'static> = {
                        ::tracing_core::metadata::Metadata::new(
                            "on_finalize",
                            "flite::user_pallet",
                            ::tracing::Level::TRACE,
                            ::core::option::Option::Some("flite/src/lib.rs"),
                            ::core::option::Option::Some(160u32),
                            ::core::option::Option::Some("flite::user_pallet"),
                            ::tracing_core::field::FieldSet::new(
                                &[],
                                ::tracing_core::callsite::Identifier(&__CALLSITE),
                            ),
                            ::tracing::metadata::Kind::SPAN,
                        )
                    };
                    ::tracing::callsite::DefaultCallsite::new(&META)
                };
                let mut interest = ::tracing::subscriber::Interest::never();
                if ::tracing::Level::TRACE <= ::tracing::level_filters::STATIC_MAX_LEVEL
                    && ::tracing::Level::TRACE <= ::tracing::level_filters::LevelFilter::current()
                    && {
                        interest = __CALLSITE.interest();
                        !interest.is_never()
                    }
                    && ::tracing::__macro_support::__is_enabled(__CALLSITE.metadata(), interest)
                {
                    let meta = __CALLSITE.metadata();
                    ::tracing::Span::new(meta, &{ meta.fields().value_set(&[]) })
                } else {
                    let span = ::tracing::__macro_support::__disabled_span(__CALLSITE.metadata());
                    if match ::tracing::Level::TRACE {
                        ::tracing::Level::ERROR => ::tracing::log::Level::Error,
                        ::tracing::Level::WARN => ::tracing::log::Level::Warn,
                        ::tracing::Level::INFO => ::tracing::log::Level::Info,
                        ::tracing::Level::DEBUG => ::tracing::log::Level::Debug,
                        _ => ::tracing::log::Level::Trace,
                    } <= ::tracing::log::STATIC_MAX_LEVEL
                    {
                        if !::tracing::dispatcher::has_been_set() {
                            {
                                span.record_all(&{ __CALLSITE.metadata().fields().value_set(&[]) });
                            }
                        } else {
                            {}
                        }
                    } else {
                        {}
                    };
                    span
                }
            };
            let __tracing_guard__ = __within_span__.enter();
            <Self as polkadot_sdk::frame_support::traits::Hooks<
                polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
            >>::on_finalize(n)
        }
    }
    impl<T: Config>
        polkadot_sdk::frame_support::traits::OnIdle<
            polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
        > for Pallet<T>
    {
        fn on_idle(
            n: polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
            remaining_weight: polkadot_sdk::frame_support::weights::Weight,
        ) -> polkadot_sdk::frame_support::weights::Weight {
            <Self as polkadot_sdk::frame_support::traits::Hooks<
                polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
            >>::on_idle(n, remaining_weight)
        }
    }
    impl<T: Config>
        polkadot_sdk::frame_support::traits::OnPoll<
            polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
        > for Pallet<T>
    {
        fn on_poll(
            n: polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
            weight: &mut polkadot_sdk::frame_support::weights::WeightMeter,
        ) {
            <Self as polkadot_sdk::frame_support::traits::Hooks<
                polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
            >>::on_poll(n, weight);
        }
    }
    impl<T: Config>
        polkadot_sdk::frame_support::traits::OnInitialize<
            polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
        > for Pallet<T>
    {
        fn on_initialize(
            n: polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
        ) -> polkadot_sdk::frame_support::weights::Weight {
            let __within_span__ = {
                use ::tracing::__macro_support::Callsite as _;
                static __CALLSITE: ::tracing::callsite::DefaultCallsite = {
                    static META: ::tracing::Metadata<'static> = {
                        ::tracing_core::metadata::Metadata::new(
                            "on_initialize",
                            "flite::user_pallet",
                            ::tracing::Level::TRACE,
                            ::core::option::Option::Some("flite/src/lib.rs"),
                            ::core::option::Option::Some(160u32),
                            ::core::option::Option::Some("flite::user_pallet"),
                            ::tracing_core::field::FieldSet::new(
                                &[],
                                ::tracing_core::callsite::Identifier(&__CALLSITE),
                            ),
                            ::tracing::metadata::Kind::SPAN,
                        )
                    };
                    ::tracing::callsite::DefaultCallsite::new(&META)
                };
                let mut interest = ::tracing::subscriber::Interest::never();
                if ::tracing::Level::TRACE <= ::tracing::level_filters::STATIC_MAX_LEVEL
                    && ::tracing::Level::TRACE <= ::tracing::level_filters::LevelFilter::current()
                    && {
                        interest = __CALLSITE.interest();
                        !interest.is_never()
                    }
                    && ::tracing::__macro_support::__is_enabled(__CALLSITE.metadata(), interest)
                {
                    let meta = __CALLSITE.metadata();
                    ::tracing::Span::new(meta, &{ meta.fields().value_set(&[]) })
                } else {
                    let span = ::tracing::__macro_support::__disabled_span(__CALLSITE.metadata());
                    if match ::tracing::Level::TRACE {
                        ::tracing::Level::ERROR => ::tracing::log::Level::Error,
                        ::tracing::Level::WARN => ::tracing::log::Level::Warn,
                        ::tracing::Level::INFO => ::tracing::log::Level::Info,
                        ::tracing::Level::DEBUG => ::tracing::log::Level::Debug,
                        _ => ::tracing::log::Level::Trace,
                    } <= ::tracing::log::STATIC_MAX_LEVEL
                    {
                        if !::tracing::dispatcher::has_been_set() {
                            {
                                span.record_all(&{ __CALLSITE.metadata().fields().value_set(&[]) });
                            }
                        } else {
                            {}
                        }
                    } else {
                        {}
                    };
                    span
                }
            };
            let __tracing_guard__ = __within_span__.enter();
            <Self as polkadot_sdk::frame_support::traits::Hooks<
                polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
            >>::on_initialize(n)
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::BeforeAllRuntimeMigrations for Pallet<T> {
        fn before_all_runtime_migrations() -> polkadot_sdk::frame_support::weights::Weight {
            use polkadot_sdk::frame_support::traits::{Get, PalletInfoAccess};
            use polkadot_sdk::frame_support::__private::hashing::twox_128;
            use polkadot_sdk::frame_support::storage::unhashed::contains_prefixed_key;
            let __within_span__ = {
                use ::tracing::__macro_support::Callsite as _;
                static __CALLSITE: ::tracing::callsite::DefaultCallsite = {
                    static META: ::tracing::Metadata<'static> = {
                        ::tracing_core::metadata::Metadata::new(
                            "before_all",
                            "flite::user_pallet",
                            ::tracing::Level::TRACE,
                            ::core::option::Option::Some("flite/src/lib.rs"),
                            ::core::option::Option::Some(160u32),
                            ::core::option::Option::Some("flite::user_pallet"),
                            ::tracing_core::field::FieldSet::new(
                                &[],
                                ::tracing_core::callsite::Identifier(&__CALLSITE),
                            ),
                            ::tracing::metadata::Kind::SPAN,
                        )
                    };
                    ::tracing::callsite::DefaultCallsite::new(&META)
                };
                let mut interest = ::tracing::subscriber::Interest::never();
                if ::tracing::Level::TRACE <= ::tracing::level_filters::STATIC_MAX_LEVEL
                    && ::tracing::Level::TRACE <= ::tracing::level_filters::LevelFilter::current()
                    && {
                        interest = __CALLSITE.interest();
                        !interest.is_never()
                    }
                    && ::tracing::__macro_support::__is_enabled(__CALLSITE.metadata(), interest)
                {
                    let meta = __CALLSITE.metadata();
                    ::tracing::Span::new(meta, &{ meta.fields().value_set(&[]) })
                } else {
                    let span = ::tracing::__macro_support::__disabled_span(__CALLSITE.metadata());
                    if match ::tracing::Level::TRACE {
                        ::tracing::Level::ERROR => ::tracing::log::Level::Error,
                        ::tracing::Level::WARN => ::tracing::log::Level::Warn,
                        ::tracing::Level::INFO => ::tracing::log::Level::Info,
                        ::tracing::Level::DEBUG => ::tracing::log::Level::Debug,
                        _ => ::tracing::log::Level::Trace,
                    } <= ::tracing::log::STATIC_MAX_LEVEL
                    {
                        if !::tracing::dispatcher::has_been_set() {
                            {
                                span.record_all(&{ __CALLSITE.metadata().fields().value_set(&[]) });
                            }
                        } else {
                            {}
                        }
                    } else {
                        {}
                    };
                    span
                }
            };
            let __tracing_guard__ = __within_span__.enter();
            let pallet_hashed_prefix = <Self as PalletInfoAccess>::name_hash();
            let exists = contains_prefixed_key(&pallet_hashed_prefix);
            if !exists {
                let default_version = polkadot_sdk::frame_support::traits::StorageVersion::new(0);
                {
                    let lvl = ::log::Level::Info;
                    if lvl <= ::log::STATIC_MAX_LEVEL && lvl <= ::log::max_level() {
                        :: log :: __private_api :: log (format_args ! ("🐥 New pallet {0:?} detected in the runtime. The pallet has no defined storage version, so the on-chain version is being initialized to {1:?}." , << T as polkadot_sdk :: frame_system :: Config >:: PalletInfo as polkadot_sdk :: frame_support :: traits :: PalletInfo >:: name ::< Self > () . unwrap_or ("<unknown pallet name>") , default_version) , lvl , & (polkadot_sdk :: frame_support :: LOG_TARGET , "flite::user_pallet" , :: log :: __private_api :: loc ()) , ()) ;
                    }
                };
                default_version.put::<Self>();
                <T as polkadot_sdk::frame_system::Config>::DbWeight::get().reads_writes(1, 1)
            } else {
                <T as polkadot_sdk::frame_system::Config>::DbWeight::get().reads(1)
            }
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::OnRuntimeUpgrade for Pallet<T> {
        fn on_runtime_upgrade() -> polkadot_sdk::frame_support::weights::Weight {
            let __within_span__ = {
                use ::tracing::__macro_support::Callsite as _;
                static __CALLSITE: ::tracing::callsite::DefaultCallsite = {
                    static META: ::tracing::Metadata<'static> = {
                        ::tracing_core::metadata::Metadata::new(
                            "on_runtime_update",
                            "flite::user_pallet",
                            ::tracing::Level::TRACE,
                            ::core::option::Option::Some("flite/src/lib.rs"),
                            ::core::option::Option::Some(160u32),
                            ::core::option::Option::Some("flite::user_pallet"),
                            ::tracing_core::field::FieldSet::new(
                                &[],
                                ::tracing_core::callsite::Identifier(&__CALLSITE),
                            ),
                            ::tracing::metadata::Kind::SPAN,
                        )
                    };
                    ::tracing::callsite::DefaultCallsite::new(&META)
                };
                let mut interest = ::tracing::subscriber::Interest::never();
                if ::tracing::Level::TRACE <= ::tracing::level_filters::STATIC_MAX_LEVEL
                    && ::tracing::Level::TRACE <= ::tracing::level_filters::LevelFilter::current()
                    && {
                        interest = __CALLSITE.interest();
                        !interest.is_never()
                    }
                    && ::tracing::__macro_support::__is_enabled(__CALLSITE.metadata(), interest)
                {
                    let meta = __CALLSITE.metadata();
                    ::tracing::Span::new(meta, &{ meta.fields().value_set(&[]) })
                } else {
                    let span = ::tracing::__macro_support::__disabled_span(__CALLSITE.metadata());
                    if match ::tracing::Level::TRACE {
                        ::tracing::Level::ERROR => ::tracing::log::Level::Error,
                        ::tracing::Level::WARN => ::tracing::log::Level::Warn,
                        ::tracing::Level::INFO => ::tracing::log::Level::Info,
                        ::tracing::Level::DEBUG => ::tracing::log::Level::Debug,
                        _ => ::tracing::log::Level::Trace,
                    } <= ::tracing::log::STATIC_MAX_LEVEL
                    {
                        if !::tracing::dispatcher::has_been_set() {
                            {
                                span.record_all(&{ __CALLSITE.metadata().fields().value_set(&[]) });
                            }
                        } else {
                            {}
                        }
                    } else {
                        {}
                    };
                    span
                }
            };
            let __tracing_guard__ = __within_span__.enter();
            {
                let lvl = ::log::Level::Debug;
                if lvl <= ::log::STATIC_MAX_LEVEL && lvl <= ::log::max_level() {
                    :: log :: __private_api :: log (format_args ! ("✅ no migration for {0}" , << T as polkadot_sdk :: frame_system :: Config >:: PalletInfo as polkadot_sdk :: frame_support :: traits :: PalletInfo >:: name ::< Self > () . unwrap_or ("<unknown pallet name>")) , lvl , & (polkadot_sdk :: frame_support :: LOG_TARGET , "flite::user_pallet" , :: log :: __private_api :: loc ()) , ()) ;
                }
            };
            <Self as polkadot_sdk::frame_support::traits::Hooks<
                polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
            >>::on_runtime_upgrade()
        }
    }
    impl<T: Config>
        polkadot_sdk::frame_support::traits::OffchainWorker<
            polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
        > for Pallet<T>
    {
        fn offchain_worker(n: polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>) {
            <Self as polkadot_sdk::frame_support::traits::Hooks<
                polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
            >>::offchain_worker(n)
        }
    }
    impl<T: Config> polkadot_sdk::frame_support::traits::IntegrityTest for Pallet<T> {
        fn integrity_test() {
            polkadot_sdk::frame_support::__private::sp_io::TestExternalities::default()
                .execute_with(|| {
                    <Self as polkadot_sdk::frame_support::traits::Hooks<
                        polkadot_sdk::frame_system::pallet_prelude::BlockNumberFor<T>,
                    >>::integrity_test()
                });
        }
    }
    #[doc(hidden)]
    pub mod __substrate_genesis_config_check {
        #[doc(hidden)]
        pub use __is_genesis_config_defined_12 as is_genesis_config_defined;
        #[doc(hidden)]
        pub use __is_std_enabled_for_genesis_12 as is_std_enabled_for_genesis;
    }
    #[doc(hidden)]
    pub mod __substrate_origin_check {
        #[doc(hidden)]
        pub use __is_origin_part_defined_13 as is_origin_part_defined;
    }
    #[doc(hidden)]
    pub mod __substrate_validate_unsigned_check {
        #[doc(hidden)]
        pub use __is_validate_unsigned_part_defined_14 as is_validate_unsigned_part_defined;
    }
    pub use __tt_default_parts_15 as tt_default_parts;
    pub use __tt_extra_parts_15 as tt_extra_parts;
    pub use __tt_default_parts_v2_15 as tt_default_parts_v2;
}
