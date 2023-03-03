import { useQuery } from 'react-query'

import { IOption } from '@/components/ui/select/select.interface'

import { ActorService } from '@/services/actor.service'

import { toastError } from '@/utils/toast-error'

export const useAdminActors = () => {
	const queryData = useQuery('List of actor', () => ActorService.getAll(), {
		select: ({ data }) =>
			data.map(
				(actor): IOption => ({
					value: actor._id,
					label: actor.name,
				})
			),
		onError: (error) => {
			toastError(error, 'actor List')
		},
	})

	return queryData
}
