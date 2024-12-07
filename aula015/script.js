valores = [2, 5, 7, 8, 4, 6];
/*let num = [5, 3, 7, 1]
num.sort()
num.push(9);
console.log(`O vetor tem ${num.length} posições`)
console.log(num);

console.log(valores)
for (pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for (pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
pos = valores.indexOf(5)
