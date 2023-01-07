import { Request, Response, Router } from 'express'
import {
	addNewUser,
	checkCpfExistence,
	deleteUserById,
	getUsers,
	getUsersById,
	putUserById
} from './users'
import {
	addNewTransaction,
	checkId,
	deleteTransaction,
	editTransaction,
	getAllTransactions,
	getSingleTransaction
} from './transactions'

const router = Router()

//----------------------USERS---------------------------------------------

router.post('/users', checkCpfExistence, (req: Request, res: Response) => {
	addNewUser(req, res)
})

router.get('/users/:uid', (req: Request, res: Response) => {
	getUsersById(req, res)
})

router.get('/users', (req: Request, res: Response) => {
	getUsers(req, res)
})

router.put('/users/:uid', (req: Request, res: Response) => {
	putUserById(req, res)
})

router.delete('/users/:uid', (req: Request, res: Response) => {
	deleteUserById(req, res)
})

//---------------------TRANSACTIONS----------------------------------------

router.post(
	'/users/:userId/transactions',
	checkId,
	(req: Request, res: Response) => {
		addNewTransaction(req, res)
	}
)

router.get(
	'/users/:userId/transactions/:transactionId',
	checkId,
	(req: Request, res: Response) => {
		getSingleTransaction(req, res)
	}
)

router.get(
	'/users/:userId/transactions',
	checkId,
	(req: Request, res: Response) => {
		getAllTransactions(req, res)
	}
)

router.put(
	'/users/:userId/transactions/:transactionId',
	checkId,
	(req: Request, res: Response) => {
		editTransaction(req, res)
	}
)

router.delete(
	'/users/:userId/transactions/:transactionId',
	checkId,
	(req: Request, res: Response) => {
		deleteTransaction(req, res)
	}
)

export default router
