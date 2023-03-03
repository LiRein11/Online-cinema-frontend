import { useQuery } from "react-query";

import { GenreService } from "@/services/genre.service";
import { toastError } from "@/utils/toast-error";
import { IOption } from "@/components/ui/select/select.interface";


export const useAdminGenres = ()=>{
  const queryData = useQuery(
		'List of genre',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data.map(
					(genre): IOption => ({
						value: genre._id,
            label: genre.name
					})
				),
			onError: (error) => {
				toastError(error, 'actor List')
			},
		}
	)

  return queryData
}