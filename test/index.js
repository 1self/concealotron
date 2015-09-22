import test from "tape"
import conceal from "../"

test("non string values are not obfuscated", (t) => {
  t.plan(1)
  var objectToConceal = {
  	value: 15
  }
  t.equal(15, conceal(objectToConceal).value, "return 15")
})

test("string values are not obfuscated", (t) => {
  t.plan(1)
  var objectToConceal = {
  	value: "fifteen"
  }
  t.equal("fif", conceal(objectToConceal).value, "return fif")
})

test("user can choose truncation length", (t) => {
  t.plan(1)
  var objectToConceal = {
  	value: "fifteen"
  }
  t.equal("fi", conceal(objectToConceal, 2).value, "return fi")
})

test("truncation length greater than value lengths results in no concealment", (t) => {
  t.plan(1)
  var objectToConceal = {
  	value: "fifteen"
  }
  t.equal("fifteen", conceal(objectToConceal, 200).value, "return fifteen")
})

test("strings are concealed", (t) => {
  t.plan(1)
  t.equal(conceal("fifteen"), "fif", "return fif")
})