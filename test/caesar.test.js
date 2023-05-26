// Write your tests here!
const expect = require("chai").expect
const { caesar } = require("../src/caesar");

describe("caesar", () =>{
    it("should return false for any number under -25", () =>{
        const word = "zebra"
        const actual = caesar(word, -26)
        expect(actual).to.be.false
    })
    it("should return false for any number over 25", () =>{
        const word = "zebra"
        const actual = caesar(word, 26)
        expect(actual).to.be.false
    })
    it("should return false for 0", () =>{
        const word = "zebra"
        const actual = caesar(word, 0)
        expect(actual).to.be.false
    })
    it("should ignore capitals", () =>{
        const word = "Zebra"
        const expected = "cheud"
        const actual = caesar(word, 3)
        expect(expected).to.equal(actual)
    })
    it("should retain spaces and other non-alphabetic characters", () => {
        const sentence = "zebra's are cool"
        const expected = "cheud'v duh frro"
        const actual = caesar(sentence, 3)
        expect(expected).to.equal(actual)
    })
})