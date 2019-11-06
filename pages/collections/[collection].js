import { useRouter } from "next/router";
import DefaultLayout from "../../layouts/default";

const Collection = () => {
  const router = useRouter();
  const { collection } = router.query;

  return (
    <DefaultLayout>
      <p>{collection}</p>
    </DefaultLayout>
  );
};

export default Collection;
