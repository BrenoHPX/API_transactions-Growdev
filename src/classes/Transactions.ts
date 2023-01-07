import { usersDB } from '../storage'

export class Transaction {
	constructor(
		public title: string,
		public value: number,
		public type: 'income' | 'outcome',
		public uid: string
	) {}
}
// title, value, type, id)
