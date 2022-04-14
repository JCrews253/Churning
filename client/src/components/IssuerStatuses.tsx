import { HStack } from "native-base";
import React from "react";
import CircularProgress from "./CircularProgress";
import Card from "./Card";

const IssuerStatuses = () => {
  return (
    <Card>
      <HStack>
        <CircularProgress value={50} label="Amex 1/5" centerLabel="1" />
        <CircularProgress value={50} label="Amex 2/90" centerLabel="1" />
        <CircularProgress
          value={(2 / 12) * 100}
          label="BoA 6/12"
          centerLabel="2"
        />
        <CircularProgress value={120} label="Chase 5/24" centerLabel="6" />
      </HStack>
    </Card>
  );
};

export default IssuerStatuses;
