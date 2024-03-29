import { EditorProps } from 'draft-js'
import { ButtonHTMLAttributes, CSSProperties, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps {
	placeholder: string
	error?: FieldError | any | undefined
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps // Как бы совмещаем пропсы которые мы создали выше, и пропсы которые идут в инпут по дефолту в отдельный тип, а затем ниже экспортируем интерфейс, который расширяется от данного типа

export interface IField extends TypeInputPropsField {}

type TypeEditorPropsField = EditorProps & IFieldProps

export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
	onChange: (...event: any[]) => void
	value: string
}

export interface IUploadField {
	folder?: string
	value?: string
	onChange: (...event: any[]) => void
	placeholder: string
	error?: FieldError
	style?: CSSProperties
	isNoImage?: boolean
}
