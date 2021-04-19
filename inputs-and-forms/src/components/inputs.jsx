import React from 'react';

class Inputs extends React.Component {

    state = {
        name: '',
        country: '',
        bio: '',
        birthDay: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

   

    render() {
        return (
            <div>
                <input
                    onChange={this.change}
                    className='form-control my-2'
                    type="text"
                    name="name"
                    id="myName"
                    placeholder="Makin"
                />
                <select
                    onChange={this.change}
                    className='form-control my-2'
                    name="country"
                    id="countryList"
                >


                    <option value="Country">Country</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Shrilanka">Shrilanka</option>
                    <option value="China">China</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Bhutan">Bhutan</option>
                </select>

                <textarea
                    onChange={this.change}

                    className='form-control my-2'
                    name="bio" placeholder="tell me about yourself"
                    id="inputText"
                    cols="20"
                    rows="10">

                </textarea>
                <input
                    onChange={this.change}

                    className='form-control my-2'
                    type="date"
                    name="Birthday"
                    id="submitBirthday" />
            </div>
        )
    }
}


export default Inputs;