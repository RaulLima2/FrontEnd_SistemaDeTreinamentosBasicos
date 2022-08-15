import {promises as fs } from "fs";
import Button from "../Button";
import { InputStyled, LabelStyle, FormStyle} from "./style"

function FormUser() {

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		
		const data_login = {
			email: event.currentTarget.email.value,
			password: event.currentTarget.password.value
		}
		
		const JSONdata = JSON.stringify(data_login)

		const endpoint = 'https://sistemadetreinamentosbasicos.josefreitas788.repl.co/auth/login'

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSONdata,
		}

		const res = await fetch(endpoint, options)

		fs.writeFile('auth.json', await res.json(), (err) => {
			if (err) {
				throw err;
			}

			console.log(err)
		})
	}
	
	return (
			<FormStyle action='/' method='POST' onSubmit={handleSubmit}>
				<LabelStyle>
					<InputStyled type='email' name='email' id='email' placeholder='Email'/>
				</LabelStyle>
				<LabelStyle>
					<InputStyled type='password' name='password' id='password' placeholder='Password'/>
				</LabelStyle>
				<Button texto={"Entrar"} />
		    <p><a href=''>Registre-se!</a></p>
			</FormStyle>
  );
}

export default FormUser;