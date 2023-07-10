import path from "path";
import fs from "fs/promises";

type Props = {
  products: Array<{
    id: string;
    title: string;
  }>;
};

function Home(props: Props) {
  const { products } = props;

  return (
    <div>
      {products.map((product) => {
        return <div key={product.id}>{product.title}</div>;
      })}
    </div>
  );
}

export async function getStaticProps() {
  console.log("re-generating...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const dummyData = (await fs.readFile(filePath)) as unknown as string;
  const data = JSON.parse(dummyData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 60, // ISR을 위한 유효성 재검사 대기 시간 (초)
  };
}

export default Home;
