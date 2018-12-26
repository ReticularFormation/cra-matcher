import React, { Component } from 'react';
import _ from 'lodash';
import { data } from './data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diseaseNames: [],
      pathogens: [],
    };
  }

  componentDidMount() {
    this.refresh();
  }

  checkAnswers = () => {
    const { answer, diseaseNames, pathogens } = this.state;

    const a0 = answer.map((index) => diseaseNames[index]).map((item => item.index));
    const a1 = pathogens.map((item) => item.index);

    alert(`${_.isEqual(a0, a1) ? 'correct' : 'incorrect'}`);
  }

  refresh = () => {
    const diseaseNames = _.shuffle(data.map((item, index) => ({diseaseName: item.diseaseName, index: index}) ));
    const pathogens = _.shuffle(data.map((item, index) => ({pathogen: item.pathogen, index: index})));
    const left = diseaseNames.map((item) => item.index);
    const right = pathogens.map((item) => item.index);
    const answer = diseaseNames.map(() => (-1));

    this.setState({
      diseaseNames,
      pathogens,
      left,
      right,
      answer,
    });
  }

  setAnswer = (index, number) => {
    let updatedAnswer = this.state.answer.slice();
    updatedAnswer[index] = Number(number);
    this.setState({answer: updatedAnswer});
  };

  render() {
    const { diseaseNames, pathogens, left, right } = this.state;
    const { refresh, checkAnswers, setAnswer } = this;

    return (
      <div className='container'>
        <br />
        <div className='row'>
          <div className='col-md-6'>
            <div>Disease Name</div>
            <hr />
            {diseaseNames.map((item, index) => (
              <div className='row' key={item.diseaseName}>
                <div className='col-md-1'>{index}</div>
                <div className='col-md-11'>{item.diseaseName}</div>
              </div>
            ))}
          </div>
          <div className='col-md-6'>
            <div>Pathogen</div>
            <hr />
            {pathogens.map((item, index) => (
              <div className='row' key={item.pathogen}>
                <div className='col-md-2'>
                  <select
                    className='form-control'
                    onChange={(e) => {setAnswer(index, e.target.value)}}
                  >
                    {[...Array(pathogens.length).keys()].map((x) => <option key={x}>{x}</option>)}
                  </select>
                </div>
                <div className='col-md-10'>{item.pathogen}</div>
              </div>
            ))}
          </div>
          <button className='btn btn-secondary' onClick={refresh} style={{marginRight: '8px'}}>Refresh</button>
          <button className='btn btn-primary' onClick={checkAnswers}>Check</button>
        </div>
      </div>
    );
  }
};

export default App;
