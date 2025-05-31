import Lottie from "lottie-react";
import signInLottie from "../../assets/lotties/signIn.json";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../../shared/SocialLogin";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
	const { signInUser } = useAuth();
	const location = useLocation();
	const from = location.state || "/";
	const navigate = useNavigate();

	const handleSignIn = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);

		signInUser(email, password)
			.then((res) => {
				console.log(res.user);
				navigate(from);
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
						style={{ width: "400px" }}
						loop={true}
						animationData={signInLottie}
					></Lottie>
				</div>
				<div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
					<div className='card-body'>
						<h1 className='text-5xl font-bold'>Sign In now!</h1>
						<form
							className='fieldset'
							onSubmit={handleSignIn}
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
								Sign In
							</button>
						</form>
						<SocialLogin from={from} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
