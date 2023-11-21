import './App.css'
import LinkContainer from './LinkContainer'
import { useState } from 'react'
function addTableRow(){
  <tr>
    <th>linkName</th>
    <th>URL</th>
    <th><button>Delete</button></th>
  </tr>
}

function App() {
  const [linkName, setLinkName]= useState('');
  const [linkURL, setLinkUrl]= useState('');
  return (
    <div>
      <h1>My favorite links</h1>
      <p>Add a new link with a name and a URL</p>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
          <addTableRow/>
        </tbody>
      </table>

      <h1>Add new</h1>
      <form>
            <label for="linkName">Link Name: </label>
            <input type="text" value={linkName} onChange={(e)=>{ setLinkName(e.target.value)}}/>
            <br/>
            <label for="URL">Link URL:  </label>
            <input name="linkURL" value={linkURL} onChange={(e)=>{setLinkUrl(e.target.value)}}/>
            <br/>
            <button type="submit" onClick={addTableRow} >Submit</button>
        </form>
    </div>
  )
}

export default App
