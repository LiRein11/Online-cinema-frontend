import { FC, useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '@/config/url.config'

import MenuItem from '../MenuItem'

import LogoutButton from './LogoutButton'

const AuthItems: FC = () => {
	const [data, setData] = useState(null || Object)

	const { user } = useAuth()
	useEffect(() => {
		setData(user)
	}, [user])

	return (
		<>
			{data ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem
					item={{
						icon: 'MdLogin',
						link: '/auth',
						title: 'Login',
					}}
				/>
			)}

			{data?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Admin panel',
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
