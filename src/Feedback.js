import  React,{useState} from 'react';

const Feedback = () => {
    const [values, setValues] = useState(
        {
            name:'',
            email:'',
            message:'',
            phone:'',
            uploadedFiles:[],
            buttonText: 'Submit',
            uploadPhotosButtonText: 'Upload files'
        }
    );

    // destructure state variables
    const {name,email,message,phone, uploadedFiles,buttonText, uploadPhotosButtonText} = values;

    // event handler onchange
    const handleChange = updateVals => event => {
        setValues({...values,[updateVals]:event.target.value});
        console.log('handle changes')
    };
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setValues({...values,buttonText:'...sending'})

        // send to backend for email
        console.table({name,email,phone,message,uploadedFiles});
    };

    const feedbackForm = () =>(
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-muted">Description</label>
                    <textarea onChange={handleChange('message')} type="text" className="form-control" value={message} required></textarea>
                </div>
                <div className="form-group">
                    <label className="text-muted">Your Name</label>
                    <input onChange={handleChange('name')} type="text" className="form-control" value={name} required/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Your Email</label>
                    <input onChange={handleChange('email')} type="text" className="form-control" value={email} required/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Your Phone</label>
                    <input onChange={handleChange('phone')} type="number" className="form-control" value={phone} required/>
                </div>
                <button className="btn btn-outline-primary">{buttonText}</button>
            </form>
        </React.Fragment>
    )
  return (
        <div>
        {feedbackForm()}
      </div>

  )
}
export default Feedback;