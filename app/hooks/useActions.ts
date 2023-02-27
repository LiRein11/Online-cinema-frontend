import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { allActions } from '@/store/rootActions'

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
} // Xук для того, чтобы можно было обратиться к любому экшену, и они все закешированы 

// Чтобы делать не так:
// dispatch(register())

// А вот так:
// const {register} = useActions()
// register()