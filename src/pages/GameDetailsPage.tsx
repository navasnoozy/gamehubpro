import useGameDetails from "@/components/hooks/useGameDetails";
import { SkeletonText } from "@/components/ui/skeleton";
import { HStack, Skeleton, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Card } from "@chakra-ui/react";
import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading)
    return (
      <Stack gap="6" maxW="xs">
        <Skeleton height="200px" />
        <HStack width="full">
          <SkeletonText noOfLines={3} />
        </HStack>
      </Stack>
    );

  if (error || !game) throw error;

  return (
    <Card.Root gap={5}>
      <Card.Title fontSize="5xl">{game.name}</Card.Title>
      <Card.Description>
        <ExpandableText>{game.description_raw}</ExpandableText>
      </Card.Description>

      <GameAttributes game={game} />
    </Card.Root>
  );
};

export default GameDetailsPage;
