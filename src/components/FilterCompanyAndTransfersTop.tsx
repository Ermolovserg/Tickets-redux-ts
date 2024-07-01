import { useDispatch, useSelector } from "react-redux";
import { setFilter, filterNumberTransfer } from "../store/store";
import { selectFilter } from "../store/selectors";
import Checkbox from "../components/checkbox";
import CheckboxRadio from "../components/checkboxRadio";
import styled from "styled-components";
import { useState } from "react";
import iconArrow from "../images/arrow.svg";

function FilterCompanyAndTransfersTop() {
  const dispatch = useDispatch();
  const tickets = useSelector(selectFilter);

  const [openSettings, setOpenSttings] = useState(false);

  return (
    <Navbar>
      <TopBlock>
        <LeftInfo>
           Любая авиакомпания, любое кол-во пересадок
        </LeftInfo>
        <Button onClick={() => setOpenSttings(!openSettings)}>
          <img src={iconArrow} alt="iconArrow" />
        </Button>
      </TopBlock>
      {openSettings && (
        <MainBlock>
          <div>
            <Header>Компании</Header>
            <Container>
              <CheckboxRadio
                text="Pobeda"
                isChecked={tickets.some((el) => el.company === "Pobeda")}
                onChange={() => dispatch(setFilter({ company: "Pobeda" }))}
                reversedColor="true"
              />
              <CheckboxRadio
                text="Redwings"
                isChecked={tickets.some((el) => el.company === "Redwings")}
                onChange={() => dispatch(setFilter({ company: "Redwings" }))}
                reversedColor="true"
              />
              <CheckboxRadio
                text="Ssevenair"
                isChecked={tickets.some((el) => el.company === "Ssevenair")}
                onChange={() => dispatch(setFilter({ company: "Ssevenair" }))}
                reversedColor="true"
              />
            </Container>
          </div>

          <div>
            <Header>Количество пересадок</Header>
            <Container>
          <Checkbox
            text="Без пересадок"
            isChecked={tickets.some((el) => el.transfers === 0.1)}
            onChange={() => dispatch(filterNumberTransfer({ transfers: 0.1 }))}
          />
          <Checkbox
            text="1 пересадка"
            isChecked={tickets.some((el) => el.transfers === 1)}
            onChange={() => dispatch(filterNumberTransfer({ transfers: 1 }))}
          />
          <Checkbox
            text="2 пересадки"
            isChecked={tickets.some((el) => el.transfers === 2)}
            onChange={() => dispatch(filterNumberTransfer({ transfers: 2 }))}
          />
          <Checkbox
            text="3 пересадки"
            isChecked={tickets.some((el) => el.transfers === 3)}
            onChange={() => dispatch(filterNumberTransfer({ transfers: 3 }))}
          />
        </Container>
          </div>
        </MainBlock>
      )}
    </Navbar>
  );
}

const Navbar = styled.div`
  background-color: #5e1a99;
  color: #ffffff;
  border-radius: 12px;
  @media (min-width: 1040px) {
    display: none;
  }
  @media (max-width: 1040px) {
    margin-bottom: 32px;
  }
  @media (max-width: 450px) {
    margin-bottom: 22px;
  }
`;

const MainBlock = styled.div`
  display: flex;
  gap: 70px;
  box-shadow: 0 5px 7px #00000030;
  height: 220px;
  padding-left: 26px;
  border-radius: 0 0 12px 12px;
`;

const Header = styled.div`
  font-family: 'InterBold';
  font-size: 21px;
  line-height: 25px;
  margin: 6px 0 14px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TopBlock = styled.div`
  display: flex;
  height: 46px;
  align-items: center;
  justify-content: space-between;
  padding: 0 29px 0 25px;
  white-space: nowrap;
`;

const Button = styled.button`
  border: none;
  padding: 0;
  background-color: #5e1a99;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 18px;
  @media (max-width: 450px) {
    .rightInfo {
      display: none;
    }
  }
`;

const LeftInfo = styled.div`
  font-family: 'Inter';
  line-height: 20px;
  @media (max-width: 450px) {
    font-size: 13px;
    line-height: 16px;
  }
`;

export default FilterCompanyAndTransfersTop;
