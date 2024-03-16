import { useFormik } from "formik";
import registerSchema from "../../validate/register";

export default function RegisterForm() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: registerSchema,
        onSubmit: values => {
           
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} >
            <div className="form-floating">
                <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className={formik.errors.email && formik.touched.email ? 'form-control is-invalid' : 'form-control' }
                id="floatingInput"
                placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
                {
                    formik.errors.email && formik.touched.email && <span className="badge  my-1 bg-danger">{formik.errors.email}</span>

}
                {/* <span className="badge  my-1 bg-danger">{formik.errors.email}</span> */}
            </div>
            <div className="form-floating">
                <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className={formik.errors.password && formik.touched.password  ? 'form-control is-invalid' : 'form-control'}
                    id="floatingPassword"
                    placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
                {
                    formik.errors.password && formik.touched.password && <span className="badge  my-1 bg-danger">{formik.errors.password}</span>

                }
            </div>


            <button className="btn btn-primary w-100 py-2" type="submit">Sign up</button>
            <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
        </form>
    )
}
