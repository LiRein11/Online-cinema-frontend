import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';



import Button from '@/components/ui/form-elements/Button';
import Heading from '@/components/ui/heading/Heading';



import { useAuth } from '@/hooks/useAuth';



import Meta from '@/utils/meta/Meta';



import styles from './Auth.module.scss';
import AuthFields from './AuthFields';
import { IAuthInput } from './auth.interface';
import { useAuthRedirect } from './useAuthRedirect';
import { useActions } from '@/hooks/useActions';


const Auth = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = React.useState<'login' | 'register'>('login') // Для того, чтобы и при логине и при регистрации одинаково отрабатывала форма

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange', // Позволяет выводить ошибку не только при нажатии на кнопку submit, а также при изменении полей
	})

	const {login, register} = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)
	}

	return (
		<Meta title="Auth">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" className="mb-6" />

					<AuthFields formState={formState} register={registerInput} isPasswordRequired />

					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
            <Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth