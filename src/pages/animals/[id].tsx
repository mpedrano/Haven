import { useRouter } from 'next/router';
import AnimalInfoPage from '../../components/AnimalInfo';

export default function Animal() {
  const router = useRouter();
  const { id } = router.query;


  return (
    <div>
      <AnimalInfoPage animal={} />
    </div>
  );
}
