import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButtun";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  aligh-items: center;
`;
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
