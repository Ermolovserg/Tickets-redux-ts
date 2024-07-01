import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TicketItem from "./TicketItem";
import { RootDispatch, fetchTickets, sortTransfers, sortPrice, sortOptimalTickets } from "../store/store";
import styled from "styled-components";
import FilterCompanyAndTransfersTop from "./FilterCompanyAndTransfersTop";
import { selectFilter } from "../store/selectors";

function TicketList() {
  const dispatch = useDispatch<RootDispatch>();
  const tickets = useSelector(selectFilter);
  const [visibleTickets, setVisibleTickets] = useState(3);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleTickets((prev) => prev + 3);
  };

  return (
    <Wrapper id="list">
      <TopBar>
        <button onClick={() => dispatch(sortPrice())}>Самый дешевый</button>
        <button onClick={() => dispatch(sortTransfers())}>По количеству пересадок</button>
        <button onClick={() => dispatch(sortOptimalTickets())}>Самый оптимальный</button>
      </TopBar>
      <FilterCompanyAndTransfersTop />
      <Container>
        {tickets.slice(0, visibleTickets).map((el) => (
          <TicketItem key={el.id.toString()} {...el} />
        ))}
      </Container>
      {visibleTickets < tickets.length && (
        <Button onClick={handleLoadMore}>Загрузить еще билеты</Button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #4e148c;
  box-sizing: border-box;
  color: #4e148c;
  font-family: InterBold;
  line-height: 19px;
  height: 55px;
  background: linear-gradient(0deg, #e8ebf2, #e8ebf2);
  margin-bottom: 29px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 430px) {
    height: 42px;
    font-family: Inter;
    font-size: 12px;
    line-height: 15px;
    background: #d9d9d9;
    margin-bottom: 12px;
  }

  button:nth-child(2) {
    border-left: 2px solid #4e148c;
    border-right: 2px solid #4e148c;
    border-radius: 0px;

    &:hover,
    &:focus {
      border-radius: 0px;
    }
  }

  button:nth-child(1) {
    &:hover,
    &:focus {
      border-radius: 10px 0px 0px 10px;
    }
  }

  & button {
    flex-grow: 1;
    flex-basis: 0;
    padding: 0;
    border: none;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    border-radius: 10px;
    font-family: InterBold;
    line-height: 19px;
    font-size: 16px;
    
     @media screen and (max-width: 430px) {
    font-size: 12px;
  }

    &:hover,
    &:focus {
      background-color: #4e148c;
      color: #f7f9f7;
      border-radius: 0px 10px 10px 0px;
    }
  }
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  gap: 47px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    gap: 53px;
  }

  @media screen and (max-width: 430px) {
    gap: 35px;
  }
`;

const Button = styled.div`
  background-color: #4e148c;
  color: #f7f9f7;
  font-family: InterBold;
  font-size: 24px;
  line-height: 29px;
  height: 62px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 54px;
  cursor: pointer;
`;

export default TicketList;
