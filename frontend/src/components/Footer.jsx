export default function Footer() {
  return (
    <>
    <hr></hr>
      <h2 className="text-roboto text-xl font-[700] text-left ml-8 my-4">Tu veux en faire plus ?</h2>
      <div className="flex flex-row mx-4 justify-around mb-8 text-roboto">
        <a
          href="https://www.greenpeace.fr/bordeaux/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="link link-underline link-underline-black text-black duration-700 ease-in-out hover:scale-105">Rejoindre Greenpeace</button>
        </a>
        <a
          href="https://www.worldcleanupday.fr/?gclid=Cj0KCQjw4PKTBhD8ARIsAHChzRK05G318YZSzqIPaXeu1wDfzWP974GYo-u0xPVW_t6Lcfsnjce896MaAktqEALw_wcB"
          target="_blank"
          rel="noreferrer"
        >
          <button className="link link-underline link-underline-black text-black duration-700 ease-in-out hover:scale-105">World Cleanup Day</button>
        </a>
      </div>
    </>
  );
}
