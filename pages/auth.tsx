import { FC } from 'react'

import Auth from '@/components/screens/auth/Auth'
import { useAuthRedirect } from '@/components/screens/auth/useAuthRedirect'

const AuthPage: FC = () => {
	useAuthRedirect()

	return <Auth />
}

export default AuthPage
