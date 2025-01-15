'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/child-safety");
  }, [router]);

  return null; // No need to render anything as the user is redirected
};

export default Home;
