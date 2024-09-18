(function() {
    var implementors = Object.fromEntries([["num_bigint",[["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>"]]],["num_complex",[["impl&lt;T: <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"num_complex/struct.Complex.html\" title=\"struct num_complex::Complex\">Complex</a>&lt;T&gt;"]]],["num_rational",[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a>&gt; <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt;"]]],["num_traits",[]],["simba",[["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">16</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">2</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f32.html\">f32</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">8</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">2</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">8</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i128.html\">i128</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">1</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i128.html\">i128</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">2</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i128.html\">i128</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">16</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">2</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">32</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">8</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">16</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">2</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">8</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">2</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">8</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i8.html\">i8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">16</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i8.html\">i8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">2</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i8.html\">i8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">32</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i8.html\">i8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i8.html\">i8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">8</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.isize.html\">isize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">2</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.isize.html\">isize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.isize.html\">isize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">8</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">1</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">2</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">16</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">2</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">32</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">8</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">16</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">2</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">8</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">2</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">8</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">16</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">2</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">32</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">8</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">2</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.AutoSimd.html\" title=\"struct simba::simd::AutoSimd\">AutoSimd</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">8</a>]&gt;"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.WideF32x4.html\" title=\"struct simba::simd::WideF32x4\">WideF32x4</a>"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.WideF32x8.html\" title=\"struct simba::simd::WideF32x8\">WideF32x8</a>"],["impl <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"simba/simd/struct.WideF64x4.html\" title=\"struct simba::simd::WideF64x4\">WideF64x4</a>"]]],["sp_runtime",[["impl&lt;T: <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a>, D: <a class=\"trait\" href=\"bounded_collections/trait.Get.html\" title=\"trait bounded_collections::Get\">Get</a>&lt;T&gt;&gt; <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> for <a class=\"struct\" href=\"sp_runtime/type_with_default/struct.TypeWithDefault.html\" title=\"struct sp_runtime::type_with_default::TypeWithDefault\">TypeWithDefault</a>&lt;T, D&gt;"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[445,486,497,18,23180,535]}