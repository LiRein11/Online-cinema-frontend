import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps {
	placeholder: string
	error?: FieldError | undefined
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps // Как бы совмещаем пропсы которые мы создали выше, и пропсы которые идут в инпут по дефолту в отдельный тип, а затем ниже экспортируем интерфейс, который расширяется от данного типа

export interface IField extends TypeInputPropsField {}