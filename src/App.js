import React, { Component } from 'react';
import _ from 'lodash';
import { data } from './data.js';

const diseaseNames = _.shuffle(data.map((item, index) => ({diseaseName: item.diseaseName, index: index}) ));
const pathogens = _.shuffle(data.map((item, index) => ({pathogen: item.pathogen, index: index})));

const App = props => (
  <div className='container'>
  <br />
  <div className='row'>
    <div className='col-md-6'>
      Description
      <hr />

    </div>
    <div className='col-md-6'>
      Answer
      <hr />

    </div>
  </div>
  
  
  <div className='row'>
    <div className='col-md-6'>
      col1
    </div>
    <div className='col-md-6'>
      col2
    </div>
  </div>

  <div className='row'>
    <div className='col-md-6'>
      col1
    </div>
    <div className='col-md-6'>
      col2
    </div>
  </div>

  <div className='row'>
    <div className='col-md-6'>
      col1
    </div>
    <div className='col-md-6'>
      col2
    </div>
  </div>

  <div className='row'>
    <div className='col-md-6'>
      col1
    </div>
    <div className='col-md-6'>
      col2
    </div>
  </div>
</div>
);

export default App;
