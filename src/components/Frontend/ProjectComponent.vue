<template>
  <section
    class="bg-light-primary dark:bg-dark-primary pt-20 pb-10 lg:pt-[120px] lg:pb-20"
    id="portfolio"
  >
    <div
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :visible="{
        opacity: 1,
        y: 0,
      }"
      class="container mx-auto"
    >
      <div class="-mx-4 flex flex-wrap justify-center">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
            <span class="text-accent text-primary mb-2 block text-lg font-semibold">
              Portfolio
            </span>
            <h2 class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
              My latest works
            </h2>
          </div>
        </div>
        <div class="w-full px-4 md:w-1/2 xl:w-1/3">
          <div class="mb-10 overflow-hidden rounded-lg bg-dark-primary dark:bg-light-primary">
            <img src="/storage/projects/ojtis.png" alt="image" class="w-full" />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
              <h3>
                <a
                  class="text-white dark:text-black mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                >
                  On-the-Job Training Information System
                </a>
              </h3>
              <a
                href="https://ojtis-test.puptaguigcs.net/"
                class="text-blue-500 inline-block rounded-full border border-white dark:border-black py-2 px-7 text-base font-medium transition hover:text-blue-800"
                target="_blank"
              >
                Visit site
              </a>
            </div>
          </div>
        </div>
        <div class="w-full px-4 md:w-1/2 xl:w-1/3">
          <div class="mb-10 overflow-hidden rounded-lg bg-dark-primary dark:bg-light-primary">
            <img src="/storage/projects/portfolio.png" alt="image" class="w-full" />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
              <h3>
                <a
                  class="text-white dark:text-black mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                >
                  Portfolio<br />Website
                </a>
              </h3>
              <a
                href="/"
                class="text-blue-500 inline-block rounded-full border border-white dark:border-black py-2 px-7 text-base font-medium transition hover:text-blue-800"
              >
                Visit site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
