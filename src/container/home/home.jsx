import React, { useState } from 'react';
import { Button, Form, Row, Col, Table, Modal, Container } from 'react-bootstrap';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(props) {
	// const [contact, setContact] = useState('');
	const [addFormData, setAddFormData] = useState({
		fullName: '',
		address: '',
		phoneNumber: '',
		email: '',
	});

	const [editFormData, setEditFormData] = useState({
		fullName: '',
		address: '',
		phoneNumber: '',
		email: '',
	});
	const [index, setIndex] = useState();

	let [mapData, setMapData] = useState([]);

	const [validatedStatus, setValidatedStatus] = useState(false);

	const [show, setShow] = useState(false);

	const handleClose = () => {
		const temp = [...mapData];

		temp[index] = editFormData;
		setMapData(temp);
		setEditFormData({
			fullName: '',
			address: '',
			phoneNumber: '',
			email: '',
		});
		setIndex('');
		setShow(false);
	};
	const handleShow = (data, index) => {
		setShow(true);
		setEditFormData(data);

		setIndex(index);
	};

	const handleAddFormChange = (e) => {
		const { name, value } = e.target;
		const newFormData = { ...addFormData };

		newFormData[name] = value;

		setAddFormData(newFormData);
	};

	const handleEditFormChange = (e) => {
		const { name, value } = e.target;
		const newFormData = { ...editFormData };

		newFormData[name] = value;

		setEditFormData(newFormData);
	};

	const handleAddFormSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();
		const form = event.currentTarget;
		if (form.checkValidity()) {
			const newFormData = [...mapData, addFormData];

			setMapData(newFormData);
			setAddFormData({
				fullName: '',
				address: '',
				phoneNumber: '',
				email: '',
			});
		}
	};
	const handleModalFormSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();
		const form = event.currentTarget;
		if (form.checkValidity()) {
			const newFormData = [...mapData, addFormData];

			setMapData(newFormData);
			setAddFormData({
				fullName: '',
				address: '',
				phoneNumber: '',
				email: '',
			});
		}
	};

	const handleDeleteFormSubmit = (index) => {
		const temp = [...mapData];
		temp.splice(index, 1);
		setMapData(temp);
		setAddFormData('');
	};

	// const [editData, setEditData] = useState(setMapData);

	// const handleEditFormData = () => {
	// 	let formdata = '';
	// 	setEditData(formdata);
	// };

	// const handleEditForm = () => {
	// 	setEditFormData();
	// };

	// const handleEditFormSubmit = (index) => {
	// 	const temp = [...mapData];
	// 	temp.splice(index, 1);
	// 	setMapData(temp);
	// 	setAddFormData('');
	// };

	// const [fullNameErr, setFullNameErr] = useState({});
	// const [addressErr, setAddressErr] = useState({});
	// const [phoneNumberErr, setPhoneNumberErr] = useState({});
	// const [emailErr, setEmailErr] = useState({});

	// const [...setMapData, setNewMapData] = useState();

	// const handleDeleteFormSubmit = () => {
	// 	setNewMapData([]);
	// };

	return (
		<Container>
			<div className="heading">
				<h2>Add Contacts</h2>
			</div>
			<Form noValidate validated={validatedStatus} onSubmit={(e) => handleAddFormSubmit(e)}>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="formBasicFullName">
							{/* <Form.Label>Email address</Form.Label> */}
							<Form.Control
								type="text"
								placeholder="Enter Full Name"
								name="fullName"
								required
								value={addFormData.fullName}
								onChange={(e) => {
									handleAddFormChange(e);
								}}
							/>
							{/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
						</Form.Group>
					</Col>

					<Col>
						<Form.Group className="mb-3" controlId="formBasicAddress">
							{/* <Form.Label>Password</Form.Label> */}
							<Form.Control
								type="text"
								placeholder="Address"
								required
								name="address"
								value={addFormData.address}
								onChange={(e) => handleAddFormChange(e)}
							/>
						</Form.Group>
					</Col>
					{/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group> */}
					<Col>
						<Form.Group className="mb-3" controlId="formBasicPhoneNumber">
							{/* <Form.Label>Email address</Form.Label> */}
							<Form.Control
								type="number"
								placeholder="Enter Phone Number"
								name="phoneNumber"
								required
								value={addFormData.phoneNumber}
								onChange={(e) => handleAddFormChange(e)}
							/>
							{/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							{/* <Form.Label>Email address</Form.Label> */}
							<Form.Control
								type="email"
								placeholder="Enter your Email"
								required
								name="email"
								value={addFormData.email}
								onChange={(e) => handleAddFormChange(e)}
							/>
							<Form.Control.Feedback type="invalid">Please Provide Email...</Form.Control.Feedback>
							{/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
						</Form.Group>
					</Col>
					<Col>
						<Button variant="success" type="submit">
							Submit
						</Button>
					</Col>
				</Row>
			</Form>
			{/* <div className="form">
				<fieldset>
					<input
						type="text"
						value={addFormData.fullName}
						name="fullName"
						placeholder="Enter your Name"
						required
						onChange={(e) => handleAddFormChange(e)}
					/>
					<input
						type="text"
						name="address"
						value={addFormData.address}
						placeholder="Enter Address"
						required
						onChange={(e) => handleAddFormChange(e)}
					/>
					<input
						type="number"
						name="phoneNumber"
						value={addFormData.phoneNumber}
						placeholder="Enter your Number"
						required
						onChange={(e) => handleAddFormChange(e)}
					/>
					<input
						type="email"
						name="email"
						value={addFormData.email}
						placeholder="Enter your Email"
						required
						onChange={(e) => handleAddFormChange(e)}
					/>

					<button className="Add" onClick={() => handleAddFormSubmit()}>
						Add
					</button>
				</fieldset>
			</div> */}
			<Table hover bordered>
				<thead>
					<tr>
						<th>Full Name</th>
						<th>Address</th>
						<th>Phone Number</th>
						<th>Email</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{mapData?.map((data, index) => {
						return (
							<tr>
								<td>{data.fullName}</td>
								<td>{data.address}</td>
								<td>{data.phoneNumber}</td>
								<td>{data.email}</td>
								<td>
									<Button variant="danger" onClick={() => handleDeleteFormSubmit(index)}>
										Delete
									</Button>
								</td>
								<td>
									<Button variant="success" onClick={() => handleShow(data, index)}>
										Edit
									</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Edit you Data</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form noValidate validated={validatedStatus} onSubmit={(e) => handleAddFormSubmit(e)}>
						<Row>
							<Form.Group className="mb-3" controlId="formBasicFullName">
								{/* <Form.Label>Email address</Form.Label> */}
								<Form.Control
									type="text"
									placeholder="Enter Full Name"
									name="fullName"
									required
									value={editFormData.fullName}
									onChange={(e) => {
										handleEditFormChange(e);
									}}
								/>
								{/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicAddress">
								{/* <Form.Label>Password</Form.Label> */}
								<Form.Control
									type="text"
									placeholder="Address"
									required
									name="address"
									value={editFormData.address}
									onChange={(e) => handleEditFormChange(e)}
								/>
							</Form.Group>

							{/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group> */}

							<Form.Group className="mb-3" controlId="formBasicPhoneNumber">
								{/* <Form.Label>Email address</Form.Label> */}
								<Form.Control
									type="number"
									placeholder="Enter Phone Number"
									name="phoneNumber"
									required
									value={editFormData.phoneNumber}
									onChange={(e) => handleEditFormChange(e)}
								/>
								{/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicEmail">
								{/* <Form.Label>Email address</Form.Label> */}
								<Form.Control
									type="email"
									placeholder="Enter your Email"
									required
									name="email"
									value={editFormData.email}
									onChange={(e) => handleEditFormChange(e)}
								/>
								<Form.Control.Feedback type="invalid">Please Provide Email...</Form.Control.Feedback>
								{/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
							</Form.Group>
						</Row>
					</Form>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="danger" onClick={handleClose}>
						Close
					</Button>
					<Button variant="success" onClick={handleClose}>
						Save changes
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
}

export default Home;
