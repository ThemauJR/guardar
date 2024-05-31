// decimal: 0,1,2,3,4,5,6,7,8,9
// bit: 0 1
// byte: 8 bits
// byte: 00000000 > 0
// byte: 00000001 > 1
// byte: 00000010 > 2
// byte: 00000011 > 3
// byte: 00000100 > 4
// byte: 00000101 > 5
// byte: 00000110 > 6
// byte: 00000111 > 7
// byte: 00001000 > 8
// byte: 00001001 > 9
// byte: 00001010 > 10
// byte: 00001011 > 11
// byte: 00001100 > 12
// byte: 00001101 > 13
// byte: 00001110 > 14
// byte: 00001111 > 15
// byte: 00010000 > 16
// byte: 00010001 > 17
// byte: 00010010 > 18
// byte: 00010011 > 19
// byte: 00010100 > 20
// byte: 00010101 > 21
// byte: 00010110 > 22
// byte: 00010111 > 23




console.log(1 | 3); // 00000011 
console.log(1 | 4); // 00000101 
console.log(3 | 5); // 00000111 

console.log(1 & 3); // 00000001
console.log(1 & 4); //  00000000
console.log(3 & 5); //  00000001