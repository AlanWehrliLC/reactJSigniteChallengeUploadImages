import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [imgUrl, setImgUrl] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleViewImage(urlImage: string) {
    setImgUrl(urlImage);

    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={3} spacing="40px">
        {cards && cards.map(card => (
            <Card key={card.id} data={card} viewImage={handleViewImage} />
          ))}
      </SimpleGrid>

      <ModalViewImage imgUrl={imgUrl} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
