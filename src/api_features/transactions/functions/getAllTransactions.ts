// >>retornar todas as transições
// >>retonar um "balance", com:
//     >>soma das entradas (income)
//     >>soma das retiradas (outcome)
//     >>crédito total (total)
// >>filtro por título e tipo de transação
// >>Middleware verificando usuário na rota
import { Request, Response } from 'express'
import StandardResponse from '../../../interfaces/StandardResponse'
import { usersDB } from '../../../storage'
function getAllTransactions(req: Request, res: Response) {
	const { userId } = req.params

	const targetUser = usersDB.find((f) => f.uid === userId)
	const transactions = targetUser?.getAllTransactions()
	const balance = targetUser?.getBalance()

	if (!targetUser) {
		return res.status(400).json({
			success: false,
			message: 'Usuário não localizado!'
		} as StandardResponse)
	}

	// const total = incomes - outcomes
	return res.status(200).json({
		success: true,
		message: 'Lista de transações!',
		data: transactions,
		balance
	} as StandardResponse)
}

export { getAllTransactions }
