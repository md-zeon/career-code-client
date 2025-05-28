import Lottie from "lottie-react";
import registerLottie from "../../assets/lotties/register.json";
import { Link } from "react-router";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
	const { createUser } = use(AuthContext);

	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);

		createUser(email, password)
			.then((res) => {
				console.log(res.user);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<div className='hero bg-base-200 min-h-screen'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<div className='text-center lg:text-left'>
					<Lottie
						style={{ width: "300px" }}
						loop={true}
						animationData={registerLottie}
					></Lottie>
				</div>
				<div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
					<div className='card-body'>
						<h1 className='text-5xl font-bold'>Register now!</h1>
						<form
							className='fieldset'
							onSubmit={handleRegister}
						>
							<label className='label'>Email</label>
							<input
								type='email'
								name='email'
								className='input'
								placeholder='Email'
								required
							/>
							<label className='label'>Password</label>
							<input
								type='password'
								name='password'
								className='input'
								placeholder='Password'
								required
							/>
							<div>
								<Link className='link link-hover'>Forgot password?</Link>
							</div>
							<button
								type='submit'
								className='btn btn-neutral mt-4'
							>
								register
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
