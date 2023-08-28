import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Box, Heading, VStack, Image, Text } from "@chakra-ui/react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box className="card">
      <Image src={imageSrc} alt="card-image" />
      <Heading color="black" as='h5' size='md' pl="15px">{title}</Heading>
      <Text color="gray.400"
        fontSize="large"
        fontWeight="700"
        pl="15px"
        margin="10px 0" > {description}</Text>
      <button>
        See more{" "}
        <FontAwesomeIcon style={{ paddingLeft: "10px" }} icon={faArrowRight} size="1x" />
      </button>
    </Box >
  );
};

export default Card;
