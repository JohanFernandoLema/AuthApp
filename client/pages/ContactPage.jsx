const ContactPage = () => {
  return (
    <div className="formPage">
      <p>
        Let us know <b> how can we help you?</b>
      </p>
      <div className="contactForm">
        <form action="/">
          <label htmlFor="userName">
            Name:
            <input type="text" name="" id="" placeholder="Input your name" />
          </label>
          <label htmlFor="userEmail">
            E-mai:
            <input type="email" name="" id="" placeholder="Input your e-mail" />
          </label>
          <label htmlFor="userComment">
            Comments:
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Something you want to share"
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
export default ContactPage
