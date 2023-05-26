// Write your tests here!
const { substitution } = require("../src/substitution")
const { expect } = require("chai")

describe("substitution", () =>{
    it("should return false if alphabet isn't exactly 26", () =>{
        const alphabet = "qwertyuiop"
        const message = "message"
        const expected = false
        const actual = substitution(message, alphabet)
        expect(expected).to.equal(actual)
    })
    it("should return false if there's duplicate characters", () =>{
        const alphabet = "qwertyuiopasdfghjklzxcvbnn"
        const actual = substitution("zebra", alphabet)
        expect(actual).to.be.false
    })
    it("should ignore capital letters", () =>{
        const expected = "qwe"
        const alphabet = "qwertyuiopasdfghjklzxcvbnm"
        const actual = substitution("aBc", alphabet)
        expect(expected).to.equal(actual)
    })
    it("should ignore capital letters", () =>{
        const expected = "abc"
        const alphabet = "qwertyuiopasdfghjklzxcvbnm"
        const actual = substitution("qWe", alphabet, false)
        expect(expected).to.equal(actual)
    })
    it("should maintain spaces before and after encoding or decoding", () => {
        const expected = "q w e"
        const alphabet = "qwertyuiopasdfghjklzxcvbnm"
        const actual = substitution("a b c", alphabet)
        expect(expected).to.equal(actual)
    })
    it("should maintain spaces before and after encoding or decoding", () => {
        const expected = "a b c"
        const alphabet = "qwertyuiopasdfghjklzxcvbnm"
        const actual = substitution("q w e", alphabet, false)
        expect(expected).to.equal(actual)
    })
})