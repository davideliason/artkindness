export default function Contact() {
  return (
    <section>
      <h1>Contact</h1>

      <p>
        We'd love to hear from you.
      </p>

      <p>Email: hello@artkindness.com</p>

      <form>
        <div>
          <label>Name</label>
          <br />
          <input type="text" />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input type="email" />
        </div>

        <br />

        <div>
          <label>Message</label>
          <br />
          <textarea rows="6"></textarea>
        </div>

        <br />

        <button>Send Message</button>
      </form>
    </section>
  );
}