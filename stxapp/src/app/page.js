import Image from 'next/image'

export const metadata = {
  title: "STXAPP",
  description: "Deposit & Withdraw sBTC!",
};

export default function Home() {
  return (
    <>
      <h1 className="mt-8 text-4xl text-center">Lagoon</h1>
      <p className="mt-4 text-center">
        Deposit & Withdraw sBTC.
      </p>
    </>
  );
}
