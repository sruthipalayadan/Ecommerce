import styles from "./Home.module.css";
import Offercard from "../offer/Offercard";
function Home() {
  var offerproducts = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Mens Cotton  Moto Biker Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: { rate: 4.7, count: 500 },
    },

    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: { rate: 2.1, count: 430 },
    },
  ];

  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
            src="https://t3.ftcdn.net/jpg/06/32/90/44/240_F_632904407_iPLi90WdjZ0oKAeRiL98gEIeHIUtzWae.jpg"
              
              class="d-block w-100"
              alt="..."
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src=" 	https://t4.ftcdn.net/jpg/03/48/83/97/360_F_348839765_geLh2dJoIA3avhddhcyLnaRPSghgT0Fz.webp"
              class="d-block w-100"
              alt="..."
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src="https://t3.ftcdn.net/jpg/03/65/52/86/240_F_365528663_miV08QzGGVLqhRRQVQ4B9C9PtoTRJiSv.jpg"
              class="d-block w-100"
              alt="..."
            ></img>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div >
        <h3>
          <strong>BEST OFFERS</strong>
          <h5 style={{ color: "red" }}>
            <b>Product with 50% off</b>
          </h5>
        </h3>

        <div className={styles.container1}>
          {offerproducts.map((p) => {
            return <Offercard offerproducts={p} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Home;
