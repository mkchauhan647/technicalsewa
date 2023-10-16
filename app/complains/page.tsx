import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";
import UserComplains from "@/features/complain/my-complains";
const page = async () => {
    return <>
      <Nav />
      <UserComplains />
      <Footer />
    </>;
};

export default page;
