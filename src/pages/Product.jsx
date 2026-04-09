import styles from "./Product.module.css";
import PageNav from "../component/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            WorldWise was born for the curious souls and restless wanderers who
            believe the world is too beautiful to stay in one place. We help you
            track every destination you've explored and every corner still
            waiting to be discovered.
          </p>
          <p>
            More than just a map, WorldWise turns your journeys into a living
            story that's uniquely yours. Keep wandering, keep discovering — and
            let WorldWise remember every step of the way.
          </p>
        </div>
      </section>
    </main>
  );
}
