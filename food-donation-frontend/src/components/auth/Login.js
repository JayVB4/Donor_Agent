import React, { useEffect, useState } from 'react'
import { EMAIL_REGEXP, FAILED, LOADING, LOGIN_API, SUCCESS } from '../../apis';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserInfo, getLoginInError, getLoginInStatus, login, selectAccessToken, setLoginStatusToNull, } from '../../features/auth/authUserSlice';
import bg from '../../images/bg.png'

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginStatus = useSelector(getLoginInStatus)
  const loginError = useSelector(getLoginInError)
  const accessToken = useSelector(selectAccessToken);


  // form validation
  const initialValues = {
    email: '',
    password: '',
    confirm_password: '',
  };


  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [loading, setLoading] = useState(false)


  const onChangeInputFieldsHandler = (e) => {

    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues))
    setIsSubmit(true)

  }

  const validate = (values) => {
    const errors = {};

    if (!EMAIL_REGEXP.test(values.email)) {
      errors.email = 'This is not valid email';
    }
    if (values.password.length < 6) {
      errors.password = 'Password must be more than 5 character';
    }

    console.log(errors);
    return errors;
  };


  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log('fv', formValues);
      setLoading(true);
      // call login function
      dispatch(login(formValues));
    }
  }, [formErrors]);


  useEffect(() => {
    if (loginStatus === LOADING) {

      toast.info('Please wait, It will take sometime', { progress: false });
    } else if (loginStatus === SUCCESS) {

      dispatch(fetchUserInfo())
      toast.success('Login done, welcome', {
        autoClose: 1000,
        hideProgressBar: true,
      });
      setTimeout(() => navigate("/user/profile"), 3000);

    } else if (loginStatus === FAILED) {
      console.log(loginError);

      dispatch(setLoginStatusToNull());
      toast.error("Login failed, please enter correct username and password");
    }
  }, [loginStatus])

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mt-10 ">Login now!</h1>
            <p className="py-6  font-semibold">
              "Join the fight against hunger by logging into your Warm Hugs account. Here, you'll have the power to make a difference, one meal at a time."
            </p>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered input-primary"
                  id="email"
                  name="email"
                  onChange={onChangeInputFieldsHandler}
                  value={formValues.email}
                  required
                />
                <p className="text-red-500">{formErrors.email}</p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered input-primary"
                  id="password"
                  name="password"
                  onChange={onChangeInputFieldsHandler}
                  value={formValues.password}
                  required
                />
                <p className="text-red-500">{formErrors.password}</p>
                {/* <label className="label">
									<a
										href="#"
										className="label-text-alt link link-hover"
									>
										Forgot password?
									</a>
								</label> */}
              </div>


              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={onSubmitHandler}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login