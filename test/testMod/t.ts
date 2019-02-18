/*!
  here is test file
*/

/*
  test file comments
*/

import now from '../mods/modA'
import test from 'ava'
import {isNumber} from "lodash"

function run() {
  // ooo
  // ooo
  test('my yes test', t => {
    t.is(isNumber(now()), true)
  })
}

export default run()
