#![cfg_attr(not(feature = "std"), no_std)]

use polkadot_sdk::polkadot_sdk_frame::{self as frame, prelude::*};

#[frame::pallet(dev_mode)]
pub mod pallet {
	use super::*;

	#[pallet::pallet]
	pub struct Pallet<T>(_);

	#[pallet::config]
	#[pallet::disable_frame_system_supertrait_check]
	pub trait Config: flite::flite_system::Config {
		type AdvanceCurrency: flite::native_currency::Advance;
	}

	#[pallet::call]
	impl<T: Config> Pallet<T> {
		pub fn dispatching(origin: OriginFor<T>) -> DispatchResult {
			// Yes, the account id type is no longer generic, because `flite` uses constrained
			// associated types.
			let _sender: flite::types::AccountId = ensure_signed(origin)?;

			Ok(())
		}

		/// simple-pallet can use the very very basic flite currency primitives.
		pub fn simple_currency_usage(
			origin: OriginFor<T>,
			to: flite::types::AccountId,
			amount: u128, // aka. flite::types::Balance
		) -> DispatchResult {
			let who: flite::types::AccountId = ensure_signed(origin)?;

			// read. Yes, the balance types is just `u128`
			let _: u128 = flite::native_currency::Simple::<T>::balance_of(&who);
			// transfer
			flite::native_currency::Simple::<T>::transfer(&who, &to, amount)?;
			// 'lock', which is an abstraction over holding with more opinions
			flite::native_currency::Simple::<T>::lock(&who, amount)?;

			Ok(())
		}

		/// Or it can tap into the default FRAME currency, although as constrained by flite. For
		/// example, `Balance` is still `u128`, `RuntimeHoldReason` is still `&static str` adn so
		/// on.
		pub fn advance_currency_usage(
			origin: OriginFor<T>,
			to: flite::types::AccountId,
			amount: flite::types::Balance,
		) -> DispatchResult {
			use frame::traits::fungible::*;
			let who: flite::types::AccountId = ensure_signed(origin)?;

			// read
			let _: flite::types::Balance = T::AdvanceCurrency::balance(&who);
			// transfer
			T::AdvanceCurrency::transfer(
				&who,
				&to,
				amount,
				frame::traits::tokens::Preservation::Expendable,
			)?;
			// 'hold'.
			T::AdvanceCurrency::hold(&0u8, &who, amount)?;

			Ok(())
		}
	}
}
