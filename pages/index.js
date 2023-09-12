import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import ExpenseItem from "../components/ExpenseItem";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Sidebar />
      <section className={utilStyles.headingMd}>
        <h1 className="title">
          <div>
            Register <Link href="/handlers/register">this page!</Link>
            Signin <Link href="handlers/signin">this page!</Link>
          </div>
          <div>
            Read <Link href="/posts/first-post">this page!</Link>
          </div>
        </h1>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - youll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      {/* <ExpenseItem /> */}
    </Layout>
  );
}
