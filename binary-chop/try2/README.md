# Karate Chop: Try 2

This solution is more experimental. It is implemented in Node.js and
deployed as AWS Lambda function using the JAWS framework.

The chop function itself is written iteratively which surprisingly
results in more compact code than the recursive solution.

## Advantages
* It can be called via the internet
* It is easy to (unit) test

## Disadvantages
* It is not that easy to integration test
