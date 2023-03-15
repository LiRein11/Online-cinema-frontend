import { useQuery } from 'react-query'

import { UserService } from '@/services/user.service'
import { useAuth } from '@/hooks/useAuth'

export const useFavorites = () => {
	const {user} = useAuth()
	const {
		isLoading,
		data: favoritesMovies,
		refetch,
	} = useQuery('favorite movies', () => UserService.getFavorites(), {
		select: ({ data }) => data,
		enabled:  !!user
	})

	return {
		isLoading,
		favoritesMovies,
		refetch,
	}
}
