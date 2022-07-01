import { useEffect, useState } from "react";

const useConsumer = () => {
  const [consumers, setConsumers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/billing-list")
      .then((res) => res.json())
      .then((data) => setConsumers(data));
  }, []);
  return [consumers];
};

export default useConsumer;
