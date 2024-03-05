import { Box, FormControl, FormLabel, HStack, Input, Radio, RadioGroup, Select, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Stack, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [systems, setSystems] = useState(2);
  const [selectedSystems, setSelectedSystems] = useState(Array(systems).fill(""));
  const [dataPoints, setDataPoints] = useState(1);
  const [trigger, setTrigger] = useState("Timer");
  const [dataQuantity, setDataQuantity] = useState(10);
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

  const handleDataQuantityChange = (value) => {
    setDataQuantity(Number(value));
  };

  const handleOneWayChange = (value) => {
    setOneWay(Number(value));
  };

  return (
    <Box p={8} maxW="container.md" mx="auto">
      <VStack spacing={4} align="stretch">
        <FormControl id="number-of-systems">
          <FormLabel>Number of systems</FormLabel>
          <Slider defaultValue={1} min={systems > 1 ? 2 : 1} max={20} onChange={handleSystemsChange}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb fontSize="sm" boxSize="32px" children={systems} />
          </Slider>
        </FormControl>

        {systems > 1 &&
          Array.from({ length: systems }, (_, index) => {
            const systemId = `system${index + 1}`;
            const handleChange = (event) => {
              const newSystems = [...selectedSystems];
              newSystems[index] = event.target.value === "Other" ? "" : event.target.value;
              setSelectedSystems(newSystems);
            };
            return (
              <FormControl key={index} id={systemId}>
                <FormLabel>{`System ${index + 1}`}</FormLabel>
                <Select name={systemId} id={systemId} onChange={handleChange} placeholder="Select system">
                  <option value="1">Monitor G4</option>
                  <option value="2">Monitor G5</option>
                  <option value="3">Fortnox</option>
                  <option value="4">Hogia</option>
                  <option value="5">Visma</option>
                  <option value="6">Custom</option>
                  <option value="7">Other</option>
                </Select>
                {selectedSystems[index] === "7" && (
                  <Input
                    placeholder="Specify system"
                    mt={2}
                    value={selectedSystems[index]}
                    onChange={(event) => {
                      const newSystems = [...selectedSystems];
                      newSystems[index] = event.target.value;
                      setSelectedSystems(newSystems);
                    }}
                  />
                )}
              </FormControl>
            );
          })}

        <FormControl id="one-way-two-way">
          <VStack align="start">
            <FormLabel>One-way or Two-way</FormLabel>
            <RadioGroup onChange={handleOneWayChange} value={oneWay}>
              <HStack>
                <Radio value={1}>One-way</Radio>
                <Radio value={2}>Two-way</Radio>
              </HStack>
            </RadioGroup>
          </VStack>
        </FormControl>

        <FormControl id="number-of-datapoints">
          <FormLabel>Number of datapoints</FormLabel>
          <Slider defaultValue={1} min={1} max={100} onChange={(val) => setDataPoints(val)}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb fontSize="sm" boxSize="32px" children={dataPoints} />
          </Slider>
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
              <Radio value={10}>{"< 10 MB"}</Radio>
              <Radio value={100}>{"< 100MB"}</Radio>
              <Radio value={1000}>{"< 1 GB"}</Radio>
              <Radio value={1001}>{"> 1 GB"}</Radio>
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
