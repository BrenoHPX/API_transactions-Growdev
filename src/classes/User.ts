import { deleteTransaction } from '../api_features/transactions'
import { editTransactionDto } from '../interfaces/editTransaction.dto'
import { Transaction } from './Transactions'

export class User {
	constructor(
		public name: string,
		public cpf: string,
		public email: string,
		public age: number,
		public uid: string,
		public balance: object,
		private transaction?: Transaction[]
	) {
		this.transaction = []
	}

	editUser(reqBody: Partial<User>) {
		if (reqBody.name) this.name = reqBody.name
		if (reqBody.cpf) this.cpf = reqBody.cpf
		if (reqBody.email) this.email = reqBody.email
		if (reqBody.age) this.age = reqBody.age
	}

	addNewTransaction(transaction: Transaction) {
		const newTransaction = {
			title: transaction.title,
			value: transaction.value,
			type: transaction.type,
			uid: transaction.uid
		}

		this.transaction!.push(newTransaction)
	}

	getSingleTransaction(transactionId: string) {
		return this.transaction?.find((f) => f.uid === transactionId)
	}

	getAllTransactions() {
		return this.transaction
	}

	getBalance() {
		const incomes = this.transaction?.filter((f) => f.type === 'income')
		const outcomes = this.transaction?.filter((f) => f.type === 'outcome')

		const totalIncomes =
			incomes
				?.map((m) => m.value)
				.reduce((acc, curr) => (acc += curr), 0) || 0

		const totalOutcomes =
			outcomes
				?.map((m) => m.value)
				.reduce((acc, curr) => (acc += curr), 0) || 0

		const total = totalIncomes - totalOutcomes

		return {
			incomes: totalIncomes,
			outcomes: totalOutcomes,
			total: total
		}
	}

	editTransactionMethod(
		oldTransaction: Transaction,
		{ title, type, value }: editTransactionDto
	) {
		oldTransaction!.title = title
		oldTransaction!.value = value
		oldTransaction!.type = type
	}

	deleteTransaction(transaction: Transaction) {
		const targetTransactionIndex = this.transaction!.findIndex(
			(f) => f.uid === transaction.uid
		)
		this.transaction?.splice(targetTransactionIndex, 1)
	}
}
