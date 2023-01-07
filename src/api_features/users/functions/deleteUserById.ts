// deleta usuario

import { Request, Response } from 'express'
import StandardResponse from '../../../interfaces/StandardResponse'
import { usersDB } from '../../../storage'

export function deleteUserById(req: Request, res: Response) {
	const { uid } = req.params
	const targetUserIndex = usersDB.findIndex((f) => f.uid === uid)

	usersDB.splice(targetUserIndex, 1)

	return res.status(200).json({
		success: true,
		message: 'Usuário deletado'
	} as StandardResponse)
}
