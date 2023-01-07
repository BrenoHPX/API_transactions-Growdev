export interface editTransactionDto {
	title: string
	type: 'income' | 'outcome'
	value: number
}
