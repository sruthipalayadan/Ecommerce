import styles from './About.module.css'

function About()
{
    return(
          <div className={styles.abox}>
            <h1  ><strong style={{ color: "green" }}>ABOUT US</strong></h1>
            <br></br>
            <p>
                <h4>About Shopsy:</h4>
               <p>
               Welcome to Shopsy, your premier destination for an unparalleled online shopping experience. 
               Designed with the modern shopper in mind, Shopsy brings together convenience, variety, and 
               reliability to redefine the way you shop for your favorite products.
               </p>
               <br></br>
               <p><h4>Our Mission</h4></p>
               <p>
               At Shopsy, our mission is to empower individuals with seamless access to a vast selection 
               of products, delivered with exceptional service and convenience. We aim to be your trusted partner
                in fulfilling all your shopping needs, while prioritizing customer satisfaction above all else.
               </p>
               <br></br>
               <p><h4>Our Story</h4></p>
               <p>
               Established in 2022, Shopsy has quickly emerged as a leading player in 
               the e-commerce industry. Our journey began with a commitment to provide customers with
                a convenient and enjoyable shopping experience, backed by cutting-edge technology 
                and a customer-centric approach. Since then, we have grown exponentially, expanding
                 our product offerings and enhancing our services to meet the evolving demands of our 
                 discerning clientele.
               </p>
               <br></br>
               <p><h4>Get in Touch</h4></p>
               <p>
               We value your feedback and are always striving to improve our services. If you have 
               any questions, suggestions, or feedback, please don't hesitate to reach out to us. 
               Our friendly customer support team is here to assist you every step of the way.
               </p>
               <p>
                   Thank you for choosing Shopsy as your preferred shopping destination. Happy shopping!
               </p>

            </p>
          </div>
         
          
        
        )
}
export default About;
