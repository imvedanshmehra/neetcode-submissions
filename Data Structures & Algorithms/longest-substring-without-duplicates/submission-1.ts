class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
       let result = 0;
       let charSet = new Set();
       let l=0;

       for(let r=0; r<s.length; r++) {
        if(charSet) {
            while(charSet.has(s[r])) {
                charSet.delete(s[l])
                l++
            }
        } 

        result = Math.max(result, r-l+1)
        charSet.add(s[r]);

       }

       return result;
    }      
}

