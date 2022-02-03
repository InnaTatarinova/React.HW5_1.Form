import React from "react";
import ShowJsonComp from "../ShowJsonComp/ShowJsonComp";


class FormComp extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    state = {
        login: "",
        email: '',
        password: "",
        btnWasClick: false
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value,

        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            btnWasClick: true
        })
        console.log(this.state);
    }

    handleClick() {

    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="login"
                        value={this.state.login}
                        onChange={this.handleChange}
                        placeholder="Your login"
                    />
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Your email"
                    />

                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="Your password"
                    />

                    <button onClick={this.handleClick}>
                        Show in Json
                    </button>

                    <div>
                        {this.state.btnWasClick
                            ? <ShowJsonComp
                                info={JSON.stringify(this.state)}
                            />
                            : <p></p>
                        }
                    </div>
                </form>
            </div>
        )
    }
}
export default FormComp;