function verificarFibonacci(n: number): string {
  if (n === 0 || n === 1) {
    return `O número ${n} pertence à sequência de Fibonacci.`;
  }

  let primeiroTermo = 0;
  let segundoTermo = 1;
  let proximoTermo = 0;

  while (true) {
    proximoTermo = primeiroTermo + segundoTermo;

    if (proximoTermo === n) {
      return `O número ${n} pertence à sequência de Fibonacci.`;
    } else if (proximoTermo > n) {
      return `O número ${n} não pertence à sequência de Fibonacci.`;
    }

    primeiroTermo = segundoTermo;
    segundoTermo = proximoTermo;
  }
}

const n = 13;
console.log(verificarFibonacci(n));