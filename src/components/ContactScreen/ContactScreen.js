import './style.scss'
import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import {PasswordInput} from "../PasswordInput/PaswordInput";

export default function ContactScreen() {
    const {
        register,
        handleSubmit,
        formState: {errors},
        watch
    } = useForm({
        mode: 'onBlur',
    });

    const [changeLanguage, setChangeLanguage] = useState(true)


    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <h1>Register your account!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*Account Type*/}
                <div>
                    <button type="button" onClick={() => setChangeLanguage(!changeLanguage)}>CHANGE LANGUAGE</button>
                    <div>
                        {changeLanguage ? <p>PL</p> : <p>EN</p>
                        }
                    </div>
                </div>
                <div className="accountType">
                    <input id="regularAccount"
                           {...register("accountType", {required: true})}
                           value="Regular account"
                           type="radio"/>
                    <label htmlFor="regularAccount">
                        Regular account
                    </label>
                    <input id="businessAccount"
                           {...register("radio", {required: true})}
                           value="Business account"
                           type="radio"/>
                    <label htmlFor="businessAccount">
                        Business account
                    </label>
                </div>

                {/*Registration details*/}
                <p className="registrationDetails">1. Registration details</p>
                <div className="registrationDetails__wrapper">
                    <input type="text" placeholder="First name"
                           {...register('name', {
                               required: true,
                               maxLength: 80
                           })}/>
                    {errors.name && <p>This field is required</p>}
                    <input
                        type="text"
                        placeholder="Last name"
                        {...register('lastname', {
                            required: {value: true, message: 'This field is required!'},
                            minLength: {value: 3, message: 'Min length 3!'},
                            maxLength: {value: 15, message: 'Max length 15!'},
                        })}
                    />
                    {errors.lastname && <p>{errors.lastname.message}</p>}
                    <input
                        type="text"
                        placeholder="Email"
                        {...register('email', {required: true})}/>
                    {errors.email && <p>{errors.email.message}</p>}

                    <input

                        placeholder="Password"
                        name="password"
                        {...register('password', {
                            validate: value => value === 'appgo' ? true : 'wrong pass'
                        })}
                    />
                    {/*<label htmlFor="password">*/}
                    {/*    <span className="registrationDetails__showPass">SHOW</span>*/}
                    {/*</label>*/}
                    {errors.password && <p>{errors.password.message}</p>}
                    <label htmlFor="password" className="registrationDetails__passVerif">
                        at least 8 characters • upper case • lower case • digit
                    </label>

                    <PasswordInput/>




                    {/*<input*/}
                    {/*    type={passwordShown ? "text" : "password"}*/}
                    {/*    placeholder="Retype password"*/}
                    {/*    name="retypePassword"*/}
                    {/*    {...register('retypePassword', {*/}
                    {/*            validate: value => value === watch('password') ? true : 'pass is not the same as above'*/}
                    {/*        }*/}
                    {/*    )}*/}
                    {/*/>*/}
                    {/*<label htmlFor="retypePassword">*/}
                    {/*    <span className="registrationDetails__showPass -retypePass">SHOW</span>*/}
                    {/*</label>*/}
                    {errors.retypePassword && <p>{errors.retypePassword.message}</p>}
                    <label htmlFor="retypePassword" className="registrationDetails__passVerif">
                        at least 8 characters • upper case • lower case • digit
                    </label>

                </div>

                {/*Age Type*/}
                <p className="registrationDetails">2. Your age</p>
                <div className="ageType">
                    <button type="button">I am under 18</button>
                    <button type="button">I am 18 years old or older</button>
                </div>

                <div className="dobType">
                    <p>We need your exact date of birth</p>
                    <label htmlFor="">
                        <input type="date"
                               {...register("date", {required: true})} />
                    </label>
                </div>

                {/*Gender Type*/}
                <p className="registrationDetails">2. Your gender</p>
                <div className="genderType">
                    <select {...register("gender")}>
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="transgender">transgender</option>
                    </select>

                </div>
                <div className="consentsType">
                    <p className="registrationDetails">3. Consents and declarations</p>
                    <label htmlFor="">

                        <input type="checkbox" {...register("checkbox")} />
                        Select all consents
                    </label>
                    <hr/>
                    <div className="consentsType__chkbxsWrapper">
                        <label htmlFor="">
                            <input type="checkbox"
                                   {...register("consent1", {required: true})} />
                            * I declare that I have read and accept the Terms & Conditions.
                        </label>
                        <label htmlFor="">

                            <input type="checkbox"
                                   {...register("consent2")} />
                            I will carry out transactions on the platform with the consent of my legal guardian

                        </label>
                        <label htmlFor="">
                            <input type="checkbox"
                                   {...register("consent3")} />
                            I want to receive: discount codes, special offers or other marketing communication,
                            including personalized information about services and goods available on the website, via
                            electronic communication. I acknowledge that I may withdraw my consent at any time.
                            (optional)expand
                        </label>
                        <label htmlFor="">
                            <input type="checkbox"
                                   {...register("consent4")} />
                            I want to receive from Allegro: discount codes, special offers or other marketing
                            communication, including personalized information about services and goods of entities
                            cooperating with Allegro, available on the website, via electronic communication. I
                            acknowledge that I may withdraw my consent at any time. (optional)expand
                        </label>
                    </div>
                </div>
                <input type="submit"/>
            </form>
        </>
    )
}