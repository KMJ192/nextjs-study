import path from "path";
import fs from "fs/promises";

import { Fragment } from "react";
import type { GetStaticProps, GetStaticPropsContext } from "next";

type Props = {
  loadedProduct: {
    id: string;
    title: string;
    description: string;
  };
};

function ProductDetailPage(props: Props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
      <span>id {loadedProduct.id}</span>
    </Fragment>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const dummyData = (await fs.readFile(filePath)) as unknown as string;
  const data = JSON.parse(dummyData);

  return data;
}

// 동적 라우팅 파일은 getStaticProps를 사용할 때 getStaticPaths를 설정하여 next에 경로를 미리 알려줘야 한다.
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;
  const productId = params?.pid;
  const data = await getData();
  const product = data.products.find((d: { id: string }) => d.id === productId);

  // 데이터가 없어서 화면에 보여줄 수 없으므로 not found 페이지를 표시하기 위함
  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await getData();
  const ids: Array<string> = data.products.map(
    (product: { id: string }) => product.id
  );
  const pathsWithParams = ids.map((id: string) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: true,
    // fallback: "blocking",
  };
};

export default ProductDetailPage;
