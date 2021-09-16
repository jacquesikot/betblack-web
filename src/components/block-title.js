import { jsx, Heading, Box, Text } from 'theme-ui';

const BlockTitle = (props) => {
  return (
    <Box variant="blockTitle" sx={props.sx}>
      <Text as="p">{props.tagline}</Text>
      {props.type === 2 ? (
        <h1 className="content-1-heading-2">{props.heading}</h1>
      ) : (
        <h1 className="content-1-heading">{props.heading}</h1>
      )}
    </Box>
  );
};

export default BlockTitle;
