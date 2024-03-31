interface LocatePageProps {}

const LocatePage = async ({}: LocatePageProps) => {
  const waitFunc = new Promise<string>((resolve) => {
    setTimeout(() => {
      const region = process.env.NOW_REGION || "Region not available";
      resolve(region);
    }, 10000); // Simulate a delay
  });

  const region = await waitFunc;
  return (
    <div>
      <p>{region}</p>
    </div>
  );
};

export default LocatePage;
