import test from "tape"
import objectConceal from "../"

test("non string values are not obfuscated", (t) => {
  t.plan(1)
  var objectToConceal = {
  	value: 15
  }
  t.equal(15, objectConceal(objectToConceal).value, "return true")
})

test("string values are not obfuscated", (t) => {
  t.plan(1)
  var objectToConceal = {
  	value: "fifteen"
  }
  t.equal("fif", objectConceal(objectToConceal).value, "return true")
})

test("user can choose truncation length", (t) => {
  t.plan(1)
  var objectToConceal = {
  	value: "fifteen"
  }
  t.equal("fi", objectConceal(objectToConceal, 2).value, "return true")
})

test("truncation length greater than value lengths results in no concealment", (t) => {
  t.plan(1)
  var objectToConceal = {
  	value: "fifteen"
  }
  t.equal("fifteen", objectConceal(objectToConceal, 200).value, "return true")
})