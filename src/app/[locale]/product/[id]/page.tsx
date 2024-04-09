export default async function Product(props) {
  const locale = props.params.locale;
  const productId = props.params.id;
  return (
    <main>
      <div>Product {productId} (SSR) (app)</div>
      <div>Locale from params: {locale}</div>
    </main>
  );
}
