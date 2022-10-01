import React, { useState } from 'react'

const Registration = () => {

    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [value, setValue] = useState("")


    const [firstNameErr, setfirstNameErr] = useState("")
    const [lastNameErr, setlastNameErr] = useState("")
    const [emailErr, setemailErr] = useState("")



    const submithandler = (e) => {
        e.preventDefault();

        if (!firstName) {
            setfirstNameErr("please Enter a firstName ")
        } if (!lastName) {
            setlastNameErr("please Enter a lastName")
        } if (!email) {
            setemailErr("please Enter a Email")
        } if (firstName && lastName && email) {

            setValue("Successfull")

            setfirstName("")
            setlastName("")
            setemail("")
        }

    }


    return (
        <div className='container'>
            <div className='main'>

                <h1 className='haeding'>Registration Form</h1>

                <form>

                    <div >
                        <h1 className='sucess_mesage' >{value}</h1>
                    </div>

                    <div>
                        <input type="text" id='firstName' placeholder='FirstName' required value={firstName} onChange={(e) => { setfirstName(e.target.value) }} />

                    </div>
                    <div className='err_maseage'>
                        <h2> {firstNameErr}</h2>
                    </div>

                    <div>
                        <input type="text" id='lastName' placeholder='LastName' required value={lastName} onChange={(e) => { setlastName(e.target.value) }} />
                    </div>
                    <div className='err_maseage'>
                        <h2> {lastNameErr}</h2>
                    </div>


                    <div>
                        <input type="email" id='email' placeholder='Email' required value={email} onChange={(e) => { setemail(e.target.value) }} />

                    </div>
                    <div className='err_maseage'>
                        <h2> {emailErr}</h2>
                    </div>


                    <div>
                        <button onClick={submithandler}>Register</button>
                    </div>

                </form >


            </div>

        </div >
    )
}

export default Registration