import React, { useState } from 'react'
import './Form.css'

function Form() {
    const [userInput, setUserInput] = useState({
        fullName: '',
        passport: '',
        gender: '',
        age: '',
        mail: '',
        phone: '',
        info: '',
        check: false
    })

    const fullNameChangeHandler = (event) => {

        setUserInput((previousState) => {
            return {
                ...previousState,
                fullName: event.target.value
            }
        })
    }

    const passportChangeHandler = (event) => {

        setUserInput((previousState) => {
            return {
                ...previousState,
                passport: event.target.value
            }
        })
    }

    const ageChangeHandler = (event) => {

        setUserInput((previousState) => {
            return {
                ...previousState,
                age: event.target.value
            }
        })

    }

    const mailChangeHandler = (event) => {

        setUserInput((previousState) => {
            return {
                ...previousState,
                mail: event.target.value
            }
        })
    }

    const phoneChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                phone: event.target.value
            }
        }
        )
    }

    const infoChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                info: event.target.value
            }
        })

    }

    const checkChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                check: event.target.checked
            }
        })

        console.log(event.target)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const data = {
            inputFullName: userInput.fullName,
            inputPassport: userInput.passport,
            inputAge: userInput.age,
            inputMail: userInput.mail,
            inputPhone: userInput.phone,
            inputInfo: userInput.info,
            inputCheck: userInput.check

        }

        setUserInput({
            fullName: '',
            passport: '',
            age: '',
            mail: '',
            phone: '',
            info: '',
            check: false


        })

        console.log(data)

    }


    return (
        <div className="flex p20">

            <form onSubmit={submitHandler} action="#" className="user-form">
                <label htmlFor="fullname">ФИО пациента:</label>
                <input onChange={fullNameChangeHandler} type="text" name="fullname" id="fullname" required value={userInput.fullName} />

                <label htmlFor="passport">Серия и номер паспорта:</label>
                <input onChange={passportChangeHandler} type="text" name="passport" id="passport" required value={userInput.passport} />

                <label htmlFor="gender">Пол:</label>
                <select id="select">
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                </select>

                <label htmlFor="age">Возраст:</label>
                <input onChange={ageChangeHandler} type="number" name="age" id="age" required value={userInput.age} />

                <label htmlFor="mail">Email:</label>
                <input onChange={mailChangeHandler} type="email" name="mail" id="mail" value={userInput.mail} />

                <label htmlFor="phone">Телефон:</label>
                <input onChange={phoneChangeHandler} type="tel" name="phone" id="phone" value={userInput.phone} />

                <label htmlFor="info">Описание симптомов:</label>
                <textarea onChange={infoChangeHandler} rows="5" cols="30" id="info" value={userInput.info}></textarea>
                <div className="flex">
                    <label className="label-check" htmlFor="check">Повторный прием:</label>
                    <input onClick={checkChangeHandler} type="checkbox" name="check" id="check" checked={userInput.check} />


                </div>

                <button className="btn" type="submit">Отправить</button>

            </form>



        </div>


    )
}

export default Form