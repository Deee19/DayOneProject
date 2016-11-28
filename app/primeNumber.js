function isNumberPrime (number)
{
  var i;
  var squareroot = parseInt(Math.sqrt(number));
  for (i = 2; i <= squareroot; i++)
  {
    if (number % i === 0)
    {
      return false;
    }
  }
  return true;
}
module.exports = {
prime: function(n)
{
  var i, prime =[];
  for (i = 2; i <= n; i++)
  {
    if (isNumberPrime(i))
    {
      prime.push(i);
    }
  }
  return prime;
}
}
