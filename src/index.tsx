import React, { useEffect, useState } from "react";
import { Image, Pressable, View } from "react-native";
import {
  Button,
  ButtonsContainer,
  ButtonText,
  Container,
  DigitalContainer,
  DigitalText,
  InputArea,
  InputNumber,
} from "./styles";

const FullPin = () => {
  const [pin, setPin] = useState([]);

  const PinStyles = {
    backgroundColor: "#3aab1d",
    borderWidth: 1,
    borderColor: "#3aab1d",
  };

  useEffect(() => {
    console.log(pin.toString());
  }, [pin]);

  const handleAddNumber = (number: number) => {
    if (pin.length < 4) {
      setPin([...pin, number]);
    }
  };

  const handleRemoveNumber = () => {
    if (pin.length > 0) {
      let newPin = pin;
      newPin.pop();
      setPin([...newPin]);
    }
  };

  const handleSendPin = () => {
    console.log("Sent");
  };

  return (
    <View>
      <Container>
        <InputArea>
          <InputNumber
            style={pin[0] !== null && pin[0] !== undefined && PinStyles}
          />
          <InputNumber
            style={pin[1] !== null && pin[1] !== undefined && PinStyles}
          />
          <InputNumber
            style={pin[2] !== null && pin[2] !== undefined && PinStyles}
          />
          <InputNumber
            style={pin[3] !== null && pin[3] !== undefined && PinStyles}
          />
        </InputArea>

        <ButtonsContainer>
          <Button onPress={() => handleAddNumber(1)}>
            <ButtonText>1</ButtonText>
          </Button>

          <Button onPress={() => handleAddNumber(2)}>
            <ButtonText>2</ButtonText>
          </Button>

          <Button onPress={() => handleAddNumber(3)}>
            <ButtonText>3</ButtonText>
          </Button>

          <Button onPress={() => handleAddNumber(4)}>
            <ButtonText>4</ButtonText>
          </Button>

          <Button onPress={() => handleAddNumber(5)}>
            <ButtonText>5</ButtonText>
          </Button>

          <Button onPress={() => handleAddNumber(6)}>
            <ButtonText>6</ButtonText>
          </Button>

          <Button onPress={() => handleAddNumber(7)}>
            <ButtonText>7</ButtonText>
          </Button>

          <Button onPress={() => handleAddNumber(8)}>
            <ButtonText>8</ButtonText>
          </Button>

          <Button onPress={() => handleAddNumber(9)}>
            <ButtonText>9</ButtonText>
          </Button>

          <Button onPress={() => handleRemoveNumber()}>
            <ButtonText> {"<"} </ButtonText>
          </Button>

          <Button onPress={() => handleAddNumber(0)}>
            <ButtonText>0</ButtonText>
          </Button>

          <Button onPress={() => handleSendPin()}>
            <ButtonText>OK</ButtonText>
          </Button>
        </ButtonsContainer>
      </Container>
    </View>
  );
};

export default FullPin;
