import { useRouter } from 'next/router';

export default function AnimalInfoPage({ animal }) {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div>
      <h1>{animal.name}</h1>
      <p>{animal.description}</p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
}
