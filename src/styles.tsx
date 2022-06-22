import styled from "styled-components/native";

export const Container = styled.View`
  padding: 50px 40px 10px;
  margin-bottom: 120px;
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;

export const Button = styled.Pressable`
  width: 70px;
  height: 58px;
  background: #ededed;
  border-radius: 20px;
  margin: 6px 7px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #000000;
`;

export const DigitalContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  margin: 55px 0 0;
`;

export const DigitalText = styled.Text`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #3aab1d;
`;

export const LastOptions = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 20px;
  margin-top: -10px;
`;

export const LastOptionsGreenText = styled.Text`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #3aab1d;
`;

export const LastOptionsNormalText = styled.Text`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #4b4b4b;
`;

export const InputArea = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 50px auto 35px;
`;

export const InputNumber = styled.Text`
  width: 19px;
  height: 19px;

  /* background: #3aab1d;
  border: 1px solid #3aab1d; */
  border-radius: 10px;
  margin: 3px 7px;
  background: rgba(196, 196, 196, 0.29);
`;
