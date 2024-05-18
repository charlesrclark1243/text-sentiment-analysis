import React from 'react'
import './Main.css'

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pred: '',
            p_pos: -1.0,
            p_neg: -1.0
        }

        this.handleSendClick = this.handleSendClick.bind(this);

        // console.log('0');
    }

    handleSendClick(ev) {
        ev.preventDefault();

        // console.log('1');

        if (document.getElementById('input-text').value.length > 0) {
            this.setState({ text: document.getElementById('input-text').value });

            const data = new FormData();
            data.append('text', document.getElementById('input-text').value);
            
            // console.log('2');
            
            fetch('https://cclark-text-sentiment-analysis-ddf7ef368ea8.herokuapp.com/analyze', {
                method: 'POST',
                body: data
            }).then(
                response => response.json()
            ).then(
                body => {
                    this.setState({ pred: body.prediction });
                    this.setState({ p_pos: body.p_pos });
                    this.setState({ p_neg: body.p_neg });

                    // console.log('3');
                    document.getElementById('output').style.display = 'block';
                }
            )
        } else {
            document.getElementById('output').style.display = 'none';
        }
    }

    
    render() {
        return (
            <form onSubmit={this.handleSendClick}>
                <input type="text" id='input-text' defaultValue={'Enter the text message here'} />
                <p id='output'>"{this.state.pred}" with probabilities Pr positive = {this.state.p_pos}, Pr negative = {this.state.p_neg}</p>
                <button id='send-button'>Submit</button>

            </form>
        );
    }
}

export default Main;