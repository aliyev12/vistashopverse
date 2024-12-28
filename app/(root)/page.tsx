import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
// import pg from "pg";

export const metadata = {
  title: "Home",
};

const HomePage = async () => {
  // // TODO : Function to test database connection, remove when not needed
  // (async function testDatabase() {
  //   const pool = new pg.Pool({
  //     connectionString: process.env.VSV_DATABASE_URL,
  //   });
  //   const client = await pool.connect();
  //   const result = await client.query("SELECT * FROM test");
  //   client.release();
  //   console.log("Database test result = ", result.rows);
  // })();

  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </>
  );
};

export default HomePage;
