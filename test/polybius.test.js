// Write your tests here!
const expect = require("chai").expect
const { polybius } = require("../src/polybius");

describe('polybius', () => {
    it("when encoding it translates i nad j to 42", () => {
        const expected = "4242"
        const actual = polybius('ij')
        expect(expected).to.equal(actual)
    })
    it("when decoding translates 42 to (i/j", () => {
        const expected = "(i/j)"
        const actual = polybius('42', false)
        expect(expected).to.equal(actual)
    })
    it("should ignore capitals", () => {
        const expected = "5551212411"
        const actual = polybius("Zebra")
        expect(expected).to.equal(actual)
    })
    it("should retain spaces and other non-alphabetic characters", () => {
        const expected = "5551212411'34 2311221155423351"
        const actual = polybius("zebra's magazine")
        expect(expected).to.equal(actual)
    })
})
