function getTimeBasedNumbers() {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1; // JS 月份從 0 開始
  const day = now.getDate();
  const hour = now.getHours();

  const primes = [
    101, 103, 107, 109, 113, 127, 131, 137, 139, 149,
    151, 157, 163, 167, 173, 179, 181, 191, 193, 197,
    199, 211, 223, 227, 229, 233, 239, 241, 251, 257,
    263, 269, 271, 277, 281, 283, 293, 307, 311, 313,
    317, 331, 337, 347, 349, 353, 359, 367, 373, 379,
    383, 389, 397, 401, 409, 419, 421, 431, 433, 439,
    443, 449, 457, 461
  ];

  const p1 = primes[Math.floor(Math.random() * primes.length)];
  const p2 = primes[Math.floor(Math.random() * primes.length)];
  const p3 = primes[Math.floor(Math.random() * primes.length)];

  const lower = day * p1 + Math.floor(Math.random() * 900 + 100);
  const upper = (year + month) * p2 + Math.floor(Math.random() * 900 + 100);

  const hourToYao = [
    1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6,
    1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6
  ];
  const changing = hourToYao[hour] * p3 + Math.floor(Math.random() * 900 + 100);

  return [lower%1000, upper%1000, changing%1000];
}