import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {SpinnerDiamond} from "spinners-react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useLogin} from "./hooks/useLogin";

const Login: React.FC<LoginProps> = ({setLoginInfo, showToast}) => {
	const {loading, onSubmit, register, handleSubmit, errors, isSubmitting} = useLogin({setLoginInfo, showToast});

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Row>
				<Form.Group as={Col} md="12" controlId="Email">
					<Form.Label>Email Address:</Form.Label>
					<Form.Control type="email" placeholder="JohnDoe@email.com" {...register("email")} />
					{errors.email && <div style={{color: "red"}}>{errors.email.message}</div>}
				</Form.Group>

				<Form.Group as={Col} md="12" controlId="Password">
					<Form.Label>Password:</Form.Label>
					<Form.Control type="password" placeholder="Password" {...register("password")} />
					{errors.password && <div style={{color: "red"}}>{errors.password.message}</div>}
				</Form.Group>
			</Row>

			{errors.root && <div style={{color: "red"}}>{errors.root.message}</div>}

			<Button type="submit" disabled={isSubmitting || loading} className="mt-3">
				{isSubmitting || loading ? "Logging in..." : "Login"}
			</Button>

			{loading && (
				<SpinnerDiamond
					size={90}
					thickness={151}
					speed={96}
					color="rgba(57, 172, 63, 1)"
					secondaryColor="rgba(0, 0, 0, 1)"
				/>
			)}
		</Form>
	);
};

export default Login;
