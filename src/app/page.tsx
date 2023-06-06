"use client"
import Footer from '@/components/Home/Footer';
import Header from '@/components/Home/Header';
import Main from '@/components/Home/Main/Main';
import MainNavigation from '@/components/UI/MainNavigation/MainNavigation';

export default function Home() {
  return (
    <>
      <MainNavigation />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
