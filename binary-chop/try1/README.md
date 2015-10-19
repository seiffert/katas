# Karate Chop: Try 1

This is for me the most intuitive solution and the first one that 
came to my mind. 

It is written in Go and uses recursion. Every recursive call to the `chop` 
function operates on an haystack half the size of the caller's haystack.
To calculate the index of the needle once it has been found, the offsets 
of the recursive function calls need to be summed up.

## Advantages
* It is fast
* It is easy to test

## Disadvantages
* It is quite complex. The offset calculation might not be that intuitive
