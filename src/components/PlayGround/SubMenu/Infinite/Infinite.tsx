import { useRef, useCallback } from 'react';
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { commonContainerStyle } from "../../../../Style/styles";
import { useInfiniteQuery } from "react-query";
import { useObserver } from "../../../../utils/utils";
import axios from "axios";
import Loading from '../../../Loading/Loading';
import Card from './Card';

type DataType = {
  name: string;
  url: string;
}

const Infinite = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const OFFSET = 30;

  const getPoke = useCallback(async ({ pageParam = OFFSET }) => {
    console.log(pageParam);
    const { data } = await axios.get(`${process.env.REACT_APP_POKE_API}`, {
      params: {
        limit: OFFSET,
        offset: pageParam
      }
    });
    return data;
  }, []); 

  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery('getPokeData', getPoke, {
    getNextPageParam: (lastPage, page) => {
      const { next } = lastPage;
      if(!next) return false;
      // return lastPage;
      console.log(Number(new URL(next).searchParams.get("offset")));
      return Number(new URL(next).searchParams.get("offset"));
    }
  });

  const onInterSect: IntersectionObserverCallback = (entries, observer) => {
    if(!entries[0].isIntersecting) return;
    entries[0].isIntersecting && fetchNextPage(); 
  };

  useObserver({
    target: targetRef.current,
    onInterSect
  });


  console.log(data?.pages);
  return (
    <Container>
      <h1>Pokemon List</h1>
      { status === 'loading' && <Loading/>}
      { status === 'error' && <h1>Error!!!</h1>}
      {
        status === 'success' && data.pages.map((poke, idx) => (
          <CardContainer key={idx}>
            {
              poke.results.map((mon: DataType, idx: number) => {
                const { name, url } = mon;
                const id = url.split('/')[6];
                return <Card id={id} name={name} key={id}/>
              })
            }
          </CardContainer>
        ))
      }
      {
        isFetchingNextPage && <Loading/>
      }
      <div ref={targetRef}/>
    </Container>
  )
}

export default Infinite;

const Container = styled.div`
  ${commonContainerStyle};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 80%; */
  text-align: center;
  overflow: scroll;

  h1 {
    font-weight: bold;
    font-size: 5rem;
    margin: 4rem 0;
  }
`

const CardContainer = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(2, .5fr);
  gap:1rem;
  margin-bottom: 1rem;
`