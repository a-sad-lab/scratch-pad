/*!
  here is test file
*/

/*
  test file comments
*/

import now from '../mods/modA'
import test from 'ava'
import {isNumber} from "lodash"

test('my test', t => {
  t.is(isNumber(now()), true)
})
