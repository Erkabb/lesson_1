import Header from "@/components/header";
import { Footer } from "@/components/footer";
import Section from "@/components/section";
import { Layout } from "@/components/layout";
export default function Home() {
  return (
    <>
      <Layout>
        {" "}
        <Section nationalID="ihy95945" companyYear={2019} />
        <Section nationalID="ih45" companyYear={2012} />
        <Section nationalID="ifh45" companyYear={20191} />
      </Layout>
    </>
  );
}
