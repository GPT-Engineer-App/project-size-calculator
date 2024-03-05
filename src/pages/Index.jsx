import { Box, FormControl, FormLabel, HStack, Input, Radio, RadioGroup, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Stack, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [systems, setSystems] = useState(2);
  const [dataPoints, setDataPoints] = useState(1);
  const [trigger, setTrigger] = useState("Timer");
  const [dataQuantity, setDataQuantity] = useState("< 10 MB");
  const [oneWay, setOneWay] = useState(true);

  const handleSystemsChange = (value) => {
    setSystems(value);
  };

  const handleDataPointsChange = (event) => {
    setDataPoints(Number(event.target.value));
  };

  const handleTriggerChange = (nextValue) => {
    setTrigger(nextValue);
  };

  const handleDataQuantityChange = (event) => {
    setDataQuantity(event.target.value);
  };

  const handleOneWayChange = (event) => {
    setOneWay(event.target.checked);
  };

  return (
    <Box p={8} maxW="container.md" mx="auto">
      <VStack spacing={4} align="stretch">
        <FormControl id="number-of-systems">
          <FormLabel>Number of systems</FormLabel>
          <Slider defaultValue={2} min={2} max={20} onChange={handleSystemsChange}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb fontSize="sm" boxSize="32px" children={systems} />
          </Slider>
        </FormControl>

        {systems > 2 &&
          Array.from({ length: systems }, (_, index) => (
            <FormControl key={index} id={`system-${index + 1}`}>
              <FormLabel>{`System ${index + 1}`}</FormLabel>
              <Input placeholder={`Name of system ${index + 1}`} />
            </FormControl>
          ))}

        <FormControl id="one-way-two-way">
          <HStack>
            <FormLabel>One-way or Two-way</FormLabel>
            <input type="checkbox" checked={oneWay} onChange={handleOneWayChange} />
            <Text>{oneWay ? "One-way" : "Two-way"}</Text>
          </HStack>
        </FormControl>

        <FormControl id="number-of-datapoints">
          <FormLabel>Number of datapoints</FormLabel>
          <Input type="number" value={dataPoints} min={1} max={100} onChange={handleDataPointsChange} />
        </FormControl>

        <FormControl id="trigger">
          <FormLabel>Trigger</FormLabel>
          <RadioGroup onChange={handleTriggerChange} value={trigger}>
            <HStack>
              <Radio value="Timer">Timer</Radio>
              <Radio value="Asynchronous">Asynchronous (webhook)</Radio>
              <Radio value="OnDemand">OnDemand (button or CLI call)</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>

        <FormControl id="quantity-of-data">
          <FormLabel>Quantity of data (estimated)</FormLabel>
          <RadioGroup onChange={handleDataQuantityChange} value={dataQuantity}>
            <Stack>
              <Radio value="< 10 MB">{"< 10 MB"}</Radio>
              <Radio value="< 100MB">{"< 100MB"}</Radio>
              <Radio value="< 1 GB">{"< 1 GB"}</Radio>
              <Radio value="> 1 GB">{"> 1 GB"}</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <Box p={4} borderWidth="1px" borderRadius="md">
          <Text fontWeight="bold">Responses:</Text>
          <Wrap>
            <WrapItem>
              <Text>Systems: {systems}</Text>
            </WrapItem>
            <WrapItem>
              <Text>One-Way: {oneWay ? "Yes" : "No"}</Text>
            </WrapItem>
            <WrapItem>
              <Text>Data Points: {dataPoints}</Text>
            </WrapItem>
            <WrapItem>
              <Text>Trigger: {trigger}</Text>
            </WrapItem>
            <WrapItem>
              <Text>Data Quantity: {dataQuantity}</Text>
            </WrapItem>
          </Wrap>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
