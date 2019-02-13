import React, { Component } from 'react';
import './App.css';
import {
  tree1,
  // tree2
} from './testCases/trees'

const renderWidestLevel = (treeRoot) => {
  // TODO: implement
  return <p>Not implemented</p>
}

const renderTree = (treeRoot) => {
  // TODO: implement
  return <p>Not implemented</p>
}

const renderNodeById = (treeRoot, nodeId) => {
  // TODO: implement
  return <p>Not implemented</p>
}

const renderTreeLevel = (treeRoot, level) => {
  // TODO: implement
  return <p>Not implemented</p>
}

class App extends Component {
  render() {

    // Change this to change the test dataset
    const treeRoot = tree1;

    return (
      <div className="App">
        <h2> Okera </h2>
        <p>Edit <code>src/App.js</code> to do the following</p>

        <h2>Rendering tree: {treeRoot.renderer()}</h2>

        <h3>Render the widest level of the tree</h3>
        {renderWidestLevel(treeRoot)}
        
        <h3>Render the tree</h3>
        {renderTree(treeRoot)}

        <h3>Render node by id</h3>
        <p>This will require an input</p>
        {renderNodeById()}

        <h3>Render tree level</h3>
        <p>This will require an input</p>
        {renderTreeLevel()}
      </div>
    );
  }
}

export default App;
