export default function ContactPage() {
  return (
    <aside class="overflow-hidden bg-endless-constellation sm:grid sm:grid-cols-2 sm:items-center">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="max-w-xl mx-auto text-center sm:text-left">
          <h2 class="text-2xl font-bold text-white md:text-3xl">
            Do you have a question, an idea, or a project you need help with?
            Contact us!
          </h2>

          <p class="hidden text-gray-300 md:mt-4 md:block">
            Feel free to email me your needs,
          </p>

          <div class="mt-4 md:mt-8">
            <a
              href="mailto:ceedadev@gmail.com"
              class="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      <img
        alt="#"
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2"
        class="object-cover w-full h-full sm:h-[calc(100%_-_2rem)] md:h-[calc(100%_-_4rem)] sm:rounded-tl-[30px] md:rounded-tl-[60px] sm:self-end"
      />
    </aside>
  );
}
