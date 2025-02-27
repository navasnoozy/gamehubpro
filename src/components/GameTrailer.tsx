import useGameTrailer from "./hooks/useGameTrailer";
import { Box, Skeleton } from "@chakra-ui/react";

interface PropsType {
  gameId: number;
}

const GameTrailer = ({ gameId }: PropsType) => {
  const { data, isLoading, error } = useGameTrailer(gameId);

  if (isLoading) return <Skeleton margin='5' height="30vh" width="100%" />;

  if (error) throw error;

  const videoLink = data?.results[0];

  return videoLink ? (
    <Box rounded='md' display='flex'  justifyContent='center' width="100%"
    height="2/3"
    position="relative"
    overflow="hidden" >
  <video style={{
          width: '100%',
          height: 'auto',
          objectFit:'cover',
          borderRadius:'10px',
      
        }}  src={videoLink.data[480]} poster={videoLink.preview} controls />
    </Box>
  
  ) : null;
};

export default GameTrailer;
