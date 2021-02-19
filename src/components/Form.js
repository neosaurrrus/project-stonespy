
export default function Form() {
  return (
    <form>
      <div className="grid cols-3">
        <div>
          <label htmlFor="text">Text</label>
          <input placeholder="Darth Vader" id="text" type="text" />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <input id="number" type="number" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
      </div>
      <div>
        <label htmlFor="textarea">Textarea</label>
        <textarea id="textarea" value="Default value"></textarea>
      </div>
      <div>
        <label htmlFor="select">Select</label>
        <select id="select" type="text">
          <option value="one">One</option>
          <option value="two">One</option>
        </select>
      </div>

      <button>Submit</button>
      <button className="cancel">Cancel</button>
      <button disabled>Disabled</button>
      <button>Button with long text</button>
      <button>Button &xrarr;</button>
      <br />
      <button className="small">Submit</button>
    </form>
  );
}
