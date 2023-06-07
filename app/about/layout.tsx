import Footer from "../components/base/Footer";
import Header from "../components/base/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <section>{children}</section>
      <Footer />
    </>
  );
}
