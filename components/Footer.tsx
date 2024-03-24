import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-github.tsx";

export default function Footer() {
  return (
    <footer className="mt-auto w-full">
      <div className="py-2">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024{" "}
            <a href="https://github.com/shmn7iii" className="hover:underline">
              shmn7iii
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="https://github.com/shmn7iii/www.shmn7iii.net">
              <BrandGithub aria-hidden="true" color="gray" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
