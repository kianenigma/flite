(function() {
    var implementors = Object.fromEntries([["alloy_primitives",[["impl&lt;T, const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;T&gt; for <a class=\"struct\" href=\"alloy_primitives/struct.Signed.html\" title=\"struct alloy_primitives::Signed\">Signed</a>&lt;BITS, LIMBS&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;Self&gt;,</div>"]]],["bitvec",[["impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;<a class=\"struct\" href=\"bitvec/index/struct.BitSel.html\" title=\"struct bitvec::index::BitSel\">BitSel</a>&lt;R&gt;&gt; for <a class=\"struct\" href=\"bitvec/index/struct.BitMask.html\" title=\"struct bitvec::index::BitMask\">BitMask</a>&lt;R&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a>,</div>"]]],["curve25519_dalek",[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;T&gt; for <a class=\"struct\" href=\"curve25519_dalek/edwards/struct.EdwardsPoint.html\" title=\"struct curve25519_dalek::edwards::EdwardsPoint\">EdwardsPoint</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"curve25519_dalek/edwards/struct.EdwardsPoint.html\" title=\"struct curve25519_dalek::edwards::EdwardsPoint\">EdwardsPoint</a>&gt;,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;T&gt; for <a class=\"struct\" href=\"curve25519_dalek/ristretto/struct.RistrettoPoint.html\" title=\"struct curve25519_dalek::ristretto::RistrettoPoint\">RistrettoPoint</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"curve25519_dalek/ristretto/struct.RistrettoPoint.html\" title=\"struct curve25519_dalek::ristretto::RistrettoPoint\">RistrettoPoint</a>&gt;,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;T&gt; for <a class=\"struct\" href=\"curve25519_dalek/scalar/struct.Scalar.html\" title=\"struct curve25519_dalek::scalar::Scalar\">Scalar</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"curve25519_dalek/scalar/struct.Scalar.html\" title=\"struct curve25519_dalek::scalar::Scalar\">Scalar</a>&gt;,</div>"]]],["k256",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a> for <a class=\"struct\" href=\"k256/struct.ProjectivePoint.html\" title=\"struct k256::ProjectivePoint\">ProjectivePoint</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a> for <a class=\"struct\" href=\"k256/struct.Scalar.html\" title=\"struct k256::Scalar\">Scalar</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"k256/struct.ProjectivePoint.html\" title=\"struct k256::ProjectivePoint\">ProjectivePoint</a>&gt; for <a class=\"struct\" href=\"k256/struct.ProjectivePoint.html\" title=\"struct k256::ProjectivePoint\">ProjectivePoint</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"k256/struct.Scalar.html\" title=\"struct k256::Scalar\">Scalar</a>&gt; for <a class=\"struct\" href=\"k256/struct.Scalar.html\" title=\"struct k256::Scalar\">Scalar</a>"]]],["nalgebra",[["impl&lt;'a, T, C: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"nalgebra/base/struct.Matrix.html\" title=\"struct nalgebra::base::Matrix\">Matrix</a>&lt;T, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>, C, &lt;<a class=\"struct\" href=\"nalgebra/base/default_allocator/struct.DefaultAllocator.html\" title=\"struct nalgebra::base::default_allocator::DefaultAllocator\">DefaultAllocator</a> as <a class=\"trait\" href=\"nalgebra/base/allocator/trait.Allocator.html\" title=\"trait nalgebra::base::allocator::Allocator\">Allocator</a>&lt;T, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>, C&gt;&gt;::<a class=\"associatedtype\" href=\"nalgebra/base/allocator/trait.Allocator.html#associatedtype.Buffer\" title=\"type nalgebra::base::allocator::Allocator::Buffer\">Buffer</a>&gt;&gt; for <a class=\"type\" href=\"nalgebra/base/type.OMatrix.html\" title=\"type nalgebra::base::OMatrix\">OMatrix</a>&lt;T, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>, C&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"nalgebra/base/trait.Scalar.html\" title=\"trait nalgebra::base::Scalar\">Scalar</a> + <a class=\"trait\" href=\"nalgebra/trait.ClosedAdd.html\" title=\"trait nalgebra::ClosedAdd\">ClosedAdd</a> + <a class=\"trait\" href=\"num_traits/identities/trait.Zero.html\" title=\"trait num_traits::identities::Zero\">Zero</a>,\n    <a class=\"struct\" href=\"nalgebra/base/default_allocator/struct.DefaultAllocator.html\" title=\"struct nalgebra::base::default_allocator::DefaultAllocator\">DefaultAllocator</a>: <a class=\"trait\" href=\"nalgebra/base/allocator/trait.Allocator.html\" title=\"trait nalgebra::base::allocator::Allocator\">Allocator</a>&lt;T, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>, C&gt;,</div>"],["impl&lt;'a, T, R: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.DimName.html\" title=\"trait nalgebra::base::dimension::DimName\">DimName</a>, C: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.DimName.html\" title=\"trait nalgebra::base::dimension::DimName\">DimName</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"nalgebra/base/struct.Matrix.html\" title=\"struct nalgebra::base::Matrix\">Matrix</a>&lt;T, R, C, &lt;<a class=\"struct\" href=\"nalgebra/base/default_allocator/struct.DefaultAllocator.html\" title=\"struct nalgebra::base::default_allocator::DefaultAllocator\">DefaultAllocator</a> as <a class=\"trait\" href=\"nalgebra/base/allocator/trait.Allocator.html\" title=\"trait nalgebra::base::allocator::Allocator\">Allocator</a>&lt;T, R, C&gt;&gt;::<a class=\"associatedtype\" href=\"nalgebra/base/allocator/trait.Allocator.html#associatedtype.Buffer\" title=\"type nalgebra::base::allocator::Allocator::Buffer\">Buffer</a>&gt;&gt; for <a class=\"type\" href=\"nalgebra/base/type.OMatrix.html\" title=\"type nalgebra::base::OMatrix\">OMatrix</a>&lt;T, R, C&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"nalgebra/base/trait.Scalar.html\" title=\"trait nalgebra::base::Scalar\">Scalar</a> + <a class=\"trait\" href=\"nalgebra/trait.ClosedAdd.html\" title=\"trait nalgebra::ClosedAdd\">ClosedAdd</a> + <a class=\"trait\" href=\"num_traits/identities/trait.Zero.html\" title=\"trait num_traits::identities::Zero\">Zero</a>,\n    <a class=\"struct\" href=\"nalgebra/base/default_allocator/struct.DefaultAllocator.html\" title=\"struct nalgebra::base::default_allocator::DefaultAllocator\">DefaultAllocator</a>: <a class=\"trait\" href=\"nalgebra/base/allocator/trait.Allocator.html\" title=\"trait nalgebra::base::allocator::Allocator\">Allocator</a>&lt;T, R, C&gt;,</div>"],["impl&lt;T, C: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a> for <a class=\"type\" href=\"nalgebra/base/type.OMatrix.html\" title=\"type nalgebra::base::OMatrix\">OMatrix</a>&lt;T, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>, C&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"nalgebra/base/trait.Scalar.html\" title=\"trait nalgebra::base::Scalar\">Scalar</a> + <a class=\"trait\" href=\"nalgebra/trait.ClosedAdd.html\" title=\"trait nalgebra::ClosedAdd\">ClosedAdd</a> + <a class=\"trait\" href=\"num_traits/identities/trait.Zero.html\" title=\"trait num_traits::identities::Zero\">Zero</a>,\n    <a class=\"struct\" href=\"nalgebra/base/default_allocator/struct.DefaultAllocator.html\" title=\"struct nalgebra::base::default_allocator::DefaultAllocator\">DefaultAllocator</a>: <a class=\"trait\" href=\"nalgebra/base/allocator/trait.Allocator.html\" title=\"trait nalgebra::base::allocator::Allocator\">Allocator</a>&lt;T, <a class=\"struct\" href=\"nalgebra/base/dimension/struct.Dyn.html\" title=\"struct nalgebra::base::dimension::Dyn\">Dyn</a>, C&gt;,</div>"],["impl&lt;T, R: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.DimName.html\" title=\"trait nalgebra::base::dimension::DimName\">DimName</a>, C: <a class=\"trait\" href=\"nalgebra/base/dimension/trait.DimName.html\" title=\"trait nalgebra::base::dimension::DimName\">DimName</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a> for <a class=\"type\" href=\"nalgebra/base/type.OMatrix.html\" title=\"type nalgebra::base::OMatrix\">OMatrix</a>&lt;T, R, C&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"nalgebra/base/trait.Scalar.html\" title=\"trait nalgebra::base::Scalar\">Scalar</a> + <a class=\"trait\" href=\"nalgebra/trait.ClosedAdd.html\" title=\"trait nalgebra::ClosedAdd\">ClosedAdd</a> + <a class=\"trait\" href=\"num_traits/identities/trait.Zero.html\" title=\"trait num_traits::identities::Zero\">Zero</a>,\n    <a class=\"struct\" href=\"nalgebra/base/default_allocator/struct.DefaultAllocator.html\" title=\"struct nalgebra::base::default_allocator::DefaultAllocator\">DefaultAllocator</a>: <a class=\"trait\" href=\"nalgebra/base/allocator/trait.Allocator.html\" title=\"trait nalgebra::base::allocator::Allocator\">Allocator</a>&lt;T, R, C&gt;,</div>"]]],["num_bigint",[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;T&gt; for <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a><div class=\"where\">where\n    <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;T, Output = <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>&gt;,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;T&gt; for <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a><div class=\"where\">where\n    <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;T, Output = <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>&gt;,</div>"]]],["num_complex",[["impl&lt;'a, T: 'a + <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"num_complex/struct.Complex.html\" title=\"struct num_complex::Complex\">Complex</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"num_complex/struct.Complex.html\" title=\"struct num_complex::Complex\">Complex</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a> for <a class=\"struct\" href=\"num_complex/struct.Complex.html\" title=\"struct num_complex::Complex\">Complex</a>&lt;T&gt;"]]],["num_rational",[["impl&lt;'a, T: <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a> for <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt;"]]],["ruint",[["impl&lt;'a, const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"ruint/struct.Uint.html\" title=\"struct ruint::Uint\">Uint</a>&lt;BITS, LIMBS&gt;&gt; for <a class=\"struct\" href=\"ruint/struct.Uint.html\" title=\"struct ruint::Uint\">Uint</a>&lt;BITS, LIMBS&gt;"],["impl&lt;const BITS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a> for <a class=\"struct\" href=\"ruint/struct.Uint.html\" title=\"struct ruint::Uint\">Uint</a>&lt;BITS, LIMBS&gt;"]]],["scale_info",[]],["sp_std",[]],["time",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a> for <a class=\"struct\" href=\"time/struct.Duration.html\" title=\"struct time::Duration\">Duration</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;&amp;'a <a class=\"struct\" href=\"time/struct.Duration.html\" title=\"struct time::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"time/struct.Duration.html\" title=\"struct time::Duration\">Duration</a>"]]],["wide",[["impl&lt;RHS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;RHS&gt; for <a class=\"struct\" href=\"wide/struct.f32x4.html\" title=\"struct wide::f32x4\">f32x4</a><div class=\"where\">where\n    <a class=\"struct\" href=\"wide/struct.f32x4.html\" title=\"struct wide::f32x4\">f32x4</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;RHS&gt;,</div>"],["impl&lt;RHS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;RHS&gt; for <a class=\"struct\" href=\"wide/struct.f64x2.html\" title=\"struct wide::f64x2\">f64x2</a><div class=\"where\">where\n    <a class=\"struct\" href=\"wide/struct.f64x2.html\" title=\"struct wide::f64x2\">f64x2</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;RHS&gt;,</div>"],["impl&lt;RHS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;RHS&gt; for <a class=\"struct\" href=\"wide/struct.f64x4.html\" title=\"struct wide::f64x4\">f64x4</a><div class=\"where\">where\n    <a class=\"struct\" href=\"wide/struct.f64x4.html\" title=\"struct wide::f64x4\">f64x4</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;RHS&gt;,</div>"],["impl&lt;RHS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;RHS&gt; for <a class=\"struct\" href=\"wide/struct.i16x16.html\" title=\"struct wide::i16x16\">i16x16</a><div class=\"where\">where\n    <a class=\"struct\" href=\"wide/struct.i16x16.html\" title=\"struct wide::i16x16\">i16x16</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;RHS&gt;,</div>"],["impl&lt;RHS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;RHS&gt; for <a class=\"struct\" href=\"wide/struct.i16x8.html\" title=\"struct wide::i16x8\">i16x8</a><div class=\"where\">where\n    <a class=\"struct\" href=\"wide/struct.i16x8.html\" title=\"struct wide::i16x8\">i16x8</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;RHS&gt;,</div>"],["impl&lt;RHS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;RHS&gt; for <a class=\"struct\" href=\"wide/struct.i32x4.html\" title=\"struct wide::i32x4\">i32x4</a><div class=\"where\">where\n    <a class=\"struct\" href=\"wide/struct.i32x4.html\" title=\"struct wide::i32x4\">i32x4</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;RHS&gt;,</div>"],["impl&lt;RHS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;RHS&gt; for <a class=\"struct\" href=\"wide/struct.i32x8.html\" title=\"struct wide::i32x8\">i32x8</a><div class=\"where\">where\n    <a class=\"struct\" href=\"wide/struct.i32x8.html\" title=\"struct wide::i32x8\">i32x8</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;RHS&gt;,</div>"],["impl&lt;RHS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;RHS&gt; for <a class=\"struct\" href=\"wide/struct.i64x2.html\" title=\"struct wide::i64x2\">i64x2</a><div class=\"where\">where\n    <a class=\"struct\" href=\"wide/struct.i64x2.html\" title=\"struct wide::i64x2\">i64x2</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;RHS&gt;,</div>"],["impl&lt;RHS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;RHS&gt; for <a class=\"struct\" href=\"wide/struct.i64x4.html\" title=\"struct wide::i64x4\">i64x4</a><div class=\"where\">where\n    <a class=\"struct\" href=\"wide/struct.i64x4.html\" title=\"struct wide::i64x4\">i64x4</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;RHS&gt;,</div>"],["impl&lt;RHS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;RHS&gt; for <a class=\"struct\" href=\"wide/struct.i8x16.html\" title=\"struct wide::i8x16\">i8x16</a><div class=\"where\">where\n    <a class=\"struct\" href=\"wide/struct.i8x16.html\" title=\"struct wide::i8x16\">i8x16</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;RHS&gt;,</div>"],["impl&lt;RHS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;RHS&gt; for <a class=\"struct\" href=\"wide/struct.i8x32.html\" title=\"struct wide::i8x32\">i8x32</a><div class=\"where\">where\n    <a class=\"struct\" href=\"wide/struct.i8x32.html\" title=\"struct wide::i8x32\">i8x32</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;RHS&gt;,</div>"],["impl&lt;RHS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;RHS&gt; for <a class=\"struct\" href=\"wide/struct.u16x16.html\" title=\"struct wide::u16x16\">u16x16</a><div class=\"where\">where\n    <a class=\"struct\" href=\"wide/struct.u16x16.html\" title=\"struct wide::u16x16\">u16x16</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;RHS&gt;,</div>"],["impl&lt;RHS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;RHS&gt; for <a class=\"struct\" href=\"wide/struct.u16x8.html\" title=\"struct wide::u16x8\">u16x8</a><div class=\"where\">where\n    <a class=\"struct\" href=\"wide/struct.u16x8.html\" title=\"struct wide::u16x8\">u16x8</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;RHS&gt;,</div>"],["impl&lt;RHS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;RHS&gt; for <a class=\"struct\" href=\"wide/struct.u32x4.html\" title=\"struct wide::u32x4\">u32x4</a><div class=\"where\">where\n    <a class=\"struct\" href=\"wide/struct.u32x4.html\" title=\"struct wide::u32x4\">u32x4</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;RHS&gt;,</div>"],["impl&lt;RHS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;RHS&gt; for <a class=\"struct\" href=\"wide/struct.u32x8.html\" title=\"struct wide::u32x8\">u32x8</a><div class=\"where\">where\n    <a class=\"struct\" href=\"wide/struct.u32x8.html\" title=\"struct wide::u32x8\">u32x8</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;RHS&gt;,</div>"],["impl&lt;RHS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;RHS&gt; for <a class=\"struct\" href=\"wide/struct.u64x2.html\" title=\"struct wide::u64x2\">u64x2</a><div class=\"where\">where\n    <a class=\"struct\" href=\"wide/struct.u64x2.html\" title=\"struct wide::u64x2\">u64x2</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;RHS&gt;,</div>"],["impl&lt;RHS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;RHS&gt; for <a class=\"struct\" href=\"wide/struct.u64x4.html\" title=\"struct wide::u64x4\">u64x4</a><div class=\"where\">where\n    <a class=\"struct\" href=\"wide/struct.u64x4.html\" title=\"struct wide::u64x4\">u64x4</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;RHS&gt;,</div>"],["impl&lt;RHS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/accum/trait.Sum.html\" title=\"trait core::iter::traits::accum::Sum\">Sum</a>&lt;RHS&gt; for <a class=\"struct\" href=\"wide/struct.u8x16.html\" title=\"struct wide::u8x16\">u8x16</a><div class=\"where\">where\n    <a class=\"struct\" href=\"wide/struct.u8x16.html\" title=\"struct wide::u8x16\">u8x16</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;RHS&gt;,</div>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[763,600,2043,1378,7005,1426,1220,1232,1164,18,14,672,10427]}