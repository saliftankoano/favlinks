
const handleForm = (e) => {
    e.preventDefault();

    // Add the new row to the tableData state
    setTableData((prevData) => [...prevData, formData]);

    // Clear the form after submission
    setFormData({
      linkName: '',
      linkURL: '',
      // Reset other form fields as needed
    });
  };
  
function Form(){
    return(
        <form onSubmit={handleForm}>
          <label for="linkName">Link Name: </label>
          <input name="linkName" type='text' value={formData.linkName} onChange={handleInputChange}/>
          <br/>
          <label for="URL">Link URL:  </label>
          <input name="linkURL" type='text' value={formData.linkURL} onChange={handleInputChange}/>
          <br/>
          <button id='btn' type='submit'>Submit</button>
      </form>
    )
}

export default Form;