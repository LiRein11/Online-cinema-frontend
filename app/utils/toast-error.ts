import { errorCatch } from 'api/api.helpers'
import { toastr } from 'react-redux-toastr'

export const toastError = (error: any, title?: string) => {
	const message = errorCatch(error)
	toastr.error(title || 'Error request', message)
	throw message
} // title - заголовок ошибки, либо будет по дефолту, либо мы сможем придумать что-то и передать, поэтому под вопросом
