import instance, { axiosClassic } from 'api/interceptors'
import axios from 'axios'

import { getUsersUrl } from '@/config/api.config'

export const AdminService = {
	async getCountUsers() {
		return instance.get<number>(getUsersUrl('count'))
	},
}
