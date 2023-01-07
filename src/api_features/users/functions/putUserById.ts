import { Request, Response } from 'express'
import StandardResponse from '../../../interfaces/StandardResponse'
import { usersDB } from '../../../storage'

export function putUserById(req: Request, res: Response) {
	const { uid } = req.params
	const { name, cpf, email, age } = req.body

	let targetUser = usersDB.find((f) => f.uid === uid)

	if (!name && !cpf && !email && !age) {
		return res.status(418).json({
			success: false,
			message: `Requisição sem parâmetros.`
		} as StandardResponse)
	}

	if (!targetUser) {
		return res.status(418).json({
			success: false,
			message: `Usuário não encontrado`
		} as StandardResponse)
	}

	targetUser?.editUser(req.body)

	return res.status(200).json({
		success: true,
		message: `Usuário editado com sucesso`,
		data: targetUser
	} as StandardResponse)
}
