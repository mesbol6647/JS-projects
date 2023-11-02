/* -------------------------------------------------------------------------- */
/*                           FONKSİYONLAR 2. YÖNTEM                           */
/* -------------------------------------------------------------------------- */

//  console.log(topla(2,3))  bu yöntemde hoisting olmadığı önce fonksiyonun tanımlanması sonrasında kullanılması gerekir.

const topla = function( a, b) {  // function expression yöntemi

        return a + b

} 
console.log("Toplam:" , topla (3,7))


/* -------------------------------------------------------------------------- */
/*                                    örnek                                   */
/* -------------------------------------------------------------------------- */
const tekVeyaCift = function(num){

    const result =num % 2 ? "TEK" : "CİFT"
    return ` ${num} ${result} dir`
}

console.log(tekVeyaCift(5))