import { Layout } from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Search(props) {
  const locale = props.locale;
  const router = useRouter();
  const clientSideLocale = router.query.locale;
  return (
    <main>
      <div>Search (SSR) (pages)</div>
      <div>Locale from getSSRProps: {locale}</div>
      <div>Locale from useRouter: {clientSideLocale}</div>
      <Link href={`/${locale}/product/1`}>Take me to a product</Link>
    </main>
  );
}

export const getServerSideProps = ({ params }) => {
  const locale = params.locale;
  return { props: { locale: locale } };
};
