import React from "react";
import logo from "./logo.svg";
import "./App.css";
import VocaCard from "./pages/voca-card/voca-card.component";
import VocaForm from "./pages/voca-form/voca-form.component";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            vocabulary: [{
              word: 'cahier',
              translation: 'libro'
            }],
            index: 0
        };
    }
    handleNewWord = (word, translation) => {
        this.setState(state => {
            state.vocabulary.push({ word, translation });
            return { ...state };
        });
    };
    handleCorrect = () => {
      this.setState(state => {
        const {index} = state
        state.index = index +1
        return {...state}
      })
    }
    handleFailed = () => {
      alert('No es correcta')
    }
    render() {
      const {vocabulary, index} = this.state
        return (
            <div className="App">
                <VocaForm handleNew={this.handleNewWord} />
                <VocaCard word={vocabulary[index]}  handleCorrect={this.handleCorrect} handleFailed={this.handleFailed}/>
            </div>
        );
    }
}

export default App;
