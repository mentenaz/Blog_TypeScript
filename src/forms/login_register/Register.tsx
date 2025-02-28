import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {SpinnerDiamond} from "spinners-react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useRegister} from "./hooks/useRegister";

const Register: React.FC<RegisterProps> = ({toggleForm, showToast}) => {
	const {loading, onSubmit, register, handleSubmit, errors, isSubmitting} = useRegister({toggleForm, showToast});

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Row className="mb-3">
				<Form.Group as={Col} md="12">
					<Form.Label>First Name</Form.Label>
					<Form.Control type="text" {...register("FirstName")} />
					{errors.FirstName && <div style={{color: "red"}}>{errors.FirstName.message}</div>}
				</Form.Group>
				<Form.Group as={Col} md="12">
					<Form.Label>Last Name</Form.Label>
					<Form.Control type="text" {...register("LastName")} />
					{errors.LastName && <div style={{color: "red"}}>{errors.LastName.message}</div>}
				</Form.Group>
			</Row>
			<Row className="mb-3">
				<Form.Group as={Col} md="12">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" {...register("Email")} />
					{errors.Email && <div style={{color: "red"}}>{errors.Email.message}</div>}
				</Form.Group>
				<Form.Group as={Col} md="12">
					<Form.Label>Contact Number</Form.Label>
					<Form.Control type="text" {...register("ContactNumber")} />
					{errors.ContactNumber && <div style={{color: "red"}}>{errors.ContactNumber.message}</div>}
				</Form.Group>
			</Row>
			<Row className="mb-3">
				<Form.Group as={Col} md="12">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" {...register("Password")} />
					{errors.Password && <div style={{color: "red"}}>{errors.Password.message}</div>}
				</Form.Group>
				<Form.Group as={Col} md="12">
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control type="password" {...register("PasswordConfirm")} />
					{errors.PasswordConfirm && <div style={{color: "red"}}>{errors.PasswordConfirm.message}</div>}
				</Form.Group>
			</Row>
			<Form.Group className="mb-3">
				<Form.Check {...register("terms")} label="Agree to terms and conditions" />
				{errors.terms && <div style={{color: "red"}}>{errors.terms.message}</div>}
			</Form.Group>
			{errors.root?.serverError && <div style={{color: "red"}}>{errors.root.serverError.message}</div>}

			<Button disabled={isSubmitting || loading} type="submit">
				{isSubmitting || loading ? "Registering..." : "Register"}
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

export default Register;
