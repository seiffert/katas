# Karate Chop: Try 2

This solution is more experimental. It is implemented in Node.js and
deployed as AWS Lambda function with an AWS API Gateway endpoint 
using the JAWS framework.

The chop function itself is written iteratively which surprisingly
results in more compact code than the recursive solution.

Writing unit tests with Mocha seems to be pretty easy. The harder part
were the integration tests against Lambda.

To deploy the function to Lambda, you need to call

```
$ jaws dash
```

which gives you an URI in the end that looks like this:

```
https://qydcpl0b42.execute-api.eu-west-1.amazonaws.com/dev/
```

To run integration tests against this API:

```
$ export API_ENDPOINT=https://qydcpl0b42.execute-api.eu-west-1.amazonaws.com/dev/
$ npm test
```

If you don't export the `API_ENDPOINT` variable, npm test will just run local
unit tests.

## Advantages
* It can be called via the internet
* It is easy to (unit) test

## Disadvantages
* It is not that easy to integration test
