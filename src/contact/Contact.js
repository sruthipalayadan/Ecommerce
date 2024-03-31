import styles from './Contact.module.css'

function Contact()
{
    return(
         
        <div className={styles.cbox}>
            <h1  ><strong style={{ color: "green" }}>CONTACT US</strong></h1>
            <br></br>
            <p>
            Thank you for choosing Shopsy! We're here to assist you with any questions, 
            concerns, or feedback you may have. Here's how you can get in touch with us:
            </p>
            <br></br>
            <p><h4>Customer Support</h4></p>
            <p>

            Our dedicated customer support team is available 24/7 to assist you with any inquiries or issues 
            you may encounter. You can reach us through the following channels:
            </p>
            <p>
             <b>Phone:</b> Call our customer support hotline at +91-8289966221<br></br>
             <b>Email:</b> Drop us an email at <strong><i>bshopsy@gmail.com</i></strong> and expect a prompt response from our team.
            <br></br><b>Live Chat: </b>Chat with one of our representatives in real-time through our website or mobile app.            
            </p>
            <br></br>
            <p><h4>Address</h4></p>
            <p><b>B~SHOPSY</b>
            <br></br>
            K.C Abraham Master Road<br></br>
            12th Cross Rd, Panampilly Nagar<br></br>
             Kochi, Kerala 682036
             </p>

            
        </div> 
        
        )
}
export default Contact;