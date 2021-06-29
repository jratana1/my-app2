// input String
// output Boolean

// given string can it be reaarrange to palindrome

// function('aaabb') => true

function palindrome(string) {
    let count = {}
    let oddCount = 0

    for (char of string) {
        if (count[char]) {
        count[char] = count[char]+1
        }
        else {
        count[char] = 1
        }
    }

    for (char in count) {

        if (count[char]%2 !== 0) {
            oddCount ++
        }

        if (oddCount > 1) {
            return false
        }
    }

    return true
}