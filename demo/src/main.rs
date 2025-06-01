#![allow(warnings)]

mod v0 {
	pub struct Pallet<AccountId, Balance = u128>(std::marker::PhantomData<(AccountId, Balance)>);
	impl<AccountId, Balance> Pallet<AccountId, Balance> {
		pub fn transfer(from: AccountId, to: AccountId, amount: Balance) {}
	}
}

mod v1 {
	trait Config {
		type AccountId;
		type Balance;
	}

	struct PalletV2<T>(std::marker::PhantomData<T>);
	impl<T: Config> PalletV2<T> {
		fn transfer(from: T::AccountId, to: T::AccountId, amount: T::Balance) {}
	}
}

mod v2 {
	// you know this is like frame-system: shared configuration for all modules.
	trait SharedConfig {
		type BlockNumber;
		type Timestamp;
	}

	trait Config {
		type AccountId;
		type Balance;
	}

	struct PalletV3<T, S>(std::marker::PhantomData<(T, S)>);
	impl<T: Config, S: SharedConfig> PalletV3<T, S> {
		fn transfer(from: T::AccountId, to: T::AccountId, amount: T::Balance) {
			let current_block_number: S::BlockNumber = todo!();
		}
	}
}

mod v3 {
	// you know this is like frame-system: shared configuration for all modules.
	pub trait SharedConfig {
		type AccountId;
		type BlockNumber;
		type Timestamp;
	}

	pub trait Config: SharedConfig {
		type AccountId;
		type Balance;
	}

	pub struct PalletV3<T>(std::marker::PhantomData<T>);
	impl<T: Config> PalletV3<T> {
		// golden syntax <Type as Trait>::AssociatedType
		// BalanceOf = <<T as Config>::Currency as trait::Currency>::Balance;
		pub fn transfer(
			from: <T as SharedConfig>::AccountId,
			to: <T as Config>::AccountId,
			amount: T::Balance,
		) {
			let current_block_number: T::BlockNumber = todo!();
		}
	}
}

mod v4 {
	// you know this is like frame-system: shared configuration for all modules.
	pub trait SharedConfig {
		type AccountId;
		type BlockNumber;
		type Timestamp;
	}

	pub trait Config: SharedConfig {
		type AccountId;
		type Balance;
	}

	pub struct PalletV3<T>(std::marker::PhantomData<T>);
	// Constrained associated type
	impl<T: Config<Balance = u128>> PalletV3<T> {
		pub fn transfer(
			from: <T as SharedConfig>::AccountId,
			to: <T as Config>::AccountId,
			// amount: T::Balance,
			amount: u128,
		) {
			let current_block_number: T::BlockNumber = todo!();
		}
	}
}

// Two issues:
// - syntax is sometimes terrible
// - we cannot define any default

fn main() {
	v0::Pallet::<&'static str, u64>::transfer("kian", "jesse", 10u64);
	v0::Pallet::<&'static str>::transfer("kian", "jesse", 10u128);

	struct Configuration;
	impl v4::SharedConfig for Configuration {
		type AccountId = u64;
		type BlockNumber = u64;
		type Timestamp = u64;
	}
	impl v4::Config for Configuration {
		type AccountId = u64;
		type Balance = u128;
	}
	v4::PalletV3::<Configuration>::transfer(10, 11, 12);
}
