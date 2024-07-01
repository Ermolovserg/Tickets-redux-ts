import { useDispatch, useSelector } from "react-redux";
import {setFilter,filterNumberTransfer,} from "../store/store";
import { selectFilter } from "../store/selectors";
import Checkbox from "../components/checkbox";
import CheckboxRadio from "../components/checkboxRadio";
import styled from "styled-components";

function FilterCompanyAndTransfers() {

  const dispatch = useDispatch();
  const tickets = useSelector(selectFilter);

  return (
    <Navbar>
      <FilterTransfers>
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
      </FilterTransfers>
      <FilterCompany>
        <Header>Компании</Header>
        <Container>
        <CheckboxRadio
          text="Pobeda"
          isChecked={tickets.some((el) => el.company === "Pobeda")}
          onChange={() => dispatch(setFilter({ company: "Pobeda" }))}
        />
        <CheckboxRadio
          text="Redwings"
          isChecked={tickets.some((el) => el.company === "Redwings")}
          onChange={() => dispatch(setFilter({ company: "Redwings" }))}
        />
        <CheckboxRadio
          text="Ssevenair"
          isChecked={tickets.some((el) => el.company === "Ssevenair")}
          onChange={() => dispatch(setFilter({ company: "Ssevenair" }))}
        />
        </Container>
      </FilterCompany>
    </Navbar>
  );
}

const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 47px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const FilterTransfers = styled.div`
  width: 272px;
  height: 258px;
  border-radius: 10px;
  background-color: #e8ebf2;
`;

const FilterCompany = styled.div`
  width: 272px;
  height: 198px;
  border-radius: 10px;
  background-color: #e8ebf2;
`;

const Header = styled.div`
  font-family: InterBold;
  font-size: 20px;
  line-height: 24px;
  color: #4e148c;
  margin-top: 19px;
  margin-left: 19px;
  margin-bottom: 26px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 42px;
  gap: 19px;
  color: #858AE3;
`;

export default FilterCompanyAndTransfers;
