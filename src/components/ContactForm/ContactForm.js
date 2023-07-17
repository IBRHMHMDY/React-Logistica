
const ContactForm = () => {
  return (
   <form>
      <div className="row g-3">
         <div className="col-12 col-sm-6">
            <input type="text" className="form-control border-0" placeholder="Your Name"/>
         </div>
         <div className="col-12 col-sm-6">
            <input type="email" className="form-control border-0" placeholder="Your Email"/>
         </div>
         <div className="col-12 col-sm-6">
            <input type="text" className="form-control border-0" placeholder="Your Mobile"/>
         </div>
         <div className="col-12 col-sm-6">
            <select className="form-select border-0">
                  <option defaultValue>Select A Freight</option>
                  <option value="1">Freight 1</option>
                  <option value="2">Freight 2</option>
                  <option value="3">Freight 3</option>
            </select>
         </div>
         <div className="col-12">
            <textarea className="form-control border-0" placeholder="Special Note"></textarea>
         </div>
         <div className="col-12">
            <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
         </div>
      </div>
   </form>
  )
}

export default ContactForm