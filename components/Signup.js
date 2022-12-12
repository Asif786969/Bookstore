import React, { useState } from "react";
const Signup = () => {
	const [data, setData] = useState("");

	const handleChange = (e) => {
		setData((values) => ({ ...values, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(data);
	};

	return (
		<div>
			<section class="h-100 h-custom">
				<div class="container py-5 h-100">
					<div class="row d-flex justify-content-center align-items-center h-100">
						<div class="col-lg-8 col-xl-6">
							<div class="card rounded-3">
								<div class="card-body p-4 p-md-5">
									<h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
										Registration Info
									</h3>

									<form onSubmit={handleSubmit} class="px-md-2">
										<div class="form-outline mb-4">
											<label class="form-label" for="form3Example1q">
												Name
											</label>
											<input
												type="text"
												id="form3Example1q"
												name="name"
												class="form-control"
												onChange={handleChange}
											/>
										</div>
										<div class="form-outline mb-4">
											<label class="form-label" for="form3Example1q">
												Password
											</label>
											<input
												type="text"
												id="form3Example1q"
												name="name"
												class="form-control"
												onChange={handleChange}
											/>
										</div>
										<div class="form-outline mb-4">
											<label class="form-label" for="form3Example1q">
												Password
											</label>
											<input
												type="text"
												id="form3Example1q"
												name="name"
												class="form-control"
												onChange={handleChange}
											/>
										</div>

										<button type="submit" class="btn btn-success btn-lg mb-1">
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Signup;
