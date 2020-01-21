import React from "react";
import FormInput from "../form-input/form-contorl.component";

class VocaForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            word: "",
            translation: ""
        };
    }
    handleSubmit = event => {
        event.preventDefault();

        const {handleNew} = this.props;
        const {  word, translation } = this.state;


        handleNew(word, translation)
    };
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };
    render() {
        const {  word, translation } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <FormInput
                    label="Palabra en español"
                    name="word"
                    value={word}
                    onChange={this.handleChange}
                />
                <FormInput
                    label="Palabra en Frances"
                    name="translation"
                    value={translation}
                    onChange={this.handleChange}
                />
                <button type="submit">Añadir</button>
            </form>
        );
    }
}

export default VocaForm;
