/*!
  copyright infomation
*/

/*
  normal infomation
  如果在 src 里有个 tsconfig 那么未明确的 this，未使用的本地变量，未明确的的返回都会在编辑器层面提示出来，而不是在编译时提示出来
*/

import now from './mods/modA'
import { toDate } from './mods/modB'
import { Observable } from '@reactivex/rxjs'
import * as os from 'os'

const cur = now()
const curDate = toDate(cur)

// 不能随便使用 this 这个关键词

const observable = new Observable(function subscribe(subscriber) {
  subscriber.next('now: ' + cur.toString())
  subscriber.next('now date: ' + curDate)
})

observable.subscribe(x => console.log(x))

class Person {
  name: string = 'one person'
  arch: string = os.arch()
}

const person = new Person()

console.log(person.name, person.arch)

const you = {...person, cur, curDate}

export {you}
