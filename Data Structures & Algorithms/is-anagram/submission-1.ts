class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;
        
        let map1 = new Map();

        for (const char of s) {
            map1.set(char, (map1.get(char) ?? 0) + 1);
        }

        for(const char of t) {
            if(map1.has(char)) {
                map1.set(char, map1.get(char) - 1)
            } else {
                return false
            };
        }

        for(const value of map1.values()) {
            if(value !== 0) return false
        }

        return true;
    }
}
