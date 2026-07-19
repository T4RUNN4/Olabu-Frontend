import Button from "@/components/Button";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-end bg-cover bg-center pl-8 pb-18 mb-8"
      style={{
        backgroundImage:
          "url('https://static-01.daraz.com.bd/p/25f908943f4bee5c07b4079a610bcca5.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-4xl px-6 text-white">

        <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
          Never let your walls be boring again.
        </h1>

        <p className="mt-6 mb-12 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
          Transform your room with vibrant, waterproof, UV-resistant PVC
          wallboards. Designed to make every wall a statement piece.
        </p>

          <Button
            text="Explore Collection"
            type="primary"
            task="hyperlink"
            href="/wallboards"
          />
      </div>
    </section>
  );
}
