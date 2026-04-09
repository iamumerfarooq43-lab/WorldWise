// Uses the same styles as Product
import PageNav from "../component/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            No hidden fees, no complicated tiers — just one straightforward plan
            that gives you full access to everything WorldWise has to offer.
            Start exploring the world and let us handle the rest.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
