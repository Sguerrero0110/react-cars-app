import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BookCard } from '../../components/bookCard';
import { Marginer } from '../../components/marginer';
import { Footer } from '../../components/footer';
import { NavBar } from '../../components/navbar';
import { BookingSteps } from './bookingSteps';
import { TopSection } from './topSection';
import { AboutUs } from './aboutUs';
import { TopCars } from './topCars';

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
      <Marginer direction='vertical' margin='4em' />
      <BookCard />
      <Marginer direction='vertical' margin='10em' />
      <BookingSteps />
      <Marginer direction='vertical' margin='8em' />
      <AboutUs />
      <Marginer direction='vertical' margin='8em' />
      <TopCars />
      <Footer />
    </PageContainer>
  );
}
