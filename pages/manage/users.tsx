import React from 'react'

import { NextPageAuth } from '@/shared/types/auth.types'
import UserList from '@/components/screens/admin/users/UserList'

const UserListPage: NextPageAuth = () => {
	return <UserList/>
}

UserListPage.isOnlyAdmin = true

export default UserListPage
