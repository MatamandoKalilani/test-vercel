interface LocatePageProps {}

const LocatePage = async ({}: LocatePageProps) => {
  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  await delay(5000);

  const region = process.env.NOW_REGION || "Region not available";
  return (
    <div>
      <p>{region}</p>
    </div>
  );
};

export default LocatePage;
