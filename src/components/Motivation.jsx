import { useEffect, useState } from "react";
import styles from "./Motivation.module.css";

const Motivation = () => {
  const [motivation, setMotivation] = useState(null);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const savedQuote = localStorage.getItem("dailyQuote");
    const savedDate = localStorage.getItem("quoteDate");
    const fetchMotivation = async () => {
      try {
        if (savedQuote && savedDate === today) {
          setMotivation(JSON.parse(savedQuote));
        } else {
          const res = await fetch("https://dummyjson.com/quotes/random");
          const quote = await res.json();
          setMotivation(quote);
          localStorage.setItem("dailyQuote", JSON.stringify(quote));
          localStorage.setItem("quoteDate", today);
        }
      } catch (error) {
        console.error("Error fetching motivation:", error);
      }
    };
    fetchMotivation();
  }, []);
  if (!motivation) return <p className={styles.loading}>Loading...</p>;
  const { author, quote } = motivation;
  return (
    <div className={styles.motivationContainer}>
      <p className={styles.motivationText}>
        {quote} - <span className={styles.author}>{author}</span>
      </p>
    </div>
  );
};
export default Motivation;
