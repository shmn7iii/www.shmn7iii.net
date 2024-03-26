export default function Heading() {
  return (
    <div className="mb-6">
      <div className="flex items-center">
        <div className="flex items-center">
          <h1 class="text-3xl font-extrabold me-3">Works</h1>
          <a
            href="https://github.com/shmn7iii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon-shmn7iii.jpg"
              alt="shmn7iii icon"
              className="w-10 rounded-full ring-2 ring-white md:w-18"
            />
          </a>
          <a
            href="https://github.com/sttnbnb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icon-sttnbnb.png"
              alt="sttnbnb icon"
              className="w-10 rounded-full ring-2 ring-white md:w-18"
            />
          </a>
        </div>
      </div>
      <p class="text-base font-normal text-gray-500 mt-2">
        shmn7iii名義とsttnbnb名義があるよ
      </p>
    </div>
  );
}
