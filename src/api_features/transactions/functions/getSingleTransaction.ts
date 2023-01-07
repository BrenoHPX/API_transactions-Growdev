import { Request, Response } from 'express'
import StandardResponse from '../../../interfaces/StandardResponse'
import { usersDB } from '../../../storage'

function getSingleTransaction(req: Request, res: Response) {
	const { userId } = req.params
	const { transactionId } = req.params

	const targetUser = usersDB.find((f) => f.uid === userId)
	const targetTransaction = targetUser?.getSingleTransaction(transactionId)

	if (!targetUser || !targetTransaction) {
		return res.status(400).json({
			success: false,
			message: 'Usuário ou transição não localizados!'
		} as StandardResponse)
	}

	return res.status(200).json({
		success: true,
		message: 'Transição localizada!',
		data: targetTransaction
	} as StandardResponse)
}

export { getSingleTransaction }
