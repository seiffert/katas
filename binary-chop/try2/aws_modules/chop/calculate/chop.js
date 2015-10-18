Array.prototype.chop = function(needle) {
    var start = 0;
    var end = this.length - 1;
    var midIndex = 0;
    var midValue = 0;
    
    while (start < end || this[start] == needle) {
        midIndex = Math.floor((start+end)/2);
        midValue = this[midIndex];
        if (midValue == needle) {
            return midIndex;
        }
        if (midValue > needle) {
            end = midIndex - 1;
        } else {
            start = midIndex + 1;
        }
    }
    return -1
}
