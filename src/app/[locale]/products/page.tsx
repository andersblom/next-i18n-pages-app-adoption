import Link from "next/link";

const getAsyncData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 1000);
  });
};
export default async function Products(props) {
  await getAsyncData();
  const locale = props.params.locale;
  return (
    <main>
      <div>Products (SSR) (app)</div>
      <div>Locale from params: {locale}</div>
      <Link href={`/${locale}/product/1`} className="link">
        Take me to a product
      </Link>
    </main>
  );
}
