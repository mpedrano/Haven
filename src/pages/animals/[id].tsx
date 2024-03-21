import { useRouter } from 'next/router';
import AnimalInfoPage from '../../components/AnimalInfo';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Animal() {
  const router = useRouter();
  const { id } = router.query;
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const response = await axios.get(`https://api.petfinder.com/v2/animals/${id}`);
        setAnimal(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchAnimal();
    }
  }, [id]);

  return (
    <div>
      {animal && <AnimalInfoPage animal={animal} />}
    </div>
  );
}
