import React from "react";

class VocaCard extends React.Component {
    constructor(props) {
        super(props);
        const {word} = this.props;
        const actualWord = word.word;
        const translation = word.translation;
        const type = !!Math.floor(Math.random());

        this.state = {
            word: actualWord,
            translation,
            type,
            input: ""
        };
    }
    handleSubmit = event => {
        event.preventDefault();

        const { handleCorrect, handleFailed } = this.props;
        const { word, input, type, translation } = this.state;
        console.log(type, input, word, translation)
        if (type) {
            if (input === word) {
                handleCorrect();
            } else {
                handleFailed();
            }
        } else {
            if (input === translation) {
                handleCorrect();
            } else {
                handleFailed();
            }
        }
    };
    handleChange = event => {
        const { value } = event.target;
        console.log(value)
        this.setState({ input: value });
    };
    render() {
        const { type, word, translation, input } = this.state;
        return (
            <div className="voca-card">
                <div className="header">
                    {type ? (
                        <p>
                            ¿Cómo se dice en español{" "}
                            <span> {translation}</span>?{" "}
                        </p>
                    ) : (
                        <p>
                            ¿Cómo se dice en frances <span> {word}</span>?{" "}
                        </p>
                    )}

                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={input}
                            onChange={this.handleChange}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default VocaCard;
