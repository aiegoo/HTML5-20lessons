/* this is simple interactive piece of code that increases
the value of n, starting from 1.
after each increase the value of 2 up to square root of n
are tested to see if they are a factor of n. if any of them is,
then n cannot be prime and so the continue keyword forces
execution to go back to the start of the search:loop to
see if n+1 is prime and so on. but if n is found to have no
factor, then it is prime and the continue  keyword is not
encountered so program flow drops through postmessage() call which post the value n
creating an onmessage event on worker object in preceding code

   */

var n = 1

search: while (true)
{
  n += 1

  for (var i = 2; i <= Math.sqrt(n); i += 1)
    if (n % i == 0) continue search;
  postMessage(n);
}